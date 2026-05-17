import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "문의 | WARSOL",
  description: "WARSOL 고객 문의 및 기술 상담",
};

const inquiryChecklist = [
  "문의 유형",
  "제품군",
  "적용 산업",
  "기재 / 배합",
  "사용 환경",
  "요구 물성",
  "샘플 요청",
  "TDS / SDS",
  "일정",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="기술 문의"
        title="적용 조건을 알려주시면 제품 검토가 빨라집니다"
        description="샘플, TDS, SDS, 견적, 공동개발 문의는 제품군과 사용 조건을 함께 남겨 주세요."
      />

      <Section eyebrow="문의 양식" title="제품 적용 상담">
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {inquiryChecklist.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[var(--line)] bg-white p-5 text-sm font-black text-[var(--brand-navy)] shadow-[0_12px_30px_rgba(15,42,74,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>
        <Suspense fallback={<div className="surface rounded-lg p-6 text-sm font-bold text-[var(--muted)]">문의 양식 로딩</div>}>
          <InquiryForm />
        </Suspense>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="연락처" title="WARSOL 연락처">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface rounded-lg p-7">
            <p className="mono-label">WARSOL</p>
            <a href={`tel:${company.contact.phone}`} className="mt-4 block text-3xl font-black text-[var(--brand-navy)]">
              {company.contact.phone}
            </a>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Fax {company.contact.fax}</p>
            <a href={company.contact.website} className="mt-3 inline-flex text-sm font-black text-[var(--brand-blue)]">
              {company.contact.website}
            </a>
            <p className="mt-4 text-sm font-bold leading-6 text-[var(--brand-navy)]">
              {company.addressRecords[0]?.value}
            </p>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{company.contact.note}</p>
          </div>

          <div className="surface rounded-lg p-7">
            <h2 className="text-2xl font-black text-[var(--brand-navy)]">소재 문의</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              수용성 분산제, 코팅제, 점·접착 소재, 방수·차열 보호 소재에 대한 기술 상담과 제품 자료 문의
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <DataCard title="샘플" body="기재와 사용 조건 확인" />
              <DataCard title="TDS / SDS" body="기술자료와 안전보건자료" />
              <DataCard title="적용 상담" body="배합, 도포, 보관 조건 검토" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
