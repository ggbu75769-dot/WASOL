import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "기술 | WARSOL",
  description: "WARSOL 수용성 분산, 수지 설계, 기능성 코팅, 점·접착 기술",
};

const platforms = [
  {
    title: "수용성 분산 기술",
    body: "수계 배합에서 입자 안정성, 점도, 보관 안정성을 조정합니다.",
    items: ["분산 안정성", "고형분", "점도", "보관 조건"],
  },
  {
    title: "수용성 수지 설계",
    body: "Sodium Polyacrylate, CMC, 천연검·변성검 응용 등 수용성 소재 적용성을 검토합니다.",
    items: ["상용성", "점도", "고형분", "사용 목적"],
  },
  {
    title: "점·접착 계면",
    body: "기재 표면, 수분 노출, 도포량, 건조 조건에 따른 접착 안정성을 검토합니다.",
    items: ["기재 표면", "내수성", "초기 점착", "박리 강도"],
  },
  {
    title: "기능성 코팅",
    body: "도막 형성, 표면 보호, 방식 코팅, 방수·차열 기능을 적용 조건별로 검토합니다.",
    items: ["필름 형성", "건조 조건", "외부 노출", "표면 보호"],
  },
  {
    title: "방수·차열 보호",
    body: "건축 외피, 방수 시트, 콘크리트 보호처럼 수분과 열 노출이 큰 표면을 대상으로 합니다.",
    items: ["외부 노출", "습도", "기존 도막", "시공 방식"],
  },
  {
    title: "친환경 안전 소재",
    body: "재활용 원료와 자연발화 억제처럼 환경·안전 요구가 큰 소재 과제를 연구합니다.",
    items: ["재활용 원료", "보관 조건", "발열 조건", "안전성"],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="기술"
        title="수계 배합에서 표면 성능까지 이어지는 소재 기술"
        description="분산 안정성, 점도, 도막 형성, 접착 계면처럼 실제 공정에서 달라지는 변수를 기준으로 소재를 검토합니다."
      />

      <Section eyebrow="기술 플랫폼" title="WARSOL 기술 포트폴리오">
        <div className="grid gap-4 lg:grid-cols-3">
          {platforms.map((platform) => (
            <DataCard key={platform.title} title={platform.title} body={platform.body} items={platform.items} />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="적용 변수" title="상담 시 확인하는 적용 변수">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["적용 산업", "기재 표면", "배합 목적", "목표 점도", "도포 방식", "건조 조건", "보관 조건", "필요 자료"].map((item) => (
            <div key={item} className="rounded-lg border border-[var(--line)] bg-white p-5 text-sm font-black text-[var(--brand-navy)]">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
