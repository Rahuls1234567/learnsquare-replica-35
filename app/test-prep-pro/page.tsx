"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Rocket, Star, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";
import { EditableContent } from "@/components/EditableContent";

type TestPrepProFormData = {
    firstName: string;
    lastName: string;
    whatsappNo: string;
    email: string;
    collegeName: string;
    message: string;
};

const TestPrepProPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TestPrepProFormData>({
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
        mutationFn: async (data: TestPrepProFormData) => {
            return apiClient.post('/test-prep-pro', data);
        },
        onSuccess: () => {
            toast.success("Request submitted!", {
                description: "We've received your request. We'll be in touch soon!",
            });
            reset();
        },
        onError: () => {
            toast.error("Failed to submit request", {
                description: "Please check your connection and try again.",
            });
        }
    });

    const onRequestSubmit = (data: TestPrepProFormData) => {
        mutation.mutate(data);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#020617] relative overflow-x-hidden font-outfit"
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
                    <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[160px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[140px]" />

                    {/* Subtle Overlay to ensure readability */}
                    <div className="absolute inset-0 bg-slate-950/40" />
                </div>

                <div className="container relative z-10 flex flex-col items-center mx-auto px-4 md:px-6">
                    {/* Top Center Product Name - Glow */}
                    <div className="flex justify-center mb-8 w-full mt-4">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative group cursor-default inline-block"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-slate-900/80 border border-blue-500/30 text-blue-400 px-6 py-2.5 rounded-full font-black tracking-[0.2em] text-[10px] uppercase shadow-2xl flex items-center gap-2 overflow-hidden">
                                <span className="relative z-10">TEST PREP PRO</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 w-full items-center max-w-7xl mx-auto py-12">
                        {/* Left Side: Cinematic Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start text-left space-y-8"
                        >
                            <div className="relative group cursor-default inline-block">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative bg-slate-900/80 border border-blue-500/30 text-blue-400 px-6 py-2.5 rounded-full font-black tracking-[0.2em] text-[10px] uppercase shadow-2xl flex items-center gap-2 overflow-hidden">
                                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    <span className="relative z-10">NEXT-GEN ASSESSMENT</span>
                                </div>
                            </div>

                            <EditableContent 
                                contentKey="testprep_hero_heading"
                                description="Test Prep Pro Hero Heading"
                                defaultContent={
                                    <h2 className="font-black tracking-tight flex flex-col items-start drop-shadow-xl w-full">
                                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6rem] text-slate-100 mb-2 lg:mb-4 leading-none text-left">Precision</span>
                                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 pb-6 pr-6 leading-normal italic text-left">Testing</span>
                                    </h2>
                                }
                            />

                            <EditableContent 
                                contentKey="testprep_hero_desc"
                                description="Test Prep Pro Hero Description"
                                defaultContent={
                                    <div className="space-y-6">
                                        <p className="text-xl md:text-2xl text-slate-300 font-bold max-w-xl leading-relaxed tracking-tight text-left">
                                            Adaptive assessment platform for high-stakes recruitment and technical excellence.
                                        </p>
                                        <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                                    </div>
                                }
                            />

                            <EditableContent 
                                contentKey="testprep_hero_stats"
                                description="Test Prep Pro Hero Stats"
                                defaultContent={
                                    <div className="pt-4 flex gap-6">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-white">1000+</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Assessments Delivered</span>
                                        </div>
                                        <div className="w-[1px] bg-slate-800 h-10 self-center" />
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-white">99.9%</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform Uptime</span>
                                        </div>
                                    </div>
                                }
                            />
                        </motion.div>

                        {/* Right Content: Premium Dark Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative group h-full max-w-lg lg:ml-auto w-full ml-0"
                        >
                            {/* Card Glow Background */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />

                            <div className="relative bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 flex flex-col h-full overflow-hidden">
                                {/* Form Background Dark Theme Layer */}
                                <div className="absolute inset-0 z-0 opacity-[0.4] mix-blend-overlay pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                                </div>

                                <div className="relative z-10 mb-8 text-center">
                                    <h3 className="text-3xl font-black text-white tracking-tight leading-none mb-3">
                                        Request Access
                                    </h3>
                                    <div className="h-1 w-12 bg-blue-500 rounded-full mx-auto shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                                </div>

                                <form className="space-y-5 relative z-10 flex-grow" onSubmit={handleSubmit(onRequestSubmit)}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Input {...register("firstName", { required: true })} placeholder="First Name*" className={`h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-blue-500/30 font-bold text-sm shadow-inner ${errors.firstName ? 'border-red-500/50' : ''}`} />
                                        </div>
                                        <div className="space-y-2">
                                            <Input {...register("lastName", { required: true })} placeholder="Last Name*" className={`h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-blue-500/30 font-bold text-sm shadow-inner ${errors.lastName ? 'border-red-500/50' : ''}`} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Input {...register("whatsappNo", { required: true })} placeholder="Whatsapp No.*" className={`h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-blue-500/30 font-bold text-sm shadow-inner ${errors.whatsappNo ? 'border-red-500/50' : ''}`} />
                                        </div>
                                        <div className="space-y-2">
                                            <Input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" placeholder="Email*" className={`h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-blue-500/30 font-bold text-sm shadow-inner ${errors.email ? 'border-red-500/50' : ''}`} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Input {...register("collegeName", { required: true })} placeholder="College Name*" className={`h-14 bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-blue-500/30 font-bold text-sm shadow-inner ${errors.collegeName ? 'border-red-500/50' : ''}`} />
                                    </div>

                                    <div className="space-y-2">
                                        <Textarea {...register("message", { required: true })} placeholder="Tell us about your preparation goals..." className={`min-h-[100px] bg-white/5 border-white/10 rounded-2xl focus:bg-white/10 transition-all text-white placeholder:text-slate-500 focus-visible:ring-blue-500/30 font-bold p-5 resize-none text-sm shadow-inner flex pt-4 items-center justify-start ${errors.message ? 'border-red-500/50' : ''}`} />
                                    </div>

                                    <div className="pt-4 mt-auto">
                                        <div className="relative group">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                                            <Button type="submit" disabled={mutation.isPending} className="w-full relative bg-blue-600 hover:bg-blue-500 text-white font-black h-14 rounded-2xl transition-all uppercase tracking-widest text-[13px] shadow-lg flex items-center justify-center gap-3 overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                {mutation.isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : <span className="flex items-center gap-2">Join Prep Pro <Rocket className="w-5 h-5" /></span>}
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Key Features Section */}
            <section className="py-20 relative overflow-hidden z-10">
                <div className="container relative z-10 max-w-7xl mx-auto px-6">
                        <EditableContent 
                            contentKey="testprep_features_heading"
                            description="Test Prep Pro Features Heading"
                            defaultContent={
                                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-20">
                                    <span className="text-blue-400 font-black text-sm uppercase tracking-[0.4em]">Advanced Features</span>
                                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 leading-[1.2] pb-6 pr-6">
                                        Precision Testing
                                    </h2>
                                </div>
                            }
                        />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                        {[
                            {
                                title: "Comprehensive Subject Coverage",
                                desc: "Extensive question banks covering algorithms, data structures, databases, and core system engineering subjects.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            },
                            {
                                title: "Adaptive Testing Engine",
                                desc: "Proprietary algorithms that adjust question difficulty in real-time based on student performance metrics.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="m4.93 4.93 2.83 2.83"></path><path d="M2 12h4"></path><path d="m4.93 19.07 2.83-2.83"></path><path d="M12 22v-4"></path><path d="m19.07 19.07-2.83-2.83"></path><path d="M22 12h-4"></path><path d="m19.07 4.93-2.83 2.83"></path></svg>
                            },
                            {
                                title: "Multiple Question Formats",
                                desc: "Variety of formats: MCQs, scenarios, fill-in-the-blanks, and live coding assessments for deep theoretical testing.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            },
                            {
                                title: "Deep Performance Analysis",
                                desc: "Granular reporting and predictive analytics to pinpoint weaknesses and optimize study path trajectory.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            },
                            {
                                title: "Timed Real-World Simulation",
                                desc: "Timed practice modules that simulate high-pressure environment of top-tier recruitment examinations.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            },
                            {
                                title: "Secure Proctoring Hub",
                                desc: "In-built audio/video proctoring, tab-switch detection, and copy protection to ensure 100% test integrity.",
                                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 hover:border-blue-200 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] overflow-hidden"
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-5 transition-opacity bg-blue-500">
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/30 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-2 sm:space-y-4">
                                        <EditableContent 
                                            contentKey={`testprep_feature_${idx}`}
                                            description={`Test Prep Feature ${idx + 1}`}
                                            defaultContent={
                                                <>
                                                    <h3 className="text-lg sm:text-2xl font-black text-blue-900 tracking-tight leading-tight">{feature.title}</h3>
                                                    <p className="text-blue-600/80 font-bold text-xs sm:text-sm leading-relaxed italic line-clamp-3 sm:line-clamp-none">
                                                        {feature.desc}
                                                    </p>
                                                </>
                                            }
                                        />
                                    </div>
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

export default TestPrepProPage;

