import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "문의 | WARSOL",
  description: "WARSOL 공지사항, 언론보도, 채용, 문의",
};

const supportMenus = [
  { href: "/notice", title: "공지사항", body: "WARSOL 기업 공지" },
  { href: "/press", title: "언론보도", body: "뉴스와 보도자료" },
  { href: "/careers", title: "채용", body: "소재 기술 인재 채용" },
  { href: "/contact", title: "문의", body: "고객 문의와 기술 상담" },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="고객지원"
        title="WARSOL 소식과 문의"
        description="공지사항, 언론보도, 채용, 문의"
      />

      <Section eyebrow="고객지원" title="고객과 함께 여는 다음 단계">
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
