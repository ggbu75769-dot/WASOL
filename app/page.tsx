import type { Metadata } from "next";
import Link from "next/link";
import { LightPremiumHero } from "@/components/sections/LightPremiumHero";
import { company } from "@/content/company";
import { industries } from "@/content/products";

export const metadata: Metadata = {
  title: "WARSOL | 수용성 고분자 소재 전문기업",
  description:
    "WARSOL은 수용성 고분자, 분산제, 기능성 코팅, 점·접착 소재를 개발·생산하는 산업용 화학 소재 전문기업입니다.",
};

const businessAreas = [
  {
    href: "/products/dispersion-additives",
    number: "01",
    title: "Water-soluble Polymer",
    subtitle: "수용성 고분자·분산 소재",
    body: "Sodium Polyacrylate, CMC, 천연검·변성검 응용과 수용성 분산 기술을 기반으로 수계 배합의 안정성과 작업성을 검토합니다.",
    tags: ["분산 안정성", "점도 제어", "수계 배합"],
  },
  {
    href: "/products/functional-coatings",
    number: "02",
    title: "Functional Coating",
    subtitle: "기능성 수계 코팅",
    body: "도막 형성, 표면 보호, 방식, 방수·차열 성능이 필요한 산업 표면에 맞춰 코팅 소재와 적용 조건을 함께 검토합니다.",
    tags: ["도막 형성", "표면 보호", "방수·차열"],
  },
  {
    href: "/products/adhesion-systems",
    number: "03",
    title: "Adhesion System",
    subtitle: "점·접착 소재",
    body: "방수 시트, 필름, 라벨, 산업용 접착 분야에서 기재 표면과 수분 노출 조건을 고려한 수계 점·접착 소재를 제안합니다.",
    tags: ["기재 밀착", "내수성", "박리 안정성"],
  },
];

const companyFacts = [
  { label: "Established", value: "2005", body: "주식회사 워솔 법인 등록" },
  { label: "Location", value: "Hwaseong", body: "전곡산업단지 소재 사업장" },
  { label: "Business", value: "Materials", body: "산업용 수용성 소재 개발·생산" },
  { label: "Support", value: "B2B", body: "샘플, TDS, SDS, 적용 상담" },
];

const qualityItems = [
  {
    title: "Application First",
    body: "제품명보다 사용 산업, 기재, 배합 목적, 공정 조건을 먼저 확인합니다.",
  },
  {
    title: "Technical Data",
    body: "TDS, SDS, 시험 조건, 샘플 검토 정보를 연결해 고객의 판단을 돕습니다.",
  },
  {
    title: "Manufacturing Base",
    body: "화성 전곡산업단지 사업장을 기반으로 산업용 소재 개발과 생산을 이어갑니다.",
  },
];

const supportLinks = [
  { href: "/notice", label: "NOTICE", title: "공지사항", body: "운영 안내와 고객 공지" },
  { href: "/press", label: "PR CENTER", title: "뉴스룸", body: "회사 소개와 보도자료 문의" },
  { href: "/careers", label: "CAREER", title: "채용", body: "생산, 품질, 연구개발 인재 문의" },
  { href: "/contact", label: "CONTACT", title: "기술 문의", body: "샘플, TDS, SDS, 적용 상담" },
];

export default function HomePage() {
  return (
    <>
      <LightPremiumHero />

      <section className="bg-white py-20 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.42fr_1fr]">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">BUSINESS</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-4xl">
              산업용 수용성 소재 솔루션
            </h2>
            <p className="mt-6 break-words text-base leading-8 text-[var(--muted)]">
              WARSOL은 수용성 고분자와 산업용 수지를 바탕으로 분산, 코팅, 접착, 보호 성능이 필요한 B2B 소재를 검토합니다.
            </p>
            <Link
              href="/business"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--brand-navy)] px-6 py-3 text-sm font-black uppercase text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white"
            >
              View Business
            </Link>
          </div>

          <div className="border-y border-[var(--line-strong)]">
            {businessAreas.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group grid gap-5 px-0 py-8 transition hover:bg-[var(--bg-soft)] sm:px-6 lg:grid-cols-[86px_0.48fr_1fr] ${
                  index === 0 ? "" : "border-t border-[var(--line)]"
                }`}
              >
                <span className="text-sm font-black text-[var(--brand-blue)]">{item.number}</span>
                <div className="min-w-0">
                  <h3 className="break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words text-sm font-black text-[var(--muted-strong)]">
                    {item.subtitle}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="break-words leading-7 text-[var(--muted)]">{item.body}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold text-[var(--muted-strong)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-navy)] py-20 text-white sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase text-white/58">COMPANY</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight [word-break:keep-all] sm:text-5xl">
              수용성 고분자 기반 산업용 화학 소재 기업
            </h2>
            <p className="mt-6 max-w-2xl break-words text-base leading-8 text-white/76">
              {company.positioning}
            </p>
            <Link
              href="/company"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md border border-white/62 px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-white hover:text-[var(--brand-navy)]"
            >
              About WARSOL
            </Link>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            {companyFacts.map((item) => (
              <div key={item.label} className="border-t border-white/24 pt-5">
                <dt className="text-xs font-black uppercase text-white/48">{item.label}</dt>
                <dd className="mt-3 break-words text-3xl font-black leading-none text-white">
                  {item.value}
                </dd>
                <p className="mt-3 break-words text-sm leading-6 text-white/68">{item.body}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container">
          <div className="mb-10 max-w-3xl min-w-0">
            <p className="eyebrow">APPLICATION</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-5xl">
              고객 산업의 표면과 배합 문제에 대응합니다
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {industries.map((item) => (
              <article key={item.title} className="min-w-0 border-t-2 border-[var(--brand-blue)] bg-[var(--bg-soft)] p-6">
                <h3 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h3>
                <p className="mt-4 break-words text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.36fr_1fr]">
          <div className="min-w-0">
            <p className="eyebrow">QUALITY & SUPPORT</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-5xl">
              자료와 상담이 이어지는 기술 지원 체계
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {qualityItems.map((item) => (
              <article key={item.title} className="min-w-0 rounded-lg border border-[var(--line)] bg-white p-7">
                <h3 className="break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">
                  {item.title}
                </h3>
                <p className="mt-4 break-words text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container">
          <div className="mb-10 max-w-3xl min-w-0">
            <p className="eyebrow">INFORMATION</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-5xl">
              WARSOL 소식과 문의
            </h2>
          </div>
          <div className="grid gap-0 border-y border-[var(--line-strong)] md:grid-cols-2 lg:grid-cols-4">
            {supportLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-w-0 border-b border-[var(--line)] p-6 transition hover:bg-[var(--bg-soft)] md:border-r lg:border-b-0"
              >
                <p className="text-xs font-black text-[var(--brand-blue)]">{item.label}</p>
                <h3 className="mt-4 break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h3>
                <p className="mt-3 break-words text-sm leading-6 text-[var(--muted)]">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
