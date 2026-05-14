import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "회사연혁 및 소개 | WARSOL",
  description: "WARSOL 회사연혁, 회사 소개, 위치",
};

const mapQuery = encodeURIComponent(company.addressRecords[0]?.value ?? "경기도 화성시 서신면 전곡산단4길 43");

export default function CompanyHistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="연혁"
        title="WARSOL 회사연혁"
        description="수용성 고분자 기반 산업 소재 기술의 성장"
      />

      <Section eyebrow="회사 소개" title={company.legalName} description={company.positioning}>
        <div className="grid gap-4 lg:grid-cols-4">
          <DataCard title="대표자" body={company.representative} />
          <DataCard title={company.founded.label} body={company.founded.value} />
          <DataCard title="사업 분야" body="수용성 고분자 소재" />
          <DataCard title="연락처" body={company.contact.phone} />
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="연혁" title="소재 기술 성장 흐름">
        <div className="grid gap-4">
          {company.history.map((item) => (
            <article key={`${item.year}-${item.title}`} className="surface grid gap-5 rounded-lg p-6 md:grid-cols-[120px_1fr]">
              <p className="text-4xl font-black text-[var(--brand-blue)]">{item.year}</p>
              <div>
                <h2 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h2>
                <p className="mt-3 break-words leading-7 text-[var(--muted)]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="위치" title="오시는 길">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface rounded-lg p-7">
            <p className="mono-label">주소</p>
            <h2 className="mt-4 break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
              {company.addressRecords[0]?.value}
            </h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--brand-navy)] px-5 py-3 text-sm font-black text-white"
            >
              Google Maps
            </a>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              공개 기업 정보와 소개자료 기준 화성 전곡산업단지 소재 공장 주소입니다.
            </p>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--bg-soft)]">
            <iframe
              title="WARSOL 위치 구글 지도"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
