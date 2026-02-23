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
import { Rocket, BookOpen, Briefcase, Zap, Star, ShieldCheck, Brain, MessageSquare, Code2, PenTool, Github, Database, Calculator, Lightbulb, Atom, Cpu } from "lucide-react";

const FeatureCard = ({ title, desc, img, reverse = false, bg, icon: Icon, color }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`group relative overflow-hidden rounded-2xl p-8 md:p-14 ${bg} border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.04)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.08)] transition-all duration-700`}
        >
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
                <div className={`${reverse ? 'md:order-2' : ''} relative`}>
                    <motion.div
                        whileHover={{ y: -10, rotate: reverse ? -2 : 2 }}
                        className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-white aspect-[4/3] border-4 border-white"
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
        </motion.div>
    );
};

const MySkillForgePage = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            title: "Phase I: Foundational Skills Development",
            subtitle: "Phase I: Foundational Skills Development:",
            description: "This phase focuses on building core technical and communication skills. Students participate in live boot camps and recorded courses covering:",
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

            <main className="relative pt-24 pb-20">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[120px] opacity-40 translate-x-1/4 -translate-y-1/4" />
                    <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[100px] opacity-30 -translate-x-1/4" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    <section className="pb-20">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Hero Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                {/* Branding Image (Top) */}
                                <div className="space-y-8 pt-8">
                                    <div className="relative group">
                                        <img
                                            src="/images/homeimage/MySkillForgelogo.png"
                                            alt="MySkillForge Branding"
                                            className="h-auto w-full max-w-4xl transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>

                                {/* Heading Section (Below Image) */}
                                <div className="space-y-6">
                                    <div className="space-y-1 text-left">
                                        <h3 className="text-2xl md:text-3xl font-medium text-slate-500 leading-tight">
                                            Empowering You with
                                        </h3>
                                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                            Skills for Tomorrow's Jobs
                                        </h2>
                                    </div>
                                    <p className="text-slate-500 font-bold text-base max-w-2xl leading-relaxed pt-2">
                                        A 3-Phase Program to Increase Students Employability Skills by 5x with 11 Employability Skill Certificates and Virtual Internship of 6 Weeks
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Column: Enrolment Form */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 md:p-10 shadow-[0_50px_120px_rgba(0,0,0,0.1)] border border-slate-50 relative"
                            >
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100/50 rounded-full blur-2xl" />
                                <h3 className="text-2xl font-black text-slate-800 text-center mb-6 leading-tight">Fill in your Details to Enrol !!</h3>

                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input placeholder="First Name*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all" />
                                        <Input placeholder="Last Name*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input placeholder="Mobile Number*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all" />
                                        <Input placeholder="Email*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input placeholder="College Name*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all" />
                                        <Input placeholder="City*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all" />
                                    </div>

                                    <Select>
                                        <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100">
                                            <SelectValue placeholder="Course Enrolling for*" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="msf-program">MySkillForge - Pre Internship & Virtual Internship Programs</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Select>
                                            <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all">
                                                <SelectValue placeholder="Program*" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="btech">B.Tech</SelectItem>
                                                <SelectItem value="mtech">M.Tech</SelectItem>
                                                <SelectItem value="bca">BCA</SelectItem>
                                                <SelectItem value="mca">MCA</SelectItem>
                                                <SelectItem value="bsc">B.Sc</SelectItem>
                                                <SelectItem value="others">Others</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <Select>
                                            <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all">
                                                <SelectValue placeholder="Branch*" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="cse">CSE</SelectItem>
                                                <SelectItem value="ece">ECE</SelectItem>
                                                <SelectItem value="mech">MECH</SelectItem>
                                                <SelectItem value="civil">CIVIL</SelectItem>
                                                <SelectItem value="others">Others</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Select>
                                        <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-pink-100 transition-all">
                                            <SelectValue placeholder="Year & Semester*" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="y1s1">1st Year - 1st Semester</SelectItem>
                                            <SelectItem value="y1s2">1st Year - 2nd Semester</SelectItem>
                                            <SelectItem value="y2s1">2nd Year - 1st Semester</SelectItem>
                                            <SelectItem value="y2s2">2nd Year - 2nd Semester</SelectItem>
                                            <SelectItem value="y3s1">3rd Year - 1st Semester</SelectItem>
                                            <SelectItem value="y3s2">3rd Year - 2nd Semester</SelectItem>
                                            <SelectItem value="y4s1">4th Year - 1st Semester</SelectItem>
                                            <SelectItem value="y4s2">4th Year - 2nd Semester</SelectItem>
                                            <SelectItem value="passout">Passout</SelectItem>
                                            <SelectItem value="others">Others</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <div className="flex justify-center pt-4">
                                        <Button className="h-12 px-12 rounded-full bg-[#ede9fe] text-slate-900 font-black text-lg hover:bg-[#ddd6fe] transition-all shadow-xl active:scale-95 group/btn border-none">
                                            Enrol Now !!
                                            <Zap className="ml-2 w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-125 transition-transform" />
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>

                        {/* Statistics Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                            {[
                                { val: "5K+", label: "Learners" },
                                { val: "175+", label: "Participating Colleges" },
                                { val: "85%", label: "Weekly Active Learners" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group p-6 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#9333EA] text-white flex flex-col items-center justify-center text-center shadow-xl hover:scale-[1.03] transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    <h4 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.val}</h4>
                                    <p className="text-base md:text-lg font-bold opacity-90">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Next Batch Update Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-10 text-center max-w-4xl mx-auto py-4"
                        >
                            <div className="flex justify-center mb-4">
                                <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-purple-100">
                                    Limited Slots Only
                                </span>
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">
                                Next Batch <span className="text-purple-600">Update!</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {[
                                    { label: "ENROLMENT DEADLINE", val: "25th Dec 2024", icon: Star, color: "#f59e0b" },
                                    { label: "ORIENTATION SESSION", val: "2nd Jan 2025, 7PM", icon: BookOpen, color: "#6366f1" },
                                    { label: "BATCH KICK-OFF", val: "03rd Jan 2025, 7PM", icon: Rocket, color: "#ec4899" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-2 shadow-sm">
                                            <item.icon className="w-5 h-5" style={{ color: item.color }} />
                                        </div>
                                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-0.5">{item.label}</p>
                                        <p className="text-slate-900 font-black text-lg">{item.val}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <span className="text-xl font-bold text-slate-800">Program Fee:</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-slate-900">₹235/-</span>
                                    <span className="text-sm font-bold text-slate-500">(Incl.of GST)</span>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Salient Features Section */}
                    <div className="mt-32">
                        <h2 className="text-4xl font-black text-[#58448c] mb-16 tracking-tight">Salient Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {[
                                {
                                    title: "Comprehensive 3-Phase Program",
                                    desc: "A step-by-step approach combining live boot camps, recorded courses, and an intensive 6-week hackathon-style Internship.",
                                    img: "/images/features/feature_3phase.png"
                                },
                                {
                                    title: "11 Certification Tracks Endorsed by HR Association of India",
                                    desc: "Master cutting-edge technologies with certifications in key areas such as Java, React, Data Structures, and more.",
                                    img: "/images/features/feature_certification.png"
                                },
                                {
                                    title: "Live & Recorded Sessions",
                                    desc: "Flexible learning through expert-led live sessions and on-demand recorded content, tailored for your schedule.",
                                    img: "/images/features/feature_sessions.png"
                                },
                                {
                                    title: "Student Portal",
                                    desc: "Our student portal offers a streamlined learning experience with easy access to video lessons, practice tests, and an integrated coding compiler.",
                                    img: "/images/features/feature_portal.png"
                                },
                                {
                                    title: "Comprehensive Skill Set",
                                    desc: "Develop technical proficiency, problem-solving abilities, and communication skills to become a well-rounded engineer ready for the future.",
                                    img: "/images/features/feature_skills.png"
                                },
                                {
                                    title: "6-Week Virtual Internship",
                                    desc: "Gain hands-on industry experience through a focused internship, applying your skills to real-world projects.",
                                    img: "/images/features/feature_internship.png"
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="space-y-6 group"
                                >
                                    <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-square max-w-[280px] mx-auto border-2 border-white shadow-lg">
                                        <img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="space-y-3 px-2">
                                        <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-purple-600 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Course Structure Section */}
                    <div className="mt-32 p-8 md:p-12 rounded-2xl bg-[#fdfaf5] border border-orange-100">
                        <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-8 border-b border-slate-200 pb-4">
                            COURSE STRUCTURE
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Side Tabs */}
                            <div className="lg:w-1/3 flex flex-col border-r border-slate-200 divide-y divide-slate-100">
                                {phases.map((phase, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActivePhase(idx)}
                                        className={`text-left p-6 font-bold transition-all ${activePhase === idx
                                            ? "bg-purple-100/50 text-purple-700 border-l-4 border-purple-600"
                                            : "text-slate-600 hover:bg-slate-50"
                                            }`}
                                    >
                                        {phase.title}
                                    </button>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="lg:w-2/3 flex flex-col md:flex-row gap-12 bg-white/50 rounded-2xl p-8 md:p-10 border border-white/50">
                                <motion.div
                                    key={activePhase}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex-1 space-y-8"
                                >
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                                            <span className="text-[10px] font-black uppercase tracking-widest">Phase {activePhase + 1}</span>
                                        </div>
                                        <h4 className="text-slate-900 font-black text-2xl leading-tight">{phases[activePhase].subtitle.replace(':', '')}</h4>
                                        <p className="text-slate-500 font-bold text-sm leading-relaxed max-w-lg">
                                            {phases[activePhase].description}
                                        </p>
                                    </div>

                                    <ul className="space-y-5">
                                        {phases[activePhase].items.map((item, idx) => (
                                            <li key={idx} className="flex gap-4 group/item">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-[10px] font-black group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                                                    {idx + 1}
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-slate-900 font-black text-sm leading-tight">{item.label}</p>
                                                    {item.desc && <p className="text-slate-400 font-bold text-xs leading-relaxed">{item.desc}</p>}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Illustration Area */}
                                <div className="hidden md:flex flex-1 items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
                                    <motion.div
                                        key={activePhase}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative z-10 w-full aspect-square"
                                    >
                                        <img
                                            src="/images/illustrations/curriculum.png"
                                            alt="Curriculum Illustration"
                                            className="w-full h-full object-contain filter drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Curriculum Sections */}
                    <div className="mt-32 space-y-12">
                        {/* Phase I */}
                        <div className="rounded-2xl bg-slate-950 p-8 md:p-14 text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <span className="text-purple-400 font-black text-xs uppercase tracking-widest">Phase I</span>
                                    <h2 className="text-4xl font-black tracking-tight mt-2">Programs</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: "Techniques for Improving Programming Logic", type: "Boot Camp", mode: "Live Online", hours: 10, duration: "5 Days", certificate: "Participation", icon: Brain },
                                        { title: "Business Communication", type: "Short Course", mode: "Recorded Online", hours: 8, duration: "Anytime / Anywhere", certificate: "Graded", icon: MessageSquare },
                                        { title: "Java Programming", type: "Boot Camp", mode: "Recorded Online", hours: 24, duration: "2 Sessions/Week - 6 Weeks", certificate: "Graded", icon: Code2 },
                                        { title: "Technical Writing", type: "Short Course", mode: "Recorded Online", hours: 8, duration: "Anytime / Anywhere", certificate: "Graded", icon: PenTool },
                                        { title: "Using Github as a Code Repository", type: "Boot Camp", mode: "Live Online", hours: 6, duration: "3 Days", certificate: "Participation", icon: Github },
                                    ].map((prog, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/[0.08] transition-all group">
                                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                                                <prog.icon className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-black text-lg leading-tight mb-4">{prog.title}</h4>
                                            <div className="space-y-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                                <p><span className="text-white/60">Program Type:</span> {prog.type}</p>
                                                <p><span className="text-white/60">Mode:</span> {prog.mode}</p>
                                                <p><span className="text-white/60">Hours:</span> {prog.hours}</p>
                                                <p><span className="text-white/60">Duration:</span> {prog.duration}</p>
                                                <p><span className="text-white/60">Certificate:</span> {prog.certificate}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Phase II */}
                        <div className="rounded-2xl bg-[#fff5e6] p-8 md:p-14 text-slate-900 overflow-hidden relative">
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <span className="text-orange-500 font-black text-xs uppercase tracking-widest">Phase II</span>
                                    <h2 className="text-2xl font-black tracking-tight mt-2">Programs</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: "DSA through Java", type: "Boot Camp", mode: "Live Online", hours: 10, duration: "5 Days", certificate: "Participation", icon: Database },
                                        { title: "Mathematical Aptitude", type: "Short Course", mode: "Recorded Online", hours: 12, duration: "Anytime / Anywhere", certificate: "Graded", icon: Calculator },
                                        { title: "Logical Reasoning", type: "Short Course", mode: "Recorded Online", hours: 12, duration: "Anytime / Anywhere", certificate: "Graded", icon: Lightbulb },
                                        { title: "React / Bootstrap", type: "Boot Camp", mode: "Live Online", hours: 10, duration: "5 Days", certificate: "Graded", icon: Atom },
                                        { title: "Emerging Technologies", type: "Boot Camp", mode: "Live Online", hours: 6, duration: "3 Days", certificate: "Participation", icon: Cpu },
                                    ].map((prog, i) => (
                                        <div key={i} className="bg-white border border-orange-100 p-6 rounded-3xl hover:shadow-xl hover:shadow-orange-200/20 transition-all group">
                                            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                                                <prog.icon className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-black text-lg leading-tight mb-4">{prog.title}</h4>
                                            <div className="space-y-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                                <p><span className="text-slate-400">Program Type:</span> {prog.type}</p>
                                                <p><span className="text-slate-400">Mode:</span> {prog.mode}</p>
                                                <p><span className="text-slate-400">Hours:</span> {prog.hours}</p>
                                                <p><span className="text-slate-400">Duration:</span> {prog.duration}</p>
                                                <p><span className="text-slate-400">Certificate:</span> {prog.certificate}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Phase III */}
                        <div className="rounded-2xl bg-slate-950 p-8 md:p-14 text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <span className="text-purple-400 font-black text-xs uppercase tracking-widest">Phase III</span>
                                    <h2 className="text-2xl font-black tracking-tight mt-2">Programs</h2>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl">
                                    <h4 className="font-black text-xl mb-4 text-purple-400">Phase III: Hackathon-Style Internship</h4>
                                    <p className="text-slate-400 font-bold leading-relaxed text-sm">
                                        In this final phase of SkillForge, students participate in a 6-week hackathon-style internship. Working in teams, they apply their technical skills in Java and React to develop real-world projects, simulating an industry environment. Guided by mentors, students tackle problem-solving challenges, collaborate on innovative solutions, and present their projects to a panel of experts. This phase emphasizes hands-on experience, teamwork, and the development of both technical and soft skills, preparing students for the demands of the tech industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default MySkillForgePage;
