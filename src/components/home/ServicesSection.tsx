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
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const services = [
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

const ServicesSection = () => {
  return (
    <section className="section-padding bg-section-bg relative overflow-hidden services-bg">
     <div className="absolute inset-0 services-bg opacity-80 blur-sm -z-10"></div>
      <div className="absolute inset-0 bg-section-bg/20 -z-10"></div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Image itself */}
        <div className="h-full w-full bg-[url('/services.jpg')] bg-cover bg-center opacity-30 blur-xl" />
        {/* Tint overlay to keep everything readable on top */}
        <div className="absolute inset-0 bg-section-bg/50" />
      </div>

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-muted-foreground font-bold text-lg">
            From design to maintenance, we provide end-to-end engineering
            services that ensure optimal performance and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                className="
                        hover-lift border border-border/50 bg-background/90 backdrop-blur-md
                        shadow-lg group cursor-pointer
                        transition-all duration-300
                        hover:shadow-[0_6px_15px_-2px_rgba(255,150,100,0.35)]
                      "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <NavLink
                    to={`/services/${service.slug}`}
                    className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </NavLink>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Button size="lg" variant="outline" asChild>
            <NavLink to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
