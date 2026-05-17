import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "사업 방향 | WARSOL",
  description: "WARSOL 수용성 소재 사업 방향",
};

const visionItems = [
  {
    title: "수계 공정 대응",
    body: "유해 용제 부담을 줄이고 수계 공정에 맞는 분산, 코팅, 접착 소재를 검토합니다.",
  },
  {
    title: "적용 조건 중심",
    body: "산업, 기재, 온습도, 보관 조건을 기준으로 제품 후보와 시험 조건을 좁힙니다.",
  },
  {
    title: "자료 기반 신뢰",
    body: "샘플 검토와 품질 자료를 연결해 고객이 실제로 판단할 수 있는 정보를 제공합니다.",
  },
];

export default function CompanyVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="사업 방향"
        title="환경친화적 수용성 소재로 산업 현장의 선택지를 넓힙니다"
        description="세제, 수처리, 제지, 코팅, 방수, 산업 접착 분야에서 수계 소재가 필요한 조건을 함께 검토합니다."
      />

      <Section eyebrow="방향" title="WARSOL 소재 사업 방향">
        <div className="grid gap-4 lg:grid-cols-3">
          {visionItems.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <section className="bg-[var(--brand-navy)] py-16 text-white sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <h2 className="break-words text-4xl font-black leading-tight sm:text-6xl">
            수용성 소재, 현장 조건, 품질 자료
          </h2>
          <p className="break-words text-lg leading-8 text-white/72">
            워솔은 제품군을 넓히는 데서 멈추지 않고, 고객의 적용 조건에 맞는 검토 절차와 자료 제공 체계를 함께 강화합니다.
          </p>
        </div>
      </section>
    </>
  );
}
