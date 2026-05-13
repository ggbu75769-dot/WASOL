import { WarsolMark } from "@/components/brand/WarsolMark";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LayeredCoatingVisual } from "@/components/visuals/LayeredCoatingVisual";
import { PolymerBlueprint } from "@/components/visuals/PolymerBlueprint";
import { company } from "@/content/company";
import { patentTimeline } from "@/content/patents";

export function LightPremiumHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-white pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(238,244,250,0.9),rgba(255,255,255,0)_38%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.72))]" />
      <div className="absolute right-[-12rem] top-12 h-[28rem] w-[28rem] rounded-full border border-[rgba(18,168,199,0.12)]" />
      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="min-w-0">
          <div>
            <WarsolMark />
            <p className="mt-8 text-xs font-black uppercase tracking-normal text-[var(--brand-blue)]">
              WATER-BASED POLYMER · ADHESION · FUNCTIONAL COATING
            </p>
            <h1 className="mt-5 max-w-[9em] text-[2.45rem] font-black leading-[1.1] text-[var(--brand-navy)] sm:max-w-4xl sm:text-6xl">
              산업의 표면과 안전을 설계하는 수용성 고분자 기술
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-xl sm:leading-8">
              워솔은 수용성 고분자, 점·접착제, 기능성 코팅, 분산, 차열·방수, 친환경 산업 안전 소재
              솔루션을 개발합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">기술 문의하기</Button>
              <Button href="/products" variant="secondary">
                제품 포트폴리오 보기
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-[0_14px_36px_rgba(15,42,74,0.07)]">
                <p className="mono-label">Registered</p>
                <p className="mt-2 text-2xl font-black text-[var(--brand-navy)]">{company.founded.value.slice(0, 4)}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">공개 DB 기반 법인 이력</p>
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-[0_14px_36px_rgba(15,42,74,0.07)]">
                <p className="mono-label">Core</p>
                <p className="mt-2 text-2xl font-black text-[var(--brand-navy)]">수용성</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">고분자·수성 수지 플랫폼</p>
              </div>
              <div className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-[0_14px_36px_rgba(15,42,74,0.07)]">
                <p className="mono-label">Evidence</p>
                <p className="mt-2 text-2xl font-black text-[var(--brand-navy)]">{patentTimeline.length} patents</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">점착·차열·안전 소재 축</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="min-w-0" delay={0.12}>
          <div className="grid gap-4">
            <LayeredCoatingVisual />
            <PolymerBlueprint />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
