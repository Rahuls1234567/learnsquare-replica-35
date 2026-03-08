"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";

type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    collegeCourse: string;
    branch: string;
    year: string;
    city: string;
    address: string;
};

const RegisterPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            collegeCourse: "",
            branch: "",
            year: "",
            city: "",
            address: "",
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: RegisterFormData) => apiClient.post("/register", data),
        onSuccess: () => {
            toast.success("Account created!", { description: "You can now sign in." });
            router.push("/login");
        },
        onError: (err: any) => {
            toast.error("Registration failed", {
                description: err?.response?.data?.error || "Please try again.",
            });
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100"
        >
            <Navbar />
            <main className="min-h-[calc(100vh-80px)] pt-24 pb-16 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-10 w-full max-w-lg mx-4"
                >
                    <h2 className="text-2xl font-black text-slate-900 text-center mb-1">Create account</h2>
                    <p className="text-slate-500 text-sm text-center mb-8">Register to access your learning dashboard</p>

                    <form className="space-y-5" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-700 font-semibold text-sm">Name *</Label>
                                <Input
                                    id="name"
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Your full name"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.name ? "border-red-500/50" : ""}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber" className="text-slate-700 font-semibold text-sm">Phone Number *</Label>
                                <Input
                                    id="phoneNumber"
                                    {...register("phoneNumber", { required: true })}
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.phoneNumber ? "border-red-500/50" : ""}`}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-700 font-semibold text-sm">Email *</Label>
                            <Input
                                id="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="off"
                                className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.email ? "border-red-500/50" : ""}`}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-700 font-semibold text-sm">Password * (min 6 characters)</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    {...register("password", { required: true, minLength: 6 })}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    autoComplete="new-password"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white pr-12 ${errors.password ? "border-red-500/50" : ""}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="collegeCourse" className="text-slate-700 font-semibold text-sm">College / Course *</Label>
                                <Input
                                    id="collegeCourse"
                                    {...register("collegeCourse", { required: true })}
                                    type="text"
                                    placeholder="e.g. B.Tech, BCA"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.collegeCourse ? "border-red-500/50" : ""}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="branch" className="text-slate-700 font-semibold text-sm">Branch *</Label>
                                <Input
                                    id="branch"
                                    {...register("branch", { required: true })}
                                    type="text"
                                    placeholder="e.g. CSE, ECE"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.branch ? "border-red-500/50" : ""}`}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="year" className="text-slate-700 font-semibold text-sm">Year *</Label>
                                <Input
                                    id="year"
                                    {...register("year", { required: true })}
                                    type="text"
                                    placeholder="e.g. 1st, 2nd, 3rd"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.year ? "border-red-500/50" : ""}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="city" className="text-slate-700 font-semibold text-sm">City *</Label>
                                <Input
                                    id="city"
                                    {...register("city", { required: true })}
                                    type="text"
                                    placeholder="Your city"
                                    className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.city ? "border-red-500/50" : ""}`}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address" className="text-slate-700 font-semibold text-sm">Address *</Label>
                            <Input
                                id="address"
                                {...register("address", { required: true })}
                                type="text"
                                placeholder="Full address"
                                className={`h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white ${errors.address ? "border-red-500/50" : ""}`}
                            />
                        </div>
                        <Button type="submit" disabled={mutation.isPending} className="w-full h-12 rounded-xl font-bold disabled:opacity-70 gap-2">
                            {mutation.isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                            {mutation.isPending ? "Creating..." : "Create account"}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
                    </p>
                </motion.div>
            </main>
            <Footer />
        </motion.div>
    );
};

export default RegisterPage;
