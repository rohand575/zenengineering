import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Target } from "lucide-react";

// --- Configuration Constants ---
const BACKGROUND_COLOR = "#050A14";
const ACCENT_COLOR_CLASS = "text-blue-400";

const features = [
  {
    icon: Award,
    title: "Excellence & Quality",
    description: "Committed to delivering superior engineering solutions that exceed industry standards."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled engineers and technicians with extensive industry experience."
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Cutting-edge technology and methods for efficient and sustainable results."
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description: "Proven track record of completing projects on schedule without compromising quality."
  }
];

const WhyChooseUs = () => {
  return (
    <section className={`section-padding relative overflow-hidden bg-[${BACKGROUND_COLOR}]`}>
      
      {/* --- BACKGROUND LAYER: Glow and Noise (Matches Hero) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
        
        {/* Subtle Glow/Spotlight effect */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] 
                       bg-blue-500/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        {/* Refined Header Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in space-y-4">
          <span className={`${ACCENT_COLOR_CLASS} font-semibold text-base uppercase tracking-widest block animate-slide-up`} style={{ animationDelay: '0s' }}>
            Why Partner With Us
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Engineering Excellence You Can Trust
          </h2>
          <p className="text-slate-300 text-xl font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We combine expertise, innovation, and dedication to deliver exceptional results for every project.
          </p>
        </div>

        {/* Feature Grid with Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            // Premium Card Styling
            const cardClasses = `
                border border-white/10 bg-white/[0.03] backdrop-blur-sm
                shadow-2xl shadow-black/30 group cursor-pointer h-full
                transition-all duration-300 ease-out text-center
                hover:-translate-y-1 
                hover:border-blue-500/50 
                hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                animate-fade-in
            `;

            return (
              <Card 
                key={feature.title}
                className={cardClasses}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon Container: Rounded-square, blue fill on hover */}
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 
                                  group-hover:bg-blue-500/90 transition-all duration-300 ease-in-out">
                    <Icon className={`h-8 w-8 ${ACCENT_COLOR_CLASS} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  
                  {/* High-contrast Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Lighter Description Text */}
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;