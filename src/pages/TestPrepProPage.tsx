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
            className="min-h-screen bg-white relative overflow-x-hidden font-outfit"
        >
            <Navbar />

            <main className="relative pt-32 pb-20">
                {/* Clean, Modern Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden flex flex-col justify-between">
                    {/* Top Right Subtle Glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3" />

                    {/* Center Left Subtle Glow */}
                    <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-70 -translate-x-1/2" />
                </div>

                <div className="container relative z-10 flex flex-col items-center">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 space-y-4"
                    >
                        {/* Top Pill - Matching Screenshot */}
                        <div className="bg-gradient-to-r from-[#7c66dc] to-[#9d8bed] text-white px-10 py-3 rounded-full font-bold tracking-tight text-lg shadow-[0_10px_25px_rgba(124,102,220,0.3)] hover:scale-105 transition-transform cursor-default">
                            Test Prep - Pro
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 w-full items-stretch max-w-7xl mx-auto px-4">

                        {/* Left Column: Hero Content & Illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-between h-full py-6"
                        >
                            <div className="relative group flex justify-center">
                                {/* Illustration - Made smaller as requested */}
                                <img
                                    src="/images/test_prep_pro_hero.png"
                                    alt="Assessment Platform Illustration"
                                    className="object-contain w-full max-w-[380px] transform group-hover:-translate-y-2 transition-transform duration-1000 ease-out"
                                />
                                {/* Ambient Floating Glows */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-300/20 rounded-full blur-[80px] -z-10" />
                            </div>

                            <div className="space-y-4 text-left">
                                <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-slate-600 leading-[1.15] tracking-tight">
                                    Advance <span className="font-extrabold text-slate-900">Assessment Platform for Students</span> Preparing for Various Recruitment Tests
                                </h1>
                                <p className="text-base md:text-lg text-indigo-600/60 font-medium tracking-wide">
                                    Elevate Academic Excellence Through Precision Testing
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Contact Form - Matching Screenshot UI */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_25px_100px_rgba(0,0,0,0.06)] border border-slate-100 relative overflow-hidden h-full flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8 tracking-tight">
                                Contact Us Today
                            </h3>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <Input
                                            placeholder="First Name*"
                                            className="h-14 bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Input
                                            placeholder="Last Name*"
                                            className="h-14 bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <Input
                                            placeholder="Whatsapp No.*"
                                            className="h-14 bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Input
                                            placeholder="Email*"
                                            type="email"
                                            className="h-14 bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <Input
                                            placeholder="College Name*"
                                            className="h-14 bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <Input
                                            placeholder="City*"
                                            className="h-14 bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <Textarea
                                        placeholder="Message*"
                                        className="min-h-[120px] bg-slate-50/50 border-slate-200/80 rounded-2xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 resize-none pt-4"
                                    />
                                </div>

                                <div className="flex justify-center pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full sm:w-[280px] h-14 bg-[#d9d1f7] hover:bg-[#c9bdf5] text-[#7c66dc] font-black text-lg rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(217,209,247,0.4)] active:scale-95"
                                    >
                                        Submit !!
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>

            {/* Key Features Section - Creative Grid Matching Reference */}
            <section className="py-24 bg-[#FEF6F0] relative overflow-hidden">
                <div className="container relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Title Card */}
                        <div className="lg:col-span-1 flex flex-col justify-start pt-4">
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-outfit tracking-tight">Key Features</h2>
                            <code className="text-[13px] text-slate-400 font-mono break-all opacity-80">
                                SELECT * FROM 'tbl_keyfea' WHERE type = 'test-prep-pro' AND status='1'
                            </code>
                        </div>

                        {/* Feature 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Comprehensive Subject Coverage</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Extensive question banks covering essential Computer Science subjects such as algorithms, data structures, databases, operating systems, computer networks
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="M2 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="M12 22v-4"></path><path d="m19.07 19.07-2.83-2.83"></path><path d="M22 12h-4"></path><path d="m19.07 4.93-2.83 2.83"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Adaptive Testing</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Utilizes adaptive testing algorithms to tailor the difficulty of questions based on the student's performance, ensuring a personalized and effective assessment experience.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Multiple Question Formats</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Offers a variety of question formats, including multiple choice questions (MCQs), true/false, fill-in-the-blanks, and scenario-based questions, to test theoretical knowledge and problem-solving abilities
                            </p>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Comprehensive Performance Analysis</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Offers thorough performance analytics and reporting, enabling students to identify strengths and weaknesses, monitor progress, and prioritize areas for improvement.
                            </p>
                        </motion.div>

                        {/* Feature 5 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Timed Practice Tests</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Features timed practice tests that simulate real recruitment test conditions, helping students build time management skills and reduce test anxiety.
                            </p>
                        </motion.div>

                        {/* Feature 6 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">User-friendly Interface</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Offers an intuitive and user-friendly interface, ensuring a seamless and engaging test-taking experience.
                            </p>
                        </motion.div>

                        {/* Spacer for asymmetrical grid row */}
                        <div className="hidden lg:block"></div>

                        {/* Feature 7 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#FFEAD8] p-8 rounded-[2rem] space-y-4 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#7c66dc] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7c66dc]/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Enhanced Security Features</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Incorporates audio and video proctoring to monitor test sessions and ensure integrity. Prevents tab-switching during tests to prevent unauthorized browsing. Disables copying and pasting to prevent cheating and ensure fair assessment practices.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default TestPrepProPage;
