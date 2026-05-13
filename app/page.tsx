import type { Metadata } from "next";
import { ApplicationMatrix } from "@/components/sections/ApplicationMatrix";
import { LightPremiumHero } from "@/components/sections/LightPremiumHero";
import { MaterialSystems } from "@/components/sections/MaterialSystems";
import { RdEvidenceRail } from "@/components/sections/RdEvidenceRail";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { Section } from "@/components/ui/Section";
import { ProcessFlowVisual } from "@/components/visuals/ProcessFlowVisual";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Home",
  description: company.shortDescription,
};

export default function HomePage() {
  return (
    <>
      <LightPremiumHero />
      <MaterialSystems />
      <Section
        eyebrow="Material Pipeline"
        title="요구 물성에서 샘플 조건까지 이어지는 상담 흐름"
        description="WARSOL의 첫 상담은 제품명 하나를 고르는 방식이 아니라, 적용 조건과 소재 설계 변수를 함께 정리하는 방식이어야 합니다."
      >
        <ProcessFlowVisual />
      </Section>
      <RdEvidenceRail />
      <ApplicationMatrix />
      <TechnicalInquiryCta />
    </>
  );
}
