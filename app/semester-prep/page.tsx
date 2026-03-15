"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { ChevronDown, Play, BookOpen, Bell, Briefcase, Trophy, Facebook, Instagram, Linkedin, Twitter, FileQuestion, Users, GraduationCap, Rocket, ChevronRight } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/src/components/Footer";
import AntigravityBackground from "@/components/AntigravityBackground";
import { toast } from "sonner";
import { EditableContent } from "@/src/components/EditableContent";
import { UNIVERSITY_DATA } from "@/src/data/universityData";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/src/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/src/components/ui/command";


const ExtraEdgeFeatureCard = ({ number, title, desc, icon: Icon, contentKey }: { number: number; title: string; desc: string; icon: React.ComponentType<{ className?: string }>; contentKey: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: number * 0.1, ease: "easeOut" }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative group p-8 rounded-[2.5rem] bg-[#1e40af] shadow-[0_20px_50px_-12px_rgba(30,64,175,0.4)] hover:shadow-[0_40px_80px_-15px_rgba(30,64,175,0.5)] transition-all duration-500 overflow-hidden"
    >
        {/* Subtle white glow accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
        
        <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 shadow-inner backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-[#1e40af] group-hover:scale-110">
                <Icon className="w-7 h-7" />
            </div>
            
            <div className="space-y-3">
                <EditableContent 
                    contentKey={`${contentKey}_content`}
                    description={`Extra Edge Feature ${number}`}
                    defaultContent={
                        <>
                            <h4 className="font-black text-white text-lg tracking-tight leading-tight uppercase drop-shadow-sm">{title}</h4>
                            <p className="text-blue-100/90 text-[13px] leading-relaxed font-bold">{desc}</p>
                        </>
                    }
                />
            </div>
        </div>

        {/* Bottom shine effect */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
);

const WHY_CARD_STYLES: Record<string, { bg: string; iconBg: string; iconColor: string; dot: string }> = {
    indigo: { bg: "bg-indigo-50/50", iconBg: "bg-indigo-50", iconColor: "text-indigo-600", dot: "bg-indigo-400" },
    purple: { bg: "bg-purple-50/50", iconBg: "bg-purple-50", iconColor: "text-purple-600", dot: "bg-purple-400" },
    blue: { bg: "bg-blue-50/50", iconBg: "bg-blue-50", iconColor: "text-blue-600", dot: "bg-blue-400" },
    amber: { bg: "bg-amber-50/50", iconBg: "bg-amber-50", iconColor: "text-amber-600", dot: "bg-amber-400" },
    green: { bg: "bg-emerald-50/50", iconBg: "bg-emerald-50", iconColor: "text-emerald-600", dot: "bg-emerald-400" },
};

const WhyCard = ({ title, items, icon: Icon, color, contentKey }: { title: string; items: string[]; icon: React.ComponentType<{ className?: string }>; color: keyof typeof WHY_CARD_STYLES; contentKey: string }) => {
    const s = WHY_CARD_STYLES[color] || WHY_CARD_STYLES.indigo;
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative h-full bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
        >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${s.bg} rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150 opacity-40`} />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.iconColor} flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:scale-110`}>
                    <Icon className="w-7 h-7" />
                </div>
                
                <EditableContent 
                    contentKey={`${contentKey}_heading`}
                    description={`Why Card Heading - ${title}`}
                    defaultContent={<h4 className="font-black text-slate-900 text-xl mb-6 tracking-tight leading-tight uppercase transition-colors group-hover:text-slate-800">{title}</h4>}
                />
                
                <ul className="space-y-4 flex-grow">
                    {items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-[14px] text-slate-500 font-bold leading-relaxed group-hover:text-slate-600 transition-colors">
                            <div className={`w-2 h-2 rounded-full ${s.dot} mt-1.5 flex-shrink-0 animate-pulse`} />
                            <EditableContent 
                                contentKey={`${contentKey}_item_${i}`}
                                description={`Why Card Item ${i + 1} - ${title}`}
                                defaultContent={<span>{item}</span>}
                            />
                        </li>
                    ))}
                </ul>

                {/* Bottom line accent */}
                <div className={`absolute bottom-0 left-10 right-10 h-[2px] ${s.bg} bg-opacity-30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
        </motion.div>
    );
};

const SemesterPrepPage = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loadingReviews, setLoadingReviews] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("/api/reviews?page=semester-prep");
                if (res.ok) {
                    const data = await res.json();
                    if (data.length > 0) {
                        setReviews(data);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            } finally {
                setLoadingReviews(false);
            }
        };
        fetchReviews();
    }, []);
    const [formData, setFormData] = useState({
        name: "",
        university: "",
        college: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        agree: false
    });

    const colleges = useMemo(() => {
        return formData.university ? UNIVERSITY_DATA[formData.university as keyof typeof UNIVERSITY_DATA] : [];
    }, [formData.university]);

    const [collegeDropdownOpen, setCollegeDropdownOpen] = useState(false);


    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.university || !formData.college || !formData.email || !formData.password || !formData.mobile) {
            toast.error("Please fill in all required fields.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        if (!formData.agree) {
            toast.error("Please agree to the Terms and Conditions.");
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch("/api/semester-prep", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success(`Account created successfully for ${formData.name}! Welcome to SemesterPrep.`);
                setFormData({
                    name: "",
                    university: "",
                    college: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    mobile: "",
                    agree: false
                });
            } else {
                const data = await res.json();
                toast.error(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to connect to the server.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-white relative overflow-x-hidden"
        >

            {/* Cinematic Background Blurs */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[150px]" />
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden bg-[#080118] text-white noise-overlay">
                <AntigravityBackground />
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
                    <svg viewBox="0 0 1440 800" className="w-full h-full">
                        <path fill="none" stroke="#4f46e5" strokeWidth="1" strokeDasharray="8 8" d="M-100,200 C200,100 500,300 800,200 C1100,100 1400,300 1700,200" />
                        <path fill="none" stroke="#4f46e5" strokeWidth="0.8" strokeDasharray="5 5" d="M-100,300 C200,200 500,400 800,300 C1100,200 1400,400 1700,300" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
                        <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center text-center space-y-6">
                            <div className="space-y-3">
                                {/* Shimmering Top Pill */}
                                <div className="relative group cursor-default inline-block mb-8">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                                    <div className="relative bg-slate-900/80 border border-indigo-500/30 text-indigo-400 px-6 py-2 rounded-full font-black tracking-[0.2em] text-[10px] uppercase shadow-2xl flex items-center gap-2 overflow-hidden">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                        <span className="relative z-10">Semester Exam Pro</span>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 hidden"
                                >
                                    The Ultimate Exam Companion
                                </motion.div>
                                <EditableContent 
                                    contentKey="semesterprep_hero_content"
                                    description="SemesterPrep Hero"
                                    defaultContent={
                                        <>
                                            <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black leading-[1.05] tracking-tight">
                                                <span className="text-white drop-shadow-2xl">Learn Smart.</span><br />
                                                <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">Learn Fast.</span>
                                            </h1>
                                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 mt-4">One Stop Solution</h2>
                                            <p className="text-base md:text-lg text-slate-400 font-medium max-w-xl mx-auto">Your comprehensive platform for Semester Exam Preparation. Access the best resources, anytime, anywhere.</p>
                                        </>
                                    }
                                />
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center pt-8">
                                <img
                                    onClick={() => toast.info("SemesterPrep Mobile App for Android coming soon!")}
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Google Play"
                                    className="h-[2.8rem] xl:h-[3.2rem] hover:scale-105 transition-transform cursor-pointer"
                                />
                                <img
                                    onClick={() => toast.info("SemesterPrep Mobile App for iOS coming soon!")}
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="App Store"
                                    className="h-[2.8rem] xl:h-[3.2rem] hover:scale-105 transition-transform cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-5 flex justify-center mt-12 xl:mt-0" id="registration-form">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 w-full max-w-[520px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-colors" />
                                <h3 className="text-xl font-bold text-center mb-8 text-white relative z-10">
                                    Register here to explore <span className="italic bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent block mt-2 uppercase text-base tracking-widest font-black">FREE Content</span>
                                </h3>
                                <form className="space-y-4 relative z-10" onSubmit={handleSubmit} autoComplete="off">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="space-y-4">
                                            <Input
                                                placeholder="YOUR NAME"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/50 text-white placeholder:text-slate-500 transition-all font-bold"
                                            />
                                            <div className="relative">
                                                <select
                                                    value={formData.university}
                                                    onChange={(e) => setFormData({ ...formData, university: e.target.value, college: "" })}
                                                    className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-slate-400 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-bold"
                                                >
                                                    <option value="" className="bg-slate-900">Select University</option>
                                                    {Object.keys(UNIVERSITY_DATA).map(uni => <option key={uni} value={uni} className="bg-slate-900">{uni}</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                                            </div>
                                            <Popover open={collegeDropdownOpen} onOpenChange={setCollegeDropdownOpen}>
                                                <PopoverTrigger asChild>
                                                    <button
                                                        type="button"
                                                        disabled={!formData.university}
                                                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-left text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 transition-all flex items-center justify-between font-bold"
                                                    >
                                                        <span className={formData.college ? "text-white truncate" : ""}>
                                                            {formData.college || "Select College"}
                                                        </span>
                                                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                                                    </button>
                                                </PopoverTrigger>
                                        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                                            <Command>
                                                <CommandInput placeholder="Search college..." className="h-10 text-sm" />
                                                <CommandList>
                                                    <CommandEmpty>No college found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {colleges.map((college) => (
                                                            <CommandItem
                                                                key={college}
                                                                value={college}
                                                                onSelect={() => {
                                                                    setFormData({ ...formData, college });
                                                                    setCollegeDropdownOpen(false);
                                                                }}
                                                                className="text-sm cursor-pointer"
                                                            >
                                                                {college}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                            <Input
                                                placeholder="YOUR EMAIL"
                                                type="email"
                                                autoComplete="off"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl text-sm text-white placeholder:text-slate-500 transition-all font-bold"
                                            />
                                            <div className="grid grid-cols-2 gap-4">
                                                <Input
                                                    placeholder="PASSWORD"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    value={formData.password}
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                    className="h-14 bg-white/5 border-white/10 rounded-2xl text-sm text-white placeholder:text-slate-500 transition-all font-bold"
                                                />
                                                <Input
                                                    placeholder="RE-ENTER"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    value={formData.confirmPassword}
                                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                    className="h-14 bg-white/5 border-white/10 rounded-2xl text-sm text-white placeholder:text-slate-500 transition-all font-bold"
                                                />
                                            </div>
                                            <Input
                                                placeholder="MOBILE NUMBER"
                                                value={formData.mobile}
                                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl text-sm text-white placeholder:text-slate-500 transition-all font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.agree}
                                            onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                                            className="rounded-md border-white/20 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                                        />
                                        <label htmlFor="terms" className="text-xs font-bold text-slate-400 cursor-pointer select-none">I agree to the Terms and Conditions</label>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={submitting}
                                        className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/25 transition-all active:scale-95 disabled:opacity-50 text-sm uppercase tracking-widest mt-4"
                                    >
                                        {submitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Creating...
                                            </span>
                                        ) : "Create Free Account"}
                                    </Button>
                                    <p onClick={() => toast.info("Login feature is currently in development.")} className="text-center text-[13px] font-bold text-slate-500 mt-6 cursor-pointer hover:text-indigo-400 transition-colors uppercase tracking-widest">Already have an account? <span className="text-indigo-400">Sign In</span></p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Edge Section */}
            <section id="extra-edge" className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-70" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-70" />
                </div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="relative text-center mb-24">
                            <EditableContent 
                                contentKey="semprep_excellence_heading"
                                description="Semester Prep Excellence Heading"
                                defaultContent={
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="inline-block relative"
                                    >
                                        <div className="absolute -inset-8 bg-indigo-100/40 blur-3xl rounded-full opacity-60" />
                                        <motion.span
                                            className="relative inline-block bg-white text-slate-900 rounded-full px-12 py-5 text-2xl font-black shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-100 uppercase tracking-widest"
                                        >
                                            Extra Edge <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
                                        </motion.span>
                                    </motion.div>
                                }
                            />
                        <p className="mt-8 text-slate-500 text-lg max-w-2xl mx-auto font-bold tracking-tight">
                            Elevate your preparation with our <span className="text-indigo-600">Premium Toolset</span> designed for university success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ExtraEdgeFeatureCard contentKey="semprep_edge_1" number={1} title="Univ. Sem Exam PYQ's & Answers" desc="10,000+ Univ. Sem Exam Prev. Year Questions & Answers Covering 120 + Subjects" icon={FileQuestion} />
                        <ExtraEdgeFeatureCard contentKey="semprep_edge_2" number={2} title="Curated by Subject Experts" desc="Detailed Explanation of Answers from Top-Notch Subject Experts" icon={Users} />
                        <ExtraEdgeFeatureCard contentKey="semprep_edge_3" number={3} title="Univ. Sem Exam PYQ.Papers" desc="Repository of Subject-wise Univ. Sem Exam Prev. Year Q.Papers" icon={BookOpen} />
                        <ExtraEdgeFeatureCard contentKey="semprep_edge_4" number={4} title="University Updates" desc="One Stop Destination for all University Exam Updates." icon={Bell} />
                        <ExtraEdgeFeatureCard contentKey="semprep_edge_5" number={5} title="Career Guidance" desc="Complete Guidance on Various Career Options after Graduation" icon={GraduationCap} />
                        
                    </div>
                </div>
            </section>

            {/* Why SemesterPrep Section */}
            <section className="py-32 relative overflow-hidden bg-white border-t border-slate-100">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                    <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-50 rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-24">
                        <EditableContent 
                            contentKey="semesterprep_why_header"
                            description="Why SemesterPrep Section"
                            defaultContent={
                                <>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8"
                                    >
                                        Why <span className="inline-block pr-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic">SemesterPrep?</span>
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-bold tracking-tight leading-relaxed"
                                    >
                                        The most trusted platform for university students. One destination for videos, PYQs, and everything you need to top your exams.
                                    </motion.p>
                                </>
                            }
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                        <WhyCard
                            contentKey="semprep_why_1"
                            color="indigo" icon={Play}
                            title="Watch anytime"
                            items={["Subject Videos by Expert Faculty", "Classes through Interactive LMS", "Detailed Class Notes of the Video"]}
                        />
                        <WhyCard
                            contentKey="semprep_why_2"
                            color="purple" icon={BookOpen}
                            title="Learn from anywhere"
                            items={[
                                "Subject-Wise, Chapter-Wise Question & Answers for Previous Year Univ. Sem Exam Q.Papers",
                                "Short & Long Questions and Answers as per Univ Exam paper Pattern with Detailed Explanation",
                                "Repository of Subject-wise Univ. Sem Exam Prev. Year Q.Papers",
                                "Learn from Mobile/Laptop/Desktop and Switch between them Instantly",
                                "Track your Progress through Interactive LMS"
                            ]}
                        />
                        <WhyCard
                            contentKey="semprep_why_3"
                            color="blue" icon={Trophy}
                            title="Test & Analyse"
                            items={["Exhaustive Tests for Self-Practice", "Objective Type Ques for Mid Exam Preparation", "Interactive Quizzes"]}
                        />
                        <WhyCard
                            contentKey="semprep_why_4"
                            color="amber" icon={Bell}
                            title="University Updates"
                            items={["Timely University Updates", "Semester Exam Syllabus, Timetables", "All Universities Student Notification", "Exam & Academic Calendars"]}
                        />
                        <div className="lg:col-span-1" />
                        <WhyCard
                            contentKey="semprep_why_5"
                            color="green" icon={Briefcase}
                            title="Career Opportunities"
                            items={["MNC's Placements Notifications", "PSU Job Notifications", "Higher Education Notifications", "Internships Updates"]}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 relative overflow-hidden text-white bg-slate-950">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-24">
                            <EditableContent 
                                contentKey="semprep_reviews_heading"
                                description="Semester Prep Reviews Heading"
                                defaultContent={
                                    <div className="space-y-4">
                                        <span className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em]">Wall of Love</span>
                                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter">
                                            Reviews By Our <span className="inline-block pr-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent italic">Top Students</span>
                                        </h3>
                                    </div>
                                }
                            />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                        {(reviews.length > 0 ? reviews : [
                            {
                                name: "Rishab",
                                role: "II Year CSE Student",
                                image: "/images/semister/user1.jpeg",
                                text: "I am such a kind of Student who always do Last Minute Preparation. 😆. This App Really helped me alot where I found all Previous Year Question Papers and Answers. User Interface is Amazing. Most Importantly its Subscription Fee is Pocket Friendly 😂 😂"
                            },
                            {
                                name: "Ashritha",
                                role: "III Year ECE Student",
                                image: "/images/semister/user2.jpeg",
                                text: "SemesterPrep is a New Platform where I Found my PYQs & Answers of my Semester End Examinations. This App Really helped me during my Final Examinations. Guys you have PYQs for all Universities 👍"
                            },
                            {
                                name: "Yashwant",
                                role: "IV Year IT student",
                                image: "/images/semister/user3.jpeg",
                                text: "Thanks for Putting all the PYQs at a Single Place. Its a Good App"
                            }
                        ]).map((rev, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="relative h-full bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 flex flex-col transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20">
                                    {/* Quote Icon */}
                                    <div className="absolute top-8 right-10 text-white/5 group-hover:text-white/10 transition-colors">
                                        <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                                            <path d="M0 18.2V0C5.3 1.1 9.4 4.5 9.4 10.3C9.4 12.8 8.6 14.8 7.1 16.3C5.6 17.8 3.6 18.6 1.1 18.6H0ZM19 18.2V0C24.3 1.1 28.4 4.5 28.4 10.3C28.4 12.8 27.6 14.8 26.1 16.3C24.6 17.8 22.6 18.6 20.1 18.6H19V18.2Z" transform="translate(5 5)" />
                                        </svg>
                                    </div>

                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur opacity-40" />
                                            <div className="relative w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden ring-4 ring-black/20">
                                                <img src={rev.image || rev.img || "/images/user.png"} alt={rev.name} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-lg text-white tracking-tight">{rev.name}</h4>
                                            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">{rev.role || rev.year}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="relative">
                                        <p className="text-white/80 text-[15px] leading-relaxed font-medium italic relative z-10">
                                            "{rev.text}"
                                        </p>
                                    </div>

                                    {/* Subtle decorative line */}
                                    <div className="mt-8 pt-8 border-t border-white/5 w-12 h-px" />
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

export default SemesterPrepPage;
