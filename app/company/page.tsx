import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "회사 | WARSOL",
  description: "WARSOL CEO 메시지, 회사연혁, 위치, 회사 비전",
};

const companyMenus = [
  {
    href: "/company/ceo-message",
    title: "CEO 소개 및 메시지",
    body: "소재 기술 기업 WARSOL의 경영 철학과 고객 가치",
  },
  {
    href: "/company/history",
    title: "회사연혁 및 소개",
    body: "수용성 고분자 기반 소재 기술의 성장 흐름과 위치",
  },
  {
    href: "/company/vision",
    title: "회사 VISION",
    body: "산업의 표면과 안전을 바꾸는 소재 기술 비전",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPANY"
        title="산업 소재 기술을 향한 WARSOL의 기준"
        description={company.shortDescription}
      />

      <Section
        eyebrow="회사"
        title="WARSOL Company"
        description="CEO Message, History, Vision"
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
                More
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="VALUE" title="WARSOL Core Value">
        <div className="grid gap-4 lg:grid-cols-3">
          {company.values.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
