import Link from "next/link";
import { WarsolMark } from "@/components/brand/WarsolMark";
import { Button } from "@/components/ui/Button";
import { navigationItems } from "@/content/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/90 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="WARSOL home">
          <WarsolMark compact />
          <span className="hidden text-xs font-semibold text-[var(--muted)] sm:block">
            Polymer · Adhesive · Coating
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 xl:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-semibold text-[var(--muted-strong)] transition hover:bg-[var(--bg-technical)] hover:text-[var(--brand-blue)] xl:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href="/contact" variant="secondary" className="min-h-10 px-4 py-2">
            문의하기
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
