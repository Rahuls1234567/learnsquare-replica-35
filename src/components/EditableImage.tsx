"use client";

import React, { useState, useEffect } from "react";
import { useAdmin } from "@/src/context/AdminContext";
import { Camera, Upload, X, Link } from "lucide-react";
import { toast } from "sonner";

interface EditableImageProps {
  /** Unique key used to store/retrieve the image URL from DB */
  contentKey: string;
  /** Fallback image if nothing is saved in DB */
  defaultImage: string;
  /** Alt text for the image */
  alt: string;
  /** CSS class applied to the <img> element */
  className?: string;
}

export function EditableImage({ contentKey, defaultImage, alt, className }: EditableImageProps) {
  const { isAdmin, editMode } = useAdmin();
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [showModal, setShowModal] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Fetch saved image from DB on mount
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(`/api/content/${contentKey}`);
        if (res.ok) {
          const data = await res.json();
          // htmlContent stores the raw image path (plain text, no HTML)
          if (data.htmlContent && data.htmlContent.trim()) {
            setImageSrc(data.htmlContent.trim());
          }
        }
      } catch {
        // silently use default
      }
    };
    fetchImage();
  }, [contentKey]);

  const saveImageUrl = async (url: string) => {
    try {
      const res = await fetch("/api/admin/content/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          content_key: contentKey,
          html_content: url,
          page_name: "about",
        }),
      });
      if (res.ok) {
        setImageSrc(url);
        setShowModal(false);
        setUrlInput("");
        toast.success("Photo updated successfully!");
      } else {
        toast.error("Failed to save photo.");
      }
    } catch {
      toast.error("An error occurred while saving.");
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file.");
      return;
    }
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    form.append("subfolder", "about");
    try {
      const res = await fetch("/api/admin/images", { method: "POST", body: form });
      const data = await res.json();
      if (data.url) {
        await saveImageUrl(data.url);
      } else {
        toast.error(data.error || "Upload failed.");
      }
    } catch {
      toast.error("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]);
  };

  return (
    <>
      {/* Image with admin overlay */}
      <div className="relative group/img w-full h-full">
        <img
          src={imageSrc}
          alt={alt}
          className={className}
        />
        {isAdmin && editMode && (
          <button
            onClick={() => {
              setUrlInput(imageSrc);
              setShowModal(true);
            }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 cursor-pointer z-10"
            title="Change Photo"
          >
            <Camera className="w-8 h-8 text-white mb-2 drop-shadow-lg" />
            <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-lg">
              Change Photo
            </span>
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-7 pt-7 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-800">Change Team Photo</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Body */}
            <div className="px-7 py-6 space-y-5">
              {/* Current preview */}
              <div className="w-full h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={imageSrc}
                  alt="Current"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Drag & Drop Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Upload New Photo
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative h-24 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    dragActive
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50/50"
                  }`}
                >
                  <Upload className={`w-5 h-5 mb-1 ${dragActive ? "text-indigo-500" : "text-slate-400"}`} />
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {uploading ? "Uploading…" : dragActive ? "Drop here" : "Click or drag & drop"}
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploading}
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              {/* Or paste URL */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <span className="inline-flex items-center gap-1">
                    <Link className="w-3 h-3" /> Or Paste Image URL
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://... or /images/..."
                    className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm bg-white placeholder:text-slate-400"
                  />
                  <button
                    onClick={() => urlInput.trim() && saveImageUrl(urlInput.trim())}
                    disabled={!urlInput.trim() || uploading}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-colors disabled:opacity-40"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-7 pb-7">
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
