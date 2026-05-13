import { WarsolMark } from "@/components/brand/WarsolMark";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LayeredCoatingVisual } from "@/components/visuals/LayeredCoatingVisual";
import { PolymerBlueprint } from "@/components/visuals/PolymerBlueprint";
import { OfficialDataReadinessVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { company } from "@/content/company";
import { patentTimeline } from "@/content/patents";

export function LightPremiumHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-white pb-14 pt-10 sm:pb-16 sm:pt-14">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(238,244,250,0.9),rgba(255,255,255,0)_38%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.72))]" />
      <div className="container relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="min-w-0">
          <div>
            <WarsolMark />
            <p className="mt-6 text-xs font-black uppercase tracking-normal text-[var(--brand-blue)]">
              WATER-BASED POLYMER · ADHESION · FUNCTIONAL COATING
            </p>
            <h1 className="mt-4 max-w-[10em] text-[2.25rem] font-black leading-[1.08] text-[var(--brand-navy)] sm:max-w-4xl sm:text-6xl">
              산업의 표면과 안전을 설계하는 수용성 고분자 기술
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-xl sm:leading-8">
              WARSOL은 수성 고분자, 점·접착제, 기능성 코팅, 분산, 차열·방수, 친환경 안전 소재의 적용 조건을 정리하는 B2B 기술 상담형 웹사이트입니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">기술 문의 준비</Button>
              <Button href="/products" variant="secondary">
                제품군 보기
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ProofStat label="Registered" value={company.founded.value.slice(0, 4)} body="공개 DB 기반 법인 이력" />
              <ProofStat label="Core" value="수용성" body="고분자·수성 수지 플랫폼" />
              <ProofStat label="Evidence" value={`${patentTimeline.length} patents`} body="공개 특허 기반 R&D 축" />
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
      <div className="container relative z-10 mt-6">
        <OfficialDataReadinessVisual />
      </div>
    </section>
  );
}

function ProofStat({ label, value, body }: { label: string; value: string; body: string }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-white p-4 shadow-[0_14px_36px_rgba(15,42,74,0.07)]">
      <p className="mono-label">{label}</p>
      <p className="mt-2 text-2xl font-black text-[var(--brand-navy)]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
    </div>
  );
}
