import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { Button } from "@/components/ui/Button";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { getProductBySlug, productCategories } from "@/content/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCategories.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | WARSOL 제품`,
    description: `${product.name} 기술 기반, 적용처, 품질 자료`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productInquiryHref = `/contact?${new URLSearchParams({
    product: product.slug,
    category: "제품 적용 상담",
  }).toString()}`;

  return (
    <>
      <PageHero
        eyebrow={product.eyebrow}
        title={product.name}
        description={product.shortDefinition}
        breadcrumbs={[
          { href: "/products", label: "제품" },
          { href: `/products/${product.slug}`, label: product.name },
        ]}
      />

      <Section eyebrow="제품 개요" title="기술과 적용" description={product.summary}>
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <DataCard title="기술 기반" body={product.technologyBasis} items={product.relatedTechnologies} />
          <div className="grid gap-4 md:grid-cols-3">
            <DataCard title="적용처" body="주요 적용 산업" items={product.applications} />
            <DataCard title="물성" body="핵심 성능 항목" items={product.properties} />
            <DataCard title="가치" body="소재 적용 가치" items={product.benefits} />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="기술 자료"
        title="적용 조건"
        description="프로젝트 검토에 필요한 핵심 조건"
        className="bg-[var(--bg-soft)]"
      >
        <SpecTable
          columns={["항목", "구분", "내용"]}
          rows={product.technicalVariables.map((variable, index) => ({
            label: variable,
            value: "적용",
            note: product.inquiryPrompts[index % product.inquiryPrompts.length],
          }))}
        />
      </Section>

      <Section eyebrow="소재 자료" title="제품 자료 패키지">
        <div className="grid gap-4 lg:grid-cols-2">
          <DataCard title="제품 자료" body={product.officialDataStatus} />
          <DataCard title="기술자료" body={product.tdsStatus} />
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]">
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={productInquiryHref}>제품 문의</Button>
          <Button href="/products" variant="secondary">
            제품 목록
          </Button>
        </div>
      </Section>

      <TechnicalInquiryCta href={productInquiryHref} label="제품 문의" />
    </>
  );
}
