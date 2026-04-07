import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Monstera Deliciosa",
    description: "Folhagem tropical exuberante, perfeita para interiores.",
    price: "R$ 189,90",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop",
  },
  {
    name: "Ficus Lyrata",
    description: "Elegância natural com folhas grandes e escultóricas.",
    price: "R$ 249,90",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=700&fit=crop",
  },
  {
    name: "Palmeira Ráfis",
    description: "Toque tropical sofisticado para qualquer ambiente.",
    price: "R$ 319,90",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
  },
];

const CollectionSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 lg:mb-14">
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
          <div className="hidden sm:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="h-5 w-5 text-foreground/60" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="h-5 w-5 text-foreground/60" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4 bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-primary">{product.price}</p>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs mt-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Compre no WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
