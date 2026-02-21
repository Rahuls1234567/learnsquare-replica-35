import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AntigravityBackground from "@/components/AntigravityBackground";
import { motion } from "framer-motion";
import { Sparkles, Monitor, BadgeCheck, Linkedin, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const About = () => {
    const team = [
        {
            name: "Sandeep Bandari",
            role: "Founder & Chief Executive Officer",
            shortBio: "With over 17 years of Experience in the Ed-Tech Industry",
            image: "/images/homeimage/sandeep bandari.jpg",
            linkedin: "https://www.linkedin.com/in/sandeep-bandari-19b50170/",
            education: "EPBM - IIM KOZHIKODE, M.TECH - JNTUH, B.TECH - JNTUH",
            fullBio: [
                "With over 17 years of Experience in the Ed-Tech Industry, Sandeep Bandari is a Passionate and Driven Leader who strives to create impactful and Innovative Management Solutions for Educational Institutions and Learning Solutions for Students. He worked as a Country Head for Multiple Renowned Ed-Techs in India and also built Strategic Partnerships with Universities, Colleges, Government Departments, and Channel Partners across the Country. Designing Customised Products that cater to the Market Needs and Demand is his Expertise.",
                "He has Successfully Launched and Managed multiple Ed-Tech Products, including robust ERP, LMS and CMS Platforms, and also Managed Top-Tier Educators for Various Categories and Domains. He had also mentored Thousands of Students and Delivered interactive Classes & Seminars on GATE, ESE, UPSC and other Competitive Exams. His Expertise Lies in Market Research, Planning, Implementation, and Execution of End-to-End e-Learning Products."
            ]
        },
        {
            name: "Alekya Avula",
            role: "Co-Founder & Director",
            shortBio: "Alekya is Passionate about Driving impactful product development initiatives.",
            image: "/images/homeimage/alekya-avula.png",
            linkedin: "#",
            education: "Professional in Product Development & Operations",
            fullBio: [
                "Alekya Avula serves as the Co-Founder & Director, bringing a wealth of passion and expertise in driving impactful product development initiatives. Her focus remains on creating seamless operational flows and ensuring that every educational tool developed is both user-centric and highly effective.",
                "She plays a pivotal role in the strategic planning and execution of our core tech solutions, ensuring they align with the modern educational landscape and provide tangible value to both institutions and students alike."
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-background relative overflow-x-hidden"
        >
            <AntigravityBackground />
            <Navbar />

            <main className="relative pt-20 pb-8">
                {/* Background Decorative Waves */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                    <svg className="absolute w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 400C200 300 400 600 720 400C1040 200 1240 500 1540 400" stroke="url(#gradient-1)" strokeWidth="2" strokeDasharray="10 10" />
                        <path d="M-100 500C200 400 400 700 720 500C1040 300 1240 600 1540 500" stroke="url(#gradient-2)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="gradient-1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4F46E5" />
                                <stop offset="1" stopColor="#9333EA" />
                            </linearGradient>
                            <linearGradient id="gradient-2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9333EA" />
                                <stop offset="1" stopColor="#C026D3" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-8 py-3 rounded-full bg-primary/80 backdrop-blur-md text-white font-bold text-lg shadow-xl shadow-primary/20 mb-12"
                        >
                            About Us
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.2] mb-10 max-w-5xl mx-auto"
                        >
                            To Revolutionise the Educational Landscape by Providing{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-accent">
                                AI Powered Tech Solutions
                            </span>{" "}
                            to Every Educational Institution.
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center w-full"
                        >
                            <p className="text-[13px] md:text-[15px] text-[#5e6282] font-semibold leading-relaxed max-w-4xl text-center px-4">
                                In light of the National Education Policy's Emphasis on Modernising Educational Systems, the Demand for Streamlined Campus Automation Solutions is at an All-Time High. Our Campus Automation Solution addresses this need by offering Educational Institutions a Simple yet Powerful Platform to Manage Academics, Operations, Communication, and Data Effectively.
                            </p>
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
                    </div>
                </div>

                <div className="mt-32 relative">
                    <div className="absolute top-0 right-0 w-[70%] h-full bg-[#333d4d] -z-10 rounded-l-[4rem]" />

                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-0">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-5 bg-[#5e6c84] p-10 md:p-16 rounded-2xl shadow-2xl z-20"
                            >
                                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-8">
                                    To provide quality content to every student inorder to enhance their Learning outcomes
                                </h2>
                                <ul className="space-y-6 text-slate-100 text-[14px] md:text-[15px] leading-relaxed list-disc pl-5">
                                    <li className="pl-2">
                                        Empowering Students for Success through Comprehensive Semester Exam Preparation fostering a culture of Academic Excellence and Personal Growth through <span className="font-bold underline">SemesterPrep</span>
                                    </li>
                                    <li className="pl-2">
                                        Our vision is also to serve as the catalyst for holistic student development by offering a diverse range of High-Quality Training Programs within the College Environment. We aim to empower students with the knowledge, skills, and competencies needed to excel academically, professionally, and personally
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:col-span-7 flex justify-center p-12 lg:-ml-12"
                            >
                                <div className="bg-white p-6 rounded-[3rem] shadow-2xl relative overflow-hidden group border-8 border-white">
                                    <div className="w-full h-full min-h-[350px] lg:min-h-[480px] relative rounded-[2rem] overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                                            alt="Students Learning AI"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 pointer-events-none" />

                                        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between pointer-events-none">
                                            <div className="flex justify-between items-start">
                                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-rose-500/20">
                                                    <Sparkles className="w-8 h-8" />
                                                </motion.div>
                                                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-12 h-12 bg-sky-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-400/20">
                                                    <Monitor className="w-6 h-6" />
                                                </motion.div>
                                            </div>
                                            <div className="flex justify-center -mb-4">
                                                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-20 h-20 bg-primary/95 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white/20">
                                                    <span className="font-black text-xl">AI</span>
                                                </motion.div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center text-white shadow-md shadow-amber-400/20">
                                                    <div className="w-4 h-4 bg-white rounded-full" />
                                                </motion.div>
                                                <motion.div animate={{ scale: [0.9, 1, 0.9] }} transition={{ duration: 3.5, repeat: Infinity }} className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                                                    <BadgeCheck className="w-10 h-10" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pb-0">
                    <div className="bg-[#f3f0ff] py-12 rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="container relative z-10 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black text-[#4338ca] mb-10 tracking-tight"
                            >
                                Our Team
                            </motion.h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {team.map((m, idx) => (
                                    <Dialog key={idx}>
                                        <DialogTrigger asChild>
                                            <motion.div
                                                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center gap-8 relative group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer"
                                            >
                                                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                                                </div>

                                                <div className="w-32 h-32 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-4 border-slate-50 shadow-lg group-hover:border-primary/20 transition-colors">
                                                    <img
                                                        src={m.image}
                                                        alt={m.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>

                                                <div className="text-center md:text-left space-y-2">
                                                    <h3 className="text-2xl font-bold text-slate-800">{m.name}</h3>
                                                    <p className="text-[#6366f1] text-[15px] font-bold">{m.role}</p>
                                                    <p className="text-slate-600 font-medium text-[14px] leading-relaxed">
                                                        {m.shortBio}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </DialogTrigger>

                                        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl border-none shadow-2xl">
                                            <div className="flex flex-col md:flex-row min-h-[500px]">
                                                {/* Left Panel: Image */}
                                                <div className="md:w-2/5 relative bg-[#f1f5f9]">
                                                    <img
                                                        src={m.image}
                                                        alt={m.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                                                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                                                        <h4 className="text-xl font-bold">{m.name}</h4>
                                                    </div>
                                                </div>

                                                {/* Right Panel: Content */}
                                                <div className="md:w-3/5 p-8 md:p-12 bg-white relative">
                                                    <div className="space-y-6">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h4 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                                                                    {m.name}
                                                                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:scale-110 transition-transform">
                                                                        <Linkedin className="w-8 h-8 fill-current" />
                                                                    </a>
                                                                </h4>
                                                                <p className="text-[#6366f1] text-lg font-bold mt-1">{m.role}</p>
                                                            </div>
                                                        </div>

                                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                            <p className="text-[#818cf8] font-bold text-xs uppercase tracking-widest mb-1">Education</p>
                                                            <p className="text-slate-700 font-bold text-sm tracking-tight">{m.education}</p>
                                                        </div>

                                                        <div className="space-y-6 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200">
                                                            {m.fullBio.map((p, i) => (
                                                                <p key={i} className="text-slate-600 font-medium leading-[1.7] text-[15px]">
                                                                    {p}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ))}
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

export default About;
