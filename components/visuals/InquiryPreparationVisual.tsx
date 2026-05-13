import { inquiryVariables } from "@/content/technology";

export function InquiryPreparationVisual() {
  return (
    <div className="surface technical-border rounded-lg p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono-label">Sample-condition Checklist</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--brand-navy)]">문의 전 정리할 기술 조건</h3>
        </div>
        <span className="rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-xs font-bold text-[var(--brand-blue)]">
          No fake send
        </span>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {inquiryVariables.map((variable, index) => (
          <div key={variable} className="flex items-center gap-3 rounded-lg border border-[var(--line)] bg-white p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--bg-technical)] text-xs font-black text-[var(--brand-blue)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-bold text-[var(--muted-strong)]">{variable}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
        현재 폼은 이메일이나 CRM으로 실제 전송하지 않습니다. 대신 담당자에게 전달하기 쉬운 기술 문의 요약을 생성합니다.
      </p>
    </div>
  );
}
