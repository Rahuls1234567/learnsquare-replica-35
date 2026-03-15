"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, ArrowLeft, Plus, Edit2, Trash2, User, MessageSquare, Star, Globe, Save, X, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Review = {
    id: number;
    name: string;
    role: string;
    text: string;
    image?: string;
    rating?: number;
    page: string;
    createdAt: string;
};

export default function AdminReviewsPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [submitting, setSubmitting] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        text: "",
        image: "",
        rating: 5,
        page: "home"
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const auth = typeof document !== "undefined" && (() => {
            const m = document.cookie.match(/auth=([^;]+)/);
            if (!m) return null;
    try {
        const decoded = JSON.parse(atob(m[1]));
        if (decoded?.isAdmin) return decoded;
        return null;
    } catch {
        return null;
    }
})();
        if (!auth || !auth.isAdmin) {
            router.replace("/admin/login");
        } else {
            fetchReviews();
        }
    }, [mounted, router]);

    const fetchReviews = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/reviews");
            if (res.ok) {
                const data = await res.json();
                setReviews(data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Failed to load reviews");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (review?: Review) => {
        if (review) {
            setEditingReview(review);
            setFormData({
                name: review.name,
                role: review.role,
                text: review.text,
                image: review.image || "",
                rating: review.rating || 5,
                page: review.page
            });
        } else {
            setEditingReview(null);
            setFormData({
                name: "",
                role: "",
                text: "",
                image: "",
                rating: 5,
                page: "home"
            });
        }
        setModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this review?")) return;
        try {
            const res = await fetch(`/api/admin/reviews/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Review deleted");
                setReviews(reviews.filter(r => r.id !== id));
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete review");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const url = editingReview ? `/api/admin/reviews/${editingReview.id}` : "/api/admin/reviews";
            const method = editingReview ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                toast.success(editingReview ? "Review updated" : "Review added");
                fetchReviews();
                setModalOpen(false);
            } else {
                const data = await res.json();
                toast.error(data.error || "Failed to save review");
            }
        } catch (error) {
            console.error("Submit error:", error);
            toast.error("An error occurred");
        } finally {
            setSubmitting(false);
        }
    };

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-[#0B0914] text-slate-200 font-sans">
            {/* Header */}
            <header className="bg-[#171523] border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </Link>
                    <div className="hidden sm:block h-6 w-px bg-white/20" />
                    <span className="font-bold text-white">Manage Student Reviews</span>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/20"
                >
                    <Plus className="w-4 h-4" />
                    Add New Review
                </button>
            </header>

            <main className="p-6 max-w-7xl mx-auto">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
                        <p className="text-slate-500">Loading reviews...</p>
                    </div>
                ) : reviews.length === 0 ? (
                    <div className="text-center py-20 bg-[#171523] rounded-3xl border border-white/5 border-dashed">
                        <MessageSquare className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white">No reviews found</h3>
                        <p className="text-slate-500 mt-2">Start by adding your first student testimonial.</p>
                        <button
                            onClick={() => handleOpenModal()}
                            className="mt-6 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all font-bold"
                        >
                            Add Review
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="group bg-[#171523] rounded-3xl border border-white/5 hover:border-indigo-500/30 p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold overflow-hidden">
                                            {review.image ? (
                                                <img src={review.image} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                review.name.charAt(0)
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{review.name}</h4>
                                            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest leading-none">{review.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <button onClick={() => handleOpenModal(review)} className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500/20 text-slate-400 hover:text-indigo-400 transition-colors">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => handleDelete(review.id)} className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                     <div className="flex items-center gap-1 mb-2">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className={`w-3 h-3 ${i < (review.rating || 5) ? "text-amber-400 fill-current" : "text-slate-700"}`} />
                                        ))}
                                        <span className="ml-2 px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-tighter border border-blue-500/20">
                                            {review.page}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed italic">"{review.text}"</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-600 font-medium">
                                    <span>Created {new Date(review.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-[#171523] w-full max-w-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">
                                {editingReview ? "Edit Review" : "Add New Review"}
                            </h3>
                            <button onClick={() => setModalOpen(false)} className="text-slate-500 hover:text-white">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400">Student Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400">Role / Designation</label>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            required
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-indigo-500 transition-colors"
                                            placeholder="III Year CSE Student"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400">Review Text</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-500" />
                                    <textarea
                                        required
                                        value={formData.text}
                                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 min-h-[120px] focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                        placeholder="Write the testimonial here..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400">Section Page</label>
                                    <select
                                        value={formData.page}
                                        onChange={(e) => setFormData({ ...formData, page: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-indigo-500 transition-colors"
                                    >
                                        <option value="home">Home Page</option>
                                        <option value="semester-prep">Semester Prep</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400">Rating (1-5)</label>
                                    <div className="relative">
                                        <Star className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={formData.rating}
                                            onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-indigo-500 transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-1">
                                    <label className="text-sm font-bold text-slate-400">Image URL (Optional)</label>
                                    <input
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="/images/user.png"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="flex-1 py-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/5 transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="flex-1 py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all"
                                >
                                    {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                    {editingReview ? "Update Review" : "Save Review"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
