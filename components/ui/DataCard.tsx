import type { ReactNode } from "react";

type DataCardProps = {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  items?: string[];
  aside?: ReactNode;
};

export function DataCard({ eyebrow, title, body, items, aside }: DataCardProps) {
  return (
    <article className="surface h-full min-w-0 rounded-lg p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          {eyebrow && <p className="mono-label break-words">{eyebrow}</p>}
          <h3 className="mt-3 break-words text-2xl font-black leading-tight text-[var(--brand-navy)]">{title}</h3>
        </div>
        {aside}
      </div>
      <div className="mt-4 break-words leading-7 text-[var(--muted)]">{body}</div>
      {items && items.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="max-w-full break-words rounded-md border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold text-[var(--muted-strong)]">
              {item}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
