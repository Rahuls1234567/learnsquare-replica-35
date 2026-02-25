import { ArrowRight, Cpu, Code2, Gem, BookMarked, Presentation, ClipboardList, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AntigravityBackground from "./AntigravityBackground";
import { Link } from "react-router-dom";

const products = [
  {
    title: "AICAS",
    description: "Helps you streamline Administration, enhance Efficiency, and improve Data Accuracy. The two layer AI Engine empowers you to optimize education and transform operations effortlessly.",
    icon: Cpu,
    link: "/aicas",
    external: false,
    badge: "AI Powered",
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600"
  },
  {
    title: "SyntaxWorks",
    description: "SyntaxWorks helps you master coding and prepare for technical recruitment with multi-language support, dynamic testing, and performance analytics for efficient project development.",
    icon: Code2,
    link: "/syntaxworks",
    external: false,
    badge: "Coding",
    color: "from-purple-500/10 to-fuchsia-500/10",
    iconColor: "text-purple-600"
  },
  {
    title: "MySkillForge",
    description: "MySkillForge is a three-phase employability program designed to equip students with advanced technical skills and essential problem-solving, communication, and career-readiness abilities.",
    icon: Gem,
    link: "/myskillforge",
    external: false,
    badge: "Skill Building",
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600"
  },
  {
    title: "SemesterPrep",
    description: "SemesterPrep is your all-in-one solution for semester exam success, offering expert-curated materials, past papers, placement prep, and real-time updates—all accessible on any device.",
    icon: BookMarked,
    link: "https://semesterprep.in/",
    external: true,
    badge: "Exam Prep",
    color: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-600"
  },
  {
    title: "Training Programs",
    description: "Our programs provide you with hands-on, immersive training in recruitment preparation and emerging technologies, guiding you from foundational learning to full-scale project implementation.",
    icon: Presentation,
    link: "/training-programs",
    external: false,
    badge: "Industry Ready",
    color: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-600"
  },
  {
    title: "Test Prep - Pro",
    description: "Our online programs, delivered through a dedicated platform featuring LMS, SyntaxWorks, and TestPrep Pro, offer flexibility with practical learning, enabling you to master technology.",
    icon: ClipboardList,
    link: "/testpreppro",
    external: false,
    badge: "Assessment",
    color: "from-cyan-500/10 to-blue-500/10",
    iconColor: "text-cyan-600"
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="pt-32 pb-40 bg-[#0B0914] relative overflow-hidden text-white">
      <div className="container relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 group"
          >
            <div className="h-[2px] w-12 bg-blue-600" />
            <div className="text-blue-500 font-black uppercase tracking-[0.3em] text-[11px]">
              THE SUITE
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter"
          >
            <span className="text-white block">Empowering</span>
            <span className="text-blue-500 block">Excellence.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center group"
            >

              {/* The Card */}
              <div className="relative z-10 w-full p-8 md:p-10 rounded-[2rem] bg-[#171523] border border-white/[0.04] flex flex-col h-full transition-all duration-300 hover:border-white/10 hover:bg-[#1C1A29]">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-black/30 border border-white/[0.06] flex items-center justify-center p-3.5 transition-transform duration-500 group-hover:scale-105`}>
                    <p.icon className={`w-full h-full ${p.iconColor} transition-colors`} />
                  </div>
                  <div
                    className="text-[9.5px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-md bg-blue-600 text-white"
                  >
                    {p.badge}
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow relative z-10">
                  <h4 className="text-3xl font-black italic tracking-tight text-white/95">
                    {p.title}
                  </h4>
                  <p className="text-white/40 font-bold text-[13px] leading-[1.8] min-h-[5rem]">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.04] relative z-10">
                  <Link
                    to={p.link}
                    className="flex items-center gap-4 group/btn w-fit"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all bg-white/[0.02]">
                      <ArrowRight className="w-4 h-4 text-white/60 group-hover/btn:text-black transition-colors" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white/70 group-hover/btn:text-white transition-colors">
                      Learn More
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
