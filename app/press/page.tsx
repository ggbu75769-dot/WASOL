import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "뉴스룸 | WARSOL",
  description: "WARSOL 회사 소개자료, 기술 주제, 보도자료와 언론 문의 안내",
};

const newsroomCards = [
  {
    title: "회사 소개자료",
    body: "수용성 고분자와 산업용 수지 소재를 개발·생산하는 기업 소개자료 요청을 안내합니다.",
    items: ["회사 개요", "사업장", "제품군", "연락처"],
  },
  {
    title: "기술 주제",
    body: "분산제, 수용성 수지, 기능성 코팅, 점·접착 소재와 관련된 기술 브리프 문의를 접수합니다.",
    items: ["분산", "코팅", "접착", "방수·차열"],
  },
  {
    title: "언론 문의",
    body: "보도자료, 인터뷰, 기업자료 요청은 문의 페이지를 통해 접수해 주세요. 공식 확인 자료를 기준으로 안내합니다.",
    items: ["보도자료", "인터뷰", "기업자료", "기술자료"],
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="뉴스룸"
        title="WARSOL 뉴스룸"
        description="WARSOL 뉴스룸은 회사 소개, 기술 주제, 기업 자료 요청을 안내하는 공간입니다. 공식적으로 확인된 자료를 기준으로 정확하게 안내드립니다."
      />

      <Section eyebrow="PR Center" title="기업 정보와 미디어 문의">
        <div className="grid gap-4 lg:grid-cols-3">
          {newsroomCards.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} items={item.items} />
          ))}
        </div>
        <Link
          href="/contact?category=%EC%9E%90%EB%A3%8C+%EC%9A%94%EC%B2%AD"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
        >
          기업 자료 문의
        </Link>
      </Section>
    </>
  );
}
