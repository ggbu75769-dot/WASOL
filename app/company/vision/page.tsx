import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "회사 비전 | WARSOL",
  description: "WARSOL 비전과 사업 방향",
};

const visionItems = [
  {
    title: "수용성 고분자",
    body: "수용성 고분자 기반 산업 소재 플랫폼",
  },
  {
    title: "표면 솔루션",
    body: "접착, 코팅, 방수, 분산을 연결하는 표면 기술",
  },
  {
    title: "지속 가능한 안전",
    body: "친환경 안전소재와 품질 신뢰를 향한 연구개발",
  },
];

export default function CompanyVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="비전"
        title="산업의 표면과 안전을 바꾸는 소재 기술"
        description="수용성 고분자 기술로 더 나은 산업 소재의 기준을 제시하는 WARSOL"
      />

      <Section eyebrow="비전" title="소재 솔루션 파트너">
        <div className="grid gap-4 lg:grid-cols-3">
          {visionItems.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <section className="bg-[var(--brand-navy)] py-16 text-white sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <h2 className="break-words text-4xl font-black leading-tight sm:text-6xl">
            표면, 안전, 지속가능성을 위한 소재 기술
          </h2>
          <p className="break-words text-lg leading-8 text-white/72">
            접착, 코팅, 방수, 분산, 안전소재로 이어지는 WARSOL의 기술 포트폴리오
          </p>
        </div>
      </section>
    </>
  );
}
