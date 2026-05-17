"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
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

export function MobileNav() {
  const pathname = usePathname();

  function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <details className="group warsol-mobile-menu">
      <summary className="warsol-mobile-menu-summary">메뉴</summary>
      <nav
        aria-label="Mobile navigation"
        className="surface warsol-mobile-menu-panel grid gap-3 overflow-y-auto rounded-lg p-4"
      >
        {navigationItems.map((item) => {
          const active = isActivePath(pathname, item);
          return (
            <div key={item.href} className="grid gap-1 border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0">
              <Link
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-base font-black transition ${
                  active
                    ? "bg-[var(--bg-technical)] text-[var(--brand-blue)]"
                    : "text-[var(--brand-navy)] hover:bg-[var(--bg-technical)] hover:text-[var(--brand-blue)]"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="grid gap-1 pl-3">
                  {item.children.map((child) => {
                    const childActive = pathname === child.href || pathname.startsWith(`${child.href}/`);
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenu}
                        aria-current={childActive ? "page" : undefined}
                        className={`rounded-md px-3 py-2 text-sm font-bold transition ${
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
              )}
            </div>
          );
        })}
      </nav>
    </details>
  );
}
