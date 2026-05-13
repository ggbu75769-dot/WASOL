import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { patentTimeline } from "@/content/patents";

const problemLabels: Record<string, string> = {
  KR100865482B1: "방수 시트와 차수재의 내수 접착 신뢰성",
  KR102068982B1: "건축 외피의 차열·방수 도막 성능",
  KR102625026B1: "적재 석탄 표면의 자연발화 억제와 피막 형성",
};

export function RdEvidenceRail() {
  return (
    <Section
      id="rd-evidence"
      eyebrow="R&D Evidence"
      title="공개 특허를 과장 없이 연구 증거로 배치했습니다."
      description="특허 번호, 해결하려는 산업 문제, 소재 접근을 함께 보여주되 상용 등급·인증·고객사처럼 확인되지 않은 정보로 확대하지 않습니다."
    >
      <div className="relative">
        <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-[var(--line-strong)] md:block" />
        <div className="grid gap-4">
          {patentTimeline.map((patent, index) => (
            <Reveal key={patent.publication} delay={index * 0.08}>
              <article className="surface relative grid gap-5 rounded-lg p-6 md:grid-cols-[120px_1fr_180px] md:items-center md:pl-14">
                <span className="absolute left-4 top-8 hidden h-3 w-3 rounded-full bg-[var(--cyan)] ring-4 ring-[var(--bg-technical)] md:block" />
                <div>
                  <p className="text-4xl font-black text-[var(--brand-blue)]">{patent.year}</p>
                  <p className="mono-label mt-2">{patent.publication}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[var(--brand-navy)]">{patent.title}</h3>
                  <p className="mt-3 text-sm font-bold text-[var(--brand-blue)]">
                    {problemLabels[patent.publication]}
                  </p>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{patent.summary}</p>
                </div>
                <p className="rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-center text-xs font-bold text-[var(--muted-strong)]">
                  {patent.confidenceLabel}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button href="/rnd" variant="secondary">
          R&D 상세 보기
        </Button>
      </div>
    </Section>
  );
}
