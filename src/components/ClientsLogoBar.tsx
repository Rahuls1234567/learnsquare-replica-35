const logos = Array.from({ length: 10 }, (_, i) => `/images/logo-${i + 1}.png`);

const ClientsLogoBar = () => (
  <section className="py-12 md:py-16 relative overflow-hidden">
    {/* Purple glow background */}
    <div className="absolute inset-0 bg-purple-glow pointer-events-none" />

    <div className="container relative z-10">
      <div className="flex justify-center mb-10">
        <div className="bg-primary/20 text-primary font-bold text-xl md:text-2xl px-10 py-4 rounded-full">
          Our Clients
        </div>
      </div>
    </div>

    {/* Scrolling logos */}
    <div className="overflow-hidden relative z-10">
      <div className="flex clients-scroll" style={{ width: "max-content" }}>
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="flex-shrink-0 mx-4 md:mx-6">
            <img
              src={src}
              alt="Client logo"
              className="h-16 md:h-20 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsLogoBar;
