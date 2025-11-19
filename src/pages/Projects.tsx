// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const projects = [
  {
    id: 1,
    title: "Premium Office Complex - Acoustic Treatment",
    category: "Acoustic & HVAC",
    location: "Pune, Maharashtra",
    area: "50,000 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Complete acoustic treatment and climate control for a modern office space with open workstations and conference rooms.",
    tags: ["Commercial", "Acoustic", "HVAC"]
  },
  {
    id: 2,
    title: "Educational Institution Campus",
    category: "Insulation & HVAC",
    location: "Kolhapur, Maharashtra",
    area: "100,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    description: "Advanced insulation and HVAC systems for multiple buildings including classrooms, laboratories, and auditoriums.",
    tags: ["Educational", "Insulation", "HVAC"]
  },
  {
    id: 3,
    title: "Manufacturing Facility Climate Control",
    category: "Climate Control",
    location: "Sangli, Maharashtra",
    area: "75,000 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description: "Industrial-grade climate control and acoustic solutions for production environment with strict temperature requirements.",
    tags: ["Industrial", "Climate Control", "Acoustic"]
  },
  {
    id: 4,
    title: "Corporate Headquarters Renovation",
    category: "Full Service",
    location: "Pune, Maharashtra",
    area: "60,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Complete renovation including HVAC upgrade, acoustic panels, and insulation for a premium corporate headquarters.",
    tags: ["Commercial", "Renovation", "Full Service"]
  },
  {
    id: 5,
    title: "Hospital HVAC & Acoustic Solutions",
    category: "Healthcare",
    location: "Kolhapur, Maharashtra",
    area: "80,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    description: "Specialized HVAC and acoustic systems for healthcare facility with stringent air quality and noise control requirements.",
    tags: ["Healthcare", "HVAC", "Acoustic"]
  },
  {
    id: 6,
    title: "Luxury Residential Complex",
    category: "Residential",
    location: "Pune, Maharashtra",
    area: "120,000 sq ft",
    year: "2022",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Premium HVAC and insulation services for high-end residential towers with individual climate control systems.",
    tags: ["Residential", "HVAC", "Insulation"]
  },
  {
    id: 7,
    title: "Data Center Cooling Solution",
    category: "Specialized HVAC",
    location: "Pune, Maharashtra",
    area: "30,000 sq ft",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    description: "High-precision cooling systems for mission-critical data center with redundant HVAC infrastructure.",
    tags: ["Data Center", "HVAC", "Cooling"]
  },
  {
    id: 8,
    title: "Recording Studio Acoustic Design",
    category: "Acoustic Engineering",
    location: "Sangli, Maharashtra",
    area: "5,000 sq ft",
    year: "2023",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    description: "Professional acoustic treatment for recording studios with isolation rooms and control rooms.",
    tags: ["Entertainment", "Acoustic", "Specialized"]
  },
  {
    id: 9,
    title: "Shopping Mall Climate Control",
    category: "Commercial HVAC",
    location: "Pune, Maharashtra",
    area: "200,000 sq ft",
    year: "2022",
    image: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80",
    description: "Large-scale HVAC and ventilation system for multi-level shopping complex with variable occupancy zones.",
    tags: ["Retail", "HVAC", "Large Scale"]
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
          <div className="container-custom">
            <div className="max-w-3xl animate-slide-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Work
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Featured Projects
              </h1>
              <p className="text-xl text-background/90 leading-relaxed">
                Explore our portfolio of successful engineering projects across commercial, industrial, educational, and residential sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="overflow-hidden border-none shadow-lg hover-lift group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary text-primary-foreground mb-2">
                        {project.category}
                      </Badge>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                      <span>📏 {project.area}</span>
                      <span>📅 {project.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <NavLink 
                      to={`/projects/${project.id}`}
                      className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      View Project Details
                      <ArrowRight className="h-4 w-4" />
                    </NavLink>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your Project Today
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Ready to bring your vision to life? Contact us to discuss your project requirements.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <NavLink to="/contact">
                  Get in Touch
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

export default Projects;
