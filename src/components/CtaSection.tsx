import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Facebook } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight max-w-2xl mx-auto">
          Vamos florescer seu projeto juntos?
        </h2>
        <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto">
          Entre em contato e descubra como podemos transformar seu espaço com
          a beleza das plantas.
        </p>

        <Button
          size="lg"
          className="mt-8 rounded-full text-sm font-bold px-10 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Fale Conosco agora
        </Button>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/60 text-sm">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Rua das Flores, 123 — São Paulo, SP
          </span>
          <span className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
