import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Send, Zap, BookOpen, Star, Rocket, Target, X } from "lucide-react";

const TrainingProgramsPage = () => {
    const [selectedProgram, setSelectedProgram] = useState<any>(null);

    const programs = [
        {
            id: "crt",
            title: "CRT",
            desc: "Equip students with comprehensive skills in Aptitude, Verbal, Reasoning & Soft Skills",
            img: "/images/illustrations/crt_program.png",
            details: [
                {
                    subtitle: "Generative AI",
                    items: [
                        "Fundamentals of Generative",
                        "AI Introduction to Azure OpenAI Service",
                        "Experience GenAI with Python",
                        "Google GenAI Experience",
                        "Introduction to Large Language Models",
                        "Fundamentals of Prompt Engineering",
                        "Planning a Responsible GenAI",
                        "Examples and Hands-on"
                    ]
                },
                {
                    subtitle: "Prompt Engineering",
                    items: [
                        "Introduction to AI",
                        "Introduction to Conversational AI and Chatbots",
                        "Introduction to Models and Gpt-4",
                        "Introduction to Prompt Engineering",
                        "Basics of Prompt Engineering",
                        "Advanced Prompt Engineering",
                        "Practical Applications and Case Studies",
                        "Prompt Patterns",
                        "Hands on Examples"
                    ]
                }
            ]
        },
        {
            id: "data-science",
            title: "Data Science",
            desc: "Equip students with comprehensive Data Science skills in Python and R for Data Analysis",
            img: "/images/illustrations/data_science.png",
            details: [
                {
                    subtitle: "Foundation",
                    items: ["PYTHON Programming", "R Programming"]
                },
                {
                    subtitle: "Data Manipulation",
                    items: ["NumPy and PANDAS for Python", "Base R & dplyr for R"]
                },
                {
                    subtitle: "Data Visualization",
                    items: ["Matplotlib & Seaborn for Data Visualization"]
                },
                {
                    subtitle: "Statistical Analysis",
                    items: ["SciPy & Statsmodels for Statistical Analysis", "Git for Version Control"]
                },
                {
                    subtitle: "Project Development",
                    items: [
                        "Project structure, Code organization and Documentation - Best Practices",
                        "Comprehensive Project using Python & R Project Deployment",
                        "Deploying to Server",
                        "AWS (Amazon Web Services)"
                    ]
                }
            ]
        },
        {
            id: "python-fullstack",
            title: "Python Full Stack",
            desc: "Equip students with the skills to develop, implement, and deploy full-stack web applications",
            img: "/images/illustrations/python_fullstack.png",
            details: [
                {
                    subtitle: "Frontend Development",
                    items: ["HTML5", "CSS", "JavaScript", "React Programming"]
                },
                {
                    subtitle: "Backend Development",
                    items: ["PYTHON Programming", "FLASK Framework for PYTHON", "RESTful API's using FLASK"]
                },
                {
                    subtitle: "Databases",
                    items: ["SQL vs NOSQL Databases", "MSSQL", "MongoDB", "Data Modelling in NOSQL"]
                },
                {
                    subtitle: "Project Development",
                    items: ["Project Structure, Code Organization and Documentation - Best Practices", "Comprehensive Project using FLASK & React"]
                },
                {
                    subtitle: "Project Deployment",
                    items: ["Deploying to Server AWS (Amazon Web Services)"]
                }
            ]
        },
        {
            id: "java-fullstack",
            title: "Java Full Stack",
            desc: "Equip students with the skills to develop, implement, and deploy full-stack web applications",
            img: "/images/illustrations/java_fullstack.png",
            details: [
                {
                    subtitle: "Frontend Development",
                    items: ["HTML5", "CSS", "JavaScript", "React Programming"]
                },
                {
                    subtitle: "Backend Development",
                    items: ["JAVA Programming", "SPRING Framework Basics", "RESTful API's using SPRING Boot"]
                },
                {
                    subtitle: "Databases",
                    items: ["SQL vs NOSQL Databases", "MSSQL", "MongoDB", "Data Modelling in NOSQL"]
                },
                {
                    subtitle: "Project Development",
                    items: ["Frontend Development - REACT", "Backend - NODE.JS", "Database Integration", "UI/UX Design"]
                },
                {
                    subtitle: "Project Deployment",
                    items: ["Deploying to Server AWS (Amazon Web Services)"]
                }
            ]
        },
        {
            id: "mern-stack",
            title: "Mern Stack",
            desc: "Equip students with comprehensive skills in Python Programming, Web Development",
            img: "/images/illustrations/mern_stack.png",
            details: [
                {
                    subtitle: "Frontend Development",
                    items: ["HTML5", "CSS", "JavaScript", "React Programming"]
                },
                {
                    subtitle: "Backend Development",
                    items: ["NODE.JS", "Express.JS", "REST API Development"]
                },
                {
                    subtitle: "Databases",
                    items: ["SQL vs NOSQL Databases", "MSSQL", "MongoDB", "Data Modelling in NOSQL"]
                },
                {
                    subtitle: "Project Development",
                    items: ["Frontend Development - REACT", "Backend - NODE.JS", "Database Integration", "UI/UX Design"]
                },
                {
                    subtitle: "Project Deployment",
                    items: ["Deploying to Server AWS (Amazon Web Services)"]
                }
            ]
        },
        {
            id: "mobile-dev",
            title: "Mobile Development Full Stack",
            desc: "Refers to proficiency in both front-end and back-end aspects of mobile app development",
            img: "/images/illustrations/mobile_dev.png",
            details: [
                {
                    subtitle: "Frontend Development",
                    items: ["DART Programming", "The FLUTTER Framework"]
                },
                {
                    subtitle: "Backend Development",
                    items: ["NODE.JS", "Express.JS", "REST API Development"]
                },
                {
                    subtitle: "Databases",
                    items: ["SQL vs NOSQL Databases", "MSSQL", "MongoDB", "Data Modelling in NOSQL"]
                },
                {
                    subtitle: "Project Development",
                    items: ["Frontend Development - FLUTTER & DART", "Backend - NODE.JS", "Database Integration", "UI/UX Design"]
                },
                {
                    subtitle: "Project Deployment",
                    items: ["Deploying to Server AWS (Amazon Web Services)"]
                }
            ]
        },
        {
            id: "cyber-security",
            title: "Cyber Security and Ethical Hacking",
            desc: "Proactively identify and address security risks, protect digital assets, uphold ethical standards",
            img: "/images/illustrations/cyber_security.png",
            details: [
                {
                    subtitle: "Introduction to Cyber Security",
                    items: [
                        "Cyber Threat Landscape",
                        "Basics of Information Security",
                        "Common Cyber Attacks",
                        "Legal and Ethical Considerations"
                    ]
                },
                {
                    subtitle: "Networking & Operating Systems Security",
                    items: [
                        "Networking Fundamentals",
                        "Network Security Concepts",
                        "Operating Systems Security (Windows and Linux)",
                        "User Authentication and Authorization"
                    ]
                },
                {
                    subtitle: "Cryptography and Web Application Security",
                    items: [
                        "Basics of Cryptography",
                        "Web Application Architecture",
                        "Common Web Application Vulnerabilities",
                        "Web Application Security Best Practices"
                    ]
                },
                {
                    subtitle: "Network Security and Ethical Hacking Fundamentals",
                    items: [
                        "Network Security Protocols",
                        "Wireless Network Security",
                        "Introduction to Ethical Hacking",
                        "Reconnaissance and Scanning Techniques"
                    ]
                },
                {
                    subtitle: "Exploitation Techniques and Post Exploitation",
                    items: [
                        "Exploitation Fundamentals",
                        "Social Engineering Attacks",
                        "Post Exploitation Techniques",
                        "Privilege Escalation"
                    ]
                },
                {
                    subtitle: "Incident Response and Digital Forensics",
                    items: [
                        "Incident Response Fundamentals",
                        "Digital Forensics Fundamentals",
                        "Network and Disk Forensics",
                        "Incident Handling Procedures"
                    ]
                },
                {
                    subtitle: "Cyber Security Tools and Defensive Measures",
                    items: [
                        "Introduction to Cyber Security Tools",
                        "Intrusion Detection Systems",
                        "Security Information and Event Management (SIEM)",
                        "Endpoint Security"
                    ]
                },
                {
                    subtitle: "Security Auditing and Compliance",
                    items: [
                        "Security Auditing Fundamentals",
                        "Compliance Frameworks",
                        "Security Standards and Best Practices",
                        "Security Assessment and Penetration Testing"
                    ]
                },
                {
                    subtitle: "Emerging Technologies and Career Development",
                    items: [
                        "IoT Security",
                        "Cloud Security",
                        "Artificial Intelligence in Cyber Security",
                        "Resume Building and Interview Skills"
                    ]
                },
                {
                    subtitle: "Project Development & Deployment",
                    items: [
                        "Hands-on Capstone Project",
                        "Project Presentations"
                    ]
                }
            ]
        },
        {
            id: "iot",
            title: "Internet of Things (IoT)",
            desc: "Is to create a network of interconnected devices that can communicate, collect, and exchange data over the internet",
            img: "/images/illustrations/iot.png",
            details: [
                {
                    subtitle: "Introduction to IoT",
                    items: [
                        "Introduction to IoT and how it works in Real-world",
                        "Real-world IoT applications across various domains and future in IoT",
                        "Careers in IoT (Job Opportunities, Skillsets)",
                        "Activity: Brainstorming on potential IoT projects"
                    ]
                },
                {
                    subtitle: "Introduction to Hardware Platforms",
                    items: [
                        "Introduction to Arduino & Raspberry Pi",
                        "Explaining Applications in Real World",
                        "Categories, Architectures and Features",
                        "Activity: Familiarization with Arduino/Raspberry Pi boards"
                    ]
                },
                {
                    subtitle: "Intro to Sensors and Interfacing",
                    items: [
                        "Introduction to Sensors and Actuators",
                        "Sensor Analog/Digital Interfacing with NodeMCU",
                        "Understanding Ports and Connections",
                        "Activity: Reading sensor data on NodeMCU using simple code"
                    ]
                },
                {
                    subtitle: "Programming Languages for IoT",
                    items: [
                        "Introduction to Programming for IoT",
                        "Introduction to Arduino IDE (Integrated Development Environment)",
                        "Basic Programming Concepts (Variables, Data Types, Control Flow)",
                        "Activity: Demonstrating simple programs on IDE"
                    ]
                },
                {
                    subtitle: "Programming Methodologies for IoT",
                    items: [
                        "Functions, Loops, and Conditional Statements in Programming",
                        "Object-Oriented Programming (OOP) Concepts for IoT Applications",
                        "Libraries and Frameworks for Rapid Development (Brief Introduction)",
                        "Activity: Implementing functions and External Libraries"
                    ]
                },
                {
                    subtitle: "Networking, APIs, and Cloud Databases",
                    items: [
                        "The Need for Networking in IoT",
                        "Introduction to APIs (Application Programming Interfaces) for Data Exchange",
                        "Cloud Databases for IoT Data Storage and Management",
                        "Activity: Understanding how data is sent to the cloud"
                    ]
                },
                {
                    subtitle: "Demo Project",
                    items: [
                        "Showcase a project that integrates all concepts covered",
                        "Explain the code flow and functionality of the demo project"
                    ]
                },
                {
                    subtitle: "Project Development & Deployment",
                    items: [
                        "Divide students into teams and assign project ideas",
                        "Provide guidance and support for project development",
                        "Students work on their projects, implementing sensors, programming logic, and data handling"
                    ]
                }
            ]
        },
        {
            id: "blockchain",
            title: "Blockchain Technology",
            desc: "Blockchain Technology is to offer a decentralized, secure, and transparent way to record transactions",
            img: "/images/illustrations/blockchain.png",
            details: [
                {
                    subtitle: "Introduction to Blockchain",
                    items: [
                        "Introduction to Blockchain Technology",
                        "Scenarios & Challenges Articulated",
                        "Blockchain Characteristics & Opportunities Using Blockchain",
                        "History & Evolution of Blockchain",
                        "Centralized vs Decentralized Applications",
                        "Stages in Blockchain Evolution"
                    ]
                },
                {
                    subtitle: "Blockchain Ecosystem",
                    items: [
                        "Consortia & Forks",
                        "Public Blockchain Environments",
                        "Type of Players in Blockchain Ecosystem",
                        "Blockchain Technologies & Concepts",
                        "Where to run Blockchain",
                        "Blockchain Technologies in Use"
                    ]
                },
                {
                    subtitle: "Blockchain Risks and Transactions",
                    items: [
                        "Risk Associated with Blockchain Solutions",
                        "Life Cycle of Blockchain Transaction"
                    ]
                },
                {
                    subtitle: "Architecting Blockchain Solutions",
                    items: [
                        "Introduction to Solution Architecture",
                        "Obstacles For Use Of Blockchain",
                        "Blockchain Relevance Evaluation Framework",
                        "Blockchain Solutions Reference Architecture",
                        "Types of Blockchain Application",
                        "Cryptographic Tokens"
                    ]
                },
                {
                    subtitle: "Enterprise Blockchain Solutions",
                    items: [
                        "Typical Solution Architecture for Enterprise Use Cases",
                        "Types of Blockchain Solutions",
                        "Architecture Considerations",
                        "Architecture With Blockchain Platforms",
                        "Approach For Designing Blockchain Applications"
                    ]
                },
                {
                    subtitle: "Practical Sessions and Assessments",
                    items: [
                        "Hands-on & Practical Assignments"
                    ]
                },
                {
                    subtitle: "Project Development & Deployment",
                    items: [
                        "Divide students into teams and assign project ideas",
                        "Provide guidance and support for project development",
                        "Students work on their projects"
                    ]
                }
            ]
        },
        {
            id: "cloud-computing",
            title: "Cloud Computing",
            desc: "Cloud Computing is to provide scalable, on-demand access to computing resources, including storage",
            img: "/images/illustrations/cloud_computing.png",
            details: [
                {
                    subtitle: "Introduction to Cloud Computing",
                    items: [
                        "Understanding Cloud Computing Concepts",
                        "Cloud Deployment Models",
                        "Cloud Computing Providers",
                        "Cloud Adoption Considerations"
                    ]
                },
                {
                    subtitle: "Cloud Infrastructure and Networking",
                    items: [
                        "Cloud Infrastructure Fundamentals",
                        "Networking in the Cloud",
                        "Cloud Storage Solutions",
                        "Scalability and Elasticity",
                        "High Availability and Disaster Recovery"
                    ]
                },
                {
                    subtitle: "Cloud Services and Management",
                    items: [
                        "Compute Services",
                        "Database Services",
                        "Serverless Computing",
                        "Monitoring and Management Tools"
                    ]
                },
                {
                    subtitle: "Cloud Security and Compliance",
                    items: [
                        "Cloud Security Fundamentals",
                        "Data Encryption and Key Management",
                        "Security Best Practices",
                        "Cloud Security Services"
                    ]
                },
                {
                    subtitle: "Cloud Application Development",
                    items: [
                        "Introduction to Cloud-Native Development",
                        "DevOps Practices for Cloud",
                        "Serverless Application Development",
                        "API Development and Management"
                    ]
                },
                {
                    subtitle: "Cloud Migration",
                    items: [
                        "Overview of Cloud Migration",
                        "Planning and Assessment",
                        "Data Migration Strategies",
                        "Application Migration Techniques"
                    ]
                },
                {
                    subtitle: "Project Development & Deployment",
                    items: [
                        "Divide students into teams and assign project ideas, provide guidance and support for project development.",
                        "Students work on their projects."
                    ]
                }
            ]
        },
        {
            id: "quantitative-aptitude",
            title: "Quantitative Aptitude",
            desc: "Number Systems, Percentages, Profit and Loss",
            img: "/images/illustrations/quantitative_aptitude.png",
            details: [
                {
                    subtitle: "Quantitative Aptitude",
                    items: [
                        "Number Systems",
                        "Percentages",
                        "Profit and Loss",
                        "Ratio Proportions and Equations",
                        "Mixtures and Allegations",
                        "Ages",
                        "Partnership",
                        "Averages",
                        "Time and Work",
                        "Pipes and Cisterns"
                    ]
                }
            ]
        },
        {
            id: "logical-reasoning",
            title: "Logical Reasoning",
            desc: "Directions, Clocks, Calendars",
            img: "/images/illustrations/logical_reasoning.png",
            details: [
                {
                    subtitle: "Logical Reasoning",
                    items: [
                        "Directions",
                        "Clocks",
                        "Calendars",
                        "Blood Relations",
                        "Number Series",
                        "Letter Series",
                        "Analogy",
                        "Odd Man",
                        "Out Coding and Decoding",
                        "Ranking",
                        "Element Series",
                        "Seating Arrangement",
                        "Puzzles",
                        "Counting Figures",
                        "Statements and Conclusions",
                        "Completion of Figure Series"
                    ]
                }
            ]
        },
        {
            id: "verbal-ability",
            title: "Verbal-Ability",
            desc: "Articles/Nouns/ Adjectives & Prepositions Rules, Sentence formation, Verbs, & S.V.A Rules",
            img: "/images/illustrations/verbal_ability.png",
            details: [
                {
                    subtitle: "Verbal-Ability",
                    items: [
                        "Articles/Nouns/ Adjectives & Prepositions Rules",
                        "Sentence formation, Verbs, & S.V.A Rules",
                        "Adverbs & Adjectives Rules",
                        "Vocabulary & Idioms / Phrases",
                        "Sentence Correction, Error Detection Rules & Approaches to Solve Questions",
                        "Sentence Completion & Para Jumbles & Approaches to Solve Questions",
                        "Reading Comprehension & Critical Reasoning (Speed Reading Techniques & Approaches)"
                    ]
                }
            ]
        },
        {
            id: "resume-interview-skills",
            title: "Resume Writing Interview Skills and Soft-Skills",
            desc: "Resume Writing, LinkedIn Profile Creation, Personal Interviews - Strategies and Tips",
            img: "/images/illustrations/resume_interview_skills.png",
            details: [
                {
                    subtitle: "Resume Writing Interview Skills and Soft-Skills",
                    items: [
                        "Resume Writing",
                        "LinkedIn Profile Creation",
                        "Personal Interviews - Strategies and Tips",
                        "Business Communication"
                    ]
                }
            ]
        },
        {
            id: "statistics-spss",
            title: "Statistics / Data Analysis in SPSS: Inferential Statistics",
            desc: "Statistics / Data Analysis in SPSS: Inferential Statistics",
            img: "/images/illustrations/statistics_spss.png",
            details: [
                {
                    subtitle: "Statistics / Data Analysis in SPSS: Inferential Statistics",
                    items: [
                        "This course includes: 5 hours on-demand video 15 downloadable resources Access on mobile and TV Certificate of completion"

                    ]
                }
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#f8fafc] relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative pt-24 pb-20 overflow-hidden">
                {/* Cinematic Background System */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply">
                        <img src="/images/premium_light_tech_bg.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    {/* Animated Technical Grids */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
                            backgroundSize: '100px 100px'
                        }}
                    />

                    {/* Cinematic Glows */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-600/10 rounded-full blur-[160px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.03, 0.08, 0.03]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[140px]"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    {/* Top Center Product Name - Purple Background, White Letters */}
                    <div className="flex justify-center pt-12 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="px-10 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs tracking-[0.5em] uppercase shadow-[0_10px_30px_rgba(124,102,220,0.3)] border border-white/20"
                        >
                            Training Programs
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
                        {/* Left Side: Cinematic Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-slate-950 space-y-12"
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black tracking-[0.4em] uppercase"
                                >
                                    <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span>EXPERT-LED TRAINING</span>
                                </motion.div>

                                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-normal tracking-tighter pt-2 pb-6">
                                    Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 italic inline-block pr-8 pb-1">Potential</span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 font-bold leading-relaxed max-w-xl">
                                    Advanced skill development for the next generation of engineers. Stay ahead with our comprehensive curriculum.
                                </p>
                            </div>

                            {/* Premium Mockup Display */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white aspect-video max-w-md">
                                    <img
                                        src="/images/training_programs_premium.png"
                                        alt="Training Dashboard"
                                        className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                                </div>


                            </motion.div>
                        </motion.div>

                        {/* Right Content: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-3xl rounded-[3rem] p-8 md:p-10 border border-indigo-50 shadow-[0_40px_100px_rgba(99,102,241,0.08)] relative group max-w-lg lg:ml-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-3">Request Access</h2>
                            </div>

                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input placeholder="First Name*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
                                    <Input placeholder="Last Name*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Input placeholder="Whatsapp No.*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
                                    <Input placeholder="Email*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
                                </div>
                                <Input placeholder="College Name*" className="h-12 rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold px-5 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" />
                                <Textarea placeholder="Tell us what you're looking for..." className="min-h-[100px] rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 font-bold p-5 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none text-sm" />

                                <div className="flex justify-center mt-6">
                                    <Button className="px-10 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] hover:scale-[1.02] transition-all group/btn">
                                        Get Started Now
                                        <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Our Training Programs Section */}
                    <div className="mt-48 space-y-20">
                        <div className="text-center space-y-4">
                            <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.4em]">Expert Led</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 leading-[1.2] pb-4">
                                Our Core Modules
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {programs.map((prog, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group relative bg-slate-50/50 rounded-[2.5rem] p-8 border border-indigo-100 hover:border-indigo-400/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]"
                                >
                                    {/* Texture & Glow */}
                                    <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <img src="/images/card_premium_texture.png" className="w-full h-full object-cover" alt="" />
                                    </div>
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px] group-hover:bg-purple-600/30 transition-all duration-500" />

                                    <div className="relative z-10 h-full flex flex-col">
                                        <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] mb-8 bg-slate-50">
                                            <img
                                                src={prog.img}
                                                alt={prog.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                                        </div>

                                        <div className="space-y-4 flex-grow">
                                            <h3 className="text-2xl font-black text-indigo-600 tracking-tight">{prog.title}</h3>
                                            <p className="text-slate-600 font-bold text-sm leading-relaxed line-clamp-2 italic">
                                                {prog.desc}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-100">
                                            <Button
                                                onClick={() => setSelectedProgram(prog)}
                                                className="flex-grow h-12 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 hover:text-white transition-all shadow-lg active:scale-95 border-none"
                                            >
                                                Curriculum Details
                                            </Button>
                                            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all text-slate-900">
                                                <Zap className="w-4 h-4 fill-current" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Program Details Modal */}
                    <Dialog open={!!selectedProgram} onOpenChange={(open) => !open && setSelectedProgram(null)}>
                        <DialogContent className="max-w-5xl p-0 overflow-hidden border-none rounded-2xl">
                            {selectedProgram && (
                                <div className="flex flex-col md:flex-row min-h-[500px] max-h-[90vh] overflow-y-auto md:overflow-hidden">
                                    {/* Left Side: Image */}
                                    <div className="md:w-1/2 bg-slate-900 relative p-4 flex items-center justify-center min-h-[300px] md:min-h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                                        <img
                                            src={selectedProgram.img}
                                            alt={selectedProgram.title}
                                            className="relative z-10 w-full h-full object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Right Side: Content */}
                                    <div className="md:w-1/2 p-8 md:p-12 bg-white relative overflow-y-auto">
                                        <button
                                            onClick={() => setSelectedProgram(null)}
                                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-600 z-20"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        <div className="space-y-8">
                                            <div>
                                                <h2 className="text-3xl font-black text-slate-900 mb-2">{selectedProgram.title}</h2>
                                            </div>

                                            <div className="space-y-8">
                                                {selectedProgram.details.map((section: any, sIdx: number) => (
                                                    <div key={sIdx}>
                                                        <h3 className="text-xl font-black text-slate-800 mb-4">{section.subtitle}</h3>
                                                        <ul className="space-y-2">
                                                            {section.items.map((item: string, iIdx: number) => (
                                                                <li key={iIdx} className="flex items-start gap-2 text-slate-600 font-bold text-sm">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default TrainingProgramsPage;
