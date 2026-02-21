import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "#products", hasDropdown: true },
  { label: "Contact us", href: "/contact" },
];

const products = [
  { title: "AICAS", href: "/aicas" },
  { title: "SyntaxWorks", href: "#" },
  { title: "MySkillForge", href: "#" },
  { title: "SemesterPrep", href: "#" },
  { title: "Training Programs", href: "#" },
  { title: "Test Prep - Pro", href: "#" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm py-2"
        : "bg-white py-4 md:py-6"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <div
            className="h-12 w-48 transition-transform group-hover:scale-105"
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
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <div
              key={l.label}
              className="relative py-2"
              onMouseEnter={() => l.hasDropdown && setShowProducts(true)}
              onMouseLeave={() => l.hasDropdown && setShowProducts(false)}
            >
              <Link
                to={l.href}
                className="relative text-[15px] font-bold text-foreground/70 hover:text-primary transition-colors group flex items-center gap-1"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>

              {/* Products Dropdown (Vertical List Style) */}
              {l.hasDropdown && (
                <AnimatePresence>
                  {showProducts && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-[260px] pt-4 z-[100]"
                    >
                      <div className="bg-[#7c66dc] shadow-2xl overflow-hidden rounded-lg">
                        <div className="flex flex-col">
                          {products.map((p) => (
                            <Link
                              key={p.title}
                              to={p.href}
                              onClick={() => setOpen(false)}
                              className="px-6 py-4 text-white font-bold text-[17px] hover:bg-white/10 transition-all hover:pl-8 active:scale-95 whitespace-nowrap cursor-pointer"
                            >
                              {p.title}
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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-bold text-foreground/70 hover:text-primary hover:bg-transparent transition-colors">
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground font-bold rounded-full px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95 leading-none">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border mt-2"
          >
            <div className="container py-8 space-y-6">
              {navLinks.map((l) => (
                <div key={l.label}>
                  <Link
                    to={l.href}
                    className="flex items-center justify-between py-2 text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                    <ChevronRight className="w-5 h-5 opacity-50" />
                  </Link>
                </div>
              ))}
              <div className="pt-6 space-y-4">
                <Button className="w-full bg-primary text-primary-foreground font-bold rounded-2xl py-6 shadow-lg">Get Started</Button>
                <Button variant="outline" className="w-full border-primary text-primary font-bold rounded-2xl py-6">Login</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
