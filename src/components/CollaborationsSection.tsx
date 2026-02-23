import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

/** Only two collaborations shown, duplicated for seamless marquee */
const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering" },
];

const CollaborationsSection = () => (
  <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden text-slate-900 font-sans">
    {/* Cinematic background effects */}
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="container relative z-10">
      <div className="text-center mb-20 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-slate-200 bg-white text-primary font-black uppercase tracking-widest text-[10px] mx-auto shadow-sm"
        >
          <Handshake className="w-4 h-4" />
          Institutional Reach
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter font-heading"
        >
          Client <span className="text-primary font-black">Collaborations</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Building strong partnerships with prestigious institutions to deliver excellence in education and training.
        </motion.p>
      </div>

      {/* Infinite marquee – same effect as client logos */}
      <div className="relative group -mx-4 md:-mx-6">
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden py-6">
          <motion.div
            className="flex shrink-0 gap-8 px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          >
            {[...collaborations, ...collaborations].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                className="group/card shrink-0 w-[320px] md:w-[380px] relative bg-white rounded-[2.5rem] border-2 border-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transition-all duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative bg-slate-50 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity z-10" />
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-contain relative z-20 transition-transform duration-700 group-hover/card:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex-grow flex items-center justify-center text-center relative z-20 border-t border-slate-50">
                  <p className="text-[14px] md:text-[15px] font-black text-slate-700 leading-relaxed group-hover/card:text-primary transition-colors font-heading tracking-tight">
                    {c.title}
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CollaborationsSection;
