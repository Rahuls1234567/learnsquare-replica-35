"use client";

import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import AntigravityBackground from "@/src/components/AntigravityBackground";
import { motion } from "framer-motion";
import { Sparkles, Monitor, BadgeCheck, Linkedin, X } from "lucide-react";
import { EditableContent } from "@/src/components/EditableContent";
import { EditableImage } from "@/src/components/EditableImage";
import TeamCardsSection from "@/src/components/TeamCardsSection";

const About = () => {
    const team = [
        {
            name: "Sandeep Bandari",
            role: "Founder & CEO",
            education: "EPBM - IIM K, M.TECH - JNTUH, B.TECH - JNTUH",
            contact: "988 555 2350 | sandeep@learnsquare.co",
            bio: "With over 18 years in the Ed-Tech industry, he is a passionate leader known for creating innovative learning solutions and building strategic partnerships with universities, government bodies, and channel partners nationwide. He has successfully launched and managed multiple Ed-Tech Products, LMS and CMS platforms, and led top educators across domains. A mentor to thousands of students through GATE, ESE, and competitive exam sessions, his expertise spans market research, product planning, implementation, budgeting, resource management, and team performance.",
            image: "/images/homeimage/sandeep bandari.jpg",
        },
        {
            name: "Alekya Avula",
            role: "Co-Founder & Director",
            education: "IPBA - IIM INDORE, M.TECH - JNTUH, B.TECH - JNTUH",
            contact: "",
            bio: "She is passionate about driving impactful product development through innovation and collaboration. With a strong foundation in business analytics and operational excellence, she leverages data-driven insights to optimize performance and achieve strategic goals. Known for leading cross-functional teams, she consistently delivers innovative solutions that exceed expectations.",
            image: "/alekya mam.jpeg",
        },
        {
            name: "Gopinath Puralachetty",
            role: "Chief Marketing Officer",
            education: "IRPM - Andhra University, M.Sc IT - Manipal University",
            contact: "77 9493 1347 | gopinath.p@learnsquare.co",
            bio: "He is a seasoned business leader with over 20 years of experience in education, business operations, and strategic planning. Holding a Master of Science in IT from Manipal University and a Degree in Industrial Relations from Andhra University, he has led key roles at T.I.M.E., CONDUIRA, FIITJEE, and APTECH. Known for his visionary leadership, strategic partnerships, and strong business acumen, he has consistently driven growth and delivered exceptional results across diverse markets.",
            image: "/sir.jpeg",
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

            <main className="relative pt-32 pb-8">
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

                <div className="container relative z-10 px-4 md:px-6">
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
                            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.2] mb-10 max-w-5xl mx-auto px-4"
                        >
                            <EditableContent 
                                contentKey="about_main_heading"
                                description="About Page Heading"
                                defaultContent={
                                    <>
                                        To Revolutionise the Educational Landscape by Providing{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-600 to-accent">
                                            AI Powered Tech Solutions
                                        </span>{" "}
                                        to Every Educational Institution.
                                    </>
                                }
                            />
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex justify-center w-full"
                        >
                            <EditableContent 
                                contentKey="about_intro"
                                description="About Page Intro Text"
                                className="text-[13px] md:text-[15px] text-[#5e6282] font-semibold leading-relaxed max-w-4xl text-justify px-4"
                                defaultContent={
                                    <p>
                                        In light of the National Education Policy's Emphasis on Modernising Educational Systems, the Demand for Streamlined Campus Automation Solutions is at an All-Time High. Our Campus Automation Solution addresses this need by offering Educational Institutions a Simple yet Powerful Platform to Manage Academics, Operations, Communication, and Data Effectively.
                                    </p>
                                }
                            />
                        </motion.div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
                    </div>
                </div>

                {/* Team Leadership Profiles */}
                <div className="mt-20 relative px-4 md:px-6 container mx-auto flex flex-col gap-24">
                    {team.map((t, idx) => (
                        <div key={idx} className="relative z-10 group mt-12">
                            {/* Decorative Background for Section */}
                            <div className="absolute top-0 right-0 w-[80%] md:w-[60%] lg:w-[45%] h-full bg-[#333d4d]/5 rounded-3xl -z-10 group-hover:bg-[#333d4d]/10 transition-colors duration-500" />
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16 relative">
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="lg:col-span-7 bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl z-20 border border-white/50 relative overflow-hidden"
                                >
                                    {/* Accent Line */}
                                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent" />
                                    
                                    <EditableContent 
                                        contentKey={`about_team_${idx}_header`}
                                        description={`Team Member ${idx + 1} Header`}
                                        defaultContent={
                                            <>
                                                <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] leading-tight mb-2">
                                                    {t.name}
                                                </h2>
                                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 tracking-tight">
                                                    {t.role}
                                                </h3>
                                            </>
                                        }
                                    />
                                    
                                    <EditableContent 
                                        contentKey={`about_team_${idx}_meta`}
                                        description={`Team Member ${idx + 1} Meta Info`}
                                        defaultContent={
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                <span className="bg-[#f1f5f9] text-[#475569] font-bold text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-200 uppercase tracking-wider">
                                                    {t.education}
                                                </span>
                                                {t.contact && (
                                                    <span className="bg-primary/5 text-primary font-bold text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-primary/10 tracking-widest">
                                                        {t.contact}
                                                    </span>
                                                )}
                                            </div>
                                        }
                                    />
                                    
                                    <EditableContent 
                                        contentKey={`about_team_${idx}_bio`}
                                        description={`Team Member ${idx + 1} Bio`}
                                        defaultContent={<p className="text-[#475569] text-[15px] md:text-[16px] leading-[1.8] font-medium text-justify">{t.bio}</p>}
                                    />
                                </motion.div>

                                {/* Image Side (Right Side) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="lg:col-span-5 flex justify-center z-10"
                                >
                                    <div className="bg-white p-3 md:p-6 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 border-4 border-white">
                                        <div className="w-full aspect-square md:aspect-[4/5] relative rounded-2xl md:rounded-[2rem] overflow-hidden">
                                            <EditableImage
                                                contentKey={`about_team_${idx}_photo`}
                                                defaultImage={t.image}
                                                alt={t.name}
                                                className="w-full h-full object-cover object-[center_top] filter contrast-125 transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/50 via-transparent to-transparent pointer-events-none pointer-events-none" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic Team Cards added by Admin */}
                <TeamCardsSection />
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default About;
