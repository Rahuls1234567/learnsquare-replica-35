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
            className="min-h-screen bg-white relative overflow-x-hidden"
        >
            <Navbar />

            <main className="relative pt-32 pb-24">
                {/* Background Decorations - Enhanced with Lines */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Perspective Lines */}
                    <svg className="absolute w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                                <stop offset="50%" stopColor="#4F46E5" stopOpacity="1" />
                                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <line x1="0" y1="20" x2="100" y2="80" stroke="url(#line-gradient)" strokeWidth="0.1" />
                        <line x1="0" y1="80" x2="100" y2="20" stroke="url(#line-gradient)" strokeWidth="0.1" />
                        <line x1="20" y1="0" x2="80" y2="100" stroke="url(#line-gradient)" strokeWidth="0.1" />
                        <line x1="80" y1="0" x2="20" y2="100" stroke="url(#line-gradient)" strokeWidth="0.1" />
                    </svg>

                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-50/30 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6">
                    {/* Top Badge */}
                    <div className="flex justify-center mb-16">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-[#7c66dc] text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl shadow-purple-200/50"
                        >
                            Training Programs
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col h-full justify-between space-y-8 py-2"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 w-full mx-auto lg:mx-0 flex items-center justify-center p-4"
                                >
                                    <img
                                        src="/images/homeimage/training program.png"
                                        alt="Training Programs Illustration"
                                        className="w-full h-auto max-h-[320px] object-contain"
                                    />
                                </motion.div>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight tracking-tight">
                                    Comprehensive <span className="text-[#4F46E5]">Training Programs designed</span> for Students seeking to stay ahead in today’s competitive landscape
                                </h1>
                                <p className="text-slate-500 font-bold text-lg leading-relaxed">
                                    Unlock Skills, Anytime, Anywhere – Learn, Grow, Succeed with Us!
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Content: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-2xl font-black text-slate-800 text-center mb-10 relative z-10">Contact Us Today</h2>

                            <form className="space-y-5 relative z-10">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <Input placeholder="First Name*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input placeholder="Last Name*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <Input placeholder="Whatsapp No.*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input placeholder="Email*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <Input placeholder="College Name*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <Input placeholder="City*" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        placeholder="Message*"
                                        className="min-h-[120px] rounded-xl border-slate-200 bg-slate-50/50 font-bold px-6 py-4 focus:ring-2 focus:ring-purple-100 placeholder:text-slate-400 transition-all resize-none"
                                    />
                                </div>

                                <div className="flex justify-center pt-4">
                                    <Button className="h-12 px-16 rounded-full bg-[#ede9fe] text-slate-900 font-black text-lg hover:bg-[#ddd6fe] transition-all shadow-xl active:scale-95 group/btn border-none">
                                        Submit !!
                                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Our Training Programs Section */}
                    <div className="mt-40 space-y-16">
                        <div className="text-center">
                            <h2 className="text-4xl font-black text-slate-800 tracking-tight">Our Training Programs</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {programs.map((prog, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all group"
                                >
                                    <div className="relative overflow-hidden rounded-xl aspect-video mb-6">
                                        <img
                                            src={prog.img}
                                            alt={prog.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="space-y-4 px-2 mb-6">
                                        <h3 className="text-xl font-black text-slate-800">{prog.title}</h3>
                                        <p className="text-slate-500 font-bold text-sm leading-relaxed">
                                            {prog.desc}
                                        </p>
                                    </div>
                                    <div className="flex gap-3 px-2">
                                        <Button
                                            variant="ghost"
                                            onClick={() => setSelectedProgram(prog)}
                                            className="rounded-full bg-[#ede9fe] text-[#7c66dc] font-black text-xs px-6 hover:bg-[#d8d1fd]"
                                        >
                                            View
                                        </Button>
                                        {prog.title !== "Python Full Stack" && (
                                            <Button className="rounded-full bg-[#7c66dc] text-white font-black text-xs px-6 hover:bg-[#5a48bd]">
                                                Explore More
                                            </Button>
                                        )}
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
