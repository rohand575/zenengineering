// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Volume2, Shield, Settings, Wrench, Thermometer, ArrowRight, PlayCircle } from "lucide-react";
import { NavLink } from "react-router-dom"; // Assuming you use react-router-dom NavLink/Link
import ShinyText from "@/components/ui/ShinyText/ShinyText"; // Assuming this utility is available

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
    description: "Premium thermal and acoustic insulation for energy efficiency and comfort. We provide expert installation of advanced insulation materials for walls, ceilings, and ductwork.",
    slug: "insulation-services",
    features: [
      "Thermal barrier installation",
      "Acoustic damping layers",
      "Industrial pipe and duct insulation",
      "Material consultation and supply"
    ]
  },
  {
    icon: Settings,
    title: "System Maintenance",
    description: "Proactive maintenance and repair services to keep your HVAC and acoustic systems running at peak performance and efficiency, minimizing downtime and costs.",
    slug: "system-maintenance",
    features: [
      "Preventive maintenance contracts",
      "Emergency repair and diagnostics",
      "System calibration and tuning",
      "Filter and component replacement"
    ]
  },
];


const ServicesHero = () => {
    return (
        <section className="relative min-h-[75vh] flex items-center py-24 bg-[#050A14] text-white overflow-hidden">
            
            {/* --- LAYER 1: Background Texture --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Noise Texture Overlay - Matches Hero.tsx */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
                />
                {/* Subtle Glow/Spotlight effect - Matches Hero.tsx */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* --- LAYER 2: Content --- */}
            <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                    
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/90 mb-8 animate-fade-in shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="tracking-wide text-xs uppercase">Our Comprehensive Engineering Offerings</span>
                    </div>

                    {/* Headline with Contrast - Adapted from Hero.tsx */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-slide-up leading-[1.1] tracking-tight">
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

                    <p className="text-lg md:text-xl text-slate-300 mb-10 animate-slide-up max-w-2xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
                        Explore our core competencies in acoustic solutions, HVAC design, 
                        and system maintenance, each delivered with unmatched precision and quality assurance.
                    </p>

                    {/* Action Area */}
                    <div className="flex flex-col sm:flex-row gap-5 animate-slide-up mb-16">
                        <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] font-semibold group">
                            <NavLink to="/contact" className="flex items-center">
                                Request Consultation
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </NavLink>
                        </Button>
                        
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full"
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
                We combine technical precision with practical application to solve the toughest acoustic and climate challenges.
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