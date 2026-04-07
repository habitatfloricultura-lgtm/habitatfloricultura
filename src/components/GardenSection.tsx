const GardenSection = () => {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary/80 uppercase mb-3">
            Design &amp; Acessórios
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
            Objetos de Jardim
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* Vasos de Cerâmica - tall left */}
          <div className="md:row-span-2 rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&h=1000&fit=crop"
              alt="Vasos de Cerâmica"
              className="w-full h-full object-cover min-h-[300px] md:min-h-full group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-card">Vasos de Cerâmica</h3>
              <p className="text-card/80 text-sm mt-1">Artesanais e exclusivos</p>
            </div>
          </div>

          {/* Ferramentas Premium - top right */}
          <div className="rounded-2xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop"
              alt="Ferramentas Premium"
              className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-xl font-bold text-card">Ferramentas Premium</h3>
              <p className="text-card/80 text-sm mt-1">Para jardineiros exigentes</p>
            </div>
          </div>

          {/* Bottom right - 2 smaller cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop"
                alt="Estátuas decorativas"
                className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-base font-bold text-card">Estátuas</h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop"
                alt="Iluminação de jardim"
                className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-serif text-base font-bold text-card">Iluminação</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenSection;
