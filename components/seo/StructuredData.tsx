import { company } from "@/content/company";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: company.legalName,
    alternateName: company.englishName,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warsolchem.co.kr",
    telephone: company.contact.phone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.contact.phone,
      contactType: "technical inquiry",
      availableLanguage: ["ko", "en"],
    },
    founder: {
      "@type": "Person",
      name: company.representative,
    },
    description: company.shortDescription,
    knowsAbout: [
      "Water-based polymer",
      "Industrial adhesive",
      "Functional coating",
      "Dispersion control",
      "Eco materials",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
