import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { MaterialPipelineVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { applicationGuides, getApplicationBySlug } from "@/content/applications";
import { productCategories } from "@/content/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return applicationGuides.map((application) => ({ slug: application.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getApplicationBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | WARSOL 적용 가이드`,
    description: `${guide.title}의 소재 과제, 관련 제품군, 문의 준비 항목, 검증 메모를 정리합니다.`,
  };
}

export default async function ApplicationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getApplicationBySlug(slug);
  if (!guide) notFound();

  const relatedProducts = productCategories.filter((product) =>
    guide.relevantProductSlugs.includes(product.slug),
  );

  return (
    <>
      <section className="border-b border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f8fafc)] py-14 sm:py-20">
        <div className="container max-w-5xl">
          <Breadcrumbs
            items={[
              { href: "/applications", label: "Applications" },
              { href: `/applications/${guide.slug}`, label: guide.englishName },
            ]}
          />
          <p className="eyebrow">{guide.englishName}</p>
          <h1 className="mt-5 text-4xl font-black leading-tight text-[var(--brand-navy)] sm:text-6xl">{guide.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{guide.useContext}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={`/contact?application=${guide.slug}`}>이 적용처로 문의 준비</Button>
            <Button href="/products" variant="secondary">
              관련 제품군 보기
            </Button>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Material Challenges"
        title="적용처에서 먼저 확인해야 할 소재 과제"
        description={guide.materialControl}
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {guide.materialChallenges.map((challenge) => (
            <DataCard key={challenge} title={challenge} body="상담 전 확인하면 제품군과 검증 방식이 빨라집니다." />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Related Product Families"
        title="이 적용처와 연결되는 제품군"
        description="제품 추천이 아니라 관련 기술 축과 문의 방향을 안내합니다."
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <DataCard
              key={product.slug}
              eyebrow={product.englishName}
              title={product.name}
              body={product.shortDefinition}
              items={product.technicalVariables.slice(0, 3)}
              aside={<Button href={`/products/${product.slug}`} variant="secondary">제품군 보기</Button>}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Inquiry Preparation"
        title="기술 문의 전에 정리할 항목"
        description="이 가이드는 가짜 사례 대신 실제 상담에 필요한 체크리스트를 제공합니다."
      >
        <MaterialPipelineVisual />
        <div className="mt-6">
          <SpecTable
            columns={["Checklist", "Type", "Why it matters"]}
            rows={guide.inquiryChecklist.map((item) => ({
              label: item,
              value: "문의 준비",
              note: "샘플 상담과 검증 범위를 좁히는 데 필요합니다.",
            }))}
          />
        </div>
      </Section>

      <Section
        eyebrow="Risk / Verification Note"
        title="공식 자료 확인 전까지 확정하지 않는 것"
        className="bg-[var(--bg-soft)]"
        description={guide.riskNote}
      >
        <DataCard
          title="Launch-safe claim boundary"
          body="이 페이지는 적용 가능성, 소재 과제, 문의 준비를 안내합니다. 고객 사례, 인증, 보증, 정확한 성능 수치는 공식 자료 없이 표시하지 않습니다."
          aside={<EvidenceBadge status="pending official confirmation" />}
        />
      </Section>
    </>
  );
}
