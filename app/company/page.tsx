import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/company";

const publicAssetPrefix =
  process.env.GITHUB_PAGES === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "WASOL"}`
    : "";

export const metadata: Metadata = {
  title: "회사소개 | WARSOL",
  description: "WARSOL 회사 개요, 사업장, 수용성 고분자 소재 사업 방향",
};

const overview = [
  { label: "회사명", value: company.legalName },
  { label: "영문명", value: company.englishName },
  { label: "대표자", value: company.representative },
  { label: "법인 등록", value: company.founded.value },
  { label: "사업장", value: company.addressRecords[0]?.value ?? "경기도 화성시" },
  { label: "대표 연락처", value: company.contact.phone },
];

const businessProfile = [
  {
    title: "수용성 고분자",
    body: "Sodium Polyacrylate, CMC, 천연검·변성검 응용 등 수계 배합에 필요한 소재를 검토합니다.",
  },
  {
    title: "분산제·수지·코팅제",
    body: "분산 안정성, 점도, 도막 형성, 표면 보호 성능을 중심으로 산업용 소재를 개발·생산합니다.",
  },
  {
    title: "점·접착 및 보호 소재",
    body: "방수, 차열, 접착, 산업용 라벨·필름처럼 표면 계면 성능이 중요한 분야에 대응합니다.",
  },
];

const companyLinks = [
  {
    href: "/company/ceo-message",
    label: "CEO MESSAGE",
    title: "대표 메시지",
    body: "현장 조건을 이해하고 품질 자료로 답하는 WARSOL의 상담 기준",
  },
  {
    href: "/company/history",
    label: "HISTORY",
    title: "회사 개요와 위치",
    body: "2005년 법인 등록, 화성 전곡산업단지 사업장, 주요 제품 정보",
  },
  {
    href: "/company/vision",
    label: "VISION",
    title: "사업 방향",
    body: "수계 공정, 환경친화 제품, 적용 조건 중심 소재 개발 방향",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-[var(--line)] bg-white py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <div className="min-w-0">
            <p className="eyebrow">COMPANY</p>
            <h1 className="mt-5 break-words text-4xl font-black leading-tight text-[var(--brand-navy)] [word-break:keep-all] sm:text-6xl">
              수용성 고분자 소재 전문기업, WARSOL
            </h1>
            <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-[var(--muted)]">
              {company.positioning}
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-lg bg-[var(--brand-navy)] sm:min-h-[320px]">
            <Image
              src={`${publicAssetPrefix}/images/hero/warsol-hwaseong-factory-hero.jpg`}
              alt="WARSOL 화성 전곡산업단지 사업장"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_58%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,37,0.04),rgba(5,20,37,0.34))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-black uppercase text-white/64">Manufacturing Base</p>
              <p className="mt-2 text-xl font-black">Hwaseong Jeongok Industrial Complex</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.38fr_1fr]">
          <div className="min-w-0">
            <p className="eyebrow">OVERVIEW</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-5xl">
              회사 개요
            </h2>
            <p className="mt-6 break-words text-base leading-8 text-[var(--muted)]">
              WARSOL은 수용성 소재의 제품명보다 고객의 산업, 기재, 배합, 공정 조건을 먼저 확인하며 적용 가능성을 검토합니다.
            </p>
          </div>

          <dl className="grid border-y border-[var(--line-strong)] md:grid-cols-2">
            {overview.map((item) => (
              <div key={item.label} className="min-w-0 border-b border-[var(--line)] px-0 py-6 md:px-6 md:even:border-l">
                <dt className="text-xs font-black text-[var(--brand-blue)]">{item.label}</dt>
                <dd className="mt-3 break-words text-lg font-black leading-7 text-[var(--brand-navy)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-20 sm:py-24">
        <div className="container">
          <div className="mb-10 max-w-3xl min-w-0">
            <p className="eyebrow">BUSINESS PROFILE</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] [word-break:keep-all] sm:text-5xl">
              산업용 수용성 소재 사업
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {businessProfile.map((item) => (
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
        <div className="container grid gap-12 lg:grid-cols-[0.38fr_1fr]">
          <div className="min-w-0">
            <p className="eyebrow">MANAGEMENT PRINCIPLE</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight text-[var(--text)] sm:text-5xl">
              소재 상담과 개발의 기준
            </h2>
          </div>
          <div className="grid gap-0 border-y border-[var(--line-strong)]">
            {company.values.map((item) => (
              <article key={item.title} className="grid gap-4 border-b border-[var(--line)] py-7 md:grid-cols-[0.32fr_1fr]">
                <h3 className="break-words text-2xl font-black text-[var(--brand-navy)]">{item.title}</h3>
                <p className="break-words leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-navy)] py-20 text-white sm:py-24">
        <div className="container">
          <div className="mb-10 max-w-3xl min-w-0">
            <p className="text-sm font-black uppercase text-white/58">ABOUT WARSOL</p>
            <h2 className="mt-5 break-words text-3xl font-black leading-tight [word-break:keep-all] sm:text-5xl">
              기업 정보 바로가기
            </h2>
          </div>
          <div className="grid gap-0 border-y border-white/24 lg:grid-cols-3">
            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-w-0 border-b border-white/18 p-6 transition hover:bg-white/10 lg:border-b-0 lg:border-r"
              >
                <p className="text-xs font-black uppercase text-white/48">{item.label}</p>
                <h3 className="mt-4 break-words text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-3 break-words text-sm leading-6 text-white/68">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
