import type { ReactNode } from "react";

export type SpecTableRow = {
  label: ReactNode;
  value: ReactNode;
  note?: ReactNode;
};

type SpecTableProps = {
  rows: SpecTableRow[];
  columns?: [string, string, string];
};

export function SpecTable({ rows, columns = ["항목", "상태", "비고"] }: SpecTableProps) {
  return (
    <div className="surface overflow-hidden rounded-lg">
      <div className="hidden grid-cols-[0.95fr_1.05fr_1.2fr] border-b border-[var(--line)] bg-[var(--brand-navy)] px-5 py-4 text-sm font-black text-[#ffffff] md:grid">
        {columns.map((column) => (
          <span key={column} className="min-w-0 break-words">
            {column}
          </span>
        ))}
      </div>
      <div className="grid">
        {rows.map((row, index) => (
          <div
            key={`${index}-${String(row.label)}`}
            className="grid gap-3 border-b border-[var(--line)] px-5 py-5 last:border-b-0 md:grid-cols-[0.95fr_1.05fr_1.2fr] md:items-start"
          >
            <div className="min-w-0 break-words">
              <p className="mono-label md:hidden">{columns[0]}</p>
              <div className="font-black text-[var(--brand-navy)]">{row.label}</div>
            </div>
            <div className="min-w-0 break-words">
              <p className="mono-label md:hidden">{columns[1]}</p>
              <div className="font-bold text-[var(--brand-blue)]">{row.value}</div>
            </div>
            <div className="min-w-0 break-words">
              <p className="mono-label md:hidden">{columns[2]}</p>
              <div className="leading-7 text-[var(--muted)]">{row.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
