import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

const prompts = ["적용 산업", "요구 물성", "기재 표면", "온도·습도", "샘플/배합 단계"];

export function TechnicalInquiryCta() {
  return (
    <Section className="pb-24">
      <div className="surface technical-border grid gap-8 rounded-lg p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="eyebrow">Technical Inquiry</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--brand-navy)] sm:text-5xl">
            샘플, 배합, 적용 조건을 기반으로 기술 상담을 시작하세요.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            문의는 제품명보다 적용 환경이 중요합니다. 필요한 물성, 기재, 공정 조건을 함께 남기면 WARSOL의
            수성 고분자·접착·코팅 소재 대화를 더 빠르게 시작할 수 있습니다.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-5">
          <p className="mono-label">Inquiry Inputs</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {prompts.map((prompt) => (
              <span key={prompt} className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold text-[var(--muted-strong)]">
                {prompt}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Button href="/contact">기술 문의하기</Button>
            <a
              href={`tel:${company.contact.phone}`}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-bold text-[var(--brand-navy)] transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            >
              {company.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
