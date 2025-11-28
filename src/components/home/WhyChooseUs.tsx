// src/components/home/WhyChooseUs.tsx

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

// Now exactly **6 items**
const features = [
  {
    icon: Award,
    title: "Authorised Dealer",
    description:
      "Daikin, Anutone Acoustic, and Symphony partnerships for genuine products and certified standards.",
  },
  {
    icon: BadgeCheck,
    title: "Strong Technical Expertise",
    description:
      "Specialists in HVAC, acoustic, thermal insulation, and ceiling systems.",
  },
  {
    icon: Puzzle,
    title: "Tailor-Made Engineering",
    description:
      "Solutions designed around your site conditions, performance goals, and budget.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Installation",
    description:
      "Genuine materials, precise execution, and strict quality checks at every stage.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description:
      "Clear BOQs and quotations so you always know exactly what you’re paying for.",
  },
  {
    icon: Layers,
    title: "End-to-End Execution",
    description:
      "Design, supply, installation, and long-term support handled by one accountable team.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#050A14] py-10 md:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-blue-500/6 blur-[95px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-3">
          <p
            className={`${ACCENT_COLOR_CLASS} text-xs md:text-sm uppercase tracking-[0.25em] animate-slide-up`}
            style={{ animationDelay: "0s" }}
          >
            Why Choose Zen
          </p>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white animate-slide-up leading-snug tracking-tight"
            style={{ animationDelay: "0.08s" }}
          >
            Engineering Excellence You Can Trust
          </h2>

          <p
            className="text-slate-300 text-sm md:text-base font-light animate-slide-up leading-relaxed"
            style={{ animationDelay: "0.16s" }}
          >
            From consultation to commissioning, we combine genuine materials,
            sound engineering, and disciplined execution for every project.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="
                  border border-white/10 bg-white/[0.03] backdrop-blur-sm
                  shadow-2xl shadow-black/30 group cursor-pointer h-full
                  transition-all duration-300 ease-out text-left
                  hover:-translate-y-[2px]
                  hover:border-blue-500/50
                  hover:shadow-[0_0_32px_rgba(59,130,246,0.18)]
                  animate-fade-in
                "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 md:p-7 flex flex-col">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/90 transition-all duration-300">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
