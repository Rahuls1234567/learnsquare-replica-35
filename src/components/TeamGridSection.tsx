"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Camera, User, Save } from "lucide-react";
import { toast } from "sonner";
import { useAdmin } from "@/src/context/AdminContext";
import { DEFAULT_TEAM_GRID, type TeamGridMember } from "@/lib/team-grid";
import { EditableContent } from "./EditableContent";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";

const newId = () => `g-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

/**
 * "Our Team" compact card grid with inline admin controls.
 * Backed by /api/team-grid — separate from the large leadership profiles.
 */
const TeamGridSection = () => {
    const { isAdmin, editMode } = useAdmin();
    const [team, setTeam] = useState<TeamGridMember[]>(DEFAULT_TEAM_GRID);
    const [editing, setEditing] = useState<TeamGridMember | null>(null);
    const [isNew, setIsNew] = useState(false);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const canEdit = isAdmin && editMode;

    useEffect(() => {
        let cancelled = false;
        fetch("/api/team-grid")
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (!cancelled && Array.isArray(data)) setTeam(data);
            })
            .catch(() => {
                /* keep the seed list on failure */
            });
        return () => {
            cancelled = true;
        };
    }, []);

    /** Persist a full list and update local state on success. */
    const persist = async (next: TeamGridMember[], successMsg: string) => {
        const res = await fetch("/api/admin/team-grid", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ team: next }),
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            toast.error(err.error || "Failed to save.");
            return false;
        }
        const data = await res.json();
        setTeam(data.team ?? next);
        toast.success(successMsg);
        return true;
    };

    const handleUpload = async (files: FileList | null) => {
        const file = files?.[0];
        if (!file || !editing) return;
        setUploading(true);
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("subfolder", "team");
            const res = await fetch("/api/admin/images", {
                method: "POST",
                body: form,
                credentials: "include",
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                toast.error(err.error || `Failed to upload ${file.name}`);
                return;
            }
            const data = await res.json();
            setEditing({ ...editing, image: data.url });
        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const saveCard = async () => {
        if (!editing) return;
        if (!editing.name.trim()) {
            toast.error("Name is required.");
            return;
        }
        setSaving(true);
        try {
            const next = isNew
                ? [...team, editing]
                : team.map((m) => (m.id === editing.id ? editing : m));
            const ok = await persist(next, isNew ? "Team card added!" : "Team card updated!");
            if (ok) setEditing(null);
        } catch {
            toast.error("An error occurred while saving.");
        } finally {
            setSaving(false);
        }
    };

    const deleteCard = async (member: TeamGridMember) => {
        if (!window.confirm(`Remove ${member.name || "this card"} from the team grid?`)) return;
        try {
            await persist(
                team.filter((m) => m.id !== member.id),
                "Team card removed."
            );
        } catch {
            toast.error("An error occurred while deleting.");
        }
    };

    // Hide the whole section on the public site when there's nothing to show.
    if (team.length === 0 && !canEdit) return null;

    return (
        <section className="relative z-10 py-20 md:py-24 overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-100/30 blur-3xl" />

            <div className="container relative px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-14">
                    <span className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary font-extrabold text-xs tracking-[0.2em] uppercase mb-6">
                        Our Team
                    </span>

                    <EditableContent
                        contentKey="about_team_grid_heading"
                        description="Our Team Grid Heading"
                        defaultContent={
                            <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] tracking-tight">
                                Meet the People Behind LearnSquare
                            </h2>
                        }
                    />

                    <div className="mt-5 w-16 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

                    {canEdit && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsNew(true);
                                setEditing({ id: newId(), name: "", role: "", image: "" });
                            }}
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
                        >
                            <Plus className="w-4 h-4" />
                            Add Team Card
                        </button>
                    )}
                </div>

                {team.length === 0 ? (
                    <p className="text-center text-slate-400 font-medium">
                        No team cards yet — use “Add Team Card” to create one.
                    </p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 max-w-6xl mx-auto">
                        {team.map((m, idx) => (
                            <motion.div
                                key={m.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: Math.min(idx * 0.06, 0.4), duration: 0.5 }}
                                className="relative group"
                            >
                                {canEdit && (
                                    <div className="absolute -top-3 right-2 z-20 flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsNew(false);
                                                setEditing({ ...m });
                                            }}
                                            className="w-9 h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                                            title={`Edit ${m.name}`}
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => deleteCard(m)}
                                            className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                                            title={`Remove ${m.name}`}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}

                                <div className="relative h-full bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-12px_rgba(30,41,59,0.15)] px-4 pt-8 pb-7 flex flex-col items-center text-center overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-indigo-200 group-hover:shadow-[0_18px_45px_-12px_rgba(79,70,229,0.28)]">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full overflow-hidden ring-4 ring-indigo-100 group-hover:ring-indigo-300 transition-colors duration-300 mb-4 bg-slate-100 flex items-center justify-center shrink-0">
                                        {m.image ? (
                                            <img
                                                src={m.image}
                                                alt={m.name}
                                                className="w-full h-full object-cover object-[center_top]"
                                            />
                                        ) : (
                                            <User className="w-9 h-9 text-slate-300" />
                                        )}
                                    </div>
                                    <h3 className="text-base xl:text-lg font-black text-[#1e293b] leading-snug break-words">{m.name}</h3>
                                    {m.role && (
                                        <>
                                            <div className="mt-2 w-8 h-0.5 rounded-full bg-indigo-100 group-hover:bg-indigo-300 transition-colors duration-300" />
                                            <p className="mt-2 text-primary font-bold text-[11px] xl:text-xs uppercase tracking-wider leading-relaxed">
                                                {m.role}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Add / edit dialog */}
            {canEdit && (
                <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
                    <DialogContent className="sm:max-w-[480px] bg-[#171523] border-white/10 text-white">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold flex items-center gap-2">
                                {isNew ? <Plus className="w-5 h-5 text-indigo-400" /> : <Pencil className="w-5 h-5 text-indigo-400" />}
                                {isNew ? "Add Team Card" : "Edit Team Card"}
                            </DialogTitle>
                        </DialogHeader>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={(e) => handleUpload(e.target.files)}
                        />

                        {editing && (
                            <div className="py-4 space-y-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 rounded-full overflow-hidden bg-black/30 border border-white/10 flex items-center justify-center shrink-0">
                                        {editing.image ? (
                                            <img
                                                src={editing.image}
                                                alt={editing.name}
                                                className="w-full h-full object-cover object-[center_top]"
                                            />
                                        ) : (
                                            <User className="w-7 h-7 text-slate-600" />
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        disabled={uploading}
                                        className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 disabled:opacity-50"
                                    >
                                        <Camera className="w-4 h-4" />
                                        {uploading ? "Uploading..." : editing.image ? "Change Photo" : "Upload Photo"}
                                    </button>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                                    <input
                                        value={editing.name}
                                        onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                                        placeholder="Full name"
                                        className="w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Designation</label>
                                    <input
                                        value={editing.role}
                                        onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                                        placeholder="Chief Marketing Officer"
                                        className="w-full px-3 py-2.5 rounded-lg bg-black/30 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400"
                                    />
                                </div>
                            </div>
                        )}

                        <DialogFooter className="gap-2">
                            <Button
                                variant="ghost"
                                onClick={() => setEditing(null)}
                                className="text-slate-400 hover:text-white hover:bg-white/5"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={saveCard}
                                disabled={saving}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                {saving ? "Saving..." : isNew ? "Add Card" : "Save Changes"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
};

export default TeamGridSection;
