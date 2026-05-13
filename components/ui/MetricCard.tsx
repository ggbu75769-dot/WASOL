type MetricCardProps = {
  label: string;
  value: string;
  body: string;
};

export function MetricCard({ label, value, body }: MetricCardProps) {
  return (
    <article className="surface technical-border rounded-lg p-5">
      <p className="mono-label">{label}</p>
      <p className="mt-3 text-3xl font-black text-[var(--brand-navy)]">{value}</p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
    </article>
  );
}
