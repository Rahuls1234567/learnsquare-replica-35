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
  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform-gpu bg-white border-b border-slate-200 h-20 md:h-24 flex items-center shadow-sm`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between h-full">

            {/* LEFT AREA: Logo Only (flex-1) */}
            <div className="flex-1 flex items-center h-full">
              <Link to="/" className="flex-shrink-0 flex items-center group active:scale-95 z-[60]">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/logo/LEARNSQUARE_LOGO (500x200).png"
                    alt="LEARNSQUARE"
                    className="h-14 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>
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
                          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.1)] overflow-hidden rounded-[2rem] min-w-[580px] p-2">
                            <div className="grid grid-cols-3 gap-1">
                              {products.map((p) => (
                                <Link
                                  key={p.title}
                                  to={p.href}
                                  target={p.external ? (window.innerWidth < 768 ? "_self" : "_blank") : undefined}
                                  rel={p.external ? "noopener noreferrer" : undefined}
                                  className="px-3 py-3 text-indigo-600 font-bold text-[12px] hover:text-primary hover:bg-indigo-50/50 rounded-xl transition-all flex items-center justify-between group border border-transparent hover:border-indigo-100"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-400">
                                      <ChevronRight className="w-3 h-3" />
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
                <Link to="/login" className="relative group/login overflow-hidden px-8 py-3 rounded-xl transition-all">
                  <div className="absolute inset-0 bg-slate-900 group-hover/login:bg-primary transition-colors duration-300" />
                  <span className="relative z-10 text-[13px] font-black uppercase tracking-wider text-white">
                    Sign in
                  </span>
                </Link>
              </div>
              <button
                className="lg:hidden flex items-center justify-center w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 shadow-sm active:scale-95 transition-all"
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
              className="lg:hidden absolute top-20 inset-x-4 z-40 max-h-[80vh] overflow-y-auto"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] p-4 sm:p-6 shadow-2xl space-y-1">
                {navLinks.map((l) => (
                  <div key={l.label}>
                    {l.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setShowProducts(!showProducts)}
                          className="flex items-center justify-between w-full p-3.5 text-base font-black text-slate-800 hover:bg-slate-50 rounded-xl transition-all"
                        >
                          {l.label}
                          <ChevronRight className={`w-4 h-4 transition-transform ${showProducts ? 'rotate-90' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {showProducts && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {products.map((p) => (
                                <Link
                                  key={p.title}
                                  to={p.href}
                                  target={p.external ? (window.innerWidth < 768 ? "_self" : "_blank") : undefined}
                                  rel={p.external ? "noopener noreferrer" : undefined}
                                  className="flex items-center gap-3 p-3 text-base font-bold text-slate-600 hover:text-primary transition-all"
                                  onClick={() => setOpen(false)}
                                >
                                  <ChevronRight className="w-4 h-4 text-slate-400" />
                                  {p.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={l.href}
                        className="flex items-center justify-between p-3.5 text-base font-black text-slate-800 hover:bg-slate-50 rounded-xl transition-all"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                        <ChevronRight className="w-4 h-4 opacity-30" />
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <Link to="/login" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-[#0c051e] text-white font-black uppercase tracking-[0.2em] rounded-2xl py-8 h-16 text-sm">Sign in</Button>
                  </Link>
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
