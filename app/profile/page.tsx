"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { getAuthFromCookie, clearAuthCookie } from "@/lib/auth";

type ChangePasswordForm = { currentPassword: string; newPassword: string };

export default function ProfilePage() {
    const router = useRouter();
    const [auth, setAuth] = useState<ReturnType<typeof getAuthFromCookie>>(null);
    const [loading, setLoading] = useState(false);
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);

    useEffect(() => {
        setAuth(getAuthFromCookie());
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ChangePasswordForm>();

    useEffect(() => {
        if (auth === null) return;
        if (!auth) {
            router.replace("/login");
        }
    }, [auth, router]);

    const onSubmit = async (data: ChangePasswordForm) => {
        setLoading(true);
        try {
            const res = await fetch("/api/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    currentPassword: data.currentPassword,
                    newPassword: data.newPassword,
                }),
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok) {
                toast.success("Password updated successfully");
                reset();
            } else {
                toast.error(json.error || "Failed to update password");
            }
        } catch {
            toast.error("Failed to update password");
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        clearAuthCookie();
        router.replace("/login");
    };

    if (!auth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <p className="text-slate-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="pt-28 pb-20 px-4">
                <div className="max-w-xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-200">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center">
                                <User className="w-8 h-8 text-indigo-600" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-slate-800">Profile</h1>
                                <p className="text-slate-500 font-medium">{auth.email}</p>
                                {auth.isAdmin && (
                                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                                        Admin
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <Label className="text-slate-600 font-semibold">Email / Username</Label>
                                <Input
                                    value={auth.email}
                                    readOnly
                                    className="mt-2 bg-slate-50 text-slate-600"
                                />
                            </div>

                            <div className="pt-4">
                                <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                    <Lock className="w-4 h-4" />
                                    Change Password
                                </h2>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <Label htmlFor="current">Current Password *</Label>
                                        <div className="relative mt-2">
                                            <Input
                                                id="current"
                                                {...register("currentPassword", { required: true })}
                                                type={showCurrent ? "text" : "password"}
                                                className="pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCurrent((v) => !v)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                                aria-label={showCurrent ? "Hide password" : "Show password"}
                                            >
                                                {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="new">New Password * (min 6 characters)</Label>
                                        <div className="relative mt-2">
                                            <Input
                                                id="new"
                                                {...register("newPassword", { required: true, minLength: 6 })}
                                                type={showNew ? "text" : "password"}
                                                className="pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNew((v) => !v)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                                aria-label={showNew ? "Hide password" : "Show password"}
                                            >
                                                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <Button type="submit" disabled={loading} className="gap-2">
                                        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                                        Update Password
                                    </Button>
                                </form>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <Button variant="outline" onClick={logout} className="text-red-600 border-red-200 hover:bg-red-50">
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
