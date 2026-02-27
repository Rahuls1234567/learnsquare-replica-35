import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const TestPrepProPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#050505] relative overflow-x-hidden font-outfit"
        >
            <Navbar />

            <main className="relative pt-32 pb-20">
                {/* Premium Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(124,102,220,0.15),transparent_70%)]" />
                    <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

                    {/* Subtle Grid */}
                    <div className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '80px 80px'
                        }}
                    />
                </div>

                <div className="container relative z-10 flex flex-col items-center">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 space-y-4"
                    >
                        {/* Top Badge */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-3 rounded-full font-black text-sm uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(124,102,220,0.3)] border border-white/20">
                            Test Prep - Pro
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 w-full items-stretch max-w-7xl mx-auto px-4">

                        {/* Left Column: Hero Content & Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-between h-full py-6 space-y-10"
                        >
                            <div className="relative group flex justify-center">
                                <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-700" />
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 1, 0]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 w-full flex items-center justify-center p-4"
                                >
                                    <img
                                        src="/images/test_prep_pro_hero.png"
                                        alt="Assessment Platform Illustration"
                                        className="object-contain w-full max-w-[420px] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    />
                                </motion.div>
                            </div>

                            <div className="space-y-6 text-left">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                                    Adaptive <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Assessment</span> <br />
                                    <span className="text-white/60">Platform</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 font-bold max-w-xl leading-relaxed">
                                    Precision testing for students preparing for high-stakes recruitment and technical tests.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative group flex flex-col justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

                            <h3 className="text-3xl font-black text-center text-white mb-10 tracking-tight">
                                Enquire Now
                            </h3>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        placeholder="First Name*"
                                        className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/40 transition-all text-white placeholder:text-white/20 px-7 font-bold"
                                    />
                                    <Input
                                        placeholder="Last Name*"
                                        className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/40 transition-all text-white placeholder:text-white/20 px-7 font-bold"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        placeholder="Whatsapp No.*"
                                        className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/40 transition-all text-white placeholder:text-white/20 px-7 font-bold"
                                    />
                                    <Input
                                        placeholder="Email*"
                                        type="email"
                                        className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/40 transition-all text-white placeholder:text-white/20 px-7 font-bold"
                                    />
                                </div>

                                <Input
                                    placeholder="College Name*"
                                    className="h-14 bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/40 transition-all text-white placeholder:text-white/20 px-7 font-bold"
                                />

                                <Textarea
                                    placeholder="Message*"
                                    className="min-h-[120px] bg-white/5 border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500/40 transition-all text-white placeholder:text-white/20 px-7 pt-5 font-bold resize-none"
                                />

                                <div className="flex justify-center pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-black text-xl rounded-[2rem] transition-all duration-300 shadow-xl active:scale-95"
                                    >
                                        Submit !!
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>

            {/* Key Features Section */}
            <section className="py-32 bg-[#080808] relative overflow-hidden">
                {/* Background Textures */}
                <div className="absolute inset-0 opacity-[0.03] z-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="container relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* Title Card */}
                        <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
                            <span className="text-purple-400 font-black text-sm uppercase tracking-[0.4em]">Advanced Features</span>
                            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter">Precision Testing</h2>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <code className="text-[12px] text-purple-300/60 font-mono break-all leading-relaxed">
                                    SELECT * FROM 'prep_engine' <br />
                                    WHERE integrity='high' <br />
                                    AND accuracy='100%'
                                </code>
                            </div>
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
                                className="group relative bg-[#111] rounded-[2.5rem] p-10 border border-white/5 hover:border-purple-500/30 transition-all duration-500"
                            >
                                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <img src="/images/card_premium_texture.png" className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-600/20 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-black text-white tracking-tight">{feature.title}</h3>
                                        <p className="text-slate-400 font-bold text-sm leading-relaxed italic">
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
