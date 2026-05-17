import type { Metadata } from "next";
import Link from "next/link";
import { LightPremiumHero } from "@/components/sections/LightPremiumHero";

export const metadata: Metadata = {
  title: "WARSOL | 수용성 소재 솔루션",
  description: "WARSOL은 산업 현장의 분산·코팅·접착·보호 성능을 적용 조건에 맞춰 검토합니다.",
};

const businessAreas = [
  {
    href: "/products/dispersion-additives",
    number: "01",
    title: "분산·점도",
    body: "수계 배합 안정화",
  },
  {
    href: "/products/functional-coatings",
    number: "02",
    title: "코팅·보호",
    body: "도막 형성과 표면 보호",
  },
  {
    href: "/products/adhesion-systems",
    number: "03",
    title: "점·접착",
    body: "기재 밀착과 내수성",
  },
];

const industries = ["건축·방수", "코팅·도료", "세제·수처리·제지", "산업용 접착"];

const supportLinks = [
  { href: "/notice", label: "공지" },
  { href: "/press", label: "기업자료" },
  { href: "/careers", label: "채용" },
  { href: "/contact", label: "기술 문의" },
];

function SectionHeading({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-w-0">
      <h2 className="break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl break-words text-base leading-7 text-[var(--muted)] sm:text-lg">
        {body}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <LightPremiumHero />

      <section className="bg-white py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:items-start">
          <div className="min-w-0">
            <SectionHeading title="사업분야" body="소재가 필요한 공정에 맞춰 제품군을 검토합니다." />
            <Link
              href="/business"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--brand-navy)] px-6 py-3 text-sm font-black text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white"
            >
              사업분야 보기
            </Link>
          </div>

          <div
            data-home-card-rail="business"
            className="grid gap-0 border-y border-[var(--line-strong)] md:min-h-[260px] md:grid-cols-3"
          >
            {businessAreas.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-w-0 border-b border-[var(--line)] px-0 py-9 transition hover:bg-[var(--bg-soft)] md:border-b-0 md:border-r md:px-8 md:py-10"
              >
                <span className="text-sm font-black text-[var(--brand-blue)]">{item.number}</span>
                <h3 className="mt-5 break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
                  {item.title}
                </h3>
                <p className="mt-3 break-words text-sm font-bold leading-6 text-[var(--muted)]">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20 sm:py-24">
        <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="기술 미리보기"
            body="분산 안정성, 수지 설계, 접착 계면, 도막 형성을 검토합니다."
          />
          <Link
            href="/technology"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-6 py-3 text-sm font-black text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
          >
            기술 보기
          </Link>
        </div>
      </section>

      <section className="bg-[var(--brand-navy)] py-20 text-white sm:py-24">
        <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="break-words text-3xl font-black leading-tight [word-break:keep-all] sm:text-5xl">
              회사소개
            </h2>
            <p className="mt-5 max-w-3xl break-words text-base leading-7 text-white/76 sm:text-lg">
              2005년 설립 이후 화성 전곡산업단지에서 산업용 수용성 소재를 개발·생산합니다.
            </p>
          </div>
          <Link
            href="/company"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-md border border-white/62 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[var(--brand-navy)]"
          >
            회사소개 보기
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:items-start">
          <SectionHeading title="적용 산업" body="산업명에서 시작해 적용 조건을 확인합니다." />
          <div
            data-home-card-rail="industries"
            className="grid gap-0 border-y border-[var(--line-strong)] md:min-h-[190px] sm:grid-cols-2 lg:grid-cols-4"
          >
            {industries.map((item) => (
              <div
                key={item}
                className="min-w-0 border-b border-[var(--line)] bg-[var(--bg-soft)] px-5 py-8 sm:border-r lg:border-b-0"
              >
                <p className="break-words text-lg font-black leading-tight text-[var(--brand-navy)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20 sm:py-24">
        <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="품질·기술지원"
            body="제품명보다 사용 조건을 먼저 확인하고, 자료·샘플 검토로 이어갑니다."
          />
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-black text-white transition hover:bg-[var(--brand-blue)]"
            style={{ color: "#ffffff" }}
          >
            기술 문의
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:items-start">
          <SectionHeading title="소식·문의" body="공지, 기업자료, 채용, 기술 문의를 확인하세요." />
          <div
            data-home-card-rail="support"
            className="grid gap-0 border-y border-[var(--line-strong)] md:min-h-[150px] sm:grid-cols-2 lg:grid-cols-4"
          >
            {supportLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-w-0 border-b border-[var(--line)] px-0 py-7 text-xl font-black text-[var(--brand-navy)] transition hover:bg-[var(--bg-soft)] sm:px-7 lg:border-b-0 lg:border-r"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
