"use client";

import { useRef, useState } from "react";
import { ArrowUp, ArrowDown, X, Camera, Plus, User, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { DEFAULT_TEAM_GRID, type TeamGridMember } from "@/lib/team-grid";

export const newGridId = () => `g-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

interface TeamGridEditorProps {
    team: TeamGridMember[];
    onChange: (next: TeamGridMember[]) => void;
}

/** Admin-portal list editor for the "Our Team" compact card grid. */
export const TeamGridEditor = ({ team, onChange }: TeamGridEditorProps) => {
    const [uploadingId, setUploadingId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const targetRef = useRef<string | null>(null);

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

    const patch = (index: number, field: keyof TeamGridMember, value: string) => {
        const next = [...team];
        next[index] = { ...next[index], [field]: value };
        onChange(next);
    };

    return (
        <div className="space-y-3">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleUpload(e.target.files)}
            />

            {team.map((m, i) => (
                <div key={m.id} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4">
                    <span className="text-slate-400 font-mono text-xs font-bold w-5 shrink-0">{i + 1}</span>

                    <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {m.image ? (
                            <img src={m.image} alt={m.name} className="w-full h-full object-cover object-[center_top]" />
                        ) : (
                            <User className="w-5 h-5 text-slate-300" />
                        )}
                    </div>

                    <div className="flex-1 min-w-0 grid gap-2 sm:grid-cols-2">
                        <input
                            value={m.name}
                            onChange={(e) => patch(i, "name", e.target.value)}
                            placeholder="Full name"
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                        />
                        <input
                            value={m.role}
                            onChange={(e) => patch(i, "role", e.target.value)}
                            placeholder="Designation"
                            className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                        />
                    </div>

                    <div className="flex items-center gap-0.5 shrink-0">
                        <button
                            type="button"
                            onClick={() => {
                                targetRef.current = m.id;
                                fileInputRef.current?.click();
                            }}
                            disabled={uploadingId === m.id}
                            className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 disabled:opacity-50"
                            title="Change photo"
                        >
                            <Camera className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => move(i, -1)}
                            disabled={i === 0}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30"
                            aria-label="Move up"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => move(i, 1)}
                            disabled={i === team.length - 1}
                            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30"
                            aria-label="Move down"
                        >
                            <ArrowDown className="w-4 h-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => onChange(team.filter((_, idx) => idx !== i))}
                            className="p-2 rounded-lg text-red-500 hover:bg-red-50"
                            aria-label="Remove card"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ))}

            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => onChange([...team, { id: newGridId(), name: "", role: "", image: "" }])}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-semibold transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Team Card
                </button>
                <button
                    type="button"
                    onClick={() => onChange(DEFAULT_TEAM_GRID.map((m) => ({ ...m, id: newGridId() })))}
                    title="Restore the original seed cards"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-medium transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                </button>
            </div>
        </div>
    );
};
