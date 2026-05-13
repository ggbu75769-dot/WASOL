import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationMatrix } from "@/components/sections/ApplicationMatrix";
import { LightPremiumHero } from "@/components/sections/LightPremiumHero";
import { MaterialSystems } from "@/components/sections/MaterialSystems";
import { RdEvidenceRail } from "@/components/sections/RdEvidenceRail";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { MaterialPipelineVisual, ResearchPathwayVisual, TechnicalVariableMapVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { applicationGuides } from "@/content/applications";
import { company } from "@/content/company";
import { productCategories } from "@/content/products";

export const metadata: Metadata = {
  title: "WARSOL 수용성 고분자 · 접착 · 코팅 소재",
  description:
    "WARSOL의 수성 고분자, 산업용 접착, 기능성 코팅, 분산 제어, 방수·차열, 친환경 안전 소재를 제품군과 적용 산업 중심으로 정리한 B2B 기술 상담 사이트입니다.",
};

export default function HomePage() {
  return (
    <>
      <LightPremiumHero />
      <Section
        eyebrow="Decision Paths"
        title="제품명보다 적용 조건을 먼저 좁힙니다."
        description="공식 grade name과 TDS가 확정되기 전까지는 제품을 과장하지 않고, 제품군·적용 산업·문의 변수로 상담 경로를 나눕니다."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard
            title="제품군에서 시작"
            body="접착, 코팅, 방수·차열, 분산, 안전 소재 중 가장 가까운 기술 축을 선택합니다."
            items={productCategories.slice(0, 4).map((product) => product.englishName)}
          />
          <DataCard
            title="적용 산업에서 시작"
            body="건축 외피, 도료 배합, 라벨·필름, 에너지 안전처럼 사용 맥락으로 상담을 시작합니다."
            items={applicationGuides.map((guide) => guide.englishName)}
          />
          <DataCard
            title="근거 상태 확인"
            body="공개 특허와 기업 DB는 사용하되, 공식 로고·TDS·인증·주소·이메일 백엔드는 pending으로 분리합니다."
            items={["Public DB", "Patent DB", "Official-data pending"]}
          />
        </div>
      </Section>
      <MaterialSystems />
      <Section
        eyebrow="Material Pipeline"
        title="요구 물성에서 샘플 조건까지 이어지는 상담 흐름"
        description={`${company.englishName} 사이트는 제품 추천을 확정하기 전에 기재, 환경, 요구 물성, 샘플 단계를 구조화합니다.`}
      >
        <MaterialPipelineVisual />
      </Section>
      <Section
        eyebrow="Product Family Routes"
        title="다섯 개 제품군을 상세 경로로 분리했습니다."
        description="각 제품군은 기술 기반, 적용처, 문의 변수, 공식 데이터 상태를 따로 보여줍니다."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {productCategories.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_12px_30px_rgba(15,42,74,0.05)] transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <p className="mono-label">{product.eyebrow}</p>
              <h2 className="mt-3 text-lg font-black leading-tight text-[var(--brand-navy)]">{product.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{product.shortDefinition}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Technical Variables"
        title="문의 전에 빠지기 쉬운 기술 변수를 시각화합니다."
        description="문의 UX는 단순 전송 폼이 아니라 상담을 준비하는 기술 요약 도구로 설계했습니다."
        className="bg-[var(--bg-soft)]"
      >
        <TechnicalVariableMapVisual />
      </Section>
      <RdEvidenceRail />
      <ApplicationMatrix />
      <Section
        eyebrow="Research to Application"
        title="공개 근거를 적용 가이드와 문의 흐름에 연결합니다."
        description="특허·공개 DB 근거는 기술 방향을 설명하는 데 사용하고, 제품 성능과 공식 문서는 pending으로 분리합니다."
      >
        <ResearchPathwayVisual />
      </Section>
      <TechnicalInquiryCta />
    </>
  );
}
