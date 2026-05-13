import { applicationGuides } from "./applications";
import { productCategories } from "./products";

export const topLevelRoutes = [
  { path: "/", label: "Home", priority: 1 },
  { path: "/company", label: "Company", priority: 0.82 },
  { path: "/technology", label: "Technology", priority: 0.82 },
  { path: "/products", label: "Products", priority: 0.86 },
  { path: "/applications", label: "Applications", priority: 0.78 },
  { path: "/rnd", label: "R&D", priority: 0.78 },
  { path: "/resources", label: "Resources", priority: 0.72 },
  { path: "/contact", label: "Contact", priority: 0.86 },
  { path: "/privacy", label: "Privacy", priority: 0.58 },
];

export const productRoutes = productCategories.map((product) => ({
  path: `/products/${product.slug}`,
  label: product.englishName,
  priority: 0.72,
}));

export const applicationRoutes = applicationGuides.map((application) => ({
  path: `/applications/${application.slug}`,
  label: application.englishName,
  priority: 0.7,
}));

export const publicRoutes = [...topLevelRoutes, ...productRoutes, ...applicationRoutes];

export const v5MainCaptureRoutes = [
  { name: "home", path: "/" },
  { name: "company", path: "/company" },
  { name: "technology", path: "/technology" },
  { name: "products", path: "/products" },
  { name: "rnd", path: "/rnd" },
  { name: "contact", path: "/contact" },
];
