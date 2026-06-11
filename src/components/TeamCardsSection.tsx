"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Edit3, Camera, X } from "lucide-react";
import { useAdmin } from "@/src/context/AdminContext";
import { toast } from "sonner";

interface TeamCard {
  id: number;
  image: string;
  name: string;
  designation: string;
}

const defaultCards: TeamCard[] = [
  { id: 1, image: "/images/homeimage/sandeep bandari.jpg", name: "Sandeep Bandari", designation: "Founder & CEO" },
  { id: 2, image: "/alekya mam.jpeg", name: "Alekya Avula", designation: "Co-Founder & Director" },
  { id: 3, image: "/sir.jpeg", name: "Gopinath Puralachetty", designation: "Chief Marketing Officer" },
];

const emptyForm: TeamCard = { id: 0, image: "", name: "", designation: "" };

export default function TeamCardsSection() {
  const { isAdmin, editMode } = useAdmin();
  const [cards, setCards] = useState<TeamCard[]>(defaultCards);
  const [loaded, setLoaded] = useState(false);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingCard, setEditingCard] = useState<TeamCard | null>(null);
  const [formData, setFormData] = useState<TeamCard>(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  // Fetch cards from DB
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/team-cards");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.cards) && data.cards.length > 0) {
            setCards(data.cards);
          }
        }
      } catch (e) {
        // Use defaults silently
      } finally {
        setLoaded(true);
      }
    };
    fetchCards();
  }, []);

  const saveCards = async (newList: TeamCard[]) => {
    try {
      const res = await fetch("/api/admin/team-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cards: newList }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Save failed");
      }
      setCards(newList);
      toast.success("Team cards saved successfully!");
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Failed to save cards";
      toast.error(msg);
    }
  };

  const openAdd = () => {
    setEditingCard(null);
    setFormData(emptyForm);
    setShowModal(true);
  };

  const openEdit = (card: TeamCard) => {
    setEditingCard(card);
    setFormData({ ...card });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!formData.designation.trim()) {
      toast.error("Designation is required");
      return;
    }
    const newList = editingCard
      ? cards.map((c) => (c.id === formData.id ? formData : c))
      : [...cards, { ...formData, id: Date.now() }];
    saveCards(newList);
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    if (!confirm("Delete this team card? This cannot be undone.")) return;
    saveCards(cards.filter((c) => c.id !== id));
  };

  // Image upload handlers
  const handleImageFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file");
      return;
    }
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    form.append("subfolder", "team");
    try {
      const res = await fetch("/api/admin/images", { method: "POST", body: form });
      const data = await res.json();
      if (data.url) {
        setFormData((prev) => ({ ...prev, image: data.url }));
        toast.success("Photo uploaded!");
      } else {
        toast.error(data.error || "Upload failed");
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
    if (e.dataTransfer.files?.[0]) handleImageFile(e.dataTransfer.files[0]);
  };

  if (!loaded) return null;

  return (
    <section className="container relative z-10 mx-auto px-4 md:px-6 pb-24 mt-16">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-4"
        >
          Our Team
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-black text-slate-800"
        >
          Meet the People Behind LearnSquare
        </motion.h2>
      </div>

      {/* Add Card Button (Admin only) */}
      {isAdmin && editMode && (
        <div className="flex justify-center mb-8">
          <button
            onClick={openAdd}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Team Card
          </button>
        </div>
      )}

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        <AnimatePresence>
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.07 }}
              className="relative group w-56 bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col items-center text-center"
            >
              {/* Admin Action Buttons */}
              {isAdmin && editMode && (
                <div className="absolute -top-3 -right-3 flex gap-1.5 z-20">
                  <button
                    onClick={() => openEdit(card)}
                    className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:scale-110 active:scale-95"
                    title="Edit Card"
                  >
                    <Edit3 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => handleDelete(card.id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-lg hover:scale-110 active:scale-95"
                    title="Delete Card"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-black text-2xl">
                    {card.name ? card.name.charAt(0).toUpperCase() : "?"}
                  </div>
                )}
              </div>

              {/* Name */}
              <h4 className="text-base font-black text-slate-800 leading-tight mb-1">
                {card.name}
              </h4>

              {/* Designation */}
              <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest">
                {card.designation}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Admin Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-7 pt-7 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-800">
                {editingCard ? "Edit Team Card" : "Add Team Card"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-7 py-5 space-y-5">
              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Photo
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative h-36 rounded-2xl border-2 border-dashed transition-colors overflow-hidden flex flex-col items-center justify-center cursor-pointer ${
                    dragActive
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50/50"
                  }`}
                >
                  {formData.image ? (
                    <div className="relative w-full h-full group/img">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-contain p-2"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                        <Camera className="w-5 h-5 text-white" />
                        <span className="text-white text-xs font-bold">Change Photo</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 pointer-events-none">
                      <Camera className={`w-7 h-7 ${dragActive ? "text-indigo-500" : "text-slate-400"}`} />
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center px-4">
                        {uploading ? "Uploading..." : dragActive ? "Drop photo here" : "Click or drag & drop"}
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    disabled={uploading}
                    onChange={(e) => e.target.files?.[0] && handleImageFile(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />
                </div>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData((p) => ({ ...p, image: e.target.value }))}
                  placeholder="Or paste an image URL..."
                  className="mt-2 w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white placeholder:text-slate-400"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm bg-white placeholder:text-slate-400"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Designation *
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData((p) => ({ ...p, designation: e.target.value }))}
                  placeholder="e.g. Lead Engineer"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm bg-white placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 px-7 pb-7 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={uploading}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? "Uploading…" : editingCard ? "Save Changes" : "Add Card"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
