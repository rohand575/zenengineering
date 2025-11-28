// src/components/home/ClientsSection.tsx

const clients = [
  {
    name: "Shubham Builders",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Shubham-Builders-Pune-Logo.png",
  },
  {
    name: "Chitale Dairy",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Chitale-Dairy-Logo.png",
  },
  {
    name: "Panchshil Builders",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Panchshil-Builders-Logo.png",
  },
  {
    name: "Bharati Vidyapeeth",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Bharati-Vidhyapeeth-Logo-300x71.png",
  },
  {
    name: "Indian Army",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/GOI-ARMY-logo.png",
  },
  {
    name: "CSIBER Kolhapur",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/CSIBER-Kolhapur-India-logo.png",
  },
  {
    name: "Eleganz Interiors",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Eleganz-Interior-Ltd-Logo.png",
  },
  {
    name: "LES",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/LES-logo.png",
  },
];

const ACCENT_COLOR_CLASS = "text-blue-400";

const ClientsSection = () => {
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

        {/* Logo Grid – compact, glassy cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="
                flex items-center justify-center 
                p-4 md:p-5 rounded-xl 
                bg-white/[0.03] border border-white/10 backdrop-blur-sm 
                shadow-xl shadow-black/30
                hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
                hover:-translate-y-[2px]
                transition-all duration-400 
                animate-fade-in
              "
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  max-w-full h-10 md:h-12 object-contain 
                  grayscale opacity-60 
                  hover:grayscale-0 hover:opacity-100 
                  transition-all duration-400
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
