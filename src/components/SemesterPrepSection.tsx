import { motion } from "framer-motion";
import {
  FileText,
  Users,
  BookOpen,
  Bell,
  Compass,
  ArrowRight,
  GraduationCap,
  ScrollText,
  Clock,
  LayoutDashboard,
  CheckCircle2
} from "lucide-react";

const SEMESTERPREP_URL = "https://semesterprep.in/";

const SemesterPrepSection = () => {
  const features = [
    {
      title: "10,000+ PYQ’s & Answers",
      desc: "Comprehensive coverage across 120+ university subjects.",
      icon: ScrollText,
      gradient: "from-purple-500 to-indigo-600",
      glow: "shadow-purple-500/20"
    },
    {
      title: "Expert Curation",
      desc: "Content detailed and verified by top-tier subject specialists.",
      icon: Users,
      gradient: "from-indigo-500 to-blue-600",
      glow: "shadow-indigo-500/20"
    },
    {
      title: "Relevant PYQ Papers",
      desc: "Complete repository for all subject-wise previous year papers.",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-600",
      glow: "shadow-blue-500/20"
    },
    {
      title: "University Updates",
      desc: "One Stop Destination for all Exam Updates & institutional news.",
      icon: Bell,
      gradient: "from-fuchsia-500 to-purple-600",
      glow: "shadow-fuchsia-500/20"
    },
    {
      title: "Career Guidance",
      desc: "Complete guidance on various career options after graduation.",
      icon: Compass,
      gradient: "from-violet-500 to-indigo-600",
      glow: "shadow-violet-500/20"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-10 relative bg-[#0a0a0f] overflow-hidden font-sans">
      {/* Cinematic Dark Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/dark_academic_bg.png"
          alt="Dark Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-transparent to-[#0a0a0f] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] opacity-80" />

        {/* Animated Glows */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Branding & Pitch (5/12 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <a href={SEMESTERPREP_URL} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-4 rounded-[2rem] shadow-2xl group hover:scale-[1.03] transition-all duration-500"
              >
                <div className="bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] p-3.5 rounded-2xl shadow-lg shadow-purple-500/20 group-hover:rotate-12 transition-transform duration-500">
                  <GraduationCap className="text-white w-7 h-7" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white tracking-tight uppercase leading-none">SemesterPrep</span>
                  <div className="h-[1px] w-full bg-white/10 my-1.5" />
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.5em] leading-none">Ace · Prepare · Excel</span>
                </div>
              </motion.div>
            </a>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl sm:text-5xl xl:text-7xl font-black text-white tracking-[-0.05em] leading-[1.05]">
                  Ace Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Semesters</span>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-purple-500 rounded-full" />
                  <p className="text-sm font-black text-purple-400 uppercase tracking-[0.3em]">
                    University Exam Excellence Matrix
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg"
              >
                The definitive platform for university exam success, providing deep archives of solved questions and real-time institutional guidance.
              </motion.p>
            </div>

            <a href={SEMESTERPREP_URL} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-purple-500/25"
              >
                Explore Product
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </a>
          </div>

          {/* Right Column: High-Density Interactive Cards (7/12 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                whileHover={{ x: -10, scale: 1.02 }}
                className="p-3 sm:p-4 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 group hover:bg-white/[0.08] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)] transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-center gap-3 md:gap-8 relative overflow-hidden"
              >
                {/* Floating Glow Fragment */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl`} />

                {/* Dynamic Icon Container */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${feature.glow}`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <h5 className="text-[10px] sm:text-base md:text-lg font-black text-white uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all text-center sm:text-left truncate">
                      {feature.title}
                    </h5>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    </motion.div>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed group-hover:text-slate-200 transition-colors text-center sm:text-left">
                    {feature.desc}
                  </p>
                </div>

                {/* Refined Action Arrow */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-500 border border-white/10">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}

            {/* Bottom Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 flex flex-col md:flex-row items-center justify-between gap-4 rounded-[2rem] bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-3xl border border-white/10 text-white/70 px-6 md:px-10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em]">Live Updates • 24/7 Support</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">System Active</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SemesterPrepSection;
