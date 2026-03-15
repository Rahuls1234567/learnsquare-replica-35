"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, User, LayoutDashboard, LogOut, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getAuthFromCookie, clearAuthCookie } from "@/lib/auth";
import { useRouter, usePathname } from "next/navigation";
import { useAdmin } from "@/src/context/AdminContext";
import { Edit3 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "#products", hasDropdown: true },
  { label: "Contact us", href: "/contact" },
];

const products = [
  { title: "AICAS", href: "/aicas", external: false },
  { title: "SyntaxWorks", href: "/syntax-works", external: false },
  { title: "MySkillForge", href: "/myskillforge", external: false },
  { title: "SemesterPrep", href: "/semester-prep", external: false },
  { title: "Training Programs", href: "/training-programs", external: false },
  { title: "Test Prep - Pro", href: "/test-prep-pro", external: false }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [auth, setAuth] = useState<ReturnType<typeof getAuthFromCookie>>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { isAdmin, editMode, setEditMode } = useAdmin();
  const transparentPaths = ["/", "/aicas", "/syntax-works", "/myskillforge", "/training-programs", "/test-prep-pro", "/semester-prep"];
  const isTransparentPath = transparentPaths.includes(pathname);
  // The navbar is transparent only if we are on transparent-enabled pages and haven't scrolled down.
  const isTransparent = isTransparentPath && !scrolled;

  useEffect(() => {
    setAuth(getAuthFromCookie());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const logout = () => {
    clearAuthCookie();
    setProfileOpen(false);
    setOpen(false);
    router.push("/login");
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 transform-gpu h-20 md:h-24 flex items-center ${isTransparent ? 'bg-transparent border-b border-transparent' : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'}`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between h-full">

            <div className="flex-1 flex items-center h-full">
              <Link href="/" className={`flex-shrink-0 flex items-center group active:scale-95 z-[60] transition-all duration-500`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/logo/LST Logo_No Background.png"
                    alt="LEARNSQUARE"
                    className="w-40 md:w-56 h-auto object-contain transition-all duration-500 group-hover:scale-105"
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
                    href={l.href}
                    className={`flex items-center gap-1.5 px-3 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.05em] rounded-xl transition-all ${isTransparent ? 'text-slate-200 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
                  >
                    {l.label}
                    {l.hasDropdown && <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isTransparent ? 'text-slate-300' : 'text-slate-400'} ${showProducts ? 'rotate-90' : ''}`} />}
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
                                  href={p.href}
                                  prefetch={false}
                                  target={p.external ? (typeof window !== 'undefined' && window.innerWidth < 768 ? "_self" : "_blank") : undefined}
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

            {/* RIGHT AREA: Profile / Sign In & Mobile Toggle (flex-1) */}
            <div className="flex-1 flex items-center justify-end gap-3">
              {isAdmin && (
                <button
                  onClick={() => setEditMode(!editMode)}
                  className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    editMode 
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                      : isTransparent 
                        ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
                        : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Edit3 className={`w-4 h-4 ${editMode ? "animate-pulse" : ""}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {editMode ? "Live Edit: ON" : "Live Edit"}
                  </span>
                </button>
              )}
              <div className="hidden md:flex items-center">
                {auth ? (
                  <div className="relative" ref={profileRef}>
                    <button
                      onClick={() => setProfileOpen(!profileOpen)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-colors ${isTransparent ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20' : 'bg-slate-900 hover:bg-primary text-white'}`}
                    >
                      <User className={`w-4 h-4 text-white`} />
                      <span className="text-[13px] font-bold text-white max-w-[120px] truncate">{auth.email}</span>
                      <ChevronRight className={`w-4 h-4 text-white/70 transition-transform ${profileOpen ? "rotate-90" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {profileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl border border-slate-200 shadow-xl py-2 z-[100]"
                        >
                          <div className="px-4 py-2 border-b border-slate-100">
                            <p className="text-xs text-slate-500">Logged in as</p>
                            <p className="font-semibold text-slate-800 truncate">{auth.email}</p>
                            {auth.isAdmin && <span className="text-[10px] text-amber-600 font-bold">ADMIN</span>}
                          </div>
                          <Link href="/profile" onClick={() => setProfileOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">
                            <User className="w-4 h-4" />
                            Profile & Change Password
                          </Link>
                          {auth.isAdmin && (
                            <Link href="/admin" onClick={() => setProfileOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">
                              <LayoutDashboard className="w-4 h-4" />
                              Admin Reports
                            </Link>
                          )}
                          <button onClick={logout} className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50">
                            <LogOut className="w-4 h-4" />
                            Logout
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href="https://lms.semesterprep.in/login" target="_blank" rel="noopener noreferrer" className="relative group/login inline-flex overflow-hidden px-8 py-3 rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]">
                    {/* Animated Gradient Edge */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 group-hover/login:opacity-100 transition-opacity duration-500 ${isTransparent ? 'opacity-40' : 'opacity-100'}`} style={{ backgroundSize: '200% 100%', animation: 'gradient-x 3s linear infinite' }} />
                    {/* Core pill (Transparent mode: frosted glass, Solid mode: dark base) */}
                    <div className={`absolute inset-[1.5px] rounded-full transition-all duration-500 ${isTransparent ? 'bg-black/40 backdrop-blur-xl group-hover/login:bg-black/10 group-hover/login:backdrop-blur-sm' : 'bg-slate-900 group-hover/login:bg-slate-800'}`} />

                    <span className="relative z-10 flex items-center gap-2 text-[13px] font-black uppercase tracking-[0.15em] text-white">
                      Login
                      <LogIn className="w-3.5 h-3.5 group-hover/login:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                )}
              </div>
              <button
                className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all active:scale-95 ${isTransparent ? 'bg-white/10 border border-white/20 text-white backdrop-blur-md' : 'bg-slate-100 border border-slate-200 text-slate-900 shadow-sm'}`}
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
                {isAdmin && (
                  <div className="pb-4 border-b border-slate-100">
                    <button
                      onClick={() => setEditMode(!editMode)}
                      className={`flex items-center justify-between w-full p-3.5 rounded-xl border transition-all ${
                        editMode 
                          ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Edit3 className={`w-4 h-4 ${editMode ? "animate-pulse" : ""}`} />
                        <span className="text-sm font-bold uppercase tracking-wider">
                          {editMode ? "Live Edit: ON" : "Live Edit Mode"}
                        </span>
                      </div>
                      <div className={`w-10 h-6 rounded-full relative transition-colors ${editMode ? 'bg-indigo-400' : 'bg-slate-300'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${editMode ? 'left-5' : 'left-1'}`} />
                      </div>
                    </button>
                  </div>
                )}
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
                                  href={p.href}
                                  prefetch={false}
                                  target={p.external ? (typeof window !== 'undefined' && window.innerWidth < 768 ? "_self" : "_blank") : undefined}
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
                        href={l.href}
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
                  {auth ? (
                    <>
                      <Link href="/profile" onClick={() => setOpen(false)} className="block p-3 font-bold text-slate-800">Profile</Link>
                      {auth.isAdmin && <Link href="/admin" onClick={() => setOpen(false)} className="block p-3 font-bold text-slate-800">Admin Reports</Link>}
                      <button onClick={() => { logout(); setOpen(false); }} className="w-full p-3 text-left font-bold text-red-600">Logout</button>
                    </>
                  ) : (
                    <Link href="https://lms.semesterprep.in/login" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="relative group/mobile-login block w-full overflow-hidden p-[2px] rounded-2xl transition-all">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-50 group-hover/mobile-login:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% 100%', animation: 'gradient-x 3s linear infinite' }} />
                      <div className="relative flex flex-col items-center justify-center bg-slate-950 group-hover/mobile-login:bg-slate-900 transition-colors w-full h-16 rounded-[14px]">
                        <span className="flex items-center gap-2 text-white font-black uppercase tracking-[0.2em] text-sm">
                          Login
                          <LogIn className="w-4 h-4 group-hover/mobile-login:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  )}
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
