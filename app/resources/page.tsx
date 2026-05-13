import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { OfficialDataReadinessVisual, PatentEvidenceRailVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { productCategories } from "@/content/products";
import { sourceLedger } from "@/content/source-ledger";

export const metadata: Metadata = {
  title: "자료·공식 데이터 준비 상태 | WARSOL",
  description:
    "WARSOL 사이트에서 사용하는 공개 근거, pending 공식 자료, TDS/SDS/CI/이메일 백엔드 준비 상태를 분리해 설명합니다.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="공식 자료가 필요한 부분을 숨기지 않습니다."
        description="이 페이지는 공개 DB·특허 근거로 말할 수 있는 것과 WARSOL 공식 승인 후에만 말해야 하는 것을 분리합니다."
      />
      <Section
        eyebrow="Official Data Readiness"
        title="현재 안전하게 사용할 수 있는 데이터 상태"
        description="공식 CI, TDS/SDS, 주소, 이메일 백엔드, 인증/고객사 정보는 승인 전까지 pending 또는 blocked로 둡니다."
      >
        <OfficialDataReadinessVisual />
      </Section>
      <Section
        eyebrow="Patent Evidence"
        title="특허는 기술 방향의 근거이지 상용 제품 성능표가 아닙니다."
        description="공개 특허는 소재 문제와 접근 방식을 설명하는 근거로 사용하고, 고객사·인증·grade로 확대 해석하지 않습니다."
        className="bg-[var(--bg-soft)]"
      >
        <PatentEvidenceRailVisual />
      </Section>
      <Section
        eyebrow="Product Data Readiness"
        title="제품군별 공식 문서 상태"
        description="다운로드가 없는 자료는 빈 버튼을 만들지 않고, 문의 준비 항목으로 연결합니다."
      >
        <div className="grid gap-4">
          {productCategories.map((product) => (
            <DataCard
              key={product.slug}
              eyebrow={product.englishName}
              title={product.name}
              body={product.officialDataStatus}
              items={[product.tdsStatus, ...product.inquiryPrompts.slice(0, 2)]}
              aside={<EvidenceBadge status="pending official confirmation" />}
            />
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Source Ledger"
        title="현재 사이트가 참조하는 근거"
        description="각 출처는 홈페이지에 안전하게 사용할 수 있는지와 pending 여부를 함께 확인합니다."
        className="bg-[var(--bg-soft)]"
      >
        <SpecTable
          columns={["Claim", "Confidence", "Launch use"]}
          rows={sourceLedger.map((entry) => ({
            label: entry.claim,
            value: entry.confidence,
            note: entry.homepageSafe ? "보수적 사용 가능" : entry.note ?? "공식 확인 필요",
          }))}
        />
      </Section>
    </>
  );
}
