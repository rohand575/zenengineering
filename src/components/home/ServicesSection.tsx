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

// --- 2. SUB-COMPONENT: ServiceCard (Elevated for Premium Look) ---

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = service.icon;

  // Premium Card Styling: Glassmorphism background, subtle blue glow on hover
  const cardClasses = `
    border border-white/10 bg-white/[0.03] backdrop-blur-sm
    shadow-2xl shadow-black/30 group cursor-pointer h-full flex flex-col
    transition-all duration-300 ease-out
    hover:-translate-y-[3px] 
    hover:border-blue-500/50 
    hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
    animate-fade-in
  `;

  return (
    <Card
      className={cardClasses}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <CardContent className="p-8 flex flex-col flex-grow">
        {/* Icon Container: Rounded-square, inner shadow effect */}
        <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 
                        group-hover:bg-blue-500/90 transition-all duration-300 ease-in-out
                        shadow-inner shadow-blue-500/20">
          <Icon className="h-8 w-8 text-blue-400 group-hover:text-white transition-colors duration-300" />
        </div>
        
        {/* Typography: Matching Hero's high-contrast white text */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>
        {/* Using a lighter slate text color for description */}
        <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* Link Interaction: Subtle blue primary color with smooth arrow movement */}
        <NavLink
          to={`/services/${service.slug}`}
          className="text-blue-400 font-semibold text-sm flex items-center gap-2 
                     transition-all duration-300 relative self-start group/link"
        >
          <span className="group-hover/link:text-white transition-colors">
            Learn More
          </span>
          <ArrowRight 
            className="h-4 w-4 transform translate-x-0 group-hover/link:translate-x-1 
                       transition-transform duration-300" 
          />
        </NavLink>
      </CardContent>
    </Card>
  );
};


// --- 3. MAIN COMPONENT: ServicesSection ---

const ServicesSection = () => {
  // Use the same dark background color and lighting effects as Hero.tsx
  const BACKGROUND_COLOR = "#050A14";
  const PRIMARY_COLOR = "rgba(59, 130, 246, 0.1)"; // blue-500/10

  return (
    <section className={`section-padding relative overflow-hidden bg-[${BACKGROUND_COLOR}]`}>
      
      {/* --- BACKGROUND LAYER: Glow and Noise (Matches Hero) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
        
        {/* Subtle Glow/Spotlight effect behind the cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                       bg-blue-500/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        {/* Refined Header Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in space-y-4">
          <span className="text-blue-400 font-semibold text-base uppercase tracking-widest block animate-slide-up" style={{ animationDelay: '0s' }}>
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-slate-300 text-xl font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            From design to maintenance, we provide end-to-end engineering
            services that ensure optimal performance and longevity.
          </p>
        </div>

        {/* Modular Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action Button (Matches Hero's outline button style) */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            // Adopt Hero's outline button styling: glass background, white text, blue hover
            className="h-14 px-8 text-base border-blue-500/20 bg-blue-500/5 backdrop-blur-sm text-white hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 rounded-full group"
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