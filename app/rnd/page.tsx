import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "연구개발 | WARSOL",
  description:
    "WARSOL 수계 접착, 차열·방수 코팅, 친환경 안전 소재 연구개발과 현장 조건 기반 개발 절차",
};

const researchItems = [
  {
    title: "수성 아크릴 에멀젼 점착제",
    body: "방수 시트와 차수재 적용처럼 내수성과 접착 안정성이 중요한 계면을 검토합니다.",
    items: ["기재 밀착", "내수성", "박리 안정성", "도포 조건"],
  },
  {
    title: "차열·방수 코팅 조성",
    body: "건축 외피와 산업 표면 보호에 필요한 도막 형성, 외부 노출, 차열 조건을 연구합니다.",
    items: ["도막 형성", "외부 노출", "차열", "방수"],
  },
  {
    title: "친환경 안전 소재",
    body: "재활용 원료의 보관 안정성과 자연발화 억제처럼 환경·안전 이슈가 있는 소재를 검토합니다.",
    items: ["재활용 원료", "보관 안정성", "발열 조건", "안전 기준"],
  },
];

const processItems = [
  {
    title: "1. 문제 정의",
    body: "기재, 노출 환경, 목표 물성, 안전 기준을 함께 정리합니다.",
  },
  {
    title: "2. 소재 후보",
    body: "수지, 분산제, 첨가제, 코팅 조성 중 검토 가능한 후보를 좁힙니다.",
  },
  {
    title: "3. 검증 자료",
    body: "샘플, 시험 조건, 기술자료를 바탕으로 적용 가능성을 판단합니다.",
  },
  {
    title: "4. 후속 개발",
    body: "현장 결과에 따라 배합 조정, 성능 검증, 공동개발 필요성을 협의합니다.",
  },
];

const variables = ["기재", "노출 환경", "목표 물성", "안전 기준", "보관 조건", "자료 요청"];

export default function RndPage() {
  return (
    <>
      <PageHero
        eyebrow="연구개발"
        title="수계 소재의 적용 가능성을 확장하는 연구개발"
        description="WARSOL의 연구개발은 실험실 단계의 소재 개발에 머무르지 않고 고객 현장의 기재, 노출 환경, 목표 물성, 안전 기준을 함께 검토하는 방식으로 진행됩니다."
      />

      <Section eyebrow="연구개발 중점" title="WARSOL 연구개발 중점">
        <div className="grid gap-4 lg:grid-cols-3">
          {researchItems.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} items={item.items} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="개발 절차" title="고객 문제에서 후속 개발까지">
        <div className="grid gap-4 lg:grid-cols-4">
          {processItems.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section eyebrow="적용 변수" title="연구개발 상담에서 확인하는 기준">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {variables.map((item) => (
            <div key={item} className="rounded-lg border border-[var(--line)] bg-white p-5 text-sm font-black text-[var(--brand-navy)] shadow-[0_12px_30px_rgba(15,42,74,0.05)]">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <TechnicalInquiryCta label="공동개발 문의" />
    </>
  );
}
