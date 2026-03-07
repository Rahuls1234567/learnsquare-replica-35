import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Rocket, Star } from "lucide-react";

const TestPrepProPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#f8fafc] relative overflow-x-hidden font-outfit"
        >
            <Navbar />

            <main className="relative pt-24 pb-20 overflow-hidden">
                {/* Cinematic Background System */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply">
                        <img src="/images/premium_light_tech_bg.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    {/* Animated Technical Grids */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
                            backgroundSize: '100px 100px'
                        }}
                    />

                    {/* Cinematic Glows */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.12, 0.05]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[160px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.03, 0.08, 0.03]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px]"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    {/* Top Center Product Name - Purple Background, White Letters */}
                    <div className="flex justify-center pt-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-10 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs tracking-[0.5em] uppercase shadow-[0_10px_30px_rgba(124,102,220,0.3)] border border-white/20"
                        >
                            Test Prep Pro
                        </motion.div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                        {/* Left Side: Cinematic Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-slate-950 space-y-12"
                        >
                            <div className="space-y-6 text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black tracking-[0.4em] uppercase"
                                >
                                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    <span>NEXT-GEN ASSESSMENT</span>
                                </motion.div>

                                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-normal tracking-tighter pt-2 pb-6 text-center lg:text-left">
                                    Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 italic inline-block pr-8 pb-1">Testing</span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-500 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    Adaptive assessment platform for high-stakes recruitment and technical excellence.
                                </p>
                            </div>

                            {/* Premium Mockup Display */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative group max-w-[500px] mx-auto lg:mx-0"
                            >
                                <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white aspect-video max-w-md">
                                    <img
                                        src="/images/test_prep_pro_premium.png"
                                        alt="TestPrep Dashboard"
                                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side: Premium Glassmorphic Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="absolute -inset-10 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

                            <div className="relative bg-white/70 backdrop-blur-3xl rounded-[3rem] p-8 md:p-10 border border-indigo-50 shadow-[0_40px_100px_rgba(99,102,241,0.06)] max-w-lg lg:ml-auto">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-black text-slate-950 tracking-tight mb-3">Request Access</h2>
                                </div>

                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input placeholder="First Name*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                                        <Input placeholder="Last Name*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input placeholder="Whatsapp No.*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                                        <Input placeholder="Email*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                                    </div>
                                    <Input placeholder="College Name*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                                    <Textarea placeholder="Tell us about your preparation goals..." className="min-h-[100px] rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold p-5 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-sm" />

                                    <div className="flex justify-center mt-6">
                                        <Button className="px-10 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all group/btn shadow-xl border-none">
                                            Join Prep Pro
                                            <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Key Features Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Background Textures */}
                <div className="absolute inset-0 opacity-[0.03] z-0"
                    style={{
                        backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="container relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">

                        {/* Title Card */}
                        <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
                            <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.4em]">Advanced Features</span>
                            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-[1.2] pb-4">
                                Precision Testing
                            </h2>

                        </div>

                        {[
                            {
                                title: "Comprehensive Subject Coverage",
                                desc: "Extensive question banks covering algorithms, data structures, databases, and core system engineering subjects.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            },
                            {
                                title: "Adaptive Testing Engine",
                                desc: "Proprietary algorithms that adjust question difficulty in real-time based on student performance metrics.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="M2 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="M12 22v-4"></path><path d="m19.07 19.07-2.83-2.83"></path><path d="M22 12h-4"></path><path d="m19.07 4.93-2.83 2.83"></path></svg>
                            },
                            {
                                title: "Multiple Question Formats",
                                desc: "Variety of formats: MCQs, scenarios, fill-in-the-blanks, and live coding assessments for deep theoretical testing.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            },
                            {
                                title: "Deep Performance Analysis",
                                desc: "Granular reporting and predictive analytics to pinpoint weaknesses and optimize study path trajectory.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            },
                            {
                                title: "Timed Real-World Simulation",
                                desc: "Timed practice modules that simulate high-pressure environment of top-tier recruitment examinations.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            },
                            {
                                title: "Secure Proctoring Hub",
                                desc: "In-built audio/video proctoring, tab-switch detection, and copy protection to ensure 100% test integrity.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative bg-slate-50/50 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 border border-indigo-100 hover:border-indigo-400/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]"
                            >
                                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <img src="/images/card_premium_texture.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-2 sm:space-y-4">
                                        <h3 className="text-sm sm:text-2xl font-black text-indigo-600 tracking-tight leading-tight">{feature.title}</h3>
                                        <p className="text-slate-600 font-bold text-[9px] sm:text-sm leading-relaxed italic line-clamp-3 sm:line-clamp-none">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
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

export default TestPrepProPage;
