import { motion } from "framer-motion";
import {
    Presentation,
    ArrowRight,
    Target,
    Zap,
    Code,
    Terminal,
    Cpu,
    Briefcase
} from "lucide-react";

const TrainingProgramsSection = () => {
    const trainingFeatures = [
        {
            title: "Hands-on Technical Mastery",
            desc: "Immersive training sessions focusing on real-world coding and engineering challenges.",
            icon: Code
        },
        {
            title: "Recruitment Preparation",
            desc: "Dedicated modules for acing technical interviews and aptitude assessments.",
            icon: Target
        },
        {
            title: "Emerging Technologies",
            desc: "Stay ahead with courses on AI, Cloud Computing, and Modern Frameworks.",
            icon: Cpu
        },
        {
            title: "Project-Based Learning",
            desc: "Go from foundational concepts to building full-scale industry projects.",
            icon: Briefcase
        }
    ];

    return (
        <section className="py-8 relative bg-white overflow-hidden font-sans">
            <div className="container relative z-10 px-4 md:px-6">
                {/* 1. Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-10 py-3 rounded-full shadow-sm"
                    >
                        <Presentation className="text-primary w-6 h-6" />
                        <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight">
                            Training Programs
                        </h2>
                    </motion.div>

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
                </div>

                {/* 2. Professional Image Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative min-h-[300px] flex items-center justify-center">
                        {/* Main Image Container */}
                        <img
                            src="/images/Training Programs.svg"
                            alt="Training Programs Illustration"
                            className="w-full h-auto object-contain z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrainingProgramsSection;
