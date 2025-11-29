// src/components/home/WhyChooseUs.tsx

import { useState, MouseEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BadgeCheck,
  Puzzle,
  ShieldCheck,
  Receipt,
  Layers,
} from "lucide-react";

const ACCENT_COLOR_CLASS = "text-blue-400";

type TextureVariant = "grid" | "diagonal" | "dots" | "radial" | "smooth";

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  highlight?: boolean;
  texture: TextureVariant;
}

const features: Feature[] = [
  {
    icon: Award,
    title: "Authorised Dealer",
    description:
      "Daikin, Anutone Acoustic, and Symphony partnerships for genuine products and certified standards.",
    texture: "grid",
  },
  {
    icon: BadgeCheck,
    title: "Strong Technical Expertise",
    description:
      "Specialists in HVAC, acoustic, thermal insulation, and ceiling systems.",
    texture: "diagonal",
  },
  {
    icon: Puzzle,
    title: "Tailor-Made Engineering",
    description:
      "Solutions designed around your site conditions, performance goals, and budget.",
    highlight: true,
    texture: "radial",
  },
  {
    icon: ShieldCheck,
    title: "Certified Installation",
    description:
      "Genuine materials, precise execution, and strict quality checks at every stage.",
    texture: "dots",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description:
      "Clear BOQs and quotations so you always know exactly what you’re paying for.",
    texture: "smooth",
  },
  {
    icon: Layers,
    title: "End-to-End Execution",
    description:
      "Design, supply, installation, and long-term support handled by one accountable team.",
    texture: "grid",
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

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;

    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const Icon = feature.icon;
  const textureClass = textureClassMap[feature.texture];

  const baseCardClasses = `
    group relative h-full cursor-pointer overflow-hidden
    border border-white/10
    bg-white/[0.02] backdrop-blur-md
    shadow-2xl shadow-black/40
    transition-all duration-300 ease-out
    hover:border-blue-500/60
    hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]
  `;

  const highlightClasses = feature.highlight
    ? `
        border-blue-500/70
        hover:border-blue-400
        hover:shadow-[0_0_45px_rgba(59,130,246,0.55)]
        scale-[1.01] hover:scale-[1.03]
      `
    : "";

  return (
    <Card
      className={`${baseCardClasses} ${highlightClasses}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.18s ease-out",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Shine sweep overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-[40%] -translate-x-full group-hover:translate-x-[40%] group-hover:animate-card-shine bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      {/* Textures / Glow */}
      <div
        className={`
          absolute inset-0 opacity-[0.18] mix-blend-screen
          ${textureClass}
        `}
      />
      {feature.highlight && (
        <div className="absolute -top-24 -right-12 h-52 w-52 rounded-full bg-blue-500/25 blur-3xl mix-blend-screen" />
      )}

      <CardContent className="relative z-10 p-6 md:p-7 flex flex-col">
        {/* Icon */}
        <div className="relative mb-5">
          <div
            className={`
              flex items-center justify-center
              w-12 h-12 md:w-14 md:h-14 rounded-2xl
              bg-blue-500/12 group-hover:bg-blue-500/90
              transition-all duration-300
              shadow-[0_0_0_1px_rgba(148,163,184,0.35)]
              group-hover:shadow-[0_0_25px_rgba(59,130,246,0.75)]
            `}
          >
            <Icon className="relative z-10 h-6 w-6 md:h-7 md:w-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Tiny floating accent dot */}
          <div className="absolute -right-2 top-1 h-2 w-2 rounded-full bg-blue-400/90 shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
        </div>

        <h3
          className={`
            text-lg md:text-xl font-semibold mb-2
            text-white group-hover:text-blue-400
            tracking-tight transition-colors duration-300
          `}
        >
          {feature.title}
        </h3>

        <p className="text-slate-300/80 text-sm md:text-[15px] leading-relaxed">
          {feature.description}
        </p>

        <div className="mt-4 h-px w-0 group-hover:w-20 bg-gradient-to-r from-blue-400/80 via-cyan-300/70 to-transparent transition-all duration-500" />
      </CardContent>
    </Card>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#050A14] py-10 md:py-14">
      {/* Background: noise + soft gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-32 left-1/3 h-[360px] w-[460px] rounded-full bg-blue-500/28 blur-[100px] animate-gradient-orbit" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[320px] w-[420px] rounded-full bg-cyan-400/18 blur-[110px] animate-gradient-orbit-slow" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto mb-8 md:mb-10 max-w-3xl text-center space-y-3">
          <p
            className={`${ACCENT_COLOR_CLASS} text-xs md:text-sm uppercase tracking-[0.25em] animate-slide-up`}
            style={{ animationDelay: "0s" }}
          >
            Why Choose Zen
          </p>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white animate-slide-up leading-snug tracking-tight"
            style={{ animationDelay: "0.07s" }}
          >
            Engineering Excellence You Can Trust
          </h2>

          <p
            className="text-slate-300 text-sm md:text-base font-light animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.14s" }}
          >
            From consultation to commissioning, Zen Engineering delivers
            genuine materials, sound design, and disciplined execution –
            with one accountable team owning your project end-to-end.
          </p>
        </div>

        {/* 3x2 Premium Grid */}
        <div
          className="
            grid gap-6 md:gap-7
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          "
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
