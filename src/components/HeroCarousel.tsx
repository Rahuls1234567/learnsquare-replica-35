import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import AntigravityBackground from "./AntigravityBackground";

const slides = [
  {
    title: "Integrated Digital Campus Solutions",
    subtitle: "Streamline your campus operations with our all-in-one AI platform.",
    image: "/images/hero-slide-1.png",
    link: "#products",
    color: "from-blue-600/20 to-indigo-600/20",
  },
  {
    title: "SyntaxWorks - Multi Language Compiler",
    subtitle: "Master coding with our advanced development and testing environment.",
    image: "/images/hero-slide-2.png",
    link: "#products",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Trainings in CRT & Emerging Tech",
    subtitle: "Bridge the gap between education and industry requirements.",
    image: "/images/hero-slide-3.png",
    link: "#products",
    color: "from-orange-600/20 to-red-600/20",
  },
  {
    title: "SemesterPrep - Exam Solutions",
    subtitle: "Your one-stop destination for semester exam excellence.",
    image: "/images/hero-slide-4.png",
    link: "#products",
    color: "from-emerald-600/20 to-teal-600/20",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const slide = slides[current];

  return (
    <section className="relative bg-[#030014] overflow-hidden min-h-[600px] flex items-center">
      <AntigravityBackground />

      {/* Background Decor */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} transition-colors duration-1000 opacity-20`} />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 py-12 md:py-20 overflow-hidden">
        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              className="absolute inset-0 grid md:grid-cols-2 items-center gap-12"
            >
              {/* Left Content */}
              <div className="space-y-6 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
                >
                  <Sparkles className="w-3 h-3" />
                  Innovative Learning
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-slate-400 font-medium max-w-xl"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href={slide.link}>
                    <Button className="rounded-full bg-primary text-primary-foreground px-10 py-6 text-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1">
                      Explore Products
                    </Button>
                  </a>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="relative flex justify-center perspective-[1000px]"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative max-h-[400px] w-auto object-contain drop-shadow-2xl brightness-110"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-6 z-20">
        <div className="flex items-center gap-8">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-white transition-all active:scale-95 group shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="relative h-2 rounded-full transition-all duration-300 overflow-hidden bg-white/10"
                style={{ width: i === current ? "48px" : "12px" }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    style={{ originX: 0 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:text-white transition-all active:scale-95 group shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
