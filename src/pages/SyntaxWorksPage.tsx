import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, useScroll, useTransform } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Code2, Zap, Layout, Bug, Sparkles, Shield, Rocket, Globe, CheckCircle2, ChevronRight, X, Monitor } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const FeatureCard = ({ title, desc, img, reverse = false, icon: Icon, details }: any) => {
    return (
        <Dialog>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-white/5 shadow-2xl transition-all duration-700 bg-slate-900/40 backdrop-blur-sm`}
            >
                {/* kinetic Technical Background */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1.5px,transparent_1.5px)] [background-size:40px_40px]" />
                </div>

                {/* Theme Glows */}
                <div className={`absolute -right-20 -top-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-1000`} />
                <div className={`absolute -left-20 -bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-1000`} />

                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10`}>
                    {/* Image Section */}
                    <div className={`${reverse ? 'md:order-2' : ''} relative perspective-1000 flex justify-center`}>
                        <motion.div
                            whileHover={{ y: -15, rotateX: 5, rotateY: reverse ? -5 : 5 }}
                            className="relative z-10 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] bg-slate-800 border-2 border-white/10 max-w-[85%]"
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Inner Glass Shadow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                        </motion.div>

                        {/* Magnetic Glow Effect around image */}
                        <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Text Section */}
                    <div className={`${reverse ? 'md:order-1' : ''} space-y-8`}>
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-indigo-400">
                                <Icon className="w-5 h-5" />
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase">Core Feature</span>
                            </div>

                            <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent" />
                        </div>

                        <h3 className="text-xl md:text-3xl font-black text-white leading-tight tracking-tighter">
                            {title.split('<br />').map((part: string, i: number) => (
                                <span key={i} className="block">{part.trim()}</span>
                            ))}
                        </h3>

                        <p className="text-slate-400 text-sm md:text-base font-bold leading-relaxed">
                            {desc}
                        </p>

                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                className="group/btn p-0 h-auto font-black text-indigo-400 hover:text-indigo-300 hover:bg-transparent flex items-center gap-3 transition-all duration-300"
                            >
                                <span className="relative">
                                    Learn More
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover/btn:w-full" />
                                </span>
                                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover/btn:border-indigo-400/50 transition-all">
                                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </div>
                            </Button>
                        </DialogTrigger>
                    </div>
                </div>
            </motion.div>

            {/* Premium Dialog Content */}
            <DialogContent className="max-w-4xl bg-slate-950 border-white/10 p-0 overflow-hidden rounded-[2rem] md:rounded-[3.5rem] shadow-2xl max-h-[95vh] overflow-y-auto">
                {/* Close Button for Mobile Accessibility */}
                <div className="absolute right-4 top-4 z-[100]">
                    <DialogPrimitive.Close className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all focus:outline-none border border-white/10">
                        <X className="w-6 h-6" />
                    </DialogPrimitive.Close>
                </div>
                <div className="relative p-8 md:p-14">
                    {/* Background Decorative Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:30px_30px] opacity-40 pointer-events-none" />
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full" />

                    <DialogHeader className="relative z-10 text-left mb-10">
                        <DialogTitle className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                            {title.replace('<br />', ' ')}
                        </DialogTitle>
                        <DialogDescription className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                            {desc}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                        <div className="space-y-6">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-indigo-500 rounded-full" />
                                Key Advantages
                            </h4>
                            <div className="space-y-4">
                                {details?.map((item: string, idx: number) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        key={idx}
                                        className="flex gap-4 items-start group/item p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all"
                                    >
                                        <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-300 font-bold leading-relaxed">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 aspect-square md:aspect-auto">
                            <img src={img} alt="Detail view" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const SyntaxWorksPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-slate-950 relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative">
                {/* Hero Section with Premium Background */}
                <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
                    {/* Premium Background Image with Parallax Effect */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/syntaxworks_premium_new.png"
                            alt="Premium Background"
                            className="w-full h-full object-cover scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-950/60 to-black/95 backdrop-blur-[1px]" />

                        {/* Animated Technical Grids */}
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:60px_60px] opacity-100" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">

                            {/* Left SideContent */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-white space-y-12"
                            >
                                <div className="space-y-6">
                                    <motion.div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-indigo-200 text-[10px] font-black tracking-[0.4em] uppercase">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                        <span>AI-POWERED PLATFORM</span>
                                    </motion.div>

                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tighter py-2">
                                        Syntax <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic pr-8 inline-block">Works</span>
                                    </h1>

                                    <p className="text-lg md:text-xl text-slate-400 font-bold leading-relaxed max-w-xl">
                                        Empowering the next generation of developers with an intelligent coding environment and seamless multi-language support.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 pt-4 border-t border-white/5">
                                    {[
                                        { icon: Shield, title: "Secure Platform", desc: "Enterprise-grade safety" },
                                        { icon: Rocket, title: "Fast Execution", desc: "Real-time compiling" },
                                        { icon: Globe, title: "Multi-language", desc: "Support for 50+ languages" },
                                        { icon: Code2, title: "Smart IDE", desc: "AI-assisted coding" }
                                    ].map((item, i) => (
                                        <motion.div key={i} className="flex gap-5 items-start group">
                                            <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-indigo-600 group-hover:border-transparent transition-all duration-500">
                                                <item.icon className="w-5 h-5 text-indigo-400 group-hover:text-white" strokeWidth={2.5} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-white text-base mb-1 uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-sm text-slate-500 font-bold leading-tight">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Side Glassmorphic Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative"
                            >
                                <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                                <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] p-8 md:p-10 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] max-w-md ml-auto">
                                    <div className="text-center mb-10">
                                        <h3 className="text-4xl font-black text-white tracking-tight leading-none mb-4">Request Access</h3>
                                        <p className="text-indigo-300 font-bold text-sm tracking-wide">Transform your campus automation today</p>
                                    </div>

                                    <form className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <Input placeholder="First Name*" className="h-16 rounded-[1.2rem] border-white/10 bg-white/5 text-white placeholder:text-slate-500 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="Last Name*" className="h-16 rounded-[1.2rem] border-white/10 bg-white/5 text-white placeholder:text-slate-500 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <Input placeholder="Whatsapp No.*" className="h-16 rounded-[1.2rem] border-white/10 bg-white/5 text-white placeholder:text-slate-500 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="Email*" className="h-16 rounded-[1.2rem] border-white/10 bg-white/5 text-white placeholder:text-slate-500 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>
                                        <Textarea placeholder="Message*" className="min-h-[140px] rounded-[1.2rem] border-white/10 bg-white/5 text-white placeholder:text-slate-500 font-bold p-7 focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none" />

                                        <div className="flex justify-center pt-4">
                                            <Button className="px-10 h-12 rounded-[1rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all group/btn">
                                                Get Started Now
                                                <Rocket className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Key Features Section with Continuous Dark Theme */}
                <section className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
                    {/* Atmospheric Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-indigo-500/5 blur-[160px] pointer-events-none" />

                    <div className="container relative z-10 mx-auto px-6">
                        <div className="text-center mb-24 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-block px-8 py-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-[10px] uppercase tracking-[0.4em]"
                            >
                                Product Architecture
                            </motion.div>
                            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                                Specialized <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 italic">Capabilities</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                                Explore the premium features that drive efficiency across all engineering stakeholders.
                            </p>
                        </div>

                        <div className="max-w-7xl mx-auto space-y-16">
                            <FeatureCard
                                icon={Layout}
                                title="Comprehensive <br /> Practice Test Series"
                                desc="Boost your learning with our meticulously designed Practice Test Series, crafted to help you assess your knowledge and achieve mastery in world-class coding assessments."
                                img="/images/syntaxworks/practice_test_premium.png"
                                details={[
                                    "Customizable question banks with 50,000+ problems",
                                    "Real-time performance metrics and leaderboard",
                                    "Time-bounded assessment environment for recruitment",
                                    "Language-specific test filters for Java, Python, and C++"
                                ]}
                            />

                            <FeatureCard
                                icon={Code2}
                                title="Practice Multiple <br /> Programming Languages"
                                desc="Our cross-language platform allows you to switch between environments seamlessly, supporting every standard protocol with zero latency."
                                img="/images/syntaxworks/programming_lang_premium.png"
                                reverse={true}
                                details={[
                                    "Native support for Python, Java, C, C++, and Rust",
                                    "Automated environment setup for each language",
                                    "Synchronized project workspace across devices",
                                    "Intelligent code snippets for repetitive logic"
                                ]}
                            />

                            <FeatureCard
                                icon={Monitor}
                                title="Integrated <br /> Environment (IDE)"
                                desc="Our platform offers a state-of-the-art IDE designed to streamline your coding experience, enable you to write, test, and debug code all in one place."
                                img="/images/syntaxworks/ide_premium.png"
                                details={[
                                    "Multi-file project support with directory explorer",
                                    "Cloud-based workspace for persistent progress",
                                    "Customizable UI themes and editor configurations",
                                    "Real-time code collaboration features"
                                ]}
                            />

                            <FeatureCard
                                icon={Bug}
                                title="Error Detection and <br /> Debugging Tools"
                                desc="Advanced debugging support for various languages, with detailed error messages and solutions across different coding environments."
                                img="/images/syntaxworks/debugging_premium.png"
                                reverse={true}
                                details={[
                                    "Visual step-by-step code execution tracing",
                                    "AI-powered error explanation and fix suggestions",
                                    "Interactive stack trace and variable monitoring",
                                    "Compiler-specific warning and error highlighting"
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default SyntaxWorksPage;
