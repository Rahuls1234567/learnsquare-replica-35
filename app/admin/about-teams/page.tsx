"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";
import { TeamCardsEditor } from "@/src/components/TeamCardsEditor";
import { TeamGridEditor } from "@/src/components/TeamGridEditor";
import { type TeamMember } from "@/lib/team";
import { type TeamGridMember } from "@/lib/team-grid";

export default function AboutTeamsAdminPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [grid, setGrid] = useState<TeamGridMember[]>([]);
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

        Promise.all([
            fetch("/api/admin/team").then((r) => (r.ok ? r.json() : Promise.reject())),
            fetch("/api/admin/team-grid").then((r) => (r.ok ? r.json() : Promise.reject())),
        ])
            .then(([teamData, gridData]) => {
                setTeam(teamData.team ?? []);
                setGrid(gridData.team ?? []);
            })
            .catch(() => toast.error("Failed to load team"))
            .finally(() => setLoading(false));
    }, [mounted, router]);

    const update = (next: TeamMember[]) => {
        setTeam(next);
        setDirty(true);
    };

    const updateGrid = (next: TeamGridMember[]) => {
        setGrid(next);
        setDirty(true);
    };

    const save = async () => {
        setSaving(true);
        try {
            const [profileRes, gridRes] = await Promise.all([
                fetch("/api/admin/team", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ team }),
                }),
                fetch("/api/admin/team-grid", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ team: grid }),
                }),
            ]);

            if (profileRes.ok && gridRes.ok) {
                setDirty(false);
                toast.success("Team saved — live on the About page");
            } else {
                const failed = profileRes.ok ? gridRes : profileRes;
                const err = await failed.json().catch(() => ({}));
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
                    <span className="font-bold text-slate-800">About Teams</span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                        {team.length} profile{team.length === 1 ? "" : "s"} · {grid.length} card
                        {grid.length === 1 ? "" : "s"}
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
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <h1 className="text-xl font-black text-slate-800 tracking-tight mb-1">Manage Team Cards</h1>
                        <p className="text-slate-500 text-sm">
                            Add, edit, reorder, or remove leadership profiles on the About Us page. You can also edit
                            these inline from the About page with Live Edit on.
                        </p>
                    </div>

                    <TeamCardsEditor team={team} onChange={update} />

                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <h2 className="text-xl font-black text-slate-800 tracking-tight mb-1">
                            &ldquo;Our Team&rdquo; Card Grid
                        </h2>
                        <p className="text-slate-500 text-sm mb-5">
                            The compact photo cards further down the About page. This is a separate list — adding
                            someone here does not create a full profile section above.
                        </p>
                        <TeamGridEditor team={grid} onChange={updateGrid} />
                    </div>

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
