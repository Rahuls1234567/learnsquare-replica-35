import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "AICAS",
    description: "Helps you streamline Administration, enhance Efficiency, and improve Data Accuracy. The two layer AI Engine empowers you to optimize education and transform operations effortlessly.",
    image: "/images/products-1.png",
    link: "#",
  },
  {
    title: "SyntaxWorks",
    description: "SyntaxWorks helps you master coding and prepare for technical recruitment with multi-language support, dynamic testing, and performance analytics for efficient project development.",
    image: "/images/products-2.png",
    link: "#",
  },
  {
    title: "MySkillForge",
    description: "MySkillForge is a three-phase employability program designed to equip students with advanced technical skills and essential problem-solving, communication, and career-readiness abilities.",
    image: "/images/products-3.png",
    link: "#",
  },
  {
    title: "SemesterPrep",
    description: "SemesterPrep is your all-in-one solution for semester exam success, offering expert-curated materials, past papers, placement prep, and real-time updates—all accessible on any device.",
    image: "/images/products-4.png",
    link: "#",
  },
  {
    title: "Training Programs",
    description: "Our programs provide you with hands-on, immersive training in recruitment preparation and emerging technologies, guiding you from foundational learning to full-scale project implementation.",
    image: "/images/products-5.png",
    link: "#",
  },
  {
    title: "Test Prep - Pro",
    description: "Our online programs, delivered through a dedicated platform featuring LMS, SyntaxWorks, and TestPrep Pro, offer flexibility with practical learning, enabling you to master technology.",
    image: "/images/products-6.png",
    link: "#",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-16 md:py-24 bg-muted/50">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Products</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-primary">Empowering Educational Institutions</h3>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Empowering Institutions to Deliver Excellence with Cutting-Edge Technology
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="h-48 overflow-hidden bg-secondary flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-lg font-bold text-foreground">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <a
                href={p.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
