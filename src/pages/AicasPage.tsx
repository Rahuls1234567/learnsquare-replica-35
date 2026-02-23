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
        imageSrc: "/images/homeimage/report1.png",
        imageAlt: "Academic Management Dashboard",
        isImageRight: true,
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
        imageSrc: "/images/homeimage/report2.png",
        imageAlt: "Administration Management Dashboard",
        isImageRight: false,
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
        imageSrc: "/images/homeimage/report3.png",
        imageAlt: "Examination Management Dashboard",
        isImageRight: true,
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
        imageSrc: "/images/homeimage/report4.png",
        imageAlt: "Placement Management Dashboard",
        isImageRight: false,
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
        imageSrc: "/images/homeimage/report5.png",
        imageAlt: "Learning Management Dashboard",
        isImageRight: true,
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
        imageSrc: "/images/homeimage/report6.png",
        imageAlt: "Library Management Dashboard",
        isImageRight: false,
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
        imageSrc: "/images/homeimage/report7.png",
        imageAlt: "Transportation Management Dashboard",
        isImageRight: true,
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
        imageSrc: "/images/homeimage/report8.png",
        imageAlt: "Hostel Management Dashboard",
        isImageRight: false,
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
                                className="object-contain w-[95%] h-[95%] transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-[1500ms] ease-out relative z-10 mix-blend-multiply"
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
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-[#8B5CF6] font-bold tracking-wider uppercase text-sm">Why Choose AICAS</span>
                            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                                Unlock Your <span className="text-[#8B5CF6]">Extra Edge</span>
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                                className="bg-[#FCDCC3] p-6 lg:p-8 transition-transform duration-300 hover:-translate-y-1"
                            >
                                <div className="h-[42px] px-3 rounded-lg bg-[#8B5CF6] text-white flex items-center justify-center mb-4 shadow-sm inline-flex">
                                    <feature.icon size={22} />
                                </div>
                                <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-800/80 font-medium leading-[1.6] text-[13px]">
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scalable Core Modules Sections */}
            {coreModulesData.map((module, idx) => (
                <section key={idx} className={`py-16 relative overflow-hidden flex items-center border-t border-slate-100 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}`}>
                    {/* Modern Light Gradient Background with Blobs */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className={`absolute top-1/4 ${module.isImageRight ? 'left-1/4' : 'right-1/4'} w-[600px] h-[600px] ${module.theme.glow1} rounded-full blur-[100px] mix-blend-multiply -z-10`} />
                        <div className={`absolute bottom-0 ${module.isImageRight ? 'right-0' : 'left-0'} w-[600px] h-[600px] ${module.theme.glow2} rounded-full blur-[120px] mix-blend-multiply -z-10`} />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                    </div>

                    <div className={`container mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col ${module.isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}>

                        {/* Text Column: Creative Text Presentation */}
                        <motion.div
                            initial={{ opacity: 0, x: module.isImageRight ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="lg:w-1/2 w-full"
                        >
                            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${module.theme.pillBg} mb-5 shadow-[0_4px_10px_rgba(0,0,0,0.02)]`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${module.theme.pillDot} animate-pulse`}></span>
                                <span className={`text-xs font-bold tracking-widest ${module.theme.pillText} uppercase`}>{module.pillText}</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                {module.titlePrefix} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${module.gradientText}`}>{module.titleHighlight}</span>
                            </h2>

                            <ul className="space-y-3">
                                {module.listItems.map((item, i) => (
                                    <li key={i} className="flex items-start group/item">
                                        <div className={`mr-4 mt-0.5 w-6 h-6 rounded-full ${module.theme.iconBg} flex items-center justify-center flex-shrink-0 ${module.theme.iconBgHover} group-hover/item:scale-110 transition-all duration-300 border ${module.theme.iconBorder} ${module.theme.iconBorderHover}`}>
                                            <Check className={`w-3.5 h-3.5 ${module.theme.iconText} group-hover/item:text-white transition-colors`} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-600 font-medium text-[15px] group-hover/item:text-slate-900 transition-colors leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: module.isImageRight ? 40 : -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="lg:w-1/2 w-full relative flex items-center justify-center pt-8 lg:pt-0"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-${module.isImageRight ? 'tr' : 'tl'} ${module.theme.imageGlow} rounded-full blur-[80px] -z-10`} />

                            <div className="relative group perspective-[1000px]">
                                <img
                                    src={module.imageSrc}
                                    alt={module.imageAlt}
                                    className={`relative z-10 w-full max-w-xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-4 ${module.isImageRight ? 'group-hover:rotate-1' : 'group-hover:-rotate-1'} transition-all duration-700 ease-out`}
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default AicasPage;
