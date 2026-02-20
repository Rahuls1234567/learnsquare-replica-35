import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        ? "bg-white/80 backdrop-blur-xl border-b border-border shadow-sm py-2"
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
            <a
              key={l.label}
              href={l.href}
              className="relative text-[15px] font-bold text-foreground/70 hover:text-primary transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-bold text-foreground/70 hover:text-primary hover:bg-transparent">
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground font-bold rounded-full px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-primary/10 text-primary"
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
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between py-2 text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </a>
              ))}
              <div className="pt-6 space-y-4">
                <Button className="w-full bg-primary text-primary-foreground font-bold rounded-2xl py-6">Get Started</Button>
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
