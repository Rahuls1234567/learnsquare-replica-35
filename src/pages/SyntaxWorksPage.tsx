import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Code2, Zap, Layout, Bug, Sparkles, Shield, Rocket, Globe } from "lucide-react";

const FeatureCard = ({ title, desc, img, reverse = false, icon: Icon }: any) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-[2rem] md:rounded-[4rem] p-6 sm:p-8 md:p-14 border border-indigo-50 shadow-[0_40px_100px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700 bg-white`}
        >
            {/* Texture Background */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <img
                    src="/images/card_premium_texture.png"
                    alt="Card Texture"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Glass Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent z-0" />

            {/* Animated Decorative Element */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className={`absolute -top-20 ${reverse ? '-left-20' : '-right-20'} w-64 h-64 rounded-full blur-3xl bg-indigo-200/40 pointer-events-none`}
            />

            <div className={`grid md:grid-cols-2 gap-12 items-center relative z-10`}>
                {/* Image Section */}
                <div className={`${reverse ? 'md:order-2' : ''} relative`}>
                    <motion.div
                        whileHover={{ y: -10, rotate: reverse ? -2 : 2 }}
                        className="relative z-10 overflow-hidden rounded-[1.5rem] md:rounded-[3rem] shadow-2xl bg-white aspect-[4/3] border-4 border-white"
                    >
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                        />
                    </motion.div>
                    {/* Shadow Blob */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Text Section */}
                <div className={`${reverse ? 'md:order-1 text-right' : ''} space-y-6`}>
                    <div className={`flex items-center gap-4 ${reverse ? 'flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#3c379a]">
                            <Icon className="w-6 h-6" />
                        </div>
                        <div className="h-px flex-grow bg-slate-200" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-slate-800 leading-[1.1] tracking-tight">
                        {title.split('<br />').map((part: string, i: number) => (
                            <span key={i}>{part}{i === 0 && <br />}</span>
                        ))}
                    </h3>

                    <p className={`text-slate-500 text-[16px] md:text-[17px] font-bold leading-relaxed max-w-md ${reverse ? 'ml-auto' : ''}`}>
                        {desc}
                    </p>

                    <Button variant="ghost" className={`group/btn p-0 font-black text-[#3c379a] hover:bg-transparent ${reverse ? 'flex-row-reverse gap-2' : 'gap-2'}`}>
                        Learn More
                        <span className={`transition-transform duration-300 group-hover/btn:translate-x-2`}>→</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const SyntaxWorksPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-white relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative">
                {/* Hero Section with Premium Background */}
                <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
                    {/* Premium Background Image with Parallax Effect */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/syntaxworks_premium_new.png"
                            alt="Premium Background"
                            className="w-full h-full object-cover scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-slate-900/40 to-black/80 backdrop-blur-[2px]" />

                        {/* Animated Orbs */}
                        <motion.div
                            animate={{
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                x: [0, -40, 0],
                                y: [0, 60, 0],
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"
                        />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* Left Side: Premium Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-white space-y-8"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-sm font-bold tracking-wider mb-2"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    <span>AI-POWERED PLATFORM</span>
                                </motion.div>

                                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter">
                                    Syntax<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Works</span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-xl">
                                    Empowering the next generation of developers with an intelligent coding environment, comprehensive assessments, and seamless multi-language support.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                    {[
                                        { icon: Shield, title: "Secure Platform", desc: "Enterprise-grade safety" },
                                        { icon: Rocket, title: "Fast Execution", desc: "Real-time compiling" },
                                        { icon: Globe, title: "Multi-language", desc: "Support for 50+ languages" },
                                        { icon: Code2, title: "Smart IDE", desc: "AI-assisted coding" }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + (i * 0.1) }}
                                            className="flex gap-4 items-start"
                                        >
                                            <div className="mt-1 p-2 rounded-lg bg-white/10 border border-white/20">
                                                <item.icon className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-0.5">{item.title}</h4>
                                                <p className="text-sm text-slate-400">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Side: Premium Glassmorphic Form Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative"
                            >
                                <div className="glass-chrome rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl relative z-10">
                                    <div className="text-center mb-8">
                                        <h3 className="text-3xl font-black text-white tracking-tight">Get Started</h3>
                                        <p className="text-indigo-200/70 font-bold mt-2">Transform your campus automation today</p>
                                    </div>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input placeholder="First Name*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="Last Name*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input placeholder="Whatsapp No.*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="Email*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input placeholder="College Name*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="City*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>
                                        <Textarea placeholder="Message*" className="min-h-[100px] rounded-[2rem] border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold p-7 focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none" />

                                        <Button className="w-full h-16 rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xl hover:opacity-90 transition-all shadow-[0_10px_40px_rgba(59,130,246,0.3)] active:scale-95 group/btn mt-4">
                                            Send Inquiry
                                            <Zap className="ml-2 w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform" />
                                        </Button>
                                    </form>
                                </div>

                                {/* Decorative elements behind the form */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <div className="relative mt-12">
                    {/* Key Features Section with Premium Light Background */}
                    <section className="relative py-20 -mx-4 px-4 overflow-hidden">
                        {/* Background Image for Features Section */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/syntaxworks_light_bg.png"
                                alt="Features Background"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white backdrop-blur-[4px]" />
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-block px-8 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-indigo-100 text-[#3c379a] font-black text-xs uppercase tracking-[0.2em] mb-6"
                                >
                                    Product Highlights
                                </motion.div>
                                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight">Key Features</h2>
                                <p className="text-slate-500 font-bold mt-4 max-w-2xl mx-auto">Discover the powerful tools and capabilities that make SyntaxWorks the industry leader in campus automation.</p>
                            </div>

                            <div className="max-w-6xl mx-auto space-y-12">
                                <FeatureCard
                                    icon={Layout}
                                    title="Comprehensive <br /> Practice Test Series"
                                    desc="Boost your learning with our meticulously designed Practice Test Series, crafted to help you assess your knowledge, strengthen your skills, and achieve mastery in various subjects or programming languages."
                                    img="/images/practice_test.png"
                                />

                                <FeatureCard
                                    icon={Code2}
                                    title="Practice Multiple <br /> Programming Languages"
                                    desc="Seamlessly write and execute code in all major programming languages (Python, Java, C, C++, JavaScript etc.)"
                                    img="/images/programming_practice.png"
                                    reverse={true}
                                />

                                <FeatureCard
                                    icon={Layout}
                                    title="Integrated Development <br /> Environment (IDE)"
                                    desc="Our platform offers a state-of-the-art IDE designed to streamline your coding experience, enabling you to write, test, and debug code all in one place."
                                    img="/images/ide_feature.png"
                                />

                                <FeatureCard
                                    icon={Bug}
                                    title="Error Detection and <br /> Debugging Tools"
                                    desc="Advanced debugging support for various languages, with detailed error messages and solutions across different coding environments."
                                    img="/images/debugging_feature.png"
                                    reverse={true}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default SyntaxWorksPage;
