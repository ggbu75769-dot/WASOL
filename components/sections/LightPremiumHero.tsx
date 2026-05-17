import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const publicAssetPrefix =
  process.env.GITHUB_PAGES === "true"
    ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "WASOL"}`
    : "";

export function LightPremiumHero() {
  return (
    <section className="enterprise-photo-hero relative h-[calc(100svh-82px)] min-h-[620px] max-h-[820px] overflow-hidden bg-[#06182b] text-white">
      <Image
        src={`${publicAssetPrefix}/images/hero/warsol-hwaseong-factory-hero.jpg`}
        alt="경기도 화성 전곡산업단지에 위치한 WARSOL 공장 전경"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_58%] brightness-[1.02] contrast-[1.04] saturate-[1.02]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,34,0.10)_0%,rgba(4,18,34,0.18)_36%,rgba(4,18,34,0.56)_70%,rgba(4,18,34,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,23,0.02)_0%,rgba(2,8,23,0.06)_48%,rgba(2,8,23,0.5)_100%)]" />

      <div className="container relative z-10 flex h-full items-center justify-center py-12 text-center sm:justify-end sm:text-right">
        <Reveal className="w-full max-w-[720px] min-w-0 sm:ml-auto">
          <div>
            <h1 className="break-words text-[2.2rem] font-black leading-[1.08] text-white sm:text-6xl sm:leading-[1] lg:text-7xl">
              <span className="block">산업 현장을 위한</span>
              <span className="block">수용성 소재 솔루션</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl break-words text-base font-semibold leading-7 text-white/86 [word-break:keep-all] sm:ml-auto sm:text-xl sm:leading-9">
              분산·코팅·접착·보호 성능을 적용 조건에 맞춰 검토합니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
