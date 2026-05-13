import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationMatrix } from "@/components/sections/ApplicationMatrix";
import { ProductFamilyCard } from "@/components/sections/ProductFamilyCard";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { ProductComparisonVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { productCategories, productDecisionGuide } from "@/content/products";

export const metadata: Metadata = {
  title: "제품군 | WARSOL 접착·코팅·분산 소재",
  description:
    "WARSOL 제품군을 접착 시스템, 기능성 코팅, 방수·차열 보호, 분산·첨가제 제어, 친환경 안전 소재로 나누어 적용 조건과 문의 변수를 정리합니다.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="등급명보다 적용 조건을 먼저 묻는 제품 포트폴리오"
        description="공식 제품 코드, TDS, 인증표가 제공되기 전까지는 공개 출처로 확인 가능한 기술 축과 적용 맥락 중심으로 제품군을 정리합니다."
      />

      <Section
        eyebrow="Product Family Overview"
        title="다섯 개 제품군을 상세 페이지로 분리했습니다."
        description="각 제품군은 공식 데이터 상태, 기술 기반, 적용처, 문의 준비 항목을 독립적으로 제공합니다."
      >
        <div className="grid gap-4 lg:grid-cols-5">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_12px_30px_rgba(15,42,74,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <p className="mono-label">{category.eyebrow}</p>
              <h2 className="mt-3 text-lg font-black leading-tight text-[var(--brand-navy)]">{category.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{category.properties.slice(0, 2).join(" · ")}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Comparison Matrix"
        title="제품군 차이를 한 화면에서 비교합니다."
        description="상용 grade name을 만들지 않고, 상담에 필요한 기술 기반과 질문 항목 중심으로 비교합니다."
        className="bg-[var(--bg-soft)]"
      >
        <ProductComparisonVisual />
      </Section>

      <Section
        eyebrow="Adhesion / Coating / Dispersion / Safety"
        title="제품군별 적용처, 물성, 문의 준비 항목"
        description="각 제품군은 공식 TDS 수령 전까지 보수적으로 표현하며, 상담에 필요한 기술 변수를 함께 제시합니다."
      >
        <div className="grid gap-5">
          {productCategories.map((category) => (
            <ProductFamilyCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>

      <ApplicationMatrix />

      <Section
        eyebrow="TDS Pending Pattern"
        title="공식 datasheet가 없는 상태에서 하지 않는 것"
        description="B2B 소재 사이트는 빈 다운로드 버튼보다 정확한 확인 범위를 보여주는 편이 더 안전합니다."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard
            title="가짜 등급명 없음"
            body="제품 코드를 임의로 만들지 않습니다. 공식 제품명과 grade name은 회사 자료 수령 후 반영합니다."
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
          <DataCard
            title="가짜 성능 수치 없음"
            body="박리강도, 차열성, 내수성 같은 수치는 시험 조건과 함께 확인되어야 합니다."
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
          <DataCard
            title="가짜 다운로드 없음"
            body="TDS/SDS 파일이 없으면 다운로드 버튼을 만들지 않고, 문의 폼에서 필요한 적용 조건을 수집합니다."
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
        </div>
      </Section>

      <Section
        eyebrow="Product Inquiry Decision Guide"
        title="구매자와 개발자가 같은 질문에서 시작하도록 만듭니다."
        description="아래 네 가지 질문을 채우면 제품군이 확정되지 않아도 기술 상담을 시작할 수 있습니다."
        className="bg-[var(--bg-soft)]"
      >
        <SpecTable
          rows={productDecisionGuide.map((item) => ({
            label: item.question,
            value: "문의 준비 항목",
            note: item.detail,
          }))}
          columns={["Question", "Type", "Detail"]}
        />
      </Section>

      <TechnicalInquiryCta />
    </>
  );
}
