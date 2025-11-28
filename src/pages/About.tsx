// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, ArrowRight, PlayCircle } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";
import TiltWrapper from "@/components/ui/TiltWrapper";
import { useState, useEffect, useRef } from "react";
import ShinyText from "@/components/ui/ShinyText/ShinyText";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

// --- Consistent Dark Theme Constants ---
const DARK_BG = "#050A14";
const SECONDARY_BG = "#0B1120";
const TEXT_MUTED_DARK = "text-slate-400";
const BORDER_DARK = "border-white/10";
const ACCENT_COLOR_CLASS = "text-blue-400";
const GLASS_CARD_BASE = `border ${BORDER_DARK} bg-white/5 backdrop-blur-lg`;
const GLASS_CARD_HOVER = `shadow-xl shadow-black/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300`;

// --- Helper Component for Animation ---
const CountUp = ({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
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
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Specializes in ventilation systems and air quality, ensuring peak performance.",
  },
  {
    name: "Rajesh Singh",
    designation: "Managing Partner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Leads project management and client relations, with 20+ years of experience.",
  },
];

const About = () => {
  return (
    // Overall page background
    <div className={`min-h-screen bg-[${DARK_BG}]`}>
      <Helmet>
        <title>About Us | Zen Engineering Solutions</title>
        <meta
          name="description"
          content="Zen Engineering Solutions delivers premium HVAC, acoustic, thermal insulation, and ceiling systems across Maharashtra with HQ in Sangli and branches in Kolhapur & Pune."
        />
      </Helmet>

      {/* <Header /> */}
      <main>
        {/* =======================================================================================
           1. Hero Section – now medium sized (reduced height & typography)
           ======================================================================================= */}
        <section
          className={`relative min-h-[60vh] md:min-h-[64vh] flex items-center py-14 md:py-16 bg-[${DARK_BG}] text-white overflow-hidden`}
        >
          {/* --- LAYER 1: Background Image & Texture --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/about.png"
              alt="Team working in an office"
              className="w-full h-full object-cover opacity-25"
            />

            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            {/* Subtle Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-blue-500/10 blur-[130px] rounded-full mix-blend-screen" />
          </div>

          {/* Fading Gradient Overlay into dark background */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${DARK_BG} 0%, rgba(5, 10, 20, 0) 100%)`,
            }}
          />

          {/* --- LAYER 2: Content --- */}
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-white/90 mb-5 animate-fade-in shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="tracking-wide text-[0.7rem] md:text-xs uppercase">
                  Our Legacy &amp; Mission
                </span>
              </div>

              {/* Headline – scaled down */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 md:mb-6 animate-slide-up leading-[1.1] tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                  Driven By
                </span>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <ShinyText
                    text="Precision"
                    speed={4}
                    disabled={false}
                    className="text-blue-400 inline-block drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] italic"
                  />
                  <span className="font-light text-white/80">
                    and Performance.
                  </span>
                </div>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-slate-300 mb-7 md:mb-8 animate-slide-up max-w-3xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-5">
                Zen Engineering Solutions is a professional engineering services
                partner for air conditioning, acoustics, thermal insulation, and
                ceiling systems. With HQ in Sangli and branches in Kolhapur and
                Pune, we deliver transparent, technically accurate, and
                long-lasting solutions for residential, commercial, industrial,
                institutional, and government projects.
              </p>

              {/* Action Area – slightly tighter spacing */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 animate-slide-up mb-8 md:mb-9">
                <Button
                  size="lg"
                  className="h-11 md:h-12 px-6 md:px-7 text-sm md:text-base bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full shadow-[0_0_16px_rgba(255,255,255,0.25)] font-semibold group"
                >
                  <a href="/contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 md:h-12 px-6 md:px-7 text-sm md:text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full"
                >
                  <a href="/projects" className="flex items-center">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    View Our Journey
                  </a>
                </Button>
              </div>

              {/* Compact Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 p-4 md:p-5 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm max-w-full animate-fade-in">
                {/* Stat 1: Years of experience */}
                <div className="space-y-1">
                  <div className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                    <CountUp end={15} suffix="+" />
                  </div>
                  <div className="text-[0.65rem] md:text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
                    Years Legacy
                  </div>
                </div>

                {/* Stat 2: Projects delivered */}
                <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
                  <div className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="text-[0.65rem] md:text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
                    Projects Delivered
                  </div>
                </div>

                {/* Stat 3: Happy clients */}
                <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
                  <div className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                    <CountUp end={200} suffix="+" />
                  </div>
                  <div className="text-[0.65rem] md:text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
                    Happy Clients
                  </div>
                </div>

                {/* Stat 4: Commitment to quality */}
                <div className="space-y-1 relative md:before:content-[''] md:before:absolute md:before:-left-3 md:before:top-2 md:before:bottom-2 md:before:w-[1px] md:before:bg-white/10">
                  <div className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-[0.65rem] md:text-xs uppercase tracking-[0.22em] text-slate-400 font-medium">
                    Quality Commitment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================================
           2. Mission, Vision, Values (slightly tightened)
           ======================================================================================= */}
        <section className={`relative py-14 md:py-16 bg-[${DARK_BG}]`}>
          {/* subtle background blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl opacity-20" />
            <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl opacity-20" />
          </div>

          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span
                className={`${ACCENT_COLOR_CLASS} font-semibold text-xs tracking-[0.2em] uppercase`}
              >
                Why clients choose us
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-bold mt-3 mb-3">
                Built on clarity, trust &amp; performance
              </h2>
              <p className={TEXT_MUTED_DARK}>
                Every project starts with a clear purpose, a measurable outcome,
                and the promise that we&apos;ll treat your space like our own.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Mission */}
              <Card className={`${GLASS_CARD_BASE} ${GLASS_CARD_HOVER}`}>
                <CardContent className="p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                    <Target className={`h-7 w-7 ${ACCENT_COLOR_CLASS}`} />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Our Mission
                  </h3>
                  <p
                    className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                  >
                    To deliver reliable, efficient, and high-performance HVAC,
                    acoustic, and insulation solutions while maintaining
                    transparency, quality, and customer-focused service.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card
                className={`${GLASS_CARD_BASE} ${GLASS_CARD_HOVER} delay-75`}
              >
                <CardContent className="p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                    <Eye className={`h-7 w-7 ${ACCENT_COLOR_CLASS}`} />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Our Vision
                  </h3>
                  <p
                    className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                  >
                    To be recognized as Maharashtra&apos;s most trusted
                    engineering service provider, known for innovation,
                    dependable execution, and superior workmanship.
                  </p>
                </CardContent>
              </Card>

              {/* Values */}
              <Card
                className={`${GLASS_CARD_BASE} ${GLASS_CARD_HOVER} delay-150`}
              >
                <CardContent className="p-7 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
                    <Award className={`h-7 w-7 ${ACCENT_COLOR_CLASS}`} />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    Our Values
                  </h3>
                  <p
                    className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                  >
                    We combine engineering efficiency with simplicity,
                    professionalism, and unwavering customer satisfaction on
                    every project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Separator */}
        <hr className={`border-white/10`} />

        {/* =======================================================================================
           3. Company Story
           ======================================================================================= */}
        <section
          className={`section-padding bg-[${SECONDARY_BG}] border-t ${BORDER_DARK}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="animate-slide-up">
                <span
                  className={`${ACCENT_COLOR_CLASS} font-semibold text-xs uppercase tracking-wider mb-3 block`}
                >
                  Our Story
                </span>
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-5">
                  Engineering comfort with clear, professional delivery
                </h2>
                <div
                  className={`${TEXT_MUTED_DARK} leading-relaxed space-y-3 text-sm md:text-[15px]`}
                >
                  <p>
                    Zen Engineering Solutions specializes in HVAC, acoustic
                    insulation, thermal insulation, and ceiling systems designed
                    for comfort, performance, and energy efficiency.
                  </p>
                  <p>
                    Our team handles residential, commercial, industrial,
                    institutional, and government assignments with the same
                    technical rigor, ensuring compliant designs and certified
                    installation standards.
                  </p>
                  <p>
                    We are authorised dealers for Daikin, Anutone Acoustic, and
                    Symphony, so clients receive genuine materials, transparent
                    BOQs, and precise execution across Sangli, Kolhapur, Pune,
                    and beyond.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in relative">
                {/* Decorative border offset */}
                <div
                  className={`absolute top-4 left-4 w-full h-full border-2 ${BORDER_DARK} rounded-2xl -z-10`}
                ></div>

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl relative grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <hr className={`border-white/10`} />

        {/* =======================================================================================
           4. Timeline / Milestones
           ======================================================================================= */}
        <section
          className={`section-padding bg-[${DARK_BG}] border-t ${BORDER_DARK}`}
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span
                className={`${ACCENT_COLOR_CLASS} font-semibold text-xs tracking-[0.2em] uppercase`}
              >
                Our Journey
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-bold mt-3 mb-3">
                From a small office to pan-India projects
              </h2>
              <p className={TEXT_MUTED_DARK}>
                Every milestone is a story of a client trusting us with their
                space — and coming back with the next challenge.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2" />

              <div className="space-y-9">
                {/* 2008 */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="hidden md:block" />
                  <div className="relative md:pl-8">
                    <div
                      className={`absolute -left-[33px] md:-left-10 top-2 h-4 w-4 rounded-full bg-blue-500 border-4 bg-[${DARK_BG}]`}
                    />
                    <div
                      className={`rounded-2xl bg-[${SECONDARY_BG}] shadow-lg border ${BORDER_DARK} p-5`}
                    >
                      <p
                        className={`text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${ACCENT_COLOR_CLASS} mb-1`}
                      >
                        2008
                      </p>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5">
                        Zen Engineering is founded in Maharashtra
                      </h3>
                      <p
                        className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                      >
                        Started as a focused acoustic consultancy, serving local
                        commercial and educational projects.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2014 */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="relative md:pr-8 md:text-right">
                    <div
                      className={`absolute -left-[33px] md:right-[-2.4rem] top-2 h-4 w-4 rounded-full bg-blue-500 border-4 bg-[${DARK_BG}]`}
                    />
                    <div
                      className={`rounded-2xl bg-[${SECONDARY_BG}] shadow-lg border ${BORDER_DARK} p-5 inline-block text-left md:text-right`}
                    >
                      <p
                        className={`text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${ACCENT_COLOR_CLASS} mb-1`}
                      >
                        2014
                      </p>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5">
                        Full-scale HVAC design services
                      </h3>
                      <p
                        className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                      >
                        Expanded into HVAC engineering with end-to-end design
                        and execution capabilities for larger facilities.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>

                {/* 2018 */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="hidden md:block" />
                  <div className="relative md:pl-8">
                    <div
                      className={`absolute -left-[33px] md:-left-10 top-2 h-4 w-4 rounded-full bg-blue-500 border-4 bg-[${DARK_BG}]`}
                    />
                    <div
                      className={`rounded-2xl bg-[${SECONDARY_BG}] shadow-lg border ${BORDER_DARK} p-5`}
                    >
                      <p
                        className={`text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${ACCENT_COLOR_CLASS} mb-1`}
                      >
                        2018
                      </p>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5">
                        Pan-India project footprint
                      </h3>
                      <p
                        className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                      >
                        Delivered complex projects across multiple states,
                        building a strong reputation in education, healthcare
                        and commercial spaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Today */}
                <div className="relative flex md:grid md:grid-cols-2 gap-6 items-start">
                  <div className="relative md:pr-8 md:text-right">
                    <div
                      className={`absolute -left-[33px] md:right-[-2.4rem] top-2 h-4 w-4 rounded-full bg-blue-500 border-4 bg-[${DARK_BG}]`}
                    />
                    <div
                      className={`rounded-2xl bg-[${SECONDARY_BG}] shadow-lg border ${BORDER_DARK} p-5 inline-block text-left md:text-right`}
                    >
                      <p
                        className={`text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${ACCENT_COLOR_CLASS} mb-1`}
                      >
                        Today
                      </p>
                      <h3 className="text-white text-base md:text-lg font-semibold mb-1.5">
                        Trusted engineering partner for leading brands
                      </h3>
                      <p
                        className={`text-sm ${TEXT_MUTED_DARK} leading-relaxed`}
                      >
                        Combining experience with modern tools and simulation to
                        deliver quiet, comfortable and energy-efficient spaces.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <hr className={`border-white/10`} />

        {/* =======================================================================================
           5. Team Section – Managing Partners
           ======================================================================================= */}
        <section
          className={`section-padding bg-[${SECONDARY_BG}] border-t ${BORDER_DARK}`}
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span
                className={`${ACCENT_COLOR_CLASS} font-semibold text-xs uppercase tracking-wider mb-3 block`}
              >
                Our Team
              </span>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Meet Our Managing Partners
              </h2>
              <p
                className={`text-sm md:text-base ${TEXT_MUTED_DARK} max-w-xl mx-auto`}
              >
                Our team of experienced professionals is dedicated to delivering
                exceptional results for every project.
              </p>
            </div>

            {/* 2 cards on top */}
            <div className="max-w-5xl mx-auto space-y-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {managingPartners.slice(0, 2).map((member, index) => (
                  <TiltWrapper
                    key={member.name}
                    rotateAmplitude={10}
                    scaleOnHover={1.03}
                  >
                    <Card
                      className={`${GLASS_CARD_BASE} border-2 border-blue-500/30 shadow-2xl shadow-black/40 overflow-hidden animate-scale-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-5 p-6 md:p-7">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500/40 shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-[0.65rem] font-semibold mb-2.5">
                            Managing Partner
                          </div>
                          <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p
                            className={`${ACCENT_COLOR_CLASS} font-semibold mb-2`}
                          >
                            {member.designation}
                          </p>
                          <p
                            className={`leading-relaxed text-sm md:text-[15px] ${TEXT_MUTED_DARK}`}
                          >
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
                    <Card
                      className={`${GLASS_CARD_BASE} border-2 border-blue-500/30 shadow-2xl shadow-black/40 overflow-hidden animate-scale-in max-w-xl w-full`}
                    >
                      <div className="flex items-center gap-5 p-6 md:p-7">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-blue-500/40 shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-[0.65rem] font-semibold mb-2.5">
                            Managing Partner
                          </div>
                          <h3 className="text-white text-lg md:text-xl font-bold mb-1">
                            {member.name}
                          </h3>
                          <p
                            className={`${ACCENT_COLOR_CLASS} font-semibold mb-2`}
                          >
                            {member.designation}
                          </p>
                          <p
                            className={`leading-relaxed text-sm md:text-[15px] ${TEXT_MUTED_DARK}`}
                          >
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
