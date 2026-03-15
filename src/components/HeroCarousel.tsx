import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import AntigravityBackground from "./AntigravityBackground";
import ParticlesBackground from "./ParticlesBackground";
import { EditableContent } from "./EditableContent";

const slides = [
  {
    topLabel: "Next-Gen Campus Automation",
    titleLines: ["AICAS", "AI Powered", "Campus Automation System"],
    subtitle: "Streamline your campus operations with our all-in-one AI platform.",
    bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2070", // Aesthetic Books/Library
    link: "/aicas",
    color: "from-indigo-400 to-purple-400",
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
    topLabel: "AI Enabled Coding Environment",
    titleLines: ["SyntaxWorks", "Multi Language", "Coding Compiler"],
    subtitle: "Master coding with our advanced development and testing environment.",
    bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2070", // Pro Coding Setup
    link: "/syntax-works",
    color: "from-fuchsia-400 to-pink-400",
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
    topLabel: "Industry Ready Trainings",
    titleLines: ["On-Campus Trainings", "Making Students", "Industry Ready"],
    subtitle: "Bridge the gap between education and industry requirements.",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2070", // Student Collaboration
    link: "/training-programs",
    color: "from-orange-400 to-rose-400",
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
    topLabel: "Smart Exam Preparation",
    titleLines: ["SemesterPrep", "One Stop Solution for", "Semester Exam Preparation"],
    subtitle: "Your one-stop destination for semester exam excellence.",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070", // Academic Excellence
    link: "https://semesterprep.in/",
    color: "from-emerald-400 to-cyan-400",
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
    <section className="relative bg-transparent overflow-hidden min-h-screen flex items-center pt-24 perspective-[2000px]">
      {/* SaaS Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      </div>

      <ParticlesBackground />

      <div className="container relative z-20 pointer-events-none">
        <div className="relative min-h-[70vh] flex items-center pointer-events-auto">
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
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="h-[2px] w-20 bg-accent shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
                    <EditableContent 
                        contentKey={`hero_slide_${current}_label`}
                        description={`Hero Slide ${current} Label`}
                        defaultContent={
                            <span className="text-primary font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
                                {slide.topLabel}
                            </span>
                        }
                    />
                  </motion.div>

                  <div className="relative">
                    {/* Atmospheric Glow Behind Title */}
                    <div className={`absolute -inset-10 bg-gradient-to-r ${slide.color} opacity-10 blur-[80px] rounded-full z-[0] pointer-events-none`} />
                    <EditableContent 
                        contentKey={`hero_slide_${current}_title`}
                        description={`Hero Slide ${current} Title`}
                        defaultContent={
                            <motion.h1
                              style={{
                                x: useTransform(smoothMouseX, v => v * 8),
                                y: useTransform(smoothMouseY, v => v * 8)
                              }}
                              className={`relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.05] tracking-tighter py-2 flex flex-col gap-0 md:gap-1 drop-shadow-lg`}
                            >
                              {slide.titleLines.map((line: string, idx: number) => {
                                let colorClass = "text-white";
                                if (idx === 1) colorClass = "text-slate-300";
                                if (idx === slide.titleLines.length - 1) colorClass = `text-transparent bg-clip-text bg-gradient-to-r ${slide.color} pb-4`;
                                return (
                                  <span key={idx} className={`block ${colorClass}`}>
                                    {line}
                                  </span>
                                );
                              })}
                            </motion.h1>
                        }
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-sm"
                  >
                    <EditableContent 
                        contentKey={`hero_slide_${current}_subtitle`}
                        description={`Hero Slide ${current} Subtitle`}
                        defaultContent={
                            <p className="text-lg md:text-xl text-slate-200 font-medium leading-[1.5] border-l-2 border-indigo-400 pl-6 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                        }
                    />
                  </motion.div>

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
                            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className={`absolute -inset-6 rounded-full blur-3xl bg-indigo-400`}
                          />
                          <Button className="relative h-20 w-20 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-white hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(99,102,241,0.2)] flex items-center justify-center p-0 group-hover:bg-indigo-500/40 group-hover:border-indigo-400/50">
                            <ChevronRight className="w-10 h-10 text-indigo-100 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-white font-black uppercase text-2xl tracking-tighter group-hover:text-primary transition-colors`}>
                            Explore Now
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Discover More</span>
                        </div>
                      </a>
                    ) : (
                      <Link href={slide.link} className="flex items-center gap-6 group">
                        <div className="relative">
                          <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className={`absolute -inset-6 rounded-full blur-3xl bg-indigo-400`}
                          />
                          <Button className="relative h-20 w-20 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-white hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(99,102,241,0.2)] flex items-center justify-center p-0 group-hover:bg-indigo-500/40 group-hover:border-indigo-400/50">
                            <ChevronRight className="w-10 h-10 text-indigo-100 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-white font-black uppercase text-2xl tracking-tighter group-hover:text-primary transition-colors`}>
                            Explore Now
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Discover More</span>
                        </div>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Extreme Right Content - Floating Glass Features */}
              <div className="lg:col-span-5 relative h-full flex items-center justify-center">
                {/* Central AI Core Glowing Background */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[120%] aspect-square bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent animate-liquid blur-[100px]"
                />

                <motion.div
                  style={{
                    x: useTransform(smoothMouseX, v => v * -20),
                    y: useTransform(smoothMouseY, v => v * -20)
                  }}
                  className="relative z-30 w-full max-w-sm flex flex-col gap-8"
                >
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="inline-flex"
                    >
                      <EditableContent 
                        contentKey={`hero_slide_${current}_card_subtitle`}
                        description={`Hero Slide ${current} Card Subtitle`}
                        defaultContent={
                            <span className={`font-semibold text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 shadow-xl`}>
                                {slide.cardSubtitle}
                            </span>
                        }
                      />
                    </motion.div>
                    <EditableContent 
                        contentKey={`hero_slide_${current}_card_title`}
                        description={`Hero Slide ${current} Card Title`}
                        defaultContent={
                            <motion.h3
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                              className={`text-3xl md:text-5xl font-black tracking-tight text-white`}
                            >
                              {slide.cardTitle}
                            </motion.h3>
                        }
                    />
                  </div>

                  <div className="flex flex-col gap-3 md:gap-4">
                    {slide.features?.slice(0, 4).map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 100 }}
                        whileHover={{ x: -5, scale: 1.02 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 backdrop-blur-md transition-all group/item shadow-2xl relative overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-0 group-hover/item:opacity-10 transition-opacity`} />
                        <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl flex items-center justify-center font-bold text-sm md:text-base bg-gradient-to-br ${slide.color} text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]`}>
                          0{i + 1}
                        </div>
                        <span className="text-slate-300 font-semibold text-sm md:text-[15px] leading-snug group-hover/item:text-white transition-colors relative z-10">
                          {f}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Orbiting Fragments */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-10 left-10 w-6 h-6 bg-white/10 border border-white/20 rotate-45 backdrop-blur-sm" />
                  <div className="absolute bottom-1/4 right-0 w-8 h-8 rounded-full border border-indigo-400/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
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
