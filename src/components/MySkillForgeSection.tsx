import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    GraduationCap,
    BadgeCheck,
    Monitor,
    UserCircle,
    Briefcase,
    Calendar,
    Star,
    Rocket
} from "lucide-react";

const MySkillForgeSection = () => {
    return (
        <section className="py-0 relative bg-white overflow-hidden font-sans">
            <div className="container relative z-10 pt-16">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <Link to="/myskillforge" className="block">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 bg-[#EBE7F7] border border-primary/10 px-8 py-3 rounded-full shadow-sm hover:bg-primary/15 hover:border-primary/20 transition-all cursor-pointer"
                        >
                            <Rocket className="text-primary w-6 h-6 shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-primary tracking-tight">MySkillForge</span>
                                <span className="text-[10px] md:text-xs font-semibold text-primary/70 tracking-wider">Skills for Tomorrow</span>
                            </div>
                        </motion.div>
                    </Link>

                    <Link to="/myskillforge">
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-[#1E1B4B] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-900/10 hover:bg-primary cursor-pointer inline-flex"
                        >
                            Explore Product
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.span>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Panel: Program Overview (SaaS Style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex"
                    >
                        <div className="w-full bg-white/70 backdrop-blur-md border border-primary/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col relative group hover:shadow-[0_20px_50px_rgba(91,71,204,0.08)] transition-all duration-500 overflow-hidden">
                            {/* Decorative Accent */}
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary/40 to-transparent opacity-50" />

                            <div className="relative z-10 space-y-10">
                                {/* Decorative Quote Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary/30 mb-2">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 1.5-1 3-2.5 4.5Q4.5 15.5 3 17v4z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 1.5-1 3-2.5 4.5Q16.5 15.5 15 17v4z" /></svg>
                                </div>

                                <p className="text-[20px] md:text-[22px] text-slate-900 font-bold italic leading-[1.6] tracking-tight">
                                    "MySkillForge is a three-phase employability program designed to equip students with advanced technical skills and essential problemsolving, communication, and career-readiness abilities."
                                </p>

                                <div className="space-y-6 pt-4 border-t border-slate-100">
                                    {[
                                        "Comprehensive 3-Phase Program",
                                        "11 Certification Tracks Endorsed by HR Association of India",
                                        "Live & Recorded Sessions",
                                        "Student Portal",
                                        "Comprehensive Skill Set",
                                        "6-Week Virtual Internship"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 transition-all duration-300 group/item">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(91,71,204,0.5)] transition-all duration-300 group-hover/item:scale-125" />
                                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary animate-ping opacity-20" />
                                            </div>
                                            <p className="text-[15px] md:text-[16px] text-slate-700 font-bold tracking-tight group-hover/item:text-primary transition-colors">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-3xl -z-10 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Right Panel: Content + New Image (SaaS Style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col md:flex-row items-center gap-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 overflow-hidden relative group">

                            <div className="flex-1 space-y-6 relative z-10">
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-black text-[#1E1B4B] tracking-tight">
                                        MySkillForge - <span className="text-[#3F51B5]">(Live Online)</span>
                                    </h3>
                                    <h4 className="text-2xl font-black text-[#F59E0B] leading-tight tracking-tight">
                                        Empowering Students with Skills for Tomorrow's Jobs
                                    </h4>
                                </div>

                                <p className="text-[15px] text-slate-500 font-bold leading-relaxed">
                                    A 3-Phase Program to Increase Students Employability Skills by 5x with 11 Employability Skill Certificates and Virtual Internship of 6 Weeks.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Comprehensive 3 Phase Prog",
                                        "11 Certification Tracks",
                                        "Hands-on Sessions by Industry Experts",
                                        "Live & Recorded Sessions",
                                        "6 Weeks Virtual Internship"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#1E1B4B] flex items-center justify-center shadow-lg shadow-indigo-900/20">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[15px] font-black text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* New Professional Image Element */}
                            <div className="flex-1 relative group w-full md:w-auto h-full min-h-[300px]">
                                <div className="absolute inset-0 rounded-3xl overflow-hidden border-8 border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]">
                                    <img
                                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                                        alt="Technical Mastery"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity duration-500" />
                                </div>

                                {/* Decorative Element */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-200/20 blur-3xl -z-10" />
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MySkillForgeSection;
