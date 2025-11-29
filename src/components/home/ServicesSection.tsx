// src/components/home/ServicesSection.tsx

import { useState, MouseEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wind,
  Volume2,
  Layers,
  Thermometer,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const ACCENT_COLOR_CLASS = "text-blue-400";

// --- 1. DATA DEFINITION ---

type TextureVariant = "grid" | "diagonal" | "dots" | "radial" | "smooth";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
  highlight?: boolean;
  texture: TextureVariant;
}

const services: Service[] = [
  {
    icon: Volume2,
    title: "Acoustic Insulation & Sound-Proofing",
    description:
      "High-performance acoustic treatment for offices, studios, conference rooms, and auditoriums (Authorised Anutone Acoustic Dealer).",
    slug: "acoustic-insulation-sound-proofing",
    texture: "grid",
  },
  {
    icon: Wind,
    title: "Air Conditioning & Ventilation",
    description:
      "VRV/VRF, ductable, split AC and fresh-air systems — from heat load calculation to design, supply, installation, and AMC (Authorised Daikin Dealer).",
    slug: "air-conditioning-ventilation",
    highlight: true,
    texture: "radial",
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    description:
      "Duct, pipe, roof, wall, and process insulation to reduce energy loss and improve system efficiency.",
    slug: "thermal-insulation",
    texture: "diagonal",
  },
  {
    icon: Layers,
    title: "Ceiling & Interior Systems",
    description:
      "Grid, gypsum, and acoustic ceilings with clean, functional detailing for modern interiors.",
    slug: "ceiling-interior-systems",
    texture: "smooth",
  },
];

const textureClassMap: Record<TextureVariant, string> = {
  grid: "bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)]",
  diagonal:
    "bg-[linear-gradient(135deg,_rgba(148,163,184,0.16)_0%,_rgba(15,23,42,0.1)_45%,_transparent_100%)]",
  dots: "bg-[radial-gradient(circle,_rgba(148,163,184,0.2)_1px,_transparent_1px)] bg-[length:14px_14px]",
  radial:
    "bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.26),_rgba(15,23,42,0.98))]",
  smooth: "bg-slate-900/70",
};

// --- 2. 3D MODEL COLUMN (LEFT) ---

const AcousticPanelModel = () => {
  const SKETCHFAB_URL =
    "https://sketchfab.com/models/9a014892b901438c8fb66cc0fa689264/embed?autospin=0.2&autostart=1&dnt=1&preload=1&ui_theme=dark";

  return (
    <div className="w-full h-full">
      <div
        className="
          relative 
          w-full 
          aspect-[4/3]
          sm:aspect-[3/2]
          lg:aspect-[16/10]
          rounded-3xl 
          bg-gradient-to-br from-blue-500/15 via-blue-900/10 to-slate-900/40
          border border-white/10 
          shadow-2xl shadow-black/40 
          overflow-hidden
          animate-fade-in
        "
        style={{ animationDelay: "0.12s" }}
      >
        {/* subtle inner glow ring */}
        <div className="pointer-events-none absolute -inset-16 bg-radial from-blue-500/15 via-transparent to-transparent opacity-60" />

        <iframe
          title="Air Handling Unit (AHU) 3D Model"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={SKETCHFAB_URL}
          className="relative z-10 w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
};

// --- 3. PREMIUM SERVICE CARD (RIGHT) ---

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = service.icon;
  const textureClass = textureClassMap[service.texture];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const baseCardClasses = `
    group relative h-full cursor-pointer overflow-hidden
    border border-white/10
    bg-white/[0.02] backdrop-blur-md
    shadow-xl shadow-black/40
    transition-all duration-300 ease-out
    hover:border-blue-500/60
    hover:shadow-[0_0_32px_rgba(59,130,246,0.3)]
    flex flex-col
    animate-fade-in
  `;

  const highlightClasses = service.highlight
    ? `
        border-blue-500/70
        hover:border-blue-400
        hover:shadow-[0_0_38px_rgba(59,130,246,0.55)]
        scale-[1.01] hover:scale-[1.03]
      `
    : "";

  const delay = `${0.18 + index * 0.06}s`;

  return (
    <Card
      className={`${baseCardClasses} ${highlightClasses}`}
      style={{
        animationDelay: delay,
        transform: `perspective(900px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.18s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Shine sweep overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-[40%] -translate-x-full group-hover:translate-x-[40%] group-hover:animate-card-shine bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      {/* Texture layer */}
      <div
        className={`
          absolute inset-0 opacity-[0.18] mix-blend-screen
          ${textureClass}
        `}
      />

      {/* Extra glow for highlighted service */}
      {service.highlight && (
        <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl mix-blend-screen" />
      )}

      <CardContent className="relative z-10 p-4 md:p-5 flex flex-col flex-grow">
        {/* Icon */}
        <div className="relative mb-3.5">
          <div
            className="
              w-10 h-10 md:w-11 md:h-11 rounded-xl 
              bg-blue-500/12 group-hover:bg-blue-500/90 
              flex items-center justify-center
              transition-all duration-300 ease-in-out
              shadow-[0_0_0_1px_rgba(148,163,184,0.35)]
              group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]
            "
          >
            <Icon className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
          </div>

          {/* floating dot */}
          <div className="absolute -right-2 top-1 h-2 w-2 rounded-full bg-blue-400/90 shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
        </div>

        {/* Title */}
        <h3
          className="
            text-sm md:text-base font-semibold text-white mb-1.5
            group-hover:text-blue-400 transition-colors duration-300
          "
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300/80 mb-3.5 leading-relaxed flex-grow text-xs md:text-sm">
          {service.description}
        </p>

        {/* Learn more link */}
        <NavLink
          to={`/services/${service.slug}`}
          className="
            text-blue-400 font-medium text-[11px] md:text-xs flex items-center gap-1.5 
            transition-all duration-300 relative self-start group/link
          "
        >
          <span className="group-hover/link:text-white transition-colors">
            Learn More
          </span>
          <ArrowRight
            className="
              h-3.5 w-3.5 transform translate-x-0 group-hover/link:translate-x-1 
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
    <section className="relative overflow-hidden bg-[#050A14] py-8 md:py-10">
      {/* background noise + glow, matching Hero aesthetic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* film-grain noise */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* soft blue glow */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[600px] h-[600px] bg-blue-500/8 blur-[95px] 
            rounded-full mix-blend-screen
          "
        />

        {/* top and bottom fades */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#050A14] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050A14] to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* header */}
        <div className="max-w-3xl mx-auto mb-7 md:mb-8 text-center space-y-2.5 animate-fade-in">
          {/* small glass badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] md:text-xs font-medium text-white/90 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="tracking-wide uppercase">
              HVAC · Acoustic · Insulation
            </span>
          </div>

          <span
            className={`${ACCENT_COLOR_CLASS} font-semibold text-[11px] md:text-xs uppercase tracking-[0.25em] block animate-slide-up`}
            style={{ animationDelay: "0s" }}
          >
            Our Core Services
          </span>

          <h2
            className="text-xl md:text-2xl lg:text-[26px] font-extrabold text-white mb-1 animate-slide-up leading-snug tracking-tight"
            style={{ animationDelay: "0.06s" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
              Engineered Comfort & Acoustic Control
            </span>
          </h2>

          <p
            className="text-slate-300 text-xs md:text-sm font-light animate-slide-up max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.12s" }}
          >
            Zen Engineering Solutions delivers focused HVAC, acoustic, insulation,
            and ceiling systems to make your spaces quieter, cooler, and more
            efficient.
          </p>
        </div>

        {/* 2-column: LEFT = 3D, RIGHT = CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 items-center mb-7 md:mb-8">
          {/* LEFT: 3D MODEL */}
          <div className="order-1">
            <AcousticPanelModel />
          </div>

          {/* RIGHT: SERVICE CARDS */}
          <div className="order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4.5">
              {services.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.28s" }}
        >
          <Button
            size="sm"
            variant="outline"
            asChild
            className="
              h-9 md:h-10 px-6 text-xs md:text-sm border-white/20 bg-white/5 
              backdrop-blur-sm text-white 
              hover:bg-white/10 hover:border-white/30 
              transition-all duration-300 rounded-full group
            "
          >
            <NavLink to="/services">
              <span className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
