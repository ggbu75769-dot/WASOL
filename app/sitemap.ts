import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warsolchem.co.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/company", "/technology", "/products", "/rnd", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.75,
  }));
}
