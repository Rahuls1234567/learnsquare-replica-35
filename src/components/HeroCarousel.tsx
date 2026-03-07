import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import AntigravityBackground from "./AntigravityBackground";

const slides = [
  {
    title: "Integrated Digital Campus Solutions",
    subtitle: "Streamline your campus operations with our all-in-one AI platform.",
    image: "/images/hero-slide-1.png",
    bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2070", // Aesthetic Books/Library
    link: "/aicas",
    color: "from-blue-600 to-indigo-600",
    cardTitle: "Empowering Education",
    cardSubtitle: "Transforming Futures",
    description: "The Idea: Everything University need to Manage, Engage, and Elevate their Educational Experience within a Single Platform.",
    features: [
      "AICAS - ERP (AI Powered Campus Automation Sol.)",
      "Coding Platform",
      "Assessments",
      "Courses for Semester Exams Preparation",
      "Online Training & Internship",
      "Offline Training & Internship"
    ]
  },
  {
    title: "SyntaxWorks - Multi Language Compiler",
    subtitle: "Master coding with our advanced development and testing environment.",
    image: "/images/hero-slide-2.png",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070", // Pro Coding Setup
    link: "/syntaxworks",
    color: "from-purple-600 to-pink-600",
    cardTitle: "Modern Compiler",
    cardSubtitle: "Multi-Language Support",
    description: "Cloud-based IDE that empowers students to learn and practice multiple programming languages with real-time feedback.",
    features: [
      "Support for 20+ Programming Languages",
      "Real-time Error Detection & Highlighting",
      "Cloud-based execution with no setup",
      "Collaborative Coding Sessions",
      "Integrated Debugging Tools",
      "Instant Code Performance Analysis"
    ]
  },
  {
    title: "Trainings in CRT & Emerging Tech",
    subtitle: "Bridge the gap between education and industry requirements.",
    image: "/images/hero-slide-3.png",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070", // Student Collaboration
    link: "/training-programs",
    color: "from-orange-600 to-red-600",
    cardTitle: "Career Readiness",
    cardSubtitle: "Industry Aligned",
    description: "Comprehensive training programs designed to make students day-1 ready for top tech companies and startups.",
    features: [
      "Campus Recruitment Training (CRT)",
      "Full Stack Development Bootcamp",
      "AI & Machine Learning Specialization",
      "Soft Skills & Communication Training",
      "Mock Interviews with Experts",
      "Aptitude & Logical Reasoning Mastery"
    ]
  },
  {
    title: "SemesterPrep - Exam Solutions",
    subtitle: "Your one-stop destination for semester exam excellence.",
    image: "/images/hero-slide-4.png",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070", // Academic Excellence
    link: "https://semesterprep.in/",
    color: "from-emerald-600 to-teal-600",
    cardTitle: "Ace Your Exams",
    cardSubtitle: "Simplified Learning",
    description: "Strategically curated content focused on university syllabus to help students score maximum in minimal time.",
    features: [
      "Previous Year Solved Papers",
      "Important 10-Mark Question Bank",
      "Concept-wise Video Lectures",
      "Last Minute Revision Notes",
      "Subject-wise Mock Tests",
      "Interactive Doubt Clearing"
    ]
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Use MotionValues for parallax to avoid re-rendering on mousemove
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the motion
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5 range
      mouseX.set((e.clientX / window.innerWidth - 0.5));
      mouseY.set((e.clientY / window.innerHeight - 0.5));
    };

    // Only add mouse parallax on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouse);
    }

    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative bg-[#0f172a] overflow-hidden min-h-screen flex items-center pt-24 perspective-[2000px]">
      {/* SaaS Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      </div>
      {/* Background Layer Removed for cleaner look */}

      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.bgImage}
            alt="background"
            className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
            style={{ filter: "brightness(0.9) contrast(1.1) saturate(1.1)" }}
            crossOrigin="anonymous"
          />
          {/* Advanced Text Protection Overlays */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent w-[70%] z-1" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-20">
        <div className="relative min-h-[70vh] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Extreme Left Content */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-[2px] w-20 bg-accent shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                    <span className="text-primary font-black tracking-[0.4em] uppercase text-xs">
                      Experimental Design System
                    </span>
                  </motion.div>

                  <div className="relative">
                    <motion.h1
                      style={{
                        x: useTransform(smoothMouseX, v => v * 8),
                        y: useTransform(smoothMouseY, v => v * 8)
                      }}
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.1] md:leading-[1] tracking-tighter filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-gradient-to-r ${slide.color} bg-clip-text text-transparent py-2`}
                    >
                      {slide.title.split(' - ')[0]}
                    </motion.h1>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-2xl text-slate-600 font-semibold max-w-sm leading-tight border-l-4 border-indigo-500 pl-8 drop-shadow-sm"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4 md:gap-6"
                  >
                    {slide.link.startsWith('http') ? (
                      <a href={slide.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                        <div className="relative">
                          <motion.div
                            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -inset-8 rounded-full blur-3xl bg-indigo-500"
                          />
                          <Button className="relative h-20 w-20 rounded-full bg-indigo-600 text-white hover:scale-110 active:scale-95 transition-all shadow-[0_0_50px_rgba(79,70,229,0.3)] flex items-center justify-center p-0 border-none group-hover:bg-indigo-500">
                            <ChevronRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-black uppercase text-2xl tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-purple-400 transition-all`}>
                            Launch Platform
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-300">Enterprise Ready</span>
                        </div>
                      </a>
                    ) : (
                      <Link to={slide.link} className="flex items-center gap-6 group">
                        <div className="relative">
                          <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className={`absolute -inset-6 rounded-full blur-3xl bg-primary`}
                          />
                          <Button className="relative h-20 w-20 rounded-full bg-slate-900 text-white hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center p-0 border-none group-hover:bg-primary">
                            <ChevronRight className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-slate-900 font-black uppercase text-2xl tracking-tighter group-hover:text-primary transition-colors`}>
                            Explore Now
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">Discover More</span>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Extreme Right Card - Parallax Layered */}
              <div className="lg:col-span-5 relative h-full flex items-center justify-center">
                {/* Central AI Core Liquid Background */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[150%] aspect-square bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent animate-liquid blur-[120px]"
                />

                <motion.div
                  style={{
                    x: useTransform(smoothMouseX, v => v * -32),
                    y: useTransform(smoothMouseY, v => v * -32),
                    rotateX: useTransform(smoothMouseY, v => v * -8),
                    rotateY: useTransform(smoothMouseX, v => v * 8)
                  }}
                  className="relative z-30 w-full max-w-sm bg-white/60 backdrop-blur-3xl border border-white/40 rounded-[2rem] p-6 md:p-8 space-y-6 group overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Sparkles className="w-16 h-16 text-indigo-400" />
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <span className={`font-black text-[10px] md:text-xs uppercase tracking-widest px-3 py-1 rounded-md bg-gradient-to-r ${slide.color} text-white shadow-lg shadow-indigo-500/10`}>
                      {slide.cardSubtitle}
                    </span>
                    <h3 className={`text-2xl md:text-4xl font-black tracking-tighter italic bg-gradient-to-br ${slide.color} bg-clip-text text-transparent pb-1`}>
                      {slide.cardTitle}
                    </h3>
                  </div>

                  <ul className="space-y-4 md:space-y-6">
                    {slide.features?.slice(0, 4).map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-3 md:gap-4 group/item"
                      >
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-white shadow-md flex items-center justify-center text-[10px] md:text-xs font-black group-hover/item:scale-110 transition-all bg-gradient-to-br ${slide.color} text-white`}>
                          0{i + 1}
                        </div>
                        <span className="text-indigo-950 font-black text-xs md:text-[15px] tracking-wide group-hover/item:text-primary transition-colors">
                          {f}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Orbiting Fragments */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-0 w-8 h-8 bg-white/10 border border-white/20 rotate-45" />
                  <div className="absolute bottom-1/4 right-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Extreme Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-12 z-50">
        <button onClick={prev} className="group p-2 md:p-4 hover:scale-125 transition-transform" aria-label="Previous slide">
          <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-slate-300 group-hover:text-primary transition-colors" />
        </button>

        <div className="flex gap-2 md:gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 md:w-24 bg-primary shadow-[0_0_20px_rgba(99,102,241,0.3)]' : 'bg-slate-200 w-2 md:w-4'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={next} className="group p-2 md:p-4 hover:scale-125 transition-transform" aria-label="Next slide">
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-slate-300 group-hover:text-primary transition-colors" />
        </button>
      </div>

      {/* Bottom Progress Trace */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
        <motion.div
          key={current}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-primary via-accent to-primary"
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
