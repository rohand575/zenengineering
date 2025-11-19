// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsSection from "@/components/home/ClientsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
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
