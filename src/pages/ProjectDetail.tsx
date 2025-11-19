import { useParams } from "react-router-dom";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, MapPin, Calendar, Ruler } from "lucide-react";

const projectData: Record<string, any> = {
  "1": {
    title: "Premium Office Complex - Acoustic Treatment",
    category: "Acoustic & HVAC",
    location: "Pune, Maharashtra",
    area: "50,000 sq ft",
    year: "2024",
    client: "TechCorp Industries",
    duration: "6 months",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&q=80"
    ],
    description: "Complete acoustic treatment and climate control for a modern office space featuring open workstations, private offices, and conference rooms.",
    challenge: "The client required a solution that would minimize noise transmission between open workspaces while maintaining an open, collaborative environment. Additionally, the HVAC system needed to operate quietly without compromising air quality.",
    solution: "We implemented a comprehensive acoustic treatment using sound-absorbing panels, strategic space planning, and white noise systems. The HVAC design included low-velocity air distribution and vibration isolation to ensure whisper-quiet operation.",
    results: [
      "40% reduction in ambient noise levels",
      "95% client satisfaction rating",
      "25% improvement in employee productivity metrics",
      "LEED Gold certification achieved"
    ],
    specifications: [
      { label: "Acoustic Panels", value: "Custom-designed fabric-wrapped panels" },
      { label: "HVAC System", value: "Variable Refrigerant Flow (VRF) with Smart Controls" },
      { label: "Insulation", value: "High-density mineral wool, R-value 30" },
      { label: "Sound Rating", value: "NRC 0.85, STC 55" }
    ],
    tags: ["Commercial", "Acoustic", "HVAC", "LEED Certified"]
  },
  "2": {
    title: "Educational Institution Campus",
    category: "Insulation & HVAC",
    location: "Kolhapur, Maharashtra",
    area: "100,000 sq ft",
    year: "2023",
    client: "Bharati Vidyapeeth University",
    duration: "10 months",
    heroImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
    ],
    description: "Advanced insulation and HVAC systems for multiple buildings including classrooms, laboratories, auditoriums, and administrative offices.",
    challenge: "Each building type required different climate control strategies to accommodate varying occupancy patterns, equipment heat loads, and acoustic requirements for learning environments.",
    solution: "We designed a centralized chiller plant with decentralized air handling units for flexible zone control. Specialized acoustic treatments were installed in lecture halls and auditoriums, while laboratories received dedicated exhaust systems.",
    results: [
      "30% reduction in energy consumption",
      "Improved indoor air quality across all buildings",
      "Enhanced learning environment with optimal acoustics",
      "99.8% system uptime during academic sessions"
    ],
    specifications: [
      { label: "Chiller Capacity", value: "500 TR with heat recovery" },
      { label: "Insulation Type", value: "Spray foam and rigid board, R-value 38" },
      { label: "Control System", value: "Building Management System with scheduling" },
      { label: "Ventilation", value: "100% fresh air in labs, 30% in classrooms" }
    ],
    tags: ["Educational", "Insulation", "HVAC", "Energy Efficient"]
  },
  "3": {
    title: "Manufacturing Facility Climate Control",
    category: "Climate Control",
    location: "Sangli, Maharashtra",
    area: "75,000 sq ft",
    year: "2024",
    client: "PrecisionTech Manufacturing",
    duration: "8 months",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
    ],
    description: "Industrial-grade climate control and acoustic solutions for a production environment with strict temperature and humidity requirements.",
    challenge: "Manufacturing processes required precise temperature control (±2°F) and humidity management (50±5% RH) to ensure product quality. Additionally, noise from machinery needed to be controlled to meet OSHA standards.",
    solution: "We installed a high-precision HVAC system with redundant components, continuous monitoring, and automatic failover capabilities. Acoustic barriers and vibration isolation were implemented around high-noise equipment.",
    results: [
      "±1°F temperature control achieved",
      "35% reduction in production defects related to environmental conditions",
      "Noise levels reduced by 15 dB throughout facility",
      "Zero unplanned downtime in first year of operation"
    ],
    specifications: [
      { label: "HVAC Type", value: "Precision air conditioning with hot gas reheat" },
      { label: "Monitoring", value: "Real-time sensors with predictive maintenance" },
      { label: "Acoustic Treatment", value: "Sound barriers, NRC 0.90" },
      { label: "Redundancy", value: "N+1 configuration for critical systems" }
    ],
    tags: ["Industrial", "Climate Control", "Acoustic", "Precision"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen">
        {/* <Header /> */}
        <main className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button asChild>
              <NavLink to="/projects">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Projects
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
        <section className="relative h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent z-10" />
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-20 pb-16 text-background">
            <Button variant="outline" size="sm" asChild className="mb-6 bg-background/10 backdrop-blur-sm border-background/20 text-background hover:bg-background/20">
              <NavLink to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </NavLink>
            </Button>
            <Badge className="bg-primary text-primary-foreground mb-4">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-background/90 animate-fade-in">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {project.year}
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5" />
                {project.area}
              </div>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Results & Impact</h3>
                    <ul className="space-y-3">
                      {project.results.map((result: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1 text-xl">✓</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Card className="border-none shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Project Details</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <div className="text-muted-foreground mb-1">Client</div>
                        <div className="font-semibold">{project.client}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Location</div>
                        <div className="font-semibold">{project.location}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Year Completed</div>
                        <div className="font-semibold">{project.year}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Project Area</div>
                        <div className="font-semibold">{project.area}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold">{project.duration}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-2">Tags</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.specifications.map((spec: any, index: number) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                      <div className="font-semibold text-lg">{spec.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.images.map((image: string, index: number) => (
                  <div 
                    key={index}
                    className="aspect-video rounded-xl overflow-hidden shadow-lg hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Have a Similar Project?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let's discuss how we can deliver exceptional results for your engineering needs.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contact">
                  Start Your Project
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

export default ProjectDetail;
