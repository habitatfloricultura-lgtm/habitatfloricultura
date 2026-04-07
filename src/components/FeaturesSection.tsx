import { Truck, Heart, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Entrega cuidadosa em até 24h para toda a cidade com embalagem especial.",
  },
  {
    icon: Heart,
    title: "Plantas saudáveis",
    description: "Todas as plantas passam por curadoria e chegam com garantia de saúde.",
  },
  {
    icon: Headphones,
    title: "Atendimento personalizado",
    description: "Nossa equipe de botânicos ajuda você a escolher a planta perfeita.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-card py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
