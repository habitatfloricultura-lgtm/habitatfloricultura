import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CollectionSection from "@/components/CollectionSection";
import GardenSection from "@/components/GardenSection";
import StorySection from "@/components/StorySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Monstera Deliciosa",
    namecientifico: "Monstera deliciosa",
    category: "Plantas",
    description: "Folhagem tropical exuberante, perfeita para interiores.",
    price: "R$ 189,90",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop",
  },
  {
    name: "Ficus Lyrata",
    namecientifico: "Ficus lyrata",
    category: "Plantas",
    description: "Elegância natural com folhas grandes e escultóricas.",
    price: "R$ 249,90",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=700&fit=crop",
  },
  {
    name: "Palmeira Ráfis",
    namecientifico: "Rhapis excelsa",
    category: "vasos",
    description: "Toque tropical sofisticado para qualquer ambiente.",
    price: "R$ 319,90",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
  },
  {
    name: "Monstera Deliciosa",
    namecientifico: "Monstera deliciosa",
    category: "iluminação",
    description: "Folhagem tropical exuberante, perfeita para interiores.",
    price: "R$ 189,90",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop",
  },
  {
    name: "Ficus Lyrata",
    namecientifico: "Ficus lyrata",
    category: "iluminação",
    description: "Elegância natural com folhas grandes e escultóricas.",
    price: "R$ 249,90",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=700&fit=crop",
  },
  {
    name: "Palmeira Ráfis",
    namecientifico: "Rhapis excelsa",
    category: "adubos",
    description: "Toque tropical sofisticado para qualquer ambiente.",
    price: "R$ 319,90",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
  },
  {
    name: "Monstera Deliciosa",
    namecientifico: "Monstera deliciosa",
    category: "adubos",
    description: "Folhagem tropical exuberante, perfeita para interiores.",
    price: "R$ 189,90",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop",
  },
  {
    name: "Ficus Lyrata",
    namecientifico: "Ficus lyrata",
    category: "plantas",
    description: "Elegância natural com folhas grandes e escultóricas.",
    price: "R$ 249,90",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=700&fit=crop",
  },
  {
    name: "Palmeira Ráfis",
    namecientifico: "Rhapis excelsa",
    category: "adubos",
    description: "Toque tropical sofisticado para qualquer ambiente.",
    price: "R$ 319,90",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
  },
  {
    name: "Monstera Deliciosa",
    namecientifico: "Monstera deliciosa",
    category: "plantas",
    description: "Folhagem tropical exuberante, perfeita para interiores.",
    price: "R$ 189,90",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop",
  },
  {
    name: "Ficus Lyrata",
    namecientifico: "Ficus lyrata",
    category: "plantas",
    description: "Elegância natural com folhas grandes e escultóricas.",
    price: "R$ 249,90",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=700&fit=crop",
  },
  {
    name: "Palmeira Ráfis",
    namecientifico: "Rhapis excelsa",
    category: "plantas",
    description: "Toque tropical sofisticado para qualquer ambiente.",
    price: "R$ 319,90",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
  },
];

const Index = () => {
  const navigate = useNavigate();

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
          {/* ESQUERDA (título) */}
          <div>
            <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary/80 uppercase mb-3">
              Destaque
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
              Coleção Botânica
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              Plantas selecionadas com curadoria especial para seu lar.
            </p>
          </div>

          {/* DIREITA (botões) */}
          <div className="hidden sm:flex gap-2 items-center">
            <Button
              onClick={handleSeeMore}
              className="rounded-full text-xs px-4"
            >
              Ver mais
            </Button>
          </div>
        </div>
        <CollectionSection products={products.slice(0, 6)} />
      </section>
      <GardenSection
        id="garden"
        products={products.filter((p) => p.category === "plantas").slice(0, 4)}
      />
      <StorySection id="story" />
      <CtaSection id="cta" />
      <Footer id="footer" />
    </div>
  );
};

export default Index;
