import { motion } from "framer-motion";

const clientLogos = [
  "/images/logo-1.png",
  "/images/logo-2.png",
  "/images/logo-3.png",
  "/images/logo-4.png",
  "/images/logo-5.png",
  "/images/logo-6.png",
  "/images/logo-7.png",
  "/images/logo-8.png",
  "/images/logo-9.png",
  "/images/logo-10.png",
];

const ClientsLogoBar = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">

      {/* Colorful Ambient Grid & Glows for Maximum Pop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f472b610_1px,transparent_1px),linear-gradient(to_bottom,#818cf810_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none animate-pulse-slow" />
      <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Vibrant Floating Header */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-100 bg-white shadow-[0_4px_20px_rgba(236,72,153,0.1)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse ring-4 ring-pink-500/30 relative z-10" />
            <span className="text-[10px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 uppercase tracking-widest relative z-10">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">Partnerships</span>
          </motion.h2>
        </div>
      </div>

      {/* The Central Visual Container */}
      <div className="relative w-full max-w-[1500px] mx-auto h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">

        {/* The Crisp, Hyper-Vibrant Core Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-400 via-purple-500 to-indigo-600 shadow-[inset_0_0_80px_rgba(255,255,255,0.3),0_10px_60px_rgba(168,85,247,0.4)] pointer-events-none" />

        {/* Extra glowing orbs tightly grouped around the core circle for color bleeding */}
        <div className="absolute top-1/2 left-[40%] -translate-y-[80%] w-[150px] h-[150px] bg-pink-400 rounded-full blur-[40px] opacity-60 pointer-events-none mix-blend-screen" />
        <div className="absolute top-[60%] left-[60%] w-[200px] h-[200px] bg-cyan-400 rounded-full blur-[50px] opacity-60 pointer-events-none mix-blend-screen" />

        {/* The Frosted Glass Pill Container */}
        <div className="absolute top-1/2 left-[2%] right-[2%] md:left-[5%] md:right-[5%] -translate-y-1/2 h-[180px] sm:h-[220px] md:h-[280px] bg-white/20 backdrop-blur-[24px] rounded-[3rem] sm:rounded-[4rem] md:rounded-[6rem] shadow-[0_8px_40px_rgba(30,27,75,0.08),inset_0_0_0_1.5px_rgba(255,255,255,0.8),inset_0_0_30px_rgba(255,255,255,0.5)] pointer-events-none z-0" />

        {/* Intense Edge Fades (Blends the pill and track seamlessly into white bg) */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-[350px] bg-gradient-to-r from-white via-white/95 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-[350px] bg-gradient-to-l from-white via-white/95 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="relative z-10 flex overflow-visible w-full items-center py-12">
          <motion.div
            className="flex w-max shrink-0 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...clientLogos, ...clientLogos].map((src, idx) => (
              <div key={idx} className="px-5 md:px-7 shrink-0 relative group">
                {/* Colorful shadow that blooms on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-indigo-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                <div className="relative flex items-center justify-center w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,1)] transition-all duration-300 hover:scale-[1.12] hover:-translate-y-2 cursor-pointer z-10">
                  <img
                    src={src}
                    alt={`Partner institution logo`}
                    loading="lazy"
                    className="max-w-[75%] max-h-[75%] object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogoBar;
