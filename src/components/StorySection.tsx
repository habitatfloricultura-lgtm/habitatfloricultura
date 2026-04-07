const StorySection = () => {
  return (
    <section className="bg-background py-16 lg:py-24">
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
              Desde 2012, o Jardim Encantado é referência em plantas ornamentais e
              paisagismo. Nossa equipe de botânicos apaixonados seleciona cada espécie
              com carinho, garantindo que você receba não apenas uma planta, mas uma
              experiência única de conexão com a natureza.
            </p>

            <div className="flex gap-10 pt-4">
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground mt-1">anos de experiência</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-bold text-primary">15k</p>
                <p className="text-sm text-muted-foreground mt-1">clientes felizes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
