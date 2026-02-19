import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <GraduationCap className="w-9 h-9 text-primary" />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-primary">
            LEARNSQUARE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-6">
            Login
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="block py-2 text-sm font-medium text-foreground/80">
              {l.label}
            </a>
          ))}
          <Button variant="outline" className="w-full border-primary text-primary rounded-full">Login</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
