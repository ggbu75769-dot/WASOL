import Link from "next/link";
import { WarsolMark } from "@/components/brand/WarsolMark";
import { MobileNav } from "./MobileNav";
import { PrimaryNav } from "./PrimaryNav";

export function Header() {
  return (
    <header data-site-header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/90 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="WARSOL home">
          <WarsolMark compact />
          <span className="hidden text-xs font-semibold text-[var(--muted)] sm:block">
            Polymer · Adhesion · Coating
          </span>
        </Link>

        <PrimaryNav />

        <div className="ml-auto flex shrink-0 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
