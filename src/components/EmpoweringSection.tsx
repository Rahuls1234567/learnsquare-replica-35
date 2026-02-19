import { Settings, Code, ClipboardCheck, BookOpen, Monitor, ShieldCheck } from "lucide-react";

const items = [
  { icon: Settings, label: "AICAS - ERP (AI Powered Campus Automation Sol.)" },
  { icon: Code, label: "Coding Platform" },
  { icon: ClipboardCheck, label: "Assessments" },
  { icon: BookOpen, label: "Courses for Semester Exams Preparation" },
  { icon: Monitor, label: "Online Training & Internship" },
  { icon: ShieldCheck, label: "Offline Training & Internship" },
];

const EmpoweringSection = () => (
  <section className="py-12 md:py-16 bg-background">
    <div className="container grid md:grid-cols-2 gap-10 items-start">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-hero-orange">
          Empowering Education
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-accent">Transforming Futures</h3>
        <p className="text-hero-blue font-semibold text-sm md:text-base leading-relaxed">
          The Idea : Everything University need to Manage, Engage, and Elevate their Educational Experience within a Single Platform.
        </p>
        <p className="text-foreground">
          Our <strong>One-Stop Solution</strong> integrates
        </p>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-foreground">
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              <span>{i + 1}. {item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/hero-slide-1.png"
          alt="Campus Solutions"
          className="max-h-[320px] w-auto object-contain rounded-xl"
        />
      </div>
    </div>
  </section>
);

export default EmpoweringSection;
