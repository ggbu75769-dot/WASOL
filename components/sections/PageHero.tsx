import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs?: { href: string; label: string }[];
};

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--bg-soft)] py-16 sm:py-20">
      <div className="container min-w-0">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <p className="eyebrow break-words">{eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.76fr_0.24fr] lg:items-end">
          <h1 className="break-words text-3xl font-black leading-tight text-[var(--brand-navy)] sm:text-5xl">
            {title}
          </h1>
          <div className="hidden h-px bg-[var(--line-strong)] lg:block" />
        </div>
        <p className="mt-6 max-w-4xl break-words text-lg leading-8 text-[var(--muted)]">{description}</p>
      </div>
    </section>
  );
}
