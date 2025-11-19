import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const featuredProjects = [
  {
    id: 1,
    title: "Commercial Office Complex",
    category: "Acoustic & HVAC",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description:
      "Complete acoustic treatment and climate control for 50,000 sq ft office space.",
  },
  {
    id: 2,
    title: "Educational Institution",
    category: "Insulation & HVAC",
    location: "Kolhapur, Maharashtra",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    description:
      "Advanced insulation and HVAC systems for multiple buildings spanning 100,000 sq ft.",
  },
  {
    id: 3,
    title: "Manufacturing Facility",
    category: "Climate Control",
    location: "Sangli, Maharashtra",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description:
      "Industrial-grade climate control and acoustic solutions for production environments.",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* BG image + soft overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/images/projects-bg.jpg')] bg-cover bg-center opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/97 to-background" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore recent installations where we’ve engineered precise climate,
              ventilation, and acoustic control for our clients.
            </p>
          </div>
          <Button size="lg" asChild>
            <NavLink to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>

        {/* Cards: zig-zag alternating layout */}
        <div className="space-y-16 relative">

          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div key={project.id} className="relative">
                {/* Connector Line (between cards) */}
                {index !== 0 && (
                  <div className="absolute -top-8 left-1/2 h-8 w-px bg-border/40"></div>
                )}

                <Card
                  className={`
                    relative overflow-hidden border border-border/60
                    bg-background/85 shadow-sm backdrop-blur-sm
                    hover:border-primary/40 hover:shadow-lg
                    transition-all duration-300 hover:-translate-y-1
                    md:max-w-[88%] mx-auto
                    animate-fade-slide-up
                  `}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div
                    className={`
                      flex flex-col md:items-stretch
                      ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}
                    `}
                  >
                    {/* IMAGE */}
                    <div className="relative md:w-2/5 h-56 md:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                      />

                      {/* Soft gradient mask */}
                      <div
                        className={`
                          absolute inset-0 pointer-events-none
                          ${isReversed
                            ? "bg-gradient-to-l from-background/60 via-transparent to-transparent"
                            : "bg-gradient-to-r from-background/60 via-transparent to-transparent"
                          }
                        `}
                      ></div>
                    </div>

                    {/* CONTENT */}
                    <CardContent className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Meta */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Badge className="bg-primary/10 text-primary px-2.5 py-1 text-[11px]">
                            {project.category}
                          </Badge>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                          <span>{project.location}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[15px] text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <NavLink
                        to={`/projects/${project.id}`}
                        className="
                          text-primary font-medium text-sm mt-4 flex
                          items-center gap-2 group-hover:gap-3 transition-all
                        "
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </NavLink>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ProjectsPreview;
