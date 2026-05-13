import { company } from "@/content/company";

type OfficialAssetNeededProps = {
  title?: string;
};

export function OfficialAssetNeeded({ title = "공식 자료가 들어오면 더 단단해지는 항목" }: OfficialAssetNeededProps) {
  return (
    <div className="surface technical-border rounded-lg p-7">
      <p className="eyebrow">Official Data Needed</p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--brand-navy)]">{title}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
        WARSOL 사이트는 공식 확인 전 고객사, 인증, 매출, 제품 등급, 사진, 주소를 확정 주장하지 않습니다.
        아래 항목이 제공되면 현재의 보수적 표현을 출시용 자료로 안전하게 강화할 수 있습니다.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {company.officialDataRequests.map((item) => (
          <div key={item} className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-4 text-sm font-bold text-[var(--muted-strong)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
