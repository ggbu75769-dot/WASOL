import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "BUSINESS | WARSOL",
  description: "WARSOL 기술, 제품, 연구개발 사업",
};

const businessMenus = [
  {
    href: "/technology",
    title: "기술",
    body: "수용성 고분자, 접착, 코팅, 분산, 방수, 차열 기술",
  },
  {
    href: "/products",
    title: "제품",
    body: "산업용 접착, 기능성 코팅, 분산, 안전소재 제품군",
  },
  {
    href: "/rnd",
    title: "연구개발",
    body: "방수, 차열, 친환경 안전소재 연구 파이프라인",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="BUSINESS"
        title="기술 경쟁력으로 소재의 가능성을 확장"
        description="Technology, Products, R&D"
      />

      <Section eyebrow="Business Area" title="WARSOL Material Business">
        <div className="grid gap-5 lg:grid-cols-3">
          {businessMenus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface min-w-0 rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <h2 className="break-words text-3xl font-black leading-tight text-[var(--brand-navy)]">{item.title}</h2>
              <p className="mt-4 break-words leading-7 text-[var(--muted)]">{item.body}</p>
              <span className="mt-6 inline-flex text-sm font-black text-[var(--brand-blue)]">More</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="Business Flow" title="From Technology to Application">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="Technology" body="수지 설계, 계면 제어, 도막 형성 기술" />
          <DataCard title="Products" body="접착, 코팅, 방수, 분산 소재 포트폴리오" />
          <DataCard title="R&D" body="차열, 방수, 친환경 안전소재 연구" />
        </div>
      </Section>
    </>
  );
}
