import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { TechnicalVariableMapVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { applicationGuides } from "@/content/applications";
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
    title: `${product.name} | WARSOL 제품군`,
    description: `${product.name}(${product.englishName})의 기술 기반, 적용처, 문의 변수, 공식 데이터 상태를 정리합니다.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedApplications = applicationGuides.filter((guide) =>
    guide.relevantProductSlugs.includes(product.slug),
  );

  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f8fafc)] py-14 sm:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs
            items={[
              { href: "/products", label: "Products" },
              { href: `/products/${product.slug}`, label: product.englishName },
            ]}
          />
          <p className="eyebrow">{product.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-[var(--brand-navy)] sm:text-6xl">{product.name}</h1>
          <p className="mt-4 text-lg font-bold text-[var(--brand-blue)]">{product.englishName}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{product.shortDefinition}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={`/contact?product=${product.slug}`}>이 제품군으로 문의 준비</Button>
            <Button href="/resources" variant="secondary">
              공식 데이터 상태 보기
            </Button>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Technology Basis"
        title="기술 기반과 적용 범위를 보수적으로 설명합니다."
        description={product.summary}
      >
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <DataCard
            title="Technology basis"
            body={product.technologyBasis}
            items={product.relatedTechnologies}
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
          <div className="grid gap-4 md:grid-cols-3">
            <DataCard title="Applications" body="대표 적용처" items={product.applications} />
            <DataCard title="Properties" body="상담에서 확인할 물성" items={product.properties} />
            <DataCard title="Benefits" body="과장 없는 상담 이점" items={product.benefits} />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Technical Variable Map"
        title="제품 추천 전에 확인해야 할 변수"
        description="소재 추천을 확정하지 않고, 상담 품질을 높이는 질문으로 정리합니다."
        className="bg-[var(--bg-soft)]"
      >
        <TechnicalVariableMapVisual />
        <div className="mt-6">
          <SpecTable
            columns={["Variable", "Purpose", "Inquiry prompt"]}
            rows={product.technicalVariables.map((variable, index) => ({
              label: variable,
              value: "상담 변수",
              note: product.inquiryPrompts[index % product.inquiryPrompts.length],
            }))}
          />
        </div>
      </Section>

      <Section
        eyebrow="Official Data Status"
        title="확정된 문서와 pending 문서를 분리합니다."
        description="공식 제품명, grade, TDS, SDS, 인증, 공급 조건은 회사 승인 자료 수령 후 확정합니다."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <DataCard title="Current safe wording" body={product.officialDataStatus} aside={<EvidenceBadge status="pending official confirmation" />} />
          <DataCard title="TDS/SDS readiness" body={product.tdsStatus} aside={<EvidenceBadge status="local ui only" />} />
        </div>
      </Section>

      <Section
        eyebrow="Related Application Guides"
        title="이 제품군과 연결되는 적용 산업"
        description="적용처별 문제와 문의 준비 항목으로 넘어갈 수 있습니다."
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {relatedApplications.map((application) => (
            <DataCard
              key={application.slug}
              title={application.title}
              body={application.useContext}
              items={application.inquiryChecklist}
              aside={<Button href={`/applications/${application.slug}`} variant="secondary">가이드 보기</Button>}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
