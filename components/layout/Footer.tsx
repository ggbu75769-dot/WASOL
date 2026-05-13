import Link from "next/link";
import { WarsolMark } from "@/components/brand/WarsolMark";
import { company } from "@/content/company";
import { navigationItems } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.14)] bg-[var(--brand-navy)] py-12 text-[#ffffff]">
      <div className="container grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <WarsolMark className="[--brand-navy:#ffffff] [--brand-blue:#9bdcf0]" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200">{company.shortDescription}</p>
          <p className="mt-5 text-xs leading-6 text-slate-300">
            Official CI/logo, final address, and email backend are pending verification. This site uses a
            temporary wordmark and source-ledger based public facts.
          </p>
        </div>
        <div>
          <p className="mono-label">Navigation</p>
          <div className="mt-4 grid gap-2">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-[#ffffff]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mono-label">Public DB Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-200">
            <a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a>
            <span>Fax {company.contact.fax}</span>
            <a href={company.contact.website} className="link-underlined">
              warsolchem.co.kr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
