import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "연구개발 | WARSOL",
  description: "WARSOL 수계 접착, 차열 코팅, 친환경 안전소재 연구개발",
};

const researchItems = [
  {
    title: "수성 아크릴 에멀젼 점착제",
    body: "방수 시트와 차수재 적용처럼 내수성과 접착 안정성이 중요한 계면을 검토합니다.",
  },
  {
    title: "차열·방수 코팅 조성",
    body: "건축 외피와 산업 표면 보호에 필요한 도막 형성, 외부 노출, 차열 조건을 연구합니다.",
  },
  {
    title: "친환경 안전 소재",
    body: "재활용 원료의 보관 안정성과 자연발화 억제처럼 환경·안전 이슈가 있는 소재를 검토합니다.",
  },
];

export default function RndPage() {
  return (
    <>
      <PageHero
        eyebrow="연구개발"
        title="수계 소재의 적용 가능성을 확장하는 연구개발"
        description="방수용 점착, 차열·방수 코팅, 친환경 안전 소재를 중심으로 산업 현장의 문제를 소재 관점에서 검토합니다."
      />

      <Section eyebrow="연구개발 중점" title="WARSOL 연구개발 중점">
        <div className="grid gap-4 lg:grid-cols-3">
          {researchItems.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="개발 절차" title="연구개발 상담이 실제 적용으로 이어지는 과정">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="1. 문제 정의" body="기재, 노출 환경, 목표 물성, 안전 기준을 먼저 확인합니다." />
          <DataCard title="2. 소재 후보" body="수지, 분산제, 첨가제, 코팅 조성의 적용 가능성을 좁힙니다." />
          <DataCard title="3. 검증 자료" body="샘플, 시험 조건, 기술자료를 바탕으로 후속 개발 여부를 판단합니다." />
        </div>
      </Section>
    </>
  );
}
