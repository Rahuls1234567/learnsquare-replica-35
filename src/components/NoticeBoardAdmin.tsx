"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2, Edit, Save, ToggleLeft, ToggleRight, ImageIcon } from "lucide-react";

type Notice = {
    id: number;
    title: string;
    content: string;
    image: string | null;
    isActive: boolean;
    startDate: string;
    endDate: string;
};

export default function NoticeBoardAdmin({ onClose }: { onClose: () => void }) {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
    const [isCreating, setIsCreating] = useState(false);

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
            const res = await fetch("/api/notices?admin=true");
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

    const handleSave = async () => {
        try {
            const url = editingNotice ? `/api/notices/${editingNotice.id}` : "/api/notices";
            const method = editingNotice ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    image: formData.image || null,
                }),
            });

            if (res.ok) {
                fetchNotices();
                setIsCreating(false);
                setEditingNotice(null);
            } else {
                alert("Failed to save notice.");
            }
        } catch (error) {
            console.error("Failed to save notice:", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this notice?")) return;
        try {
            const res = await fetch(`/api/notices/${id}`, { method: "DELETE" });
            if (res.ok) {
                fetchNotices();
            }
        } catch (error) {
            console.error("Failed to delete notice:", error);
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

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                    <h2 className="text-lg font-bold text-slate-800">Notice Board Management</h2>
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
                                        onClick={() => { setIsCreating(false); setEditingNotice(null); }}
                                        className="px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                                    >
                                        <Save className="w-4 h-4" /> Save Notice
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
                                            <ImageIcon className="w-4 h-4" /> Image URL (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.image}
                                            onChange={e => setFormData({ ...formData, image: e.target.value })}
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                            placeholder="https://example.com/image.jpg"
                                        />
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
                            <div className="flex justify-end mb-6">
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {notices.map(notice => (
                                        <div key={notice.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all group">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="font-bold text-slate-800 line-clamp-1">{notice.title}</h3>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => openEdit(notice)} className="p-1.5 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors"><Edit className="w-4 h-4" /></button>
                                                    <button onClick={() => handleDelete(notice.id)} className="p-1.5 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-md transition-colors"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-3">
                                                <span className={`px-2 py-0.5 rounded-full ${notice.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                                                    {notice.isActive ? "Active" : "Inactive"}
                                                </span>
                                                <span>{new Date(notice.startDate).toLocaleDateString()} - {new Date(notice.endDate).toLocaleDateString()}</span>
                                            </div>
                                            <p className="text-sm text-slate-600 line-clamp-2">{notice.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
