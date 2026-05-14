import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "CEO 소개 및 메시지 | WARSOL",
  description: "WARSOL CEO 소개 및 메시지",
};

export default function CeoMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="CEO MESSAGE"
        title="고객의 현장과 함께 성장하는 소재 기술"
        description="기술 경쟁력, 품질 신뢰, 고객 적용 가치를 중심에 둔 WARSOL의 경영 방향"
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="surface rounded-lg p-7">
            <p className="mono-label">CEO</p>
            <h2 className="mt-4 text-3xl font-black text-[var(--brand-navy)]">{company.representative}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">WARSOL Inc.</p>
          </aside>

          <article className="min-w-0">
            <p className="break-words text-2xl font-black leading-relaxed text-[var(--brand-navy)] sm:text-4xl">
              소재의 가치는 고객의 현장에서 완성됩니다.
            </p>
            <div className="mt-8 grid gap-5 text-lg leading-8 text-[var(--muted-strong)]">
              <p>
              주식회사 워솔은 이창주 대표이사를 중심으로 수용성 고분자와 산업용 수지 기술을 바탕으로 접착, 코팅, 방수, 분산, 안전소재 분야의 소재 솔루션을 전개합니다.
              </p>
              <p>
                고객의 기재, 공정, 사용 환경, 품질 기준에 맞춰 소재 성능을 구체화하고 지속 가능한 기술 파트너십을 만들어 갑니다.
              </p>
              <p>
                산업의 표면과 안전을 바꾸는 소재 기술. WARSOL의 기술 방향.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="PRINCIPLE" title="WARSOL Management Principle">
        <div className="grid gap-4 lg:grid-cols-3">
          {company.operatingPrinciples.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
