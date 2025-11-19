// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Volume2, Shield, Settings, Wrench, Thermometer, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const services = [
  {
    icon: Volume2,
    title: "Acoustic Engineering",
    description: "Advanced sound control solutions for optimal acoustic performance in any environment. We design and implement comprehensive acoustic treatments for offices, auditoriums, recording studios, and industrial facilities.",
    slug: "acoustic-engineering",
    features: [
      "Sound isolation and absorption",
      "Noise control solutions",
      "Acoustic design consultation",
      "Performance testing and optimization"
    ]
  },
  {
    icon: Wind,
    title: "HVAC Design",
    description: "Custom heating, ventilation, and air conditioning systems designed for maximum efficiency. Our HVAC solutions ensure optimal climate control while minimizing energy consumption.",
    slug: "hvac-design",
    features: [
      "Custom system design",
      "Energy efficiency optimization",
      "Load calculations",
      "Equipment selection and specifications"
    ]
  },
  {
    icon: Shield,
    title: "Insulation Services",
    description: "Premium thermal and acoustic insulation for energy efficiency and comfort. We provide comprehensive insulation solutions for walls, roofs, pipes, and ducts.",
    slug: "insulation-services",
    features: [
      "Thermal insulation",
      "Acoustic insulation",
      "Pipe and duct insulation",
      "Energy-efficient materials"
    ]
  },
  {
    icon: Settings,
    title: "Installation",
    description: "Professional installation services ensuring precision and quality in every project. Our certified technicians handle all aspects of system installation with meticulous attention to detail.",
    slug: "installation",
    features: [
      "Professional system installation",
      "Quality assurance checks",
      "Compliance with standards",
      "Minimal disruption to operations"
    ]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Comprehensive maintenance programs to keep your systems running at peak performance. Regular maintenance ensures longevity and optimal efficiency of your installations.",
    slug: "maintenance",
    features: [
      "Preventive maintenance",
      "Emergency repair services",
      "Performance monitoring",
      "Annual maintenance contracts"
    ]
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Smart climate control solutions for sustainable and comfortable environments. We implement advanced control systems for precise temperature and humidity management.",
    slug: "climate-control",
    features: [
      "Smart control systems",
      "Temperature and humidity management",
      "Energy monitoring",
      "Automated climate optimization"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
          <div className="container-custom">
            <div className="max-w-3xl animate-slide-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Engineering Solutions
              </h1>
              <p className="text-xl text-background/90 leading-relaxed">
                From design to maintenance, we provide end-to-end engineering services that ensure optimal performance and longevity.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.slug}
                    className="border-none shadow-lg hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="text-primary mt-1">✓</span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full">
                        <NavLink to={`/services/${service.slug}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </NavLink>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss your project requirements and find the perfect solution for your needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
