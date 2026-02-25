import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Rocket,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    Globe2,
    Zap,
    Users,
    LayoutDashboard,
    GraduationCap,
    Award
} from "lucide-react";

const MySkillForgeSection = () => {
    // Merged and full content list
    const features = [
        { text: "Comprehensive 3-Phase Program", icon: Zap, color: "from-indigo-500 to-blue-500" },
        { text: "11 Tracks Endorsed by HR India", icon: Award, color: "from-purple-500 to-indigo-500" },
        { text: "Hands-on Subject Expert Sessions", icon: Users, color: "from-blue-500 to-cyan-500" },
        { text: "Live & Recorded Session Access", icon: Globe2, color: "from-indigo-600 to-purple-600" },
        { text: "6-Week Premium Virtual Internship", icon: Sparkles, color: "from-cyan-500 to-blue-600" },
        { text: "Integrated Student Portal Access", icon: LayoutDashboard, color: "from-blue-600 to-indigo-700" }
    ];

    return (
        <section className="min-h-screen flex items-center py-10 relative bg-[#f8faff] overflow-hidden font-sans">
            {/* High-Impact Vibrant Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Large Colorful Gradients */}
                <div className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-indigo-200/40 via-blue-100/30 to-purple-100/40 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-blue-200/30 via-cyan-100/20 to-indigo-100/30 blur-[130px] rounded-full animate-pulse delay-700" />

                {/* Tech Patterns */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="container max-w-7xl mx-auto relative z-10 px-6">
                <div className="grid lg:grid-cols-12 gap-10 items-center">

                    {/* Left Column: Bold Branding (5/12 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link to="/myskillforge">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-5 bg-white/90 backdrop-blur-3xl border border-white px-8 py-4 rounded-3xl shadow-[0_20px_60px_rgba(99,102,241,0.08)] group"
                            >
                                <div className="bg-gradient-to-br from-[#6366f1] to-[#3b82f6] p-3 rounded-2xl shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Rocket className="text-white w-7 h-7" strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-slate-900 tracking-[-0.03em] uppercase leading-none">MySkillForge</span>
                                    <span className="text-[10px] font-black text-[#6366f1] uppercase tracking-[0.6em] mt-1.5 leading-none">Skills for Tomorrow</span>
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
                                <h2 className="text-5xl xl:text-7xl font-black text-slate-950 tracking-[-0.05em] leading-[1.05] overflow-visible">
                                    Unleash Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 italic pr-6 pb-2 inline-block">Potential</span>
                                </h2>
                                <p className="text-base font-black text-amber-600 uppercase tracking-[0.3em] flex items-center gap-3">
                                    <span className="w-8 h-px bg-amber-600" />
                                    Advanced Career Readiness
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg"
                            >
                                Skyrocket your employability by 5x with our 3-phase immersive program. Gain 11 professional certificates and real-world virtual experience.
                            </motion.p>
                        </div>

                        <Link to="/myskillforge">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-4 bg-[#1e1b4b] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all hover:bg-indigo-600 shadow-2xl shadow-indigo-500/10"
                            >
                                Explore Product
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Right Column: Colorful Feature Bento (7/12 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Highlights Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * i }}
                                    whileHover={{ y: -5 }}
                                    className="p-6 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white group hover:border-indigo-200 hover:shadow-[0_25px_50px_rgba(99,102,241,0.08)] transition-all duration-500 flex items-center gap-5"
                                >
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-[12px] font-black text-slate-800 uppercase tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Colorful Quote Inset */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden group"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all duration-700" />
                            <p className="text-xl font-bold italic leading-relaxed tracking-tight relative z-10">
                                "MySkillForge is a three-phase employability program designed to equip students with advanced technical skills and essential problemsolving, communication, and career-readiness abilities."
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MySkillForgeSection;
