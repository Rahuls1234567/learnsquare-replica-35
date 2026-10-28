"use client";

import React from "react";
import { useRouter } from "next/navigation";
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
import { EditableContent } from "@/src/components/EditableContent";
import { FieldError, FormSuccess } from "@/src/components/FormFeedback";
import { rules } from "@/lib/validation";
import { SUPPORT_EMAIL, SUPPORT_PHONE, OFFICE_ADDRESS, OFFICE_FLOOR, OFFICE_MAP_URL, OFFICE_MAP_EMBED_URL } from "@/lib/contact";

const Contact = () => {
    const router = useRouter();
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
                        <EditableContent 
                            contentKey="contact_heading"
                            description="Contact Page Heading"
                            defaultContent={
                                <>
                                    Connect with Us to Explore{" "}
                                    <span className="font-bold text-slate-800 tracking-tighter">
                                        Innovative Tech Solutions
                                    </span>{" "}
                                    <span className="font-bold text-slate-800 tracking-tighter block md:inline md:ml-2">for a Smarter Future</span>
                                </>
                            }
                        />
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-[#5e6282] font-semibold text-sm md:text-base tracking-wide"
                    >
                        <EditableContent 
                            contentKey="contact_intro"
                            description="Contact Page Intro"
                            defaultContent={<p className="text-[#5e6282] font-semibold text-sm md:text-base tracking-wide">Empowering Institutions to Deliver Excellence with Cutting-Edge Technology</p>}
                        />
                    </motion.div>
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
                                <EditableContent
                                    contentKey="contact_section_heading"
                                    description="Contact Section Heading"
                                    defaultContent={<h2 className="text-4xl font-bold text-[#1a2b4b]">Contact us</h2>}
                                />
                                <EditableContent
                                    contentKey="contact_section_desc"
                                    description="Contact Section Description"
                                    defaultContent={
                                        <p className="text-[#5e6282] text-lg font-medium leading-relaxed max-w-md">
                                            Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.
                                        </p>
                                    }
                                />
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <a
                                        href={OFFICE_MAP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                                    >
                                        <div className="mt-1 bg-white p-2 rounded-lg shadow-sm">
                                            <MapPin className="w-5 h-5 text-slate-700" />
                                        </div>
                                        <EditableContent
                                            contentKey="contact_address"
                                            description="Contact Address"
                                            defaultContent={
                                                <div className="space-y-1">
                                                    <p className="text-slate-900 font-black text-sm uppercase tracking-wider">LEARNSQUARE</p>
                                                    <p className="text-[#1a2b4b] font-medium text-[14px] leading-relaxed max-w-[320px]">
                                                        Office: {OFFICE_FLOOR}, {OFFICE_ADDRESS}.
                                                    </p>
                                                </div>
                                            }
                                        />
                                    </a>

                                    {/* Small Map Thumbnail */}
                                    <motion.a
                                        href={OFFICE_MAP_URL}
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
                                            src={OFFICE_MAP_EMBED_URL}
                                            title="LEARNSQUARE office on Google Maps"
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
                                    <EditableContent
                                        contentKey="contact_phone"
                                        description="Contact Phone Number"
                                        defaultContent={<p className="text-[#1a2b4b] font-medium text-[15px]">{SUPPORT_PHONE}</p>}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm">
                                        <Mail className="w-5 h-5 text-slate-700" />
                                    </div>
                                    <EditableContent
                                        contentKey="contact_email"
                                        description="Contact Email"
                                        defaultContent={<p className="text-[#1a2b4b] font-medium text-[15px]">{SUPPORT_EMAIL}</p>}
                                    />
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
                            {mutation.isSuccess ? (
                                <FormSuccess
                                    title="Message sent"
                                    message="Thanks for reaching out. We've received your message and will get back to you soon."
                                    actionLabel="Send another message"
                                    onAction={() => mutation.reset()}
                                />
                            ) : (
                            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Input
                                            {...register("firstName", rules.required("First name"))}
                                            placeholder="First Name*"
                                            aria-invalid={!!errors.firstName}
                                            className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.firstName ? 'border-red-500' : ''}`}
                                        />
                                        <FieldError message={errors.firstName?.message} />
                                    </div>
                                    <div className="space-y-2">
                                        <Input
                                            {...register("lastName", rules.required("Last name"))}
                                            placeholder="Last Name*"
                                            aria-invalid={!!errors.lastName}
                                            className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.lastName ? 'border-red-500' : ''}`}
                                        />
                                        <FieldError message={errors.lastName?.message} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        {...register("email", rules.email())}
                                        type="email"
                                        placeholder="Email*"
                                        aria-invalid={!!errors.email}
                                        className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    <FieldError message={errors.email?.message} />
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        {...register("whatsappNo", rules.phone("Phone number"))}
                                        type="tel"
                                        placeholder="Phone Number (WhatsApp)*"
                                        aria-invalid={!!errors.whatsappNo}
                                        className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.whatsappNo ? 'border-red-500' : ''}`}
                                    />
                                    <FieldError message={errors.whatsappNo?.message} />
                                </div>

                                <div className="space-y-2">
                                    <Input
                                        {...register("collegeName", rules.required("College / organization name"))}
                                        placeholder="College / Organization Name*"
                                        aria-invalid={!!errors.collegeName}
                                        className={`h-14 bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 ${errors.collegeName ? 'border-red-500' : ''}`}
                                    />
                                    <FieldError message={errors.collegeName?.message} />
                                </div>

                                <div className="space-y-2">
                                    <Textarea
                                        {...register("message", rules.required("Message"))}
                                        placeholder="Your message*"
                                        aria-invalid={!!errors.message}
                                        className={`min-h-[160px] bg-[#f8faff] border-slate-200 rounded-xl focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 resize-none pt-4 ${errors.message ? 'border-red-500' : ''}`}
                                    />
                                    <FieldError message={errors.message?.message} />
                                </div>

                                <Button
                                    disabled={mutation.isPending}
                                    type="submit"
                                    className="w-full h-14 bg-[#7c66dc] hover:bg-[#6853c4] text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg active:scale-[0.98] disabled:opacity-50 gap-2"
                                >
                                    {mutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {mutation.isPending ? "Sending..." : "Submit"}
                                </Button>
                            </form>
                            )}
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
