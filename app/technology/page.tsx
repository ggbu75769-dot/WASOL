import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";

export const metadata: Metadata = {
  title: "기술 | WARSOL",
  description:
    "WARSOL 수용성 분산, 수용성 수지 설계, 접착 계면, 기능성 코팅, 방수·차열 보호, 친환경 안전 소재 기술",
};

const platforms = [
  {
    title: "수용성 분산 기술",
    purpose: "입자와 첨가제가 수계 배합 안에서 안정적으로 유지되도록 검토합니다.",
    variables: ["입자 종류", "고형분", "혼합 순서", "보관 조건"],
    benefit: "배합 안정성과 공정 반복성을 높이는 방향을 찾습니다.",
    trigger: "침전, 응집, 점도 변화가 반복될 때",
  },
  {
    title: "수용성 수지 설계",
    purpose: "Sodium Polyacrylate, CMC, 천연검·변성검 응용 등 수용성 소재 적용성을 확인합니다.",
    variables: ["상용성", "점도", "고형분", "사용 목적"],
    benefit: "수계 공정에 맞는 수지와 첨가 조합을 좁힙니다.",
    trigger: "배합 안정성, 작업성, 보관성이 동시에 필요할 때",
  },
  {
    title: "점·접착 계면",
    purpose: "기재 표면과 수분 노출 조건에 따른 접착 안정성을 검토합니다.",
    variables: ["기재 표면", "내수성", "초기 점착", "박리 강도"],
    benefit: "접착 실패 요인을 적용 조건 단위로 분리합니다.",
    trigger: "방수 시트, 필름, 라벨 적용 검토가 필요할 때",
  },
  {
    title: "기능성 코팅",
    purpose: "도막 형성, 표면 보호, 방식 코팅, 방수·차열 기능을 적용 조건별로 검토합니다.",
    variables: ["도막 두께", "건조 조건", "외부 노출", "표면 보호"],
    benefit: "표면 보호와 작업 안정성을 함께 확인합니다.",
    trigger: "코팅 표면의 보호 성능과 건조 조건을 확인해야 할 때",
  },
  {
    title: "방수·차열 보호",
    purpose: "건축 외피, 방수 시트, 콘크리트 보호처럼 수분과 열 노출이 큰 표면을 대상으로 합니다.",
    variables: ["외부 노출", "습도", "기존 도막", "시공 방식"],
    benefit: "현장 환경과 보호 성능을 같은 검토 흐름에 둡니다.",
    trigger: "방수, 차열, 외피 보호를 함께 검토해야 할 때",
  },
  {
    title: "친환경 안전 소재",
    purpose: "재활용 원료와 자연발화 억제처럼 환경·안전 요구가 큰 소재 과제를 연구합니다.",
    variables: ["재활용 원료", "보관 조건", "발열 조건", "안전 기준"],
    benefit: "적용 환경과 안전 기준에 맞춘 검토 범위를 정리합니다.",
    trigger: "환경 안전 기준이나 공동개발 가능성을 확인할 때",
  },
];

const variableRows = [
  { label: "배합", value: "고형분, 점도, 혼합 순서", note: "작업성과 저장 안정성에 영향을 줍니다." },
  { label: "기재", value: "콘크리트, 금속, 필름, 섬유, 입자", note: "접착 계면과 도막 형성 조건을 바꿉니다." },
  { label: "공정", value: "도포량, 건조 조건, 시공 온도", note: "최종 물성과 표면 품질을 좌우합니다." },
  { label: "환경", value: "수분, 열, 실외 노출, 보관 기간", note: "내구성과 안전성 검토의 기준입니다." },
  { label: "자료", value: "TDS, SDS, 샘플, 시험 조건", note: "의사결정과 후속 검증을 연결합니다." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="기술"
        title="수계 배합에서 표면 성능까지 이어지는 소재 기술"
        description="수계 배합은 원료명만으로 성능을 판단하기 어렵습니다. 입자 안정성, 점도, 고형분, 기재 표면, 건조 조건, 보관 환경에 따라 최종 제품의 작업성과 내구성이 달라집니다."
      />

      <Section eyebrow="기술 플랫폼" title="WARSOL 기술 포트폴리오">
        <div className="grid gap-4 lg:grid-cols-3">
          {platforms.map((platform) => (
            <DataCard
              key={platform.title}
              title={platform.title}
              body={
                <div className="grid gap-4">
                  <p>{platform.purpose}</p>
                  <p>
                    <strong className="text-[var(--brand-navy)]">고객 가치: </strong>
                    {platform.benefit}
                  </p>
                  <p>
                    <strong className="text-[var(--brand-navy)]">문의 시점: </strong>
                    {platform.trigger}
                  </p>
                </div>
              }
              items={platform.variables}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--bg-soft)]" eyebrow="적용 변수" title="상담 시 확인하는 적용 변수">
        <SpecTable columns={["구분", "확인 항목", "검토 이유"]} rows={variableRows} />
      </Section>

      <TechnicalInquiryCta />
    </>
  );
}
