import { useParams } from "react-router-dom";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Check } from "lucide-react";

const serviceDetails: Record<string, any> = {
  "acoustic-engineering": {
    title: "Acoustic Engineering",
    description: "Transform your space with advanced acoustic solutions that create optimal sound environments for work, learning, and entertainment.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    overview: "Our acoustic engineering services combine cutting-edge technology with years of expertise to deliver superior sound control solutions. Whether you need noise reduction, sound isolation, or acoustic enhancement, our team designs and implements comprehensive solutions tailored to your specific requirements.",
    features: [
      "Comprehensive acoustic analysis and testing",
      "Custom sound absorption and diffusion solutions",
      "Noise control and vibration isolation",
      "Acoustic panel design and installation",
      "Performance optimization and verification",
      "Compliance with industry standards"
    ],
    benefits: [
      "Improved speech intelligibility",
      "Enhanced comfort and productivity",
      "Reduced noise pollution",
      "Better audio quality for meetings and presentations",
      "Compliance with building codes and regulations"
    ]
  },
  "hvac-design": {
    title: "HVAC Design",
    description: "Energy-efficient heating, ventilation, and air conditioning systems designed for optimal performance and sustainability.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    overview: "Our HVAC design services deliver customized climate control solutions that balance comfort, efficiency, and cost-effectiveness. We utilize the latest technology and industry best practices to create systems that meet your specific needs while minimizing environmental impact.",
    features: [
      "Detailed load calculations and analysis",
      "Energy-efficient system design",
      "Equipment selection and specification",
      "Ductwork and piping design",
      "Control system integration",
      "Building information modeling (BIM)"
    ],
    benefits: [
      "Reduced energy consumption and costs",
      "Improved indoor air quality",
      "Enhanced occupant comfort",
      "Longer equipment lifespan",
      "Lower maintenance requirements"
    ]
  },
  "insulation-services": {
    title: "Insulation Services",
    description: "Premium insulation solutions for superior thermal and acoustic performance, energy efficiency, and comfort.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
    overview: "Our insulation services provide comprehensive thermal and acoustic solutions that reduce energy costs, improve comfort, and enhance building performance. We use high-quality materials and proven installation techniques to deliver lasting results.",
    features: [
      "Thermal insulation for walls, roofs, and floors",
      "Acoustic insulation for sound control",
      "Pipe and duct insulation",
      "Cold storage insulation",
      "Fire-resistant insulation materials",
      "Energy audit and consultation"
    ],
    benefits: [
      "Significant energy savings",
      "Improved temperature control",
      "Reduced noise transmission",
      "Enhanced structural protection",
      "Lower carbon footprint"
    ]
  },
  "installation": {
    title: "Professional Installation",
    description: "Expert installation services ensuring your systems are set up correctly for optimal performance and longevity.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
    overview: "Our certified technicians provide professional installation services with meticulous attention to detail. We ensure every component is installed correctly, tested thoroughly, and optimized for peak performance.",
    features: [
      "Experienced and certified technicians",
      "Quality assurance at every stage",
      "Minimal disruption to operations",
      "Compliance with safety standards",
      "Comprehensive testing and commissioning",
      "Detailed documentation and handover"
    ],
    benefits: [
      "Guaranteed quality workmanship",
      "Faster project completion",
      "Reduced risk of future issues",
      "Complete system optimization",
      "Peace of mind with warranty coverage"
    ]
  },
  "maintenance": {
    title: "Maintenance Services",
    description: "Keep your systems running at peak performance with our comprehensive maintenance programs and support services.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    overview: "Regular maintenance is essential for ensuring the longevity and efficiency of your engineering systems. Our maintenance services include preventive care, performance monitoring, and emergency support to keep your operations running smoothly.",
    features: [
      "Scheduled preventive maintenance",
      "24/7 emergency repair services",
      "Performance monitoring and optimization",
      "Parts replacement and upgrades",
      "Annual maintenance contracts",
      "Remote diagnostics and support"
    ],
    benefits: [
      "Extended equipment lifespan",
      "Reduced unexpected breakdowns",
      "Lower long-term costs",
      "Maintained system efficiency",
      "Priority emergency response"
    ]
  },
  "climate-control": {
    title: "Climate Control Solutions",
    description: "Advanced climate control systems that provide precise temperature and humidity management for optimal comfort.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    overview: "Our climate control solutions leverage smart technology to create and maintain ideal environmental conditions. From intelligent thermostats to sophisticated building management systems, we deliver solutions that enhance comfort while reducing energy consumption.",
    features: [
      "Smart control systems and automation",
      "Temperature and humidity monitoring",
      "Energy management and optimization",
      "Zone-based climate control",
      "Integration with building systems",
      "Real-time alerts and diagnostics"
    ],
    benefits: [
      "Precise environmental control",
      "Reduced energy waste",
      "Enhanced occupant comfort",
      "Automated system optimization",
      "Data-driven insights for improvement"
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceDetails[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        {/* <Header /> */}
        <main className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Button asChild>
              <NavLink to="/services">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </NavLink>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-foreground/70 z-10" />
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-20 text-center text-background">
            <Button variant="outline" size="sm" asChild className="mb-6 bg-background/10 backdrop-blur-sm border-background/20 text-background hover:bg-background/20">
              <NavLink to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </NavLink>
            </Button>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
              {service.title}
            </h1>
            <p className="text-xl text-background/90 max-w-3xl mx-auto animate-fade-in">
              {service.description}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="section-padding bg-section-bg">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-none shadow-lg animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                  Contact us today to discuss your {service.title.toLowerCase()} requirements and get a customized solution.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <NavLink to="/contact">
                    Request a Quote
                  </NavLink>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
