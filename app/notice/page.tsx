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
    title: "제품 자료 요청",
    body: "TDS·SDS 등 제품 자료는 적용처, 제품군, 사용 조건 확인 후 안내합니다.",
  },
  {
    title: "샘플 상담 안내",
    body: "샘플 검토는 기재, 배합 목적, 도포 조건, 필요 물성을 함께 확인해야 합니다.",
  },
  {
    title: "공식 공지 준비",
    body: "신규 공지와 자료실은 공식 자료 확인 후 순차적으로 등록됩니다.",
  },
];

export default function NoticePage() {
  return (
    <>
      <PageHero
        eyebrow="공지"
        title="WARSOL 공지사항"
        description="제품 자료, 샘플 상담, 고객 안내"
      />

      <Section eyebrow="공지사항" title="고객 안내">
        <div className="grid gap-4 lg:grid-cols-3">
          {notices.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>
    </>
  );
}
