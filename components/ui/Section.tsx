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
          <div className="mb-10 max-w-3xl min-w-0">
            {eyebrow && <p className="eyebrow break-words">{eyebrow}</p>}
            {title && <h2 className="mt-4 break-words text-3xl font-black leading-tight text-[var(--text)] sm:text-5xl">{title}</h2>}
            {description && <p className="mt-5 break-words text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
