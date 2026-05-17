import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "공지사항 | WARSOL",
  description: "WARSOL 제품 자료 요청, 샘플 상담, 고객 운영 안내",
};

const notices = [
  {
    category: "자료",
    date: "고객 안내",
    title: "제품 자료 요청 안내",
    body: "TDS, SDS 등 제품 관련 자료는 적용 산업, 제품군, 사용 조건 확인 후 안내됩니다. 정확한 자료 제공을 위해 기재, 배합 목적, 사용 환경을 함께 남겨 주세요.",
  },
  {
    category: "샘플",
    date: "상담 안내",
    title: "샘플 상담 안내",
    body: "샘플 검토는 기재, 배합 목적, 도포 조건, 목표 물성을 함께 확인해야 합니다. 적용 조건이 정리될수록 제품 후보와 검토 범위를 빠르게 좁힐 수 있습니다.",
  },
  {
    category: "운영",
    date: "고객 공지",
    title: "공식 자료 제공 기준",
    body: "기업 자료와 제품 정보는 공식적으로 확인된 내용을 기준으로 안내합니다. 실제 확인되지 않은 인증, 실적, 고객사 정보는 사이트에 임의로 게시하지 않습니다.",
  },
];

export default function NoticePage() {
  return (
    <>
      <PageHero
        eyebrow="공지"
        title="WARSOL 공지사항"
        description="제품 자료, 샘플 상담, 고객 운영 안내를 정확한 자료 기준으로 제공합니다."
      />

      <Section eyebrow="공지사항" title="고객 안내">
        <div className="grid gap-5 lg:grid-cols-3">
          {notices.map((item) => (
            <article key={item.title} className="surface min-w-0 rounded-lg p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-xs font-black text-[var(--brand-blue)]">
                  {item.category}
                </span>
                <span className="text-xs font-bold text-[var(--muted)]">{item.date}</span>
              </div>
              <h2 className="mt-5 break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
                {item.title}
              </h2>
              <p className="mt-4 break-words text-sm leading-7 text-[var(--muted)]">{item.body}</p>
            </article>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
        >
          자료 요청 문의
        </Link>
      </Section>
    </>
  );
}
