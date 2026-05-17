import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "채용 | WARSOL",
  description: "WARSOL 생산, 품질, 연구개발 채용 분야와 소재 인재상",
};

const roles = [
  {
    title: "생산",
    body: "아크릴 에멀젼, 수용성 소재, 코팅·접착 소재의 생산 공정 운영과 현장 조건 확인",
    items: ["공정 운영", "안전 기준", "현장 기록"],
  },
  {
    title: "품질",
    body: "원료, 배합, 제품 출하 전 품질 기준 확인과 제품 자료 관리",
    items: ["원료 확인", "배합 기준", "출하 품질"],
  },
  {
    title: "연구개발",
    body: "수용성 분산, 수지, 코팅, 점·접착 소재의 적용 조건과 물성 검토",
    items: ["소재 검토", "시험 조건", "자료 정리"],
  },
];

const talentValues = [
  {
    title: "안전과 품질",
    body: "소재 산업은 공정 안전과 품질 기준을 꾸준히 지키는 태도에서 출발합니다.",
  },
  {
    title: "현장 이해",
    body: "작은 온도, 점도, 도포 조건의 차이가 결과를 바꾸는 현장 조건을 이해합니다.",
  },
  {
    title: "기술 개선",
    body: "반복되는 문제를 기록하고 배합, 공정, 자료 기준을 함께 개선합니다.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="채용"
        title="현장을 이해하는 소재 인재"
        description="WARSOL은 수용성 소재의 생산, 품질, 연구개발을 함께 만들어갈 인재를 기다립니다."
      />

      <Section
        eyebrow="채용 분야"
        title="생산, 품질, 연구개발이 함께 만드는 소재 경쟁력"
        description="소재 산업은 현장 조건을 이해하고, 품질 기준을 지키며, 작은 공정 차이를 개선해 나가는 사람의 역량이 중요합니다."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {roles.map((role) => (
            <DataCard key={role.title} title={role.title} body={role.body} items={role.items} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="인재상" title="WARSOL이 중요하게 보는 기준">
        <div className="grid gap-4 lg:grid-cols-3">
          {talentValues.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
        >
          채용 문의
        </Link>
      </Section>
    </>
  );
}
