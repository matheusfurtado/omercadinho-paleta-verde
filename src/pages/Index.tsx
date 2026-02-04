import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import LocationsSection from "@/components/landing/LocationsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsForSection from "@/components/landing/BenefitsForSection";
import TechnologySection from "@/components/landing/TechnologySection";
import NextStepsSection from "@/components/landing/NextStepsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <LocationsSection />
      <HowItWorksSection />
      <BenefitsForSection />
      <TechnologySection />
      <NextStepsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
