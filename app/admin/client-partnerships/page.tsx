"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";
import { PartnerLogosEditor } from "@/src/components/PartnerLogosEditor";
import { type Partner } from "@/lib/partners";

export default function ClientPartnershipsAdminPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [dirty, setDirty] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const auth = (() => {
            const m = document.cookie.match(/auth=([^;]+)/);
            if (!m) return null;
            try {
                return JSON.parse(atob(decodeURIComponent(m[1])));
            } catch {
                return null;
            }
        })();
        if (!auth || !auth.isAdmin) {
            router.replace("/login");
            return;
        }

        fetch("/api/admin/partners")
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setPartners(data.partners ?? []))
            .catch(() => toast.error("Failed to load partners"))
            .finally(() => setLoading(false));
    }, [mounted, router]);

    const update = (next: Partner[]) => {
        setPartners(next);
        setDirty(true);
    };

    const save = async () => {
        setSaving(true);
        try {
            const res = await fetch("/api/admin/partners", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ partners }),
            });
            if (res.ok) {
                setDirty(false);
                toast.success("Client Partnerships saved — live on the homepage");
            } else {
                const err = await res.json().catch(() => ({}));
                toast.error(err.error || "Failed to save");
            }
        } catch {
            toast.error("An error occurred while saving");
        } finally {
            setSaving(false);
        }
    };

    if (!mounted || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <p className="text-slate-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 shadow-sm sticky top-0 z-30">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Link>
                    <div className="hidden sm:block h-6 w-px bg-slate-200" />
                    <span className="font-bold text-slate-800">Client Partnerships</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                        {partners.length} logo{partners.length === 1 ? "" : "s"}
                    </span>
                </div>
                <button
                    onClick={save}
                    disabled={saving || !dirty}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Save className="w-4 h-4" />
                    {saving ? "Saving..." : dirty ? "Save Changes" : "Saved"}
                </button>
            </header>

            <main className="p-6 lg:p-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-xl font-black text-slate-800 tracking-tight mb-1">Manage Partner Logos</h1>
                        <p className="text-slate-500 text-sm">
                            Upload logos, rename them, reorder with the arrows, then hit Save. Changes appear in the
                            homepage marquee immediately. You can also edit these inline from the homepage with Live
                            Edit on.
                        </p>
                    </div>

                    <PartnerLogosEditor partners={partners} onChange={update} />

                    {dirty && (
                        <p className="text-amber-600 text-sm font-medium mt-6 text-center">
                            You have unsaved changes.
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}
