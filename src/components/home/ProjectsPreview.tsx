import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

// --- Configuration Constants ---
const ACCENT_COLOR_CLASS = "text-blue-400";

// --- Data Definition ---
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

// --- Utility Hook: Scroll observer for animation ---
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Only observe once
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

// --- Sub-Component: ProjectPreviewItem (Premium Card) ---
const ProjectPreviewItem = ({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) => {
  const isReversed = index % 2 === 1;
  const { ref, isInView } = useInView({ threshold: 0.2 });

  // Premium Card Styling: Glassmorphism, compact height
  const cardClasses = `
    overflow-hidden rounded-2xl backdrop-blur-sm
    bg-white/[0.03] border border-white/10
    shadow-2xl shadow-black/30
    transition-all duration-500 ease-out
    ${isInView ? "animate-fade-slide-up" : "opacity-0 translate-y-6"}
    hover:-translate-y-[2px]
    hover:border-blue-500/50 
    hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
    md:max-w-[80%] mx-auto
  `;

  return (
    <div ref={ref} className="relative">
      {/* Timeline LONG Vertical Line (Premium dark line) */}
      {index !== 0 && (
        <div
          className="hidden md:block absolute -top-10 left-1/2 h-10 w-[2px] bg-white/10"
          style={{ transform: "translateX(-50%)" }}
        />
      )}

      {/* Timeline Dot (Premium blue accent) */}
      <div className="hidden md:flex absolute -top-2 left-1/2 -translate-x-1/2 items-center justify-center z-10">
        <div className="h-3 w-3 rounded-full bg-blue-500/60 border border-blue-500 shadow-md"></div>
      </div>

      <Card className={cardClasses}>
        <div
          className={`flex flex-col ${
            isReversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* IMAGE */}
          <div className="relative md:w-2/5 h-44 md:h-52 overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full h-full object-cover 
                transform-gpu transition-transform duration-700
                group-hover:scale-[1.06] group-hover:-translate-y-1
              "
            />

            {/* Gradient mask to blend with dark background */}
            <div
              className={`absolute inset-0 pointer-events-none ${
                isReversed
                  ? "bg-gradient-to-l from-[#050A14]/90 via-transparent to-transparent"
                  : "bg-gradient-to-r from-[#050A14]/90 via-transparent to-transparent"
              }`}
            ></div>
          </div>

          {/* CONTENT */}
          <CardContent className="md:w-3/5 p-5 md:p-6 flex flex-col justify-between">
            <div>
              {/* Meta */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2.5">
                {/* Premium Badge Styling */}
                <Badge
                  className="
                    bg-blue-500/10 text-blue-400 border border-blue-500/30
                    px-2.5 py-1 text-[11px] rounded-full
                    transition-all duration-300
                    group-hover:bg-blue-500/20 group-hover:scale-[1.03]
                  "
                >
                  {project.category}
                </Badge>
                <span className="h-1 w-1 rounded-full bg-slate-400/40"></span>
                <span>{project.location}</span>
              </div>

              {/* High-contrast Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              {/* Lighter Description Text */}
              <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Premium Link Interaction */}
            <NavLink
              to={`/projects/${project.id}`}
              className={`${ACCENT_COLOR_CLASS} font-semibold text-xs md:text-sm mt-3 flex items-center gap-2 
                         transition-all duration-300 relative self-start group/link`}
            >
              <span className="group-hover/link:text-white transition-colors">
                View Details
              </span>
              <ArrowRight
                className="h-4 w-4 transform translate-x-0 group-hover/link:translate-x-1 
                           transition-transform duration-300"
              />
            </NavLink>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

// --- Main Component: ProjectsPreview ---
const ProjectsPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#050A14] py-10 md:py-12">
      {/* --- BACKGROUND LAYER: Glow and Noise (Matches ServicesSection & Hero) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle Glow/Spotlight effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[95px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header (Refined + Compact) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-5">
          <div>
            <p
              className={`${ACCENT_COLOR_CLASS} text-xs md:text-sm uppercase tracking-[0.2em] mb-2 animate-slide-up`}
              style={{ animationDelay: "0s" }}
            >
              Portfolio
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 animate-slide-up leading-snug tracking-tight"
              style={{ animationDelay: "0.08s" }}
            >
              Featured Projects & Case Studies
            </h2>
            <p
              className="text-slate-300 text-sm md:text-base font-light max-w-xl animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.16s" }}
            >
              A quick glimpse into HVAC, acoustic, and climate control
              installations delivered for offices, institutions, and
              industrial facilities across Maharashtra.
            </p>
          </div>

          {/* Call to Action Button (slightly smaller for compact feel) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.24s" }}>
            <Button
              size="sm"
              variant="outline"
              asChild
              className="h-10 md:h-11 px-6 md:px-7 text-xs md:text-sm border-blue-500/20 bg-blue-500/5 backdrop-blur-sm text-white hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 rounded-full group"
            >
              <NavLink to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>
        </div>

        {/* PROJECT ITEMS – Reduced vertical spacing */}
        <div className="space-y-10 md:space-y-12 relative">
          {featuredProjects.map((project, index) => (
            <ProjectPreviewItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
