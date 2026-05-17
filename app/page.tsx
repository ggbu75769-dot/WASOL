import type { Metadata } from "next";
import Link from "next/link";
import { LightPremiumHero } from "@/components/sections/LightPremiumHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";
import { industries, productDecisionGuide } from "@/content/products";

export const metadata: Metadata = {
  title: "WARSOL | 수용성 고분자 기반 산업 소재",
  description:
    "WARSOL 수용성 고분자, 분산제, 코팅제, 접착·점착 소재 개발 및 생산",
};

const profileFacts = [
  { title: "법인 등록", body: company.founded.value },
  { title: "주요 제품", body: "수용성 고분자" },
  { title: "사업장", body: "경기도 화성시 전곡산업단지" },
  { title: "상담 분야", body: "분산제, 수지, 코팅제, 점·접착 소재" },
];

const businessPanels = [
  {
    href: "/technology",
    label: "기술",
    title: "수용성 소재 기술",
    body: "분산 안정화, 수지 설계, 도막 형성, 접착 계면 검토",
  },
  {
    href: "/products",
    label: "제품",
    title: "제품 포트폴리오",
    body: "수용성 분산제, 코팅제, 점·접착제, 방수·차열 보호 소재",
  },
  {
    href: "/rnd",
    label: "연구개발",
    title: "적용 중심 R&D",
    body: "방수 시트, 수계 코팅, 차열 보호, 친환경 안전 소재 검토",
  },
];

const supportItems = [
  { href: "/notice", title: "공지사항", body: "제품 자료와 운영 안내" },
  { href: "/press", title: "뉴스룸", body: "회사 소개와 보도자료 문의" },
  { href: "/careers", title: "채용", body: "생산, 품질, 연구개발 인재 문의" },
  { href: "/contact", title: "문의", body: "샘플, TDS, SDS, 적용 상담" },
];

export default function HomePage() {
  return (
    <>
      <LightPremiumHero />

      <Section
        eyebrow="Company Profile"
        title="수용성 고분자 소재 개발·생산"
        description={company.positioning}
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {profileFacts.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section
        className="bg-[var(--bg-soft)]"
        eyebrow="사업"
        title="제품보다 적용 조건을 먼저 봅니다"
        description="수계 배합, 기재 표면, 도포·건조 조건, 보관 환경에 따라 필요한 소재 성능이 달라집니다."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {businessPanels.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface min-w-0 rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <p className="mono-label">{item.label}</p>
              <h2 className="mt-4 break-words text-3xl font-black leading-tight text-[var(--brand-navy)]">
                {item.title}
              </h2>
              <p className="mt-4 break-words leading-7 text-[var(--muted)]">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="적용 산업" title="WARSOL 소재 적용 영역">
        <div className="grid gap-4 lg:grid-cols-4">
          {industries.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.description} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="검토 기준" title="기술 상담에 필요한 정보">
        <div className="grid gap-4 lg:grid-cols-4">
          {productDecisionGuide.map((item) => (
            <DataCard key={item.question} title={item.question} body={item.detail} />
          ))}
        </div>
      </Section>

      <Section eyebrow="고객지원" title="자료 요청과 기술 문의">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-w-0 rounded-lg border border-[var(--line)] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <h2 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h2>
              <p className="mt-3 break-words text-sm leading-6 text-[var(--muted)]">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
