import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const logos = [
  { src: "/images/logo-1.png", bg: "bg-blue-50", glow: "shadow-blue-500/20" },
  { src: "/images/logo-2.png", bg: "bg-indigo-50", glow: "shadow-indigo-500/20" },
  { src: "/images/logo-3.png", bg: "bg-purple-50", glow: "shadow-purple-500/20" },
  { src: "/images/logo-4.png", bg: "bg-rose-50", glow: "shadow-rose-500/20" },
  { src: "/images/logo-5.png", bg: "bg-orange-50", glow: "shadow-orange-500/20" },
  { src: "/images/logo-6.png", bg: "bg-emerald-50", glow: "shadow-emerald-500/20" },
  { src: "/images/logo-7.png", bg: "bg-amber-50", glow: "shadow-amber-500/20" },
  { src: "/images/logo-8.png", bg: "bg-sky-50", glow: "shadow-sky-500/20" },
  { src: "/images/logo-9.png", bg: "bg-violet-50", glow: "shadow-violet-500/20" },
  { src: "/images/logo-10.png", bg: "bg-slate-50", glow: "shadow-slate-500/20" },
];

const ClientsLogoBar = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Delicate Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Refined Luxury Header Section */}
        <div className="text-center mb-28 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-[0.4em] mx-auto shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            Trusted by Leaders
          </motion.div>

          <div className="relative block">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none"
            >
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Partnerships</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "120px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6 blur-[1px]"
            />
          </div>
        </div>

        {/* Professional Infinite Marquee */}
        <div className="relative group">
          {/* Edge Fades for a seamless 'proper' look */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden py-10">
            <motion.div
              className="flex shrink-0 gap-8 px-8"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                  }}
                  className={`flex shrink-0 items-center justify-center w-40 h-40 md:w-52 md:h-52 ${logo.bg} rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-2 border-white cursor-pointer transition-all duration-300 relative group/card overflow-hidden`}
                >
                  {/* Subtle Interactive Glow */}
                  <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 shadow-2xl ${logo.glow}`} />

                  {/* Centered circular background behind logo */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/80 shadow-inner ring-2 ring-white/60 backdrop-blur-sm" />
                  </div>

                  <img
                    src={logo.src}
                    alt="Client logo"
                    className="h-16 md:h-24 w-auto object-contain z-10 relative transition-transform duration-500 group-hover/card:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoBar;
