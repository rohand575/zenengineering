import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wind,
  Volume2,
  Shield,
  Settings,
  Wrench,
  Thermometer,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

// --- 1. DATA DEFINITION ---

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const services: Service[] = [
  {
    icon: Volume2,
    title: "Acoustic Engineering",
    description:
      "Advanced sound control solutions for optimal acoustic performance in any environment.",
    slug: "acoustic-engineering",
  },
  {
    icon: Wind,
    title: "HVAC Design",
    description:
      "Custom heating, ventilation, and air conditioning systems designed for maximum efficiency.",
    slug: "hvac-design",
  },
  {
    icon: Shield,
    title: "Insulation Services",
    description:
      "Premium thermal and acoustic insulation for energy efficiency and comfort.",
    slug: "insulation-services",
  },
  {
    icon: Settings,
    title: "Installation",
    description:
      "Professional installation services ensuring precision and quality in every project.",
    slug: "installation",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Comprehensive maintenance programs to keep your systems running at peak performance.",
    slug: "maintenance",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Smart climate control solutions for sustainable and comfortable environments.",
    slug: "climate-control",
  },
];

// --- 2. 3D MODEL COLUMN (LEFT) ---

const AcousticPanelModel = () => {
  const SKETCHFAB_URL =
    "https://sketchfab.com/models/ac166eb474a24506a53762b4b1991b8b/embed?autospin=0.2&autostart=1&dnt=1&preload=1&ui_theme=dark";

  return (
    <div className="w-full h-full">
      <div
        className="
          relative 
          w-full 
          aspect-[4/5] 
          sm:aspect-[3/4] 
          lg:aspect-[4/5]
          rounded-3xl 
          bg-gradient-to-br from-blue-500/15 via-blue-900/10 to-slate-900/40
          border border-white/10 
          shadow-2xl shadow-black/40 
          overflow-hidden
          animate-fade-in
        "
        style={{ animationDelay: "0.2s" }}
      >
        {/* subtle inner glow ring */}
        <div className="pointer-events-none absolute -inset-16 bg-radial from-blue-500/15 via-transparent to-transparent opacity-60" />

        <iframe
          title="Acoustic Panel Optimized"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={SKETCHFAB_URL}
          className="relative z-10 w-full h-full rounded-3xl"
        />
      </div>

      {/* caption under model */}
      <p className="mt-4 text-sm text-slate-400 text-center">
        Realistic acoustic panel visualization used in{" "}
        <span className="text-blue-400 font-semibold">Zen Engineering</span>{" "}
        design studies.
      </p>
    </div>
  );
};

// --- 3. SERVICE CARD (RIGHT) ---

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon;

  const cardClasses = `
    border border-white/10 bg-white/[0.03] backdrop-blur-sm
    shadow-2xl shadow-black/30 group cursor-pointer h-full flex flex-col
    transition-all duration-300 ease-out
    hover:-translate-y-[3px] 
    hover:border-blue-500/50 
    hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
    animate-fade-in
  `;

  const cardDelay = `${0.2 + index * 0.06}s`;

  return (
    <Card className={cardClasses} style={{ animationDelay: cardDelay }}>
      <CardContent className="p-7 flex flex-col flex-grow">
        <div
          className="
            w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 
            group-hover:bg-blue-500/90 transition-all duration-300 ease-in-out
            shadow-inner shadow-blue-500/20
          "
        >
          <Icon className="h-7 w-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-slate-400 mb-5 leading-relaxed flex-grow text-sm md:text-base">
          {service.description}
        </p>

        <NavLink
          to={`/services/${service.slug}`}
          className="
            text-blue-400 font-semibold text-xs md:text-sm flex items-center gap-2 
            transition-all duration-300 relative self-start group/link
          "
        >
          <span className="group-hover/link:text-white transition-colors">
            Learn More
          </span>
          <ArrowRight
            className="
              h-4 w-4 transform translate-x-0 group-hover/link:translate-x-1 
              transition-transform duration-300
            "
          />
        </NavLink>
      </CardContent>
    </Card>
  );
};

// --- 4. MAIN SECTION (2-COLUMN LAYOUT) ---

const ServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[#050A14]">
      {/* background noise + glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[800px] h-[800px] bg-blue-500/5 blur-[100px] 
            rounded-full mix-blend-screen
          "
        />
      </div>

      <div className="container-custom relative z-10">
        {/* header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in space-y-4">
          <span
            className="text-blue-400 font-semibold text-base uppercase tracking-widest block animate-slide-up"
            style={{ animationDelay: "0s" }}
          >
            Our Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Comprehensive Engineering Solutions
          </h2>
          <p
            className="text-slate-300 text-base md:text-xl font-light animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            From design to maintenance, we provide end-to-end engineering
            services that ensure optimal performance and longevity.
          </p>
        </div>

        {/* 2-column: LEFT = 3D, RIGHT = CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* LEFT: 3D MODEL */}
          <div className="order-1">
            <AcousticPanelModel />
          </div>

          {/* RIGHT: SERVICE CARDS */}
          <div className="order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <Button
            size="lg"
            variant="outline"
            asChild
            className="
              h-14 px-8 text-base border-blue-500/20 bg-blue-500/5 
              backdrop-blur-sm text-white 
              hover:bg-blue-500/10 hover:border-blue-500/30 
              transition-all duration-300 rounded-full group
            "
          >
            <NavLink to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
