"use client";

import { useRef, useState } from "react";
import { ArrowUp, ArrowDown, Trash2, Upload, Plus, ImageIcon, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { DEFAULT_PARTNERS, type Partner } from "@/lib/partners";

export const newPartnerId = () => `p-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

interface PartnerLogosEditorProps {
    partners: Partner[];
    onChange: (next: Partner[]) => void;
    /** "light" for the admin page, "dark" for the live-edit dialog. */
    theme?: "light" | "dark";
}

/**
 * Shared add/rename/reorder/delete UI for Client Partnership logos.
 * Used by both /admin/client-partnerships and the homepage Live Edit dialog.
 */
export const PartnerLogosEditor = ({ partners, onChange, theme = "light" }: PartnerLogosEditorProps) => {
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dark = theme === "dark";

    const card = dark
        ? "bg-white/5 border-white/10"
        : "bg-white border-slate-200 shadow-sm";
    const input = dark
        ? "bg-black/30 border-white/10 text-white placeholder:text-slate-500 focus:ring-indigo-500/40 focus:border-indigo-400"
        : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-indigo-200 focus:border-indigo-400";
    const iconBtn = dark
        ? "text-slate-400 hover:bg-white/10"
        : "text-slate-500 hover:bg-slate-100";
    const thumb = dark ? "bg-white/90 border-white/10" : "bg-slate-50 border-slate-200";

    const handleUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        const added: Partner[] = [];
        try {
            for (const file of Array.from(files)) {
                const form = new FormData();
                form.append("file", file);
                form.append("subfolder", "partners");
                const res = await fetch("/api/admin/images", {
                    method: "POST",
                    body: form,
                    credentials: "include",
                });
                if (!res.ok) {
                    const err = await res.json().catch(() => ({}));
                    toast.error(err.error || `Failed to upload ${file.name}`);
                    continue;
                }
                const data = await res.json();
                added.push({
                    id: newPartnerId(),
                    src: data.url,
                    name: file.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " "),
                });
            }
            if (added.length) {
                onChange([...partners, ...added]);
                toast.success(`${added.length} logo${added.length > 1 ? "s" : ""} added`);
            }
        } finally {
            setUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const move = (index: number, dir: -1 | 1) => {
        const target = index + dir;
        if (target < 0 || target >= partners.length) return;
        const next = [...partners];
        [next[index], next[target]] = [next[target], next[index]];
        onChange(next);
    };

    const patch = (index: number, field: "name" | "src", value: string) => {
        const next = [...partners];
        next[index] = { ...next[index], [field]: value };
        onChange(next);
    };

    return (
        <div className="space-y-4">
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) => handleUpload(e.target.files)}
            />

            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold disabled:opacity-50 transition-colors"
                >
                    <Upload className="w-4 h-4" />
                    {uploading ? "Uploading..." : "Upload Logos"}
                </button>
                <button
                    type="button"
                    onClick={() => onChange([...partners, { id: newPartnerId(), src: "", name: "" }])}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        dark ? "bg-white/10 hover:bg-white/20 text-white" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                >
                    <Plus className="w-4 h-4" />
                    Add by URL
                </button>
                <button
                    type="button"
                    onClick={() => onChange(DEFAULT_PARTNERS.map((p) => ({ ...p, id: newPartnerId() })))}
                    title="Restore the original seed list"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        dark ? "bg-white/5 hover:bg-white/10 text-slate-300" : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                    }`}
                >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                </button>
            </div>

            {partners.length === 0 ? (
                <div
                    className={`rounded-xl border-2 border-dashed p-12 text-center ${
                        dark ? "border-white/10" : "border-slate-200 bg-white"
                    }`}
                >
                    <ImageIcon className={`w-8 h-8 mx-auto mb-2 ${dark ? "text-slate-600" : "text-slate-300"}`} />
                    <p className={`font-medium ${dark ? "text-slate-400" : "text-slate-500"}`}>No partner logos yet</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {partners.map((p, i) => (
                        <div key={p.id} className={`rounded-xl border p-3 flex items-center gap-3 ${card}`}>
                            <span className={`font-mono text-xs font-bold w-5 shrink-0 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                                {i + 1}
                            </span>

                            <div className={`w-14 h-14 shrink-0 rounded-lg border flex items-center justify-center overflow-hidden ${thumb}`}>
                                {p.src ? (
                                    <img src={p.src} alt={p.name} className="max-w-[80%] max-h-[80%] object-contain" />
                                ) : (
                                    <ImageIcon className="w-5 h-5 text-slate-400" />
                                )}
                            </div>

                            <div className="flex-1 min-w-0 grid gap-2 sm:grid-cols-2">
                                <input
                                    value={p.name}
                                    onChange={(e) => patch(i, "name", e.target.value)}
                                    placeholder="Institution name"
                                    className={`w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 ${input}`}
                                />
                                <input
                                    value={p.src}
                                    onChange={(e) => patch(i, "src", e.target.value)}
                                    placeholder="/images/logo-1.png"
                                    className={`w-full px-3 py-2 rounded-lg border font-mono text-xs focus:outline-none focus:ring-2 ${input}`}
                                />
                            </div>

                            <div className="flex items-center gap-0.5 shrink-0">
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
                                    disabled={i === partners.length - 1}
                                    className={`p-2 rounded-lg disabled:opacity-30 ${iconBtn}`}
                                    aria-label="Move down"
                                >
                                    <ArrowDown className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onChange(partners.filter((_, idx) => idx !== i))}
                                    className="p-2 rounded-lg text-red-500 hover:bg-red-500/10"
                                    aria-label="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
