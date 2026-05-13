import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { patentTimeline } from "@/content/patents";
import { getSourceById } from "@/content/source-ledger";

export function PatentTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-[var(--line-strong)] md:block" />
      <div className="grid gap-4">
        {patentTimeline.map((patent) => {
          const source = getSourceById(patent.sourceId);
          return (
            <article key={patent.publication} className="surface relative rounded-lg p-6 md:pl-14">
              <span className="absolute left-4 top-8 hidden h-3 w-3 rounded-full bg-[var(--cyan)] ring-4 ring-[var(--bg-technical)] md:block" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mono-label">{patent.year} · {patent.publication}</p>
                  <h3 className="mt-3 text-2xl font-black text-[var(--brand-navy)]">{patent.title}</h3>
                  <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">{patent.summary}</p>
                </div>
                <EvidenceBadge status="patent database" />
              </div>
              {source && (
                <a href={source.sourceUrl} target="_blank" rel="noreferrer" className="link-underlined mt-5 inline-flex text-sm font-bold">
                  Source: {source.sourceTitle}
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
