import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Integrated Digital Campus Solutions",
    image: "/images/hero-slide-1.png",
    link: "#products",
  },
  {
    title: "SyntaxWorks - The Multi Language Coding Compiler",
    image: "/images/hero-slide-2.png",
    link: "#products",
  },
  {
    title: "Trainings in CRT & Emerging Technologies",
    image: "/images/hero-slide-3.png",
    link: "#products",
  },
  {
    title: "SemesterPrep - One Stop Sol. for Sem Exam Preparation",
    image: "/images/hero-slide-4.png",
    link: "#products",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container grid md:grid-cols-2 items-center gap-8 py-12 md:py-20 min-h-[420px]">
        {/* Left */}
        <div className="space-y-6 animate-fade-in-up" key={current}>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
            {slide.title}
          </h1>
          <a href={slide.link}>
            <Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90">
              Explore our Products
            </Button>
          </a>
        </div>

        {/* Right image */}
        <div className="flex justify-center">
          <img
            src={slide.image}
            alt={slide.title}
            className="max-h-[350px] w-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border hover:bg-muted transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border hover:bg-muted transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
