"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems, type NavigationItem } from "@/content/navigation";

function isActivePath(pathname: string, item: NavigationItem) {
  if (item.href === "/") return pathname === "/";
  return (
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`) ||
    item.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`))
  );
}

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
      {navigationItems.map((item) => {
        const active = isActivePath(pathname, item);
        return (
          <div key={item.href} className="group relative">
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-11 items-center rounded-md px-4 text-sm font-black transition ${
                active
                  ? "bg-[var(--bg-technical)] text-[var(--brand-blue)]"
                  : "text-[var(--muted-strong)] hover:bg-[var(--bg-technical)] hover:text-[var(--brand-blue)]"
              }`}
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-lg border border-[var(--line)] bg-white p-3 opacity-0 shadow-[0_18px_54px_rgba(15,42,74,0.12)] transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-1">
                  {item.children.map((child) => {
                    const childActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={childActive ? "page" : undefined}
                        className={`rounded-md px-3 py-3 text-sm font-bold transition ${
                          childActive
                            ? "bg-[var(--bg-technical)] text-[var(--brand-blue)]"
                            : "text-[var(--muted-strong)] hover:bg-[var(--bg-soft)] hover:text-[var(--brand-blue)]"
                        }`}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
