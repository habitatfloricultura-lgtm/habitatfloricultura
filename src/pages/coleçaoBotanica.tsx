import React from "react";
import CollectionSection from "@/components/CollectionSection";
import Header from "@/components/Header";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";

const ColecaoBotanica = () => {
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const { data: products = [], isLoading } = useProducts();
  const { data: categories = [] } = useCategories();

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
      <Header />
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex gap-8 items-start">
          <aside className="fixed top-16 left-0 right-0 z-40 bg-background border-b lg:static lg:w-60 lg:mt-12 lg:border lg:rounded-xl lg:p-4">
            <div className="flex gap-2 overflow-x-auto px-3 py-2 lg:hidden">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => toggleCategory(cat.name)}
                  className={`whitespace-nowrap px-3 py-1 text-xs rounded-full border transition ${
                    selectedCategories.includes(cat.name)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="hidden lg:block">
              <h2 className="font-semibold mb-4">Categorias</h2>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label key={cat.slug} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat.name)}
                      onChange={() => toggleCategory(cat.name)}
                      className="accent-primary"
                    />
                    <span className="text-sm">{cat.name}</span>
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
          <main className="flex-1 mt-16 lg:mt-0">
            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">Carregando produtos...</div>
            ) : (
              <CollectionSection products={filteredProducts} />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default ColecaoBotanica;
