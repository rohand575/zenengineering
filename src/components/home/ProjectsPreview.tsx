import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface FeaturedProject {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Commercial Office Complex",
    category: "Acoustic & HVAC",
    location: "Pune, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    description:
      "Complete acoustic treatment and climate control for 50,000 sq ft office space.",
  },
  {
    id: 2,
    title: "Educational Institution",
    category: "Insulation & HVAC",
    location: "Kolhapur, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    description:
      "Advanced insulation and HVAC systems for multiple buildings spanning 100,000 sq ft.",
  },
  {
    id: 3,
    title: "Manufacturing Facility",
    category: "Climate Control",
    location: "Sangli, Maharashtra",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    description:
      "Industrial-grade climate control and acoustic solutions for production environments.",
  },
];

// Scroll observer for animation
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

const ProjectPreviewItem = ({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) => {
  const isReversed = index % 2 === 1;
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="relative">
      {/* Timeline LONG Vertical Line */}
      {index !== 0 && (
        <div
          className="hidden md:block absolute -top-12 left-1/2 h-12 w-[2px] bg-border/30"
          style={{ transform: "translateX(-50%)" }}
        />
      )}

      {/* Timeline Dot */}
      <div className="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 items-center justify-center z-10">
        <div className="h-3 w-3 rounded-full bg-primary/60 border border-primary shadow-sm"></div>
      </div>

      <Card
        className={`
          overflow-hidden rounded-2xl backdrop-blur-xl
          bg-background/70 border border-border/60
          shadow-sm hover:shadow-xl 
          transition-all duration-500 
          ${isInView ? "animate-fade-slide-up" : "opacity-0 translate-y-6"}
          hover:-translate-y-1
          md:max-w-[88%] mx-auto
        `}
      >
        <div
          className={`flex flex-col ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* IMAGE */}
          <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-full object-cover 
                transform-gpu transition-transform duration-700
                group-hover:scale-[1.08] group-hover:-translate-y-1
              "
            />

            {/* Gradient mask */}
            <div
              className={`
                absolute inset-0 pointer-events-none
                ${
                  isReversed
                    ? "bg-gradient-to-l from-background/70 via-transparent to-transparent"
                    : "bg-gradient-to-r from-background/70 via-transparent to-transparent"
                }
              `}
            ></div>
          </div>

          {/* CONTENT */}
          <CardContent className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Badge
                  className="
                    bg-primary/10 text-primary border border-primary/30
                    px-2.5 py-1 text-[11px] rounded-full
                    transition-all duration-300
                    group-hover:bg-primary/20 group-hover:scale-[1.05]
                  "
                >
                  {project.category}
                </Badge>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40"></span>
                <span>{project.location}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <NavLink
              to={`/projects/${project.id}`}
              className="text-primary font-medium text-sm mt-4 flex items-center gap-2 transition-all group-hover:gap-3"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

const ProjectsPreview = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('/images/projects-bg.jpg')] bg-cover bg-center opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/97 to-background" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.25em] mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Explore some of our most recent HVAC, acoustic, and climate control
              installations across commercial and industrial sectors.
            </p>
          </div>

          <Button size="lg" asChild>
            <NavLink to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>

        {/* PROJECT ITEMS */}
        <div className="space-y-20 relative">
          {featuredProjects.map((project, index) => (
            <ProjectPreviewItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
