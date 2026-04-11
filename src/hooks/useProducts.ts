import { useQuery } from "@tanstack/react-query";

export type Product = {
  name: string;
  namecientifico: string;
  category: string;
  description: string;
  price: string;
  image: string;
  status: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://vkpmrgpwdxcgmlrruptz.supabase.co/functions/v1/get-products"
  );
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  const data = await res.json();
  return data.map((item: any) => ({
    name: item.name,
    namecientifico: item.scientific_name || "",
    category: item.categories?.name || "",
    description: item.description || "",
    price: item.price ? `R$ ${Number(item.price).toFixed(2)}` : "",
    image: item.image_url || "",
    status: item.status || "disponivel",
  }));
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};
