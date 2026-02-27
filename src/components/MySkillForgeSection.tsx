import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Rocket,
    ArrowRight,
    Sparkles,
    Globe2,
    Zap,
    Users,
    LayoutDashboard,
    Award
} from "lucide-react";

const MySkillForgeSection = () => {
    const features = [
        { text: "Comprehensive 3-Phase Program", icon: Zap, color: "from-indigo-500 to-blue-500" },
        { id: "01", text: "11 Tracks Endorsed by HR India", icon: Award, color: "from-purple-500 to-indigo-500" },
        { id: "02", text: "Hands-on Subject Expert Sessions", icon: Users, color: "from-blue-500 to-cyan-500" },
        { id: "03", text: "Live & Recorded Session Access", icon: Globe2, color: "from-indigo-600 to-purple-600" },
        { id: "04", text: "6-Week Premium Virtual Internship", icon: Sparkles, color: "from-cyan-500 to-blue-600" },
        { id: "05", text: "Integrated Student Portal Access", icon: LayoutDashboard, color: "from-blue-600 to-indigo-700" }
    ];

    return (
        <section className="min-h-screen flex items-center py-20 relative bg-[#ffffff] overflow-hidden font-sans">
            {/* Premium Mesh Background System (Stripe/Linear Inspired) */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Large Atmospheric Glows */}
                <div className="absolute top-[-20%] right-[-10%] w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)] blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] blur-[100px]" />

                {/* Technical Crystalline Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:24px_24px]" />
            </div>

            <div className="container max-w-7xl mx-auto relative z-10 px-6">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* Left Column: Product Branding & Narrative */}
                    <div className="space-y-12">
                        <Link to="/myskillforge">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-6 bg-white border border-slate-100 px-7 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] group hover:border-indigo-200 hover:shadow-[0_15px_45px_rgba(99,102,241,0.08)] transition-all duration-500"
                            >
                                <div className="bg-gradient-to-br from-[#6366f1] to-[#3b82f6] p-2.5 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                                    <Rocket className="text-white w-6 h-6" strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">MySkillForge</span>
                                    <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.5em] mt-1.5 leading-none">Skills for Tomorrow</span>
                                </div>
                            </motion.div>
                        </Link>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h1 className="text-6xl xl:text-8xl font-black text-slate-950 tracking-[-0.05em] leading-[0.9] inline-block">
                                    Unleash Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 italic pr-6 inline-block">Potential</span>
                                </h1>
                                <div className="flex items-center gap-4 group">
                                    <div className="h-px w-10 bg-indigo-200 group-hover:w-16 transition-all duration-500" />
                                    <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">Advanced Career Readiness</span>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl"
                            >
                                Skyrocket your employability by <span className="text-slate-900 font-bold">5x</span> with our 3-phase immersive program. Gain 11 professional certificates and real-world virtual experience.
                            </motion.p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link to="/myskillforge">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(99,102,241,0.25)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-4 bg-[#1e1b4b] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all"
                                >
                                    Explore Product
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                </motion.button>
                            </Link>
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center shadow-sm">
                                    <span className="text-[10px] font-black text-indigo-600">+2k</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: High-Density Feature Surface */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* 2x3 Compact Feature Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * i }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="p-5 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex items-center gap-4 group hover:border-indigo-300 hover:shadow-[0_25px_60px_rgba(99,102,241,0.1)] transition-all duration-500 h-28"
                                >
                                    {/* Shimmer Peak */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-indigo-50/10 to-transparent pointer-events-none" />

                                    <div className={`w-12 h-12 rounded-[1.25rem] bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-all duration-500`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[11px] font-black text-slate-950 uppercase tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
                                            {feature.text}
                                        </span>
                                        <div className="h-0.5 w-0 group-hover:w-full bg-indigo-400 transition-all duration-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Signature Quote Surface */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-10 rounded-[3rem] bg-gradient-to-br from-[#4f46e5] via-[#4338ca] to-[#1e1b4b] text-white shadow-[0_30px_90px_rgba(67,56,202,0.3)] relative overflow-hidden group border border-white/10"
                        >
                            {/* Atmospheric Fragments */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />

                            <Sparkles className="text-indigo-300 w-8 h-8 mb-6 relative z-10 animate-pulse" />
                            <p className="text-xl font-bold italic leading-relaxed tracking-tight relative z-10 text-indigo-50">
                                "MySkillForge is a three-phase employability program designed to equip students with advanced technical skills and essential problem solving, communication, and career-readiness abilities."
                            </p>
                            <div className="mt-8 flex items-center gap-4 relative z-10">
                                <div className="h-px w-12 bg-indigo-300/30" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200">AICAS Vision 2026</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MySkillForgeSection;
