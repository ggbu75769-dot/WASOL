import Link from "next/link";

type Breadcrumb = {
  href: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
      <Link href="/" className="font-bold text-[var(--brand-blue)]">
        홈
      </Link>
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          <span aria-hidden="true">/</span>
          {index === items.length - 1 ? (
            <span aria-current="page" className="font-bold text-[var(--muted-strong)]">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="font-bold text-[var(--muted-strong)] hover:text-[var(--brand-blue)]">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
