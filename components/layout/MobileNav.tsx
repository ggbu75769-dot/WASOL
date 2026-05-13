import Link from "next/link";
import { navigationItems } from "@/content/navigation";

export function MobileNav() {
  return (
    <details className="group relative md:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-md border border-[var(--line-strong)] bg-white px-3 text-sm font-bold text-[var(--brand-navy)] marker:hidden">
        Menu
      </summary>
      <nav
        aria-label="Mobile navigation"
        className="surface absolute right-0 top-14 z-50 grid w-[min(82vw,320px)] gap-1 rounded-lg p-3"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-3 text-sm font-semibold text-[var(--muted-strong)] transition hover:bg-[var(--bg-technical)] hover:text-[var(--brand-blue)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
