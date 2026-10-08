"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
    ShieldCheck, FileCheck2, Target, Database, Eye, Clock, FileText, CalendarCheck,
    Megaphone, Filter, Bell, Workflow, PhoneCall, Mic, Sparkles, TrendingUp, BarChart3, Users,
    Ticket, UserCog, Siren, Timer, Wrench, History, CheckCircle2, MessageSquare,
    Bot, Search, Compass, Layers, Brain, GraduationCap
} from "lucide-react";
import { EditableContent } from "@/src/components/EditableContent";

type Capability = { label: string; icon: LucideIcon };
type CapabilityGroup = { title: string; text?: string; items: Capability[] };

type NewModule = {
    id: string;
    navLabel: string;
    navIcon: LucideIcon;
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    tagline: string;
    watermark: string;
    gradient: string;
    accentText: string;
    accentBorder: string;
    accentBg: string;
    glow: string;
    intro: string[];
    callout: { title: string; text: string };
    groups: CapabilityGroup[];
    image: string;
    imageAlt: string;
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const newModules: NewModule[] = [
    {
        id: "accreditation",
        navLabel: "Accreditation",
        navIcon: ShieldCheck,
        eyebrow: "Accreditation Management",
        titlePrefix: "Accreditation",
        titleHighlight: "Management",
        tagline: "Always Ready for Accreditation.",
        watermark: "Accreditation",
        gradient: "from-violet-400 to-fuchsia-400",
        accentText: "text-violet-300",
        accentBorder: "border-violet-500/30",
        accentBg: "bg-violet-500",
        glow: "bg-violet-600",
        intro: [
            "NAAC, NBA, OBE and NIRF documentation shouldn't turn into a last-minute fire drill. AICAS keeps your institutional data, documents and outcome-based reports centralized, structured and inspection-ready all year round.",
            "From curriculum structuring to outcome-based reporting, AICAS keeps you in step with evolving accreditation requirements without scattered spreadsheets or piles of paperwork.",
        ],
        callout: {
            title: "Built for NEP 2020. Ready for Accreditation.",
            text: "NEP 2020-aligned academic workflows with NAAC, NBA, OBE and NIRF-ready reporting, so the data you need for inspections, assessments and compliance is always a click away.",
        },
        groups: [
            {
                title: "Key Capabilities",
                items: [
                    { label: "Centralized accreditation documentation", icon: FileCheck2 },
                    { label: "NAAC, NBA, OBE & NIRF-ready data and reports", icon: ShieldCheck },
                    { label: "Outcome-Based Education tracking & reporting", icon: Target },
                    { label: "Unified institutional and academic data", icon: Database },
                    { label: "Inspection-ready records, anytime", icon: Eye },
                    { label: "Faster access to accreditation data", icon: Clock },
                    { label: "Less dependence on manual documentation", icon: FileText },
                    { label: "Continuous readiness, not last-minute prep", icon: CalendarCheck },
                ],
            },
        ],
        image: "/images/accreditation_dashboard.png",
        imageAlt: "Accreditation Management Dashboard",
    },
    {
        id: "crm",
        navLabel: "CRM",
        navIcon: Users,
        eyebrow: "Admissions CRM",
        titlePrefix: "Admissions",
        titleHighlight: "CRM",
        tagline: "From First Inquiry to Enrollment.",
        watermark: "CRM",
        gradient: "from-emerald-400 to-cyan-400",
        accentText: "text-emerald-300",
        accentBorder: "border-emerald-500/30",
        accentBg: "bg-emerald-500",
        glow: "bg-emerald-600",
        intro: [
            "Every unanswered inquiry is a lost enrollment. AICAS CRM helps your admissions team capture, nurture and convert prospective students, from the very first interaction to the day they enroll.",
            "Pull leads from your college website, social media and campaigns into one place. Track every prospect, automate follow-ups, watch the admission pipeline and see exactly what converts.",
        ],
        callout: {
            title: "AI-Powered Lead Engagement",
            text: "The built-in AI Caller talks to prospective students, then automatically saves call transcripts and conversation insights to the CRM, so your counsellors know who to call first and what to say.",
        },
        groups: [
            {
                title: "Key Capabilities",
                items: [
                    { label: "Centralized lead management", icon: Users },
                    { label: "Multi-channel lead capture", icon: Filter },
                    { label: "Social media & campaign integration", icon: Megaphone },
                    { label: "Automated follow-ups & reminders", icon: Bell },
                    { label: "Full lead-to-enrollment pipeline view", icon: Workflow },
                    { label: "AI-powered calling", icon: PhoneCall },
                    { label: "Automatic call transcription", icon: Mic },
                    { label: "Conversation insights & lead intelligence", icon: Sparkles },
                    { label: "Smart lead prioritization", icon: TrendingUp },
                    { label: "Conversion & campaign analytics", icon: BarChart3 },
                ],
            },
        ],
        image: "/images/admissions_crm%20(1).png",
        imageAlt: "Admissions CRM Dashboard",
    },
    {
        id: "ticketing",
        navLabel: "Ticketing",
        navIcon: Ticket,
        eyebrow: "Ticketing Management",
        titlePrefix: "Ticketing",
        titleHighlight: "Management",
        tagline: "Every Issue. Tracked. Assigned. Resolved.",
        watermark: "Ticketing",
        gradient: "from-amber-400 to-rose-400",
        accentText: "text-amber-300",
        accentBorder: "border-amber-500/30",
        accentBg: "bg-amber-500",
        glow: "bg-amber-600",
        intro: [
            "When academic, administrative and technical issues travel through calls, WhatsApp and scattered messages, it's hard to know what was raised, who owns it, and whether it was ever resolved.",
            "AICAS Ticketing moves every issue into a structured workflow with clear ownership, priorities, escalation and resolution tracking.",
        ],
        callout: {
            title: "One Source of Truth for Campus Issues",
            text: "No more issues lost in WhatsApp threads, calls or emails. Every ticket has a clear owner, status, priority and complete resolution history, which brings accountability and transparency to the whole campus.",
        },
        groups: [
            {
                title: "Academic & Administrative Tickets",
                text: "Faculty, class in-charges and staff raise tickets that are routed automatically to the right owner, such as the Academic HOD or Administrative Master. High-priority issues escalate to the Principal, and anything unresolved past the set window (e.g. 48 hours) escalates automatically.",
                items: [
                    { label: "Academic & administrative ticketing", icon: GraduationCap },
                    { label: "Auto-assignment to responsible teams", icon: UserCog },
                    { label: "Priority-based handling", icon: Layers },
                    { label: "Escalation for critical issues", icon: Siren },
                    { label: "48-hour resolution monitoring", icon: Timer },
                ],
            },
            {
                title: "Technical Tickets",
                text: "Technical issues raised by authorised users go straight to the Super Admin / Technical Team, and requesters are kept informed until the issue is closed.",
                items: [
                    { label: "Technical issue management", icon: Wrench },
                    { label: "Live status & progress tracking", icon: Workflow },
                    { label: "Resolution & closure tracking", icon: CheckCircle2 },
                ],
            },
            {
                title: "Why It Matters",
                items: [
                    { label: "Accountability & transparency", icon: Eye },
                    { label: "Less informal follow-up", icon: MessageSquare },
                    { label: "Complete communication history", icon: History },
                    { label: "Clear ownership end to end", icon: ShieldCheck },
                ],
            },
        ],
        image: "/images/ticketing_dashboard.png",
        imageAlt: "Ticketing Management Dashboard",
    },
    {
        id: "lia",
        navLabel: "LIA",
        navIcon: Bot,
        eyebrow: "LEARNSQUARE Intelligent Assistant",
        titlePrefix: "LEARNSQUARE",
        titleHighlight: "Intelligent Assistant (LIA)",
        tagline: "Ask AICAS. Get Intelligent Answers.",
        watermark: "LIA AI",
        gradient: "from-indigo-400 to-sky-400",
        accentText: "text-sky-300",
        accentBorder: "border-sky-500/30",
        accentBg: "bg-sky-500",
        glow: "bg-indigo-600",
        intro: [
            "Finding the right information across a complete ERP takes time. LIA brings intelligence straight into AICAS, so users get answers, insights and guidance without clicking through module after module.",
            "Students, faculty, administrators and management can simply ask in plain language. LIA finds the information, explains the data, guides navigation and surfaces insights from the relevant modules.",
        ],
        callout: {
            title: "One Assistant. Every Module. Smarter Decisions.",
            text: "LIA is an intelligent conversational layer across the entire AICAS ecosystem, and it's role-aware, so every user sees answers that match their access.",
        },
        groups: [
            {
                title: "Key Capabilities",
                items: [
                    { label: "AI-powered conversational assistance", icon: Bot },
                    { label: "Natural-language queries", icon: MessageSquare },
                    { label: "Insights across AICAS modules", icon: Layers },
                    { label: "Smart search & discovery", icon: Search },
                    { label: "Guided navigation", icon: Compass },
                    { label: "Role-based assistance", icon: UserCog },
                    { label: "Data-driven analysis", icon: Brain },
                    { label: "Simplified access to ERP data", icon: Database },
                    { label: "Built for students, faculty & admins", icon: GraduationCap },
                ],
            },
        ],
        image: "/images/lia_assistant.png",
        imageAlt: "LIA Intelligent Assistant",
    },
];

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

// Full-width capability grid: pick a column count that fills complete rows
const capabilityCols: Record<number, string> = {
    8: "sm:grid-cols-2 lg:grid-cols-4",
    9: "sm:grid-cols-2 lg:grid-cols-3",
    10: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
};

const CapabilityItem = ({ m, item, gi, i }: { m: NewModule; item: Capability; gi: number; i: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.04 }}
        className="group/cap h-full flex items-center gap-3 md:gap-3.5 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] px-3.5 md:px-4 py-2.5 md:py-3.5 transition-all duration-300 min-w-0"
    >
        <span className={`w-8 h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/cap:bg-gradient-to-br ${m.gradient} group-hover/cap:border-transparent transition-all duration-300`}>
            <item.icon className={`w-4 h-4 ${m.accentText} group-hover/cap:text-white transition-colors`} />
        </span>
        <EditableContent
            contentKey={`aicas_new_${m.id}_group_${gi}_item_${i}`}
            description={`AICAS ${m.navLabel} Capability ${i + 1}`}
            defaultContent={<span className="text-[13px] md:text-sm font-bold text-slate-300 group-hover/cap:text-white transition-colors leading-snug">{item.label}</span>}
        />
    </motion.div>
);

// Full-width band: title + description on the left, items on the right (stacks on mobile).
// Every band sizes to its own content, so there is no empty space or stretched item.
const GroupBand = ({ m, gi }: { m: NewModule; gi: number }) => {
    const g = m.groups[gi];
    const threeUp = g.items.length % 3 === 0;
    const itemCols = threeUp
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2";
    return (
        <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.07] p-4 sm:p-5 md:p-7 overflow-hidden">
            <div className={`absolute top-0 inset-x-6 md:inset-x-10 h-px bg-gradient-to-r ${m.gradient} opacity-50`} />
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] gap-4 md:gap-5 lg:gap-10 items-center">
                <div className="min-w-0 space-y-2.5 md:space-y-3">
                    <p className="flex items-center gap-2.5 text-[11px] md:text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-slate-300">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${m.accentBg}`} />
                        {g.title}
                    </p>
                    {g.text && (
                        <EditableContent
                            contentKey={`aicas_new_${m.id}_group_${gi}_text`}
                            description={`AICAS ${m.navLabel} ${g.title} Description`}
                            defaultContent={<p className="text-sm text-slate-400 font-medium leading-relaxed">{g.text}</p>}
                        />
                    )}
                </div>
                <div className={`grid grid-cols-1 gap-2.5 md:gap-3 ${itemCols}`}>
                    {g.items.map((item, i) => (
                        <CapabilityItem key={i} m={m} item={item} gi={gi} i={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export type AicasNewModuleId = "accreditation" | "crm" | "ticketing" | "lia";

// Renders one new module as its own section so it can be placed anywhere in the module sequence
export function AicasNewModuleSection({ id, serial, visualRight, className = "" }: { id: AicasNewModuleId; serial: number; visualRight: boolean; className?: string }) {
    const m = newModules.find(x => x.id === id);
    if (!m) return null;
    const copyCol = visualRight ? "lg:col-start-1" : "lg:col-start-2";
    const visualCol = visualRight ? "lg:col-start-2" : "lg:col-start-1";
    const multiGroup = m.groups.length > 1;
    return (
        <section id={`aicas-${m.id}`} className={`relative overflow-hidden py-14 md:py-20 lg:py-24 scroll-mt-28 ${className}`}>
            <div className={`absolute top-1/4 ${visualRight ? "right-[-20%]" : "left-[-20%]"} w-[380px] h-[380px] md:w-[700px] md:h-[700px] ${m.glow} opacity-[0.08] rounded-full blur-[120px] md:blur-[160px] pointer-events-none`} />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Mobile: heading → image → callout. Desktop: copy vertically centred beside the image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] gap-x-12 xl:gap-x-16 gap-y-8 md:gap-y-10 lg:gap-y-8">
                    {/* Heading & intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`${copyCol} lg:row-start-2 min-w-0 space-y-6 md:space-y-8`}
                    >
                        <span className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm">
                            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${m.accentBg}`} />
                            <span className="text-lg md:text-xl font-black tracking-[0.2em] text-white tabular-nums leading-none">{String(serial).padStart(2, "0")}</span>
                        </span>

                        {/* Heading — same style as the core module headings above */}
                        <div className="relative">
                            <span aria-hidden="true" className="absolute -top-8 md:-top-12 -left-2 md:-left-4 text-6xl sm:text-8xl md:text-[8rem] xl:text-[10rem] leading-none whitespace-nowrap font-black text-white/5 uppercase select-none pointer-events-none tracking-tighter">
                                {m.watermark}
                            </span>
                            <EditableContent
                                contentKey={`aicas_new_${m.id}_title`}
                                description={`AICAS ${m.navLabel} Heading`}
                                defaultContent={
                                    <h2 className={`${m.titlePrefix.length > 10 ? "text-3xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-6xl" : "text-3xl sm:text-5xl md:text-7xl"} font-black text-white tracking-tight leading-[0.9] relative z-10 py-1 overflow-visible break-words`}>
                                        {m.titlePrefix}
                                        <br />
                                        <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${m.gradient} italic mt-2 pb-4 pr-6`}>
                                            {m.titleHighlight}
                                        </span>
                                    </h2>
                                }
                            />
                        </div>

                        <EditableContent
                            contentKey={`aicas_new_${m.id}_tagline`}
                            description={`AICAS ${m.navLabel} Tagline`}
                            defaultContent={<p className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug">{m.tagline}</p>}
                        />

                        <EditableContent
                            contentKey={`aicas_new_${m.id}_intro`}
                            description={`AICAS ${m.navLabel} Intro`}
                            defaultContent={
                                <div className="space-y-4">
                                    {m.intro.map((p, i) => (
                                        <p key={i} className="text-[15px] md:text-lg text-slate-400 font-medium leading-relaxed">{p}</p>
                                    ))}
                                </div>
                            }
                        />
                    </motion.div>

                    {/* Dashboard image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className={`${visualCol} lg:row-start-1 lg:row-span-4 self-center relative group min-w-0`}
                    >
                        <div className={`absolute -inset-4 md:-inset-10 bg-gradient-to-br ${m.gradient} opacity-[0.12] md:group-hover:opacity-[0.2] blur-[60px] md:blur-[100px] rounded-full transition-opacity duration-1000`} />
                        <div className="relative rounded-[1.25rem] sm:rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden isolate transform-gpu bg-slate-900 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] md:shadow-[0_60px_120px_rgba(0,0,0,0.6)] transform md:group-hover:scale-[1.02] transition-transform duration-[1.2s] ease-out">
                            <img
                                src={m.image}
                                alt={m.imageAlt}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto block"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`${copyCol} lg:row-start-3 min-w-0 relative rounded-2xl md:rounded-3xl border ${m.accentBorder} bg-white/[0.03] p-5 pl-6 md:p-7 md:pl-8 overflow-hidden`}
                    >
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${m.gradient}`} />
                        <EditableContent
                            contentKey={`aicas_new_${m.id}_callout`}
                            description={`AICAS ${m.navLabel} Callout`}
                            defaultContent={
                                <>
                                    <p className={`text-base md:text-xl font-black tracking-tight ${m.accentText}`}>{m.callout.title}</p>
                                    <p className="mt-2 text-sm md:text-base text-slate-300 font-medium leading-relaxed">{m.callout.text}</p>
                                </>
                            }
                        />
                    </motion.div>
                </div>

                {/* Capabilities: full width under both columns */}
                {multiGroup ? (
                    <div className="mt-10 md:mt-14 space-y-4 md:space-y-5">
                        {m.groups.map((_, gi) => (
                            <GroupBand key={gi} m={m} gi={gi} />
                        ))}
                    </div>
                ) : (
                    <div className="mt-10 md:mt-14 space-y-3 md:space-y-4">
                        {m.groups.map((g, gi) => (
                            <div key={gi} className="min-w-0 flex flex-col gap-3 md:gap-4">
                                <p className="flex items-center gap-2.5 text-[11px] md:text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-slate-500">
                                    <span className={`w-1.5 h-1.5 rounded-full ${m.accentBg}`} />
                                    {g.title}
                                </p>
                                <div className={`grid grid-cols-1 gap-2.5 md:gap-3 ${capabilityCols[g.items.length] ?? "sm:grid-cols-2 lg:grid-cols-4"}`}>
                                    {g.items.map((item, i) => (
                                        <CapabilityItem key={i} m={m} item={item} gi={gi} i={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
