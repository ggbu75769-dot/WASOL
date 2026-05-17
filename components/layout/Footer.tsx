import Link from "next/link";
import { WarsolMark } from "@/components/brand/WarsolMark";
import { company } from "@/content/company";
import { navigationItems } from "@/content/navigation";

const footerBadges = ["수용성 고분자", "분산제", "기능성 코팅", "점·접착 소재"];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
        <div className="min-w-0">
          <WarsolMark />
          <p className="mt-5 max-w-xl break-words text-sm leading-7 text-[var(--muted)]">
            {company.shortDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {footerBadges.map((item) => (
              <span
                key={item}
                className="rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-xs font-bold text-[var(--muted-strong)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {navigationItems.slice(1).map((group) => (
          <div key={group.href} className="min-w-0">
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
      </div>

      <div className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
        <div className="container grid gap-5 py-6 text-sm text-[var(--muted)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="grid gap-2">
            <p className="break-words font-black text-[var(--brand-navy)]">{company.legalName}</p>
            <p className="break-words">
              {company.addressRecords[0]?.value} · 대표 {company.representative} · 법인 등록 {company.founded.value}
            </p>
          </div>
          <div className="grid gap-2 lg:justify-end lg:text-right">
            <a href={`tel:${company.contact.phone}`} className="font-black text-[var(--brand-navy)]">
              {company.contact.phone}
            </a>
            <p>Fax {company.contact.fax}</p>
            <a href={company.contact.website} className="link-underlined">
              warsolchem.co.kr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
