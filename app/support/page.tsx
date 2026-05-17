import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "고객지원 | WARSOL",
  description: "WARSOL 공지사항, 뉴스룸, 채용, 기술 문의",
};

const supportMenus = [
  { href: "/notice", title: "공지사항", body: "제품 자료, 운영 안내, 고객 공지" },
  { href: "/press", title: "뉴스룸", body: "회사 소개, 보도자료, 기업자료 문의" },
  { href: "/careers", title: "채용", body: "생산, 품질, 연구개발, 기술영업 인재 문의" },
  { href: "/contact", title: "기술 문의", body: "샘플, TDS, SDS, 적용 상담 요청" },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="SUPPORT"
        title="자료 요청과 기술 상담을 한곳에서 안내합니다"
        description="제품 적용 상담, 샘플 검토, TDS·SDS 요청, 채용·보도 문의를 목적에 맞게 연결합니다."
      />

      <Section eyebrow="SUPPORT MENU" title="필요한 문의 경로를 선택하세요">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {supportMenus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="surface min-w-0 rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)]"
            >
              <h2 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h2>
              <p className="mt-4 break-words text-sm leading-6 text-[var(--muted)]">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
