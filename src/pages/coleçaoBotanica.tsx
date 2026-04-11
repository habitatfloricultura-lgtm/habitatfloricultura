import React from "react";
import CollectionSection from "@/components/CollectionSection";
import Header from "@/components/Header";

type Product = {
  name: string;
  namecientifico: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

const ColecaoBotanica = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    [],
  );

  const products: Product[] = [
    {
      name: "Monstera Deliciosa",
      namecientifico: "Monstera deliciosa",
      category: "plantas",
      description: "Folhagem tropical exuberante, perfeita para interiores.",
      price: "R$ 189,90",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop",
    },
    {
      name: "Ficus Lyrata",
      namecientifico: "Ficus lyrata",
      category: "plantas",
      description: "Elegância natural com folhas grandes e escultóricas.",
      price: "R$ 249,90",
      image:
        "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=700&fit=crop",
    },
    {
      name: "Palmeira Ráfis",
      namecientifico: "Rhapis excelsa",
      category: "vasos",
      description: "Toque tropical sofisticado para qualquer ambiente.",
      price: "R$ 319,90",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
    },
    {
      name: "Luminária Jardim",
      namecientifico: "",
      category: "iluminacao",
      description: "Iluminação suave para áreas externas.",
      price: "R$ 129,90",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
    },
    {
      name: "Adubo Orgânico",
      namecientifico: "",
      category: "adubos",
      description: "Nutrição ideal para suas plantas.",
      price: "R$ 49,90",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=700&fit=crop",
    },
  ];

  const categories = [
    { label: "Plantas", value: "plantas" },
    { label: "Vasos", value: "vasos" },
    { label: "Iluminação", value: "iluminacao" },
    { label: "Adubos", value: "adubos" },
  ];

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.category));

  return (
    <>
      {/* Header fora do container */}
      <Header />

      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex gap-8 items-start">
          {/* FILTRO */}
          <aside
            className="
              fixed top-16 left-0 right-0 z-40 bg-background border-b
              lg:static lg:w-60 lg:mt-12 lg:border lg:rounded-xl lg:p-4
            "
          >
            {/* MOBILE */}
            <div className="flex gap-2 overflow-x-auto px-3 py-2 lg:hidden">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => toggleCategory(cat.value)}
                  className={`
                    whitespace-nowrap px-3 py-1 text-xs rounded-full border transition
                    ${
                      selectedCategories.includes(cat.value)
                        ? "bg-primary text-white border-primary"
                        : "border-border text-foreground"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              <h2 className="font-semibold mb-4">Categorias</h2>

              <div className="space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.value)}
                      onChange={() => toggleCategory(cat.value)}
                      className="accent-primary"
                    />
                    <span className="text-sm">{cat.label}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={() => setSelectedCategories([])}
                className="text-sm text-primary mt-4 hover:underline"
              >
                Limpar filtro
              </button>
            </div>
          </aside>

          {/* CONTEÚDO */}
          <main className="flex-1 mt-16 lg:mt-0">
            <CollectionSection products={filteredProducts} />
          </main>
        </div>
      </div>
    </>
  );
};

export default ColecaoBotanica;
