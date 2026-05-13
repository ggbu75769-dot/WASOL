import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { IndustryMapVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { applicationGuides } from "@/content/applications";

export const metadata: Metadata = {
  title: "적용 산업 가이드 | WARSOL",
  description:
    "건축 외피, 코팅·도료, 포장·라벨, 에너지 저장 안전 적용처별 소재 과제와 문의 준비 항목을 정리합니다.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="적용 산업별로 소재 질문을 다르게 설계합니다."
        description="제품군을 바로 고르기 어려운 구매자와 기술 평가자를 위해 적용처별 문제, 관련 제품군, 문의 체크리스트를 분리했습니다."
      />
      <Section
        eyebrow="Application Guide Routes"
        title="네 개 적용 산업 가이드"
        description="가짜 고객 사례 대신, 적용 맥락과 검증 필요 사항을 보수적으로 정리합니다."
      >
        <IndustryMapVisual />
      </Section>
      <Section
        eyebrow="Guide List"
        title="적용처별 상세 가이드"
        description="각 가이드는 소재 과제, 관련 제품군, 문의 준비 항목, 위험/검증 메모를 포함합니다."
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {applicationGuides.map((guide) => (
            <Link key={guide.slug} href={`/applications/${guide.slug}`}>
              <DataCard
                eyebrow={guide.englishName}
                title={guide.title}
                body={guide.useContext}
                items={guide.inquiryChecklist}
              />
            </Link>
          ))}
        </div>
      </Section>
      <TechnicalInquiryCta />
    </>
  );
}
