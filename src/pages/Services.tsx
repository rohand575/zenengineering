// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Volume2, Layers, Thermometer, ArrowRight, PlayCircle, Clapperboard } from "lucide-react";
import { NavLink } from "react-router-dom"; // Assuming you use react-router-dom NavLink/Link
import ShinyText from "@/components/ui/ShinyText/ShinyText"; // Assuming this utility is available
import { Helmet } from "react-helmet-async";


const services = [
  {
    icon: Volume2,
    title: "Acoustic Insulation & Sound-Proofing",
    description: "Turnkey acoustic design and execution using proven Anutone systems—drywalls, ceilings, panelling, and soundproofing for any space.",
    slug: "acoustic-insulation",
    features: [
      "Acoustic design & consultancy",
      "Drywalls and noise-isolating partitions",
      "Acoustic ceilings and wall panelling",
      "Soundproofing for studios, offices, theatres"
    ]
  },
  {
    icon: Wind,
    title: "Air Conditioning & Ventilation",
    description: "Complete Daikin-powered HVAC: VRV/VRF, ductable ACs, splits, cassette systems, and fresh-air ventilation with certified commissioning.",
    slug: "air-conditioning-ventilation",
    features: [
      "VRV/VRF design and execution",
      "Ductable, split, and cassette ACs",
      "Fresh-air and ventilation systems",
      "Heat load, sizing, BOQs, and maintenance"
    ]
  },
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    description: "Energy-efficient insulation for ducts, pipes, roofs, and envelopes using Rockwool, Glasswool, Nitrile Rubber, XLPE, and XPS.",
    slug: "thermal-insulation",
    features: [
      "Duct and pipe insulation",
      "Roof and wall insulation",
      "Industrial/process applications",
      "Material selection and detailed BOQs"
    ]
  },
  {
    icon: Layers,
    title: "Ceilings",
    description: "Functional and aesthetic ceiling systems: grid, gypsum, acoustic, baffle/cloud, and metal solutions with service-friendly layouts.",
    slug: "ceiling-systems",
    features: [
      "Grid ceilings",
      "Gypsum ceilings",
      "Acoustic ceilings & feature elements",
      "Metal and baffle/cloud ceilings"
    ]
  },
  {
    icon: Clapperboard,
    title: "Auditorium & Home Theatre Interiors",
    description: "End-to-end interiors for auditoriums, studios, offices, and premium homes—carpets, acoustic doors, stages, seating, and recliners.",
    slug: "auditorium-home-theatre",
    features: [
      "Carpets and carpet tiles",
      "High-STC acoustic doors",
      "Stage flooring and finishes",
      "Auditorium chairs and recliners"
    ]
  },
];

const applicationAreas = [
  "Residential Homes",
  "Offices & Commercial Spaces",
  "Recording Studios",
  "Home Theatres",
  "Restaurants & Banquet Halls",
  "Industrial Units & Warehouses",
  "Schools & Colleges",
  "Hospitals & Clinics",
  "Hotels & Hospitality",
  "Auditoriums",
  "Government Projects",
];

const ServicesHero = () => {
    return (
        <section className="relative min-h-[70vh] md:min-h-[74vh] flex items-center py-20 md:py-24 bg-[#050A14] text-white overflow-hidden">
            
            {/* --- LAYER 1: Background Texture --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Noise Texture Overlay - Matches Hero.tsx */}
                <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" 
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
                />
                {/* Subtle Glow/Spotlight effect - Matches Hero.tsx */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* --- LAYER 2: Content --- */}
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-white/90 mb-6 md:mb-7 animate-fade-in shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="tracking-wide text-xs uppercase">Our Comprehensive Engineering Offerings</span>
                    </div>

                    {/* Headline with Contrast - Adapted from Hero.tsx */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-7 animate-slide-up leading-[1.05] tracking-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                            Engineering
                        </span>
                        <div className="flex items-baseline gap-3 flex-wrap">
                            <ShinyText
                                text="Services"
                                speed={4}
                                disabled={false}
                                className="text-blue-400 inline-block drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] italic"
                            />
                            <span className="font-light text-white/80">That Set Standards.</span>
                        </div>
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl text-slate-300 mb-8 md:mb-10 animate-slide-up max-w-3xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
                        Premium HVAC, acoustic, thermal, and ceiling solutions from Sangli, Kolhapur, and Pune - engineered for comfort, performance, and dependable execution.
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-5 animate-slide-up mb-12 md:mb-14">
                        <Button size="lg" className="h-12 md:h-13 px-7 md:px-8 text-base bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full shadow-[0_0_16px_rgba(255,255,255,0.25)] font-semibold group">
                            <NavLink to="/contact" className="flex items-center">
                                Request Consultation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </NavLink>
                        </Button>
                        
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 md:h-13 px-7 md:px-8 text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full"
                        >
                            <NavLink to="/projects" className="flex items-center">
                                <PlayCircle className="mr-2 h-5 w-5" />
                                View Our Portfolio
                            </NavLink>
                        </Button>
                    </div>

                    {/* Quick Service Icons */}
                    <div className="flex flex-wrap gap-8 pt-6 border-t border-white/10 animate-fade-in max-w-xl">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                                <service.icon className="h-5 w-5 text-blue-400 shrink-0" />
                                <span className="font-medium">{service.title}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};


const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services | Zen Engineering Solutions</title>
        <meta
          name="description"
          content="Explore HVAC, acoustic, thermal, and ceiling solutions delivered by Zen Engineering Solutions across Maharashtra."
        />
      </Helmet>

      {/* <Header /> */}
      <main>
        
        {/* === SERVICES HERO SECTION === */}
        <ServicesHero />


        {/* Services Grid Section - UPDATED for Dark Theme */}
        <section className="section-padding bg-[#030712] text-white"> 
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
                Our Core Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
                Specialized Solutions for Every Environment
              </h2>
              <p className="text-slate-400">
                We combine technical precision with practical application to solve the toughest challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.slug}
                    // Updated Card styling for dark theme
                    className="group border border-white/10 bg-white/5 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-slate-400 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3">
                        <p className="font-semibold text-sm mb-2 text-white">
                          Key Features:
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-slate-400"
                            >
                              <ArrowRight className="h-4 w-4 text-blue-400 shrink-0 mt-1" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild className="w-full h-12 text-base bg-blue-600 hover:bg-blue-500">
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

        {/* Application Areas Section */}
        <section className="section-padding bg-[#030712] text-white border-t border-white/5">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
                Application Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
                Engineered for Every Environment
              </h2>
              <p className="text-slate-400">
                From residences to mission-critical facilities, we tailor acoustic, HVAC, thermal, and ceiling systems to the demands of each space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {applicationAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 shadow-lg shadow-black/20"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                  <span className="text-slate-200">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Minor consistency check on text/button */}
        <section className="section-padding bg-[#050A14] text-white">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto p-10 rounded-2xl border border-blue-500/30 bg-white/5 backdrop-blur-sm shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Ready to Elevate Your Project?
              </h2>
              <p className="text-xl mb-8 text-slate-300">
                Let's discuss your project requirements and find the perfect, high-performance solution for your needs.
              </p>
              <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 text-white hover:bg-blue-500 transition-all rounded-full font-semibold group">
                <NavLink to="/contact" className="flex items-center">
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
