// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";
import TiltWrapper from "@/components/ui/TiltWrapper";

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
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background overflow-hidden">
          <div className="container-custom">
            <div className="max-w-3xl animate-slide-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Engineering Tomorrow&apos;s Solutions Today
              </h1>
              <p className="text-xl text-background/90 leading-relaxed">
                For over 15 years, Zen Engineering Solutions has been at the forefront of acoustic and HVAC engineering, delivering exceptional results across India.
              </p><br></br>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Leading HVAC & Acoustic Engineering in India
              </span>

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
        <section className="section-padding bg-section-bg">
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
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
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
