import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { Footer } from "@/components/home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <BenefitsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Home;
