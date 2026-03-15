"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, ArrowLeft, Save, FileCode, Eye, ImageIcon, ExternalLink } from "lucide-react";
import { useAdmin } from "@/src/context/AdminContext";
import { sanitizeHtml } from "@/lib/sanitize";
import { CMS_CARDS } from "@/lib/cms-cards";

type ContentEntry = { id: number; contentKey: string; pageName: string; htmlContent?: string; updatedAt: string };

const fetchOpts = { credentials: "include" as RequestCredentials };

export default function AdminContentPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [contentMap, setContentMap] = useState<Record<string, ContentEntry>>({});
    const [loading, setLoading] = useState(true);
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [htmlContent, setHtmlContent] = useState("");
    const [contentLoading, setContentLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const { setEditMode } = useAdmin();
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const auth = typeof document !== "undefined" && (() => {
            const m = document.cookie.match(/auth=([^;]+)/);
            if (!m) return null;
            try { return JSON.parse(atob(m[1])); } catch { return null; }
        })();
        if (!auth || !auth.isAdmin) {
            router.replace("/admin/login");
        }
    }, [mounted, router]);

    useEffect(() => {
        if (!mounted) return;
        const fetchEntries = async () => {
            try {
                const res = await fetch("/api/admin/content", fetchOpts);
                if (res.status === 401) {
                    router.replace("/admin/login");
                    return;
                }
                if (res.ok) {
                    const data = await res.json();
                    const map: Record<string, ContentEntry> = {};
                    data.forEach((e: ContentEntry) => { map[e.contentKey] = e; });
                    setContentMap(map);
                }
            } catch {
                setContentMap({});
            } finally {
                setLoading(false);
            }
        };
        fetchEntries();
    }, [mounted, router]);

    const loadContent = async (contentKey: string) => {
        setSelectedKey(contentKey);
        setContentLoading(true);
        try {
            const res = await fetch(`/api/admin/content/${encodeURIComponent(contentKey)}`, fetchOpts);
            if (res.ok) {
                const data = await res.json();
                setHtmlContent(data.htmlContent ?? "");
            } else {
                setHtmlContent("");
            }
        } catch {
            setHtmlContent("");
        } finally {
            setContentLoading(false);
        }
    };

    const handleSave = async () => {
        if (!selectedKey) return;
        setSaving(true);
        setMessage(null);
        try {
            const res = await fetch("/api/admin/content/update", {
                ...fetchOpts,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content_key: selectedKey,
                    html_content: htmlContent,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                setMessage({ type: "success", text: "Changes saved successfully." });
                setContentMap((prev) => ({
                    ...prev,
                    [selectedKey]: {
                        ...prev[selectedKey],
                        id: data.id,
                        contentKey: selectedKey,
                        pageName: data.pageName ?? CMS_CARDS.find((c) => c.contentKey === selectedKey)?.pageName ?? "",
                        updatedAt: data.updatedAt,
                    },
                }));
            } else {
                setMessage({ type: "error", text: data.error || "Failed to save." });
            }
        } catch {
            setMessage({ type: "error", text: "Failed to save changes." });
        } finally {
            setSaving(false);
        }
    };

    const previewHtml = sanitizeHtml(htmlContent);
    const selectedCard = selectedKey ? CMS_CARDS.find((c) => c.contentKey === selectedKey) : null;

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <p className="text-slate-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B0914]">
            <header className="bg-[#171523] border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </Link>
                    <div className="hidden sm:block h-6 w-px bg-white/20" />
                    <span className="font-bold text-white">Content Management (CMS)</span>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            setEditMode(true);
                            router.push("/");
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-sm font-bold transition-all border border-blue-500/20"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Edit
                    </button>
                    <Link
                        href="/admin/images"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 text-sm font-bold transition-all border border-emerald-500/20"
                    >
                        <ImageIcon className="w-4 h-4" />
                        Images
                    </Link>
                    <button
                        onClick={() => {
                            document.cookie = "auth=; path=/; max-age=0";
                            router.replace("/admin/login");
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </header>

            <main className="p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left: Card grid - website style */}
                        <div className="lg:col-span-1">
                            <h2 className="text-white font-bold mb-4">All Pages & Cards</h2>
                            <p className="text-slate-400 text-sm mb-6">Click a card to edit its content</p>
                            {loading ? (
                                <p className="text-slate-500">Loading...</p>
                            ) : (
                                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
                                    {CMS_CARDS.map((card) => {
                                        const Icon = card.icon;
                                        const isSelected = selectedKey === card.contentKey;
                                        return (
                                            <button
                                                key={card.contentKey}
                                                type="button"
                                                onClick={() => loadContent(card.contentKey)}
                                                className={`text-left w-full p-4 rounded-2xl border transition-all duration-300 flex flex-col gap-2 min-h-[100px] ${
                                                    isSelected
                                                        ? "bg-indigo-500/20 border-indigo-400/50 ring-2 ring-indigo-400/30"
                                                        : "bg-[#171523] border-white/[0.06] hover:border-white/10 hover:bg-[#1C1A29]"
                                                }`}
                                            >
                                                <div className="flex items-center justify-between gap-2">
                                                    <div className={`w-10 h-10 rounded-xl bg-black/30 border border-white/[0.06] flex items-center justify-center flex-shrink-0 ${card.iconColor}`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    {card.badge && (
                                                        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-md bg-blue-600 text-white truncate">
                                                            {card.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="font-bold text-white/95 text-sm leading-tight line-clamp-2">
                                                    {card.pageName}
                                                </span>
                                                <span className="text-white/40 text-[10px]">
                                                    {contentMap[card.contentKey] ? "Editable" : "Click to add"}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Right: Editor + Preview */}
                        <div className="lg:col-span-2">
                            {selectedKey ? (
                                <div className="space-y-4">
                                    {message && (
                                        <div
                                            className={`p-4 rounded-xl text-sm font-medium ${
                                                message.type === "success"
                                                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                                            }`}
                                        >
                                            {message.text}
                                        </div>
                                    )}
                                    <div className="bg-[#171523] rounded-2xl border border-white/10 overflow-hidden">
                                        <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center gap-2">
                                            <FileCode className="w-4 h-4 text-slate-400" />
                                            <span className="font-semibold text-white">
                                                {selectedCard?.pageName || selectedKey.replace(/_/g, " ")}
                                            </span>
                                            <span className="text-slate-500 text-xs">({selectedKey})</span>
                                        </div>
                                        {contentLoading ? (
                                            <div className="p-12 text-center text-slate-500">Loading...</div>
                                        ) : (
                                            <>
                                                <div className="p-4 border-b border-white/10">
                                                    <label className="block text-sm font-medium text-slate-400 mb-2">Plain HTML – Edit content</label>
                                                    <textarea
                                                        value={htmlContent}
                                                        onChange={(e) => setHtmlContent(e.target.value)}
                                                        className="w-full min-h-[320px] p-4 font-mono text-sm text-white bg-black/30 border border-white/10 rounded-xl resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                                        placeholder="<p>Enter HTML content here...</p>"
                                                        spellCheck={false}
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Eye className="w-4 h-4 text-slate-400" />
                                                        <span className="text-sm font-medium text-slate-400">Live Preview</span>
                                                    </div>
                                                    <div className="min-h-[200px] overflow-auto p-4 rounded-xl bg-black/30 border border-white/10">
                                                        <div
                                                            className="cms-content text-white [&_h1]:text-xl [&_h2]:text-lg [&_h4]:text-base [&_p]:text-sm [&_a]:text-indigo-400"
                                                            dangerouslySetInnerHTML={{ __html: previewHtml }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-4 border-t border-white/10">
                                                    <button
                                                        onClick={handleSave}
                                                        disabled={saving}
                                                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold"
                                                    >
                                                        <Save className="w-4 h-4" />
                                                        {saving ? "Saving..." : "Save Changes"}
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-[#171523] rounded-2xl border border-white/10 p-16 text-center">
                                    <FileCode className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                                    <p className="text-slate-400 font-medium">Click a card on the left to edit its content</p>
                                    <p className="text-slate-500 text-sm mt-2">Edit plain HTML and save to update the website</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
