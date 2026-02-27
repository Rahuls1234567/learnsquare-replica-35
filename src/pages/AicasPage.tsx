import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Brain, BookOpen, Award, Shield,
    LayoutDashboard, CreditCard, FileText, Video,
    Code, Briefcase, MonitorPlay, Users,
    ClipboardList, Bell, Check
} from 'lucide-react';

const AndroidAppleIcon = ({ size = 24 }: { size?: number }) => (
    <div className="flex items-center gap-1.5" style={{ width: size * 2.2, height: size }}>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.244 13.8533 7.8512 12 7.8512s-3.5902.3928-5.1367 1.0988L4.841 5.447a.416.416 0 0 0-.5676-.1521.416.416 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.44z" />
        </svg>
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
            <path d="M16.365 20.473c-1.332 1.349-2.766 1.4-4.321.472-1.46-.867-2.822-.867-4.28 0-1.636 1.01-2.909.886-4.24-.49C1.192 16.59-1.22 9.073 2.502 4.414c1.64-2.054 3.791-2.614 5.378-2.614 1.708 0 3.3.945 4.35 1.455.975-.41 2.545-1.574 4.544-1.574 2.825 0 4.881 1.6 5.86 3.65-5.286 2.503-4.3 8.356.9 10.428-1.127 2.222-2.182 3.821-3.17 4.714m-3.86-17.74c1.554-1.95 2.155-4.47.16-5.83-2.138-1.554-4.8 1.144-4.8 1.144-1.342 1.6-1.536 3.96.2 5.093 1.042.61 2.378.136 3.32-.423" />
        </svg>
    </div>
);

// High-Fidelity Digital Dashboard Mockup Component
const LiveDashboardMockup = ({
    themeGradient = "from-indigo-500 to-purple-500",
    moduleName = "Dashboard",
    stats = [
        { label: "Metric 1", value: 4, color: "bg-cyan-400" },
        { label: "Metric 2", value: 3, color: "bg-rose-400" },
        { label: "Metric 3", value: 5, color: "bg-cyan-400" },
        { label: "Metric 4", value: 2, color: "bg-rose-400" },
    ],
    gauges = [75, 50],
    chartLabel = "Growth Index"
}: {
    themeGradient?: string,
    moduleName?: string,
    stats?: { label: string, value: number, color: string }[],
    gauges?: number[],
    chartLabel?: string
}) => (
    <div className="relative w-full aspect-[1.5/1] bg-[#020617] rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex flex-col font-sans border border-white/10 select-none pointer-events-none transform group-hover:scale-[1.03] transition-all duration-[1.2s] ease-out">
        {/* Top Glow Layer */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${themeGradient} opacity-50`} />

        {/* Top Bar Navigation - Dark Glass */}
        <div className="h-14 md:h-16 bg-slate-900/40 backdrop-blur-3xl border-b border-white/5 flex items-center px-6 md:px-10 gap-4 md:gap-8 shrink-0 relative z-10">
            <div className="flex items-center gap-3 mr-auto">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${themeGradient} shadow-[0_0_10px_rgba(99,102,241,0.5)] animate-pulse`} />
                <span className="text-[10px] md:text-sm font-black text-white uppercase tracking-[0.2em] opacity-90">{moduleName}</span>
            </div>
            {["OVERVIEW", "ANALYTICS", "TEAM", "LOGS"].map((tab, i) => (
                <div key={tab} className={`px-4 md:px-5 py-1.5 rounded-full text-[7px] md:text-[9px] font-black tracking-[0.15em] transition-all duration-300 ${i === 1 ? `bg-white/10 text-white border border-white/10` : 'text-slate-500'}`}>
                    {tab}
                </div>
            ))}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border border-white/10 shadow-lg" />
        </div>

        {/* Main Dashboard Content Area */}
        <div className="flex-grow p-6 md:p-10 grid grid-cols-12 gap-6 md:gap-8 bg-transparent relative z-0">

            {/* Left Column: Metrics & Analytics */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-6 md:gap-8 content-start">

                {/* Stats Card 1: Skill Indicators / Metrics */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-white/5 flex flex-col justify-between group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <LayoutDashboard className="w-12 h-12 text-white" />
                    </div>
                    <div className="grid grid-cols-1 gap-y-5 relative z-10">
                        {stats.map((stat, n) => (
                            <div key={n} className="flex items-center justify-between gap-4">
                                <div className="flex flex-col gap-1.5 flex-grow">
                                    <span className="text-[6px] md:text-[8px] font-black text-slate-400 uppercase tracking-[0.25em]">{stat.label}</span>
                                    <div className="w-full bg-white/5 h-1.5 md:h-2.5 rounded-full overflow-hidden flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className={`flex-grow rounded-full transition-all duration-700 delay-[${n * 100}ms] ${i < stat.value
                                                ? `${stat.color} shadow-[0_0_12px_rgba(34,211,238,0.2)]`
                                                : 'bg-white/5'
                                                }`} />
                                        ))}
                                    </div>
                                </div>
                                <span className="text-[10px] md:text-xs font-black text-white/50">{Math.floor((stat.value / 5) * 100)}%</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Card 2: Iconic Glowing Gauges */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group/gauge">
                    <div className="relative flex items-center scale-90 md:scale-100">
                        {/* Gauge 1 (Red/Pink Glow) */}
                        <div className="relative w-20 h-20 md:w-32 md:h-32 -mr-8 md:-mr-12 z-10 drop-shadow-[0_0_25px_rgba(244,63,94,0.3)]">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="50%" cy="50%" r="40%" stroke="#1e1b4b" strokeWidth="15%" fill="none" />
                                <circle cx="50%" cy="50%" r="40%" stroke="#f43f5e" strokeWidth="15%" fill="none" strokeDasharray={`${gauges[0] * 2.5} 251`} strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-[12px] md:text-lg font-black text-white">{gauges[0]}%</span>
                            </div>
                        </div>
                        {/* Gauge 2 (Cyan/Blue Glow) */}
                        <div className="relative w-20 h-20 md:w-32 md:h-32 z-20 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                            <div className="absolute inset-0 rounded-full border-[10px] md:border-[16px] border-[#020617] z-0" />
                            <svg className="w-full h-full -rotate-90 relative z-10">
                                <circle cx="50%" cy="50%" r="40%" stroke="#083344" strokeWidth="15%" fill="none" />
                                <circle cx="50%" cy="50%" r="40%" stroke="#06b6d4" strokeWidth="15%" fill="none" strokeDasharray={`${gauges[1] * 2.5} 251`} strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                                <span className="text-[12px] md:text-lg font-black text-white">{gauges[1]}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Card 3: Performance Wave with Glow */}
                <div className="col-span-2 bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 flex flex-col justify-between min-h-[160px] md:min-h-[240px] relative overflow-hidden border border-white/5 shadow-2xl">
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="space-y-1">
                            <span className="text-[14px] md:text-xl font-black text-white tracking-tight">{chartLabel}</span>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="text-[8px] md:text-[10px] font-black text-emerald-400 uppercase tracking-widest">System Active</span>
                            </div>
                        </div>
                        <div className="bg-white/5 px-4 py-2 rounded-2xl border border-white/5">
                            <span className="text-[10px] md:text-sm font-black text-white">+24.5%</span>
                        </div>
                    </div>

                    {/* Glowing Wave SVG */}
                    <div className="absolute inset-x-0 bottom-0 z-0 h-1/2">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <defs>
                                <linearGradient id="glow-grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,40 C15,35 25,10 45,25 C65,40 85,5 100,25 L100,40 L0,40 Z" fill="url(#glow-grad)" />
                            <path d="M0,40 C15,35 25,10 45,25 C65,40 85,5 100,25" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_0_12px_rgba(99,102,241,1)]" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Right Column: Mini Calendar & Tasks */}
            <div className="col-span-4 hidden md:flex flex-col gap-6 h-full">
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-0 shadow-2xl border border-white/5 flex-grow flex flex-col overflow-hidden">
                    <div className="h-14 w-full bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-between px-8 relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <span className="text-[10px] font-black tracking-[0.3em] text-white">PLANNER</span>
                        <div className="flex gap-2 relative z-10">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        </div>
                    </div>
                    <div className="p-8 flex-grow bg-transparent">
                        <div className="grid grid-cols-7 gap-y-5 gap-x-2 text-center">
                            {["M", "T", "W", "T", "F", "S", "S"].map(day => (
                                <span key={day} className="text-[8px] font-black text-slate-600">{day}</span>
                            ))}
                            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"].map((day, i) => (
                                <div key={i} className={`aspect-square flex items-center justify-center text-[10px] font-black transition-all duration-300 rounded-xl ${day === "16"
                                    ? 'bg-rose-500 text-white shadow-[0_10px_20px_rgba(244,63,94,0.4)] scale-110'
                                    : 'text-slate-400 hover:bg-white/5'
                                    }`}>
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                            {[1, 2].map(id => (
                                <div key={id} className="flex items-center gap-4 group/item">
                                    <div className={`w-1 h-8 rounded-full ${id === 1 ? 'bg-indigo-500' : 'bg-cyan-500'}`} />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-white/80 uppercase tracking-widest leading-none">Task {id}</span>
                                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">Due in 2h</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const features = [
    { title: "AI Powered", text: "Our ERP Enhances decision-making with predictive insights, automates administrative tasks for efficiency, and provides personalized learning", icon: Brain },
    { title: "NEP 2020 Compliant", text: "Our Campus ERP is NEP 2020-compliant, offering flexible, personalized learning paths and a curriculum structure", icon: BookOpen },
    { title: "NBA, NAAC, NIRF COMPLIANT", text: "Our ERP ensures compliance with NBA, NAAC, and NIRF standards by facilitating streamlined accreditation processes", icon: Award },
    { title: "Excl. Android & iOS Apps", text: "Personalised College Apps on Play Store, App Store & Web Applications for Seamless Access on Browser & Mobile.", icon: AndroidAppleIcon },
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

const coreModulesData = [
    {
        pillText: "Core Module",
        titlePrefix: "Academic",
        titleHighlight: "Management",
        gradientText: "from-indigo-600 to-purple-600",
        theme: {
            pillBg: "bg-indigo-50 border-indigo-100",
            pillDot: "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]",
            pillText: "text-indigo-600",
            glow1: "bg-indigo-300/20",
            glow2: "bg-purple-300/20",
            iconBg: "bg-indigo-50",
            iconBgHover: "group-hover/item:bg-indigo-500",
            iconBorder: "border-indigo-100",
            iconBorderHover: "group-hover/item:border-indigo-500",
            iconText: "text-indigo-500",
            imageGlow: "from-indigo-400/10 to-purple-400/10",
            imageBacking: "from-indigo-400/15 to-purple-400/15"
        },
        imageSrc: "/images/homeimage/report1_premium.png",
        imageAlt: "Academic Management Dashboard",
        isImageRight: true,
        mockupData: {
            stats: [
                { label: "Attendance", value: 5, color: "bg-indigo-500" },
                { label: "Syllabus", value: 4, color: "bg-rose-500" },
                { label: "CO-PO Map", value: 5, color: "bg-indigo-500" },
                { label: "Assignments", value: 3, color: "bg-rose-500" },
            ],
            gauges: [88, 72],
            chartLabel: "Academic Performance Index"
        },
        listItems: [
            "Complete Track of Campus Academics",
            "NEP 2020 Compliant",
            "Automated CO PO Mapping and Attainment Calculation",
            "Automated Time Table, Lesson Plan Tracking, Syllabus Coverage Progress and Alerts",
            "Conduct Unlimited Online Classes with Unlimited Students at ZERO Cost",
            "Dedicated Test Engine for Seamless Online Exam Conduction",
            "Customized Dashboards to Monitor Daily Progress/Activities",
            "Digital Approvals which Saves Abundant Amount of Time & Paper",
            "Generation of University Compliance Reports"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Administration",
        titleHighlight: "Management",
        gradientText: "from-emerald-600 to-teal-600",
        theme: {
            pillBg: "bg-emerald-50 border-emerald-100",
            pillDot: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]",
            pillText: "text-emerald-600",
            glow1: "bg-emerald-300/20",
            glow2: "bg-teal-300/20",
            iconBg: "bg-emerald-50",
            iconBgHover: "group-hover/item:bg-emerald-500",
            iconBorder: "border-emerald-100",
            iconBorderHover: "group-hover/item:border-emerald-500",
            iconText: "text-emerald-500",
            imageGlow: "from-emerald-400/10 to-teal-400/10",
            imageBacking: "from-emerald-400/15 to-teal-400/15"
        },
        imageSrc: "/images/homeimage/report2_premium.png",
        imageAlt: "Administration Management Dashboard",
        isImageRight: false,
        mockupData: {
            stats: [
                { label: "Staff Attd.", value: 5, color: "bg-emerald-500" },
                { label: "Fee Dues", value: 2, color: "bg-amber-500" },
                { label: "Inventory", value: 4, color: "bg-emerald-500" },
                { label: "Invoices", value: 5, color: "bg-amber-500" },
            ],
            gauges: [94, 65],
            chartLabel: "Efficiency Matrix"
        },
        listItems: [
            "Track Employee, Staff Attendance and Process Automated Pay Rolls",
            "Fee Dues Management",
            "New Admissions Management",
            "Enquiries Handling & Visitor Management",
            "Effective Leave Management System",
            "Generation of Invoices & Receives as per Std. Templates",
            "Effective Tracking of Inventory"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Examination",
        titleHighlight: "Management",
        gradientText: "from-cyan-600 to-blue-600",
        theme: {
            pillBg: "bg-cyan-50 border-cyan-100",
            pillDot: "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]",
            pillText: "text-cyan-600",
            glow1: "bg-cyan-300/20",
            glow2: "bg-blue-300/20",
            iconBg: "bg-cyan-50",
            iconBgHover: "group-hover/item:bg-cyan-500",
            iconBorder: "border-cyan-100",
            iconBorderHover: "group-hover/item:border-cyan-500",
            iconText: "text-cyan-500",
            imageGlow: "from-cyan-400/10 to-blue-400/10",
            imageBacking: "from-cyan-400/15 to-blue-400/15"
        },
        imageSrc: "/images/homeimage/report3_premium.png",
        imageAlt: "Examination Management Dashboard",
        isImageRight: true,
        mockupData: {
            stats: [
                { label: "Exam Reg.", value: 5, color: "bg-blue-500" },
                { label: "Evaluation", value: 4, color: "bg-cyan-500" },
                { label: "Result Pub.", value: 5, color: "bg-blue-500" },
                { label: "Mark Sheets", value: 4, color: "bg-cyan-500" },
            ],
            gauges: [98, 85],
            chartLabel: "Grading Curves"
        },
        listItems: [
            "Launching Examination Registration",
            "Auto Generation of Examination Time Tables, Seating Plans, Invigilation Details, etc.",
            "Online Student Attendance for Examinations",
            "Setting Rules for Examination Evaluation",
            "Bulk Generation of Hall Tickets and Issuing the Same to Students Subject to Defined Conditions",
            "Generation of Promotion/Detention List based on Conditions",
            "Calculations of Gradings/Percentages based on Conditions",
            "Manual Evaluation/ Bulk Uploading of the Marks Scored by Students",
            "Digital Evaluation",
            "Publishing of Results",
            "Generation of Mark Sheets & Certificates as per the Templates",
            "Result Analyses, Reports along with Customised Analytics"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Placement",
        titleHighlight: "Management",
        gradientText: "from-amber-600 to-orange-600",
        theme: {
            pillBg: "bg-amber-50 border-amber-100",
            pillDot: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]",
            pillText: "text-amber-600",
            glow1: "bg-amber-300/20",
            glow2: "bg-orange-300/20",
            iconBg: "bg-amber-50",
            iconBgHover: "group-hover/item:bg-amber-500",
            iconBorder: "border-amber-100",
            iconBorderHover: "group-hover/item:border-amber-500",
            iconText: "text-amber-500",
            imageGlow: "from-amber-400/10 to-orange-400/10",
            imageBacking: "from-amber-400/15 to-orange-400/15"
        },
        imageSrc: "/images/homeimage/report4_premium.png",
        imageAlt: "Placement Management Dashboard",
        isImageRight: false,
        mockupData: {
            stats: [
                { label: "Companies", value: 5, color: "bg-orange-500" },
                { label: "Offers", value: 4, color: "bg-amber-500" },
                { label: "Interviews", value: 5, color: "bg-orange-500" },
                { label: "Alumni", value: 4, color: "bg-amber-500" },
            ],
            gauges: [78, 62],
            chartLabel: "Placement Velocity"
        },
        listItems: [
            "Maintain Companies Information at One Place",
            "Maintain Placement History for Data-Driven Insights",
            "Publishing Placement Drives Information",
            "Create Eligible Students List in a Few Clicks",
            "Conduct Online Assessments",
            "Conduct Online Interviews",
            "Publishing Results",
            "Maintaining Alumni Details"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Learning",
        titleHighlight: "Management",
        gradientText: "from-rose-600 to-red-600",
        theme: {
            pillBg: "bg-rose-50 border-rose-100",
            pillDot: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.4)]",
            pillText: "text-rose-600",
            glow1: "bg-rose-300/20",
            glow2: "bg-red-300/20",
            iconBg: "bg-rose-50",
            iconBgHover: "group-hover/item:bg-rose-500",
            iconBorder: "border-rose-100",
            iconBorderHover: "group-hover/item:border-rose-500",
            iconText: "text-rose-500",
            imageGlow: "from-rose-400/10 to-red-400/10",
            imageBacking: "from-rose-400/15 to-red-400/15"
        },
        imageSrc: "/images/homeimage/report5_premium.png",
        imageAlt: "Learning Management Dashboard",
        isImageRight: true,
        mockupData: {
            stats: [
                { label: "Video Watch", value: 5, color: "bg-red-500" },
                { label: "Assignments", value: 3, color: "bg-rose-500" },
                { label: "Code Practice", value: 5, color: "bg-red-500" },
                { label: "Mock Tests", value: 4, color: "bg-rose-500" },
            ],
            gauges: [85, 45],
            chartLabel: "Learner Engagement"
        },
        listItems: [
            "Access to the Department through a Mobile App",
            "Multi-Language Coding Compiler for Coding Practice and Hackathons",
            "Access to Semester Exam Content",
            "Access to Placement Exam Video Courses",
            "Access to Study Material Published by Faculty",
            "Submit Assignments/Projects Online",
            "Social Networking with Peer Groups / Fellow Students",
            "Join Clubs which brings like-minded students to a Single Place",
            "Download Hall Tickets, Results, Mark Sheets",
            "Raise Digital Requests",
            "Stay in Touch with your Mentor through Chat Facility",
            "Fee Reminders & Payments through the App",
            "Track the Live Status of the Bus",
            "Reserve a Book in the Library and Return Reminders",
            "Book Hostel Rooms",
            "Share your thoughts with College on the College Social Networking Platform"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Library",
        titleHighlight: "Management",
        gradientText: "from-yellow-600 to-amber-600",
        theme: {
            pillBg: "bg-yellow-50 border-yellow-100",
            pillDot: "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]",
            pillText: "text-yellow-600",
            glow1: "bg-yellow-300/20",
            glow2: "bg-amber-300/20",
            iconBg: "bg-yellow-50",
            iconBgHover: "group-hover/item:bg-yellow-500",
            iconBorder: "border-yellow-100",
            iconBorderHover: "group-hover/item:border-yellow-500",
            iconText: "text-yellow-500",
            imageGlow: "from-yellow-400/10 to-amber-400/10",
            imageBacking: "from-yellow-400/15 to-amber-400/15"
        },
        imageSrc: "/images/homeimage/report6_premium.png",
        imageAlt: "Library Management Dashboard",
        isImageRight: false,
        mockupData: {
            stats: [
                { label: "Book Issues", value: 5, color: "bg-amber-500" },
                { label: "Overdue", value: 1, color: "bg-yellow-500" },
                { label: "Reservations", value: 4, color: "bg-amber-500" },
                { label: "New Titles", value: 3, color: "bg-yellow-500" },
            ],
            gauges: [92, 58],
            chartLabel: "Circulation Index"
        },
        listItems: [
            "Maintain a List of Books/Titles/Journals",
            "Track Book Issue/Return",
            "Generate Overdue List",
            "Send Alerts",
            "Track Book Reservations",
            "Collect Late Fee/ Fine",
            "Generate Various Reports"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Transportation",
        titleHighlight: "Management",
        gradientText: "from-purple-600 to-indigo-600",
        theme: {
            pillBg: "bg-purple-50 border-purple-100",
            pillDot: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]",
            pillText: "text-purple-600",
            glow1: "bg-purple-300/20",
            glow2: "bg-indigo-300/20",
            iconBg: "bg-purple-50",
            iconBgHover: "group-hover/item:bg-purple-500",
            iconBorder: "border-purple-100",
            iconBorderHover: "group-hover/item:border-purple-500",
            iconText: "text-purple-500",
            imageGlow: "from-purple-400/10 to-indigo-400/10",
            imageBacking: "from-purple-400/15 to-indigo-400/15"
        },
        imageSrc: "/images/homeimage/report7_premium.png",
        imageAlt: "Transportation Management Dashboard",
        isImageRight: true,
        mockupData: {
            stats: [
                { label: "Bus Routes", value: 5, color: "bg-indigo-500" },
                { label: "Fuel Efficiency", value: 4, color: "bg-purple-500" },
                { label: "Maintenance", value: 3, color: "bg-indigo-500" },
                { label: "Live Tracking", value: 5, color: "bg-purple-500" },
            ],
            gauges: [89, 74],
            chartLabel: "Fleet Status"
        },
        listItems: [
            "Maintain Bus Details/Routes",
            "Track Students List",
            "Track Faculty & Staff List",
            "Maintain Fee Details/Dues",
            "Driver Details & Attendance",
            "Track Expenses",
            "Track Live Location of the Bus",
            "Maintain Vehicle Documents & Due Dates",
            "Generate Reports"
        ]
    },
    {
        pillText: "Core Module",
        titlePrefix: "Hostel",
        titleHighlight: "Management",
        gradientText: "from-blue-700 to-cyan-600",
        theme: {
            pillBg: "bg-blue-50 border-blue-100",
            pillDot: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]",
            pillText: "text-blue-600",
            glow1: "bg-blue-400/20",
            glow2: "bg-cyan-400/20",
            iconBg: "bg-blue-50",
            iconBgHover: "group-hover/item:bg-blue-500",
            iconBorder: "border-blue-100",
            iconBorderHover: "group-hover/item:border-blue-500",
            iconText: "text-blue-500",
            imageGlow: "from-blue-500/10 to-cyan-500/10",
            imageBacking: "from-blue-500/15 to-cyan-500/15"
        },
        imageSrc: "/images/homeimage/report8_premium.png",
        imageAlt: "Hostel Management Dashboard",
        isImageRight: false,
        mockupData: {
            stats: [
                { label: "Occupancy", value: 5, color: "bg-blue-500" },
                { label: "In/Out Time", value: 4, color: "bg-cyan-500" },
                { label: "Permissions", value: 3, color: "bg-blue-500" },
                { label: "Inventory", value: 5, color: "bg-cyan-500" },
            ],
            gauges: [82, 45],
            chartLabel: "Facility Health Hub"
        },
        listItems: [
            "Maintain Hostel Details/Occupancy",
            "Hostel Students List",
            "Hostel Faculty List",
            "Fee Details/Dues",
            "Track In/Out Time",
            "Track Student Permissions",
            "Locate Students using Geo Fencing / Tracking",
            "Inventory",
            "Hostel/Room Transfer",
            "Reports"
        ]
    }
];

const AicasPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#020617] relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative pt-24 pb-20">
                {/* Cinematic Dark Background System */}
                <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#020617]">
                    {/* Dark Premium Background Image */}
                    <div className="absolute inset-0 opacity-[0.6] mix-blend-screen">
                        <img
                            src="/images/aicas_dark_bg.png"
                            className="w-full h-full object-cover scale-100"
                            alt=""
                        />
                    </div>

                    {/* Dark Mode Glows */}
                    <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-indigo-600/20 rounded-full blur-[160px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[140px]" />

                    {/* Subtle Overlay to ensure readability */}
                    <div className="absolute inset-0 bg-slate-950/40" />
                </div>

                <div className="container relative z-10 flex flex-col items-center">

                    <div className="grid lg:grid-cols-2 gap-12 w-full items-center max-w-7xl mx-auto py-12">

                        {/* Left Column: Text & Hero Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start text-left space-y-8"
                        >
                            {/* Shimmering Top Pill */}
                            <div className="relative group cursor-default inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-indigo-500/30 text-indigo-400 px-6 py-2.5 rounded-full font-black tracking-[0.2em] text-[10px] uppercase shadow-2xl flex items-center gap-2 overflow-hidden">
                                    <span className="relative z-10">AI Powered AICAS</span>
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.9] flex flex-col items-start">
                                <span className="text-white drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]">Campus</span>
                                <span className="text-slate-300 italic">Automation</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Solution</span>
                            </h2>

                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl text-slate-300 font-bold max-w-xl leading-relaxed tracking-tight">
                                    Transforming Campuses with <span className="text-indigo-400 italic">AI Brilliance</span>
                                </p>
                                <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                            </div>

                            <div className="pt-4 flex gap-6">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white">40%</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency Boost</span>
                                </div>
                                <div className="w-[1px] bg-slate-800 h-10 self-center" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white">100%</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Digital Inclusion</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Premium Dark Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group h-full"
                        >
                            {/* Card Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />

                            <div className="relative bg-slate-900/60 backdrop-blur-[40px] rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col h-full overflow-hidden">
                                {/* Form Background Dark Theme Layer */}
                                <div className="absolute inset-0 z-0 opacity-[0.4] mix-blend-overlay pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                </div>

                                <div className="relative z-10 mb-8 text-center">
                                    <h3 className="text-3xl font-black text-white tracking-tight leading-none mb-3">
                                        Get Started Today
                                    </h3>
                                    <div className="h-1 w-12 bg-indigo-500 rounded-full mx-auto shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                                </div>

                                <form className="space-y-5 relative z-10 flex-grow" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="First Name*"
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-sm shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Last Name*"
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-sm shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Whatsapp No.*"
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-sm shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Email*"
                                                type="email"
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-sm shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="College Name*"
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-sm shadow-inner"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="City*"
                                                className="h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 font-bold text-sm shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    <Textarea
                                        placeholder="Message*"
                                        className="min-h-[120px] bg-white/5 border-white/10 rounded-[1.5rem] focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-indigo-500/30 resize-none pt-5 px-6 font-bold text-sm shadow-inner"
                                    />

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="w-full relative group/btn overflow-hidden rounded-[1.2rem] h-16 bg-white text-slate-950 font-black text-lg tracking-widest transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 active:scale-95"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 uppercase group-hover/btn:text-white transition-colors duration-500">Send Inquiry</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </main>

            {/* Features Section - Redesigned as Premium Dark Mode (Obsidian) */}
            <section className="py-32 relative overflow-hidden bg-[#020617] border-y border-white/5">
                {/* High-Fidelity Fluid Wave Background System */}
                <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
                    {/* Radial Base Cinematic Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1e1b4b_0%,#020617_80%)] opacity-90" />

                    {/* Liquid 'Wave Pumping' Layer 1 */}
                    <motion.div
                        animate={{
                            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                            scale: [1, 1.15, 1],
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[-20%] left-[-10%] w-[100%] h-[120%] bg-indigo-500/10 blur-[120px]"
                    />

                    {/* Liquid 'Wave Pumping' Layer 2 */}
                    <motion.div
                        animate={{
                            borderRadius: ["70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
                            scale: [1.15, 1, 1.15],
                            x: [0, -60, 0],
                            y: [0, 40, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[120%] bg-purple-600/10 blur-[140px]"
                    />

                    {/* Rhythmic 'Pulse' Pump Overlay */}
                    <motion.div
                        animate={{
                            scale: [1, 1.04, 1],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1] // Heartbeat-style ease
                        }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08)_0%,transparent_70%)] mix-blend-screen"
                    />

                    {/* Sinusoidal Fluid Waves (Pumping Motion) */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20">
                        <svg className="w-[200%] h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <motion.path
                                animate={{ x: [0, -500] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                d="M0 80 C 250 120, 250 20, 500 80 C 750 120, 750 20, 1000 80 V 100 H 0 Z"
                                fill="url(#waveGradient)"
                            />
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Technical Fine Mesh Overlay (Static for contrast) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_80%,transparent_100%)]" />

                    {/* Subtle Premium Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs">Why Choose AICAS</span>
                            <div className="relative">
                                <span className="absolute -top-10 -left-4 text-7xl md:text-9xl font-black text-white/5 uppercase select-none pointer-events-none tracking-tighter">
                                    FEATURES
                                </span>
                                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight relative z-10">
                                    Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 italic">Extra Edge</span>
                                </h2>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                                className="group/feature relative p-10 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-700 hover:border-indigo-500/30 hover:-translate-y-3 overflow-hidden flex flex-col items-start"
                            >
                                {/* Decorative Glow Accent */}
                                <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/feature:opacity-100 blur-[80px] transition-all duration-1000" />

                                <div className="relative z-10 w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover/feature:bg-indigo-600 group-hover/feature:scale-110 transition-all duration-500 shadow-2xl">
                                    <feature.icon className="w-10 h-10 text-indigo-400 group-hover/feature:text-white transition-colors duration-500" />
                                </div>

                                <div className="relative z-10 flex-grow space-y-4">
                                    <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover/feature:text-indigo-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 font-bold leading-relaxed transition-all duration-500 group-hover/feature:text-slate-200">
                                        {feature.text}
                                    </p>
                                </div>

                                <div className="absolute bottom-10 left-10 h-1.5 w-10 bg-white/5 rounded-full group-hover/feature:w-24 group-hover/feature:bg-indigo-500 transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Feature Showcase Sections - Redesigned to High-Fidelity Dark Mode */}
            <div className="space-y-0 relative">
                {/* Global Connective Background */}
                <div className="absolute inset-0 bg-slate-950 -z-10" />

                {coreModulesData.map((module, idx) => (
                    <section
                        key={idx}
                        className={`py-32 relative overflow-hidden flex items-center ${idx % 2 === 0 ? 'bg-[#020617]' : 'bg-transparent'}`}
                    >
                        {/* kinetic Technical Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                            {/* Theme-colored Glow */}
                            <div className={`absolute top-1/2 ${module.isImageRight ? 'left-[10%]' : 'right-[10%]'} w-[800px] h-[800px] ${module.theme.glow1} rounded-full blur-[160px] -translate-y-1/2 opacity-[0.06]`} />

                            {/* Technical Grid/Dots */}
                            <div className={`absolute inset-y-0 ${module.isImageRight ? 'left-0 w-1/2' : 'right-0 w-1/2'} bg-[radial-gradient(#ffffff05_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-100`} />
                        </div>

                        <div className={`container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col ${module.isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}>

                            {/* Text Content Column */}
                            <motion.div
                                initial={{ opacity: 0, x: module.isImageRight ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="lg:w-1/2 w-full space-y-12"
                            >
                                <div className="space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 shadow-sm backdrop-blur-md`}
                                    >
                                        <span className={`w-2.5 h-2.5 rounded-full ${module.theme.pillDot} animate-pulse`} />
                                        <span className={`text-xs font-black tracking-[0.4em] text-white uppercase`}>{module.pillText}</span>
                                    </motion.div>

                                    <div className="relative">
                                        <span className="absolute -top-12 -left-4 text-8xl md:text-[10rem] font-black text-white/5 uppercase select-none pointer-events-none tracking-tighter">
                                            {module.titlePrefix.substring(0, 5)}
                                        </span>
                                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] relative z-10">
                                            {module.titlePrefix}
                                            <span className={`block text-transparent bg-clip-text bg-gradient-to-r ${module.gradientText} italic mt-2 drop-shadow-2xl`}>
                                                {module.titleHighlight}
                                            </span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
                                    {module.listItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.04 }}
                                            className="flex items-start gap-5 group/item"
                                        >
                                            <div className={`mt-1 w-7 h-7 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-gradient-to-br ${module.gradientText} group-hover/item:border-transparent transition-all duration-500 shadow-lg`}>
                                                <Check className={`w-4 h-4 text-white group-hover/item:text-white transition-colors`} strokeWidth={4} />
                                            </div>
                                            <span className="text-base font-bold text-slate-400 group-hover/item:text-white transition-colors leading-snug py-0.5">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Dashboard Premium Image Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2 w-full relative group"
                            >
                                {/* Magnetic Glow */}
                                <div className={`absolute -inset-16 bg-gradient-to-br ${module.gradientText} opacity-0 blur-[120px] rounded-full group-hover:opacity-[0.15] transition-all duration-1000`} />

                                <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900 border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.6)] transform group-hover:scale-[1.02] transition-all duration-[1.2s] ease-out">
                                    <img
                                        src={module.imageSrc}
                                        alt={module.imageAlt}
                                        className="w-full h-auto object-cover"
                                    />

                                    {/* Glass Overlay for Premium Feel */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                                </div>


                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default AicasPage;
