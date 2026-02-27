import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ClipboardCheck,
    ArrowRight,
    CheckCircle2,
    Zap,
    ShieldCheck,
    BarChart3,
    LayoutList,
    Layers,
    Clock,
    Target,
    Brain,
    FileSearch,
    Lock
} from "lucide-react";

const TESTPREPPRO_URL = "/testpreppro";

const TestPrepProSection = () => {
    const features = [
        {
            title: "Comprehensive Subject Coverage",
            desc: "Extensive question banks covering all domains of competitive exams.",
            icon: Target,
            gradient: "from-blue-500 to-indigo-600",
            glow: "shadow-blue-500/20"
        },
        {
            title: "Adaptive Testing",
            desc: "Smart engine that adjusts difficulty based on student performance.",
            icon: Brain,
            gradient: "from-indigo-500 to-purple-600",
            glow: "shadow-indigo-500/20"
        },
        {
            title: "Multiple Question Formats",
            desc: "Support for MCQs, subjective, and complex problem-solving patterns.",
            icon: FileSearch,
            gradient: "from-purple-500 to-fuchsia-600",
            glow: "shadow-purple-500/20"
        },
        {
            title: "Performance Analysis",
            desc: "Real-time, detailed insights into strengths and improvement areas.",
            icon: BarChart3,
            gradient: "from-fuchsia-500 to-pink-600",
            glow: "shadow-fuchsia-500/20"
        },
        {
            title: "Enhanced Security Features",
            desc: "Proctoring and encryption to ensure exam integrity and fairness.",
            icon: Lock,
            gradient: "from-violet-500 to-purple-600",
            glow: "shadow-violet-500/20"
        }
    ];

    return (
        <section className="min-h-screen flex items-center py-10 relative bg-[#050510] overflow-hidden font-sans">
            {/* Cinematic Dark Background Image */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/test_prep_pro_ultimate.png"
                    alt="Dark Assessment Background"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-transparent to-[#050510] opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] opacity-90" />

                {/* Atmospheric Glows */}
                <motion.div
                    animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full"
                />
                <motion.div
                    animate={{ opacity: [0.1, 0.15, 0.1], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"
                />
            </div>

            <div className="container max-w-7xl mx-auto relative z-10 px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Branding & Pitch (5/12 cols) */}
                    <div className="lg:col-span-5 space-y-10">
                        <Link to={TESTPREPPRO_URL}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-4 rounded-[2rem] shadow-2xl group hover:scale-[1.03] transition-all duration-500"
                            >
                                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3.5 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-500">
                                    <ClipboardCheck className="text-white w-7 h-7" strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-white tracking-tight uppercase leading-none">Test Prep Pro</span>
                                    <div className="h-[1px] w-full bg-white/10 my-1.5" />
                                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.5em] leading-none">Ace · Prepare · Excel</span>
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
                                <h2 className="text-3xl sm:text-5xl xl:text-7xl font-black text-white tracking-[-0.05em] leading-[1.05]">
                                    Elevate Academic <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Excellence</span>
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div className="h-[2px] w-12 bg-blue-500 rounded-full" />
                                    <p className="text-sm font-black text-blue-400 uppercase tracking-[0.3em]">
                                        Advanced Assessment Engine
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
                                Test Prep Pro is a high-performance assessment platform designed to elevate the way students prepare for competitive exams and recruitment.
                            </motion.p>
                        </div>

                        <Link to={TESTPREPPRO_URL}>
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(59,130,246,0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-500/25"
                            >
                                Explore Product
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Right Column: High-Density Interactive Cards (7/12 cols) */}
                    <div className="lg:col-span-7 space-y-4">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i, duration: 0.6 }}
                                whileHover={{ x: -10, scale: 1.02 }}
                                className="p-4 md:p-6 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 group hover:bg-white/[0.08] hover:border-blue-500/30 shadow-2xl transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-8 relative overflow-hidden"
                            >
                                {/* Floating Glow Fragment */}
                                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl`} />

                                {/* Dynamic Icon Container */}
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${feature.glow}`}>
                                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                <div className="space-y-1.5 flex-1 min-w-0">
                                    <div className="flex items-center gap-3">
                                        <h5 className="text-base md:text-lg font-black text-white uppercase tracking-tight group-hover:text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 transition-all text-center sm:text-left truncate">
                                            {feature.title}
                                        </h5>
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed group-hover:text-slate-200 transition-colors text-center sm:text-left">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Refined Action Arrow */}
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-500 border border-white/10">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </motion.div>
                        ))}

                        {/* Bottom Status Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-5 flex flex-col md:flex-row items-center justify-between gap-4 rounded-[2rem] bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-3xl border border-white/10 text-white/70 px-6 md:px-10 shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.2em]">Live Assessments • 24/7 Monitoring</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Engine Online</span>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestPrepProSection;
