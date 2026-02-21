import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Code, Terminal, Cpu, Zap,
    Shield, LayoutDashboard, Binary,
    MonitorPlay, Database, Cloud,
    Check
} from 'lucide-react';

// Brain icon component placeholder
const Brain = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
    </svg>
);

const compilerFeatures = [
    { title: "Multi-Language Support", text: "Compile and execute Python, Java, C++, JavaScript and 20+ other languages in real-time with zero latency.", icon: Binary },
    { title: "Adaptive Difficulty", text: "The compiler detects your coding level and presents challenges that evolve with your skills.", icon: Brain },
    { title: "Plagiarism Detection", text: "Advanced algorithms to detect code similarity and ensure original problem solving during assessments.", icon: Shield },
    { title: "Real-time Analytics", text: "Instant feedback on time complexity, memory usage, and logic efficiency for every code snippet.", icon: Zap },
    { title: "Company Specific IDE", text: "Simulate coding environments of top tech giants like Google, Amazon, and Microsoft for better prep.", icon: Terminal },
    { title: "Cloud Persistence", text: "Your code is automatically saved and synced across all your devices for seamless learning.", icon: Cloud },
];

const syntaxModulesData = [
    {
        pillText: "Core Capability",
        titlePrefix: "Intelligent",
        titleHighlight: "Coding Engine",
        gradientText: "from-blue-600 to-cyan-600",
        theme: {
            pillBg: "bg-blue-50 border-blue-100",
            pillDot: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]",
            pillText: "text-blue-600",
            glow1: "bg-blue-300/20",
            glow2: "bg-cyan-300/20",
            iconBg: "bg-blue-50",
            iconBgHover: "group-hover/item:bg-blue-500",
            iconBorder: "border-blue-100",
            iconBorderHover: "group-hover/item:border-blue-500",
            iconText: "text-blue-500",
            imageGlow: "from-blue-400/10 to-cyan-400/10",
            imageBacking: "from-blue-400/15 to-cyan-400/15"
        },
        imageSrc: "/images/homeimage/home-2.png",
        imageAlt: "SyntaxWorks Compiler IDE",
        isImageRight: true,
        listItems: [
            "Seamless execution of 25+ Programming Languages",
            "Real-time syntax highlighting for better readability",
            "Auto-completion for faster and more accurate coding",
            "Instant error detection with suggestive fixes",
            "Dark and Light modes tailored for developers",
            "Integrated debugger to trace code execution step-by-step"
        ]
    }
];

const SyntaxWorks = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#0a0815] relative overflow-x-hidden text-white"
        >
            <Navbar />

            <main className="relative pt-24 pb-20">
                {/* Dark Matrix/Tech Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] opacity-40 translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] opacity-30 -translate-x-1/2" />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                </div>

                <div className="container relative z-10 flex flex-col items-center">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 space-y-6"
                    >
                        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-6 py-2 rounded-full font-bold tracking-widest text-xs uppercase shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            The Next Gen Coding Compiler
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-none">
                            Future-Proof Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Coding Journey</span>
                        </h1>

                        <p className="text-xl text-slate-400 font-medium tracking-wide max-w-2xl">
                            Designed to revolutionize the development of students preparing for recruitments.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 w-full items-center max-w-7xl mx-auto px-6">
                        {/* Left Column: Dark IDE/Dashboard Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-slate-900/50 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-4 shadow-2xl relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:opacity-100 transition-opacity" />
                            <img
                                src="/images/homeimage/home-2.png"
                                alt="SyntaxWorks IDE"
                                className="w-full h-auto rounded-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Right Column: Mini Inquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-8 md:p-10 border border-white/10 shadow-2xl"
                        >
                            <h3 className="text-2xl font-black mb-8 tracking-tight">Request Access</h3>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-5">
                                    <Input placeholder="First Name*" className="h-14 bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 border-white/10 focus:ring-blue-500/50" />
                                    <Input placeholder="Last Name*" className="h-14 bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 border-white/10 focus:ring-blue-500/50" />
                                </div>
                                <Input placeholder="Email Address*" className="h-14 bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 border-white/10 focus:ring-blue-500/50" />
                                <Textarea placeholder="How can SyntaxWorks help you?" className="min-h-[120px] bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 resize-none pt-4" />
                                <Button className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-95 mt-4">
                                    Send Request
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Core Capability Section */}
            {syntaxModulesData.map((module, idx) => (
                <section key={idx} className="py-32 relative overflow-hidden bg-[#0c0a1d]">
                    <div className="container mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{module.pillText}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                                {module.titlePrefix} <span className="text-blue-400">{module.titleHighlight}</span>
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                {module.listItems.map((item, i) => (
                                    <li key={i} className="flex items-start group">
                                        <div className="mr-4 mt-1 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500 transition-colors">
                                            <Check className="w-3 h-3 text-blue-400 group-hover:text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-400 font-medium group-hover:text-white transition-colors leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
                            <img src={module.imageSrc} alt={module.imageAlt} className="w-full h-auto drop-shadow-2xl transform hover:-translate-y-4 transition-transform duration-700 mx-auto" />
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* Why Choose Section */}
            <section className="py-32 bg-[#0a0815]">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-blue-500 font-black uppercase tracking-widest text-sm">Tech Stack Advantage</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Engineered for <span className="text-blue-400">Performance</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {compilerFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500 group-hover:scale-110 transition-all">
                                    <feature.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-black mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default SyntaxWorks;
