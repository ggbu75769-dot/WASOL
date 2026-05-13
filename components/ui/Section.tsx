import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--text)] sm:text-5xl">{title}</h2>}
            {description && <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
