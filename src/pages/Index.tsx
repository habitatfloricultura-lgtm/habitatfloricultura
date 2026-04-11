import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CollectionSection from "@/components/CollectionSection";
import GardenSection from "@/components/GardenSection";
import StorySection from "@/components/StorySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";

const Index = () => {
  const navigate = useNavigate();
  const { data: products = [], isLoading } = useProducts();
  console.log(products);
  const handleSeeMore = () => {
    navigate("/colecao-botanica");
  };

  return (
    <div className="bg-background ">
      <Header />
      <HeroSection id="hero" />
      <FeaturesSection id="features" />
      <section id="collection" className="bg-background py-16 lg:py-24">
        <div className="container  lg:mb--14 px-4 lg:px-8 flex items-center justify-between">
          <div>
            <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary/80 uppercase mb-3">
              Destaque
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
              Coleção Botânica
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              As melhores plantas escolhidas para levar mais vida ao seu lar.
            </p>
          </div>
          <div className="hidden sm:flex gap-2 items-center">
            <Button
              onClick={handleSeeMore}
              className="rounded-full text-xs px-4"
            >
              Ver mais
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className="container px-4 lg:px-8 text-center py-12 text-muted-foreground">
            Carregando produtos...
          </div>
        ) : (
          <CollectionSection products={products.slice(0, 6)} />
        )}
      </section>
      {!isLoading && (
        <GardenSection
          id="garden"
          products={products.filter((p) => p.category === "vasos").slice(0, 4)}
        />
      )}
      <StorySection id="story" />
      <CtaSection id="cta" />
      <Footer id="footer" />
    </div>
  );
};

export default Index;
