import { Button } from "@/components/ui/button";

import { Navigate, useNavigate } from "react-router-dom";

const CollectionSection = ({ products }: { products: any[] }) => {
  const navigate = useNavigate();

  const handleWhatsApp = (product: any) => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE; // 🔴 coloque seu número com DDD (sem espaços)

    const message = `Olá, tenho interesse no produto:\n\n🌿 ${product.name}\n💰 ${product.price}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container  lg:mb--14 px-4 lg:px-8">
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
                <p className="text-xs font-semibold text-primary">
                  {product.price}
                </p>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                {/* Nome científico */}
                <p className="text-xs italic text-muted-foreground">
                  {product.namecientifico}
                </p>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <Button
                  onClick={() => handleWhatsApp(product)}
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
