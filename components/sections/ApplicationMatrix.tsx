import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { applicationGuides } from "@/content/applications";

export function ApplicationMatrix() {
  return (
    <Section
      id="application-matrix"
      className="bg-[linear-gradient(180deg,#ffffff,#f8fafc)]"
      eyebrow="Application Matrix"
      title="적용 산업을 기술 상담 매트릭스로 정리합니다."
      description="방수, 코팅, 라벨, 에너지 안전 적용처를 route-level guide로 나누어 제품 문의와 연결합니다."
    >
      <Reveal>
        <div className="surface overflow-hidden rounded-lg">
          <div className="grid grid-cols-[0.9fr_1fr_1.1fr_120px] border-b border-[var(--line)] bg-[var(--brand-navy)] px-5 py-4 text-sm font-black text-[#ffffff] max-md:hidden">
            <span>Application</span>
            <span>Material Control</span>
            <span>Use Context</span>
            <span>Guide</span>
          </div>
          <div className="grid">
            {applicationGuides.map((row, index) => (
              <div
                key={row.slug}
                className="grid gap-3 border-b border-[var(--line)] px-5 py-5 last:border-b-0 md:grid-cols-[0.9fr_1fr_1.1fr_120px] md:items-center"
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
                <Link href={`/applications/${row.slug}`} className="link-underlined text-sm font-black">
                  Open guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
