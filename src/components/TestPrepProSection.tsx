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
    Layers
} from "lucide-react";

const TestPrepProSection = () => {
    const features = [
        "Comprehensive Subject Coverage",
        "Adaptive Testing",
        "Multiple Question Formats",
        "Comprehensive Performance Analysis",
        "Enhanced Security Features"
    ];

    return (
        <section className="py-24 relative bg-slate-50 overflow-hidden font-sans">
            <div className="container relative z-10 px-4 md:px-6">

                {/* 1. Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-10 py-3 rounded-full shadow-sm"
                    >
                        <ClipboardCheck className="text-primary w-6 h-6" />
                        <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                            Test Prep - Pro
                        </h2>
                    </motion.div>

                    <Link to="/testpreppro">
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-[#1E1B4B] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-900/10 hover:bg-primary"
                        >
                            Explore Product
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </Link>
                </div>

                {/* 2. Creative Content Grid */}
                <div className="grid lg:grid-cols-12 gap-0 overflow-hidden shadow-2xl rounded-[3rem] border border-slate-200 bg-white">

                    {/* Left Panel: High Impact Features (Navy) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-[#1E1B4B] p-10 md:p-16 relative overflow-hidden"
                    >
                        {/* Abstract background elements */}
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative z-10 space-y-10">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs"
                                >
                                    <Zap className="w-4 h-4" />
                                    Advanced Assessment Engine
                                </motion.div>
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                                    Elevate Academic Excellence Through <span className="text-primary">Precise Testing</span>
                                </h3>
                                <p className="text-slate-400 text-lg font-bold">
                                    Advance Assessment Platform for Various Recruitment Tests
                                </p>
                            </div>

                            <div className="grid md:grid-cols-1 gap-5">
                                {features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all">
                                            <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                                        </div>
                                        <span className="text-slate-200 font-bold text-lg group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel: Description & Visual (Light) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 bg-slate-50 p-10 md:p-16 flex flex-col justify-center gap-10 border-l border-slate-200"
                    >
                        <div className="space-y-6">
                            <div className="w-16 h-1 bg-primary rounded-full" />
                            <p className="text-slate-600 font-bold leading-relaxed text-lg">
                                Test Prep Pro is an advanced test engine designed to elevate the way students prepare for competitive exams and recruitment assessments.
                            </p>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Tailored for both colleges and individual learners, Test Prep Pro offers a comprehensive solution with a wide range of features such as Adaptive Question Bank, Customizable Tests, Detailed Performance Analytics, Real-Time Feedback and Multi-Device Support.
                            </p>
                        </div>

                        {/* Interactive Feature Icons */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-primary/50 transition-colors">
                                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                                <h5 className="font-black text-slate-900 text-sm">Real-time Analytics</h5>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-primary/50 transition-colors">
                                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                                <h5 className="font-black text-slate-900 text-sm">Enhanced Security</h5>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-primary/50 transition-colors">
                                <Layers className="w-8 h-8 text-primary mb-4" />
                                <h5 className="font-black text-slate-900 text-sm">Adaptive Bank</h5>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 group hover:border-primary/50 transition-colors">
                                <LayoutList className="w-8 h-8 text-primary mb-4" />
                                <h5 className="font-black text-slate-900 text-sm">Custom Tests</h5>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TestPrepProSection;
