import { FileText, Users, BookOpen, Bell, Compass } from "lucide-react";

const features = [
  { icon: FileText, title: "Univ. Sem Exam PYQ's & Answers", desc: "10,000+ Univ. Sem Exam Prev. Year Questions & Answers Covering 120+ Subjects" },
  { icon: Users, title: "Curated by Subject Experts", desc: "Detailed Explanation of Answers from Top-Notch Subject Experts" },
  { icon: BookOpen, title: "Relevant PYQ Papers for all subjects", desc: "Repository of Subject-wise Univ. Sem Exam Prev. Year Question Papers" },
  { icon: Bell, title: "University Updates", desc: "One Stop Destination for all University Exam Updates." },
  { icon: Compass, title: "Career Guidance", desc: "Complete Guidance on Various Career Options after Graduation" },
];

const SemesterPrepSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">SemesterPrep</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{f.title}</h4>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img src="/images/semesterprep-img.png" alt="SemesterPrep" className="max-h-[350px] object-contain" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default SemesterPrepSection;
