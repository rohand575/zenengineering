import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsSection from "@/components/home/ClientsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zen Engineering Solutions | Acoustic & HVAC Experts</title>
        <meta
          name="description"
          content="Zen Engineering Solutions delivers premium HVAC, acoustic, and insulation services across Maharashtra with authorised Daikin, Anutone Acoustic, and Symphony partnerships."
        />
      </Helmet>

      <main>
        <Hero />
        <ServicesSection />
        <ProjectsPreview />
        <WhyChooseUs />
        <ClientsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
