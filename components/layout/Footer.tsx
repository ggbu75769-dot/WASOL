import Link from "next/link";
import { WarsolMark } from "@/components/brand/WarsolMark";
import { company } from "@/content/company";
import { navigationItems } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white py-12">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <WarsolMark />
          <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
            {company.shortDescription}
          </p>
          <div className="mt-6 grid gap-2 text-sm text-[var(--muted-strong)]">
            <p className="font-black text-[var(--brand-navy)]">연락처</p>
            <a href={`tel:${company.contact.phone}`}>{company.contact.phone}</a>
            <span>Fax {company.contact.fax}</span>
            <a href={company.contact.website} className="link-underlined">
              warsolchem.co.kr
            </a>
          </div>
        </div>

        {navigationItems.slice(1).map((group) => (
          <div key={group.href}>
            <Link href={group.href} className="mono-label hover:text-[var(--brand-blue)]">
              {group.label}
            </Link>
            <div className="mt-4 grid gap-2">
              {group.children?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="break-words text-sm font-semibold text-[var(--muted-strong)] hover:text-[var(--brand-blue)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="lg:col-span-4">
          <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-4 text-xs leading-6 text-[var(--muted)]">
            <strong className="text-[var(--brand-navy)]">WARSOL Inc.</strong> 수용성 고분자 · 접착 · 코팅
          </div>
        </div>
      </div>
    </footer>
  );
}
