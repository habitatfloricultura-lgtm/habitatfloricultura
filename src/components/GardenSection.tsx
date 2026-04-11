type Product = {
  name: string;
  namecientifico?: string;
  category?: string;
  description?: string;
  price?: string;
  image: string;
};

import { useNavigate } from "react-router-dom";
type Props = {
  id?: string;
  products: Product[];
};
const GardenSection = ({ id, products }: Props) => {
  const navigate = useNavigate();
  const [main, top, small1, small2] = products;

  const handleSale = (product: Product) => {
    navigate("/colecao-botanica", { state: { product } });
  };

  return (
    <section id={id} className="bg-card py-16 lg:py-24">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {/* MAIN */}
          {main && (
            <div
              onClick={() => handleSale(main)}
              className="md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={main.image}
                alt={main.name}
                className="w-full h-full object-cover min-h-[300px] md:min-h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-card">
                  {main.name}
                </h3>
                <p className="text-card/80 text-sm mt-1">{main.description}</p>
              </div>
            </div>
          )}

          {/* TOP RIGHT */}
          {top && (
            <div
              onClick={() => handleSale(top)}
              className="rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={top.image}
                alt={top.name}
                className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-xl font-bold text-card">
                  {top.name}
                </h3>
                <p className="text-card/80 text-sm mt-1">{top.description}</p>
              </div>
            </div>
          )}

          {/* SMALL GRID */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {small1 && (
              <div
                onClick={() => handleSale(small1)}
                className="rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={small1.image}
                  alt={small1.name}
                  className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-base font-bold text-card">
                    {small1.name}
                  </h3>
                </div>
              </div>
            )}

            {small2 && (
              <div
                onClick={() => handleSale(small2)}
                className="rounded-2xl overflow-hidden relative group cursor-pointer"
              >
                <img
                  src={small2.image}
                  alt={small2.name}
                  className="w-full h-full object-cover min-h-[180px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-base font-bold text-card">
                    {small2.name}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenSection;
