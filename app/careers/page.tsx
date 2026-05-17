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
  { title: "생산", body: "아크릴 에멀젼, 수용성 소재 생산 공정 운영" },
  { title: "품질", body: "원료, 배합, 제품 출하 전 품질 기준 확인" },
  { title: "연구개발", body: "수용성 분산, 수지, 코팅, 점·접착 소재 검토" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="채용"
        title="WARSOL 채용"
        description="수용성 소재의 생산, 품질, 연구개발을 함께할 인재"
      />

      <Section eyebrow="채용 분야" title="현장을 이해하는 소재 인재">
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
