import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "언론보도 | WARSOL",
  description: "WARSOL 언론보도 및 보도자료",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="언론보도"
        title="WARSOL 언론보도"
        description="뉴스, 보도자료, 기업 이야기"
      />

      <Section eyebrow="보도센터" title="WARSOL 뉴스룸">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="회사" body="WARSOL 기업 소개와 소재 기술 스토리" />
          <DataCard title="기술" body="수용성 고분자, 접착, 코팅, 분산 기술" />
          <DataCard title="언론 문의" body="보도자료, 인터뷰, 기업자료 문의" />
        </div>
      </Section>
    </>
  );
}
