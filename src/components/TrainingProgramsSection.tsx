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
        <section className="min-h-screen py-16 relative bg-[#04041d] overflow-hidden font-sans text-white w-full">
            {/* Ultra-Premium Dark Nebula Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a2e_0%,#04041a_100%)]" />

                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(168,85,247,0.3)_0%,transparent_70%)] blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,transparent_70%)] blur-[100px]"
                />

                <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />
            </div>

            <div className="w-full relative z-10 px-4 md:px-12">
                {/* Header Branding Section - Compact */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-8">
                    <div className="space-y-4 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-2.5 rounded-xl shadow-2xl group"
                        >
                            <div className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-2 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:rotate-12 transition-transform duration-500">
                                <Presentation className="text-white w-5 h-5" strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tight uppercase leading-none text-white">Training Programs</span>
                                <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-[0.3em] mt-1.5 leading-none">Industry Ready</span>
                            </div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[1]"
                        >
                            Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic inline-block pr-6">Offline Training</span>
                        </motion.h2>

                        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                            {mainFeatures.map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-200/60 uppercase">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-4 bg-white/5 backdrop-blur-3xl border border-white/10 px-10 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all"
                    >
                        Explore Product
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                    </motion.button>
                </div>

                {/* SaaS Dynamic Grid - Full Width Auto-Fit */}
                <div
                    className="grid gap-6 w-full"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
                    }}
                >
                    {trainingCategories.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.02 * i }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-6 rounded-2xl bg-white backdrop-blur-3xl border border-white transition-all duration-500 group relative overflow-hidden flex flex-col h-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
                        >
                            {/* Card Background Shimmer */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1800ms] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-20" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ${item.glow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-black text-slate-100 group-hover:text-indigo-500/10 transition-colors tracking-tighter tabular-nums leading-none">{item.id}</span>
                            </div>

                            <div className="relative z-10 space-y-2 flex-grow">
                                <h4 className="text-[15px] font-black uppercase tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-[11px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className={`absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity blur-2xl rounded-full`} />

                            {/* Interactive Progress Line */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-700 ease-out`} />
                        </motion.div>
                    ))}
                </div>

                {/* Vision Quote - Now as a wide banner at bottom if space is available or integrated */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-[2s]" />
                    <div className="flex items-start gap-4 max-w-2xl">
                        <Sparkles className="text-indigo-400 w-6 h-6 shrink-0 mt-1" />
                        <p className="text-base text-blue-100/80 font-bold italic leading-relaxed">
                            "Our mission is to foster a real-world learning environment that propels every student toward excellence."
                        </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                        <div className="h-px w-8 bg-indigo-500/30" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">AICAS Vision 2026</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainingProgramsSection;
