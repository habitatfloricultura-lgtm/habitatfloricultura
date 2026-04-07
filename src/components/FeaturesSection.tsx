import { Truck, Heart, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Logística cuidadosa para que suas plantas cheguem frescas e seguras em sua casa.",
  },
  {
    icon: Heart,
    title: "Plantas saudáveis",
    description: "Cultivo especializado com acompanhamento botânico permanente em cada exemplar.",
  },
  {
    icon: Headphones,
    title: "Atendimento personalizado",
    description: "Consultoria exclusiva para ajudar você a escolher a planta ideal para seu ambiente.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card text-center space-y-4 p-8 rounded-2xl shadow-sm"
            >
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
