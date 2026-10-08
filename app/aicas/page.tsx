"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import {
    Brain, BookOpen, Award, LayoutDashboard, Briefcase,
    Check, Rocket, Loader2, Sparkles, SlidersHorizontal, DatabaseZap, MonitorPlay, Headset, Cable,
    User, Phone, Mail, Building2, MapPin, IdCard, MessageSquare,
    GraduationCap, Users, ClipboardCheck, ShieldCheck, BedDouble, Ticket, Library, Bus, Megaphone, HeartHandshake, Bot,
    type LucideIcon
} from 'lucide-react';
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";
import { EditableContent } from "@/src/components/EditableContent";
import { AicasNewModuleSection, type AicasNewModuleId } from "@/src/components/AicasNewModules";


const AndroidAppleIcon = ({ className = "" }: { className?: string }) => (
    <div className={`${className} !w-auto flex items-center justify-center gap-1`}>
        <svg viewBox="0 0 24 24" className="h-[70%] w-auto" fill="currentColor">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.244 13.8533 7.8512 12 7.8512s-3.5902.3928-5.1367 1.0988L4.841 5.447a.416.416 0 0 0-.5676-.1521.416.416 0 0 0-.1521.5676l1.9973-3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.44z" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-[70%] w-auto" fill="currentColor">
            <path d="M16.365 20.473c-1.332 1.349-2.766 1.4-4.321.472-1.46-.867-2.822-.867-4.28 0-1.636 1.01-2.909.886-4.24-.49C1.192 16.59-1.22 9.073 2.502 4.414c1.64-2.054 3.791-2.614 5.378-2.614 1.708 0 3.3.945 4.35 1.455.975-.41 2.545-1.574 4.544-1.574 2.825 0 4.881 1.6 5.86 3.65-5.286 2.503-4.3 8.356.9 10.428-1.127 2.222-2.182 3.821-3.17 4.714m-3.86-17.74c1.554-1.95 2.155-4.47.16-5.83-2.138-1.554-4.8 1.144-4.8 1.144-1.342 1.6-1.536 3.96.2 5.093 1.042.61 2.378.136 3.32-.423" />
        </svg>
    </div>
);

// High-Fidelity Digital Dashboard Mockup Component
const LiveDashboardMockup = ({
    themeGradient = "from-indigo-500 to-purple-500",
    moduleName = "Dashboard",
    stats = [
        { label: "Metric 1", value: 4, color: "bg-cyan-400" },
        { label: "Metric 2", value: 3, color: "bg-rose-400" },
        { label: "Metric 3", value: 5, color: "bg-cyan-400" },
        { label: "Metric 4", value: 2, color: "bg-rose-400" },
    ],
    gauges = [75, 50],
    chartLabel = "Growth Index"
}: {
    themeGradient?: string,
    moduleName?: string,
    stats?: { label: string, value: number, color: string }[],
    gauges?: number[],
    chartLabel?: string
}) => (
    <div className="relative w-full aspect-[1.5/1] bg-[#020617] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col font-sans border border-white/10 select-none pointer-events-none transform group-hover:scale-[1.03] transition-all duration-[1.2s] ease-out">
        {/* Top Glow Layer */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${themeGradient} opacity-50`} />

        {/* Top Bar Navigation - Dark Glass */}
        <div className="h-14 md:h-16 bg-slate-900/60 border-b border-white/5 flex items-center px-6 md:px-10 gap-4 md:gap-8 shrink-0 relative z-10">
            <div className="flex items-center gap-3 mr-auto">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${themeGradient} shadow-[0_0_10px_rgba(99,102,241,0.5)]`} />
                <span className="text-[10px] md:text-sm font-black text-white uppercase tracking-[0.2em] opacity-90">{moduleName}</span>
            </div>
            {["OVERVIEW", "ANALYTICS", "TEAM", "LOGS"].map((tab, i) => (
                <div key={tab} className={`px-4 md:px-5 py-1.5 rounded-full text-[7px] md:text-[9px] font-black tracking-[0.15em] transition-all duration-300 ${i === 1 ? `bg-white/20 text-white border border-white/10` : 'text-slate-500'}`}>
                    {tab}
                </div>
            ))}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border border-white/10 shadow-lg" />
        </div>

        {/* Main Dashboard Content Area */}
        <div className="flex-grow p-6 md:p-10 grid grid-cols-12 gap-6 md:gap-8 bg-transparent relative z-0">

            {/* Left Column: Metrics & Analytics */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-6 md:gap-8 content-start">

                {/* Stats Card 1: Skill Indicators / Metrics */}
                <div className="bg-slate-900/60 rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-white/5 flex flex-col justify-between group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <LayoutDashboard className="w-12 h-12 text-white" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-5 relative z-10">
                        {stats.map((stat, n) => (
                            <div key={n} className="flex items-center justify-between gap-4">
                                <div className="flex flex-col gap-1.5 flex-grow">
                                    <span className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-[0.25em]">{stat.label}</span>
                                    <div className="w-full bg-white/5 h-1.5 md:h-2.5 rounded-full overflow-hidden flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`flex-grow rounded-full transition-all duration-700 ${i < stat.value
                                                ? `${stat.color} shadow-[0_0_12px_rgba(34,211,238,0.2)]`
                                                : 'bg-white/5'
                                                }`} />
                                        ))}
                                    </div>
                                </div>
                                <span className="text-[10px] md:text-xs font-black text-white/50">{Math.floor((stat.value / 5) * 100)}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Card 2: Iconic Glowing Gauges */}
                <div className="bg-slate-900/60 rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group/gauge">
                    <div className="relative flex items-center scale-90 md:scale-100">
                        {/* Gauge 1 (Red/Pink Glow) */}
                        <div className="relative w-20 h-20 md:w-32 md:h-32 -mr-8 md:-mr-12 z-10 drop-shadow-[0_0_25px_rgba(244,63,94,0.3)]">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="50%" cy="50%" r="40%" stroke="#1e1b4b" strokeWidth="15%" fill="none" />
                                <circle cx="50%" cy="50%" r="40%" stroke="#f43f5e" strokeWidth="15%" fill="none" strokeDasharray={`${gauges[0] * 2.5} 251`} strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-[12px] md:text-lg font-black text-white">{gauges[0]}%</span>
                            </div>
                        </div>
                        {/* Gauge 2 (Cyan/Blue Glow) */}
                        <div className="relative w-20 h-20 md:w-32 md:h-32 z-20 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                            <div className="absolute inset-0 rounded-full border-[10px] md:border-[16px] border-[#020617] z-0" />
                            <svg className="w-full h-full -rotate-90 relative z-10">
                                <circle cx="50%" cy="50%" r="40%" stroke="#083344" strokeWidth="15%" fill="none" />
                                <circle cx="50%" cy="50%" r="40%" stroke="#06b6d4" strokeWidth="15%" fill="none" strokeDasharray={`${gauges[1] * 2.5} 251`} strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                                <span className="text-[12px] md:text-lg font-black text-white">{gauges[1]}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Card 3: Performance Wave with Glow */}
                <div className="col-span-2 bg-slate-900/80 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[240px] relative overflow-hidden border border-white/5 shadow-2xl">
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="space-y-1">
                            <span className="text-[14px] md:text-xl font-black text-white tracking-tight">{chartLabel}</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="text-[8px] md:text-[10px] font-black text-emerald-400 uppercase tracking-widest">System Active</span>
                            </div>
                        </div>
                        <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/5">
                            <span className="text-[10px] md:text-sm font-black text-white">+24.5%</span>
                        </div>
                    </div>

                    {/* Glowing Wave SVG */}
                    <div className="absolute inset-x-0 bottom-0 z-0 h-1/2">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <defs>
                                <linearGradient id="glow-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,40 C15,35 25,10 45,25 C65,40 85,5 100,25 L100,40 L0,40 Z" fill="url(#glow-grad)" />
                            <path d="M0,40 C15,35 25,10 45,25 C65,40 85,5 100,25" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_12px_rgba(99,102,241,1)]" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Right Column: Mini Calendar & Tasks */}
            <div className="col-span-4 hidden md:flex flex-col gap-6 h-full">
                <div className="bg-slate-900/80 rounded-[3rem] p-0 shadow-2xl border border-white/5 flex-grow flex flex-col overflow-hidden">
                    <div className="h-14 w-full bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-between px-8 relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <span className="text-[10px] font-black tracking-[0.3em] text-white">PLANNER</span>
                        <div className="flex gap-2 relative z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        </div>
                    </div>
                    <div className="p-8 flex-grow bg-transparent">
                        <div className="grid grid-cols-7 gap-y-5 gap-x-2 text-center">
                            {["M", "T", "W", "T", "F", "S", "S"].map(day => (
                                <span key={day} className="text-[8px] font-black text-slate-600">{day}</span>
                            ))}
                            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"].map((day, i) => (
                                <div key={i} className={`aspect-square flex items-center justify-center text-[10px] font-black transition-all duration-300 rounded-xl ${day === "16"
                                    ? 'bg-rose-500 text-white shadow-[0_10px_20px_rgba(244,63,94,0.4)] scale-110'
                                    : 'text-slate-400 hover:bg-white/5'
                                    }`}>
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                            {[1, 2].map(id => (
                                <div key={id} className="flex items-center gap-4 group/item">
                                    <div className={`w-1 h-8 rounded-full ${id === 1 ? 'bg-indigo-500' : 'bg-cyan-500'}`} />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none">Task {id}</span>
                                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">Due in 2h</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
);

const features = [
    { cmsIndex: 0, title: "AI Powered", text: "Predictive insights for smarter decisions, automated admin tasks for efficiency and personalized learning for students.", icon: Brain },
    { cmsIndex: 20, title: "Fully Customisable", text: "Customisable workflows, modules, branding and features tailored to your institution’s needs. Easily adapt AICAS as your institution grows and evolves.", icon: SlidersHorizontal },
    { cmsIndex: 21, title: "Data Migration/Updation", text: "Seamlessly migrate, update and manage existing institutional data with accuracy and ease. Ensure smooth data transition and keep your records up to date.", icon: DatabaseZap },
    { cmsIndex: 3, title: "White-Labelled Android, iOS & Web Applications", text: "Launch your institution’s digital ecosystem with fully white-labelled Android, iOS, and web applications—branded with your institution’s identity and designed to deliver a seamless experience for students, faculty, administrators, and other stakeholders.", icon: AndroidAppleIcon },
    { cmsIndex: 23, title: "Dedicated Customer Support", text: "Dedicated assistance to ensure smooth operations and a seamless experience.", icon: Headset },
    { cmsIndex: 1, title: "NEP 2020 & Accreditation Ready", text: "Flexible academic structures with NEP 2020 alignment and simplified NBA, NAAC & NIRF compliance through centralised data, outcome tracking and audit-ready reports.", icon: Award },
    { cmsIndex: 22, title: "Content-Rich LMS", text: "Deliver engaging learning with rich digital content, resources and course materials. Empower faculty and students with an interactive and accessible learning experience.", icon: MonitorPlay },
    { cmsIndex: 5, title: "Centralised Dashboard", text: "Get a unified, real-time view of your institution’s data and performance through centralised dashboards designed for informed decision-making.", icon: LayoutDashboard },
    { cmsIndex: 24, title: "Seamless Hardware & Software Integration", text: "Connect your hardware and software systems for a smooth, unified experience. Enable seamless integration across all institutional operations.", icon: Cable },
];

const coreModulesData = [
    {
        pillText: "Integrated Module",
        titlePrefix: "Academic",
        titleHighlight: "Management",
        tagline: "Making Academics Seamless",
        topItems: [
            { title: "Engaging Classroom Management", text: "Track attendance, assignments, activities and student participation in one place." }
        ],
        gradientText: "from-indigo-600 to-purple-600",
        theme: {
            pillBg: "bg-indigo-50 border-indigo-100",
            pillDot: "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]",
            pillText: "text-indigo-600",
            glow1: "bg-indigo-300/20",
            glow2: "bg-purple-300/20",
            iconBg: "bg-indigo-50",
            iconBgHover: "group-hover/item:bg-indigo-500",
            iconBorder: "border-indigo-100",
            iconBorderHover: "group-hover/item:border-indigo-500",
            iconText: "text-indigo-500",
            imageGlow: "from-indigo-400/10 to-purple-400/10",
            imageBacking: "from-indigo-400/15 to-purple-400/15"
        },
        imageSrc: "/images/homeimage/report1_premium.png",
        imageAlt: "Academic Management Dashboard",
        isImageRight: true,
        listItems: [
            "Complete Track of Campus Academics",
            "NEP 2020 Compliant",
            "Automated CO PO Mapping and Attainment Calculation",
            "Automated Time Table, Lesson Plan Tracking, Syllabus Coverage Progress",
            "Conduct Unlimited Online Classes with Zero Extra Cost",
            "Dedicated Test Engine for Online Exam Conduction",
            "Generation of University Compliance Reports"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Administration",
        titleHighlight: "Management",
        tagline: "Simplify Administration. Empower People. Run Your Institution Smarter.",
        topItems: [
            { title: "End-to-End Admission Management", text: "Streamline enquiries, applications, document verification, merit lists, fee payments and admissions from a single platform." }
        ],
        gradientText: "from-emerald-600 to-teal-600",
        theme: {
            pillBg: "bg-emerald-50 border-emerald-100",
            pillDot: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]",
            pillText: "text-emerald-600",
            glow1: "bg-emerald-300/20",
            glow2: "bg-teal-300/20",
            iconBg: "bg-emerald-50",
            iconBgHover: "group-hover/item:bg-emerald-500",
            iconBorder: "border-emerald-100",
            iconBorderHover: "group-hover/item:border-emerald-500",
            iconText: "text-emerald-500",
            imageGlow: "from-emerald-400/10 to-teal-400/10",
            imageBacking: "from-emerald-400/15 to-teal-400/15"
        },
        imageSrc: "/images/homeimage/report2_premium.webp",
        imageAlt: "Administration Management Dashboard",
        isImageRight: false,
        listItems: [
            "Track Employee, Staff Attendance and Process Automated Pay Rolls",
            "Fee Dues Management & New Admissions Management",
            "Enquiries Handling & Visitor Management",
            "Effective Leave Management System",
            "Generation of Invoices & Receives as per Std. Templates",
            "Effective Tracking of Inventory"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Examination",
        titleHighlight: "Management",
        tagline: "Automate Examinations. Improve Accuracy. Deliver Results Faster.",
        gradientText: "from-cyan-600 to-blue-600",
        theme: {
            pillBg: "bg-cyan-50 border-cyan-100",
            pillDot: "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]",
            pillText: "text-cyan-600",
            glow1: "bg-cyan-300/20",
            glow2: "bg-blue-300/20",
            iconBg: "bg-cyan-50",
            iconBgHover: "group-hover/item:bg-cyan-500",
            iconBorder: "border-cyan-100",
            iconBorderHover: "group-hover/item:border-cyan-500",
            iconText: "text-cyan-500",
            imageGlow: "from-cyan-400/10 to-blue-400/10",
            imageBacking: "from-cyan-400/15 to-blue-400/15"
        },
        imageSrc: "/images/homeimage/report3_premium.webp",
        imageAlt: "Examination Management Dashboard",
        isImageRight: true,
        listItems: [
            "Launching Examination Registration",
            "Auto Generation of Exam Time Tables, Seating Plans",
            "Online Student Attendance for Examinations",
            "Bulk Generation of Hall Tickets",
            "Calculations of Gradings/Percentages based on Conditions",
            "Publishing of Results & Mark sheet generation",
            "Result Analyses with Customised Analytics"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Placement",
        titleHighlight: "Management",
        tagline: "From Placement Drives to Career Success, Manage Every Step Smarter.",
        gradientText: "from-amber-600 to-orange-600",
        theme: {
            pillBg: "bg-amber-50 border-amber-100",
            pillDot: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]",
            pillText: "text-amber-600",
            glow1: "bg-amber-300/20",
            glow2: "bg-orange-300/20",
            iconBg: "bg-amber-50",
            iconBgHover: "group-hover/item:bg-amber-500",
            iconBorder: "border-amber-100",
            iconBorderHover: "group-hover/item:border-amber-500",
            iconText: "text-amber-500",
            imageGlow: "from-amber-400/10 to-orange-400/10",
            imageBacking: "from-amber-400/15 to-orange-400/15"
        },
        imageSrc: "/images/homeimage/report4_premium.webp",
        imageAlt: "Placement Management Dashboard",
        isImageRight: false,
        listItems: [
            "Maintain Companies Information at One Place",
            "Maintain Placement History for Data-Driven Insights",
            "Publishing Placement Drives Information",
            "Create Eligible Students List in a Few Clicks",
            "Conduct Online Assessments & Interviews",
            "Maintaining Detailed Alumni History"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Learning",
        titleHighlight: "Management",
        tagline: "Experience Learning in a Smarter, More Engaging Way.",
        gradientText: "from-rose-600 to-red-600",
        theme: {
            pillBg: "bg-rose-50 border-rose-100",
            pillDot: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]",
            pillText: "text-rose-600",
            glow1: "bg-rose-300/20",
            glow2: "bg-red-300/20",
            iconBg: "bg-rose-50",
            iconBgHover: "group-hover/item:bg-rose-500",
            iconBorder: "border-rose-100",
            iconBorderHover: "group-hover/item:border-rose-500",
            iconText: "text-rose-500",
            imageGlow: "from-rose-400/10 to-red-400/10",
            imageBacking: "from-rose-400/15 to-red-400/15"
        },
        imageSrc: "/images/homeimage/report5_premium.png",
        imageAlt: "Learning Management Dashboard",
        isImageRight: true,
        listItems: [
            "Department Access through Mobile App",
            "Multi-Language Coding Compiler for Practice",
            "Access to Semester and Placement Prep Content",
            "Online Assignment & Project Submission",
            "Digital Requests & Faculty Chat Facility",
            "Hall Ticket & Result Downloads via App"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Library",
        titleHighlight: "Management",
        tagline: "Books Managed. Circulation Tracked. Library Optimized.",
        gradientText: "from-yellow-600 to-amber-600",
        theme: {
            pillBg: "bg-yellow-50 border-yellow-100",
            pillDot: "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]",
            pillText: "text-yellow-600",
            glow1: "bg-yellow-300/20",
            glow2: "bg-amber-300/20",
            iconBg: "bg-yellow-50",
            iconBgHover: "group-hover/item:bg-yellow-500",
            iconBorder: "border-yellow-100",
            iconBorderHover: "group-hover/item:border-yellow-500",
            iconText: "text-yellow-500",
            imageGlow: "from-yellow-400/10 to-amber-400/10",
            imageBacking: "from-yellow-400/15 to-amber-400/15"
        },
        imageSrc: "/images/homeimage/report6_premium.png",
        imageAlt: "Library Management Dashboard",
        isImageRight: false,
        listItems: [
            "Maintain List of Books/Titles/Journals",
            "Track Book Issue/Return & Reservations",
            "Automated Overdue List & Alerts",
            "Late Fee Collection & Management",
            "Comprehensive Circulation Analytics"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Transportation",
        titleHighlight: "Management",
        tagline: "Safer Journeys. Smarter Transportation.",
        gradientText: "from-purple-600 to-indigo-600",
        theme: {
            pillBg: "bg-purple-50 border-purple-100",
            pillDot: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]",
            pillText: "text-purple-600",
            glow1: "bg-purple-300/20",
            glow2: "bg-indigo-300/20",
            iconBg: "bg-purple-50",
            iconBgHover: "group-hover/item:bg-purple-500",
            iconBorder: "border-purple-100",
            iconBorderHover: "group-hover/item:border-purple-500",
            iconText: "text-purple-500",
            imageGlow: "from-purple-400/10 to-indigo-400/10",
            imageBacking: "from-purple-400/15 to-indigo-400/15"
        },
        imageSrc: "/images/homeimage/report7_premium.webp",
        imageAlt: "Transportation Management Dashboard",
        isImageRight: true,
        listItems: [
            "Maintain Bus Details & Routes",
            "Live Bus Location Tracking for Students",
            "Track Fee Details & Dues",
            "Driver Details & Attendance Management",
            "Vehicle Document Expiry Reminders"
        ]
    },
    {
        pillText: "Integrated Module",
        titlePrefix: "Hostel",
        titleHighlight: "Management",
        tagline: "Everything You Need for Smarter Hostel Management.",
        gradientText: "from-blue-700 to-cyan-600",
        theme: {
            pillBg: "bg-blue-50 border-blue-100",
            pillDot: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]",
            pillText: "text-blue-600",
            glow1: "bg-blue-400/20",
            glow2: "bg-cyan-400/20",
            iconBg: "bg-blue-50",
            iconBgHover: "group-hover/item:bg-blue-500",
            iconBorder: "border-blue-100",
            iconBorderHover: "group-hover/item:border-blue-500",
            iconText: "text-blue-500",
            imageGlow: "from-blue-500/10 to-cyan-500/10",
            imageBacking: "from-blue-500/15 to-cyan-500/15"
        },
        imageSrc: "/images/homeimage/report8_premium.webp",
        imageAlt: "Hostel Management Dashboard",
        isImageRight: false,
        listItems: [
            "Hostel Allotment & Occupancy Tracking",
            "Live Student Tracking & In/Out Monitoring",
            "Fee Management & Automated Reminders",
            "Inventory & Asset Tracking",
            "Digital Room Transfer Requests"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Parent",
        titleHighlight: "Management",
        tagline: "From First Class to Final Result, Stay Informed.",
        gradientText: "from-pink-600 to-rose-600",
        theme: {
            pillBg: "bg-pink-50 border-pink-100",
            pillDot: "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.4)]",
            pillText: "text-pink-600",
            glow1: "bg-pink-300/20",
            glow2: "bg-rose-300/20",
            iconBg: "bg-pink-50",
            iconBgHover: "group-hover/item:bg-pink-500",
            iconBorder: "border-pink-100",
            iconBorderHover: "group-hover/item:border-pink-500",
            iconText: "text-pink-500",
            imageGlow: "from-pink-400/10 to-rose-400/10",
            imageBacking: "from-pink-400/15 to-rose-400/15"
        },
        imageSrc: "/images/homeimage/parent_mgmt_premium.webp",
        imageAlt: "Parent Management Dashboard",
        isImageRight: true,
        listItems: [
            "Send Instant Notifications to Parents via App, SMS & WhatsApp",
            "Automated Fee Reminders & Payment Status Updates",
            "Real-time Attendance Alerts & Monthly Progress Reports",
            "Performance Analytics & Exam Result Notifications",
            "Virtual Parent-Teacher Meeting (PTM) Scheduling",
            "Digital Consent Forms & Survey Participations",
            "Track Child's Academic Journey & Campus Activities"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Communication",
        titleHighlight: "Management",
        tagline: "One Platform for Faster, Smarter and More Effective Communication.",
        gradientText: "from-teal-600 to-emerald-600",
        theme: {
            pillBg: "bg-teal-50 border-teal-100",
            pillDot: "bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.4)]",
            pillText: "text-teal-600",
            glow1: "bg-teal-300/20",
            glow2: "bg-emerald-300/20",
            iconBg: "bg-teal-50",
            iconBgHover: "group-hover/item:bg-teal-500",
            iconBorder: "border-teal-100",
            iconBorderHover: "group-hover/item:border-teal-500",
            iconText: "text-teal-500",
            imageGlow: "from-teal-400/10 to-emerald-400/10",
            imageBacking: "from-teal-400/15 to-emerald-400/15"
        },
        imageSrc: "/images/homeimage/comm_mgmt_premium.webp",
        imageAlt: "Communication Management Dashboard",
        isImageRight: false,
        listItems: [
            "Centralized Multi-Channel Alert System (SMS, WhatsApp, Email, Push)",
            "Automated Circular Distribution to Campus Stakeholders",
            "Emergency Alerts & Real-time Update Broadcasting",
            "Scheduled Notifications & Reminders",
            "Two-way Communication Stream for Faculty and Students",
            "AI-Powered Auto Responders for Common Queries",
            "In-depth Delivery Reports & Analytics"
        ]
    }
];

const coreModule = (titlePrefix: string, label: string, icon: LucideIcon) => {
    const cmsIndex = coreModulesData.findIndex(m => m.titlePrefix === titlePrefix);
    const module = coreModulesData[cmsIndex];
    return { kind: "core" as const, module, cmsIndex, label, icon, anchor: `aicas-module-${titlePrefix.toLowerCase()}`, gradient: module.gradientText };
};
const newModule = (id: AicasNewModuleId, label: string, icon: LucideIcon, gradient: string) =>
    ({ kind: "new" as const, id, label, icon, anchor: `aicas-${id}`, gradient });

// Display order of every AICAS module. cmsIndex keeps each core module's saved CMS content attached to it.
const moduleSequence = [
    coreModule("Academic", "Academics", GraduationCap),
    coreModule("Administration", "Administration", Building2),
    newModule("crm", "Admission CRM", Users, "from-emerald-500 to-cyan-500"),
    coreModule("Examination", "Examination", ClipboardCheck),
    newModule("accreditation", "Accreditation", ShieldCheck, "from-violet-500 to-fuchsia-500"),
    coreModule("Learning", "LMS", BookOpen),
    coreModule("Placement", "Placement", Briefcase),
    coreModule("Hostel", "Hostel", BedDouble),
    newModule("ticketing", "Ticketing", Ticket, "from-amber-500 to-rose-500"),
    coreModule("Library", "Library", Library),
    coreModule("Transportation", "Transportation", Bus),
    coreModule("Communication", "Communication", Megaphone),
    coreModule("Parent", "Parent", HeartHandshake),
    newModule("lia", "LIA", Bot, "from-indigo-500 to-sky-500"),
];

export default function Aicas() {
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            whatsappNo: '',
            email: '',
            collegeName: '',
            designation: '',
            city: '',
            message: ''
        }
    });

    type AicasFormValues = { firstName: string; lastName: string; whatsappNo: string; email: string; collegeName: string; designation: string; city: string; message: string };

    const mutation = useMutation({
        mutationFn: async (data: AicasFormValues) => {
            return apiClient.post('/aicas', data);
        },
        onSuccess: () => {
            toast.success("Inquiry Sent!", {
                description: "We've received your request and will contact you shortly. 🚀",
            });
            reset();
            router.push('/');
        },
        onError: () => {
            toast.error("Failed to send inquiry", {
                description: "Please check your connection and try again.",
            });
        }
    });

    const onSubmit = (data: AicasFormValues) => {
        mutation.mutate(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#020617] relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative pt-24 pb-20">
                {/* Cinematic Dark Background System */}
                <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#020617]">
                    {/* Dark Premium Background Image */}
                    <div className="absolute inset-0 opacity-[0.6] mix-blend-screen">
                        <img
                            src="/images/aicas_dark_bg.png"
                            className="w-full h-full object-cover scale-100"
                            alt=""
                        />
                    </div>

                    {/* Dark Mode Glows */}
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] md:w-[1000px] md:h-[1000px] bg-indigo-600/20 rounded-full blur-[100px] md:blur-[160px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-purple-600/10 rounded-full blur-[90px] md:blur-[140px]" />

                    {/* Subtle Overlay to ensure readability */}
                    <div className="absolute inset-0 bg-slate-950/40" />
                </div>

                <div className="container relative z-10 flex flex-col items-center mx-auto px-4 md:px-6">

                    <div className="grid lg:grid-cols-2 gap-12 w-full items-center max-w-7xl mx-auto py-12">

                        {/* Left Column: Text & Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start text-left space-y-8 min-w-0 overflow-hidden"
                        >
                            {/* Shimmering Top Pill */}
                            <div className="relative group cursor-default inline-flex">
                                {/* Soft glow */}
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full blur-md opacity-40 md:group-hover:opacity-80 transition duration-1000" />
                                {/* Gradient border */}
                                <div className="relative rounded-full p-px bg-gradient-to-r from-indigo-400/80 via-purple-400/40 to-fuchsia-400/80">
                                    <div className="relative bg-slate-950/90 rounded-full pl-1.5 pr-5 py-1.5 flex items-center gap-3 overflow-hidden">
                                        {/* Shimmer sweep */}
                                        <motion.span
                                            aria-hidden="true"
                                            initial={{ x: "-150%" }}
                                            animate={{ x: "350%" }}
                                            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                                            className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
                                        />
                                        <span className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_16px_rgba(99,102,241,0.7)]">
                                            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                                        </span>
                                        <span className="relative text-xs md:text-sm font-black tracking-[0.35em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200">
                                            AICAS
                                        </span>
                                        <span className="relative flex w-2 h-2">
                                            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                                            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <EditableContent 
                                contentKey="aicas_hero_content"
                                description="AICAS Hero Heading & Subtitle"
                                defaultContent={
                                    <>
                                        <h2 className="font-black tracking-tight flex flex-col items-start drop-shadow-xl w-full">
                                            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6rem] text-slate-100 mb-2 lg:mb-4 leading-none">AI Powered</span>
                                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 pb-1 leading-[1.1]">Campus Automation</span>
                                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 pb-2 leading-[1.1]">System</span>
                                        </h2>

                                        <div className="space-y-6">
                                            <p className="text-xl md:text-2xl text-slate-300 font-bold max-w-xl leading-relaxed tracking-tight">
                                                Transforming Campuses with <span className="text-indigo-400 italic">AI Brilliance</span>
                                            </p>
                                            <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                                        </div>
                                    </>
                                }
                            />

                            <EditableContent 
                                contentKey="aicas_hero_stats"
                                description="AICAS Hero Stats"
                                defaultContent={
                                    <div className="pt-4 flex gap-6">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-white">40%</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency Boost</span>
                                        </div>
                                        <div className="w-[1px] bg-slate-800 h-10 self-center" />
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-white">100%</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Digital Inclusion</span>
                                        </div>
                                    </div>
                                }
                            />

                        </motion.div>

                        {/* Right Column: Premium Dark Contact Form */}
                        <motion.div
                            id="enquiry"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group h-full scroll-mt-28"
                        >
                            {/* Card Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />

                            <div className="relative bg-slate-900/90 rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col h-full overflow-hidden">
                                {/* Form Background Dark Theme Layer */}
                                <div className="absolute inset-0 z-0 opacity-[0.4] mix-blend-overlay pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                </div>

                                <div className="relative z-10 mb-8 text-center">
                                    <h3 className="text-3xl font-black text-white tracking-tight leading-none mb-3">
                                        Get Started Today
                                    </h3>
                                    <div className="h-1 w-12 bg-indigo-500 rounded-full mx-auto shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                                </div>

                                <form className="space-y-5 relative z-10 flex-grow" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                <Input
                                                    {...register("firstName", { required: true })}
                                                    placeholder="First Name*"
                                                    className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.firstName ? 'border-red-500/50' : ''}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                <Input
                                                    {...register("lastName", { required: true })}
                                                    placeholder="Last Name*"
                                                    className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.lastName ? 'border-red-500/50' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                <Input
                                                    {...register("whatsappNo", { required: true })}
                                                    placeholder="Whatsapp No.*"
                                                    type="tel"
                                                    className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.whatsappNo ? 'border-red-500/50' : ''}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                <Input
                                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                                    placeholder="Email*"
                                                    type="email"
                                                    className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.email ? 'border-red-500/50' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                <Input
                                                    {...register("collegeName", { required: true })}
                                                    placeholder="Institution / Organization*"
                                                    className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.collegeName ? 'border-red-500/50' : ''}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="relative">
                                                <IdCard className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                <Input
                                                    {...register("designation", { required: true })}
                                                    placeholder="Designation*"
                                                    className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.designation ? 'border-red-500/50' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="relative">
                                            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                            <Input
                                                {...register("city", { required: true })}
                                                placeholder="City*"
                                                className={`h-14 pl-12 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-base md:text-sm shadow-inner ${errors.city ? 'border-red-500/50' : ''}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute left-6 top-5 w-4 h-4 text-slate-500" />
                                        <Textarea
                                            {...register("message", { required: true })}
                                            placeholder="Message*"
                                            className={`min-h-[120px] bg-white/5 border-white/10 rounded-[1.5rem] focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 resize-none pt-5 pl-12 pr-6 font-bold text-base md:text-sm shadow-inner ${errors.message ? 'border-red-500/50' : ''}`}
                                        />
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            disabled={mutation.isPending}
                                            type="submit"
                                            className="w-full relative group/btn overflow-hidden rounded-[1.2rem] h-16 bg-white text-slate-950 font-black text-lg tracking-widest transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 uppercase group-hover/btn:text-white transition-colors duration-500 flex items-center gap-2">
                                                {mutation.isPending && <Loader2 className="w-5 h-5 animate-spin" />}
                                                {mutation.isPending ? "Sending..." : "Send Inquiry"}
                                            </span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </main>

            {/* Features Section - Redesigned as Premium Dark Mode (Obsidian) */}
            <section className="pt-16 md:pt-20 pb-24 md:pb-32 relative overflow-hidden bg-[#020617] border-y border-white/5">
                {/* High-Fidelity Fluid Wave Background System */}
                <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
                    {/* Radial Base Cinematic Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1e1b4b_0%,#020617_80%)] opacity-90" />

                    <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[120%] bg-indigo-500/5 blur-[80px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[120%] bg-purple-600/5 blur-[80px]" />

                    {/* Rhythmic 'Pulse' Pump Overlay */}
                    <motion.div
                        animate={{
                            scale: [1, 1.04, 1],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1] // Heartbeat-style ease
                        }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08)_0%,transparent_70%)] mix-blend-screen"
                    />

                    {/* Sinusoidal Fluid Waves (Pumping Motion) */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-10">
                        <svg className="w-[200%] h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path
                                d="M0 80 C 250 120, 250 20, 500 80 C 750 120, 750 20, 1000 80 V 100 H 0 Z"
                                fill="url(#waveGradient)"
                            />
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Technical Fine Mesh Overlay (Static for contrast) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_80%,transparent_100%)]" />

                    {/* Subtle Premium Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=''0 0 200 200'' xmlns=''http://www.w3.org/2000/svg''%3E%3Cfilter id=''noiseFilter''%3E%3CfeTurbulence type=''fractalNoise'' baseFrequency=''0.65'' numOctaves=''3'' stitchTiles=''stitch''/%3E%3C/filter%3E%3Crect width=''100%25'' height=''100%25'' filter=''url(%23noiseFilter)''/%3E%3C/svg%3E')]" />
                </div>

                <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    {/* Module Navigator: one box per module, in page order; click scrolls to that module */}
                    <nav aria-label="AICAS modules" className="mb-20 md:mb-28">
                        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
                            <div>
                                <span className="text-indigo-400 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">Explore AICAS</span>
                                <h2 className="mt-2 text-2xl md:text-3xl font-black text-white tracking-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">{moduleSequence.length}</span> Integrated Modules</h2>
                            </div>
                            <span className="hidden sm:block text-xs md:text-sm font-bold text-slate-500">Tap a module to jump to it</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 md:gap-3">
                            {moduleSequence.map((slot, i) => (
                                <motion.a
                                    key={slot.anchor}
                                    href={`#${slot.anchor}`}
                                    onClick={(e) => {
                                        const target = document.getElementById(slot.anchor);
                                        if (!target) return;
                                        e.preventDefault();
                                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                                        history.replaceState(null, "", `#${slot.anchor}`);
                                    }}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.03 }}
                                    className="group/nav relative flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.98] p-3 md:p-4 transition-all duration-300 min-w-0"
                                >
                                    <span className={`w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${slot.gradient} flex items-center justify-center shrink-0 shadow-lg md:group-hover/nav:scale-110 transition-transform duration-300`}>
                                        <slot.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                    </span>
                                    <span className="text-[13px] md:text-sm font-black text-slate-200 group-hover/nav:text-white leading-tight tracking-tight truncate lg:whitespace-normal">
                                        {slot.label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="flex flex-col gap-2">
                            <EditableContent 
                                contentKey="aicas_features_badge"
                                description="AICAS Features Badge"
                                defaultContent={<span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs">Why Choose AICAS</span>}
                            />
                            <div className="relative">
                                <span className="absolute -top-6 md:-top-10 -left-2 md:-left-4 text-6xl md:text-9xl font-black text-white/5 uppercase select-none pointer-events-none tracking-tighter">
                                    FEATURES
                                </span>
                                <EditableContent 
                                    contentKey="aicas_features_heading"
                                    description="AICAS Features Heading"
                                    defaultContent={
                                        <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight relative z-10">
                                            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 italic">Extra Edge</span>
                                        </h2>
                                    }
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                                className="group/feature relative w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] p-6 pb-12 md:p-8 md:pb-14 rounded-[2rem] md:rounded-[3rem] bg-slate-900/60 border border-white/5 shadow-2xl transition-all duration-700 hover:border-indigo-500/30 md:hover:-translate-y-3 overflow-hidden flex flex-col items-start"
                            >
                                {/* Decorative Glow Accent */}
                                <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/feature:opacity-100 blur-[80px] transition-all duration-1000" />

                                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center mb-5 md:mb-7 group-hover/feature:bg-indigo-600 md:group-hover/feature:scale-110 transition-all duration-500 shadow-2xl">
                                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 group-hover/feature:text-white transition-colors duration-500" />
                                </div>

                                <div className="relative z-10 flex-grow w-full text-left">
                                    <EditableContent 
                                        contentKey={`aicas_feature_${feature.cmsIndex}`}
                                        description={`AICAS Feature ${feature.cmsIndex + 1}`}
                                        defaultContent={
                                            <>
                                                <h3 className="text-xl md:text-[1.4rem] font-black text-white tracking-tight leading-snug lg:min-h-[2.75em] mb-2.5 md:mb-3 group-hover/feature:text-indigo-400 transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-slate-400 font-medium leading-relaxed transition-colors duration-500 group-hover/feature:text-slate-300 text-sm md:text-[15px]">
                                                    {feature.text}
                                                </p>
                                            </>
                                        }
                                    />
                                </div>

                                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 h-1.5 w-10 bg-white/5 rounded-full group-hover/feature:w-24 group-hover/feature:bg-indigo-500 transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Feature Showcase Sections - Redesigned to High-Fidelity Dark Mode */}
            <div className="space-y-0 relative mx-auto px-4 md:px-6">
                {/* Global Connective Background */}
                <div className="absolute inset-0 bg-slate-950 -z-10" />

                {moduleSequence.map((slot, pos) => {
                    const isImageRight = pos % 2 === 0;
                    const sectionBg = pos % 2 === 0 ? 'bg-[#020617]' : 'bg-transparent';
                    if (slot.kind === "new") {
                        return <AicasNewModuleSection key={slot.id} id={slot.id} serial={pos + 1} visualRight={isImageRight} className={sectionBg} />;
                    }
                    const { module, cmsIndex: idx } = slot;
                    return (
                    <section
                        key={idx}
                        id={slot.anchor}
                        className={`py-16 md:py-24 lg:py-32 relative overflow-hidden flex items-center scroll-mt-28 ${sectionBg}`}
                    >
                        {/* kinetic Technical Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                            {/* Theme-colored Glow */}
                            <div className={`absolute top-1/2 ${isImageRight ? 'left-[10%]' : 'right-[10%]'} w-[400px] h-[400px] md:w-[800px] md:h-[800px] ${module.theme.glow1} rounded-full blur-[100px] md:blur-[160px] -translate-y-1/2 opacity-[0.06]`} />

                            {/* Technical Grid/Dots */}
                            <div className={`absolute inset-y-0 ${isImageRight ? 'left-0 w-1/2' : 'right-0 w-1/2'} bg-[radial-gradient(#ffffff05_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-100`} />
                        </div>

                        <div className={`container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>

                            {/* Text Content Column */}
                            <motion.div
                                initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="lg:w-1/2 w-full space-y-8 md:space-y-12"
                            >
                                <div className="space-y-6 md:space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm`}
                                    >
                                        <span className={`w-2.5 h-2.5 rounded-full ${module.theme.pillDot}`} />
                                        <span className="text-lg md:text-xl font-black tracking-[0.2em] text-white tabular-nums leading-none">{String(pos + 1).padStart(2, "0")}</span>
                                    </motion.div>

                                    <div className="relative">
                                        <span className="absolute -top-12 -left-4 text-8xl md:text-[10rem] font-black text-white/5 uppercase select-none pointer-events-none tracking-tighter">
                                            {module.titlePrefix.substring(0, 5)}
                                        </span>
                                        <EditableContent 
                                            contentKey={`aicas_module_${idx}_heading`}
                                            description={`AICAS Module ${idx + 1} Heading`}
                                            defaultContent={
                                                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] relative z-10 py-1 overflow-visible">
                                                    {module.titlePrefix}
                                                    <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${module.gradientText} italic mt-2 pb-4 pr-6`}>
                                                        {module.titleHighlight}
                                                    </span>
                                                </h2>
                                            }
                                        />
                                    </div>

                                    {module.tagline && (
                                        <EditableContent
                                            contentKey={`aicas_module_${idx}_tagline`}
                                            description={`AICAS Module ${idx + 1} Subline`}
                                            defaultContent={<p className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug">{module.tagline}</p>}
                                        />
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-7">
                                    {/* Top points: same style as the regular points, listed first */}
                                    {module.topItems?.map((top, t) => (
                                        <motion.div
                                            key={`top-${t}`}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-5 group/item"
                                        >
                                            <div className={`mt-1 w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-gradient-to-br ${module.gradientText} group-hover/item:border-transparent transition-all duration-500 shadow-lg`}>
                                                <Check className="w-4 h-4 text-white transition-colors" strokeWidth={4} />
                                            </div>
                                            <EditableContent
                                                contentKey={`aicas_module_${idx}_top_${t}`}
                                                description={`AICAS Module ${idx + 1} Top Point ${t + 1}`}
                                                defaultContent={<span className="text-base font-bold text-slate-400 group-hover/item:text-white transition-colors leading-snug py-0.5">{top.title} — {top.text}</span>}
                                            />
                                        </motion.div>
                                    ))}
                                    {module.listItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.04 }}
                                            className="flex items-start gap-5 group/item"
                                        >
                                            <div className={`mt-1 w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-gradient-to-br ${module.gradientText} group-hover/item:border-transparent transition-all duration-500 shadow-lg`}>
                                                <Check className={`w-4 h-4 text-white group-hover/item:text-white transition-colors`} strokeWidth={4} />
                                            </div>
                                            <EditableContent 
                                                contentKey={`aicas_module_${idx}_item_${i}`}
                                                description={`AICAS Module ${idx + 1} Item ${i + 1}`}
                                                defaultContent={<span className="text-base font-bold text-slate-400 group-hover/item:text-white transition-colors leading-snug py-0.5">{item}</span>}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Dashboard Premium Image Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2 w-full relative group"
                            >
                                {/* Magnetic Glow */}
                                <div className={`absolute -inset-16 bg-gradient-to-br ${module.gradientText} opacity-0 blur-[60px] md:blur-[120px] rounded-full md:group-hover:opacity-[0.15] transition-all duration-1000`} />

                                <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden isolate transform-gpu bg-slate-900 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] md:shadow-[0_60px_120px_rgba(0,0,0,0.6)] md:group-hover:scale-[1.02] transition-all duration-[1.2s] ease-out">
                                    <img
                                        src={module.imageSrc}
                                        alt={module.imageAlt}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Glass Overlay for Premium Feel */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                                </div>
                            </motion.div>
                        </div>
                    </section>
                    );
                })}
            </div>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
}
