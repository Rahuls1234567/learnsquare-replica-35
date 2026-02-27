import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Presentation,
    ArrowRight,
    CheckCircle2,
    Brain,
    MessagesSquare,
    Cpu,
    BarChart4,
    ShieldCheck,
    Code2,
    Wifi,
    Binary,
    Infinity as LucideInfinity,
    Cloud,
    Microchip,
    Usb,
    Sparkles,
    LucideIcon
} from "lucide-react";

interface TrainingCategory {
    id: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
    glow: string;
}

const TrainingProgramsSection = () => {
    const mainFeatures = [
        "Programs Ranging 60 - 300 Hours",
        "Subject Expert Driven Curriculum",
        "Hands-on Practical Mastery",
        "Live Project Deployment",
        "Grand Finale Hackathons"
    ];

    const trainingCategories: TrainingCategory[] = [
        { id: "01", title: "Non Technical", desc: "Aptitude, Reasoning, Verbal.", icon: Brain, color: "from-blue-500 to-indigo-600", glow: "shadow-blue-500/40" },
        { id: "02", title: "Interview Prep", desc: "DS, Algos, OOPS, DBMS.", icon: MessagesSquare, color: "from-purple-500 to-indigo-600", glow: "shadow-purple-500/40" },
        { id: "03", title: "AI & ML", desc: "DL, NLP, Data Processing.", icon: Cpu, color: "from-indigo-500 to-blue-600", glow: "shadow-indigo-500/40" },
        { id: "04", title: "Data Science", desc: "EDA, Big Data, Visuals.", icon: BarChart4, color: "from-cyan-500 to-blue-600", glow: "shadow-cyan-500/40" },
        { id: "05", title: "Cyber Security", desc: "Network, IAM, Malware.", icon: ShieldCheck, color: "from-red-500 to-orange-600", glow: "shadow-red-500/20" },
        { id: "06", title: "Full Stack", desc: "Web Dev & DB Systems.", icon: Code2, color: "from-emerald-500 to-teal-600", glow: "shadow-emerald-500/40" },
        { id: "07", title: "IoT", desc: "Hardware, Sensors, Apps.", icon: Wifi, color: "from-amber-500 to-orange-600", glow: "shadow-amber-500/40" },
        { id: "08", title: "Blockchain", desc: "Crypto & Smart Contracts.", icon: Binary, color: "from-slate-600 to-slate-800", glow: "shadow-slate-500/40" },
        { id: "09", title: "DevOps", desc: "CI/CD & Cloud Infrastructure.", icon: LucideInfinity, color: "from-pink-500 to-rose-600", glow: "shadow-pink-500/40" },
        { id: "10", title: "Cloud", desc: "Systems, Security & Migration.", icon: Cloud, color: "from-sky-500 to-blue-600", glow: "shadow-sky-500/40" },
        { id: "11", title: "VLSI", desc: "Digital & Analog Circuits.", icon: Microchip, color: "from-violet-500 to-purple-600", glow: "shadow-violet-500/40" },
        { id: "12", title: "Embedded", desc: "Controllers & Micro-Procs.", icon: Usb, color: "from-lime-500 to-green-600", glow: "shadow-lime-500/40" }
    ];

    return (
        <section className="min-h-screen py-24 relative bg-[#ffffff] overflow-hidden font-sans text-slate-900 w-full">
            {/* Premium Light Theme Atmospheric Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Soft Platform Glows */}
                <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-[120px]" />
                <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(168,85,247,0.04)_0%,transparent_70%)] blur-[100px]" />
                <div className="absolute bottom-[0%] left-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] blur-[100px]" />

                {/* Subtle Refined Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            <div className="w-full relative z-10 px-4 md:px-12">
                {/* Header Branding Section - Clean SaaS Layout */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-20 gap-10">
                    <div className="space-y-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-6 bg-white border border-slate-100 px-7 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] group transition-all hover:bg-slate-50"
                        >
                            <div className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] p-3 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:rotate-6 transition-transform duration-500">
                                <Presentation className="text-white w-6 h-6" strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tight uppercase leading-none text-slate-950">Training Programs</span>
                                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.4em] mt-2 leading-none">Industry Ready</span>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] leading-[1.1] text-slate-950 whitespace-nowrap"
                        >
                            Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 italic inline-block pr-4">Offline Training</span>
                        </motion.h2>

                        <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4">
                            {mainFeatures.map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 group-hover:text-white" />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(99,102,241,0.2)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-5 bg-slate-950 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] shadow-2xl transition-all"
                    >
                        Explore Product
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </motion.button>
                </div>

                {/* SaaS Dynamic Grid - Vibrant Compact Cards */}
                <div
                    className="grid gap-5 w-full"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))'
                    }}
                >
                    {trainingCategories.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.05 * i,
                                duration: 0.6
                            }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className={`p-7 rounded-[2.5rem] bg-gradient-to-br ${item.color} border border-white/20 transition-all duration-500 group relative overflow-hidden flex flex-col h-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] cursor-pointer text-white`}
                        >
                            {/* Glass Texture & Depth Overlay */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
                                    <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                        <item.icon className="w-7 h-7" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors tracking-tighter leading-none">
                                    {item.id}
                                </span>
                            </div>

                            <div className="relative z-10 space-y-3 flex-grow">
                                <h4 className="text-lg font-black uppercase tracking-tight leading-tight">
                                    {item.title}
                                </h4>
                                <div className="w-8 h-[2px] bg-white/20 group-hover:w-full transition-all duration-700 rounded-full" />
                                <p className="text-[11px] text-white/70 font-medium leading-relaxed group-hover:text-white transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Decorative Shimmer Sweep */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />


                        </motion.div>
                    ))}
                </div>

                {/* Vision Statement - Clean Enterprise Banner */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-[radial-gradient(circle_at_end,rgba(99,102,241,0.05),transparent)] pointer-events-none" />

                    <div className="flex items-start gap-6 max-w-3xl relative z-10">
                        <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                            <Sparkles className="text-indigo-600 w-6 h-6" />
                        </div>
                        <p className="text-lg md:text-xl text-slate-600 font-bold italic leading-relaxed">
                            "Our mission is to foster a real-world learning environment that propels every student toward excellence."
                        </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-4 relative z-10">
                        <div className="h-px w-10 bg-indigo-500/20" />
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-500">AICAS Vision 2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingProgramsSection;
