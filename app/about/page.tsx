"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import AntigravityBackground from "@/src/components/AntigravityBackground";
import { motion } from "framer-motion";
import { Sparkles, Monitor, BadgeCheck, Linkedin, X, Users, Save } from "lucide-react";
import { EditableContent } from "@/src/components/EditableContent";
import { TeamCardsEditor } from "@/src/components/TeamCardsEditor";
import TeamGridSection from "@/src/components/TeamGridSection";
import { useAdmin } from "@/src/context/AdminContext";
import { DEFAULT_TEAM, type TeamMember } from "@/lib/team";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";

const About = () => {
    const { isAdmin, editMode } = useAdmin();
    const [team, setTeam] = useState<TeamMember[]>(DEFAULT_TEAM);
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState<TeamMember[]>([]);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        let cancelled = false;
        fetch("/api/team")
            .then((res) => (res.ok ? res.json() : null))
            .then((data) => {
                if (!cancelled && Array.isArray(data)) setTeam(data);
            })
            .catch(() => {
                /* keep the seed team on failure */
            });
        return () => {
            cancelled = true;
        };
    }, []);

    const openEditor = () => {
        setDraft(team.map((m) => ({ ...m })));
        setIsEditing(true);
    };

    const saveDraft = async () => {
        setSaving(true);
        try {
            const res = await fetch("/api/admin/team", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ team: draft }),
            });
            if (res.ok) {
                const data = await res.json();
                setTeam(data.team ?? draft);
                setIsEditing(false);
                toast.success("Team updated!");
            } else {
                const err = await res.json().catch(() => ({}));
                toast.error(err.error || "Failed to save team.");
            }
        } catch {
            toast.error("An error occurred while saving.");
        } finally {
            setSaving(false);
        }
    };

    const canEdit = isAdmin && editMode;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-background relative overflow-x-hidden"
        >
            <AntigravityBackground />
            <Navbar />

            <main className="relative pt-32 pb-8">
                {/* Background Decorative Waves */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                    <svg className="absolute w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 400C200 300 400 600 720 400C1040 200 1240 500 1540 400" stroke="url(#gradient-1)" strokeWidth="2" strokeDasharray="10 10" />
                        <path d="M-100 500C200 400 400 700 720 500C1040 300 1240 600 1540 500" stroke="url(#gradient-2)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4F46E5" />
                                <stop offset="1" stopColor="#9333EA" />
                            </linearGradient>
                            <linearGradient id="gradient-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9333EA" />
                                <stop offset="1" stopColor="#C026D3" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="container relative z-10 px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-8 py-3 rounded-full bg-primary/80 backdrop-blur-md text-white font-bold text-lg shadow-xl shadow-primary/20 mb-12"
                        >
                            About Us
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.2] mb-10 max-w-5xl mx-auto px-4"
                        >
                            <EditableContent 
                                contentKey="about_main_heading"
                                description="About Page Heading"
                                defaultContent={
                                    <>
                                        To Revolutionise the Educational Landscape by Providing{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-accent">
                                            AI Powered Tech Solutions
                                        </span>{" "}
                                        to Every Educational Institution.
                                    </>
                                }
                            />
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center w-full"
                        >
                            <EditableContent 
                                contentKey="about_intro"
                                description="About Page Intro Text"
                                className="text-[13px] md:text-[15px] text-[#5e6282] font-semibold leading-relaxed max-w-4xl text-justify px-4"
                                defaultContent={
                                    <p>
                                        In light of the National Education Policy's Emphasis on Modernising Educational Systems, the Demand for Streamlined Campus Automation Solutions is at an All-Time High. Our Campus Automation Solution addresses this need by offering Educational Institutions a Simple yet Powerful Platform to Manage Academics, Operations, Communication, and Data Effectively.
                                    </p>
                                }
                            />
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
                    </div>
                </div>

                {/* Team Leadership Profiles */}
                {canEdit && (
                    <div className="mt-16 flex justify-center">
                        <button
                            type="button"
                            onClick={openEditor}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95"
                        >
                            <Users className="w-4 h-4" />
                            Manage Team Cards ({team.length})
                        </button>
                    </div>
                )}

                <div id="team" className="mt-20 relative px-4 md:px-6 container mx-auto flex flex-col gap-24">
                    {team.map((t) => (
                        <div key={t.id} className="relative z-10 group mt-12">
                            {/* Decorative Background for Section */}
                            <div className="absolute top-0 right-0 w-[80%] md:w-[60%] lg:w-[45%] h-full bg-[#333d4d]/5 rounded-3xl -z-10 group-hover:bg-[#333d4d]/10 transition-colors duration-500" />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16 relative">
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="lg:col-span-7 bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl z-20 border border-white/50 relative overflow-hidden"
                                >
                                    {/* Accent Line */}
                                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
                                    
                                    {/* Team card fields are structured data — edit them via
                                        "Manage Team Cards" (Live Edit) or /admin/about-teams. */}
                                    <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] leading-tight mb-2">
                                        {t.name}
                                    </h2>
                                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 tracking-tight">
                                        {t.role}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {t.education && (
                                            <span className="bg-[#f1f5f9] text-[#475569] font-bold text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-200 uppercase tracking-wider">
                                                {t.education}
                                            </span>
                                        )}
                                        {t.contact && (
                                            <span className="bg-primary/5 text-primary font-bold text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-primary/10 tracking-widest">
                                                {t.contact}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.8] font-medium text-justify">
                                        {t.bio}
                                    </p>
                                </motion.div>

                                {/* Image Side (Right Side) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="lg:col-span-5 flex justify-center z-10"
                                >
                                    <div className="bg-white p-3 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 border-4 border-white">
                                        <div className="w-full aspect-square md:aspect-[4/5] relative rounded-2xl md:rounded-[2rem] overflow-hidden">
                                            {t.image ? (
                                                <img
                                                    src={t.image}
                                                    alt={t.name}
                                                    className="w-full h-full object-cover object-[center_top] filter contrast-125 transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                                    <Users className="w-12 h-12 text-slate-300" />
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/50 via-transparent to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "Our Team" compact card grid — separate list from the profiles above */}
                <TeamGridSection />
            </main>

            {canEdit && (
                <Dialog open={isEditing} onOpenChange={setIsEditing}>
                    <DialogContent className="sm:max-w-[880px] bg-[#171523] border-white/10 text-white">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold flex items-center gap-2">
                                <Users className="w-5 h-5 text-indigo-400" />
                                Manage Team Cards
                            </DialogTitle>
                        </DialogHeader>

                        <div className="py-2 max-h-[62vh] overflow-auto custom-scrollbar pr-1">
                            <TeamCardsEditor team={draft} onChange={setDraft} theme="dark" />
                        </div>

                        <DialogFooter className="gap-2">
                            <Button
                                variant="ghost"
                                onClick={() => setIsEditing(false)}
                                className="text-slate-400 hover:text-white hover:bg-white/5"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={saveDraft}
                                disabled={saving}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                {saving ? "Saving..." : "Save Changes"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default About;
