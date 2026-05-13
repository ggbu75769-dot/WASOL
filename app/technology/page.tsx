import type { Metadata } from "next";
import { ApplicationMatrix } from "@/components/sections/ApplicationMatrix";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { LayeredCoatingVisual } from "@/components/visuals/LayeredCoatingVisual";
import { PolymerBlueprint } from "@/components/visuals/PolymerBlueprint";
import { ProcessFlowVisual } from "@/components/visuals/ProcessFlowVisual";
import { inquiryVariables, technologyPlatforms } from "@/content/technology";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "워솔의 수용성 고분자, 점착·접착 계면, 기능성 코팅, 분산 제어, 방수·차열 보호 기술 플랫폼을 소개합니다.",
};

const platformById = Object.fromEntries(technologyPlatforms.map((platform) => [platform.id, platform]));

export default function TechnologyPage() {
  const waterBased = platformById["water-based-polymer"];
  const adhesion = platformById["adhesion-engineering"];
  const coating = platformById["functional-coating"];
  const dispersion = platformById["dispersion-control"];
  const waterproofThermal = platformById["waterproof-thermal"];

  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="수지에서 표면까지 이어지는 산업 소재 설계"
        description="기술 페이지는 공장 규모나 과장된 연구소 이미지가 아니라, 공개 자료로 확인되는 수성 고분자·점접착·코팅·분산·방수·차열 축을 실제 문의 변수로 번역합니다."
      />

      <Section
        eyebrow={waterBased.eyebrow}
        title={waterBased.title}
        description={waterBased.summary}
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <DataCard title="수성 기반 소재 대화의 출발점" body="워솔의 공개 주요제품인 수용성 고분자는 접착제, 코팅 바인더, 분산 안정화, 저 VOC 전환 같은 상담의 공통 언어가 됩니다." items={waterBased.variables} />
          <PolymerBlueprint />
        </div>
      </Section>

      <Section
        eyebrow={adhesion.eyebrow}
        title={adhesion.title}
        description={adhesion.summary}
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <DataCard title="계면에서 성능이 결정되는 조건" body="방수 시트, 차수재, 산업 라벨은 같은 접착제라도 기재 표면, 수분 노출, 압착 조건에 따라 성능 판단이 달라집니다." items={adhesion.variables} />
          <SpecTable
            columns={["Variable", "Why it matters", "Inquiry note"]}
            rows={adhesion.applications.map((application, index) => ({
              label: application,
              value: adhesion.variables[index % adhesion.variables.length],
              note: "피착재와 사용 환경을 함께 전달하면 배합 상담이 빨라집니다.",
            }))}
          />
        </div>
      </Section>

      <Section
        eyebrow={coating.eyebrow}
        title={coating.title}
        description={coating.summary}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <LayeredCoatingVisual />
          <DataCard title="도막·계면·기재를 분리해 봅니다." body="차열과 방수는 하나의 문구보다 도막 형성, 표면 보호, 외부 노출, 시공 방식이 함께 맞아야 하는 소재 시스템입니다." items={coating.variables} />
        </div>
      </Section>

      <Section
        eyebrow={dispersion.eyebrow}
        title={dispersion.title}
        description={dispersion.summary}
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {["입자 안정성", "점도/작업성", "필러 호환성"].map((title, index) => (
            <DataCard
              key={title}
              title={title}
              body={dispersion.variables[index + 1] ?? dispersion.summary}
              items={dispersion.applications.slice(index, index + 2)}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow={waterproofThermal.eyebrow}
        title={waterproofThermal.title}
        description={waterproofThermal.summary}
      >
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <DataCard title="방수·차열은 적용 조건의 조합입니다." body="건축 외피, 방수 시공, 설비 보호 프로젝트에서는 온습도, 도막 균열, 외부 노출, 시공 방식이 함께 검토되어야 합니다." items={waterproofThermal.variables} />
          <ProcessFlowVisual />
        </div>
      </Section>

      <Section
        eyebrow="Technical Variables"
        title="기술 문의에 필요한 조건을 미리 정리합니다."
        description="아래 변수는 제품 추천을 확정하기 위한 정보가 아니라, 첫 기술 상담을 정확하게 시작하기 위한 준비 항목입니다."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {inquiryVariables.map((variable) => (
            <div key={variable} className="rounded-lg border border-[var(--line)] bg-white p-5 text-sm font-black text-[var(--brand-navy)] shadow-[0_12px_30px_rgba(15,42,74,0.05)]">
              {variable}
            </div>
          ))}
        </div>
      </Section>

      <ApplicationMatrix />
      <TechnicalInquiryCta />
    </>
  );
}
