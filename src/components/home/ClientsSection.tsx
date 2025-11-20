// ClientsSection.tsx

const clients = [
  {
    name: "Shubham Builders",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Shubham-Builders-Pune-Logo.png"
  },
  {
    name: "Chitale Dairy",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Chitale-Dairy-Logo.png"
  },
  {
    name: "Panchshil Builders",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Panchshil-Builders-Logo.png"
  },
  {
    name: "Bharati Vidyapeeth",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Bharati-Vidhyapeeth-Logo-300x71.png"
  },
  {
    name: "Indian Army",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/GOI-ARMY-logo.png"
  },
  {
    name: "CSIBER Kolhapur",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/CSIBER-Kolhapur-India-logo.png"
  },
  {
    name: "Eleganz Interiors",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/Eleganz-Interior-Ltd-Logo.png"
  },
  {
    name: "LES",
    logo: "https://zenengineerings.com/wp-content/uploads/2025/01/LES-logo.png"
  }
];

// Consistent styling constants
const BACKGROUND_COLOR = "#050A14";
const ACCENT_COLOR_CLASS = "text-blue-400";

const ClientsSection = () => {
  return (
    <section className={`section-padding relative overflow-hidden bg-[${BACKGROUND_COLOR}]`}>
      
      {/* --- BACKGROUND LAYER: Glow and Noise (Matches Hero/ServicesSection) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
        
        {/* Subtle Glow/Spotlight effect */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] 
                       bg-blue-500/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        {/* Refined Header Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in space-y-4">
          <span className={`${ACCENT_COLOR_CLASS} font-semibold text-base uppercase tracking-widest block animate-slide-up`} style={{ animationDelay: '0s' }}>
            Trusted Partners
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Our Valued Clients
          </h2>
          <p className="text-slate-300 text-xl font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Proud to serve leading organizations across various industries with our engineering excellence.
          </p>
        </div>

        {/* Client Logo Grid with Premium Glass wrappers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              // Premium Glass Wrapper Styling
              className="flex items-center justify-center p-6 rounded-xl 
                         bg-white/[0.03] border border-white/10 backdrop-blur-sm 
                         shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] 
                         transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-w-full h-16 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;