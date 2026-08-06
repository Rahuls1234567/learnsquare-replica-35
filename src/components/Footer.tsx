import Link from "next/link";
import { ChevronRight, Apple, Play } from "lucide-react";
import { EditableContent } from "./EditableContent";

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact us", href: "#contact" },
  { label: "Login", href: "#" },
];

const productFooterLinks = [
  { name: "AICAS", href: "/aicas", external: false },
  { name: "SyntaxWorks", href: "/syntax-works", external: false },
  { name: "MySkillForge", href: "/myskillforge", external: false },
  { name: "SemesterPrep", href: "https://semesterprep.in/", external: true },
  { name: "Training Programs", href: "/training-programs", external: false },
  { name: "Test Prep - Pro", href: "/test-prep-pro", external: false },
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

const InstagramBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ig-grad" x1="20%" y1="100%" x2="80%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="5.5" fill="url(#ig-grad)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="8" r="1.2" fill="white" />
  </svg>
);

const LinkedInBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="24" height="24" rx="3.5" fill="#0A66C2" />
    <path d="M7.5 17V10H5V17H7.5ZM6.2 8.8C7.1 8.8 7.7 8.2 7.7 7.4C7.6 6.6 7.1 6 6.2 6C5.3 6 4.8 6.6 4.8 7.4C4.8 8.2 5.3 8.8 6.2 8.8ZM19.5 17H17V13.3C17 12.4 16.6 11.8 15.8 11.8C15.2 11.8 14.8 12.2 14.6 12.6C14.6 12.8 14.6 13 14.6 13.3V17H12.1C12.1 17 12.1 10.7 12.1 10H14.6V11.1C15 10.5 15.7 10 16.6 10C18.4 10 19.5 11.2 19.5 13.5V17Z" fill="white" />
  </svg>
);

const YouTubeBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21.6 7.6C21.4 6.7 20.6 6 19.7 5.7C18 5.3 12 5.3 12 5.3s-6 0-7.7.4c-1 .3-1.7 1-1.9 1.9C2 9.3 2 12 2 12s0 2.7.4 4.4c.2.9 1 1.6 1.9 1.9 1.7.4 7.7.4 7.7.4s6 0 7.7-.4c1-.3 1.7-1 1.9-1.9.4-1.7.4-4.4.4-4.4s0-2.7-.4-4.4z" fill="#FF0000" />
    <path d="M10 15L15 12L10 9V15Z" fill="white" />
  </svg>
);

const Footer = () => (
  <footer className="bg-[#080111] text-white pt-24 pb-12 relative overflow-hidden font-sans">
    {/* Cinematic Premium Background Elements */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />
    <div className="absolute top-[-10%] right-[-5%] w-[320px] h-[320px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[320px] h-[320px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        {/* Brand & App Showcase Section */}
        <div className="lg:col-span-4 space-y-10">
          <div className="space-y-8">
            <a href="/" className="inline-block group transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src="/logo/learnsquare-footer-black.png"
                  alt="LEARNSQUARE"
                  width={640}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </a>

            <EditableContent 
                contentKey="footer_brand_desc"
                description="Footer Brand Description"
                defaultContent={
                    <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-sm">
                        Revolutionizing the educational landscape through cutting-edge <span className="text-white font-bold">AI Technology</span> and industry-aligned programs.
                    </p>
                }
            />

            {/* Premium App Badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.semesterprep_ap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 hover:scale-[1.02] transition-all group/app shadow-2xl"
              >
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/10 group-hover/app:border-primary/50">
                  <Play className="w-4 h-4 text-white fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 leading-none mb-1">Get it on</p>
                  <p className="text-sm font-black text-white leading-none">Google Play</p>
                </div>
              </a>

              <a
                href="https://apps.apple.com/in/app/learnsquare/id1671087835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 hover:scale-[1.02] transition-all group/app shadow-2xl"
              >
                <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/10 group-hover/app:border-primary/50 text-white">
                  <Apple className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 leading-none mb-1">Download on</p>
                  <p className="text-sm font-black text-white leading-none">App Store</p>
                </div>
              </a>
            </div>
          </div>
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
                    {l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-all duration-300 font-bold flex items-center gap-2 group/link text-sm"
                      >
                        <ChevronRight className="w-3 h-3 text-primary opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                        {l.name}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        prefetch={false}
                        className="text-slate-400 hover:text-white transition-all duration-300 font-bold flex items-center gap-2 group/link text-sm"
                      >
                        <ChevronRight className="w-3 h-3 text-primary opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                        {l.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 space-y-8">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary/80 font-heading">
                Trending Programs
              </h4>
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {trainingColumns.map((col, idx) => (
                  <ul key={idx} className="space-y-4">
                    {col.map((item) => (
                      <li key={item}>
                        <Link href="/training-programs" prefetch={false} className="text-slate-400 hover:text-white transition-all duration-300 font-bold flex items-center gap-2 group/link text-xs">
                          <span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover/link:bg-primary transition-colors" />
                          {item}
                        </Link>
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
            © 2026 <span className="text-slate-300 font-black tracking-tight">LEARNSQUARE</span> Technologies. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 text-[13px] font-bold">
            <Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-8 decoration-primary/30 hover:decoration-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors underline underline-offset-8 decoration-primary/30 hover:decoration-primary">Terms</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="https://www.instagram.com/learn_square/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/social transition-transform hover:-translate-y-1 hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramBrandIcon className="w-9 h-9 md:w-11 md:h-11 shadow-[0_4px_10px_rgba(0,0,0,0.3)] group-hover/social:shadow-[0_8px_20px_rgba(238,42,123,0.4)] rounded-xl transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/company/learnsquaretechnologies/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group/social transition-transform hover:-translate-y-1 hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedInBrandIcon className="w-9 h-9 md:w-11 md:h-11 shadow-[0_4px_10px_rgba(0,0,0,0.3)] group-hover/social:shadow-[0_8px_20px_rgba(10,102,194,0.4)] rounded-xl transition-all" />
          </a>
          <a
            href="https://www.youtube.com/@learnsquaretech"
            target="_blank"
            rel="noopener noreferrer"
            className="group/social transition-transform hover:-translate-y-1 hover:scale-110"
            aria-label="YouTube"
          >
            <YouTubeBrandIcon className="w-10 h-10 md:w-[3.2rem] md:h-[3.2rem] drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] group-hover/social:drop-shadow-[0_8px_20px_rgba(255,0,0,0.4)] transition-all" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
