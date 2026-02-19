const collaborations = [
  { image: "/images/client-1.png", title: "AICAS MoU with Modern Educational Society" },
  { image: "/images/client-2.png", title: "AICAS MoU with Shree Ramachandra College of Engineering" },
  { image: "/images/client-3.png", title: "MoU with GPREC for Training" },
  { image: "/images/client-4.png", title: "MoU with SHADAN for MySkillForge Program" },
];

const CollaborationsSection = () => (
  <section className="py-16 md:py-24 bg-muted/30">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
        Client Collaborations
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collaborations.map((c, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-44 overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-foreground text-center">{c.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CollaborationsSection;
