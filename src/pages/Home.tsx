import { Header } from "@/components/home/Header"; // <-- IMPORT
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { Footer } from "@/components/home/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header /> {/* <-- ADD THIS LINE */}
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Home;
