import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "#products", hasDropdown: true },
  { label: "Contact us", href: "/contact" },
];

const products = [
  { title: "AICAS", href: "/aicas", external: false },
  { title: "SyntaxWorks", href: "/syntaxworks", external: false },
  { title: "MySkillForge", href: "/myskillforge", external: false },
  { title: "SemesterPrep", href: "https://semesterprep.in/", external: true },
  { title: "Training Programs", href: "/training-programs", external: false },
  { title: "Test Prep - Pro", href: "/testpreppro", external: false }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-8 inset-x-0 z-50 transition-all duration-500 transform-gpu bg-transparent h-0`}
      >
        <div className="container px-4">
          <div className="flex items-center bg-white/80 backdrop-blur-3xl border border-white/50 rounded-[1.5rem] p-1.5 px-4 md:px-6 shadow-[0_30px_60px_rgba(0,0,0,0.1)] min-h-[72px]">

            {/* LEFT AREA: Logo Only (flex-1) */}
            <div className="flex-1 flex items-center relative h-full">
              <Link to="/" className="flex-shrink-0 flex items-center group active:scale-95 absolute -left-4 top-1/2 -translate-y-1/2 z-[60]">
                <img
                  src="/images/learnsquare_nav_logo_v2.png"
                  alt="LEARNSQUARE"
                  className="h-24 md:h-40 w-auto object-contain scale-110 md:scale-125 hover:scale-110 md:hover:scale-150 transition-transform duration-300 drop-shadow-sm origin-left"
                />
              </Link>
            </div>

            {/* CENTER AREA: Nav Links (Visible on lg+) */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => l.hasDropdown && setShowProducts(true)}
                  onMouseLeave={() => l.hasDropdown && setShowProducts(false)}
                >
                  <Link
                    to={l.href}
                    className="flex items-center gap-1.5 px-3 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.05em] text-slate-700 hover:text-primary rounded-xl transition-all"
                  >
                    {l.label}
                    {l.hasDropdown && <ChevronRight className={`w-3.5 h-3.5 transition-transform text-slate-400 ${showProducts ? 'rotate-90' : ''}`} />}
                  </Link>

                  {/* Dropdown */}
                  {l.hasDropdown && (
                    <AnimatePresence>
                      {showProducts && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
                        >
                          <div className="bg-white/95 backdrop-blur-3xl border border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden rounded-[2rem] min-w-[280px] p-2">
                            <div className="grid gap-1">
                              {products.map((p) => (
                                <Link
                                  key={p.title}
                                  to={p.href}
                                  className="px-5 py-4 text-slate-600 font-bold text-[14px] hover:text-primary hover:bg-slate-50 rounded-2xl transition-all flex items-center justify-between group"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
                                      <ChevronRight className="w-4 h-4" />
                                    </div>
                                    {p.title}
                                  </div>
                                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT AREA: Sign In & Mobile Toggle (flex-1) */}
            <div className="flex-1 flex items-center justify-end gap-3">
              <div className="hidden md:flex items-center">
                <Link to="/login" className="px-7 py-2.5 text-[12.5px] font-black uppercase tracking-[0.1em] text-white bg-[#0c051e] hover:bg-primary rounded-xl transition-all shadow-lg hover:shadow-primary/20">
                  Sign in
                </Link>
              </div>
              <button
                className="lg:hidden flex items-center justify-center w-11 h-11 bg-slate-900 rounded-xl text-white shadow-xl"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu - Light Glass Theme */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="lg:hidden absolute top-24 inset-x-6 z-40"
            >
              <div className="bg-white/95 backdrop-blur-3xl border border-slate-200 rounded-[2.5rem] p-6 shadow-2xl space-y-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.label}
                    to={l.href}
                    className="flex items-center justify-between p-4 text-lg font-black text-slate-800 hover:bg-slate-50 rounded-2xl transition-all"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                    <ChevronRight className="w-5 h-5 opacity-30" />
                  </Link>
                ))}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <Button className="w-full bg-[#0c051e] text-white font-black uppercase tracking-[0.2em] rounded-2xl py-8 h-16 text-sm">Sign in</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
