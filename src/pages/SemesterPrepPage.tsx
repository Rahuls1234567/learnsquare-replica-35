import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, ChevronDown, Play, BookOpen, Bell, Briefcase, Trophy, Facebook, Instagram, Linkedin, Twitter, FileQuestion, Users, GraduationCap } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";
import { UNIVERSITY_DATA } from "@/data/universityData";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

// Matching Navbar
const SemesterPrepNavbar = () => {
    const scrollToForm = () => {
        document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
        toast.info("Please complete the registration form below.");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl py-3 border-b border-slate-100/50">
            <div className="container flex items-center justify-between px-6 lg:px-12">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
                    <img src="/images/semister/new-logo.png" alt="Semester Prep Logo" className="h-10 lg:h-12 w-auto transition-transform hover:scale-105" />
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-[12px] font-black text-slate-800 hover:text-indigo-600 uppercase tracking-widest transition-colors">HOME</Link>
                    <button onClick={scrollToForm} className="text-[12px] font-black text-slate-800 hover:text-indigo-600 uppercase tracking-widest transition-colors">LOGIN</button>
                    <Link to="/contact" className="text-[12px] font-black text-slate-800 hover:text-indigo-600 uppercase tracking-widest transition-colors">CONTACT</Link>
                    <Button
                        onClick={scrollToForm}
                        className="bg-[#6039f3] hover:bg-[#5230d1] text-white rounded-xl flex items-center gap-2 px-5 py-4 font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95"
                    >
                        <Lock className="w-3.5 h-3.5 fill-white/20" />
                        Login / Signup
                    </Button>
                </div>
            </div>
        </nav>
    );
};

const ExtraEdgeFeatureCard = ({ number, title, desc, icon: Icon }: { number: number; title: string; desc: string; icon: React.ComponentType<{ className?: string }> }) => (
    <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: number * 0.08 }}
        className="flex items-start gap-4 group p-2 transition-all duration-300"
    >
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/30 transition-transform">
            <Icon className="w-6 h-6" />
        </div>
        <div className="min-w-0">
            <h4 className="font-bold text-slate-800 text-base mb-1.5">{title}</h4>
            <p className="text-slate-600 text-[13px] leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const WHY_CARD_STYLES: Record<string, { bg: string; iconBg: string; iconColor: string; dot: string }> = {
    indigo: { bg: "bg-indigo-50/50", iconBg: "bg-indigo-50", iconColor: "text-indigo-600", dot: "bg-indigo-400" },
    purple: { bg: "bg-purple-50/50", iconBg: "bg-purple-50", iconColor: "text-purple-600", dot: "bg-purple-400" },
    blue: { bg: "bg-blue-50/50", iconBg: "bg-blue-50", iconColor: "text-blue-600", dot: "bg-blue-400" },
    amber: { bg: "bg-amber-50/50", iconBg: "bg-amber-50", iconColor: "text-amber-600", dot: "bg-amber-400" },
    green: { bg: "bg-emerald-50/50", iconBg: "bg-emerald-50", iconColor: "text-emerald-600", dot: "bg-emerald-400" },
};

const WhyCard = ({ title, items, icon: Icon, color }: { title: string; items: string[]; icon: React.ComponentType<{ className?: string }>; color: keyof typeof WHY_CARD_STYLES }) => {
    const s = WHY_CARD_STYLES[color] || WHY_CARD_STYLES.indigo;
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 relative overflow-hidden group h-full"
        >
            <div className={`absolute top-0 right-0 w-28 h-28 ${s.bg} rounded-full -mr-14 -mt-14 transition-transform duration-300 group-hover:scale-150`} />
            <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-4 relative z-10`}>
                <Icon className={`w-6 h-6 ${s.iconColor}`} />
            </div>
            <h4 className="font-bold text-slate-800 text-lg mb-4 relative z-10">{title}</h4>
            <ul className="space-y-3 relative z-10">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                        <div className={`w-1.5 h-1.5 rounded-full ${s.dot} mt-1.5 flex-shrink-0`} />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const SemesterPrepPage = () => {
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
        return formData.university ? UNIVERSITY_DATA[formData.university] : [];
    }, [formData.university]);

    const [collegeDropdownOpen, setCollegeDropdownOpen] = useState(false);

    const [branchModalOpen, setBranchModalOpen] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState("");
    const [branchFormData, setBranchFormData] = useState({ name: "", email: "", message: "" });

    const openBranchModal = (branchName: string) => {
        setSelectedBranch(branchName);
        setBranchFormData({ name: "", email: "", message: "" });
        setBranchModalOpen(true);
    };

    const handleBranchFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!branchFormData.name || !branchFormData.email || !branchFormData.message) {
            toast.error("Please fill in all fields.");
            return;
        }
        toast.success(`Request to explore ${selectedBranch} submitted. We'll get back to you soon!`);
        setBranchModalOpen(false);
        setBranchFormData({ name: "", email: "", message: "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
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

        toast.success(`Account created successfully for ${formData.name}! Welcome to SemesterPrep.`);
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-[#f8f7ff] relative overflow-x-hidden font-outfit">
            <SemesterPrepNavbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
                    <svg viewBox="0 0 1440 800" className="w-full h-full">
                        <path fill="none" stroke="#4f46e5" strokeWidth="1" strokeDasharray="8 8" d="M-100,200 C200,100 500,300 800,200 C1100,100 1400,300 1700,200" />
                        <path fill="none" stroke="#4f46e5" strokeWidth="0.8" strokeDasharray="5 5" d="M-100,300 C200,200 500,400 800,300 C1100,200 1400,400 1700,300" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
                        <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center text-center space-y-4">
                            <div className="space-y-1">
                                <h1 className="text-[1.6rem] sm:text-[2rem] md:text-3xl lg:text-[2.8rem] xl:text-[3.2rem] font-black leading-tight">
                                    <span className="text-indigo-600">Learn Smart.</span>{" "}
                                    <span className="text-purple-600">Learn Fast.</span>
                                </h1>
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[2.2rem] xl:text-[2.5rem] font-bold text-slate-700">One Stop Solution</h2>
                                <p className="text-sm md:text-base text-slate-500 font-medium whitespace-normal">for Your Semester Exam Preparation.</p>
                            </div>

                            <div className="relative w-full max-w-[360px] lg:max-w-[400px] xl:max-w-[440px]">
                                <img src="/images/semester_prep_hero_v3.png" alt="Illustration" className="w-full h-auto" />
                                <div className="flex justify-center gap-2 mt-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center pt-2">
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

                        <div className="lg:col-span-12 xl:col-span-5 flex justify-center" id="registration-form">
                            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-[0_15px_50px_rgba(30,30,30,0.05)] border border-slate-100/80 w-full max-w-[520px]">
                                <h3 className="text-lg font-bold text-center mb-6">
                                    Register here to explore <span className="italic text-indigo-600 block mt-1 uppercase text-sm">FREE Content</span>
                                </h3>
                                <form className="space-y-2.5" onSubmit={handleSubmit}>
                                    <Input
                                        placeholder="YOUR NAME"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-11 bg-white border-slate-200 rounded text-sm"
                                    />
                                    <div className="relative">
                                        <select
                                            value={formData.university}
                                            onChange={(e) => setFormData({ ...formData, university: e.target.value, college: "" })}
                                            className="w-full h-11 rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-100"
                                        >
                                            <option value="">Select University</option>
                                            {Object.keys(UNIVERSITY_DATA).map(uni => <option key={uni} value={uni}>{uni}</option>)}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                    </div>
                                    <Popover open={collegeDropdownOpen} onOpenChange={setCollegeDropdownOpen}>
                                        <PopoverTrigger asChild>
                                            <button
                                                type="button"
                                                disabled={!formData.university}
                                                className="w-full h-11 rounded border border-slate-200 bg-white px-4 text-sm text-left text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-100 disabled:bg-slate-50 disabled:cursor-not-allowed flex items-center justify-between"
                                            >
                                                <span className={formData.college ? "text-slate-800 truncate" : ""}>
                                                    {formData.college || "Select College"}
                                                </span>
                                                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
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
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-11 border-slate-200 rounded text-sm"
                                    />
                                    <Input
                                        placeholder="ENTER PASSWORD"
                                        type="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="h-11 border-slate-200 rounded text-sm"
                                    />
                                    <Input
                                        placeholder="RE ENTER PASSWORD"
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        className="h-11 border-slate-200 rounded text-sm"
                                    />
                                    <Input
                                        placeholder="Enter Mobile Number"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        className="h-11 border-slate-200 rounded text-sm"
                                    />
                                    <div className="flex items-center gap-2 py-1">
                                        <Checkbox
                                            id="terms"
                                            checked={formData.agree}
                                            onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                                            className="rounded border-slate-300"
                                        />
                                        <label htmlFor="terms" className="text-[11px] font-bold text-slate-600 cursor-pointer">I agree to the Terms and Conditions</label>
                                    </div>
                                    <Button type="submit" className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded shadow-lg transition-all group">
                                        <span className="mr-2">→</span> Create Account
                                    </Button>
                                    <p onClick={() => toast.info("Login feature is currently in development.")} className="text-center text-[12px] font-bold text-slate-500 mt-2 cursor-pointer hover:text-indigo-600 transition-colors">Sign In</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Edge Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-indigo-50/30">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full px-8 py-3.5 text-lg font-bold shadow-xl shadow-indigo-500/25"
                        >
                            Get an Extra Edge with <span className="font-black">SemesterPrep</span>
                        </motion.span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100">
                                <img
                                    src="/images/semester_prep_education_icon.png"
                                    alt="SemesterPrep – study with PYQs, experts and career guidance"
                                    className="w-full max-w-[560px] mx-auto object-contain"
                                    onError={(e) => {
                                        const t = e.target as HTMLImageElement;
                                        t.onerror = null;
                                        t.src = "/images/semester_prep_hero_v3.png";
                                    }}
                                />
                            </div>
                        </motion.div>
                        <div className="space-y-4 order-1 lg:order-2">
                            <ExtraEdgeFeatureCard number={1} title="Univ. Sem Exam PYQ's & Answers" desc="10,000+ Univ. Sem Exam Prev. Year Questions & Answers Covering 120 + Subjects" icon={FileQuestion} />
                            <ExtraEdgeFeatureCard number={2} title="Curated by Subject Experts" desc="Detailed Explanation of Answers from Top-Notch Subject Experts" icon={Users} />
                            <ExtraEdgeFeatureCard number={3} title="Univ. Sem Exam PYQ.Papers" desc="Repository of Subject-wise Univ. Sem Exam Prev. Year Q.Papers" icon={BookOpen} />
                            <ExtraEdgeFeatureCard number={4} title="University Updates" desc="One Stop Destination for all University Exam Updates." icon={Bell} />
                            <ExtraEdgeFeatureCard number={5} title="Career Guidance" desc="Complete Guidance on Various Career Options after Graduation" icon={GraduationCap} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SemesterPrep Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-[#f8f7ff] to-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.h3
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-4"
                    >
                        Why <span className="text-indigo-600">SemesterPrep?</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-14"
                    >
                        One platform for videos, PYQs, updates, and career guidance—built for your semester success.
                    </motion.p>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                        <WhyCard
                            color="indigo" icon={Play}
                            title="Watch anytime"
                            items={["Subject Videos by Expert Faculty", "Classes through Interactive LMS", "Detailed Class Notes of the Video"]}
                        />
                        <WhyCard
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
                            color="blue" icon={Trophy}
                            title="Test & Analyse"
                            items={["Exhaustive Tests for Self-Practice", "Objective Type Ques for Mid Exam Preparation", "Interactive Quizzes"]}
                        />
                        <WhyCard
                            color="amber" icon={Bell}
                            title="University Updates"
                            items={["Timely University Updates", "Semester Exam Syllabus, Timetables", "All Universities Student Notification", "Exam & Academic Calendars"]}
                        />
                        <div className="lg:col-span-1 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative max-w-[280px] mx-auto"
                            >
                                <img
                                    src="/images/semester_prep_education_icon.png"
                                    alt="SemesterPrep – learn together, anywhere"
                                    className="w-full h-auto object-contain"
                                    onError={(e) => {
                                        const t = e.target as HTMLImageElement;
                                        t.onerror = null;
                                        t.src = "/images/semester_prep_hero_v3.png";
                                    }}
                                />
                            </motion.div>
                        </div>
                        <WhyCard
                            color="green" icon={Briefcase}
                            title="Career Opportunities"
                            items={["MNC's Placements Notifications", "PSU Job Notifications", "Higher Education Notifications", "Internships Updates"]}
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gradient-to-b from-[#6e45e2] to-[#88d3ce] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-black mb-16">Reviews By Our Success & Top Students</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Rishab",
                                year: "II Year CSE Student",
                                img: "/images/semister/user1.jpeg",
                                text: "I am such a kind of Student who always do Last Minute Preparation. 😆. This App Really helped me alot where I found all Previous Year Question Papers and Answers. User Interface is Amazing. Most Importantly its Subscription Fee is Pocket Friendly 😂 😂"
                            },
                            {
                                name: "Ashritha",
                                year: "III Year ECE Student",
                                img: "/images/semister/user2.jpeg",
                                text: "SemesterPrep is a New Platform where I Found my PYQs & Answers of my Semester End Examinations. This App Really helped me during my Final Examinations. Guys you have PYQs for all Universities 👍"
                            },
                            {
                                name: "Yashwant",
                                year: "IV Year IT student",
                                img: "/images/semister/user3.jpeg",
                                text: "Thanks for Putting all the PYQs at a Single Place. Its a Good App"
                            }
                        ].map((rev, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-white/20 text-left">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white/30 overflow-hidden shadow-lg">
                                        <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm sm:text-lg">{rev.name}</h4>
                                        <p className="text-white/70 text-[8px] sm:text-[10px] font-black uppercase tracking-widest">{rev.year}</p>
                                    </div>
                                </div>
                                <p className="text-[10px] sm:text-sm leading-relaxed text-white/90 italic line-clamp-4 sm:line-clamp-none">"{rev.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - matches semesterprep.in structure and links */}
            <footer className="relative bg-[#1a365d] text-white pt-0 pb-0">
                {/* Footer curve (wavy top) */}
                <div className="footer-curve relative w-full overflow-hidden" style={{ marginTop: "-1px" }}>
                    <svg className="w-full h-16 md:h-20 fill-[#1a365d]" viewBox="0 0 1440 80" preserveAspectRatio="none">
                        <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" className="opacity-95" />
                        <path d="M0,50 Q360,10 720,50 T1440,50 L1440,80 L0,80 Z" fill="#234876" />
                        <path d="M0,58 Q360,22 720,58 T1440,58 L1440,80 L0,80 Z" fill="#2d5a87" />
                    </svg>
                </div>

                <section className="footer">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
                            {/* About Us - col-lg-6 */}
                            <div className="md:col-span-6">
                                <h4 className="text-white font-black text-xl mb-4">About Us</h4>
                                <p className="text-[13px] leading-relaxed text-white/90 font-bold">
                                    SemesterPrep is a One Stop Solution for all the Students in order to Score a High Percentage/CGPA in the University Semester Exams. We offer Content Curated by Academic Experts which has detailed Explanation of Answers to the University Semester Exam PYQs. We also Provide University Semester Exam PYQ Papers, Objective Type Q&A's and many more. Apart From these, we also Provide Regular Updates on University Exams, Syllabus, Time Tables etc. We also Provide Guidance for Various Career Options in India and Abroad by giving Regular Updates. This Content Can be Accessed through Browser & App.
                                </p>
                            </div>
                            {/* Branches - col-lg-4 */}
                            <div className="md:col-span-4">
                                <h4 className="text-white font-black text-xl mb-4">Branches</h4>
                                <div className="branch text-[12px] text-white/90 leading-relaxed space-y-1">
                                    <button type="button" onClick={() => openBranchModal("EC")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">EC</button>
                                    <span className="text-white/50 mx-1">|</span>
                                    <button type="button" onClick={() => openBranchModal("EE")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">EE</button>
                                    <span className="text-white/50 mx-1">|</span>
                                    <button type="button" onClick={() => openBranchModal("ME")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">ME</button>
                                    <br />
                                    <button type="button" onClick={() => openBranchModal("CE")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">CE</button>
                                    <span className="text-white/50 mx-1">|</span>
                                    <button type="button" onClick={() => openBranchModal("AI")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">AI</button>
                                    <span className="text-white/50 mx-1">|</span>
                                    <button type="button" onClick={() => openBranchModal("IT")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">IT</button>
                                    <br />
                                    <button type="button" onClick={() => openBranchModal("CS")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">CS</button>
                                    <span className="text-white/50 mx-1">|</span>
                                    <button type="button" onClick={() => openBranchModal("DS")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">DS</button>
                                    <span className="text-white/50 mx-1">|</span>
                                    <button type="button" onClick={() => openBranchModal("AI & DS")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">AI & DS</button>
                                    <br />
                                    <button type="button" onClick={() => openBranchModal("Cyber Security")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">Cyber Security</button>
                                    <br />
                                    <button type="button" onClick={() => openBranchModal("IoT And Other Branches")} className="hover:text-white underline underline-offset-2 cursor-pointer bg-transparent border-none p-0">IoT And Other Branches..</button>
                                </div>
                            </div>
                            {/* Email us & Download App - col-lg-2 */}
                            <div className="md:col-span-2">
                                <h4 className="text-white font-black text-xl mb-4">Email us</h4>
                                <p className="mb-4 text-sm text-white/90">
                                    <a href="mailto:info@semesterprep.in" className="text-white/90 hover:text-white transition-colors">info@semesterprep.in</a>
                                </p>
                                <h5 className="text-white font-black text-sm mb-3">Download SEMESTERPREP <br />App Now!!</h5>
                                <div className="flex flex-col gap-2">
                                    <a href="https://play.google.com/store/apps/details?id=com.semesterprep_ap" target="_blank" rel="noopener noreferrer" className="inline-block">
                                        <img src="https://semesterprep.in/frontend/images/get-on-android.png" alt="Get on Google Play" className="h-10 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"; }} />
                                    </a>
                                    <a href="https://apps.apple.com/in/app/semesterprep/id1671087835" target="_blank" rel="noopener noreferrer" className="inline-block">
                                        <img src="https://semesterprep.in/frontend/images/app-store.png" alt="Download on App Store" className="h-10 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"; }} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className="border-white/10 my-8" />

                        {/* Courses, Quick Links, Our Courses - centered */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pb-10">
                            <div>
                                <h5 className="text-white font-black text-sm uppercase tracking-wider mb-3">Courses Available for</h5>
                                <ul className="space-y-2 text-[12px] text-white/90">
                                    <li><a href="https://semesterprep.in/all-courses?course_id=&program_id=&university_id=18&year=&exam_type=" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Anna University Chennai</a></li>
                                    <li><a href="https://semesterprep.in/all-courses?course_id=&program_id=&university_id=17&year=&exam_type=" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">JNTU Anantapur</a></li>
                                    <li><a href="https://semesterprep.in/all-courses?course_id=&program_id=&university_id=16&year=&exam_type=" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">JNTU Kakinada</a></li>
                                    <li><a href="https://semesterprep.in/all-courses?course_id=&program_id=&university_id=15&year=&exam_type=" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">JNTU Hyderabad</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-black text-sm uppercase tracking-wider mb-3">Quick Links</h5>
                                <ul className="space-y-2 text-[12px] text-white/90">
                                    <li><a href="https://semesterprep.in/faq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FAQ</a></li>
                                    <li><a href="https://semesterprep.in/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                                    <li><a href="https://semesterprep.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-black text-sm uppercase tracking-wider mb-3">Our Courses</h5>
                                <ul className="space-y-2 text-[12px] text-white/90">
                                    <li><a href="https://semesterprep.in/all-courses?course_id=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Engineering</a></li>
                                    <li><a href="https://semesterprep.in/all-courses?course_id=2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CRT</a></li>
                                    <li><a href="https://semesterprep.in/all-courses?course_id=5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DSA</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer bottom */}
                <section className="footer-bottom border-t border-white/10 py-6">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-white/70 text-[11px] text-center sm:text-left">
                                © 2026 Copyright <br className="sm:hidden" /> LEARNSQUARE TECHNOLOGIES (OPC) PRIVATE LIMITED
                            </p>
                            <ul className="flex gap-4 justify-center sm:justify-end">
                                <li><a href="https://www.facebook.com/SemesterPrep-100588706273075" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors" title="Facebook" aria-label="Facebook"><Facebook className="w-5 h-5" /></a></li>
                                <li><a href="https://twitter.com/SemesterPrep" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors" title="Twitter" aria-label="Twitter"><Twitter className="w-5 h-5" /></a></li>
                                <li><a href="https://www.instagram.com/semesterprep22/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors" title="Instagram" aria-label="Instagram"><Instagram className="w-5 h-5" /></a></li>
                                <li><a href="https://www.linkedin.com/company/semesterprep/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors" title="LinkedIn" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>

            {/* Branch explore modal */}
            <Dialog open={branchModalOpen} onOpenChange={setBranchModalOpen}>
                <DialogContent className="sm:max-w-md rounded-xl border-slate-200 p-0 overflow-hidden">
                    <div className="p-6">
                        <DialogHeader>
                            <DialogTitle className="text-center text-lg font-bold text-slate-800">
                                The form for exploring this branch needs to be filled out
                            </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleBranchFormSubmit} className="mt-6 space-y-4">
                            <Input
                                placeholder="YOUR NAME"
                                value={branchFormData.name}
                                onChange={(e) => setBranchFormData({ ...branchFormData, name: e.target.value })}
                                className="h-11 border-slate-200 rounded text-sm"
                                required
                            />
                            <Input
                                placeholder="YOUR EMAIL"
                                type="email"
                                value={branchFormData.email}
                                onChange={(e) => setBranchFormData({ ...branchFormData, email: e.target.value })}
                                className="h-11 border-slate-200 rounded text-sm"
                                required
                            />
                            <Textarea
                                placeholder="ENTER MESSAGE"
                                value={branchFormData.message}
                                onChange={(e) => setBranchFormData({ ...branchFormData, message: e.target.value })}
                                className="min-h-[100px] resize-y rounded border-slate-200 text-sm"
                                required
                            />
                            <Button
                                type="submit"
                                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg"
                            >
                                Submit Request to Explore it
                            </Button>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>

            <WhatsAppButton />
        </div>
    );
};

export default SemesterPrepPage;
