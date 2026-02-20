import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering" },
  { image: "/images/client-3.png", title: "MoU with GPREC for Training" },
  { image: "/images/client-4.png", title: "MoU with SHADAN for MySkillForge Program" },
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collaborations.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 flex flex-col"
          >
            <div className="h-48 overflow-hidden relative bg-slate-50 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-contain relative z-20 transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-8 flex-grow flex items-center justify-center text-center relative z-20 border-t border-slate-50">
              <p className="text-[15px] font-black text-slate-700 leading-relaxed group-hover:text-primary transition-colors font-heading tracking-tight">
                {c.title}
              </p>
            </div>

            {/* Hover bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full blur-[1px]" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CollaborationsSection;
