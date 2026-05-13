import type { Metadata } from "next";
import { OfficialAssetNeeded } from "@/components/sections/OfficialAssetNeeded";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { company } from "@/content/company";
import { productCategories } from "@/content/products";
import { getSourceById } from "@/content/source-ledger";

export const metadata: Metadata = {
  title: "Company",
  description:
    "주식회사 워솔의 회사 정체성, 기술 중심 운영 원칙, 공개 출처 기반 연혁과 공식 확인이 필요한 항목을 정리한 기업 소개 페이지입니다.",
};

export default function CompanyPage() {
  const factRows = company.sourceBackedFacts.map((fact) => {
    const source = getSourceById(fact.sourceId);
    return {
      label: fact.claim,
      value: fact.status,
      note: (
        <>
          {fact.use}
          {source && (
            <>
              {" "}
              <a href={source.sourceUrl} target="_blank" rel="noreferrer" className="link-underlined font-bold">
                Source
              </a>
            </>
          )}
        </>
      ),
    };
  });

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="화학 소재의 적용 현장을 아는 R&D형 파트너"
        description={company.positioning}
      />

      <Section
        eyebrow="What WARSOL Does"
        title="워솔은 제품명보다 적용 조건을 먼저 보는 소재 회사입니다."
        description="공개 자료로 확인되는 수용성 고분자, 점·접착, 기능성 코팅, 분산, 친환경 안전 소재 축을 기업 소개 구조로 정리했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <article className="surface technical-border rounded-lg p-7">
            <p className="mono-label">Identity</p>
            <dl className="mt-6 grid gap-5">
              <InfoRow label="법인명" value={company.legalName} />
              <InfoRow label="영문명" value={company.sourceDisplayName} />
              <InfoRow label="대표자" value={company.representative} />
              <InfoRow label={company.founded.label} value={company.founded.value} />
            </dl>
            <div className="mt-6">
              <EvidenceBadge status="public database" />
            </div>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              공개 기업 DB 기반 정보입니다. 공식 사업자등록증, 회사소개서, CI 파일 확인 후 최종 런칭 카피와
              푸터 표기를 고정하는 것이 안전합니다.
            </p>
          </article>

          <div className="grid gap-4 md:grid-cols-2">
            {productCategories.slice(0, 4).map((category) => (
              <DataCard
                key={category.slug}
                eyebrow={category.eyebrow}
                title={category.name}
                body={category.summary}
                items={category.properties.slice(0, 3)}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Operating Principles"
        title="기업 소개 페이지의 신뢰는 과장보다 경계선에서 나옵니다."
        description="고객사, 인증, 매출, 사진처럼 공식 확인이 필요한 항목은 보류하고, 기술 상담에 필요한 원칙을 먼저 보여줍니다."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {company.operatingPrinciples.map((principle) => (
            <DataCard key={principle.title} title={principle.title} body={principle.body} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Public Timeline"
        title="공개 출처로만 구성한 연혁"
        description="고위험 홍보 문구는 제외하고, 기업 DB와 특허 DB로 확인되는 사실만 노출했습니다."
      >
        <div className="grid gap-4">
          {company.history.map((item) => {
            const source = getSourceById(item.sourceId);
            return (
              <article key={`${item.year}-${item.title}`} className="surface grid gap-4 rounded-lg p-6 md:grid-cols-[110px_1fr_170px]">
                <p className="text-4xl font-black text-[var(--cyan)]">{item.year}</p>
                <div>
                  <h2 className="text-2xl font-black text-[var(--brand-navy)]">{item.title}</h2>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p>
                </div>
                {source && (
                  <a className="link-underlined text-sm font-bold" href={source.sourceUrl} target="_blank" rel="noreferrer">
                    Source
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Source-backed Facts"
        title="출처와 사용 범위를 함께 공개합니다."
        description="확인된 사실, 사용 위치, 남은 확인 필요성을 한 표에 묶어 런칭 전 검토가 가능하게 했습니다."
      >
        <SpecTable rows={factRows} columns={["Claim", "Status", "Use / Evidence"]} />
      </Section>

      <Section>
        <div className="surface rounded-lg p-7">
          <p className="eyebrow">Address Status</p>
          <h2 className="mt-4 text-3xl font-black text-[var(--brand-navy)]">주소는 공식 확인 전 지도에 고정하지 않습니다.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            공개 자료 간 주소가 상이해, 출시 전 공식 사업자등록증 또는 회사가 제공한 주소로 확정하는 것이 필요합니다.
            현재 사이트는 주소 후보를 투명하게 표시하고 지도 임베드는 보류합니다.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {company.addressRecords.map((record) => (
              <div key={record.label} className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-5">
                <p className="mono-label">{record.label}</p>
                <p className="mt-3 text-lg font-bold text-[var(--brand-navy)]">{record.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{record.confidence}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <Button href="/contact" variant="secondary">
              문의 채널 보기
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <OfficialAssetNeeded title="공식 회사 자료 수령 전에는 확정 주장하지 않습니다." />
      </Section>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-[var(--line)] pb-4">
      <dt className="mono-label">{label}</dt>
      <dd className="text-xl font-black text-[var(--brand-navy)]">{value}</dd>
    </div>
  );
}
