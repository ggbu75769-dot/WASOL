import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { applicationRows } from "@/content/applications";

export function ApplicationMatrix() {
  return (
    <Section
      id="application-matrix"
      className="bg-[linear-gradient(180deg,#ffffff,#f8fafc)]"
      eyebrow="Application Matrix"
      title="적용처를 기술 상담용 매트릭스로 보여줍니다."
      description="방수, 코팅, 라벨, 에너지 안전, 산업 표면처리를 한 화면에서 비교할 수 있게 만들어 제품 문의로 이어지는 판단 시간을 줄입니다."
    >
      <Reveal>
        <div className="surface overflow-hidden rounded-lg">
          <div className="grid grid-cols-[1fr_1fr_1.1fr] border-b border-[var(--line)] bg-[var(--brand-navy)] px-5 py-4 text-sm font-black text-[#ffffff] max-md:hidden">
            <span>Application</span>
            <span>Material Control</span>
            <span>Use Context</span>
          </div>
          <div className="grid">
            {applicationRows.map((row, index) => (
              <div
                key={row.application}
                className="grid gap-3 border-b border-[var(--line)] px-5 py-5 last:border-b-0 md:grid-cols-[1fr_1fr_1.1fr] md:items-center"
              >
                <div>
                  <p className="mono-label md:hidden">Application</p>
                  <p className="text-lg font-black text-[var(--brand-navy)]">
                    {String(index + 1).padStart(2, "0")} · {row.application}
                  </p>
                </div>
                <div>
                  <p className="mono-label md:hidden">Material Control</p>
                  <p className="font-bold text-[var(--brand-blue)]">{row.materialControl}</p>
                </div>
                <div>
                  <p className="mono-label md:hidden">Use Context</p>
                  <p className="leading-7 text-[var(--muted)]">{row.useContext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
