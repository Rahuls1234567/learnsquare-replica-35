import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AntigravityBackground from "@/components/AntigravityBackground";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-background relative overflow-x-hidden"
        >
            <AntigravityBackground />
            <Navbar />

            <main className="relative pt-32 pb-40">
                {/* Background Decorative Waves and Glow - Limited to Hero Area */}
                <div className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none overflow-hidden">
                    {/* Glowing Circle behind text */}
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-60" />

                    {/* Waves */}
                    <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 400C200 300 400 600 720 400C1040 200 1240 500 1540 400" stroke="url(#gradient-contact)" strokeWidth="1" strokeDasharray="15 15" />
                        <path d="M-100 500C200 400 400 700 720 500C1040 300 1240 600 1540 500" stroke="url(#gradient-contact)" strokeWidth="1.5" />
                        <defs>
                            <linearGradient id="gradient-contact" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366f1" />
                                <stop offset="1" stopColor="#a855f7" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Hero Section */}
                <div className="container relative z-10 flex flex-col items-center justify-center text-center">
                    {/* Contact Us Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-10 py-4 rounded-full bg-[#7c66dc] text-white font-bold text-lg shadow-2xl shadow-primary/20 mb-16"
                    >
                        Contact us
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl text-slate-700 leading-tight tracking-tight max-w-5xl mx-auto mb-8"
                    >
                        Connect with Us to Explore{" "}
                        <span className="font-bold text-slate-800 tracking-tighter">
                            Innovative Tech Solutions
                        </span>{" "}
                        <span className="font-bold text-slate-800 tracking-tighter block md:inline md:ml-2">for a Smarter Future</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-[#5e6282] font-semibold text-sm md:text-base tracking-wide"
                    >
                        Empowering Institutions to Deliver Excellence with Cutting-Edge Technology
                    </motion.p>
                </div>

                {/* Contact Form Section */}
                <div className="container mt-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        {/* Left Side: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-[#1a2b4b]">Contact us</h2>
                                <p className="text-[#5e6282] text-lg font-medium leading-relaxed max-w-md">
                                    Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                                        <MapPin className="w-5 h-5 text-slate-700" />
                                    </div>
                                    <p className="text-[#1a2b4b] font-medium text-[15px] leading-relaxed max-w-[280px]">
                                        B- Block, Mayflower Heights, Mallapur, Nacharam, Hyderabad 500076
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm">
                                        <Phone className="w-5 h-5 text-slate-700" />
                                    </div>
                                    <p className="text-[#1a2b4b] font-medium text-[15px]">9000177063</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm">
                                        <Mail className="w-5 h-5 text-slate-700" />
                                    </div>
                                    <p className="text-[#1a2b4b] font-medium text-[15px]">hello@learnsquare.co</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="First Name*"
                                            className="h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            placeholder="Last Name*"
                                            className="h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Email*"
                                        className="h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        className="h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Textarea
                                        placeholder="Your message..."
                                        className="min-h-[160px] bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 resize-none pt-4"
                                    />
                                </div>

                                <Button
                                    className="w-full h-14 bg-[#d9d5f7] hover:bg-[#c9c4f5] text-[#1a2b4b] font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-primary/5 active:scale-[0.98]"
                                >
                                    Submit !!
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppButton />
        </motion.div>
    );
};

export default Contact;
