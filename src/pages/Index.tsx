import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ClientsLogoBar from "@/components/ClientsLogoBar";
import ProductsSection from "@/components/ProductsSection";
import SemesterPrepSection from "@/components/SemesterPrepSection";
import TrainingProgramsSection from "@/components/TrainingProgramsSection";
import TestPrepProSection from "@/components/TestPrepProSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AntigravityBackground from "@/components/AntigravityBackground";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import HomeImageSection from "@/components/HomeImageSection";
import MySkillForgeSection from "@/components/MySkillForgeSection";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => setVisible(window.pageYOffset > 500);
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-[1.25rem] bg-primary text-white shadow-2xl shadow-primary/40 hover:-translate-y-2 transition-all flex items-center justify-center"
    >
      <ChevronUp className="w-8 h-8" />
    </motion.button>
  );
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background relative overflow-x-hidden"
    >
      <AntigravityBackground />

      {/* Global Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <HeroCarousel />
      <ClientsLogoBar />
      <ProductsSection />
      <HomeImageSection />
      <MySkillForgeSection />
      <SemesterPrepSection />
      <TrainingProgramsSection />
      <TestPrepProSection />
      <CollaborationsSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </motion.div >
  );
};

export default Index;
