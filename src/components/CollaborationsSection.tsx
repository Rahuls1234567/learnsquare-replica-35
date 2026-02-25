import { motion } from "framer-motion";
import { Handshake, ArrowRight, ShieldCheck, Award } from "lucide-react";

/** Only two collaborations shown, duplicated for seamless marquee */
const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society", location: "Coimbatore, TN" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering", location: "Chennai, TN" },
];

const CollaborationsSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden bg-[#fcfdff] font-sans">
    {/* Premium Background Elements */}
    <div className="absolute inset-0 z-0 select-none pointer-events-none">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 blur-[150px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/40 blur-[130px] rounded-full -ml-40 -mb-40" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>

    <div className="container relative z-10 mx-auto px-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-white border border-indigo-50 shadow-[0_10px_30px_rgba(99,102,241,0.05)]"
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg shadow-lg">
            <Handshake className="w-4 h-4 text-white" />
          </div>
          <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.3em]">Institutional Trust</span>
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-slate-950 tracking-[-0.04em] leading-[1.05]"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 italic">Collaborations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Strategic partnerships with premier institutions, delivering transformative education and industry-leading training solutions.
          </motion.p>
        </div>
      </div>

      {/* Showcase Grid / Marquee Area */}
      <div className="relative group -mx-6">
        {/* Edge Gradients for seamless feel */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fcfdff] via-[#fcfdff]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#fcfdff] via-[#fcfdff]/80 to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden py-12 px-4">
          <motion.div
            className="flex shrink-0 gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...collaborations, ...collaborations, ...collaborations, ...collaborations].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group/card shrink-0 w-[400px] relative bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(99,102,241,0.06)] hover:shadow-[0_40px_80px_rgba(99,102,241,0.12)] transition-all duration-700 overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Image Container with Dynamic Filter */}
                <div className="relative h-[260px] overflow-hidden bg-slate-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover/card:scale-110"
                    loading="lazy"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-6 left-6 z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-500 -translate-y-2 group-hover/card:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-500" />
                      <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">MoU Signed</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10 flex-grow flex flex-col relative bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px flex-1 bg-slate-100" />
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">{item.location}</span>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>

                  <h4 className="text-lg md:text-xl font-black text-slate-900 leading-tight group-hover/card:text-indigo-600 transition-colors text-center font-heading">
                    {item.title}
                  </h4>

                  <div className="mt-8 flex items-center justify-center gap-3 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100 group-hover/card:bg-indigo-600 group-hover/card:text-white transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Line */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  </section>
);

export default CollaborationsSection;
