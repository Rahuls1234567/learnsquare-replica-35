"use client";

import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import AntigravityBackground from "@/src/components/AntigravityBackground";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            whatsappNo: '',
            email: '',
            collegeName: '',
            message: ''
        }
    });

    const mutation = useMutation({
        mutationFn: async (data: any) => {
            return apiClient.post('/contact', data);
        },
        onSuccess: () => {
            toast.success("Message Sent!", {
                description: "We've received your inquiry and will get back to you soon. 🚀",
            });
            reset();
        },
        onError: () => {
            toast.error("Failed to send message", {
                description: "Please check your connection and try again.",
            });
        }
    });

    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };

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
                {/* Background Decorative Waves and Glow */}
                <div className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-60" />
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

                <div className="container relative z-10 flex flex-col items-center justify-center text-center mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-10 py-4 rounded-full bg-[#7c66dc] text-white font-bold text-lg shadow-2xl shadow-primary/20 mb-16"
                    >
                        Contact us
                    </motion.div>

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

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-[#5e6282] font-semibold text-sm md:text-base tracking-wide"
                    >
                        Empowering Institutions to Deliver Excellence with Cutting-Edge Technology
                    </motion.p>
                </div>

                <div className="container mt-40 mx-auto px-4">
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
                                <div className="space-y-4">
                                    <a
                                        href="https://maps.app.goo.gl/XetUsuvtNXGpzQqy7?g_st=ic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                                    >
                                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                                            <MapPin className="w-5 h-5 text-slate-700" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-slate-900 font-black text-sm uppercase tracking-wider">LEARNSQUARE</p>
                                            <p className="text-[#1a2b4b] font-medium text-[14px] leading-relaxed max-w-[320px]">
                                                Office: 3rd Floor, Bhaswa Business Park, Greenlands, Adjacent Lane to Tourist Plaza Hotel, Begumpet.
                                            </p>
                                        </div>
                                    </a>

                                    {/* Small Map Thumbnail */}
                                    <motion.a
                                        href="https://maps.app.goo.gl/XetUsuvtNXGpzQqy7?g_st=ic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        viewport={{ once: true }}
                                        className="block w-full max-w-[280px] h-32 ml-0 md:ml-14 rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative group"
                                    >
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                                            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#1a2b4b] shadow-xl">Open In Maps</span>
                                        </div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.452632283!2d78.4552467!3d17.437142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90afd668a73d%3A0xad635ebc1c738e4a!2sGST%20Bhaswa%20Business%20Park!5e0!3m2!1sen!2sin!4v1710173661159!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            className="grayscale-[30%] group-hover:grayscale-0 transition-all pointer-events-none"
                                        ></iframe>
                                    </motion.a>
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
                            className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100"
                        >
                            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Input
                                            {...register("firstName", { required: true })}
                                            placeholder="First Name*"
                                            className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.firstName ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            {...register("lastName", { required: true })}
                                            placeholder="Last Name*"
                                            className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.lastName ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        type="email"
                                        placeholder="Email*"
                                        className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        {...register("whatsappNo", { required: true })}
                                        type="tel"
                                        placeholder="Phone Number (WhatsApp)*"
                                        className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.whatsappNo ? 'border-red-500' : ''}`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        {...register("collegeName", { required: true })}
                                        placeholder="College / Organization Name*"
                                        className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.collegeName ? 'border-red-500' : ''}`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Textarea
                                        {...register("message", { required: true })}
                                        placeholder="Your message..."
                                        className={`min-h-[160px] bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 resize-none pt-4 ${errors.message ? 'border-red-500' : ''}`}
                                    />
                                </div>

                                <Button
                                    disabled={mutation.isPending}
                                    type="submit"
                                    className="w-full h-14 bg-[#7c66dc] hover:bg-[#6853c4] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg active:scale-[0.98] disabled:opacity-50 gap-2"
                                >
                                    {mutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {mutation.isPending ? "Sending..." : "Submit !!"}
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
