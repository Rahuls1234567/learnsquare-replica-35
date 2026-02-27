import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Rocket, BookOpen, Briefcase, Zap, Star, ShieldCheck, Brain, MessageSquare, Code2, PenTool, Github, Database, Calculator, Lightbulb, Atom, Cpu, Globe, Layout } from "lucide-react";

const FeatureCard = ({ title, desc, img, reverse = false, icon: Icon, color }: any) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-[3rem] p-8 md:p-14 border border-indigo-50 shadow-[0_40px_100px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700 bg-white`}
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
                <div className={`${reverse ? 'md:order-2' : ''} relative`}>
                    <motion.div
                        whileHover={{ y: -10, rotate: reverse ? -2 : 2 }}
                        className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl bg-white aspect-[4/3] border-4 border-white"
                    >
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                        />
                    </motion.div>
                </div>

                <div className={`${reverse ? 'md:order-1 text-right' : ''} space-y-6`}>
                    <div className={`flex items-center gap-4 ${reverse ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center`} style={{ color }}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <div className="h-px flex-grow bg-slate-200" />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-slate-800 leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: title }} />

                    <p className={`text-slate-500 text-[16px] md:text-[17px] font-bold leading-relaxed max-w-md ${reverse ? 'ml-auto' : ''}`}>
                        {desc}
                    </p>

                    <Button variant="ghost" className={`group/btn p-0 font-black hover:bg-transparent ${reverse ? 'flex-row-reverse gap-2' : 'gap-2'}`} style={{ color: color }}>
                        Explore Phase
                        <span className={`transition-transform duration-300 group-hover/btn:translate-x-2`}>→</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const MySkillForgePage = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            title: "Phase I: Foundational Skills Development",
            subtitle: "Phase I: Foundational Skills Development:",
            description: "This phase focuses on building core technical and communication skills. Students participate in live boot camps and recorded courses covering:",
            image: "/images/illustrations/java_fullstack.png",
            items: [
                { label: "Programming Logic", desc: "Boot camps that help students develop problem-solving abilities, improve algorithm design, and enhance debugging skills." },
                { label: "Business Communication & Technical Writing", desc: "Recorded courses aimed at improving written and verbal communication, essential for professional success." },
                { label: "Java Programming", desc: "A comprehensive boot camp that teaches Java syntax, object-oriented programming, and application development." },
                { label: "GitHub Workshop", desc: "Hands-on experience with GitHub, where students learn version control and collaboration best practices." }
            ]
        },
        {
            title: "Phase II: Advanced Technical and Analytical Skills",
            subtitle: "Phase II: Advanced Technical and Analytical Skills:",
            description: "In this phase, students deepen their knowledge of technical subjects while honing their problem-solving and analytical skills:",
            image: "/images/illustrations/curriculum.png",
            items: [
                { label: "Data Structures and Algorithms (DSA) through Java", desc: "Focus on implementing complex data structures and algorithms, optimizing performance." },
                { label: "Mathematical Aptitude & Logical Reasoning", desc: "Recorded courses that enhance analytical skills and logical reasoning." },
                { label: "React/Bootstrap for Web Development", desc: "Live boot camps focused on frontend web development and integrating APIs." },
                { label: "Emerging Technologies", desc: "An exploration of cutting-edge technologies like AI, IoT, and blockchain." }
            ]
        },
        {
            title: "Phase III: Hackathon-Style Internship",
            subtitle: "Phase III: Hackathon-Style Internship:",
            description: "The final phase is a 6-week hackathon-style internship where students apply the knowledge gained from previous phases to real-world projects. Teams work together to develop full-cycle applications using Java and React, simulating an industry-like experience. This phase emphasizes:",
            image: "/images/illustrations/training_programs_hero.png",
            items: [
                { label: "Collaborative project work in a time-bound environment", desc: "" },
                { label: "Mentorship from industry experts", desc: "" },
                { label: "Presentations to showcase projects", desc: "refining students' technical communication and problem-solving skills." }
            ]
        }
    ];

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
                    {/* Premium Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/myskillforge_premium_hero.png"
                            alt="Premium Background"
                            className="w-full h-full object-cover scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/40 to-black/80 backdrop-blur-[2px]" />

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

                            {/* Left Side: Premium Branding Block */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-white space-y-8"
                            >
                                <div className="space-y-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="relative"
                                    >
                                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#FF1493] drop-shadow-[0_10px_40px_rgba(255,20,147,0.4)]">
                                            MySkillForge
                                        </h2>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="inline-flex bg-[#3c379a] border border-white/20 px-8 py-5 rounded-[2.5rem] shadow-[0_25px_60px_rgba(60,55,154,0.3)] relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50" />
                                        <span className="relative z-10 text-white font-black text-lg md:text-2xl leading-[1.1] tracking-tight">
                                            Pre-Internship Program & <br />
                                            <span className="text-blue-200">6 Weeks Virtual Internship</span>
                                        </span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className="space-y-6 max-w-2xl"
                                    >
                                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                                            <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                                                Increase Employability Skills by
                                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF1493] text-white font-black mx-3 shadow-[0_0_20px_rgba(255,20,147,0.5)] text-lg">5x</span>
                                                with our <span className="text-blue-400">3-Phase Program</span>, 11 Certifications & 6-Week Internship.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {["11 Certificates", "Virtual Internship", "Live Bootcamps", "Industry Expert Mentorship"].map((tag, i) => (
                                        <div key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-sm font-bold">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Side: Glassmorphic Enrolment Form */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative"
                            >
                                <div className="glass-chrome rounded-[3rem] p-8 md:p-12 border border-white/20 shadow-2xl relative z-10">
                                    <h3 className="text-2xl font-black text-white text-center mb-8 tracking-tight">Fill in your Details to Enrol !!</h3>

                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input placeholder="First Name*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="Last Name*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Input placeholder="Mobile Number*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                            <Input placeholder="Email*" className="h-14 rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/40 font-bold px-7 focus:ring-2 focus:ring-indigo-500/50 transition-all" />
                                        </div>

                                        <Select>
                                            <SelectTrigger className="h-14 rounded-2xl border-white/20 bg-white/10 text-white font-bold px-7 focus:ring-2 focus:ring-indigo-500/50">
                                                <SelectValue placeholder="Course Enrolling for*" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-slate-900 border-white/20 text-white">
                                                <SelectItem value="msf-program">MySkillForge - Pre Internship & Virtual Internship Programs</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Select>
                                                <SelectTrigger className="h-14 rounded-2xl border-white/20 bg-white/10 text-white font-bold px-7 focus:ring-2 focus:ring-indigo-500/50">
                                                    <SelectValue placeholder="Program*" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-slate-900 border-white/20 text-white">
                                                    <SelectItem value="btech">B.Tech</SelectItem>
                                                    <SelectItem value="mtech">M.Tech</SelectItem>
                                                    <SelectItem value="bca">BCA</SelectItem>
                                                    <SelectItem value="mca">MCA</SelectItem>
                                                    <SelectItem value="bsc">B.Sc</SelectItem>
                                                    <SelectItem value="others">Others</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <Select>
                                                <SelectTrigger className="h-14 rounded-2xl border-white/20 bg-white/10 text-white font-bold px-7 focus:ring-2 focus:ring-indigo-500/50">
                                                    <SelectValue placeholder="Branch*" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-slate-900 border-white/20 text-white">
                                                    <SelectItem value="cse">CSE</SelectItem>
                                                    <SelectItem value="ece">ECE</SelectItem>
                                                    <SelectItem value="mech">MECH</SelectItem>
                                                    <SelectItem value="civil">CIVIL</SelectItem>
                                                    <SelectItem value="others">Others</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <Select>
                                                <SelectTrigger className="h-14 rounded-2xl border-white/20 bg-white/10 text-white font-bold px-7 focus:ring-2 focus:ring-indigo-500/50">
                                                    <SelectValue placeholder="Year of Study*" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-slate-900 border-white/20 text-white">
                                                    <SelectItem value="1">1st Year</SelectItem>
                                                    <SelectItem value="2">2nd Year</SelectItem>
                                                    <SelectItem value="3">3rd Year</SelectItem>
                                                    <SelectItem value="4">4th Year</SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <Select>
                                                <SelectTrigger className="h-14 rounded-2xl border-white/20 bg-white/10 text-white font-bold px-7 focus:ring-2 focus:ring-indigo-500/50">
                                                    <SelectValue placeholder="Semester*" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-slate-900 border-white/20 text-white">
                                                    <SelectItem value="1">1st Sem</SelectItem>
                                                    <SelectItem value="2">2nd Sem</SelectItem>
                                                    <SelectItem value="3">3rd Sem</SelectItem>
                                                    <SelectItem value="4">4th Sem</SelectItem>
                                                    <SelectItem value="5">5th Sem</SelectItem>
                                                    <SelectItem value="6">6th Sem</SelectItem>
                                                    <SelectItem value="7">7th Sem</SelectItem>
                                                    <SelectItem value="8">8th Sem</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex justify-center pt-4">
                                            <Button className="w-full h-16 rounded-[2rem] bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xl hover:opacity-90 transition-all shadow-xl active:scale-95 group/btn">
                                                Enrol Now !!
                                                <Zap className="ml-2 w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform" />
                                            </Button>
                                        </div>
                                    </form>
                                </div>

                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl opacity-50" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl opacity-50" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { val: "5K+", label: "Learners", icon: Star, color: "#6366f1" },
                                { val: "175+", label: "Participating Colleges", icon: Globe, color: "#ec4899" },
                                { val: "85%", label: "Weekly Active Learners", icon: Rocket, color: "#3b82f6" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group p-8 rounded-[3rem] bg-white border border-slate-100 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500"
                                >
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-slate-400 group-hover:scale-110 transition-transform">
                                        <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                                    </div>
                                    <h4 className="text-4xl font-black mb-1 tracking-tighter text-slate-900">{stat.val}</h4>
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Next Batch Update Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20 bg-white rounded-[4rem] border border-slate-100 p-12 md:p-20 text-center max-w-6xl mx-auto shadow-[0_50px_100px_rgba(0,0,0,0.06)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-[10px] uppercase tracking-[0.3em] shadow-xl mb-10 inline-block">
                                    Limited Slots Only
                                </span>
                                <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-16 tracking-tighter">
                                    Next Batch <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1493] to-purple-600">Update!</span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16">
                                    {[
                                        { label: "ENROLMENT DEADLINE", val: "25th Dec 2024", icon: Star, color: "#f59e0b" },
                                        { label: "ORIENTATION SESSION", val: "2nd Jan 2025, 7PM", icon: BookOpen, color: "#6366f1" },
                                        { label: "BATCH KICK-OFF", val: "03rd Jan 2025, 7PM", icon: Rocket, color: "#ec4899" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform mb-2">
                                                <item.icon className="w-6 h-6" style={{ color: item.color }} />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.label}</p>
                                                <p className="text-slate-900 font-black text-xl md:text-2xl tracking-tight">{item.val}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12 border-t border-slate-100 w-full">
                                    <span className="text-xl md:text-2xl font-black text-slate-400 tracking-tight">Program Fee:</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">₹235/-</span>
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">(Incl. of GST)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="container mx-auto px-4 md:px-6">
                    {/* Salient Features Section */}
                    <div className="mt-20">
                        <div className="text-center mb-16">
                            <span className="px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-[#3c379a] font-black text-xs uppercase tracking-[0.2em] mb-4 inline-block">
                                Why Choose Us
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mt-4">Salient Features</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Comprehensive 3-Phase Program",
                                    desc: "A step-by-step approach combining live boot camps, recorded courses, and an intensive 6-week hackathon-style Internship.",
                                    img: "/images/features/feature_3phase.png",
                                    icon: Rocket,
                                    color: "#6366f1"
                                },
                                {
                                    title: "11 Certification Tracks",
                                    desc: "Master cutting-edge technologies with certifications in key areas such as Java, React, Data Structures, and more.",
                                    img: "/images/features/feature_certification.png",
                                    icon: Star,
                                    color: "#f59e0b"
                                },
                                {
                                    title: "Live & Recorded Sessions",
                                    desc: "Flexible learning through expert-led live sessions and on-demand recorded content, tailored for your schedule.",
                                    img: "/images/features/feature_sessions.png",
                                    icon: Zap,
                                    color: "#ec4899"
                                },
                                {
                                    title: "Student Portal",
                                    desc: "Our student portal offers a streamlined learning experience with easy access to video lessons and practice tests.",
                                    img: "/images/features/feature_portal.png",
                                    icon: Layout,
                                    color: "#8b5cf6"
                                },
                                {
                                    title: "Comprehensive Skill Set",
                                    desc: "Develop technical proficiency, problem-solving abilities, and communication skills to become a well-rounded engineer.",
                                    img: "/images/features/feature_skills.png",
                                    icon: Brain,
                                    color: "#10b981"
                                },
                                {
                                    title: "6-Week Virtual Internship",
                                    desc: "Gain hands-on industry experience through a focused internship, applying your skills to real-world projects.",
                                    img: "/images/features/feature_internship.png",
                                    icon: Briefcase,
                                    color: "#3b82f6"
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <img src="/images/card_premium_texture.png" className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="relative z-10 space-y-6">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800 shadow-sm">
                                            <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                                        </div>
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-50">
                                            <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-black text-slate-800 leading-tight">{feature.title}</h3>
                                            <p className="text-slate-500 font-bold text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Structure Section */}
                    <div className="mt-32 p-8 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                                <span className="w-12 h-px bg-slate-200" />
                                COURSE STRUCTURE
                            </h2>

                            <div className="flex flex-col lg:flex-row gap-16">
                                {/* Side Tabs */}
                                <div className="lg:w-1/3 flex flex-col gap-4">
                                    {phases.map((phase, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActivePhase(idx)}
                                            className={`text-left p-8 rounded-[2rem] font-black transition-all duration-300 ${activePhase === idx
                                                ? "bg-white text-indigo-600 shadow-xl border-l-8 border-indigo-600 scale-[1.02]"
                                                : "text-slate-400 hover:bg-white/50"
                                                }`}
                                        >
                                            <span className="text-xs uppercase tracking-widest opacity-60 block mb-1">Phase 0{idx + 1}</span>
                                            {phase.title.split(':')[0]}
                                        </button>
                                    ))}
                                </div>

                                {/* Content Area */}
                                <div className="lg:w-2/3 bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-white">
                                    <motion.div
                                        key={activePhase}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-10"
                                    >
                                        <div className="space-y-4">
                                            <h4 className="text-slate-900 font-black text-3xl md:text-4xl leading-tight">{phases[activePhase].subtitle.replace(':', '')}</h4>
                                            <p className="text-slate-500 font-bold text-base leading-relaxed max-w-2xl">
                                                {phases[activePhase].description}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <ul className="space-y-6">
                                                {phases[activePhase].items.map((item, idx) => (
                                                    <li key={idx} className="flex gap-5 group/item">
                                                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-black group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                                                            {idx + 1}
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="text-slate-900 font-black text-[15px] leading-tight">{item.label}</p>
                                                            {item.desc && <p className="text-slate-400 font-bold text-xs leading-relaxed">{item.desc}</p>}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="hidden md:flex items-center justify-center bg-slate-50 rounded-[2rem] p-8 relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <motion.img
                                                    key={activePhase}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    src={phases[activePhase].image}
                                                    alt={phases[activePhase].title}
                                                    className="w-full h-auto object-contain filter drop-shadow-2xl relative z-10"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Curriculum Sections */}
                <div className="container mx-auto px-4 md:px-6 mt-32 space-y-20 pb-20">
                    <div className="text-center mb-16">
                        <span className="px-6 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-black text-xs uppercase tracking-[0.2em] mb-4 inline-block">
                            Curriculum Depth
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mt-4">In-Depth Learning Path</h2>
                    </div>

                    {/* Phase I */}
                    <div className="rounded-[3.5rem] bg-slate-950 p-8 md:p-20 text-white overflow-hidden relative border border-white/10 shadow-2xl">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 space-y-12">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <span className="text-purple-400 font-black text-xs uppercase tracking-[0.3em]">PHASE I</span>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Foundational Programs</h2>
                                </div>
                                <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/80 font-bold text-sm">
                                    Core Tech & Soft Skills
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { title: "Techniques for Improving Programming Logic", type: "Boot Camp", mode: "Live Online", hours: 10, duration: "5 Days", certificate: "Participation", icon: Brain },
                                    { title: "Business Communication", type: "Short Course", mode: "Recorded Online", hours: 8, duration: "Anytime", certificate: "Graded", icon: MessageSquare },
                                    { title: "Java Programming", type: "Boot Camp", mode: "Recorded Online", hours: 24, duration: "6 Weeks", certificate: "Graded", icon: Code2 },
                                    { title: "Technical Writing", type: "Short Course", mode: "Recorded Online", hours: 8, duration: "Anytime", certificate: "Graded", icon: PenTool },
                                    { title: "Using Github as a Code Repository", type: "Boot Camp", mode: "Live Online", hours: 6, duration: "3 Days", certificate: "Participation", icon: Github },
                                ].map((prog, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group hover:scale-[1.02] duration-500">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                            <prog.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-black text-xl leading-tight mb-6">{prog.title}</h4>
                                        <div className="space-y-3 text-[12px] font-bold text-slate-400 uppercase tracking-wider">
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-white/40">Type</span>
                                                <span className="text-white/80">{prog.type}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-white/40">Mode</span>
                                                <span className="text-white/80">{prog.mode}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-white/40">Duration</span>
                                                <span className="text-white/80">{prog.duration}</span>
                                            </div>
                                            <p className="pt-2 text-purple-400">Certification: {prog.certificate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Phase II */}
                    <div className="rounded-[3.5rem] bg-white p-8 md:p-20 text-slate-950 overflow-hidden relative border border-slate-100 shadow-[0_50px_100px_rgba(0,0,0,0.06)]">
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 space-y-12">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em]">PHASE II</span>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">Advanced Technical Skills</h2>
                                </div>
                                <div className="px-6 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold text-sm">
                                    DSA & Emerging Tech
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { title: "DSA through Java", type: "Boot Camp", mode: "Live Online", hours: 10, duration: "5 Days", certificate: "Participation", icon: Database },
                                    { title: "Mathematical Aptitude", type: "Short Course", mode: "Recorded Online", hours: 12, duration: "Anytime", certificate: "Graded", icon: Calculator },
                                    { title: "Logical Reasoning", type: "Short Course", mode: "Recorded Online", hours: 12, duration: "Anytime", certificate: "Graded", icon: Lightbulb },
                                    { title: "React / Bootstrap", type: "Boot Camp", mode: "Live Online", hours: 10, duration: "5 Days", certificate: "Graded", icon: Atom },
                                    { title: "Emerging Technologies", type: "Boot Camp", mode: "Live Online", hours: 6, duration: "3 Days", certificate: "Participation", icon: Cpu },
                                ].map((prog, i) => (
                                    <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group hover:scale-[1.02] duration-500">
                                        <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                                            <prog.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-black text-xl leading-tight mb-6">{prog.title}</h4>
                                        <div className="space-y-3 text-[12px] font-bold text-slate-500 uppercase tracking-wider">
                                            <div className="flex justify-between border-b border-slate-200 pb-2">
                                                <span className="text-slate-400">Type</span>
                                                <span className="text-slate-700">{prog.type}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-200 pb-2">
                                                <span className="text-slate-400">Mode</span>
                                                <span className="text-slate-700">{prog.mode}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-slate-200 pb-2">
                                                <span className="text-slate-400">Duration</span>
                                                <span className="text-slate-700">{prog.duration}</span>
                                            </div>
                                            <p className="pt-2 text-orange-600">Certification: {prog.certificate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Phase III */}
                    <div className="rounded-[3.5rem] bg-indigo-900 p-8 md:p-20 text-white overflow-hidden relative border border-white/10 shadow-2xl">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="max-w-4xl space-y-10">
                                <div className="space-y-4">
                                    <span className="text-indigo-300 font-black text-xs uppercase tracking-[0.3em]">PHASE III</span>
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">Hackathon-Style Internship</h2>
                                </div>
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3.5rem] relative">
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
                                    <p className="text-white/80 font-bold leading-relaxed text-lg md:text-xl">
                                        In this final phase, students participate in a 6-week hackathon-style internship. Working in teams, they apply their technical skills in Java and React to develop real-world projects, simulating an industry environment. Guided by mentors, students tackle problem-solving challenges, collaborate on innovative solutions, and present their projects to a panel of experts.
                                    </p>
                                    <div className="flex flex-wrap gap-6 mt-10">
                                        {["Real-world Projects", "Industry Mentors", "Professional Presentation", "Team Collaboration"].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                                                    <Zap className="w-3 h-3 fill-white text-white" />
                                                </div>
                                                <span className="font-bold text-sm text-indigo-100">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div >
    );
};

export default MySkillForgePage;
