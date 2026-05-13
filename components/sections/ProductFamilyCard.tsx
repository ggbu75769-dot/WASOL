import { Button } from "@/components/ui/Button";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import type { ProductCategory } from "@/content/products";

type ProductFamilyCardProps = {
  category: ProductCategory;
};

export function ProductFamilyCard({ category }: ProductFamilyCardProps) {
  return (
    <article id={category.slug} className="surface grid gap-6 rounded-lg p-6 lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
      <div>
        <p className="mono-label">{category.eyebrow}</p>
        <h3 className="mt-3 text-3xl font-black leading-tight text-[var(--brand-navy)]">{category.name}</h3>
        <p className="mt-2 text-sm font-bold text-[var(--brand-blue)]">{category.englishName}</p>
        <p className="mt-4 leading-7 text-[var(--muted)]">{category.summary}</p>
        <div className="mt-5">
          <EvidenceBadge status="pending official confirmation" />
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{category.tdsStatus}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`/products/${category.slug}`}>제품군 자세히</Button>
          <Button href={`/contact?product=${category.slug}`} variant="secondary">
            문의 준비
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoPanel title="Applications" items={category.applications} />
        <InfoPanel title="Properties" items={category.properties} />
        <InfoPanel title="Inquiry Prompts" items={category.inquiryPrompts} />
      </div>
    </article>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-5">
      <p className="text-sm font-black text-[var(--brand-navy)]">{title}</p>
      <ul className="technical-list mt-4 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
