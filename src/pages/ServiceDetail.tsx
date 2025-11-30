import { useParams } from "react-router-dom";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Check } from "lucide-react";

const serviceDetails: Record<string, any> = {
  "acoustic-insulation": {
    title: "Acoustic Insulation & Sound-Proofing Solutions",
    description:
      "Turnkey acoustic solutions using proven Anutone systems—design, drywalls, ceilings, panelling, and soundproofing for every type of space.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&q=80",
    overview:
      "We leverage the proven acoustic systems of Anutone Acoustics to deliver turnkey sound control solutions—from design to installation—for all types of spaces.",
    features: [
      "Acoustic design and consultancy for room-by-room performance",
      "Drywalls and partitions with Anutone-certified systems (e.g., Tufbloc)",
      "Factory-finished acoustic ceilings and wall panelling across finishes",
      "Soundproofing and noise control for studios, theatres, offices, and public spaces",
      "Turnkey delivery: planning, drawings, supply, and installation guidance",
    ],
    benefits: [
      "Backed by 50+ years of acoustic system expertise",
      "Modular, factory-finished solutions that install fast and clean",
      "Certified performance for fire, water, noise, and durability standards",
      "One-stop execution without juggling multiple vendors",
    ],
  },
  "air-conditioning-ventilation": {
    title: "Air Conditioning & Ventilation",
    description:
      "Complete Daikin-powered HVAC: VRV/VRF, ductable ACs, splits, cassette systems, and fresh-air ventilation with certified commissioning.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    overview:
      "We provide end-to-end HVAC systems designed for comfort, efficiency, and long-term performance. As an authorised Daikin dealer, we handle design, supply, installation, commissioning, and preventive maintenance.",
    features: [
      "VRV/VRF design with load calculations, drawings, and BOQs",
      "Ductable ACs, split units, cassette systems, and fresh-air integration",
      "Balanced airflow, filtration, and ventilation for better indoor air quality",
      "Certified installation, testing, and commissioning to Daikin standards",
      "Preventive maintenance and reliable service support across Maharashtra",
    ],
    benefits: [
      "High energy efficiency with inverter and VRV technology",
      "Consistent comfort through correct sizing and airflow design",
      "Lower lifecycle and maintenance costs from right-first-time execution",
      "Warranty-compliant installation and responsive service",
    ],
  },
  "thermal-insulation": {
    title: "Thermal Insulation",
    description:
      "Energy-efficient insulation for ducts, pipes, roofs, and envelopes using Rockwool, Glasswool, Nitrile Rubber, XLPE, and XPS.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
    overview:
      "We design insulation systems to minimise heat transfer, control condensation, and improve efficiency across HVAC, industrial, commercial, and residential applications.",
    features: [
      "Thermal insulation for supply, return, exhaust, and fresh-air ducts",
      "Pipe insulation for hot water, chilled water, and process lines",
      "Roof and wall insulation for residential, commercial, and industrial projects",
      "Material selection across Rockwool, Glasswool, Nitrile Rubber, XLPE, and XPS",
      "Detailed routing, BOQs, and skilled installation with vapor barriers and cladding",
    ],
    benefits: [
      "Reduced energy consumption and heat gain/loss",
      "Stable operating temperatures and better equipment life",
      "Lower operating costs with efficient, specification-driven installs",
      "Condensation and corrosion control for safer, compliant systems",
    ],
  },
  "ceiling-systems": {
    title: "Ceilings",
    description:
      "Functional and aesthetic ceiling systems: grid, gypsum, acoustic, baffle/cloud, and metal solutions with service-friendly layouts.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    overview:
      "We design and execute ceiling systems that enhance acoustics, conceal services, and elevate interiors—coordinated with HVAC, electrical, and lighting layouts.",
    features: [
      "Grid ceilings, gypsum ceilings, and acoustic ceilings",
      "Cloud shapes, feature elements, baffle, and metal ceilings",
      "Service-friendly layouts with clean access points",
      "Custom designs for residential, commercial, and institutional projects",
    ],
    benefits: [
      "Balanced aesthetics with high-performance functionality",
      "Enhanced acoustic comfort and neat service integration",
      "Superior finishing with durable, precise detailing",
      "Scalable solutions for both large projects and premium residences",
    ],
  },
  "auditorium-home-theatre": {
    title: "Comprehensive Auditorium & Home Theatre Interior Solutions",
    description:
      "Complete interiors for auditoriums, studios, offices, and premium homes—carpets, acoustic doors, stage flooring, seating, and recliners.",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80",
    overview:
      "We supply and execute specialised interior works with precision materials—from carpets and acoustic doors to stages, auditorium chairs, and recliners—tailored for performance, comfort, and durability.",
    features: [
      "Carpets and carpet tiles for offices, hotels, theatres, and home theatres",
      "High-STC acoustic doors for studios, conference rooms, and auditoriums",
      "Robust stage flooring for performances and multipurpose halls",
      "Auditorium chairs with ergonomic, durable, and premium upholstery options",
      "Motorised and manual recliners with fitting and electrical integration",
    ],
    benefits: [
      "Enhanced acoustic performance and audience comfort",
      "Premium interiors with durable, long-term finishes",
      "Customisable designs, colours, and configurations",
      "One-stop execution for flooring, doors, seating, and finishing works",
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
