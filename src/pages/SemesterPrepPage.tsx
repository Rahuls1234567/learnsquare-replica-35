import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Lock, ChevronDown, Play, BookOpen, Bell, Briefcase, Trophy, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { toast } from "sonner";

// Sample Data for Cascading Dropdowns
const UNIVERSITY_DATA: Record<string, string[]> = {
    "JNTU Hyderabad": [
        "A A R MAHAVEER ENGINEERING COLLEGE, HYDERABAD",
        "AARUSHI GROUP OF INSTITUTIONS, WARANGAL (RURAL)",
        "ABDUL KALAM INSTITUTE OF TECHNOLOGICAL SCIENCES, BHADRADRI KOTHAGUDEM",
        "ABHINAV HI-TECH COLLEGE OF ENGINEERING (FORMERLY HI-TECH COLLEGE OF ENGINEERING & TECHNOLOGY), RANGA REDDY",
        "ACE ENGINEERING COLLEGE, MEDCHAL",
        "ADAM'S ENGG COLLEGE, KHAMMAM",
        "AL HABEEB COLLEGE OF ENGINEERING AND TECHNOLOGY, RANGA REDDY",
        "ANNAMACHARYA INSTITUTE OF TECHNOLOGY & SCIENCES, RANGA REDDY",
        "ANUBOSE INSTITUTE OF TECHNOLOGY, BHADRADRI KOTHAGUDEM",
        "ANURAG COLLEGE OF ENGINEERING, MEDCHAL",
        "ANURAG ENGINEERING COLLEGE, SURYAPET",
        "ANURAG GROUP OF INSTITUIONS, MEDCHAL",
        "ARJUN COLLEGE OF TECHNOLOGY & SCEINCES, RANGA REDDY",
        "ARKAY COLLEGE OF ENGINEERING & TECHNOLOGY, NIZAMABAD",
        "ASHOKA BUSINESS SCHOOL, YADADRI BHUVANAGIRI",
        "ASHOKA INSTITUTE OF ENGINEERING & TECHNOLOGY, NALGONDA",
        "AURORA'S ENGINEERING COLLEGE, HYDERABAD",
        "AURORA'S SCIENTIFIC &TECHNOLOGICAL INSTITUTE, MEDCHAL",
        "AURORA'S SCIENTIFIC, TECHNOLOGICAL AND RESEARCH ACADEMY, HYDERABAD",
        "AURORA'S TECHNOLOGICAL AND RESEARCH INSTITUTE, MEDCHAL",
        "AURORA’S TECHNOLOGICAL & MANAGEMENT ACADEMY, MEDCHAL",
        "AURORA`S TECHNOLOGICAL INSTITUTE, KAMAREDDY",
        "AVANTHI INSTITUTE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "AVANTHI INSTITUTE OF PHARMACEUTICAL SCIENCES, RANGA REDDY",
        "AVANTHI'S P.G & RESERACH ACADEMY, RANGA REDDY",
        "AVANTHI'S SCIENTIFIC TECHNOLOGICAL & RESEARCH ACADEMY, RANGA REDDY",
        "AVN INSTITUTE OF ENGINEERING AND TECHNOLOGY, RANGA REDDY",
        "AYAAN COLLEGE OF ENGINEERING AND TECH, RANGA REDDY",
        "AZAD COLLEGE OF ENGINEERING AND TECHNOLOGY, RANGA REDDY",
        "B.V.RAJU INSTITUTE OF TECHNOLOGY, MEDAK",
        "BALAJI INSTITUTE OF MANAGEMENT SCIENCES, WARANGAL (RURAL)",
        "BALAJI INSTITUTE OF TECHNOLOGY & SCIENCE, WARANGAL (RURAL)",
        "BANDARI SRINIVAS INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "BHARAT INSTITUTE OF ENGINEERING AND TECHNOLOGY, RANGA REDDY",
        "BHARAT INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "BHASKAR ENGINEERING COLLEGE, RANGA REDDY",
        "BHOJ REDDY ENGINEERING COLLEGE FOR WOMEN, HYDERABAD",
        "BOMMA INSTITUTE OF INFORMATICS, KHAMMAM",
        "BOMMA INSTITUTE OF TECHNOLOGY AND SCIENCE, KHAMMAM",
        "BRILLIANT GRAMMAR SCHOOL EDUCATIONAL SOCIETY'S GROUP OF INSTITUTIONS-INTEGRATED CAMPUS, RANGA REDDY",
        "BRILLIANT INSTITUTE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "BVRIT HYDERABAD COLLEGE OF ENGINEERING FOR WOMEN, MEDCHAL",
        "CHRISTU JYOTHI INSTITUTE OF TECHNOLOGY & SCIENCE, JANGAON",
        "CMR COLLEGE OF ENGINEERING &TECHNOLOGY, MEDCHAL",
        "CMR ENGINEERING COLLEGE, RANGA REDDY",
        "CMR INSTITUTE OF TECHNOLOGY, MEDCHAL",
        "CMR TECHNICAL CAMPUS, MEDCHAL",
        "CSI WESLEY INSTITUTE OF TECHNOLOGY AND SCIENCES, HYDERABAD",
        "CVM COLLEGE OF PHARMCAY, KARIMNAGAR",
        "CVR COLLEGE OF ENGINEERING, RANGA REDDY",
        "DARIPALLY ANANTHA RAMULU COLLEGE OF ENGINEERING & TECHNOLOGY, KHAMMAM",
        "DHANVANTHARI INSTITUTE OF PHARMACEUTICAL SCIENCES, BHADRADRI KOTHAGUDEM",
        "DHRUVA INSTITUTE OF ENGINEERING AND TECHNOLOGY, YADADRI BHUVANAGIRI",
        "DR. V.R.K. COLLEGE OF ENGINEERING & TECHNOLOGY, KARIMNAGAR",
        "DR.V.R.K WOMEN'S COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "DRK COLLEGE OF ENGINEERING AND TECHNOLOGY, MEDCHAL",
        "DRK INSTITUTE OF SCIENCE & TECHNOLOGY, MEDCHAL",
        "ELLENKI COLLEGE OF ENGINEERING AND TECHNOLOGY, SANGAREDDY",
        "ELLENKI INSTITUTE OF ENGINEERING AND TECHNOLOGY, SANGAREDDY",
        "FARAH INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "G.NARAYANAMMA INSTITUTE TECHNOLOGY & SCIENCE, FOR WOMEN, HYDERABAD",
        "GANAPATHY ENGINEERING COLLEGE, WARANGAL (URBAN)",
        "GANDHI ACADEMY OF TECHNICAL EDUCATION, SURYAPET",
        "GEETANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY, MEDCHAL",
        "GLAND INSTITUTE OF PHARMACEUTICAL SCIENCES, MEDAK",
        "GLOBAL INSTITUTE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "GNYANA SARASWATI COLLEGE OF ENGINEERING & TECHNOLONY, NIZAMABAD",
        "GOKARAJU RANGARAJU INSTITUTE OF ENGINEERING & TECHNOLOGY, MEDCHAL",
        "GURU NANAK INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "GURU NANAK INSTITUTIONS TECHNICAL CAMPUS, RANGA REDDY",
        "HARSHITH GROUP OF INSTITUTIONS, RANGA REDDY",
        "HI POINT COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "HOLY MARY INSTITUTE OF TECHNOLOGY & SCIENCE, MEDCHAL",
        "HYDERABAD INSTITUTE OF TECHNOLOGY AND MANAGEMENT, MEDCHAL",
        "IMMANUEL BUSINESS SCHOOL, YADADRI BHUVANAGIRI",
        "INDUR INSTITUTE OF ENGINEERING & TECHNOLOGY, SIDDIPET",
        "INSTITUTE OF AERONAUTICAL ENGINEERING, MEDCHAL",
        "J.B.INSTITUTE OF ENGINEERING & TECHNOLOGY, HYDERABAD",
        "JAYAMUKHI INSTITUTE OF PHARMACEUTICAL SCIENCES, WARANGAL (RURAL)",
        "JAYAMUKHI INSTITUTE OF TECHNOLOGICAL SCIENCES, WARANGAL (RURAL)",
        "JAYAPRAKASH NARAYAN COLLEGE OF ENGINEERING, MAHABUBNAGAR",
        "JESUS PG COLLEGE, MEDCHAL",
        "JJ INSTITUTE OF INFORMATION TECHNOLOGY, RANGA REDDY",
        "JOGINPALLY B.R. ENGINEERING COLLEGE, RANGA REDDY",
        "JYOTHISHMATHI COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "JYOTHISHMATHI INSTITUTE OF PHARMACEUTICAL SCIENCES, KARIMNAGAR",
        "JYOTHISHMATHI INSTITUTE OF TECHNOLOGICAL SCIENCES, KARIMNAGAR",
        "JYOTHISHMATHI INSTITUTE OF TECHNOLOGY & SCIENCE, KARIMNAGAR",
        "KAKATIYA INSTITUTE OF TECHNONOLGY AND SCIENCE FOR WOMEN, NIZAMABAD",
        "KAMALA INSTITUTE OF TECHNOLOGY & SCIENCE, KARIMNAGAR",
        "KASIREDDY NARAYAN REDDY COLLEGE OF ENGINEERING & RESEARCH, RANGA REDDY",
        "KBR ENGINEERING COLLEGE, YADADRI BHUVANAGIRI",
        "KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY, HYDERABAD",
        "KG REDDY COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "KHADER MEMORIAL COLLEGE OF ENGINEERING & TECHNOLOGY, NALGONDA",
        "KHAMMAM INSTITUTE OF TECHNOLOGY & SCIENCES, KHAMMAM",
        "KLR COLLEGE OF ENGINEERING &TECHNOLOGY, BHADRADRI KOTHAGUDEM",
        "KODADA INSTITUTE OF TECHNOLOGY & SCIENCE FOR WOMEN, SURYAPET",
        "KOMMURI PRATAP REDDY INSTITUTE OF TECHNOLOGY, MEDCHAL",
        "KRISHNA MURTHY INSTITUTE OF TECHNOLOGY & ENGINEERING, MEDCHAL",
        "KSHATRIYA COLLEGE OF ENGINEERING, NIZAMABAD",
        "KYASA INSTITUTE OF MANAGEMENT STUDIES, KARIMNAGAR",
        "M. C. GUPTA COLLEGE OF BUSINESS MANAGEMENT, HYDERABAD",
        "MADHIRA INSTITUTE OF TECHNOLAGY & SCIENCE, SURYAPET",
        "MADHIRA INSTITUTE OF TECHNOLOGY & SCIENCES, SURYAPET",
        "MAHATMA GANDHI INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "MAHAVEER INSTITUTE OF SCIENCE & TECHNOLOGY, HYDERABAD",
        "MALLA REDDY COLLEGE OF ENGINEERING AND TECHNOLOGY (AUTONOMOUS), MEDCHAL",
        "MALLA REDDY COLLEGE OF ENGINEERING FOR WOMEN, MEDCHAL",
        "MALLA REDDY COLLEGE OF ENGINEERING, MEDCHAL",
        "MALLA REDDY ENGINEERING COLLEGE AND MANAGEMENT SCIENCES, MEDCHAL",
        "MALLA REDDY ENGINEERING COLLEGE FOR WOMEN, MEDCHAL",
        "MALLA REDDY ENGINEERING COLLEGE(AUTONOMOUS), MEDCHAL",
        "MALLA REDDY INSTITUTE OF ENGINEERING AND TECHNOLOGY, MEDCHAL",
        "MALLA REDDY INSTITUTE OF PHARMACEUTICAL SCIENCES, MEDCHAL",
        "MALLA REDDY INSTITUTE OF TECHNOLOGY & SCIENCE, MEDCHAL",
        "MALLA REDDY INSTITUTE OF TECHNOLOGY, MEDCHAL",
        "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT, MEDCHAL",
        "MEDAK COLLEGE OF ENGINEERING AND TECHNOLOGY, SIDDIPET",
        "MEGHA INSTITUTE OF ENGINEERING & TECHNOLOGY FOR WOMEN, MEDCHAL",
        "MINA INSTITUTE OF ENGINEERING & TECHNOLOGY FOR WOMEN, NALGONDA",
        "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY, MEDCHAL",
        "MLR INSTITUTE OF TECHNOLOGY, MEDCHAL",
        "MNR COLLEGE OF ENGINEERING AND TECHNOLOGY, SANGAREDDY",
        "MOHAMMADIYA INSTITUTE OF MANAGEMENT, KHAMMAM",
        "MOONRAY INSTITUTE OF PHRAMCEUTICAL SCIENCES, RANGA REDDY",
        "MOTHER TERESA INSTITUTE OF SCIENCE & TECHNOLOGY, KHAMMAM",
        "MOTHER THERESSA COLLEGE OF ENGINEERING AND TECHNOLOGY, PEDDAPALLI",
        "MUMTAZ COLLEGE OF ENGINEERING & TECHNOLOGY, HYDERABAD",
        "NALGONDA INSTITUTE OF TECHNOLOGY & SCIENCE, NALGONDA",
        "NALLA MALLA REDDY ENGINEERING COLLGE, MEDCHAL",
        "NALLA NARASIMHA REDDY EDUCATION SOCIETY'S GROUP OF INSTITUTIONS, MEDCHAL",
        "NARAYANA ENGINEERING & TECHNICAL CAMPUS, RANGA REDDY",
        "NARSIMHA REDDY ENGINEERING COLLEGE, MEDCHAL",
        "NETAJI INSTITUTE OF ENGINEERING & TECHNOLOGY, YADADRI BHUVANAGIRI",
        "NETAJI INSTITUTE OF PHARMACEUTICAL SCIENCES, YADADRI BHUVANAGIRI",
        "NETAJI SCHOOL OF MANAGMENT, YADADRI BHUVANAGIRI",
        "NIGAMA ENGINEERING COLLEGE, PEDDAPALLI",
        "NISHITHA COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "NIZAM INSTITUTE OF ENGINEERING &TECHNOLOGY, YADADRI BHUVANAGIRI",
        "NOBLE COLLEGE OF ENGINEERING & TECHNOLOGY FOR WOMEN, RANGA REDDY",
        "NOVA COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "NOVA COLLEGE OF PHARMACEUTICAL EDUCATION AND RESEARCH, RANGA REDDY",
        "NOVA PG COLLEGE, RANGA REDDY",
        "NRI INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "PALLAVI ENGINEERING COLLEGE, RANGA REDDY",
        "PALLAVI VIF COLLEGE OF ENGINEERING AND TECHNOLOGY, RANGA REDDY",
        "PRATISHTA INSTITUTE OF PHARMACEUTICAL SCIENCES, SURYAPET",
        "PRINCETON COLLEGE OF ENGG. & TECH, MEDCHAL",
        "PRINCETON INSTITUTE OF ENGINEERING AND TECHNOLOGY FOR WOMEN, MEDCHAL",
        "PRIYADARSHINI INSTITUTE OF SCIENCE & TECH, SANGAREDDY",
        "PRIYADARSHINI INSTITUTE OF SCIENCE & TECHNOLOGY FOR WOMEN, KHAMMAM",
        "PRRM ENGINEERING COLLEGE, RANGA REDDY",
        "PULLA REDDY INSTITUTE OF TECHNOLOGY, MEDAK",
        "RAJAMAHENDRA COLLEGE OF ENGINEERING, RANGA REDDY",
        "RAMANANDATIRTHA ENGINEERING COLLEGE, NALGONDA",
        "RAMAPPA ENGINEERING COLLEGE, WARANGAL (URBAN)",
        "RATAGN GLOBAL BUSINESS SCHOOL, MEDAK",
        "RISHI MS INSTITUTE OF ENGINEERING & TECHNOLOGY FOR WOMEN, MEDCHAL",
        "RKLK P.G. COLLEGE, SURYAPET",
        "ROYAL INSTITUTE OF TECHNOLOGY AND SCIENCE, RANGA REDDY",
        "RRS COLLEGE OF ENGINEERING AND TECHNOLOGY, SANGAREDDY",
        "S R ENGINEERING COLLEGE, WARANGAL (URBAN)",
        "S.P.R. COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "S.S.J ENGINEERING COLLEGE, RANGA REDDY",
        "SAGAR GROUP OF INSTITUTIONS, SAGAR INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "SAHAJA INSTITUTE OF TECHNOLOGY & SCIENCES FOR WOMEN, KARIMNAGAR",
        "SAHAJA SCHOOL OF BUSINESS, PEDDAPALLI",
        "SAI SPURTHI INSTITUTE OF TECHNOLOGY, KHAMMAM",
        "SAMSKRUTI COLLEGE OF ENGINEERING & TECHNOLOGY, MEDCHAL",
        "SANA ENGINEERING COLLEGE, SURYAPET",
        "SARADA INSTITUTE OF TECHNOLOGY & SCIENCE, KHAMMAM",
        "SCIENT INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "SHADAN COLLEGE OF ENGINEERING AND TECHNOLOGY, HYDERABAD",
        "SHADAN WOMENS COLLEGE OF ENGINEERING & TECHNOLOGY, HYDERABAD",
        "SIDDHARTHA INSTITUTE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "SIDDHARTHA INSTITUTE OF TECHNOLOGY & SCIENCES, MEDCHAL",
        "SINDHURA COLLEGE OF ENGINEERING & TECHNOLOGY, KARIMNAGAR",
        "SLC'S INSTITUTE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "SPHOORTHY ENGINEERING COLLEGE, RANGA REDDY",
        "SPRING FIELDS ENGINEERING COLLEGE, HYDERABAD",
        "SREE CHAITANYA COLLEGE OF ENGINEERING, KARIMNAGAR",
        "SREE CHAITANYA INSTITUTE OF PHARMACEUTICAL SCIENCES, KARIMNAGAR",
        "SREE CHAITANYA INSTITUTE OF TECHNOLOGICAL SCIENCES, KARIMNAGAR",
        "SREE CHAITANYA P.G. COLLEGE (MBA PROGRAMME), KARIMNAGAR",
        "SREE DATTHA GROUP OF INSTITUTIONS, RANGA REDDY",
        "SREE DATTHA INSTITUTE OF ENGINEERING AND SCIENCE, RANGA REDDY",
        "SREE DATTHA SCHOOL OF BUSINESS MANAGEMENT, Mahabub Nagar",
        "SREE RAMA INSTITUTE OF THECNOLOGY & SCIENCE, KHAMMAM",
        "SREE VISVESVARAYA INSTITUTE OF TECHNOLOGY & SCIENCE, MAHABUBNAGAR",
        "SREEKAVITHA ENGINEERING COLLEGE, KHAMMAM",
        "SREENIDHI INSTITUTE OF SCIENCE & TECHNOLOGY, MEDCHAL",
        "SREYAS INSTITUTE OF ENGINEERING AND TECHNOLOGY, RANGA REDDY",
        "SRI CHAITANYA TECHNICAL CAMPUS, RANGA REDDY",
        "SRI INDU COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "SRI INDU INSTITUTE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "SRI SAI EDUCATIONAL SOCIETY’S GROUP OF INSTITUTIONS, SURYAPET",
        "SRI VENKATESWARA ENGINEERING COLLEGE, SURYAPET",
        "SRIDEVI WOMEN'S ENGINEERING COLLEGE, RANGA REDDY",
        "SRR COLLEGE OF PHARMACEUTICAL SCIENCES, WARANGAL (URBAN)",
        "ST. MARTIN'S ENGINEERING COLLEGE, MEDCHAL",
        "ST. MARY'S ENGINEERING COLLEGE, YADADRI BHUVANAGIRI",
        "ST. MARY'S GROUP OF INSTITUTIONS HYDERABAD, RANGA REDDY",
        "ST. MARY’S INTEGRATED CAMPUS HYDEDRABAD, RANGA REDDY",
        "ST. PETER'S ENGINEERING COLLEGE, MEDCHAL",
        "SUDHEER REDDY COLLEGE OF ENGINEERING & TECHNOLOGY FOR WOMEN, NIZAMABAD",
        "SUJALA BHARATI INSTITUTE OF TECHNOLOGY, WARANGAL (RURAL)",
        "SUMATHI REDDY INSTITUTE OF TECHNOLOGY FOR WOMEN, WARANGAL (URBAN)",
        "SUPRABHATH PG COLLEGE, YADADRI BHUVANAGIRI",
        "SVS GROUP OF INSTITUTIONS, WARANGAL (URBAN)",
        "SWAMI RAMANANDA TIRTHA INSTITUTE OF PHARMACEUTICAL SCIENCES, NALGONDA",
        "SWAMI RAMANANDA TIRTHA INSTITUTE OF SCIENCE & TECHNOLOGY, NALGONDA",
        "SWAMI VIVEKANANADA INSTITUE OF TECHNOLOGY, HYDERABAD",
        "SWAMI VIVEKANANDA INSTITUTE OF PHARMACEUTICAL SCIENCES, YADADRI BHUVANAGIRI",
        "SWARNA BHARATHI COLLEGE OF ENGINEERING, KHAMMAM",
        "SWRNA BHARATHI INSTITUTE OF SCIENCE AND TECHNOLOGY, KHAMMAM",
        "TALLA PADMAVATHI COLLEGE OF ENGINEERING, WARANGAL (URBAN)",
        "TEEGALA KRISHNA REDDY ENGINEERING COLLEGE, RANGA REDDY",
        "TEJA COLLEGE OF PHAMACY, SURYAPET",
        "TIRUMALA ENGINEERING COLLEGE, MEDCHAL",
        "TKR COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "TRINITY COLLEGE OF ENGINEERING & TECHNOLOGY, KARIMNAGAR",
        "TRINITY COLLEGE OF ENGINEERING AND TECHNOLOGY, PEDDAPALLI",
        "TRR COLLEGE OF ENGINEERING, SANGAREDDY",
        "TRV COLLEGE OF ENGINEERING & TECHNOLOGY, Mahaboobnagar",
        "UNITY P.G. COLLEGE, YADADRI BHUVANAGIRI",
        "VAAGDEVI COLLEGE OF ENGINEERING, WARANGAL (URBAN)",
        "VAAGDEVI ENGINEERING COLLEGE, WARANGAL (URBAN)",
        "VAAGESWARI COLLEGE OF ENGINEERING, KARIMNAGAR",
        "VAAGESWARI INSTITUTE OF MANAGEMENT SCIENCES, KARIMNAGAR",
        "VAAGESWARI INSTITUTE OF PHARMACEUTICAL SCIENCES, KARIMNAGAR",
        "VARDHAMAN COLLEGE OF ENGINEERING, RANGA REDDY",
        "VATHSALYA INSTITUTE OF SCIENCE AND TECHNOLOGY, YADADRI BHUVANAGIRI",
        "VENKATESHWARA INSTITUTE OF PHARMACEUTICAL SCIENCES, NALGONDA",
        "VIDYA JYOTHI INSTITUTE OF TECHNOLOGY, RANGA REDDY",
        "VIGNAN INSTITUTE OF PHARMACEUTICAL SCIENCES, YADADRI BHUVANAGIRI",
        "VIGNAN INSTITUTE OF TECHNOLOGY & SCIENCE, YADADRI BHUVANAGIRI",
        "VIGNAN’S INSTITUTE OF MANAGEMENT AND TECHNOLOGY FOR WOMEN, MEDCHAL",
        "VIGNAN’S INSTITUTE OF TECHNOLOGY & AERONAUTICAL ENGINEERING, YADADRI BHUVANAGIRI",
        "VIGNANA BHARATHI ENGINEERING COLLEGE, RANGA REDDY",
        "VIGNANA BHARATHI INSTITUTE OF TECHNOLOGY, MEDCHAL",
        "VIJAY RURAL ENGINEERING COLLEGE, NIZAMABAD",
        "VIJAYA ENGINEERING COLLEGE, KHAMMAM",
        "VIJAYA KRISHNA INSTITUTE OF TECHNOLOGY AND SCIENCE, RANGA REDDY",
        "VIKAS COLLEGE OF PHARMACEUTICAL SCIENCES, SURYAPET",
        "VISHNU INSTITUTE OF PHARMACEUTICAL EDUCATION & RESEARCH, MEDAK",
        "VISHWA BHARATHI PG COLLEGE OF ENGINEERING & MANAGEMENT, HYDERABAD",
        "VISHWA BHARATHI PG COLLEGE OF ENGINEERING & MANAGEMENT, RANGA REDDY",
        "VISION COLLEGE OF PHARMACEUTICAL SCIENCES & RESEARCH, MEDCHAL",
        "VISVESVARAYA COLLEGE OF ENGINEERING & TECHNOLOGY, RANGA REDDY",
        "VIVEKANANDA INSTITUTE OF SCIENCE & INFORMATION TECHNOLOGY, RANGA REDDY",
        "VIVEKANANDA INSTITUTE OF TECHNOLOGY & SCIENCE, KARIMNAGAR",
        "VIVEKANANDA INSTUTE OF ENGINEERING & TECHNOLOGY, MEDCHAL",
        "VNR VIGNANA JYOTHI INSTITUTE OF ENGINEERING & TECHNOLOGY, MEDCHAL",
        "OTHER"
    ],
    "JNTU Kakinada": [
        "JNTU-K College of Engineering",
        "University College of Engineering Narasaraopet",
        "Gayatri Vidya Parishad College of Engineering",
        "Sagi Rama Krishnam Raju Engineering College"
    ],
    "JNTU Anantapur": [
        "JNTUA College of Engineering",
        "G. Pulla Reddy Engineering College",
        "Madanapalle Institute of Technology & Science"
    ],
    "Anna University Chennai": [
        "College of Engineering, Guindy (CEG)",
        "Madras Institute of Technology (MIT)",
        "SSN College of Engineering",
        "PSG College of Technology"
    ]
};

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

const FeatureCard = ({ number, title, desc }: any) => (
    <div className="flex items-start gap-4 group p-2">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-slate-800 text-base mb-1">{title}</h4>
            <p className="text-slate-500 text-[13px] leading-relaxed">{desc}</p>
        </div>
    </div>
);

const WhyCard = ({ title, items, icon: Icon, color }: any) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50 hover:shadow-md transition-shadow relative overflow-hidden group h-full">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-50/50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150`} />
        <div className={`w-12 h-12 rounded-xl bg-${color}-50 flex items-center justify-center mb-4 relative z-10`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <h4 className="font-bold text-slate-800 text-lg mb-4 relative z-10">{title}</h4>
        <ul className="space-y-3 relative z-10">
            {items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-relaxed">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400 mt-1.5 flex-shrink-0`} />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

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
                                <h1 className="text-[1.8rem] md:text-3xl lg:text-[2.8rem] xl:text-[3.2rem] font-black leading-tight">
                                    <span className="text-indigo-600">Learn Smart.</span>{" "}
                                    <span className="text-purple-600">Learn Fast.</span>
                                </h1>
                                <h2 className="text-xl md:text-2xl lg:text-[2.2rem] xl:text-[2.5rem] font-bold text-slate-700">One Stop Solution</h2>
                                <p className="text-sm md:text-base text-slate-500 font-medium whitespace-nowrap">for Your Semester Exam Preparation.</p>
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
                            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-[0_15px_50px_rgba(30,30,30,0.05)] border border-slate-100/80 w-full max-w-[420px]">
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
                                    <div className="relative">
                                        <select
                                            value={formData.college}
                                            onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                            disabled={!formData.university}
                                            className="w-full h-11 rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 appearance-none focus:outline-none focus:ring-1 focus:ring-indigo-100 disabled:bg-slate-50"
                                        >
                                            <option value="">Select College</option>
                                            {colleges.map(college => <option key={college} value={college}>{college}</option>)}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                    </div>
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
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <div className="inline-block bg-indigo-600 text-white rounded px-6 py-2.5 text-xl font-bold mb-16">
                        Get an Extra - Edge with <span className="font-black">SemesterPrep</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                        <div>
                            <img src="/images/semester_prep_hero_v3.png" alt="Features Illustration" className="w-full max-w-[500px] mx-auto opacity-80" />
                        </div>
                        <div className="space-y-6">
                            <FeatureCard number="1" title="Univ. Sem Exam PYQ's & Answers" desc="10,000+ Univ. Sem Exam Prev. Year Questions & Answers Covering 120 + Subjects" />
                            <FeatureCard number="2" title="Curated by Subject Experts" desc="Detailed Explanation of Answers from Top-Notch Subject Experts" />
                            <FeatureCard number="3" title="Univ. Sem Exam PYQ.Papers" desc="Repository of Subject-wise Univ. Sem Exam Prev. Year Q.Papers" />
                            <FeatureCard number="4" title="University Updates" desc="One Stop Destination for all University Exam Updates." />
                            <FeatureCard number="5" title="Career Guidance" desc="Complete Guidance on Various Career Options after Graduation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SemesterPrep Section */}
            <section className="py-20 bg-[#f8f7ff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h3 className="text-3xl font-black text-center text-slate-800 mb-16">Why <span className="text-indigo-600">SemesterPrep?</span></h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <WhyCard
                            color="indigo" icon={Play}
                            title="Watch anytime"
                            items={["Subject Videos by Expert Faculty", "Classes through Interactive LMS", "Detailed Class Notes of the Video"]}
                        />
                        <WhyCard
                            color="purple" icon={BookOpen}
                            title="Learn form anywhere"
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
                        <div className="lg:col-span-1 flex items-center justify-center">
                            <img src="/images/semester_prep_hero_v3.png" className="w-48 h-auto opacity-50" />
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
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-left">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden shadow-lg">
                                        <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{rev.name}</h4>
                                        <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">{rev.year}</p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-white/90 italic">"{rev.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-1 space-y-6">
                            <h4 className="text-white font-black text-xl">About Us</h4>
                            <p className="text-[13px] leading-relaxed text-slate-400">
                                SemesterPrep is a One Stop Solution for all the Students in order to Score a High Percentage/CGPA in the University Semester Exams. We offer Content Curated by Academic Experts which has detailed Explanation of Answers to the University Semester Exam PYQs. We also Provide University Semester Exam PYQ Papers, Objective Type Q&A’s and many more. Apart From these, we also Provide Regular Updates on University Exams, Syllabus, Time Tables etc. We also Provide Guidance for Various Career Options in India and Abroad by giving Regular Updates. This Content Can be Accessed through Browser & App.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-black text-xl mb-6">Branches</h4>
                            <div className="flex flex-wrap gap-x-2 gap-y-3 text-[12px] text-slate-400 font-bold">
                                <span>EC | EE | ME</span>
                                <span>CE | AI | IT</span>
                                <span>CS | DS | AI & DS</span>
                                <span>CYBER SECURITY</span>
                                <span>IoT And Other Branches..</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white font-black text-xl mb-6">Email us</h4>
                                <p className="text-indigo-400 text-sm font-black whitespace-nowrap">info@semesterprep.in</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-white font-black text-[11px] tracking-widest uppercase">Download SEMESTERPREP App Now!!</p>
                                <div className="flex flex-col gap-3">
                                    <img
                                        onClick={() => toast.info("Android app link coming soon!")}
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        className="h-9 w-fit cursor-pointer hover:scale-105 transition-transform"
                                    />
                                    <img
                                        onClick={() => toast.info("iOS app link coming soon!")}
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                        className="h-9 w-fit cursor-pointer hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-black text-xl mb-6">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/SemesterPrep-100588706273075" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com/SemesterPrep" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/semesterprep22/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/company/semesterprep/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-800/60 mb-10" />

                    <div className="grid md:grid-cols-3 gap-12 text-[12px] text-slate-400 font-bold uppercase tracking-wider">
                        <div className="space-y-4">
                            <h5 className="text-white text-sm font-black tracking-widest">Courses Available for</h5>
                            <ul className="space-y-2.5">
                                <li className="hover:text-white cursor-pointer transition-colors">Anna University Chennai</li>
                                <li className="hover:text-white cursor-pointer transition-colors">JNTU Anantapur</li>
                                <li className="hover:text-white cursor-pointer transition-colors">JNTU Kakinada</li>
                                <li className="hover:text-white cursor-pointer transition-colors">JNTU Hyderabad</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-white text-sm font-black tracking-widest">Quick Links</h5>
                            <ul className="space-y-2.5">
                                <li onClick={() => toast.info("FAQ is coming soon!")} className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                                <li onClick={() => toast.info("Terms and Conditions page is coming soon!")} className="hover:text-white cursor-pointer transition-colors">Terms and Conditions</li>
                                <li onClick={() => toast.info("Privacy Policy page is coming soon!")} className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="text-white text-sm font-black tracking-widest">Our Courses</h5>
                            <ul className="space-y-2.5">
                                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white cursor-pointer transition-colors">Engineering</li>
                                <li><Link to="/training-programs" className="hover:text-white cursor-pointer transition-colors">CRT</Link></li>
                                <li><Link to="/myskillforge" className="hover:text-white cursor-pointer transition-colors">DSA</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-800/40 text-center text-slate-500 text-[11px]">
                        © 2024 Learnsquere Technologies. All rights reserved.
                    </div>
                </div>
            </footer>

            <WhatsAppButton />
        </div>
    );
};

export default SemesterPrepPage;
