import { useParams } from "react-router-dom";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Check } from "lucide-react";

const serviceDetails: Record<string, any> = {
  "air-conditioning-ventilation": {
    title: "Air Conditioning & Ventilation",
    description:
      "Complete HVAC solutions including design, supply, installation, and maintenance — backed by authorised Daikin dealership standards.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    overview:
      "We deliver end-to-end HVAC systems that balance comfort, efficiency, and reliability. From VRV/VRF design to ductable units, split ACs, and fresh air systems, our engineers size, specify, and commission equipment for consistent performance.",
    features: [
      "VRV/VRF system design and execution",
      "Ductable units and split AC solutions",
      "Fresh air and ventilation systems",
      "Load calculations, equipment selection, and BOQs",
      "Preventive maintenance for peak efficiency",
      "Authorised Dealer for Daikin",
    ],
    benefits: [
      "Energy-efficient climate control",
      "Balanced airflow and air quality",
      "Lower lifecycle costs through correct sizing",
      "Reliable support across Maharashtra",
      "Certified installation and commissioning",
    ],
  },
  "acoustic-insulation-sound-proofing": {
    title: "Acoustic Insulation & Sound-Proofing",
    description:
      "High-performance acoustic solutions for superior sound control and clarity in every environment.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    overview:
      "We combine material science with precise detailing to block noise transfer and tune rooms for clarity. From studios to conference halls, our solutions address isolation, reverberation control, and intelligibility.",
    features: [
      "Studios and home theatres",
      "Offices and conference rooms",
      "Auditoriums and government projects",
      "Acoustic design, testing, and optimization",
      "Performance-grade materials and detailing",
      "Authorised Dealer for Anutone Acoustic",
    ],
    benefits: [
      "Improved speech and audio clarity",
      "Controlled reverberation and noise transfer",
      "Application-specific acoustic tuning",
      "Durable, specification-driven installations",
      "Certified materials with reliable sourcing",
    ],
  },
  "thermal-insulation": {
    title: "Thermal Insulation",
    description:
      "Energy-efficient insulation to reduce heat transfer and improve system performance across ducts, pipes, roofs, and walls.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
    overview:
      "Our insulation solutions minimise energy loss and protect systems from thermal stress. We recommend materials based on operating conditions, durability, and compliance requirements for industrial and commercial projects.",
    features: [
      "Duct insulation for HVAC efficiency",
      "Pipe insulation for hot and chilled water lines",
      "Roof and wall insulation",
      "Industrial and process applications",
      "Material consultation and BOQs",
    ],
    benefits: [
      "Reduced energy consumption",
      "Stable temperatures and system longevity",
      "Lower operating costs",
      "Condensation and corrosion control",
      "Improved safety and compliance",
    ],
  },
  "ceiling-interior-systems": {
    title: "Ceiling & Interior Systems",
    description:
      "Functional and aesthetic ceiling solutions including grid, gypsum, acoustic ceilings, and cloud shapes.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    overview:
      "We design and install ceiling systems that integrate acoustics, services, and visual appeal. Each solution is detailed for access, durability, and seamless coordination with HVAC and lighting.",
    features: [
      "Grid ceilings",
      "Gypsum ceilings",
      "Acoustic ceilings",
      "Cloud shapes and feature elements",
      "Integrated service coordination",
    ],
    benefits: [
      "Balanced aesthetics and performance",
      "Improved acoustic comfort",
      "Neat service integration and access",
      "Quality finishes with long-term durability",
    ],
  },
  "specialized-acoustic-rooms": {
    title: "Specialized Acoustic Rooms",
    description:
      "Custom designed and executed acoustic spaces for critical listening, performance, and presentations.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    overview:
      "From concept to commissioning, we build bespoke rooms that meet stringent acoustic targets. Detailing covers structure-borne isolation, surface treatments, and HVAC noise control to achieve predictable results.",
    features: [
      "Auditoriums and government halls",
      "Recording studios and control rooms",
      "Editing and dubbing rooms",
      "Boardrooms and presentation suites",
      "High-end home theatres",
    ],
    benefits: [
      "Precisely controlled acoustic environments",
      "Turnkey delivery with tested performance",
      "Comfortable HVAC with low noise intrusion",
      "Single-point accountability from design to install",
    ],
  },
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
