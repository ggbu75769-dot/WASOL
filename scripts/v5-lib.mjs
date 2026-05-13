import { ensureParentDir, projectPath, withChrome, withNextServer } from "./enterprise-v4-lib.mjs";

export { ensureParentDir, projectPath, withChrome, withNextServer };

export const mainRoutes = [
  { name: "home", path: "/" },
  { name: "company", path: "/company" },
  { name: "technology", path: "/technology" },
  { name: "products", path: "/products" },
  { name: "rnd", path: "/rnd" },
  { name: "contact", path: "/contact" },
];

export const productRoutes = [
  { name: "product-adhesion-systems", path: "/products/adhesion-systems" },
  { name: "product-functional-coatings", path: "/products/functional-coatings" },
  { name: "product-waterproof-thermal-protection", path: "/products/waterproof-thermal-protection" },
  { name: "product-dispersion-additives", path: "/products/dispersion-additives" },
  { name: "product-eco-safety-materials", path: "/products/eco-safety-materials" },
];

export const applicationRoutes = [
  { name: "application-building-envelope", path: "/applications/building-envelope" },
  { name: "application-coating-paint", path: "/applications/coating-paint" },
  { name: "application-packaging-label", path: "/applications/packaging-label" },
  { name: "application-energy-storage-safety", path: "/applications/energy-storage-safety" },
];

export const utilityRoutes = [
  { name: "applications", path: "/applications" },
  { name: "resources", path: "/resources" },
  { name: "privacy", path: "/privacy" },
];

export const allRoutes = [...mainRoutes, ...utilityRoutes, ...productRoutes, ...applicationRoutes];

export const viewports = [
  { name: "mobile-360", width: 360, height: 1200 },
  { name: "mobile-390", width: 390, height: 1200 },
  { name: "tablet-768", width: 768, height: 1200 },
  { name: "desktop-1440", width: 1440, height: 1100 },
  { name: "large-1920", width: 1920, height: 1200 },
];

export const finalDetailViewports = [
  { name: "mobile-390", width: 390, height: 1200 },
  { name: "desktop-1440", width: 1440, height: 1100 },
];

export function safeFileName(routeName, viewportName) {
  return `${routeName}-${viewportName}.png`;
}
