import Link from "next/link";
import { WarsolMark } from "@/components/brand/WarsolMark";
import { company } from "@/content/company";
import { navigationItems } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white py-12">
      <div className="container grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <WarsolMark />
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">{company.shortDescription}</p>
          <p className="mt-5 text-xs leading-6 text-[var(--muted)]">
            Official CI/logo, final address, and email backend are pending verification. This site uses a
            temporary wordmark and source-ledger based public facts.
          </p>
        </div>
        <div>
          <p className="mono-label">Navigation</p>
          <div className="mt-4 grid gap-2">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-[var(--muted-strong)] hover:text-[var(--brand-blue)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mono-label">Public DB Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--muted-strong)]">
            <a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a>
            <span>Fax {company.contact.fax}</span>
            <a href={company.contact.website} className="link-underlined">
              warsolchem.co.kr
            </a>
            <Link href="/resources" className="link-underlined">
              Source and asset readiness
            </Link>
            <Link href="/privacy" className="link-underlined">
              Privacy readiness
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
