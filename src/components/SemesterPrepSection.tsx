import { motion } from "framer-motion";
import {
  FileText,
  Users,
  BookOpen,
  Bell,
  Compass,
  ArrowRight,
  GraduationCap
} from "lucide-react";

const SEMESTERPREP_URL = "https://semesterprep.in/";

const SemesterPrepSection = () => {
  return (
    <section className="py-12 relative bg-white overflow-hidden font-sans">
      <div className="container relative z-10">
        {/* 1. Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.a
            href={SEMESTERPREP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-[#EBE7F7] border border-primary/10 px-8 py-3 rounded-full shadow-sm hover:bg-primary/15 hover:border-primary/20 transition-all cursor-pointer"
          >
            <GraduationCap className="text-primary w-6 h-6 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-primary tracking-tight">SemesterPrep</span>
              <span className="text-[10px] md:text-xs font-semibold text-primary/70 tracking-wider">Exam Ready</span>
            </div>
          </motion.a>

          <motion.a
            href={SEMESTERPREP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-[#1E1B4B] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-900/10 hover:bg-primary cursor-pointer inline-flex"
          >
            Explore Product
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-0 overflow-hidden shadow-2xl rounded-[3rem] border border-slate-100">

          {/* Left Panel: Feature Grid (Deep Navy Theme) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#1E1B4B] p-10 md:p-14 relative overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Top Row: 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Univ. Sem Exam PYQ’s & Answers",
                    desc: "10,000+ Univ. Sem Exam Prev. Year Questions & Answers Covering 120 + Subjects"
                  },
                  {
                    title: "Curated by Subject Experts",
                    desc: "Detailed Explanation of Answers from Top-Notch Subject Experts"
                  },
                  {
                    title: "Relevant PYQ Papers for all subjects",
                    desc: "Repository of Subject-wise Univ. Sem Exam Prev. Year Question Papers"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all h-full group"
                  >
                    <h5 className="text-[17px] font-black text-[#1E1B4B] mb-3 leading-tight group-hover:text-primary">
                      {feature.title}
                    </h5>
                    <p className="text-slate-500 text-[13px] font-bold leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row: 2 boxes (Centered) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-20">
                {[
                  {
                    title: "University Updates",
                    desc: "One Stop Destination for all University Exam Updates."
                  },
                  {
                    title: "Career Guidance",
                    desc: "Complete Guidance on Various Career Options after Graduation"
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all h-full group"
                  >
                    <h5 className="text-[17px] font-black text-[#1E1B4B] mb-3 leading-tight group-hover:text-primary">
                      {feature.title}
                    </h5>
                    <p className="text-slate-500 text-[13px] font-bold leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Creative Illustration (Solid Slate) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-slate-50 min-h-[500px] flex flex-col items-center justify-center p-12 border-l border-slate-100"
          >
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80"
                alt="Education Illustration"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SemesterPrepSection;
