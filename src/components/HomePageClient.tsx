"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import NoticeBoard from "@/components/NoticeBoard";
import AntigravityBackground from "@/components/AntigravityBackground";

const ClientsLogoBar = dynamic(() => import("@/components/ClientsLogoBar"), { ssr: false });
const ProductsSection = dynamic(() => import("@/components/ProductsSection"), { ssr: false });
const HomeImageSection = dynamic(() => import("@/components/HomeImageSection"), { ssr: false });
const MySkillForgeSection = dynamic(() => import("@/components/MySkillForgeSection"), { ssr: false });
const SemesterPrepSection = dynamic(() => import("@/components/SemesterPrepSection"), { ssr: false });
const TrainingProgramsSection = dynamic(() => import("@/components/TrainingProgramsSection"), { ssr: false });
const TestPrepProSection = dynamic(() => import("@/components/TestPrepProSection"), { ssr: false });
const CollaborationsSection = dynamic(() => import("@/components/CollaborationsSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        setMounted(true);
        const toggleVisible = () => setVisible(window.pageYOffset > 500);
        toggleVisible();
        window.addEventListener("scroll", toggleVisible, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    if (!mounted) return null;

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#1e1b4b] text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all flex items-center justify-center group overflow-hidden border-2 border-white/10"
            aria-label="Scroll to top"
        >
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="url(#progress-gradient)"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray="1"
                    style={{ pathLength }}
                />
                <defs>
                    <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute top-1 right-1 w-12 h-12 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-[2px] opacity-60 pointer-events-none" />
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-none stroke-current stroke-[2.5px] relative z-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M12 5L5 12M12 5L19 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.button>
    );
};

export default function HomePageClient() {
    const handleCollabClick = () => {
        document.getElementById("client-collaborations")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#080118] relative overflow-x-hidden"
        >
            <AntigravityBackground />
            {/* Pre-blurred ambient glow: a radial-gradient is already soft, so we
                avoid the very expensive large-radius CSS blur filter (a major
                Safari paint cost). */}
            <div
                aria-hidden="true"
                className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
                style={{
                    backgroundImage:
                        'radial-gradient(45% 45% at 5% 0%, hsl(var(--primary) / 0.20), transparent 70%),' +
                        'radial-gradient(45% 45% at 95% 100%, rgba(147, 51, 234, 0.20), transparent 70%)',
                }}
            />
            <Navbar />
            <NoticeBoard />
            <HeroCarousel />
            <ClientsLogoBar onLogoClick={handleCollabClick} />
            <ProductsSection />
            <HomeImageSection />
            <MySkillForgeSection />
            <SemesterPrepSection />
            <TrainingProgramsSection />
            <TestPrepProSection />
            <CollaborationsSection id="client-collaborations" />
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </motion.div>
    );
}
