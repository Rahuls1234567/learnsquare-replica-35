"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Camera, Plus, Trash2, Save, X, Upload } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";

interface Collaboration {
  image: string;
  title: string;
}

interface FormState {
  images: string[];
  title: string;
}

export default function ClientPartnershipsAdmin() {
  const [list, setList] = useState<Collaboration[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormState>({ images: [], title: "" });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Editing state
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Load existing collaborations
  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch("/api/content/client_partnerships_json");
        if (res.ok) {
          const data = await res.json();
          if (data.htmlContent) {
            const arr = JSON.parse(data.htmlContent);
            setList(Array.isArray(arr) ? arr : []);
          }
        }
      } catch (e) {
        toast.error("Failed to load collaborations");
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  // Upload images using native file input
  const uploadImages = async (files: FileList | File[]) => {
    const validFiles = Array.from(files).filter(f => f.type.startsWith("image/"));
    if (validFiles.length === 0) {
      toast.error("Please select valid image files");
      return;
    }

    setUploading(true);
    const uploadedUrls: string[] = [];

    for (const file of validFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("subfolder", "collabs");
      try {
        const res = await fetch("/api/admin/images", { method: "POST", body: formData });
        const data = await res.json();
        if (data.url) {
          uploadedUrls.push(data.url);
        } else {
          toast.error(data.error || `Upload failed for ${file.name}`);
        }
      } catch {
        toast.error(`Upload error for ${file.name}`);
      }
    }

    if (uploadedUrls.length > 0) {
      // If editing, we replace the image. If adding, we append to the list of images.
      setForm((prev) => ({ 
        ...prev, 
        images: editIndex !== null ? [uploadedUrls[0]] : [...prev.images, ...uploadedUrls] 
      }));
      toast.success(`${uploadedUrls.length} image(s) uploaded!`);
    }
    setUploading(false);
  };

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      uploadImages(e.dataTransfer.files);
    }
  };

  const saveAll = async (newList?: Collaboration[]) => {
    const toSave = newList ?? list;
    setSaving(true);
    try {
      await fetch("/api/admin/content/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content_key: "client_partnerships_json",
          html_content: JSON.stringify(toSave),
        }),
      });
      if (newList) setList(toSave);
      toast.success("Client partnerships saved!");
    } catch {
      toast.error("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const openAddModal = () => {
    setEditIndex(null);
    setForm({ images: [], title: "" });
    setShowModal(true);
  };

  const openEditModal = (idx: number) => {
    setEditIndex(idx);
    setForm({ images: [list[idx].image], title: list[idx].title });
    setShowModal(true);
  };

  const confirmSave = () => {
    if (editIndex !== null) {
      // Edit mode
      const updated = list.map((item, i) => (i === editIndex ? { image: form.images[0] || "", title: form.title } : item));
      setList(updated);
      saveAll(updated);
    } else {
      // Add mode - creates an entry for EACH uploaded image
      const newItems = form.images.map(img => ({ image: img, title: form.title }));
      const updated = [...list, ...newItems];
      setList(updated);
      saveAll(updated);
    }
    setShowModal(false);
  };

  const deleteItem = (idx: number) => {
    if (!confirm("Delete this partnership?")) return;
    const newList = list.filter((_, i) => i !== idx);
    setList(newList);
    saveAll(newList);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 my-8 max-w-6xl mx-auto">
        <p className="text-slate-600">Loading partnerships…</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 my-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Manage Client Partnerships</h2>
        <span className="text-sm text-slate-400">{list.length} partnership{list.length !== 1 ? "s" : ""}</span>
      </div>

      {list.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl">
          <Upload className="w-10 h-10 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 font-medium mb-2">No partnerships yet</p>
          <p className="text-sm text-slate-400">Click the button below to add your first partnership</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((item, i) => (
            <div key={i} className="relative border border-slate-200 rounded-2xl p-4 overflow-hidden group hover:shadow-md transition-shadow">
              {/* Action buttons */}
              <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                  onClick={() => openEditModal(i)}
                  className="p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                  title="Edit"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => deleteItem(i)}
                  className="p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 mb-3 p-4 flex items-center justify-center">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <p className="text-xs font-semibold text-slate-700 line-clamp-2 text-center">{item.title || "No Title"}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <Button onClick={openAddModal} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-6">
          <Plus className="w-4 h-4 mr-2" /> Add Partnership(s)
        </Button>
      </div>

      {/* Add / Edit Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-white text-slate-950 max-w-xl rounded-[2rem] border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black">
              {editIndex !== null ? "Edit Partnership" : "Add Client Partnership(s)"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Image upload area */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase">
                {editIndex !== null ? "Upload Image" : "Upload Image(s)"}
              </label>
              <div
                className={`relative ${dragActive ? "scale-[1.02]" : ""} transition-transform duration-200`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div
                  className={`w-full min-h-[160px] rounded-2xl bg-slate-50 border-2 border-dashed ${
                    dragActive ? "border-indigo-500 bg-indigo-50/50" : "border-slate-200"
                  } flex flex-col items-center justify-center overflow-hidden transition-colors p-4`}
                >
                  {form.images.length > 0 ? (
                    <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-3 relative z-20">
                      {form.images.map((img, idx) => (
                        <div key={idx} className="relative group rounded-xl bg-white border border-slate-200 aspect-square flex items-center justify-center p-2">
                          <img src={img} className="max-w-full max-h-full object-contain" />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setForm(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      {/* Add More Button */}
                      {editIndex === null && (
                        <label className="relative rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-indigo-600 transition-colors aspect-square cursor-pointer group">
                          <Plus className="w-6 h-6 group-hover:scale-110 transition-transform" />
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.length) uploadImages(e.target.files);
                            }}
                          />
                        </label>
                      )}
                    </div>
                  ) : (
                    <>
                      <div
                        className={`p-4 rounded-full ${
                          dragActive ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-400"
                        } mb-2 transition-colors`}
                      >
                        <Camera className="w-8 h-8" />
                      </div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                        {uploading ? "Uploading…" : dragActive ? "Drop to Upload" : `Click or Drag to Upload ${editIndex !== null ? '' : 'Multiple'}`}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">JPG, PNG or SVG. Max 2MB.</p>
                      <label className="absolute inset-0 cursor-pointer z-10">
                        <input
                          type="file"
                          accept="image/*"
                          multiple={editIndex === null}
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.length) uploadImages(e.target.files);
                          }}
                        />
                      </label>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Title input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase">
                {form.images.length > 1 ? "Title (applied to all)" : "Title / MoU Info"}
              </label>
              <Input
                value={form.title}
                onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="e.g. MoU with GPREC (Optional)"
                className="rounded-xl"
              />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button variant="ghost" onClick={() => setShowModal(false)} className="rounded-xl">
              Cancel
            </Button>
            <Button
              onClick={confirmSave}
              disabled={form.images.length === 0 || uploading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
            >
              {uploading ? "Uploading…" : editIndex !== null ? "Update" : `Add ${form.images.length} Partnership${form.images.length !== 1 ? 's' : ''}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
