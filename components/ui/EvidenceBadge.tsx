import type { SourceConfidence } from "@/content/source-ledger";

type EvidenceBadgeProps = {
  status: SourceConfidence | "pending official confirmation" | "local ui only";
};

const labels: Record<EvidenceBadgeProps["status"], string> = {
  official: "Official",
  "public database": "Public DB",
  "patent database": "Patent DB",
  unverified: "Unverified",
  "pending official confirmation": "Pending official confirmation",
  "local ui only": "Local UI only",
};

const classes: Record<EvidenceBadgeProps["status"], string> = {
  official: "border-[rgba(31,157,120,0.28)] bg-[rgba(31,157,120,0.08)] text-[var(--green)]",
  "public database": "border-[rgba(29,93,155,0.24)] bg-[rgba(29,93,155,0.08)] text-[var(--brand-blue)]",
  "patent database": "border-[rgba(18,168,199,0.28)] bg-[rgba(18,168,199,0.08)] text-[var(--cyan)]",
  unverified: "border-[rgba(245,158,11,0.34)] bg-[rgba(245,158,11,0.1)] text-[#a16207]",
  "pending official confirmation": "border-[rgba(245,158,11,0.34)] bg-[rgba(245,158,11,0.1)] text-[#a16207]",
  "local ui only": "border-[var(--line)] bg-[var(--bg-soft)] text-[var(--muted-strong)]",
};

export function EvidenceBadge({ status }: EvidenceBadgeProps) {
  return (
    <span className={`inline-flex w-fit items-center rounded-md border px-3 py-2 text-xs font-black ${classes[status]}`}>
      {labels[status]}
    </span>
  );
}
