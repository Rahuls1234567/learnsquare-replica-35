import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Code2, Zap, Layout, Bug } from "lucide-react";

const FeatureCard = ({ title, desc, img, reverse = false, bg, icon: Icon, delay = 0 }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`group relative overflow-hidden rounded-[4rem] p-8 md:p-14 ${bg} border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700`}
        >
            {/* Animated Decorative Element */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className={`absolute -top-20 ${reverse ? '-left-20' : '-right-20'} w-64 h-64 rounded-full blur-3xl bg-white/40 pointer-events-none`}
            />

            <div className={`grid md:grid-cols-2 gap-12 items-center relative z-10`}>
                {/* Image Section */}
                <div className={`${reverse ? 'md:order-2' : ''} relative`}>
                    <motion.div
                        whileHover={{ y: -10, rotate: reverse ? -2 : 2 }}
                        className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl bg-white aspect-[4/3] border-4 border-white"
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
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-slate-900">
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
        </motion.div>
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

            <main className="relative pt-24 pb-20">
                {/* Professional Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden opacity-30">
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-indigo-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    {/* Page Header */}
                    <div className="text-center mt-4 mb-2">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight"
                        >
                            Syntax<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c379a] to-[#ff9933]">Works</span>
                        </motion.h1>
                        <div className="h-2 w-32 bg-gradient-to-r from-[#3c379a] to-[#ff9933] mx-auto rounded-full mt-4" />
                    </div>

                    {/* Compact Hero / Split Section */}
                    <section className="pb-16 md:pb-24 pt-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                                {/* Left: Branding Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative group h-full"
                                >
                                    <div className="h-full w-full overflow-hidden rounded-[4rem] shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-slate-100 bg-white p-2">
                                        <div className="h-full w-full rounded-[3.5rem] overflow-hidden">
                                            <img
                                                src="/images/syntaxworks_hero.png"
                                                alt="AI Powered Campus Automation"
                                                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right: Get Started Today Form Card */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[4rem] p-10 md:p-14 shadow-[0_50px_120px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col justify-between"
                                >
                                    <div className="text-center mb-8">
                                        <h3 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Get Started Today</h3>
                                        <p className="text-slate-400 font-bold mt-2">Connect with our AI experts</p>
                                    </div>

                                    <form className="space-y-5 flex-grow">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <Input placeholder="First Name*" className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 font-bold px-7 focus:ring-2 focus:ring-indigo-100 transition-all" />
                                            <Input placeholder="Last Name*" className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 font-bold px-7 focus:ring-2 focus:ring-indigo-100 transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <Input placeholder="Whatsapp No.*" className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 font-bold px-7 focus:ring-2 focus:ring-indigo-100 transition-all" />
                                            <Input placeholder="Email*" className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 font-bold px-7 focus:ring-2 focus:ring-indigo-100 transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <Input placeholder="College Name*" className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 font-bold px-7 focus:ring-2 focus:ring-indigo-100 transition-all" />
                                            <Input placeholder="City*" className="h-14 rounded-2xl border-slate-200 bg-slate-50/50 font-bold px-7 focus:ring-2 focus:ring-indigo-100 transition-all" />
                                        </div>
                                        <Textarea placeholder="Message*" className="min-h-[120px] rounded-[2rem] border-slate-200 bg-slate-50/50 font-bold p-7 focus:ring-2 focus:ring-indigo-100 transition-all resize-none" />
                                        <div className="flex justify-center pt-4">
                                            <Button className="h-16 px-16 rounded-[2rem] bg-slate-900 text-white font-black text-xl hover:bg-black transition-all shadow-xl active:scale-95 group/btn">
                                                Send Inquiry
                                                <Zap className="ml-2 w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform" />
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Key Features Section */}
                    <section className="py-20 bg-slate-50/30 -mx-4 px-4 rounded-[6rem]">
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-6 py-2 rounded-full bg-white shadow-md border border-slate-100 text-[#3c379a] font-black text-sm uppercase tracking-widest mb-6"
                            >
                                Product Highlights
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tight">Key Features</h2>
                        </div>

                        <div className="max-w-6xl mx-auto space-y-16">
                            <FeatureCard
                                icon={Layout}
                                title="Comprehensive <br /> Practice Test Series"
                                desc="Boost your learning with our meticulously designed Practice Test Series, crafted to help you assess your knowledge, strengthen your skills, and achieve mastery in various subjects or programming languages."
                                img="/images/practice_test.png"
                                bg="bg-gradient-to-br from-[#f1f3f9] to-[#ffffff]"
                                delay={0.1}
                            />

                            <FeatureCard
                                icon={Code2}
                                title="Practice Multiple <br /> Programming Languages"
                                desc="Seamlessly write and execute code in all major programming languages (Python, Java, C, C++, JavaScript etc.)"
                                img="/images/programming_practice.png"
                                reverse={true}
                                bg="bg-gradient-to-bl from-[#f3f0f7] to-[#ffffff]"
                                delay={0.2}
                            />

                            <FeatureCard
                                icon={Layout}
                                title="Integrated Development <br /> Environment (IDE)"
                                desc="Our platform offers a state-of-the-art IDE designed to streamline your coding experience, enabling you to write, test, and debug code all in one place."
                                img="/images/ide_feature.png"
                                bg="bg-gradient-to-br from-[#f0f3f9] to-[#ffffff]"
                                delay={0.3}
                            />

                            <FeatureCard
                                icon={Bug}
                                title="Error Detection and <br /> Debugging Tools"
                                desc="Advanced debugging support for various languages, with detailed error messages and solutions across different coding environments."
                                img="/images/debugging_feature.png"
                                reverse={true}
                                bg="bg-gradient-to-bl from-[#f8f6fb] to-[#ffffff]"
                                delay={0.4}
                            />
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
