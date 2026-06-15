"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Camera, Upload, X, Plus } from "lucide-react";

interface TeamCard {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export default function TeamCardsAdmin() {
  const [cards, setCards] = useState<TeamCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load existing cards
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/team-cards");
        if (res.ok) {
          const data = await res.json();
          setCards(data.cards ?? []);
        } else {
          toast.error("Failed to load team cards.");
        }
      } catch {
        toast.error("Error fetching team cards.");
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  const handleFieldChange = (id: number, field: keyof Omit<TeamCard, "id">, value: string) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const addCard = () => {
    const newCard: TeamCard = {
      id: Date.now(),
      name: "",
      designation: "",
      image: "/images/default-team.jpg",
    };
    setCards((prev) => [...prev, newCard]);
  };

  const deleteCard = (id: number) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const uploadImage = async (file: File, cardId: number) => {
    const form = new FormData();
    form.append("file", file);
    form.append("subfolder", "about"); // keep same folder as other images
    try {
      const res = await fetch("/api/admin/images", { method: "POST", body: form });
      const data = await res.json();
      if (data.url) {
        handleFieldChange(cardId, "image", data.url);
        toast.success("Image uploaded.");
      } else {
        toast.error(data.error || "Image upload failed.");
      }
    } catch {
      toast.error("Upload failed.");
    }
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/team-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ cards }),
      });
      if (res.ok) {
        toast.success("Team cards saved.");
      } else {
        const err = await res.json();
        toast.error(err.error || "Failed to save.");
      }
    } catch {
      toast.error("Network error while saving.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p className="text-slate-600">Loading team cards…</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 my-8">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Manage Team Cards</h2>
      <div className="space-y-6">
        {cards.map((card) => (
          <div key={card.id} className="border border-slate-200 rounded-lg p-4 relative">
            {/* Delete */}
            <button
              onClick={() => deleteCard(card.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              title="Delete card"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Image preview & upload */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={card.image}
                alt={card.name || "Team"}
                className="w-20 h-20 object-cover rounded-xl border"
              />
              <label className="flex items-center gap-2 cursor-pointer">
                <Camera className="w-5 h-5 text-slate-600" />
                <span className="text-sm text-slate-600">Change Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) uploadImage(e.target.files[0], card.id);
                  }}
                />
              </label>
            </div>
            {/* Text fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Name</label>
                <input
                  type="text"
                  value={card.name}
                  onChange={(e) => handleFieldChange(card.id, "name", e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Designation</label>
                <input
                  type="text"
                  value={card.designation}
                  onChange={(e) => handleFieldChange(card.id, "designation", e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={addCard}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition"
        >
          <Plus className="w-4 h-4" /> Add Card
        </button>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={saveAll}
          disabled={saving}
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
        >
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
