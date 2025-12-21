import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CoreFeaturesSection />
        <AboutSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
