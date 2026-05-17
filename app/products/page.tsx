import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { productCategories, productDecisionGuide } from "@/content/products";

export const metadata: Metadata = {
  title: "제품 | WARSOL",
  description:
    "WARSOL 산업용 수용성 소재 포트폴리오와 접착·점착, 코팅, 방수·차열, 분산·점도, 친환경·안전 제품군",
};

const reviewMaterials = [
  {
    title: "적용 조건",
    body: "산업, 기재, 배합 목적, 사용 환경, 보관 조건을 알려주시면 제품군 검토가 빨라집니다.",
  },
  {
    title: "성능 항목",
    body: "점도, 분산 안정성, 접착, 내수, 차열, 도막 안정성처럼 목표 물성을 함께 확인합니다.",
  },
  {
    title: "자료 요청",
    body: "TDS, SDS, 샘플, 시험 조건, 견적 요청은 문의 목적에 맞춰 안내합니다.",
  },
  {
    title: "후속 검토",
    body: "샘플 적용 결과에 따라 배합 조정, 추가 자료, 공동개발 가능성을 협의합니다.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="제품"
        title="산업용 수용성 소재 포트폴리오"
        description="WARSOL의 제품 포트폴리오는 단일 제품명보다 적용 산업과 공정 조건을 기준으로 검토됩니다. 기재, 배합 목적, 사용 환경, 목표 물성, 보관 조건을 함께 확인합니다."
      />

      <Section eyebrow="제품군" title="WARSOL 제품 포트폴리오">
        <div className="grid gap-5">
          {productCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="surface grid gap-5 rounded-lg p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)] lg:grid-cols-[0.34fr_1fr]"
            >
              <div className="min-w-0">
                <p className="mono-label">{item.eyebrow}</p>
                <h2 className="mt-3 break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
                  {item.name}
                </h2>
                <p className="mt-3 break-words text-sm leading-6 text-[var(--muted)]">{item.englishName}</p>
              </div>
              <div className="min-w-0">
                <p className="break-words leading-7 text-[var(--muted)]">{item.shortDefinition}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <MiniSpec label="적용 분야" values={item.applications.slice(0, 3)} />
                  <MiniSpec label="핵심 검토" values={item.properties.slice(0, 3)} />
                  <MiniSpec label="문의 정보" values={item.inquiryPrompts.slice(0, 3)} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="제품 검토" title="B2B 구매 검토에 필요한 정보">
        <div className="grid gap-4 lg:grid-cols-4">
          {reviewMaterials.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section eyebrow="검토 기준" title="제품 문의 전 정리하면 좋은 항목">
        <div className="grid gap-4 lg:grid-cols-4">
          {productDecisionGuide.map((item) => (
            <article key={item.question} className="min-w-0 border-t-2 border-[var(--brand-blue)] bg-[var(--bg-soft)] p-6">
              <h2 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.question}</h2>
              <p className="mt-4 break-words text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <TechnicalInquiryCta />
    </>
  );
}

function MiniSpec({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="min-w-0 rounded-md border border-[var(--line)] bg-[var(--bg-soft)] p-4">
      <p className="text-xs font-black text-[var(--brand-blue)]">{label}</p>
      <p className="mt-3 break-words text-sm font-bold leading-6 text-[var(--muted-strong)]">
        {values.join(" / ")}
      </p>
    </div>
  );
}
