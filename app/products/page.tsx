import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "제품 | WARSOL",
  description: "WARSOL 접착, 코팅, 방수, 분산, 친환경 안전소재 제품군",
};

const products = [
  {
    href: "/products/adhesion-systems",
    title: "접착 및 점착 소재",
    body: "방수 시트, 차수재, 산업용 라벨 적용 소재",
  },
  {
    href: "/products/functional-coatings",
    title: "기능성 코팅 소재",
    body: "방수, 차열, 표면 보호용 코팅 소재",
  },
  {
    href: "/products/waterproof-thermal-protection",
    title: "방수 및 차열 보호 소재",
    body: "건축 외피와 산업 표면 보호 소재",
  },
  {
    href: "/products/dispersion-additives",
    title: "분산 및 첨가제",
    body: "안료, 필러, 수지 배합 안정화 소재",
  },
  {
    href: "/products/eco-safety-materials",
    title: "친환경 안전소재",
    body: "재활용 원료와 자연발화 억제 소재",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS"
        title="산업 적용을 위한 소재 포트폴리오"
        description="Adhesion, Coating, Protection, Dispersion, Eco Safety"
      />

      <Section eyebrow="Product Line" title="WARSOL Product Portfolio">
        <div className="grid gap-5">
          {products.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface grid gap-4 rounded-lg p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)] lg:grid-cols-[0.36fr_1fr]"
            >
              <h2 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h2>
              <p className="break-words leading-7 text-[var(--muted)]">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="Quality Data" title="Material Data Package">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="Product Grade" body="제품 등급과 적용 분야" />
          <DataCard title="Performance Data" body="접착, 내수, 차열, 분산 물성" />
          <DataCard title="TDS / SDS" body="기술자료와 안전보건자료" />
        </div>
      </Section>
    </>
  );
}
