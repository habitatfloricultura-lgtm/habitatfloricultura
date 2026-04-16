import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import image1 from "@/assets/imagens/image5.jpeg";
import { useNavigate } from "react-router-dom";
type Props = {
  id?: string;
};
const HeroSection = ({ id }: Props) => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate("/colecao-botanica");
  };
  const handleWhatsApp = (product: any) => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE; // 🔴 coloque seu número com DDD (sem espaços)

    const message = `Olá! 👋
Gostaria de mais informações 🌿
Pode me ajudar?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <section className="bg-background mt-10" id={id}>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary/80 uppercase">
              Ateliê Botânico Premium
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Transforme seu espaço com a{" "}
              <em className="italic text-primary">beleza da natureza</em>
            </h1>

            <p className="text-muted-foreground text-base lg:text-lg max-w-lg leading-relaxed">
              Uma seleção especial de plantas e design que transforma seu espaço
              em um refúgio particular — onde o natural e o sofisticado convivem
              em perfeita harmonia.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="rounded-full text-sm font-semibold px-8 gap-2"
              >
                Comprar pelo WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleSeeMore}
                size="lg"
                variant="outline"
                className="rounded-full text-sm font-semibold px-8 border-primary/30 text-primary hover:bg-primary/5"
              >
                Ver Coleção
              </Button>
              <div className="pl-2">
                <span className="text-2xl font-bold text-foreground">100+</span>
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-muted-foreground leading-tight">
                  Espécies
                  <br />
                  Selecionadas
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={image1}
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
