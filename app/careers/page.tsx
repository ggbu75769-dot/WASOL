import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "채용 | WARSOL",
  description: "WARSOL 채용",
};

const roles = [
  { title: "R&D", body: "수용성 고분자, 접착, 코팅, 분산 소재 연구" },
  { title: "Production & Quality", body: "공정 안정화, 품질 관리, 시험자료 운영" },
  { title: "Technical Sales", body: "고객 적용 조건 기반 기술 영업" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="WARSOL Careers"
        description="Material Technology People"
      />

      <Section eyebrow="Careers" title="소재 기술의 내일을 함께 만드는 사람">
        <div className="grid gap-4 lg:grid-cols-3">
          {roles.map((role) => (
            <DataCard key={role.title} title={role.title} body={role.body} />
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--brand-navy)] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
        >
          채용 문의
        </Link>
      </Section>
    </>
  );
}
