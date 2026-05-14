import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "기술 | WARSOL",
  description: "WARSOL 수용성 고분자, 접착, 코팅, 분산, 방수, 차열 기술",
};

const platforms = [
  {
    title: "수용성 고분자",
    body: "접착, 코팅, 분산 공정에 적용되는 수용성 수지 플랫폼",
    items: ["수지 계열", "고형분", "점도", "분산 안정성"],
  },
  {
    title: "접착 및 점착",
    body: "기재와 계면 안정성을 중심으로 한 접착 소재 기술",
    items: ["기재 표면", "내수성", "초기 점착", "박리 강도"],
  },
  {
    title: "기능성 코팅",
    body: "방수, 차열, 표면 보호를 위한 도막 형성 기술",
    items: ["필름 형성", "건조 조건", "차열", "표면 보호"],
  },
  {
    title: "분산 제어",
    body: "안료, 필러, 무기 입자, 수지 배합 안정화 기술",
    items: ["입자 안정성", "점도 변화", "저장 안정성", "작업성"],
  },
  {
    title: "방수 및 차열 보호",
    body: "건축 외피와 산업 표면을 위한 보호 소재 기술",
    items: ["외부 노출", "습도", "균열", "시공 방식"],
  },
  {
    title: "친환경 안전소재",
    body: "재활용 원료와 자연발화 억제 소재 연구",
    items: ["재활용 원료", "보관 조건", "발열 조건", "안전성"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY"
        title="수지에서 표면까지 이어지는 소재 설계"
        description="Water-based Polymer Technology"
      />

      <Section eyebrow="Technology Platform" title="WARSOL Technology Portfolio">
        <div className="grid gap-4 lg:grid-cols-3">
          {platforms.map((platform) => (
            <DataCard key={platform.title} title={platform.title} body={platform.body} items={platform.items} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="Technical Scope" title="Application Variables">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["적용 산업", "기재 표면", "요구 물성", "온도와 습도", "시공 방식", "보관 조건", "샘플 단계", "개발 일정"].map((item) => (
            <div key={item} className="rounded-lg border border-[var(--line)] bg-white p-5 text-sm font-black text-[var(--brand-navy)]">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
