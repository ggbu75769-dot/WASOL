import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { productCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "제품 | WARSOL",
  description: "WARSOL 수용성 분산제, 코팅제, 점·접착, 방수·차열 보호 소재 제품군",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS"
        title="산업용 수용성 소재 포트폴리오"
        description="분산제, 수용성 수지, 기능성 코팅, 점·접착 소재를 고객 산업과 공정 조건에 맞춰 검토합니다."
      />

      <Section eyebrow="PRODUCT LINEUP" title="WARSOL 제품 포트폴리오">
        <div className="grid gap-5">
          {productCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="surface grid gap-4 rounded-lg p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)] lg:grid-cols-[0.36fr_1fr]"
            >
              <div>
                <p className="mono-label">{item.eyebrow}</p>
                <h2 className="mt-3 break-words text-2xl font-black text-[var(--brand-navy)]">{item.name}</h2>
              </div>
              <p className="break-words leading-7 text-[var(--muted)]">{item.shortDefinition}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="TECHNICAL DATA" title="제품 검토에 필요한 자료">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="적용 조건" body="기재, 배합 목적, 사용 환경, 보관 조건" />
          <DataCard title="성능 항목" body="점도, 분산 안정성, 접착, 내수, 도막 안정성" />
          <DataCard title="TDS / SDS" body="기술자료와 안전보건자료 요청" />
        </div>
      </Section>
    </>
  );
}
