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
    label: "COMPANY",
    title: "WARSOL Inc.",
    body: "2005년 법인 등록, 화성 전곡산업단지 소재 제조기업",
  },
  {
    href: "/business",
    label: "BUSINESS",
    title: "Water-based Materials",
    body: "분산제, 수용성 수지, 기능성 코팅, 점·접착 소재",
  },
  {
    href: "/products",
    label: "PRODUCTS",
    title: "Materials Portfolio",
    body: "세제·수처리·제지·코팅·방수·산업 접착 적용",
  },
  {
    href: "/contact",
    label: "CONTACT",
    title: "Technical Support",
    body: "샘플, TDS, SDS, 적용 조건 상담",
  },
];

export function LightPremiumHero() {
  return (
    <section className="enterprise-photo-hero relative h-[calc(100svh-82px)] min-h-[620px] max-h-[780px] overflow-hidden bg-[#06182b] text-white">
      <Image
        src={`${publicAssetPrefix}/images/hero/warsol-hwaseong-factory-hero.jpg`}
        alt="경기도 화성시 전곡산업단지에 위치한 WARSOL 공장 전경"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%] brightness-[1.02] contrast-[1.04] saturate-[1.02]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,34,0.86)_0%,rgba(4,18,34,0.66)_42%,rgba(4,18,34,0.16)_78%,rgba(4,18,34,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.02)_0%,rgba(2,8,23,0.08)_48%,rgba(2,8,23,0.7)_100%)]" />

      <div className="container relative z-10 flex h-full items-center pb-[142px] pt-12 sm:pb-[150px] lg:pb-[154px]">
        <Reveal className="w-full max-w-[780px] min-w-0">
          <div>
            <p className="text-sm font-black uppercase text-white/72">WARSOL MATERIALS</p>
            <h1 className="mt-5 break-words text-[2.55rem] font-black leading-[1.04] text-white sm:text-6xl sm:leading-[1] lg:text-7xl">
              <span className="block">Water-based</span>
              <span className="block">Polymer Materials</span>
            </h1>
            <p className="mt-7 max-w-2xl break-words text-base font-semibold leading-7 text-white/86 sm:text-xl sm:leading-9">
              수용성 고분자 기반의 분산제, 수지, 기능성 코팅, 점·접착 소재를 개발·생산하는 산업용 화학 소재 전문기업
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-xs font-black text-white/78">
              {["2005 Established", "Hwaseong, Korea", "Industrial Materials"].map((item) => (
                <span key={item} className="rounded-md border border-white/24 bg-white/10 px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/business"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white bg-white px-6 py-3 text-sm font-black uppercase transition hover:-translate-y-0.5 hover:bg-white/90"
                style={{ color: "#0b2a4a" }}
              >
                Business
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/48 bg-white/8 px-6 py-3 text-sm font-black uppercase text-white transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                Contact
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 hidden border-t border-white/18 bg-[rgba(3,15,28,0.58)] backdrop-blur-md sm:absolute sm:inset-x-0 sm:bottom-0 sm:block">
        <div className="container grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {heroEntries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="group min-w-0 border-b border-white/16 px-4 py-4 transition hover:bg-white/12 sm:border-r sm:px-5 lg:min-h-[126px] lg:border-b-0"
            >
              <p className="break-words text-xs font-black text-white/54">{entry.label}</p>
              <h2 className="mt-3 break-words text-lg font-black leading-tight text-white sm:text-xl">
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
