import type { Metadata } from "next";
import Link from "next/link";
import { LightPremiumHero } from "@/components/sections/LightPremiumHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "WARSOL | 수용성 고분자 기반 산업 소재",
  description:
    "WARSOL 수용성 고분자 기반 접착, 코팅, 방수, 분산, 친환경 안전소재 솔루션",
};

const businessPanels = [
  {
    href: "/technology",
    label: "기술",
    title: "표면 기술",
    body: "기재와 계면을 중심으로 한 수용성 고분자 기술",
  },
  {
    href: "/products",
    label: "제품",
    title: "소재 포트폴리오",
    body: "접착, 코팅, 방수, 분산, 안전소재 제품군",
  },
  {
    href: "/rnd",
    label: "연구개발",
    title: "연구개발 파이프라인",
    body: "방수, 차열, 자연발화 억제 소재 연구",
  },
];

const supportItems = [
  { href: "/notice", title: "공지사항", body: "기업 공지와 자료 안내" },
  { href: "/press", title: "언론보도", body: "WARSOL 뉴스와 보도자료" },
  { href: "/careers", title: "채용", body: "소재 기술 인재 채용" },
  { href: "/contact", title: "문의", body: "기술 상담과 고객 문의" },
];

export default function HomePage() {
  return (
    <>
      <LightPremiumHero />

      <Section
        eyebrow="사업"
        title="소재 사업"
        description="기술 · 제품 · 연구개발"
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

      <Section className="bg-[var(--bg-soft)]" eyebrow="WARSOL 핵심" title="소재 성능">
        <div className="grid gap-4 lg:grid-cols-4">
          <DataCard title="적용 기재" body="콘크리트, 금속, 필름, 섬유 등 적용 기재" />
          <DataCard title="사용 환경" body="온도, 습도, 외부 노출, 보관 조건" />
          <DataCard title="성능 항목" body="접착력, 내수성, 차열, 분산 안정성" />
          <DataCard title="품질 자료" body="TDS, SDS, 시험 조건, 품질 자료" />
        </div>
      </Section>

      <Section eyebrow="소식과 문의" title="문의와 소식">
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
