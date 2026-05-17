import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const prompts = ["적용 산업", "제품군", "기재 / 배합", "사용 환경", "요청 자료"];

export function TechnicalInquiryCta({
  href = "/contact",
  label = "기술 문의",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Section className="pb-24">
      <div className="surface technical-border grid gap-8 rounded-lg p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">문의</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-[var(--brand-navy)] sm:text-5xl">
            제품 적용 조건을 알려주세요
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            수용성 분산제, 코팅제, 점·접착 소재, 방수·차열 보호 소재는 기재와 공정 조건에 따라 검토 방향이 달라집니다.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-5">
          <p className="mono-label">문의 항목</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {prompts.map((prompt) => (
              <span
                key={prompt}
                className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold text-[var(--muted-strong)]"
              >
                {prompt}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Button href={href}>{label}</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
