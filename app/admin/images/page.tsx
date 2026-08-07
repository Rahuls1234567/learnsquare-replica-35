"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    LogOut,
    Edit3,
    MessageSquare,
    ImageIcon,
    Upload,
    Trash2,
    Copy,
    Check,
    Search,
    X,
    FolderOpen,
    AlertTriangle,
    RefreshCw,
    ArrowLeft,
    ExternalLink,
} from "lucide-react";

type ImageItem = {
    name: string;
    url: string;
    path: string;
    size: number;
    folder: string;
};

function formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AdminImagesPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [images, setImages] = useState<ImageItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [search, setSearch] = useState("");
    const [selectedFolder, setSelectedFolder] = useState("All");
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const [previewImage, setPreviewImage] = useState<ImageItem | null>(null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const auth = (() => {
            const m = document.cookie.match(/auth=([^;]+)/);
            if (!m) return null;
            try { return JSON.parse(atob(m[1])); } catch { return null; }
        })();
        if (!auth || !auth.isAdmin) {
            router.replace("/login");
        }
    }, [mounted, router]);

    const fetchImages = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/images");
            if (res.ok) {
                const data = await res.json();
                setImages(data);
            }
        } catch {
            setImages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (mounted) fetchImages();
    }, [mounted, fetchImages]);

    const logout = () => {
        document.cookie = "auth=; path=/; max-age=0";
        router.replace("/login");
    };

    const uploadFiles = async (files: FileList | File[]) => {
        setUploadError(null);
        const fileArray = Array.from(files);
        const imageFiles = fileArray.filter(f => f.type.startsWith("image/"));

        if (imageFiles.length === 0) {
            setUploadError("Please select image files only (JPG, PNG, GIF, WebP, SVG).");
            return;
        }

        if (imageFiles.length > 10) {
            setUploadError("Maximum 10 files can be uploaded at once.");
            return;
        }

        setUploading(true);
        setUploadProgress(0);

        const totalFiles = imageFiles.length;
        let uploaded = 0;

        for (const file of imageFiles) {
            if (file.size > 10 * 1024 * 1024) {
                setUploadError(`File "${file.name}" exceeds 10MB limit. Skipped.`);
                continue;
            }

            const formData = new FormData();
            formData.append("file", file);

            try {
                const res = await fetch("/api/admin/images", {
                    method: "POST",
                    body: formData,
                });

                if (!res.ok) {
                    const err = await res.json();
                    setUploadError(err.error || "Upload failed.");
                }
            } catch {
                setUploadError("Network error during upload.");
            }

            uploaded++;
            setUploadProgress(Math.round((uploaded / totalFiles) * 100));
        }

        await fetchImages();
        setUploading(false);
        setUploadProgress(0);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            uploadFiles(e.target.files);
        }
        e.target.value = "";
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files.length > 0) {
            uploadFiles(e.dataTransfer.files);
        }
    };

    const copyUrl = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(null), 2000);
    };

    const deleteImage = async (url: string) => {
        setDeleting(url);
        try {
            const res = await fetch("/api/admin/images", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });
            if (res.ok) {
                setImages(prev => prev.filter(img => img.url !== url));
                if (previewImage?.url === url) setPreviewImage(null);
            } else {
                const err = await res.json();
                alert(err.error || "Failed to delete.");
            }
        } catch {
            alert("Network error.");
        } finally {
            setDeleting(null);
            setDeleteConfirm(null);
        }
    };

    // Unique folders
    const folders = ["All", ...Array.from(new Set(images.map(img => img.folder)))];

    const filtered = images.filter(img => {
        const matchSearch = img.name.toLowerCase().includes(search.toLowerCase()) ||
            img.folder.toLowerCase().includes(search.toLowerCase());
        const matchFolder = selectedFolder === "All" || img.folder === selectedFolder;
        return matchSearch && matchFolder;
    });

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <p className="text-slate-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm sticky top-0 z-40">
                <div className="flex items-center gap-4">
                    <img src="/logo/LEARNSQUARE_LOGO (500x200).png" alt="LEARNSQUARE" className="h-10 object-contain" />
                    <div className="hidden sm:block h-6 w-px bg-slate-200" />
                    <span className="font-bold text-slate-800 flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-indigo-600" />
                        Image Manager
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/admin"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-bold transition-all border border-slate-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/content"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-sm font-bold transition-all border border-indigo-100"
                    >
                        <Edit3 className="w-4 h-4" />
                        Content
                    </Link>
                    <Link
                        href="/admin/reviews"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 text-sm font-bold transition-all border border-purple-100"
                    >
                        <MessageSquare className="w-4 h-4" />
                        Reviews
                    </Link>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </header>

            <main className="p-6 lg:p-8 max-w-7xl mx-auto">
                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Image Manager</h1>
                    <p className="text-slate-500 mt-1">Upload, browse, and manage all website images. Uploads are stored outside <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 text-xs font-mono">/public</code> and tracked in the media library.</p>
                </div>

                {/* Upload Zone */}
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-2xl p-10 mb-8 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                        dragOver
                            ? "border-indigo-500 bg-indigo-50/80 scale-[1.01]"
                            : "border-slate-300 bg-white hover:border-indigo-400 hover:bg-indigo-50/30"
                    }`}
                    onClick={() => !uploading && fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleFileInput}
                    />

                    {uploading ? (
                        <div className="text-center w-full max-w-xs">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                                <Upload className="w-8 h-8 text-indigo-600 animate-bounce" />
                            </div>
                            <p className="text-slate-700 font-bold mb-3">Uploading...</p>
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                <div
                                    className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                                    style={{ width: `${uploadProgress}%` }}
                                />
                            </div>
                            <p className="text-slate-500 text-sm mt-2">{uploadProgress}%</p>
                        </div>
                    ) : (
                        <>
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all ${dragOver ? "bg-indigo-200 scale-110" : "bg-indigo-100"}`}>
                                <Upload className={`w-8 h-8 ${dragOver ? "text-indigo-700" : "text-indigo-600"}`} />
                            </div>
                            <p className="text-slate-700 font-bold text-lg mb-1">
                                {dragOver ? "Drop images here!" : "Click or drag & drop images"}
                            </p>
                            <p className="text-slate-400 text-sm">Supports JPG, PNG, GIF, WebP, SVG, AVIF • Max 10MB per file • Up to 10 files at once</p>
                            <p className="mt-3 text-xs text-slate-400 font-semibold uppercase tracking-wider">Images are stored in the media library, not <span className="text-indigo-500">/public</span></p>
                        </>
                    )}
                </div>

                {/* Upload Error */}
                {uploadError && (
                    <div className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <p className="text-red-700 font-semibold text-sm">{uploadError}</p>
                        </div>
                        <button onClick={() => setUploadError(null)} className="text-red-400 hover:text-red-600">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Controls */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search images by name or folder..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 h-11 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400"
                        />
                        {search && (
                            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    <div className="flex gap-2 items-center">
                        <select
                            value={selectedFolder}
                            onChange={e => setSelectedFolder(e.target.value)}
                            className="h-11 px-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 min-w-[150px]"
                        >
                            {folders.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>

                        <button
                            onClick={fetchImages}
                            disabled={loading}
                            className="h-11 w-11 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-all"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-slate-500 font-medium">
                        Showing <span className="font-black text-slate-800">{filtered.length}</span> of <span className="font-black text-slate-800">{images.length}</span> images
                    </span>
                    {selectedFolder !== "All" && (
                        <button
                            onClick={() => setSelectedFolder("All")}
                            className="text-xs text-indigo-600 font-bold hover:underline flex items-center gap-1"
                        >
                            <X className="w-3 h-3" /> Clear filter
                        </button>
                    )}
                </div>

                {/* Image Grid */}
                {loading ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="aspect-square bg-slate-200 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-4">
                            <ImageIcon className="w-10 h-10 text-slate-400" />
                        </div>
                        <p className="text-slate-600 font-bold text-lg mb-1">
                            {images.length === 0 ? "No images yet" : "No images match your search"}
                        </p>
                        <p className="text-slate-400 text-sm">
                            {images.length === 0
                                ? "Upload images using the zone above to get started"
                                : "Try a different search term or folder filter"}
                        </p>
                        {images.length === 0 && (
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-colors"
                            >
                                <Upload className="w-4 h-4" />
                                Upload Your First Image
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {filtered.map((img) => (
                            <div
                                key={img.url}
                                className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Image */}
                                <div
                                    className="aspect-square bg-slate-100 cursor-pointer overflow-hidden"
                                    onClick={() => setPreviewImage(img)}
                                >
                                    <img
                                        src={img.url}
                                        alt={img.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3Ctext x='50' y='55' font-size='30' text-anchor='middle' fill='%2394a3b8'%3E?%3C/text%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-2.5 gap-1.5">
                                    <button
                                        onClick={() => copyUrl(img.url)}
                                        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/90 text-slate-800 text-[10px] font-bold hover:bg-white transition-colors w-full"
                                    >
                                        {copiedUrl === img.url ? (
                                            <><Check className="w-3 h-3 text-green-600" /> Copied!</>
                                        ) : (
                                            <><Copy className="w-3 h-3" /> Copy URL</>
                                        )}
                                    </button>
                                    {img.url.startsWith("/api/media/") && (
                                        <button
                                            onClick={() => setDeleteConfirm(img.url)}
                                            className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-red-600/90 text-white text-[10px] font-bold hover:bg-red-600 transition-colors w-full"
                                        >
                                            <Trash2 className="w-3 h-3" /> Delete
                                        </button>
                                    )}
                                </div>

                                {/* Bottom Info */}
                                <div className="p-2.5 border-t border-slate-100">
                                    <p className="text-[10px] font-bold text-slate-700 truncate">{img.name}</p>
                                    <div className="flex items-center justify-between mt-0.5">
                                        <span className="text-[9px] text-slate-400 font-medium">{formatSize(img.size)}</span>
                                        <span className="text-[9px] text-indigo-500 font-bold truncate max-w-[70px]">{img.folder}</span>
                                    </div>
                                </div>

                                {/* Locked badge for non-upload images */}
                                {!img.url.startsWith("/api/media/") && (
                                    <div className="absolute top-2 left-2 bg-slate-800/80 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wide backdrop-blur-sm">
                                        Site Image
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                            <Trash2 className="w-7 h-7 text-red-600" />
                        </div>
                        <h3 className="text-xl font-black text-slate-800 text-center mb-2">Delete Image?</h3>
                        <p className="text-slate-500 text-sm text-center mb-6">
                            This will permanently remove the image from the server. This action <strong>cannot be undone</strong>.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => deleteImage(deleteConfirm)}
                                disabled={!!deleting}
                                className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {deleting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Preview Modal */}
            {previewImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    onClick={() => setPreviewImage(null)}
                >
                    <div
                        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                                    <ImageIcon className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-800 text-sm truncate max-w-[300px]">{previewImage.name}</p>
                                    <p className="text-xs text-slate-400">{formatSize(previewImage.size)} • {previewImage.folder}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => copyUrl(previewImage.url)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors"
                                >
                                    {copiedUrl === previewImage.url ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedUrl === previewImage.url ? "Copied!" : "Copy URL"}
                                </button>
                                <a
                                    href={previewImage.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Open
                                </a>
                                {previewImage.url.startsWith("/api/media/") && (
                                    <button
                                        onClick={() => { setDeleteConfirm(previewImage.url); setPreviewImage(null); }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-50 text-red-600 text-xs font-bold hover:bg-red-100 transition-colors"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                        Delete
                                    </button>
                                )}
                                <button
                                    onClick={() => setPreviewImage(null)}
                                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-[#f8fafc]" style={{ backgroundImage: "radial-gradient(circle,#e2e8f0 1px,transparent 1px)", backgroundSize: "20px 20px" }}>
                            <img
                                src={previewImage.url}
                                alt={previewImage.name}
                                className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-xl"
                            />
                        </div>

                        {/* URL Bar */}
                        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
                            <div className="flex items-center gap-2">
                                <FolderOpen className="w-4 h-4 text-slate-400 shrink-0" />
                                <code className="text-xs text-indigo-600 font-mono flex-1 truncate">{previewImage.url}</code>
                                <button
                                    onClick={() => copyUrl(previewImage.url)}
                                    className="shrink-0 p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
                                >
                                    {copiedUrl === previewImage.url ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
