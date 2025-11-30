import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText/ShinyText";
import { Link } from "react-router-dom";

// ⬇️ PartnerLogos Component
const PartnerLogos = () => {
  const partners = [
    {
      name: "Daikin",
      logoSrc: "/daikin-logo.png",
    },
    {
      name: "Anutone",
      logoSrc: "/anutone-logo.jpeg",
    },
    {
      name: "Symphony",
      logoSrc: "/symphony-logo.png",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-sm font-medium text-white mb-1">
        Authorised Partners
      </div>
      <div className="flex items-center space-x-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="h-7 opacity-100 hover:scale-105 transition-all duration-300"
          >
            <img
              src={partner.logoSrc}
              alt={`${partner.name} logo`}
              className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
// ⬆️ PartnerLogos Component

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden bg-[#050A14] py-12 md:py-16">
      {/* --- LAYER 1: Background Image & Texture --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="Modern engineering workspace"
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* --- LAYER 2: Cinematic Lighting (Gradients) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050A14] to-transparent" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* --- LAYER 3: Content --- */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-white/90 mb-6 md:mb-7 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide text-xs uppercase">
              Engineering Comfort. Delivering Excellence.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 md:mb-6 leading-snug tracking-tight max-w-3xl">
            <span className="flex flex-wrap items-baseline gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                Engineering
              </span>

              <ShinyText
                text="HVAC & Acoustic"
                speed={4}
                disabled={false}
                className="text-blue-400 italic drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              />

              <span className="font-light text-white/80">
                Solutions That Last.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-slate-300 mb-5 md:mb-7 max-w-3xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
            Trusted across Maharashtra, Zen Engineering Solutions provides
            premium HVAC, acoustic, and insulation services backed by proven
            engineering expertise. With offices in Sangli, Kolhapur, and Pune,
            we deliver energy-efficient solutions tailored to residential,
            commercial, industrial, and government needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-6 md:mb-8">
            <Button
              size="lg"
              className="h-12 md:h-13 px-7 md:px-8 text-base bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full shadow-[0_0_16px_rgba(255,255,255,0.25)] font-semibold group"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 md:h-13 px-7 md:px-8 text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full"
              asChild
            >
              <Link to="/projects" className="flex items-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Stats bar – UPDATED LAYOUT */}
                  <div
          className="max-w-4xl rounded-xl bg-[#050A14]/80 p-6 
                    ring-1 ring-inset ring-blue-500/20 
                    shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Offices */}
            <div className="flex items-start gap-3 min-w-[180px]">
              <div className="text-blue-400 text-3xl font-bold">3</div>
              <div>
                <div className="text-sm font-medium text-white">Offices</div>
                <div className="text-[12px] text-slate-400">Across Maharashtra</div>
              </div>
            </div>

            {/* Partners */}
            <div className="flex items-center gap-4">
  <div className="w-[80px] h-[28px] flex items-center justify-center">
    <img
      src="/daikin-logo.png"
      className="max-h-full max-w-full object-contain"
    />
  </div>

  <div className="w-[80px] h-[28px] flex items-center justify-center">
    <img
      src="/anutone-logo.jpeg"
      className="max-h-full max-w-full object-contain"
    />
  </div>

  <div className="w-[80px] h-[34px] flex items-center justify-center">
    <img
      src="/symphony-logo.png"
      className="max-h-full max-w-full object-contain"
    />
  </div>
</div>


            {/* Reliable Service */}
            <div className="flex items-start gap-3 min-w-[180px] justify-end">
              <div className="text-blue-400 text-3xl font-bold">★</div>
              <div>
                <div className="text-sm font-medium text-white">Reliable Service</div>
                <div className="text-[12px] text-slate-400">
                  Materials & installations you can trust
                </div>
              </div>
            </div>

          </div>
        </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
