"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { motion } from "framer-motion";
import { Eye, EyeOff, RefreshCw, Award, TrendingUp, Loader2 } from "lucide-react";
import { Label } from "@/src/components/ui/label";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";
import { setAuthCookie } from "@/lib/auth";

const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
};

type LoginFormData = { email: string; password: string };

const LoginPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setCaptcha(generateCaptcha());
        setMounted(true);
    }, []);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        defaultValues: { email: "", password: "" },
    });

    const mutation = useMutation({
        mutationFn: async (data: LoginFormData) => apiClient.post("/login", data),
        onSuccess: (res: any) => {
            const { user, isAdmin } = res.data;
            setAuthCookie({ email: user.email, id: user.id, isAdmin: !!isAdmin });
            toast.success("Signed in successfully!", { description: "Welcome back." });
            router.push(isAdmin ? "/admin" : "/");
        },
        onError: (err: any) => {
            toast.error("Sign in failed", {
                description: err?.response?.data?.error || "Invalid email or password.",
            });
        },
    });

    const refreshCaptcha = () => setCaptcha(generateCaptcha());

    const onSubmit = (data: LoginFormData) => {
        if (captchaInput.toUpperCase() !== captcha) {
            toast.error("Invalid CAPTCHA", { description: "Please enter the 6 characters shown above." });
            setCaptchaInput("");
            refreshCaptcha();
            return;
        }
        mutation.mutate(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/80"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-200/40 blur-[100px]" />
                <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-[100px]" />
                <div className="absolute bottom-0 left-1/2 w-[500px] h-64 bg-gradient-to-t from-indigo-50/50 to-transparent blur-2xl" />
            </div>

            <Navbar />
            <main className="relative min-h-[calc(100vh-80px)] pt-24 pb-16 flex items-center">
                <div className="container max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left: Marketing & App Download */}
                        <div className="relative">
                            <div className="absolute top-20 right-8 text-amber-500/90 drop-shadow-sm">
                                <Award className="w-12 h-12" strokeWidth={1.5} />
                            </div>
                            <div className="absolute top-36 left-4 text-fuchsia-400/80 drop-shadow-sm">
                                <TrendingUp className="w-9 h-9" strokeWidth={2} />
                            </div>
                            <div className="absolute top-48 right-16 text-violet-300/70">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 8v2h8v-2H8zm0 4v2h5v-2H8z"/></svg>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-center lg:justify-start mb-10">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-lg opacity-30 animate-pulse" />
                                        <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-white to-violet-50 flex items-center justify-center border-2 border-violet-100 shadow-xl shadow-violet-200/40 overflow-hidden group/robo ring-4 ring-white/50">
                                            <img
                                                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"
                                                alt="AI Robot"
                                                className="w-full h-full object-cover p-3 rounded-full transition-transform duration-700 group-hover/robo:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-center lg:text-left mb-3 leading-tight">
                                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Learn Smart. </span>
                                    <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">Learn Fast.</span>
                                </h1>
                                <p className="text-slate-600 font-semibold text-lg text-center lg:text-left mb-1">One Stop Solution</p>
                                <p className="text-violet-600 font-bold text-lg text-center lg:text-left mb-10">For your Future Readiness</p>

                                <div className="flex flex-col items-center lg:items-start gap-5">
                                    <Link href="/">
                                        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-2xl px-10 py-6 text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all gap-2 border-0">
                                            Start Learning!
                                            <span className="inline-block w-5 h-5 border-r-2 border-t-2 border-white rotate-45 translate-y-0.5" />
                                        </Button>
                                    </Link>
                                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.semesterprep_ap"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800/95 text-white font-bold text-sm hover:bg-slate-700 hover:scale-[1.02] transition-all shadow-lg"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L12.001 12l5.697-3.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" /></svg>
                                            GET IT ON Google Play
                                        </a>
                                        <a
                                            href="https://apps.apple.com/in/app/learnsquare/id1671087835"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800/95 text-white font-bold text-sm hover:bg-slate-700 hover:scale-[1.02] transition-all shadow-lg"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                            Download on the App Store
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Sign In Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10 max-w-md mx-auto w-full"
                        >
                            <div className="flex justify-center mb-6">
                                <img src="/images/login_card_icon.png" alt="" className="w-20 h-20 object-contain" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 text-center mb-1">Sign In</h2>
                            <p className="text-slate-500 text-sm text-center mb-8">Access your learning dashboard</p>

                            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-slate-700 font-semibold text-sm">Username / Email *</Label>
                                    <Input
                                        id="email"
                                        {...register("email", { required: true })}
                                        type="text"
                                        placeholder="Enter username or email"
                                        className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.email ? "border-red-500/50" : ""}`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-slate-700 font-semibold text-sm">Password *</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            {...register("password", { required: true })}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter password"
                                            className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white pr-12 ${errors.password ? "border-red-500/50" : ""}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-700 font-semibold text-sm">ENTER CAPTCHA</Label>
                                    <Input
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                                        placeholder="Enter captcha"
                                        maxLength={6}
                                        className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white font-mono tracking-widest uppercase"
                                    />
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 flex items-center justify-center gap-1 py-3 px-4 rounded-xl bg-slate-100 border border-slate-200 relative overflow-hidden">
                                            <span className="text-lg font-black text-slate-700 tracking-[0.35em] select-none relative z-10" style={{ textDecoration: "line-through", textDecorationColor: "rgba(0,0,0,0.3)" }}>
                                                {captcha}
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={refreshCaptcha}
                                            className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors"
                                            aria-label="Refresh captcha"
                                        >
                                            <RefreshCw className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-500">Enter the 6 characters shown above</p>
                                </div>

                                <Button type="submit" disabled={mutation.isPending} className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all disabled:opacity-70 gap-2 border-0">
                                    {mutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                                    {mutation.isPending ? "Signing in..." : "Sign In"}
                                </Button>
                            </form>

                            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-sm">
                                <Link href="/register" className="text-violet-600 font-semibold hover:text-violet-700 hover:underline">Create account</Link>
                                <a href="#" className="text-violet-600 font-semibold hover:text-violet-700 hover:underline">Forgot Password?</a>
                                <a
                                    href="https://wa.me/919885552350"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold hover:underline"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    WhatsApp Support
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
};

export default LoginPage;
