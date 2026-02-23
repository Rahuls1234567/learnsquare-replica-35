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
    <section id="products" className="pt-24 pb-24 bg-[#030014] relative overflow-hidden text-white font-sans">
      <AntigravityBackground />
      {/* Cinematic background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10">
        <div className="flex flex-col mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-fit flex items-center gap-2 bg-black border border-primary/40 px-8 py-2.5 rounded-full shadow-[0_0_15px_rgba(91,71,204,0.2)] mb-8"
          >
            <span className="text-xl font-medium text-primary tracking-wide">
              Products
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Empowering Educational Institutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
          >
            Empowering Institutions to Deliver Excellence with Cutting-Edge Technology
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col p-8 rounded-[2.5rem] bg-[#1E1B4B] border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] hover:-translate-y-2 text-left overflow-hidden"
            >
              {/* Creative Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${p.color}`} />

              {/* Top Area: Icon and Badge */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500`}>
                  <p.icon className={`w-8 h-8 ${p.iconColor} stroke-[1.5px] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]`} />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-primary group-hover:border-primary/30 transition-all">
                  {p.badge}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex-grow space-y-4 mb-8 relative z-10">
                <h4 className="text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors font-heading">
                  {p.title}
                </h4>
                <p className="text-slate-400 leading-relaxed font-bold text-[15px] group-hover:text-slate-300 transition-colors">
                  {p.description}
                </p>
              </div>

              {/* Bottom Area: Action Button */}
              <div className="pt-6 border-t border-white/5 relative z-10 w-full text-left">
                {p.external ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold text-sm text-slate-300"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white" />
                  </a>
                ) : (
                  <Link
                    to={p.link}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all font-bold text-sm text-slate-300"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
