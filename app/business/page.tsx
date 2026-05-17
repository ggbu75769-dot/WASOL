import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { industries } from "@/content/products";

export const metadata: Metadata = {
  title: "사업 | WARSOL",
  description:
    "WARSOL 수용성 고분자 소재 사업과 분산 안정성, 점도 제어, 도막 형성, 접착 계면, 방수·차열 보호 검토",
};

const businessMenus = [
  {
    href: "/technology",
    title: "Technology",
    label: "기술",
    body: "수용성 분산, 수지 설계, 도막 형성, 접착 계면, 방수·차열 보호 기술",
  },
  {
    href: "/products",
    title: "Products",
    label: "제품",
    body: "수용성 분산·점도 소재, 기능성 코팅, 점·접착, 방수·차열, 친환경·안전 소재",
  },
  {
    href: "/rnd",
    title: "R&D",
    label: "연구개발",
    body: "수계 접착, 차열·방수 코팅, 친환경 안전 소재의 적용 가능성 확장",
  },
];

const solutionIssues = [
  {
    title: "분산 안정성",
    body: "입자 종류, 고형분, 혼합 순서, 저장 조건에 따라 수계 배합의 안정성을 검토합니다.",
    items: ["입자", "고형분", "혼합 순서", "보관"],
  },
  {
    title: "점도 제어",
    body: "작업성, 도포성, 이송성, 보관 안정성을 기준으로 목표 점도 범위를 확인합니다.",
    items: ["작업성", "도포성", "이송성", "저장 안정성"],
  },
  {
    title: "도막 형성",
    body: "건조 조건, 도막 두께, 외부 노출, 표면 보호 성능을 기준으로 코팅 적용성을 봅니다.",
    items: ["도막", "건조", "노출", "표면 보호"],
  },
  {
    title: "접착 계면",
    body: "기재 표면, 수분 노출, 초기 점착, 박리 안정성을 함께 확인합니다.",
    items: ["기재", "수분", "초기 점착", "박리"],
  },
  {
    title: "방수·차열 보호",
    body: "콘크리트, 외피, 기존 도막처럼 현장 변수가 큰 표면의 보호 조건을 정리합니다.",
    items: ["방수", "차열", "외피", "시공"],
  },
];

const consultationSteps = [
  {
    title: "1. 조건 확인",
    body: "적용 산업, 기재, 배합 목적, 사용 환경, 요구 물성, 보관 조건을 먼저 정리합니다.",
  },
  {
    title: "2. 후보 검토",
    body: "분산제, 수지, 코팅제, 점·접착 소재 중 적용 가능성이 있는 제품군을 좁힙니다.",
  },
  {
    title: "3. 자료·샘플",
    body: "TDS, SDS, 시험 조건, 샘플 상담을 목적에 맞게 연결합니다.",
  },
  {
    title: "4. 후속 검증",
    body: "샘플 적용 결과와 공정 변수를 바탕으로 배합 조정, 공급 가능성, 개발 필요성을 판단합니다.",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="사업분야"
        title="제품 판매보다 적용 조건 검토에서 시작하는 소재 사업"
        description="WARSOL은 고객의 산업, 기재, 배합 목적, 공정 조건을 기준으로 분산 안정성, 접착 안정성, 도막 형성, 방수·차열 보호 성능을 검토합니다."
      />

      <Section eyebrow="사업 영역" title="WARSOL 사업 영역">
        <div className="grid gap-5 lg:grid-cols-3">
          {businessMenus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface min-w-0 rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <p className="mono-label">{item.title}</p>
              <h2 className="mt-4 break-words text-3xl font-black leading-tight text-[var(--brand-navy)]">
                {item.label}
              </h2>
              <p className="mt-4 break-words leading-7 text-[var(--muted)]">{item.body}</p>
              <span className="mt-6 inline-flex text-sm font-black text-[var(--brand-blue)]">
                자세히 보기
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[var(--bg-soft)]"
        eyebrow="고객 문제"
        title="산업 현장에서 자주 확인하는 소재 변수"
        description="같은 제품군이라도 기재, 공정, 노출 조건에 따라 결과가 달라지기 때문에 문제를 물성 단위로 나누어 검토합니다."
      >
        <div className="grid gap-4 lg:grid-cols-5">
          {solutionIssues.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} items={item.items} />
          ))}
        </div>
      </Section>

      <Section eyebrow="적용 산업" title="검토 가능한 적용 산업">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <article key={item.title} className="min-w-0 border-t-2 border-[var(--brand-blue)] bg-[var(--bg-soft)] p-6">
              <h2 className="break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
                {item.title}
              </h2>
              <p className="mt-4 break-words text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="검토 절차" title="상담에서 적용 검토까지">
        <div className="grid gap-4 lg:grid-cols-4">
          {consultationSteps.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <TechnicalInquiryCta />
    </>
  );
}
