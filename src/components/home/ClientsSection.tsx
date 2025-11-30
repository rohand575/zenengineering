// src/components/home/ClientsSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Shubham Builders",
    logo: "/Shubham-Builders-Pune-Logo.png",
  },
  {
    name: "Chitale Dairy",
    logo: "/Chitale-Dairy-Logo.png",
  },
  {
    name: "Panchshil Builders",
    logo: "/Panchshil-Builders-Logo.png",
  },
  {
    name: "Bharati Vidyapeeth",
    logo: "/Bharati-Vidhyapeeth-Logo-300x71.png",
  },
  {
    name: "MES - Military Engineering Services",
    logo: "/mes-logo.png",
  },
  {
    name: "CSIBER Kolhapur",
    logo: "/CSIBER-Kolhapur-India-logo.png",
  },
  {
    name: "Eleganz Interiors",
    logo: "/Eleganz-Interior-Ltd-Logo.png",
  },
  {
    name: "LES",
    logo: "/LES-logo.png",
  },
  {
    name: "Hyundai",
    logo: "/hyundai.png",
  },
  {
    name: "Patankar Kale Constructions Pvt. Ltd.",
    logo: "/patankar-kale.png",
  },
  {
    name: "Studio 888",
    logo: "/studio-888.png",
  },
  {
    name: "Architect Prakash Jadhav",
    logo: "/prakash-jadhav.png",
  },
];

const ACCENT_COLOR_CLASS = "text-blue-400";

const ClientsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list so we can loop seamlessly (0% -> -50%)
  const repeatedClients = [...clients, ...clients];

  const marqueeAnimation = `
    @keyframes clients-marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <section className="relative overflow-hidden bg-[#050A14] py-10 md:py-12">
      {/* BACKGROUND: Noise + Glow (matches other sections) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Soft glow */}
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-blue-500/6 blur-[90px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        <style>{marqueeAnimation}</style>
        {/* Header – medium scale to match other sections */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 space-y-3">
          <p
            className={`${ACCENT_COLOR_CLASS} text-xs md:text-sm uppercase tracking-[0.25em] animate-slide-up`}
            style={{ animationDelay: "0s" }}
          >
            Trusted By
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white animate-slide-up leading-snug tracking-tight"
            style={{ animationDelay: "0.08s" }}
          >
            Clients Across Maharashtra
          </h2>
          <p
            className="text-slate-300 text-sm md:text-base font-light animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.16s" }}
          >
            From builders and institutions to government organizations, we’re
            proud to be a long-term engineering partner for diverse projects.
          </p>
        </div>

        {/* 3D-style Infinite Carousel */}
        {/* 3D-style Infinite Carousel */}
        <div
          className="relative mt-10 md:mt-12"  // added more space above
          style={{ perspective: "1400px" }}    // slightly enhanced 3D depth
        >
          <div className="relative overflow-visible py-6 md:py-8">
            {/* ↑ increased padding so hover does NOT get cut */}
            <motion.div
              className="flex w-max gap-10 md:gap-14 items-center"
              style={{
                animation: "clients-marquee 30s linear infinite",
                animationPlayState: isPaused ? "paused" : "running",
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {repeatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="shrink-0"
                  whileHover={{
                    scale: 1.06,       // slightly reduced (was 1.08)
                    rotateY: 6,        // softer 3D turn
                    translateY: -2,    // reduced lift so it won't clip
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="
                      flex items-center justify-center
                      px-8 py-5 md:px-10 md:py-6  /* bigger card interior */
                      rounded-2xl
                      bg-white/[0.03]
                      border border-white/10
                      backdrop-blur-md
                      shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                      hover:shadow-[0_25px_60px_rgba(37,99,235,0.35)]
                      transition-shadow duration-300
                    "
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="
                        max-w-[150px] md:max-w-[190px]
                        h-10 md:h-12
                        object-contain
                        transition-all duration-300
                      "
                      loading="lazy"
                    />
                  </div>

                  <p className="mt-4 text-center text-[11px] md:text-xs text-slate-400 tracking-wide uppercase">
                    {client.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
