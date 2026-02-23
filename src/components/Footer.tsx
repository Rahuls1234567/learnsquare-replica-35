import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, ChevronRight, Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact us", href: "#contact" },
  { label: "Login", href: "#" },
];

const productFooterLinks = [
  { name: "AICAS", href: "/aicas", external: false },
  { name: "SyntaxWorks", href: "/syntaxworks", external: false },
  { name: "MySkillForge", href: "/myskillforge", external: false },
  { name: "SemesterPrep", href: "https://semesterprep.in/", external: true },
  { name: "Training Programs", href: "/training-programs", external: false },
  { name: "Test Prep - Pro", href: "/testpreppro", external: false },
];

const trainingColumns = [
  [
    "CRT Training",
    "Python Full Stack",
    "MERN Stack Development",
    "Cyber Security & Ethical Hacking",
    "Blockchain Technology",
    "Quantitative Aptitude",
    "Verbal-Ability",
    "Statistics / SPSS Data Analysis"
  ],
  [
    "Data Science",
    "Java Full Stack",
    "Mobile Development",
    "Internet of Things (IoT)",
    "Cloud Computing",
    "Logical Reasoning",
    "Soft-Skills & Interview Prep"
  ]
];

const Footer = () => (
  <footer className="bg-[#050816] text-white pt-24 pb-12 relative overflow-hidden font-sans">
    {/* Cinematic Premium Background Elements */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        {/* Brand & App Showcase Section */}
        <div className="lg:col-span-4 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <a href="/" className="inline-block group transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div
                  className="h-20 w-48 transition-transform group-hover:scale-105"
                  style={{
                    maskImage: 'url(/images/logo-footer-white.png)',
                    WebkitMaskImage: 'url(/images/logo-footer-white.png)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    background: 'linear-gradient(to right, #4F46E5, #9333EA, #C026D3)',
                  }}
                />
              </div>
            </a>

            <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
              Revolutionizing the educational landscape through cutting-edge <span className="text-white font-bold">AI technology</span> and industry-aligned programs.
            </p>

            {/* Premium App Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileHover={{ y: -5, scale: 1.02 }}
                href="https://play.google.com/store/apps/details?id=com.semesterprep_ap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group/app shadow-2xl"
              >
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/10 group-hover/app:border-primary/50">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 leading-none mb-1">Get it on</p>
                  <p className="text-sm font-black text-white leading-none">Google Play</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.02 }}
                href="https://apps.apple.com/in/app/learnsquare/id1671087835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group/app shadow-2xl"
              >
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/10 group-hover/app:border-primary/50 text-white">
                  <Apple className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 leading-none mb-1">Download on</p>
                  <p className="text-sm font-black text-white leading-none">App Store</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Navigation Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary/80 font-heading">
                Company
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-slate-400 hover:text-white transition-all duration-300 font-bold flex items-center gap-2 group/link text-sm">
                      <ChevronRight className="w-3 h-3 text-primary opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary/80 font-heading">
                Products
              </h4>
              <ul className="space-y-4">
                {productFooterLinks.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      className="text-slate-400 hover:text-white transition-all duration-300 font-bold flex items-center gap-2 group/link text-sm"
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <ChevronRight className="w-3 h-3 text-primary opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary/80 font-heading">
                Trending Programs
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trainingColumns.map((col, idx) => (
                  <ul key={idx} className="space-y-4">
                    {col.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 font-bold flex items-center gap-2 group/link text-xs">
                          <span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover/link:bg-primary transition-colors" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Experience Section */}
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <p className="text-slate-500 text-sm font-medium">
            © 2024 <span className="text-slate-300 font-black tracking-tight">LEARNSQUARE</span> Technologies. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 text-[13px] font-bold">
            <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-8 decoration-primary/30 hover:decoration-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors underline underline-offset-8 decoration-primary/30 hover:decoration-primary">Terms</Link>
          </div>
        </div>

        {/* Social: Instagram, LinkedIn, YouTube only */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
            href="https://www.instagram.com/learn_square/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-all group/social"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-slate-400 group-hover/social:text-white transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
            href="https://www.linkedin.com/company/learnsquaretechnologies/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-all group/social"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-slate-400 group-hover/social:text-white transition-colors" />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
            href="https://www.youtube.com/@learnsquaretech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-all group/social"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-slate-400 group-hover/social:text-white transition-colors" />
          </motion.a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
