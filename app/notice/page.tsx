import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "공지사항 | WARSOL",
  description: "WARSOL 공지사항",
};

const notices = [
  {
    title: "WARSOL 소재",
    body: "수용성 고분자 기반 산업 소재 포트폴리오",
  },
  {
    title: "기술 문의",
    body: "접착, 코팅, 방수, 분산, 안전소재 기술 상담",
  },
  {
    title: "제품 자료",
    body: "TDS, SDS, 시험자료, 품질자료 안내",
  },
];

export default function NoticePage() {
  return (
    <>
      <PageHero
        eyebrow="공지"
        title="WARSOL 공지사항"
        description="기업 공지와 고객 안내"
      />

      <Section eyebrow="공지사항" title="소재 사업 공지">
        <div className="grid gap-4 lg:grid-cols-3">
          {notices.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
