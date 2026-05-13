import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f8fafc)] py-16 sm:py-20">
      <div className="container max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-[var(--brand-navy)] sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{description}</p>
      </div>
    </section>
  );
}
