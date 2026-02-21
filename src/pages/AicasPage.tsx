import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Brain, BookOpen, Award, Smartphone, Shield,
    LayoutDashboard, CreditCard, FileText, Video,
    Code, Briefcase, MonitorPlay, Users,
    ClipboardList, Bell
} from 'lucide-react';

const features = [
    { title: "AI Powered", text: "Our ERP Enhances decision-making with predictive insights, automates administrative tasks for efficiency, and provides personalized learning", icon: Brain },
    { title: "NEP 2020 Compliant", text: "Our Campus ERP is NEP 2020-compliant, offering flexible, personalized learning paths and a curriculum structure", icon: BookOpen },
    { title: "NBA, NAAC, NIRF COMPLIANT", text: "Our ERP ensures compliance with NBA, NAAC, and NIRF standards by facilitating streamlined accreditation processes", icon: Award },
    { title: "Excl. Android & iOS Apps", text: "Personalised College Apps on Play Store, App Store & Web Applications for Seamless Access on Browser & Mobile.", icon: Smartphone },
    { title: "Admin Panel Access", text: "Exclusive Admin Access to Relevant Stakeholders of the College to Edit, Upload, Create Various Data or Fields", icon: Shield },
    { title: "Comprehensive Dashboard", text: "Interactive Dashboards for College Management, Principal, Dean and Various Department and Administration Heads for Insightful Data and Efficient Management", icon: LayoutDashboard },
    { title: "Integrated Payment Gateway", text: "Collect Fees from Students and also other Transactions through Integrated Payment Gateway on Mobile and also through Browser.", icon: CreditCard },
    { title: "Semester Exam prep. Content", text: "Questions and Answers, Videos*, Relevant Study Material* Curated by Subject Experts Covering", icon: FileText },
    { title: "Upskilling Videos", text: "Video Courses on Campus Placement Programmes , Company-wise Placement Cracker Video Courses Recorded by Subject Experts", icon: Video },
    { title: "Multi Language Coding Compiler", text: "Dedicated Multi Language Coding Compiler for Students for Coding Practice & Hackathons", icon: Code },
    { title: "Career Updates", text: "Regular Updates on Placement Opportunities and Notifications Related to Higher Education and PSUs", icon: Briefcase },
    { title: "Free Integrated Online Class Platform", text: "Take Unlimited Classes from 10 - 10000 Students with No Extra Cost.", icon: MonitorPlay },
    { title: "Wall - Facebook of the College", text: "Exclusive Inbuilt Social Media Platform for College to share your thoughts with the Entire Campus.", icon: Users },
    { title: "Dedicated Test Engine", text: "Integrated Test Engine to conduct Various Online Assessment Tests with detailed Result Analyses", icon: ClipboardList },
    { title: "Effective Communication", text: "Stay connected with entire Campus Stakeholders through Timely Alerts, Circulars, and updates", icon: Bell },
];

const AicasPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-white relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative pt-24 pb-20">
                {/* Clean, Modern Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden flex flex-col justify-between">
                    {/* Top Right Subtle Glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/3" />

                    {/* Center Left Subtle Glow */}
                    <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-70 -translate-x-1/2" />

                    {/* Abstract Line Backgrounds */}
                    <img src="/images/line2.png" alt="" className="absolute top-20 left-0 w-[70vw] md:w-[50vw] object-contain opacity-[0.35] mix-blend-multiply pointer-events-none" />
                    <img src="/images/line6.png" alt="" className="absolute bottom-40 right-0 w-[70vw] md:w-[50vw] object-contain opacity-[0.25] mix-blend-multiply pointer-events-none transform scale-x-[-1]" />

                    {/* Bottom Wave Graphics Matching Reference */}
                    <div className="absolute bottom-0 left-0 w-full opacity-30">
                        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto translate-y-20">
                            <path d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,128C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#paint0_linear)" />
                            <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="url(#paint1_linear)" fillOpacity="0.5" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="0" y1="320" x2="1440" y2="128" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F3E8FF" />
                                    <stop offset="1" stopColor="#E0E7FF" stopOpacity="0.2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="1440" y1="320" x2="0" y2="144" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E0E7FF" />
                                    <stop offset="1" stopColor="#F3E8FF" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Wavy line dashes as seen in image */}
                        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-10 left-0 w-full opacity-40">
                            <path d="M-100 150C200 50 400 250 720 150C1040 50 1240 250 1540 150" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="10 10" />
                            <path d="M-100 100C200 0 400 200 720 100C1040 0 1240 200 1540 100" stroke="#6366F1" strokeWidth="0.5" strokeDasharray="5 15" />
                        </svg>
                    </div>
                </div>

                <div className="container relative z-10 flex flex-col items-center">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 space-y-4"
                    >
                        {/* Top Pill */}
                        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white px-6 py-2 rounded-full font-bold tracking-widest text-xs uppercase shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform cursor-default">
                            AI Powered AICAS
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-800 tracking-tighter leading-[1.05]">
                            Campus Automation Solution
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 font-medium tracking-wide max-w-2xl leading-relaxed">
                            Transforming Campuses with <span className="text-indigo-600 font-bold">AI Brilliance</span>
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 w-full items-center max-w-6xl mx-auto">

                        {/* Left Column: Pure Floating Illustration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full aspect-square md:aspect-auto md:h-[450px] flex items-center justify-center group"
                        >
                            {/* Ambient Floating Glows */}
                            <div className="absolute top-[10%] right-[20%] w-[300px] h-[300px] bg-purple-300/30 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-indigo-300/30 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-1000" />

                            {/* Floating image with no bounding box */}
                            <img
                                src="/images/aicas-illustration.png"
                                alt="AICAS Illustration"
                                className="object-contain w-[95%] h-[95%] transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-[1.5s] ease-out relative z-10 mix-blend-multiply"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    if (target.src.includes('aicas-illustration.png')) {
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `
                                            <div class="flex flex-col items-center justify-center text-center p-8 w-full h-full relative z-10 gap-6">
                                                <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-[3rem] border border-white shadow-xl shadow-indigo-900/5 backdrop-blur-sm -z-10"></div>
                                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-indigo-400">
                                                    <path d="M12 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8 6H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M16 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V8C18 6.89543 17.1046 6 16 6Z" fill="#e0e7ff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9 12V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M15 12V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M2 13H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M19 13H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                <p class="text-lg font-bold text-indigo-400">Illustration Placeholder</p>
                                            </div>
                                        `;
                                    }
                                }}
                            />
                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="bg-white/80 backdrop-blur-3xl rounded-[2rem] p-6 md:p-8 shadow-[0_20px_80px_rgba(99,102,241,0.08)] border border-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h3 className="text-2xl font-black text-center text-slate-800 mb-6 tracking-tight">
                                Get Started Today
                            </h3>

                            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        placeholder="First Name*"
                                        className="h-12 bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 font-medium"
                                    />
                                    <Input
                                        placeholder="Last Name*"
                                        className="h-12 bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 font-medium"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        placeholder="Whatsapp No.*"
                                        className="h-12 bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 font-medium"
                                    />
                                    <Input
                                        placeholder="Email*"
                                        type="email"
                                        className="h-12 bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 font-medium"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        placeholder="College Name*"
                                        className="h-12 bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 font-medium"
                                    />
                                    <Input
                                        placeholder="City*"
                                        className="h-12 bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 font-medium"
                                    />
                                </div>

                                <Textarea
                                    placeholder="Message*"
                                    className="min-h-[100px] bg-white/70 border-slate-200/60 rounded-xl focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 resize-none pt-4 font-medium"
                                />

                                <div className="flex justify-center pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full sm:w-auto min-w-[240px] h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(99,102,241,0.3)] active:scale-[0.98]"
                                    >
                                        Send Inquiry
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-indigo-50/50 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-purple-50/50 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                            The Extra Edge with us
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                className="bg-white rounded-[1.5rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] transition-all duration-300 border border-slate-100 group relative overflow-hidden hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-colors duration-500 pointer-events-none" />

                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 relative z-10">
                                    <feature.icon size={26} strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors relative z-10">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-[15px] relative z-10">
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

export default AicasPage;
