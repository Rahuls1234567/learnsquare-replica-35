import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Terminal, Binary, Monitor, Sparkles, Cpu, CheckCircle2, GraduationCap, Building2, FileCheck, Briefcase, Laptop, Library, Bus, BedDouble, Users, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const HomeImageSection = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Comprehensive");

    const tabs = [
        {
            id: "Comprehensive",
            label: "Comprehensive Language Support",
            description: [
                "With Comprehensive Language Support in SyntaxWorks, you can code seamlessly in your favorite languages—whether it's Python, Java, C++, or JavaScript.",
                "No matter what language your project or employer demands, SyntaxWorks lets you compile, interpret, and execute code effortlessly, giving you the versatility to excel in any coding environment."
            ]
        },
        {
            id: "Algorithm",
            label: "Algorithm and Data Structure Practice",
            description: [
                "With Algorithm and Data Structure Practice in SyntaxWorks, you get access to a rich library of templates and resources to sharpen your skills.",
                "Whether you're preparing for interviews or refining your coding knowledge, SyntaxWorks helps you master essential algorithms and data structures, ensuring you're always ahead of the curve."
            ]
        },
        {
            id: "Analytics",
            label: "Detailed Performance Analytics",
            description: [
                "With Detailed Performance Analytics in SyntaxWorks, you can track your coding progress like never before. Get in-depth insights into your strengths and weaknesses, monitor improvements.",
                "Focus on areas that need attention—giving you the power to continuously sharpen your skills and ace every challenge."
            ]
        },
        {
            id: "Testing",
            label: "Dynamic Testings",
            description: [
                "With Dynamic Testing in SyntaxWorks, your coding challenges adapt to you! As you improve, SyntaxWorks adjusts question difficulty in real-time.",
                "Ensuring a personalized and engaging experience that keeps pushing your skills to the next level."
            ]
        }
    ];

    const bulletPoints = [
        "Comprehensive Language Support",
        "Dynamic Testing",
        "100+ Tests of Various Levels",
        "Company Specific Assessments",
        "Detailed Performance Analytics"
    ];

    return (
        <>
            <section className="pt-16 pb-20 bg-[#ffffff] relative overflow-hidden font-sans">
                {/* Premium Background Elements */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/40 blur-[150px] rounded-full -mr-64 -mt-64" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/30 blur-[130px] rounded-full -ml-40 -mb-40" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
                    {/* AICAS Central Premium Badge */}
                    <div className="flex justify-center mb-20 relative z-20">
                        <Link to="/aicas">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col sm:flex-row items-center gap-6 bg-white border border-indigo-50/80 px-10 py-5 rounded-[3rem] shadow-[0_15px_45px_rgba(99,58,242,0.05)] hover:shadow-[0_25px_60px_rgba(99,58,242,0.1)] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                            >
                                <div className="bg-gradient-to-br from-[#633af2] to-[#2b5ae9] p-4 rounded-2xl shadow-xl shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-500">
                                    <Cpu className="text-white w-8 h-8 shrink-0" strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <span className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-none mb-1 text-slate-950">AICAS</span>
                                    <span className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#633af2] to-[#2b5ae9] uppercase tracking-[0.4em]">AI Campus Automation</span>
                                </div>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Header Section: Summary & Checklist */}
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between mb-24">
                        {/* Title & Description */}
                        <div className="lg:w-1/2 space-y-10">
                            <div className="space-y-6">

                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[1.05]"
                                >
                                    Transforming Campuses <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 italic inline-block pr-6">with AI Brilliance</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl"
                                >
                                    Our AI Powered Campus Automation Solution (ERP) streamlines administrative and academic processes, enhancing efficiency and accuracy in managing students, faculty, staff, and all stakeholders.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.button
                                    onClick={() => navigate('/aicas')}
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,58,242,0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-4 bg-gradient-to-r from-[#633af2] to-[#4a26c9] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-indigo-500/20"
                                >
                                    Explore Product
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Checklist - Premium Pill Style */}
                        <div className="lg:w-[45%] space-y-3">
                            {[
                                "AI Powered Architecture",
                                "NEP2020, NBA, NAAC Compliant",
                                "10 Managements covering all Depts",
                                "White-labelled App Ecosystem",
                                "Deeply Customisable Framework"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="flex items-center gap-5 bg-gradient-to-r from-white to-slate-50/80 backdrop-blur-sm border border-slate-100 p-5 rounded-[1.5rem] shadow-[0_8px_25px_rgba(99,102,241,0.02)] group hover:from-white hover:to-indigo-50/30 hover:border-indigo-400/30 hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-500 relative overflow-hidden cursor-pointer"
                                >
                                    {/* Shimmer Sweep Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10" />

                                    <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#633af2] group-hover:to-[#4a26c9] group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-500 relative z-20">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                                    </div>
                                    <span className="text-sm font-black text-slate-700 uppercase tracking-tight group-hover:text-indigo-900 transition-colors relative z-20">{item}</span>

                                    {/* Micro-Interaction Highlight */}
                                    <div className="absolute left-0 w-1 h-0 group-hover:h-full bg-indigo-600 transition-all duration-500 rounded-full" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                        {[
                            { num: '01', title: 'PARENT MANAGEMENT', desc: 'Send Various Notifications to Parents, Fee Reminders, Send Attendance Information along with Several other Relevant College Updates', icon: Users, color: 'from-pink-500 to-rose-600', shadow: 'shadow-pink-500/20' },
                            { num: '02', title: 'COMMUNICATION MANAGEMENT', desc: 'Stay Connected with Entire Campus and Send Various Information Via SMS, WhatsApp, Push Notifications & E-Mails', icon: MessageSquare, color: 'from-teal-500 to-emerald-600', shadow: 'shadow-teal-500/20' },
                            { num: '03', title: 'ACADEMICS MANAGEMENT', desc: 'End to End Management of College Academics, Daily Classes, Students Progress, Communication to Faculty & Students and all Day to Day Activities', icon: GraduationCap, color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/20' },
                            { num: '04', title: 'ADMINISTRATION MANAGEMENT', desc: 'End-End Management of College Faculty, Students, Staff, Fee Payments, Daily Ops, Payrolls and Many More', icon: Building2, color: 'from-rose-500 to-pink-600', shadow: 'shadow-rose-500/20' },
                            { num: '05', title: 'EXAMINATION MANAGEMENT', desc: 'Complete Examination Management which Covers Exam Schedule, Online Tests, Results & Analytics', icon: FileCheck, color: 'from-amber-500 to-orange-600', shadow: 'shadow-amber-500/20' },
                            { num: '06', title: 'PLACEMENT MANAGEMENT', desc: 'End to End Management of Campus Placements from 1st Stage till Last Stage along with Historical Data Analyses', icon: Briefcase, color: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/20' },
                            { num: '07', title: 'LEARNING MANAGEMENT', desc: 'Interactive LMS with Various Content Types along with Online Tests, Coding Compiler and Several Other Functionalities', icon: Laptop, color: 'from-purple-500 to-fuchsia-600', shadow: 'shadow-purple-500/20' },
                            { num: '08', title: 'LIBRARY MANAGEMENT', desc: 'Library Books and Asset Management Tracking, Book Issues/Returns and Reminders along with Several Other Functionalities', icon: Library, color: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/20' },
                            { num: '09', title: 'TRANSPORT MANAGEMENT', desc: 'LIVE Bus Tracking, Maintenance of Vehicle Documents & Records, Manage Drivers Payrolls & other Functionalities', icon: Bus, color: 'from-orange-500 to-red-600', shadow: 'shadow-orange-500/20' },
                            { num: '10', title: 'HOSTEL MANAGEMENT', desc: 'Hostel Allotment, Live Tracking Students, Hostel Fee Management, Inventory, Due List & Reports', icon: BedDouble, color: 'from-indigo-500 to-violet-600', shadow: 'shadow-indigo-500/20' },
                        ].map((management, i) => (
                            <motion.div
                                key={management.num}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.05 * i,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`group relative bg-gradient-to-br ${management.color} border border-white/20 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_50px_100px_rgba(0,0,0,0.2)] transition-all duration-700 flex flex-col items-start overflow-hidden cursor-pointer text-white`}
                            >
                                {/* Glass Texture & Depth Overlay */}
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity mix-blend-overlay"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                                />
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-start justify-between w-full mb-4 sm:mb-8 relative z-10">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                                        <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform duration-500">
                                            <management.icon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[8px] sm:text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Module</span>
                                        <span className="text-2xl sm:text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors tracking-tighter leading-none">
                                            {management.num}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 sm:space-y-4 relative z-10 flex-grow">
                                    <h4 className="text-[10px] sm:text-sm md:text-base font-black uppercase tracking-tight leading-[1.1]">
                                        {management.title.split(' ').map((word, idx) => (
                                            <span key={idx} className="block">{word}</span>
                                        ))}
                                    </h4>
                                    <div className="w-6 h-[2px] bg-white/20 group-hover:w-full transition-all duration-700 rounded-full" />
                                    <p className="text-[9px] sm:text-[11px] text-white/70 font-medium leading-relaxed group-hover:text-white transition-colors line-clamp-3 sm:line-clamp-4">
                                        {management.desc}
                                    </p>
                                </div>

                                {/* Interactive Shimmer Sweep */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SyntaxWorks Premium SaaS Section */}
            <section className="min-h-screen flex items-center py-20 relative bg-[#030014] overflow-hidden">
                {/* Cinematic Dark Background Image */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <img
                        src="/syntaxworks_premium_bg.png"
                        alt="SyntaxWorks Dark Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] opacity-90" />
                </div>

                {/* Animated Ambient Elements */}
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-1 animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-1 animate-pulse delay-1000" />

                <div className="container max-w-7xl mx-auto relative z-10 px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Branding & Pitch (5/12 cols) */}
                        <div className="lg:col-span-5 space-y-10">
                            <Link to="/syntaxworks">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-4 rounded-[2rem] shadow-2xl group hover:scale-[1.03] transition-all duration-500"
                                >
                                    <div className="bg-gradient-to-br from-[#633af2] to-[#4a26c9] p-4 rounded-3xl text-white shadow-[0_20px_40px_rgba(99,58,242,0.2)] group-hover:rotate-12 transition-transform duration-500">
                                        <Binary className="w-8 h-8" strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-black text-white tracking-tight uppercase leading-none mb-1.5">SyntaxWorks</span>
                                        <span className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#633af2] via-[#2b5ae9] to-blue-400 uppercase tracking-[0.45em]">Code · Build · Ship</span>
                                    </div>
                                </motion.div>
                            </Link>

                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-[-0.05em] leading-[1.05]">
                                        The Next Gen <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 italic inline-block pr-8">Coding Compiler</span>
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <div className="h-[2px] w-12 bg-indigo-500 rounded-full" />
                                        <p className="text-sm font-black text-indigo-400 uppercase tracking-[0.3em]">
                                            Professional IDE Ecosystem
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg"
                                >
                                    Designed to revolutionize development for students preparing for recruitments with world-class toolsets and real-time execution.
                                </motion.p>
                            </div>

                            {/* Bullet Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {bulletPoints.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 group-hover:bg-indigo-600 transition-colors">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white" />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 group-hover:text-white transition-colors">{point}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/syntaxworks">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(99,58,242,0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-4 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-indigo-500/25"
                                >
                                    Explore Product
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Right Column: High-Density Interactive Cards (7/12 cols) */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4">
                            {tabs.map((tab, i) => (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="p-4 sm:p-6 rounded-xl sm:rounded-[1.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden"
                                >
                                    {/* Floating Glow Fragment */}
                                    <div className="absolute -right-10 -top-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                            {i === 0 && <Monitor className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-400" />}
                                            {i === 1 && <Binary className="w-5 h-5 sm:w-7 sm:h-7 text-purple-400" />}
                                            {i === 2 && <BarChart3 className="w-5 h-5 sm:w-7 sm:h-7 text-blue-400" />}
                                            {i === 3 && <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-amber-400" />}
                                        </div>
                                        <span className="text-xl sm:text-2xl font-black text-white/5 group-hover:text-white/10 transition-colors tracking-tighter">0{i + 1}</span>
                                    </div>

                                    <h4 className="text-[10px] sm:text-base font-black text-white uppercase tracking-tight mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors">
                                        {tab.id === "Comprehensive" && "Language Support"}
                                        {tab.id === "Algorithm" && "Algo & DS Practice"}
                                        {tab.id === "Analytics" && "Deep Analytics"}
                                        {tab.id === "Testing" && "Dynamic Testing"}
                                    </h4>
                                    <p className="text-[9px] sm:text-[13px] text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors line-clamp-3 sm:line-clamp-none">
                                        {tab.description[0].substring(0, 80)}...
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <div className="h-px flex-1 bg-white/10" />
                                        <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                                    </div>
                                </motion.div>
                            ))}

                            {/* Bottom Identity Card (Spans 2 cols) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="sm:col-span-2 p-6 flex flex-col sm:flex-row items-center justify-between rounded-[2.5rem] bg-indigo-600/10 backdrop-blur-3xl border border-indigo-500/20 text-white/70 px-10 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                                        <Terminal className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">Live Compiler • Multilingual Support</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Compiler Stable</span>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeImageSection;
