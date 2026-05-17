import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "뉴스룸 | WARSOL",
  description: "WARSOL 회사 소개, 보도자료, 언론 문의",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="뉴스룸"
        title="WARSOL 뉴스룸"
        description="회사 소개, 보도자료, 기업 자료 요청"
      />

      <Section eyebrow="보도센터" title="공식 자료 확인 후 업데이트합니다">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="회사 소개" body="수용성 고분자와 산업용 수지 소재를 개발·생산하는 기업 자료" />
          <DataCard title="기술 주제" body="분산제, 수용성 수지, 코팅제, 점·접착 소재 관련 자료" />
          <DataCard title="언론 문의" body="보도자료, 인터뷰, 기업자료 요청은 문의 페이지로 접수해 주세요." />
        </div>
      </Section>
    </>
  );
}
