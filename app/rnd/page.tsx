import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "연구개발 | WARSOL",
  description: "WARSOL 방수, 차열, 친환경 안전소재 연구개발",
};

const researchItems = [
  {
    title: "방수용 점착제",
    body: "방수 시트와 차수재 적용을 위한 수용성 아크릴계 점착 소재",
  },
  {
    title: "차열 및 방수 코팅",
    body: "건축 외피와 산업 표면 보호를 위한 기능성 코팅 소재",
  },
  {
    title: "친환경 안전소재",
    body: "재활용 원료 기반 자연발화 억제 소재",
  },
];

export default function RndPage() {
  return (
    <>
      <PageHero
        eyebrow="R&D"
        title="소재의 미래를 향한 연구개발"
        description="Waterproof, Thermal Protection, Eco Safety Materials"
      />

      <Section eyebrow="Research Area" title="WARSOL Research Pipeline">
        <div className="grid gap-4 lg:grid-cols-3">
          {researchItems.map((item) => (
            <DataCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="R&D Focus" title="Material Innovation">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="Surface Protection" body="방수와 표면 보호 소재 기술" />
          <DataCard title="Thermal Control" body="차열과 도막 안정성 기술" />
          <DataCard title="Eco Safety" body="친환경 안전소재 연구" />
        </div>
      </Section>
    </>
  );
}
