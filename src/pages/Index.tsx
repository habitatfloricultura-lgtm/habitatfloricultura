import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CollectionSection from "@/components/CollectionSection";
import GardenSection from "@/components/GardenSection";
import StorySection from "@/components/StorySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CollectionSection />
      <GardenSection />
      <StorySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
