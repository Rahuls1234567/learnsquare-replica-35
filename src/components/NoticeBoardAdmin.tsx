"use client";

import { useState, useEffect, useRef } from "react";
import { X, Plus, Trash2, Edit, Save, ToggleLeft, ToggleRight, ImageIcon, UploadCloud, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Notice = {
    id: number;
    title: string;
    content: string;
    image: string | null;
    isActive: boolean;
    startDate: string;
    endDate: string;
    createdAt: string;
};

const isCurrentlyLive = (notice: Notice) => {
    const now = new Date();
    return notice.isActive && new Date(notice.startDate) <= now && now <= new Date(notice.endDate);
};

export default function NoticeBoardAdmin({ onClose }: { onClose: () => void }) {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: "",
        isActive: true,
        startDate: "",
        endDate: "",
    });

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/notices?admin=true", { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                setNotices(data);
            }
        } catch (error) {
            console.error("Failed to fetch notices:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageSelect = async (file: File | null) => {
        if (!file) return;
        setUploading(true);
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("subfolder", "notices");
            const res = await fetch("/api/admin/images", {
                method: "POST",
                credentials: "include",
                body: form,
            });
            if (res.ok) {
                const data = await res.json();
                setFormData((prev) => ({ ...prev, image: data.url }));
                toast.success("Image uploaded.");
            } else {
                toast.error("Failed to upload image.");
            }
        } catch {
            toast.error("An error occurred while uploading the image.");
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async () => {
        if (!formData.title.trim() || !formData.content.trim() || !formData.startDate || !formData.endDate) {
            toast.error("Title, content, start date and end date are required.");
            return;
        }
        setSaving(true);
        try {
            const url = editingNotice ? `/api/notices/${editingNotice.id}` : "/api/notices";
            const method = editingNotice ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    ...formData,
                    image: formData.image || null,
                }),
            });

            if (res.ok) {
                await fetchNotices();
                setIsCreating(false);
                setEditingNotice(null);
                toast.success(editingNotice ? "Notice updated." : "Notice created.");
            } else {
                toast.error("Failed to save notice.");
            }
        } catch (error) {
            console.error("Failed to save notice:", error);
            toast.error("An error occurred while saving.");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this notice permanently? This removes it from history too.")) return;
        try {
            const res = await fetch(`/api/notices/${id}`, { method: "DELETE", credentials: "include" });
            if (res.ok) {
                fetchNotices();
                toast.success("Notice deleted.");
            } else {
                toast.error("Failed to delete notice.");
            }
        } catch (error) {
            console.error("Failed to delete notice:", error);
        }
    };

    const handleToggleActive = async (notice: Notice) => {
        try {
            const res = await fetch(`/api/notices/${notice.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ isActive: !notice.isActive }),
            });
            if (res.ok) {
                setNotices((prev) => prev.map((n) => (n.id === notice.id ? { ...n, isActive: !n.isActive } : n)));
            } else {
                toast.error("Failed to update status.");
            }
        } catch {
            toast.error("An error occurred while updating status.");
        }
    };

    const openEdit = (notice: Notice) => {
        setEditingNotice(notice);
        setIsCreating(false);
        setFormData({
            title: notice.title,
            content: notice.content,
            image: notice.image || "",
            isActive: notice.isActive,
            startDate: new Date(notice.startDate).toISOString().split("T")[0],
            endDate: new Date(notice.endDate).toISOString().split("T")[0],
        });
    };

    const openCreate = () => {
        setEditingNotice(null);
        setIsCreating(true);
        setFormData({
            title: "",
            content: "",
            image: "",
            isActive: true,
            startDate: new Date().toISOString().split("T")[0],
            endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // Default 1 week
        });
    };

    const closeForm = () => {
        setIsCreating(false);
        setEditingNotice(null);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Notice Board Management</h2>
                        <p className="text-xs text-slate-500 mt-0.5">Notices within their date range and marked Active show on the homepage. Past notices stay saved here as history.</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-500 hover:bg-slate-200 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {isCreating || editingNotice ? (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {editingNotice ? "Edit Notice" : "Create New Notice"}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={closeForm}
                                        disabled={saving}
                                        className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                        {saving ? "Saving..." : "Save Notice"}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Notice Title</label>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                            placeholder="e.g. System Maintenance"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">Start Date</label>
                                            <input
                                                type="date"
                                                value={formData.startDate}
                                                onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-sm font-semibold text-slate-700 mb-1">End Date</label>
                                            <input
                                                type="date"
                                                value={formData.endDate}
                                                onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1 flex items-center gap-2">
                                            <ImageIcon className="w-4 h-4" /> Notice Image (Optional)
                                        </label>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageSelect(e.target.files?.[0] || null)}
                                        />
                                        {formData.image ? (
                                            <div className="relative group/img rounded-lg overflow-hidden border border-slate-200">
                                                <img src={formData.image} alt="Notice" className="w-full h-40 object-cover" />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className="px-3 py-1.5 text-xs font-bold bg-white rounded-lg text-slate-800 hover:bg-slate-100"
                                                    >
                                                        Replace
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, image: "" })}
                                                        className="px-3 py-1.5 text-xs font-bold bg-rose-600 rounded-lg text-white hover:bg-rose-700"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => fileInputRef.current?.click()}
                                                disabled={uploading}
                                                className="w-full h-32 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 hover:border-indigo-400 hover:text-indigo-600 transition-colors disabled:opacity-50"
                                            >
                                                {uploading ? (
                                                    <>
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                        <span className="text-xs font-semibold">Uploading...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <UploadCloud className="w-6 h-6" />
                                                        <span className="text-xs font-semibold">Click to upload an image</span>
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
                                            className="text-slate-500 hover:text-indigo-600 transition-colors"
                                        >
                                            {formData.isActive ? <ToggleRight className="w-8 h-8 text-indigo-600" /> : <ToggleLeft className="w-8 h-8" />}
                                        </button>
                                        <span className="text-sm font-semibold text-slate-700">Status: {formData.isActive ? "Active" : "Inactive"}</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Notice Content</label>
                                    <div className="bg-slate-50 border border-slate-200 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-all h-64 overflow-hidden">
                                        <textarea
                                            value={formData.content}
                                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                                            className="w-full h-full p-4 bg-transparent outline-none resize-none text-sm"
                                            placeholder="Enter your notice content here..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-sm font-semibold text-slate-500">{notices.length} {notices.length === 1 ? "notice" : "notices"} in history</p>
                                <button
                                    onClick={openCreate}
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition-colors"
                                >
                                    <Plus className="w-4 h-4" /> Create Notice
                                </button>
                            </div>

                            {loading ? (
                                <div className="text-center py-12 text-slate-500 font-medium">Loading notices...</div>
                            ) : notices.length === 0 ? (
                                <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 border-dashed">
                                    <p className="text-slate-500 font-medium mb-2">No notices found.</p>
                                    <button onClick={openCreate} className="text-indigo-600 font-bold hover:underline text-sm">Create the first notice</button>
                                </div>
                            ) : (
                                <div className="overflow-x-auto rounded-xl border border-slate-200">
                                    <table className="w-full text-sm min-w-[720px]">
                                        <thead>
                                            <tr className="bg-slate-100">
                                                <th className="px-4 py-3 text-left font-bold text-slate-600 text-xs uppercase tracking-wider border-b-2 border-slate-200 w-16">Image</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-600 text-xs uppercase tracking-wider border-b-2 border-slate-200">Title</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-600 text-xs uppercase tracking-wider border-b-2 border-slate-200">Content</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-600 text-xs uppercase tracking-wider border-b-2 border-slate-200 whitespace-nowrap">Live Window</th>
                                                <th className="px-4 py-3 text-left font-bold text-slate-600 text-xs uppercase tracking-wider border-b-2 border-slate-200">Status</th>
                                                <th className="px-4 py-3 text-right font-bold text-slate-600 text-xs uppercase tracking-wider border-b-2 border-slate-200">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {notices.map((notice, i) => {
                                                const live = isCurrentlyLive(notice);
                                                return (
                                                    <tr key={notice.id} className={`border-b border-slate-100 hover:bg-indigo-50/40 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                                                        <td className="px-4 py-3">
                                                            {notice.image ? (
                                                                <img src={notice.image} alt="" className="w-12 h-12 rounded-lg object-cover border border-slate-200" />
                                                            ) : (
                                                                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-300 border border-slate-200">
                                                                    <ImageIcon className="w-5 h-5" />
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="px-4 py-3 max-w-[160px] truncate font-semibold text-slate-800" title={notice.title}>{notice.title}</td>
                                                        <td className="px-4 py-3 max-w-[260px] truncate text-slate-600" title={notice.content}>{notice.content}</td>
                                                        <td className="px-4 py-3 whitespace-nowrap text-slate-500 text-xs">
                                                            {new Date(notice.startDate).toLocaleDateString()} - {new Date(notice.endDate).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex flex-col gap-1">
                                                                <span className={`inline-flex w-fit px-2 py-0.5 rounded-full text-[11px] font-bold ${live ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                                                    {live ? "Live now" : "Not showing"}
                                                                </span>
                                                                <button
                                                                    onClick={() => handleToggleActive(notice)}
                                                                    className={`inline-flex items-center gap-1 text-[11px] font-semibold w-fit ${notice.isActive ? "text-indigo-600" : "text-slate-400"}`}
                                                                >
                                                                    {notice.isActive ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                                                                    {notice.isActive ? "Active" : "Inactive"}
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center justify-end gap-2">
                                                                <button onClick={() => openEdit(notice)} className="p-1.5 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors" aria-label="Edit notice">
                                                                    <Edit className="w-4 h-4" />
                                                                </button>
                                                                <button onClick={() => handleDelete(notice.id)} className="p-1.5 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors" aria-label="Delete notice">
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
