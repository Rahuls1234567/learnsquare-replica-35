"use client";

import { useRef, useState } from "react";
import { ArrowUp, ArrowDown, X, Camera, Plus, User, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { DEFAULT_TEAM, type TeamMember } from "@/lib/team";

export const newMemberId = () => `t-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const blankMember = (): TeamMember => ({
    id: newMemberId(),
    name: "",
    role: "",
    education: "",
    contact: "",
    bio: "",
    image: "",
});

interface TeamCardsEditorProps {
    team: TeamMember[];
    onChange: (next: TeamMember[]) => void;
    /** "light" for the admin page, "dark" for the live-edit dialog. */
    theme?: "light" | "dark";
}

/**
 * Shared add/edit/reorder/delete UI for About Us team cards.
 * Used by both /admin/about-teams and the About page Live Edit dialog.
 */
export const TeamCardsEditor = ({ team, onChange, theme = "light" }: TeamCardsEditorProps) => {
    const [uploadingId, setUploadingId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const targetRef = useRef<string | null>(null);
    const dark = theme === "dark";

    const card = dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200";
    const label = dark ? "text-slate-400" : "text-slate-500";
    const input = dark
        ? "bg-black/30 border-white/10 text-white placeholder:text-slate-500 focus:ring-indigo-500/40 focus:border-indigo-400"
        : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-indigo-200 focus:border-indigo-400";
    const iconBtn = dark ? "text-slate-400 hover:bg-white/10" : "text-slate-500 hover:bg-slate-100";

    const pickPhoto = (id: string) => {
        targetRef.current = id;
        fileInputRef.current?.click();
    };

    const handleUpload = async (files: FileList | null) => {
        const id = targetRef.current;
        const file = files?.[0];
        if (!file || !id) return;

        setUploadingId(id);
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
            onChange(team.map((m) => (m.id === id ? { ...m, image: data.url } : m)));
            toast.success("Photo updated");
        } finally {
            setUploadingId(null);
            targetRef.current = null;
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const move = (index: number, dir: -1 | 1) => {
        const target = index + dir;
        if (target < 0 || target >= team.length) return;
        const next = [...team];
        [next[index], next[target]] = [next[target], next[index]];
        onChange(next);
    };

    const patch = (index: number, field: keyof TeamMember, value: string) => {
        const next = [...team];
        next[index] = { ...next[index], [field]: value };
        onChange(next);
    };

    return (
        <div className="space-y-4">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleUpload(e.target.files)}
            />

            {team.map((m, i) => (
                <div key={m.id} className={`rounded-2xl border p-5 relative ${card}`}>
                    <div className="absolute top-3 right-3 flex items-center gap-0.5">
                        <button
                            type="button"
                            onClick={() => move(i, -1)}
                            disabled={i === 0}
                            className={`p-2 rounded-lg disabled:opacity-30 ${iconBtn}`}
                            aria-label="Move up"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => move(i, 1)}
                            disabled={i === team.length - 1}
                            className={`p-2 rounded-lg disabled:opacity-30 ${iconBtn}`}
                            aria-label="Move down"
                        >
                            <ArrowDown className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => onChange(team.filter((_, idx) => idx !== i))}
                            className="p-2 rounded-lg text-red-500 hover:bg-red-500/10"
                            aria-label="Remove card"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Photo */}
                    <div className="flex items-center gap-4 mb-5">
                        <div
                            className={`w-24 h-24 shrink-0 rounded-xl overflow-hidden border flex items-center justify-center ${
                                dark ? "bg-black/30 border-white/10" : "bg-slate-50 border-slate-200"
                            }`}
                        >
                            {m.image ? (
                                <img src={m.image} alt={m.name} className="w-full h-full object-cover object-[center_top]" />
                            ) : (
                                <User className={`w-7 h-7 ${dark ? "text-slate-600" : "text-slate-300"}`} />
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={() => pickPhoto(m.id)}
                            disabled={uploadingId === m.id}
                            className="flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-indigo-400 disabled:opacity-50"
                        >
                            <Camera className="w-4 h-4" />
                            {uploadingId === m.id ? "Uploading..." : "Change Photo"}
                        </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className={`block text-xs font-medium mb-1.5 ${label}`}>Name</label>
                            <input
                                value={m.name}
                                onChange={(e) => patch(i, "name", e.target.value)}
                                placeholder="Full name"
                                className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${input}`}
                            />
                        </div>
                        <div>
                            <label className={`block text-xs font-medium mb-1.5 ${label}`}>Designation</label>
                            <input
                                value={m.role}
                                onChange={(e) => patch(i, "role", e.target.value)}
                                placeholder="Founder & CEO"
                                className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${input}`}
                            />
                        </div>
                        <div>
                            <label className={`block text-xs font-medium mb-1.5 ${label}`}>Education</label>
                            <input
                                value={m.education}
                                onChange={(e) => patch(i, "education", e.target.value)}
                                placeholder="M.TECH - JNTUH"
                                className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${input}`}
                            />
                        </div>
                        <div>
                            <label className={`block text-xs font-medium mb-1.5 ${label}`}>Contact (optional)</label>
                            <input
                                value={m.contact}
                                onChange={(e) => patch(i, "contact", e.target.value)}
                                placeholder="988 555 2350 | name@learnsquare.co"
                                className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 ${input}`}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className={`block text-xs font-medium mb-1.5 ${label}`}>Bio</label>
                            <textarea
                                value={m.bio}
                                onChange={(e) => patch(i, "bio", e.target.value)}
                                rows={4}
                                placeholder="Short professional biography..."
                                className={`w-full px-3 py-2.5 rounded-lg border text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 ${input}`}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => onChange([...team, blankMember()])}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        dark ? "bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300" : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
                    }`}
                >
                    <Plus className="w-4 h-4" />
                    Add Card
                </button>
                <button
                    type="button"
                    onClick={() => onChange(DEFAULT_TEAM.map((m) => ({ ...m, id: newMemberId() })))}
                    title="Restore the original seed team"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        dark ? "bg-white/5 hover:bg-white/10 text-slate-300" : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                    }`}
                >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                </button>
            </div>
        </div>
    );
};
