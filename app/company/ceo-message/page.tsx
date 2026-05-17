import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "대표 메시지 | WARSOL",
  description: "WARSOL 대표 메시지와 적용 조건 기반 소재 상담 기준",
};

export default function CeoMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="대표 메시지"
        title="좋은 소재는 현장 조건을 정확히 이해하는 일에서 시작됩니다"
        description="수용성 고분자와 산업용 수지 기술을 실제 공정, 기재, 품질 기준에 맞춰 연결하는 것이 WARSOL의 역할입니다."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="surface rounded-lg p-7">
            <p className="mono-label">대표이사</p>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-navy)]">{company.representative}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">WARSOL Inc.</p>
          </aside>

          <article className="min-w-0">
            <p className="break-words text-2xl font-black leading-relaxed text-[var(--brand-navy)] sm:text-4xl">
              고객의 제품과 공정에 맞는 답을 찾는 것, 그것이 WARSOL의 소재 개발 방식입니다.
            </p>
            <div className="mt-8 grid gap-5 text-lg leading-8 text-[var(--muted-strong)]">
              <p>
                주식회사 워솔은 수용성 분산제, 수용성 수지, 코팅제, 점·접착 소재를 기반으로 산업 현장에서 필요한 물성을 함께 검토합니다.
              </p>
              <p>
                같은 소재라도 기재, 수분 노출, 도포량, 건조 조건, 보관 환경에 따라 결과가 달라집니다. 그래서 워솔은 제품명보다 적용 조건을 먼저 확인합니다.
              </p>
              <p>
                샘플, 시험 조건, TDS·SDS, 공급 상담까지 이어지는 실무형 기술 대응으로 고객의 의사결정을 돕겠습니다.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="경영 원칙" title="WARSOL 경영 원칙">
        <div className="grid gap-4 lg:grid-cols-3">
          {company.operatingPrinciples.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
