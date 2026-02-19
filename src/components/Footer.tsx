import { GraduationCap } from "lucide-react";

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact us", href: "#contact" },
  { label: "Login", href: "#" },
];

const productLinks = [
  "AICAS", "SyntaxWorks", "MySkillForge", "SemesterPrep", "Training Programs", "Test Prep - Pro",
];

const trainingLinks = [
  "CRT", "Data Science", "Python Full Stack", "Java Full Stack", "MERN Stack",
  "Mobile Development", "Cyber Security", "IoT", "Blockchain", "Cloud Computing",
];

const Footer = () => (
  <footer className="bg-footer-bg text-footer-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8" />
            <span className="text-xl font-bold">LEARNSQUARE</span>
          </a>
          <div className="flex gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold text-lg mb-4">Our Products</h4>
          <ul className="space-y-2">
            {productLinks.map((l) => (
              <li key={l}>
                <a href="#products" className="text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Trainings */}
        <div>
          <h4 className="font-bold text-lg mb-4">Trainings in Emerging Technologies</h4>
          <ul className="space-y-1.5">
            {trainingLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-xs text-footer-foreground/70 hover:text-footer-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-footer-foreground/20">
      <div className="container py-4 text-center text-xs text-footer-foreground/60">
        Copyright © 2024 LEARNSQUARE TECHNOLOGIES PVT.LTD. All Rights Reserved. | Privacy Policy | Terms & Conditions
      </div>
    </div>
  </footer>
);

export default Footer;
