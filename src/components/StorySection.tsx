type Props = {
  id?: string;
};
const StorySection = ({ id }: Props) => {
  return (
    <section className="bg-background py-16 lg:py-24" id={id}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop"
              alt="Nossa floricultura"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary/80 uppercase bg-primary/10 px-4 py-1.5 rounded-full">
              Nossa História
            </span>

            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Onde cada planta conta uma história
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              Desde 2012, a Floricultura Habitat do Júlio é referência em
              plantas ornamentais e cuidados com o verde. Trabalhando
              diretamente de casa, Júlio seleciona cada planta com dedicação e
              carinho, garantindo qualidade e beleza em cada detalhe. Aqui, você
              não compra apenas uma planta, mas leva um toque especial de
              natureza para o seu ambiente, com atendimento próximo e
              personalizado.
            </p>

            <div className="flex gap-10 pt-6">
              <div className="text-center">
                <p className="font-serif text-xl lg:text-2xl font-semibold text-primary">
                  Experiência comprovada
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Anos cuidando de plantas com dedicação
                </p>
              </div>

              <div className="w-px bg-border"></div>

              <div className="text-center">
                <p className="font-serif text-xl lg:text-2xl font-semibold text-primary">
                  Clientes satisfeitos
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Atendimento próximo e personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
