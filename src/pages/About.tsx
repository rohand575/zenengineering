// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, ArrowRight, PlayCircle } from "lucide-react"; 
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";
import TiltWrapper from "@/components/ui/TiltWrapper";
import { useState, useEffect, useRef } from "react";
import ShinyText from "@/components/ui/ShinyText/ShinyText";
import { Button } from "@/components/ui/button"; 

// --- Helper Component for Animation ---
const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false); // Ensures animation runs only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease-out function for smooth landing: 1 - (1 - t)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};



const managingPartners = [
  {
    name: "Darshan Shah",
    designation: "Managing Partner",
    image: "/darshan-shah.png", // use your real image path here
    bio: "Co-founder with expertise in sustainable cooling solutions, driving innovation.",
  },
  {
    name: "Priya Sharma",
    designation: "Managing Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Specializes in ventilation systems and air quality, ensuring peak performance.",
  },
  {
    name: "Rajesh Singh",
    designation: "Managing Partner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Leads project management and client relations, with 20+ years of experience.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        {/* Hero Section - Refactored to match Hero.tsx Premium Dark Style */}
        <section className="relative min-h-[75vh] flex items-center py-24 bg-[#050A14] text-white overflow-hidden">
          
          {/* --- LAYER 1: Background Image & Texture --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* 💡 1. BACKGROUND IMAGE (Placeholder - Ensure file exists at this path) 💡 */}
            <img
              src="/about.png" 
              alt="Team working in an office"
              className="w-full h-full object-cover opacity-30" // Lowered opacity for the dark theme
            />
            
            {/* Noise Texture Overlay - Adds a 'film grain' premium feel */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
            />
            {/* Subtle Glow/Spotlight effect behind the text area */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen" />
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
                <span className="tracking-wide text-xs uppercase">Our Legacy & Mission</span>
              </div>

              {/* Headline with Contrast - Adapted from Hero.tsx */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-slide-up leading-[1.1] tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                  Driven By
                </span>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <ShinyText
                    text="Precision"
                    speed={4}
                    disabled={false}
                    className="text-blue-400 inline-block drop-shadow-[0_0_25px_rgba(59,130,246,0.4)] italic"
                  />
                  <span className="font-light text-white/80">and Performance.</span>
                </div>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-10 animate-slide-up max-w-2xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
                For over 15 years, Zen Engineering Solutions has been at the forefront
                of acoustic and HVAC engineering, delivering exceptional results across India.
              </p>

              {/* Action Area - Copied from Hero.tsx */}
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
                    View Our Journey
                  </a>
                </Button>
              </div>


              {/* Premium Glass Stats Bar - Refactored from existing stats in About.tsx */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm max-w-full animate-fade-in">
                
                {/* Stat 1: Years of experience */}
                <div className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Years Legacy</div>
                </div>
                
                {/* Stat 2: Projects delivered */}
                <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Projects Delivered</div>
                </div>
                
                {/* Stat 3: Happy clients */}
                <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                    <CountUp end={200} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Happy Clients</div>
                </div>

                 {/* Stat 4: Commitment to quality */}
                <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-medium">Quality Commitment</div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Mission, Vision, Values */}
        <section className="relative py-20">
          {/* subtle background blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
          </div>

          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">
                Why clients choose us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                Built on clarity, trust & performance
              </h2>
              <p className="text-muted-foreground">
                Every project starts with a clear purpose, a measurable outcome,
                and the promise that we&apos;ll treat your space like our own.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="border border-primary/10 bg-card/80 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To deliver cutting-edge engineering solutions that create
                    comfortable, efficient, and sustainable environments for our clients.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border border-primary/10 bg-card/80 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300 delay-75">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To be India&apos;s most trusted engineering partner, setting new
                    standards in acoustic and HVAC excellence.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card className="border border-primary/10 bg-card/80 backdrop-blur-lg shadow-[0_18px_45px_rgba(15,23,42,0.12)] hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300 delay-150">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Excellence, innovation and integrity with an obsession for
                    long-term client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Company Story */}
        <section className="section-padding bg-section-bg ">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                  Our Story
                </span>
                <h2 className="text-4xl font-bold mb-6">
                  Building Excellence Since 2008
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2008, Zen Engineering Solutions began with a simple vision: to provide world-class acoustic and HVAC engineering services that transform spaces and improve lives.
                  </p>
                  <p>
                    Over the years, we&apos;ve grown from a small team of passionate engineers to one of Maharashtra&apos;s leading engineering firms, serving clients across commercial, educational, industrial, and residential sectors.
                  </p>
                  <p>
                    Our commitment to innovation, quality, and customer satisfaction has earned us the trust of over 200 clients and the successful completion of 500+ projects.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in relative">
                {/* Decorative border offset */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10"></div>
                
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl relative grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="section-padding bg-section-bg/60">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                From a small office to pan-India projects
              </h2>
              <p className="text-muted-foreground">
                Every milestone is a story of a client trusting us with their space — and
                coming back with the next challenge.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/70 md:-translate-x-1/2" />

              <div className="space-y-10">
                {/* 2008 */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="hidden md:block" />
                  <div className="relative md:pl-8">
                    <div className="absolute -left-[33px] md:-left-10 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    <div className="rounded-2xl bg-card shadow-lg border border-border/70 p-5">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-1">
                        2008
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        Zen Engineering is founded in Maharashtra
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Started as a focused acoustic consultancy, serving local commercial
                        and educational projects.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2014 */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="relative md:pr-8 md:text-right">
                    <div className="absolute -left-[33px] md:right-[-2.4rem] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    <div className="rounded-2xl bg-card shadow-lg border border-border/70 p-5 inline-block text-left md:text-right">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-1">
                        2014
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        Full-scale HVAC design services
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Expanded into HVAC engineering with end-to-end design and execution
                        capabilities for larger facilities.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>

                {/* 2018 */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="hidden md:block" />
                  <div className="relative md:pl-8">
                    <div className="absolute -left-[33px] md:-left-10 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    <div className="rounded-2xl bg-card shadow-lg border border-border/70 p-5">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-1">
                        2018
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        Pan-India project footprint
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Delivered complex projects across multiple states, building a strong
                        reputation in education, healthcare and commercial spaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Today */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="relative md:pr-8 md:text-right">
                    <div className="absolute -left-[33px] md:right-[-2.4rem] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                    <div className="rounded-2xl bg-card shadow-lg border border-border/70 p-5 inline-block text-left md:text-right">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-1">
                        Today
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        Trusted engineering partner for leading brands
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Combining experience with modern tools and simulation to deliver
                        quiet, comfortable and energy-efficient spaces.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Team Section – Managing Partners */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our Managing Partners
              </h2>
              <p className="text-muted-foreground text-lg">
                Our team of experienced professionals is dedicated to delivering exceptional results for every project.
              </p>
            </div>

            {/* 2 cards on top */}
            <div className="max-w-5xl mx-auto space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {managingPartners.slice(0, 2).map((member, index) => (
                  <TiltWrapper
                    key={member.name}
                    rotateAmplitude={10}
                    scaleOnHover={1.03}
                  >
                    <Card
                      className="border-2 border-primary shadow-2xl overflow-hidden animate-scale-in bg-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-6 p-6 md:p-8">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-3">
                            Managing Partner
                          </div>
                          <h3 className="text-2xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary font-semibold mb-3">
                            {member.designation}
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </TiltWrapper>
                ))}
              </div>

              {/* 1 card centered below */}
              <div className="flex justify-center">
                {managingPartners.slice(2, 3).map((member) => (
                  <TiltWrapper
                    key={member.name}
                    rotateAmplitude={10}
                    scaleOnHover={1.03}
                  >
                    <Card className="border-2 border-primary shadow-2xl overflow-hidden animate-scale-in bg-card max-w-xl w-full">
                      <div className="flex items-center gap-6 p-6 md:p-8">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-3">
                            Managing Partner
                          </div>
                          <h3 className="text-2xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary font-semibold mb-3">
                            {member.designation}
                          </p>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </TiltWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;