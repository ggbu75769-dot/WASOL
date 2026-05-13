import type { Metadata } from "next";
import { OfficialAssetNeeded } from "@/components/sections/OfficialAssetNeeded";
import { PatentTimeline } from "@/components/sections/PatentTimeline";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { patentTimeline, researchPathway, researchThemes } from "@/content/patents";
import { sourceLedger } from "@/content/source-ledger";

export const metadata: Metadata = {
  title: "R&D / Patents",
  description:
    "워솔의 공개 특허 기반 R&D 증거, 수성 점착제, 차열도료, 친환경 자연발화억제제 기술 축과 출처 상태를 정리합니다.",
};

export default function RndPage() {
  return (
    <>
      <PageHero
        eyebrow="R&D / Patents"
        title="특허를 홍보 문구가 아니라 기술 문제 해결의 증거로 보여줍니다."
        description="공개 특허 데이터로 확인되는 소재 문제, 해결 방식, 적용처를 연결하되 상용 제품 등급·인증·고객사로 확대 해석하지 않습니다."
      />

      <Section
        eyebrow="R&D Evidence Positioning"
        title="연구 메시지는 세 가지 축으로 정리됩니다."
        description="수성 전환, 표면 신뢰성, 친환경 안전 응용을 WARSOL 사이트의 R&D 언어로 사용합니다."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {researchThemes.map((theme) => (
            <DataCard key={theme.title} title={theme.title} body={theme.body} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Patent Timeline"
        title="출처와 신뢰도를 함께 노출하는 특허 타임라인"
        description="특허 DB는 강한 신뢰 신호이지만, 상용 제품 등급이나 인증으로 확대 해석하지 않습니다."
        className="bg-[var(--bg-soft)]"
      >
        <PatentTimeline />
      </Section>

      <Section
        eyebrow="Patent Detail Cards"
        title="각 특허를 산업 문제와 소재 접근으로 다시 읽습니다."
        description="방문자가 특허 번호만 보고 끝나지 않도록 문제, 접근, 적용 문의, 제한 사항을 함께 제공합니다."
      >
        <div className="grid gap-5">
          {patentTimeline.map((patent) => (
            <article key={patent.publication} className="surface rounded-lg p-6 lg:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mono-label">{patent.publication}</p>
                  <h2 className="mt-3 text-3xl font-black text-[var(--brand-navy)]">{patent.title}</h2>
                  <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{patent.summary}</p>
                </div>
                <EvidenceBadge status="patent database" />
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <DataCard title="Problem" body={patent.problem} />
                <DataCard title="Material Approach" body={patent.materialApproach} />
                <DataCard title="Application Link" body={patent.applicationLink} />
              </div>
              <p className="mt-5 rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-4 text-sm leading-6 text-[var(--muted)]">
                {patent.limitNote}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Evidence-source Ledger Preview"
        title="사이트에 쓰는 근거와 쓰지 않는 근거를 분리합니다."
        description="출처가 있다고 모두 런칭 카피로 쓰지 않습니다. 홈페이지 안전 여부와 신뢰도를 함께 확인합니다."
      >
        <SpecTable
          columns={["Claim", "Confidence", "Launch Use"]}
          rows={sourceLedger.slice(0, 7).map((entry) => ({
            label: entry.claim,
            value: entry.confidence,
            note: entry.homepageSafe ? "주요 카피에 보수적으로 사용 가능" : entry.note ?? "공식 확인 전 보류",
          }))}
        />
      </Section>

      <Section
        eyebrow="Research to Application Pathway"
        title="증거에서 문의까지 이어지는 경로"
        description="R&D 페이지는 특허 목록을 붙여넣는 곳이 아니라, 적용처와 기술 상담으로 이어지는 근거 구조입니다."
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {researchPathway.map((item, index) => (
            <DataCard
              key={item.title}
              eyebrow={String(index + 1).padStart(2, "0")}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </Section>

      <Section>
        <OfficialAssetNeeded title="공식 R&D 자료가 제공되면 특허/기술 표현을 강화할 수 있습니다." />
      </Section>

      <TechnicalInquiryCta />
    </>
  );
}
