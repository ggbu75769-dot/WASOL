import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "회사 | WARSOL",
  description: "WARSOL 회사 개요, 대표 메시지, 소재 사업 방향",
};

const companyMenus = [
  {
    href: "/company/ceo-message",
    title: "대표 메시지",
    body: "현장 조건을 이해하고 품질 자료로 답하는 워솔의 상담 기준",
  },
  {
    href: "/company/history",
    title: "회사 개요와 위치",
    body: "2005년 법인 등록, 화성 전곡산업단지 사업장, 주요 제품 정보",
  },
  {
    href: "/company/vision",
    title: "사업 방향",
    body: "수계 공정, 환경친화 제품, 적용 조건 중심 소재 개발 방향",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="회사"
        title="수용성 고분자 소재를 개발·생산하는 기술형 제조기업"
        description={company.positioning}
      />

      <Section
        eyebrow="회사"
        title="WARSOL 회사 정보"
        description="회사 개요, 대표 메시지, 사업 방향"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {companyMenus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface min-w-0 rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <h2 className="break-words text-3xl font-black leading-tight text-[var(--brand-navy)]">
                {item.title}
              </h2>
              <p className="mt-4 break-words leading-7 text-[var(--muted)]">{item.body}</p>
              <span className="mt-6 inline-flex text-sm font-black text-[var(--brand-blue)]">
                자세히 보기
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="운영 기준" title="소재 상담과 개발의 기준">
        <div className="grid gap-4 lg:grid-cols-3">
          {company.values.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
