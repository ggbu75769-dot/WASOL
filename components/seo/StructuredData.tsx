import { company } from "@/content/company";
import { productCategories } from "@/content/products";

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warsolchem.co.kr";
  const foundingDate = company.founded.value.replaceAll(".", "-");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.englishName,
    url: siteUrl,
    foundingDate,
    areaServed: "KR",
    description: company.shortDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "경기도",
      addressLocality: "화성시",
      streetAddress: "서신면 전곡산단4길 43",
    },
    member: [
      {
        "@type": "Person",
        name: company.representative,
        jobTitle: "대표이사",
      },
    ],
    knowsAbout: [
      "수용성 고분자",
      "산업용 접착 소재",
      "기능성 코팅",
      "분산 제어",
      "친환경 안전소재",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "WARSOL 소재 상담 제품군",
      itemListElement: productCategories.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: product.englishName,
          alternateName: product.name,
          description: product.shortDefinition,
          serviceType: product.eyebrow,
          url: `${siteUrl}/products/${product.slug}`,
        },
        availability: "https://schema.org/LimitedAvailability",
      })),
    },
    potentialAction: {
      "@type": "ContactAction",
      target: `${siteUrl}/contact`,
      name: "기술 문의 작성",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
