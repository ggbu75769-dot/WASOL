import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "사업 | WARSOL",
  description: "WARSOL 수용성 고분자, 분산제, 코팅제, 점·접착 소재 사업",
};

const businessMenus = [
  {
    href: "/technology",
    title: "기술",
    body: "수용성 분산, 수지 설계, 도막 형성, 접착 계면 기술",
  },
  {
    href: "/products",
    title: "제품",
    body: "수용성 분산제, 코팅제, 점·접착 소재, 방수·차열 보호 소재",
  },
  {
    href: "/rnd",
    title: "연구개발",
    body: "수계 공정, 환경친화 제품, 기능성 보호 소재 연구",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="사업분야"
        title="수용성 고분자 소재 사업"
        description="WARSOL은 분산, 코팅, 접착, 보호 성능이 필요한 산업 현장에 수계 소재 기반의 제품 포트폴리오를 제공합니다."
      />

      <Section eyebrow="사업 영역" title="WARSOL 사업 영역">
        <div className="grid gap-5 lg:grid-cols-3">
          {businessMenus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface min-w-0 rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <h2 className="break-words text-3xl font-black leading-tight text-[var(--brand-navy)]">{item.title}</h2>
              <p className="mt-4 break-words leading-7 text-[var(--muted)]">{item.body}</p>
              <span className="mt-6 inline-flex text-sm font-black text-[var(--brand-blue)]">자세히 보기</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="검토 절차" title="상담에서 적용 검토까지">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="1. 조건 확인" body="적용 산업, 기재, 배합 목적, 사용 환경, 요구 물성을 정리합니다." />
          <DataCard title="2. 소재 후보 검토" body="분산제, 수지, 코팅제, 점·접착 소재 중 적합한 제품군을 좁힙니다." />
          <DataCard title="3. 자료와 샘플" body="TDS·SDS, 시험 조건, 샘플 상담을 통해 적용 가능성을 확인합니다." />
        </div>
      </Section>
    </>
  );
}
