import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const publicAssetPrefix =
  process.env.GITHUB_PAGES === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "WASOL"}`
    : "";

const heroEntries = [
  {
    href: "/company",
    label: "회사",
    title: "2005년 법인 등록",
    body: "화성 전곡산업단지 소재 산업용 화학 소재 기업",
  },
  {
    href: "/business",
    label: "사업",
    title: "수용성 소재 사업",
    body: "분산제, 수지, 코팅제, 점·접착 소재 개발·생산",
  },
  {
    href: "/products",
    label: "제품",
    title: "적용 조건별 제품군",
    body: "세제·수처리·제지·코팅·방수·산업 접착",
  },
  {
    href: "/support",
    label: "고객지원",
    title: "자료·샘플 상담",
    body: "기재, 배합, 공정 조건 기반 기술 문의",
  },
];

export function LightPremiumHero() {
  return (
    <section className="enterprise-photo-hero relative h-[calc(100svh-82px)] min-h-[650px] max-h-[760px] overflow-hidden bg-[#06182b] text-white">
      <Image
        src={`${publicAssetPrefix}/images/hero/warsol-hwaseong-factory-hero.jpg`}
        alt="경기도 화성시 전곡산업단지에 위치한 WARSOL 공장 전경"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%] brightness-[1.04] contrast-[1.06] saturate-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.08)_0%,rgba(5,20,37,0.18)_42%,rgba(2,8,23,0.64)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.04)_0%,rgba(2,8,23,0.02)_38%,rgba(2,8,23,0.58)_100%)]" />

      <div className="container relative z-10 flex h-full items-center justify-end pb-[142px] pt-12 text-right sm:pb-[150px] lg:pb-[154px]">
        <Reveal className="ml-auto w-full max-w-[720px] min-w-0 lg:translate-x-10 xl:translate-x-16">
          <div>
            <h1 className="break-words text-[2.35rem] font-black leading-[1.08] text-white sm:text-6xl sm:leading-[1.04] lg:text-7xl">
              <span className="block">수용성 고분자로</span>
              <span className="block">현장의 표면 문제를</span>
              <span className="block">해결합니다</span>
            </h1>
            <p className="ml-auto mt-7 max-w-2xl break-words text-base leading-7 text-white/82 sm:text-xl sm:leading-9">
              분산제, 수지, 코팅제, 점·접착 소재를 고객의 기재와 공정 조건에 맞춰 검토하는 산업용 소재 파트너
            </p>
            <div className="mt-9 flex flex-col justify-end gap-3 sm:flex-row">
              <Link
                href="/business"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white bg-white px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:bg-white/90"
                style={{ color: "#0b2a4a" }}
              >
                사업 보기
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/48 bg-white/8 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                문의하기
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-white/18 bg-[rgba(3,15,28,0.48)] backdrop-blur-md sm:absolute sm:inset-x-0 sm:bottom-0">
        <div className="container grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {heroEntries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="group min-w-0 border-b border-white/16 px-4 py-4 transition hover:bg-white/12 sm:border-r sm:px-5 lg:min-h-[118px] lg:border-b-0"
            >
              <p className="break-words text-xs font-black text-white/56">{entry.label}</p>
              <h2 className="mt-3 break-words text-xl font-black leading-tight text-white">
                {entry.title}
              </h2>
              <p className="mt-2 break-words text-sm leading-6 text-white/68">{entry.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
