import { useQuery } from "@tanstack/react-query";

export type Product = {
  name: string;
  namecientifico: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    "https://vkpmrgpwdxcgmlrruptz.supabase.co/functions/v1/get-products"
  );
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });
};
