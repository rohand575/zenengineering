import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import ShinyText from '@/components/ui/ShinyText/ShinyText';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#050A14]">
      
      {/* --- LAYER 1: Background Image & Texture --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="Modern engineering workspace"
          className="w-full h-full object-cover opacity-60" 
        />
        {/* Noise Texture Overlay - Adds a 'film grain' premium feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
      </div>

      {/* --- LAYER 2: Cinematic Lighting (Gradients) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left-side deep fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent" />
        
        {/* Bottom fade to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050A14] to-transparent" />
        
        {/* Subtle Glow/Spotlight effect behind the text area */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* --- LAYER 3: Content --- */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/90 mb-8 animate-fade-in shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide text-xs uppercase">ISO 9001 Certified Excellence</span>
          </div>

          {/* Headline with Contrast */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-slide-up leading-[1.1] tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
              Engineering
            </span>
            <div className="flex items-baseline gap-3 flex-wrap">
              <ShinyText
                text="Solutions"
                speed={4}
                disabled={false}
                className="text-blue-400 inline-block drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] italic"
              />
              <span className="font-light text-white/80">Redefined.</span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 animate-slide-up max-w-2xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
            We bridge the gap between acoustic precision and HVAC efficiency. 
            Delivering industrial-grade insulation and maintenance for the world's most demanding infrastructures.
          </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-5 animate-slide-up mb-16">
            <Button size="lg" className="h-14 px-8 text-base bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] font-semibold group">
              <a href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full"
            >
              <a href="/projects" className="flex items-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                View Case Studies
              </a>
            </Button>
          </div>       

          {/* Premium Glass Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm max-w-3xl animate-fade-in">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">12<span className="text-blue-400">+</span></div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Years Legacy</div>
            </div>
            
            {/* Vertical Divider (only visible on md up) */}
            <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-4 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
              <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">50<span className="text-blue-400">+</span></div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Industrial Projects</div>
            </div>

            <div className="space-y-1 relative col-span-2 md:col-span-1 md:before:content-[''] md:before:absolute md:before:-left-4 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">100<span className="text-blue-400">%</span></div>
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Compliance Rate</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;