import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary/80 uppercase bg-primary/10 px-4 py-1.5 rounded-full">
              Ateliê Botânico Premium
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Transforme seu espaço com a{" "}
              <em className="italic text-primary">beleza da natureza</em>
            </h1>

            <p className="text-muted-foreground text-base lg:text-lg max-w-lg leading-relaxed">
              Descubra plantas e acessórios selecionados para transformar qualquer
              ambiente em um refúgio verde. Entrega cuidadosa em toda a cidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-full text-sm font-semibold px-8 gap-2">
                Compre pelo WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-sm font-semibold px-8 border-primary/30 text-primary hover:bg-primary/5"
              >
                Ver Coleção
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">500+</span> espécies selecionadas
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=1000&fit=crop"
                alt="Plantas decorativas em ambiente elegante"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
