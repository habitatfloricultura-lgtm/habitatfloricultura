import { useQuery } from "@tanstack/react-query";

export type Category = {
  id: string;
  name: string;
  slug: string;
};

const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(
    "https://vkpmrgpwdxcgmlrruptz.supabase.co/functions/v1/get-categories",
  );
  if (!res.ok) throw new Error("Erro ao buscar categorias");
  return res.json();
};
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 10,
  });
};
