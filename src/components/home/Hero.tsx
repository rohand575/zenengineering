import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import ShinyText from '@/components/ui/ShinyText/ShinyText';



const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-transparent z-10" />
        <img
          src="/images/hero-image.jpg"
          alt="Modern engineering workspace"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Acoustic & HVAC Excellence
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-slide-up leading-tight">
            Engineering
            <br />
            <ShinyText
              text="Solutions"
              speed={3}
              disabled={false}
              className="text-primary inline-block drop-shadow-[0_0_8px_rgba(0,150,255,0.5)]"
            />{" "}
            That
            <br />
            Deliver Excellence
          </h1>


          <p
            className="text-xl text-background/90 mb-8 animate-slide-up max-w-2xl leading-relaxed"
            style={{ animationDelay: "0.1s" }}
          >
            Cutting-edge acoustic engineering, HVAC design, insulation,
            installation, and maintenance services for commercial and industrial
            projects.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="lg" asChild className="group">
              <a href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-background/10 backdrop-blur-sm border-background/20 text-background hover:bg-background/80"
            >
              <a href="/projects">
                <PlayCircle className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-20 mt-16 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <div className="text-4xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-background/100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-background/100">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-background/100">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into light section background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#0b1120]/40 to-[#f5f7fb] z-10" />
    </section>
  );
};

export default Hero;
