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
    title: "WARSOL Materials",
    body: "수용성 고분자 기반 산업 소재 포트폴리오",
  },
  {
    title: "Technical Inquiry",
    body: "접착, 코팅, 방수, 분산, 안전소재 기술 상담",
  },
  {
    title: "Product Data",
    body: "TDS, SDS, 시험자료, 품질자료 안내",
  },
];

export default function NoticePage() {
  return (
    <>
      <PageHero
        eyebrow="NOTICE"
        title="WARSOL Notice"
        description="기업 공지와 고객 안내"
      />

      <Section eyebrow="Notice" title="Material Business Notice">
        <div className="grid gap-4 lg:grid-cols-3">
          {notices.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
