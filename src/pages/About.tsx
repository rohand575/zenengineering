// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import TiltedCard from "@/components/ui/TiltedCard/TiltedCard";
import TiltWrapper from "@/components/ui/TiltWrapper";

const team = [
  {
    name: "Darshan Shah",
    designation: "CEO & Founder",
    image: "/darshan-shah.png",
    bio: "With over 20 years of experience in acoustic and HVAC engineering, Rajesh leads our vision for engineering excellence.",
    isCEO: true
  },
  {
    name: "Priya Sharma",
    designation: "Project Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Expert in managing large-scale commercial projects with exceptional attention to detail and client satisfaction.",
    isCEO: false
  },
  {
    name: "Amit Patel",
    designation: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Specializes in innovative HVAC design and sustainable engineering solutions for modern infrastructure.",
    isCEO: false
  },
  {
    name: "Sneha Desai",
    designation: "Senior Acoustic Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Renowned for creating optimal acoustic environments in educational and commercial spaces.",
    isCEO: false
  },
  {
    name: "Vikram Singh",
    designation: "Operations Head",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Ensures seamless project execution and maintains our high standards across all installations.",
    isCEO: false
  },
  {
    name: "Kavita Reddy",
    designation: "Quality Assurance Manager",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80",
    bio: "Dedicated to maintaining excellence through rigorous quality control and compliance standards.",
    isCEO: false
  }
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
                Engineering Tomorrow's Solutions Today
              </h1>
              <p className="text-xl text-background/90 leading-relaxed">
                For over 15 years, Zen Engineering Solutions has been at the forefront of acoustic and HVAC engineering, delivering exceptional results across India.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover-lift animate-scale-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver cutting-edge engineering solutions that create comfortable, efficient, and sustainable environments for our clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be India's most trusted engineering partner, setting new standards in acoustic and HVAC excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover-lift animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Excellence, innovation, integrity, and customer satisfaction drive everything we do.
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
                    Over the years, we've grown from a small team of passionate engineers to one of Maharashtra's leading engineering firms, serving clients across commercial, educational, industrial, and residential sectors.
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

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our Experts
              </h2>
              <p className="text-muted-foreground text-lg">
                Our team of experienced professionals is dedicated to delivering exceptional results for every project.
              </p>
            </div>

            {/* CEO Card - Highlighted */}
            {team.filter(member => member.isCEO).map((member) => (
              <div key={member.name} className="max-w-4xl mx-auto mb-12">
                <TiltWrapper rotateAmplitude={10} scaleOnHover={1.03}>
                  <Card className="border-2 border-primary shadow-2xl overflow-hidden animate-scale-in bg-card">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-8 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-4 w-fit">
                          CEO
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                        <p className="text-primary font-semibold mb-4">
                          {member.designation}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </TiltWrapper>
              </div>
            ))}


            {/* Other Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.filter(member => !member.isCEO).map((member, index) => (
                <Card 
                  key={member.name}
                  className="overflow-hidden border-none shadow-lg hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{member.designation}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
