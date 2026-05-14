import { productCategories } from "./products";

export const topLevelRoutes = [
  { path: "/", label: "홈", priority: 1 },
  { path: "/company", label: "회사", priority: 0.86 },
  { path: "/company/ceo-message", label: "CEO 소개 및 메시지", priority: 0.72 },
  { path: "/company/history", label: "회사연혁 및 소개", priority: 0.72 },
  { path: "/company/vision", label: "회사 비전", priority: 0.72 },
  { path: "/business", label: "사업", priority: 0.86 },
  { path: "/technology", label: "기술", priority: 0.82 },
  { path: "/products", label: "제품", priority: 0.82 },
  { path: "/rnd", label: "연구개발", priority: 0.78 },
  { path: "/support", label: "문의", priority: 0.78 },
  { path: "/notice", label: "공지사항", priority: 0.68 },
  { path: "/press", label: "언론보도", priority: 0.66 },
  { path: "/careers", label: "채용", priority: 0.66 },
  { path: "/contact", label: "문의", priority: 0.82 },
  { path: "/privacy", label: "개인정보 안내", priority: 0.52 },
];

export const productRoutes = productCategories.map((product) => ({
  path: `/products/${product.slug}`,
  label: product.name,
  priority: 0.64,
}));

export const applicationRoutes: { path: string; label: string; priority: number }[] = [];

export const publicRoutes = [...topLevelRoutes, ...productRoutes];
