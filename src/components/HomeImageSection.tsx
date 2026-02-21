import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Terminal, Binary, Monitor, Sparkles, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        <section className="pt-16 pb-32 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-10 py-3 rounded-full shadow-sm"
                    >
                        <Cpu className="text-primary w-6 h-6" />
                        <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                            AICAS
                        </h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/aicas')}
                        className="group flex items-center gap-3 bg-[#1E1B4B] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-900/10 hover:bg-primary"
                    >
                        Explore Product
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>

                {/* Primary Showcase Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 bg-slate-50 border border-slate-100 md:scale-[1.05] transition-transform mb-12"
                >
                    <img
                        src="/images/homeimage/home1.svg"
                        alt="AICAS Platform Showcase"
                        className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </motion.div>

                {/* SyntaxWorks High-End Module UI */}
                <div className="max-w-7xl mx-auto pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-20 px-2 gap-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-10 py-3 rounded-full shadow-sm"
                            >
                                <Binary className="text-primary w-6 h-6" />
                                <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                                    SyntaxWorks
                                </h2>
                            </motion.div>
                        </div>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl hover:bg-primary transition-all duration-300"
                        >
                            <span className="text-sm font-black uppercase tracking-widest">Explore Product</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                        {/* Main IDE Module (8 Cols) - NOW ON THE LEFT */}
                        <div className="lg:col-span-8 bg-[#0a0815] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/5 flex flex-col md:flex-row min-h-[550px]">
                            {/* Left Side: Tabs List */}
                            <div className="md:w-1/3 bg-[#0d0b1d] border-r border-white/5 py-10 flex flex-col">
                                <div className="px-8 mb-10 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/50 shadow-[0_0_10px_rgba(244,63,94,0.2)]" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]" />
                                    </div>
                                    <Monitor className="w-3.5 h-3.5 text-white/10" />
                                </div>
                                <div className="space-y-1 flex-1">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full text-left px-10 py-6 transition-all relative group ${activeTab === tab.id
                                                ? "text-white"
                                                : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                                                }`}
                                        >
                                            {activeTab === tab.id && (
                                                <motion.div
                                                    layoutId="ideTabActive"
                                                    className="absolute inset-0 bg-white/[0.03] border-l-4 border-primary shadow-[inset_4px_0_20px_rgba(59,130,246,0.1)]"
                                                />
                                            )}
                                            <span className="relative z-10 text-[13px] font-black uppercase tracking-wider block">
                                                {tab.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Center: Content Area */}
                            <div className="flex-1 p-10 md:p-14 bg-gradient-to-br from-[#0a0815] via-[#0d0b1d] to-[#120e2b] relative overflow-hidden">
                                {/* Floating Coding Tags Animation */}
                                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                    {[
                                        { label: "<html>", color: "from-orange-500/80", glow: "shadow-orange-500/50", x: "10%", y: "75%", delay: 0 },
                                        { label: "{css}", color: "from-blue-500/80", glow: "shadow-blue-500/50", x: "85%", y: "65%", delay: 5 },
                                        { label: "JS", color: "from-yellow-400/80", glow: "shadow-yellow-400/50", x: "70%", y: "85%", delay: 10 },
                                        { label: "Python", color: "from-emerald-400/80", glow: "shadow-emerald-400/50", x: "25%", y: "80%", delay: 15 },
                                        { label: "C++", color: "from-blue-600/80", glow: "shadow-blue-600/50", x: "55%", y: "68%", delay: 20 },
                                        { label: "Java", color: "from-red-500/80", glow: "shadow-red-500/50", x: "15%", y: "88%", delay: 25 },
                                    ].map((tag, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 0, 1, 1, 0, 0],
                                                scale: [0.8, 0.8, 1.2, 1.2, 0.8, 0.8],
                                                y: ["10%", "0%", "-30%", "-30%", "0%", "10%"],
                                                rotate: [0, 0, 15, -15, 0, 0]
                                            }}
                                            transition={{
                                                duration: 30,
                                                repeat: Infinity,
                                                delay: tag.delay,
                                                times: [0, 0.1, 0.2, 0.4, 0.5, 1],
                                                ease: "easeInOut"
                                            }}
                                            className={`absolute px-5 py-2.5 rounded-xl bg-gradient-to-br ${tag.color} to-black/40 border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)] ${tag.glow} flex items-center justify-center`}
                                            style={{ left: tag.x, top: tag.y }}
                                        >
                                            <span className="text-[12px] font-black uppercase tracking-widest text-white drop-shadow-lg">
                                                {tag.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
                                    <Binary className="w-64 h-64 text-white" />
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className="h-full flex flex-col"
                                    >
                                        <div className="space-y-10 flex-1">
                                            {tabs.find(t => t.id === activeTab)?.description.map((p, i) => (
                                                <p key={i} className="text-xl md:text-2xl text-slate-100 font-medium leading-[1.8] tracking-tight">
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="mt-12 flex items-center gap-6 opacity-40">
                                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                                            <Sparkles className="w-5 h-5 text-primary" />
                                            <div className="h-px w-12 bg-white/5" />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Summary Card (4 Cols) - NOW ON THE RIGHT */}
                        <div className="lg:col-span-4 bg-gradient-to-b from-[#1a163a] to-[#0a0815] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl flex flex-col justify-between">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black text-white tracking-tighter leading-none">
                                        The Next Gen <br />
                                        Coding Compiler
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                        Designed to revolutionize the development of students preparing for recruitments.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {bulletPoints.map((point, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <ChevronRight className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12 relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 p-2 shadow-2xl group"
                            >
                                <img
                                    src="/images/homeimage/home-2.png"
                                    alt="SyntaxWorks Compiler"
                                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default HomeImageSection;
