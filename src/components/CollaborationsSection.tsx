import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, ChevronLeft, ChevronRight } from "lucide-react";

/** Only two collaborations shown */
const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering" },
  { image: "/images/client-3.png", title: "MoU with SHADAN for MySkillForge Program" },
  { image: "/images/client-4.png", title: "MoU with GPREC for Training" },
];

const CollaborationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (collaborations.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (collaborations.length - 1)) % (collaborations.length - 1));
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#ffffff] font-sans">
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
              className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-[-0.05em] leading-[1.1]"
            >
              Client <span className="text-indigo-600 italic">Collaborations</span>
            </motion.h2>
          </div>
        </div>

        {/* Dual Photo Display Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="wait">
              {[0, 1].map((offset) => {
                const item = collaborations[currentIndex + offset];
                return (
                  <motion.div
                    key={`${currentIndex}-${offset}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="px-4">
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pill Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-16">
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
      </div>
    </section>
  );
};

export default CollaborationsSection;
