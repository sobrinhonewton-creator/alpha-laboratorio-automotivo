export type ProductCategory = "ecu" | "paineis" | "imobilizadores";

export interface CategoryInfo {
  slug: ProductCategory;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

// Category metadata is institutional. Product availability and prices come
// exclusively from Supabase so the public site never invents stock.
export const categories: CategoryInfo[] = [
  {
    slug: "ecu",
    title: "Módulos ECU",
    subtitle: "Injeção eletrônica",
    description: "Itens e aplicações relacionados a módulos de injeção, sempre sujeitos à conferência técnica.",
    image: "/assets/servico-ecu.webp",
  },
  {
    slug: "paineis",
    title: "Painéis de instrumentos",
    subtitle: "Clusters automotivos",
    description: "Painéis e componentes eletrônicos cadastrados no catálogo técnico da Alpha.",
    image: "/assets/servico-paineis.webp",
  },
  {
    slug: "imobilizadores",
    title: "Imobilizadores",
    subtitle: "Sistemas IMMO",
    description: "Itens de sistemas de imobilização e aplicações cadastradas para consulta técnica.",
    image: "/assets/servico-immo.webp",
  },
];
