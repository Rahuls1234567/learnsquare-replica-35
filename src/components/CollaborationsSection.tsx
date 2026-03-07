import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, ChevronLeft, ChevronRight } from "lucide-react";

const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering" },
  { image: "/images/client-3.png", title: "MoU with SHADAN for MySkillForge Program" },
  { image: "/images/client-4.png", title: "MoU with GPREC for Training" },
];

interface CollaborationsSectionProps {
  id?: string;
}

const CollaborationsSection = ({ id }: CollaborationsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (collaborations.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (collaborations.length - 1)) % (collaborations.length - 1));
  };

  return (
    <section id={id} className="py-24 md:py-32 relative overflow-hidden bg-[#ffffff] font-sans">
      {/* Background System */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[1400px] h-[800px] bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-indigo-50/50 backdrop-blur-xl border border-indigo-100 shadow-[0_10px_30px_rgba(99,102,241,0.05)]"
          >
            <Handshake className="w-4 h-4 text-indigo-600" />
            <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.4em]">Institutional Trust</span>
          </motion.div>

          <div className="space-y-6 max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-[-0.05em] leading-[1.1]"
            >
              Client <span className="text-indigo-600 italic">Collaborations</span>
            </motion.h2>
          </div>
        </div>

        {/* Dual Photo Display Grid - Reduced size as requested */}
        <div className="max-w-4xl mx-auto px-4 md:px-0 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {[0, 1].map((offset) => {
                const item = collaborations[currentIndex + offset];
                if (!item) return null;
                return (
                  <motion.div
                    key={`${currentIndex}-${offset}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-[3px] border-white bg-slate-100 group mx-auto w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="px-2 text-center">
                      <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-800 leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pill Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-16 h-12 flex items-center justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all duration-300 shadow-sm border border-slate-200"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={nextSlide}
              className="w-16 h-12 flex items-center justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-all duration-300 shadow-sm border border-slate-200"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Positive Student Reviews - Now below photos */}
        <div className="max-w-6xl mx-auto mt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Final Year Student, SVIT",
                text: "The AICAS platform significantly reduced my manual work for semester exam registration. Everything is so streamlined now!",
                rating: 5
              },
              {
                name: "Priya Varma",
                role: "Placed at TCS, GPREC",
                text: "MySkillForge's training was the turning point for my career. The industry-focused curriculum helped me crack my dream company's interview.",
                rating: 5
              },
              {
                name: "Sandeep Kumar",
                role: "B.Tech Student, Malla Reddy University",
                text: "SemesterPrep's resources are exactly what a student needs. The content is so precise and directly helps in scoring better in exams.",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-indigo-50 shadow-[0_15px_40px_rgba(99,102,241,0.05)] hover:shadow-[0_25px_60px_rgba(99,102,241,0.1)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, star) => (
                    <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-0.5">{review.name}</h5>
                    <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
