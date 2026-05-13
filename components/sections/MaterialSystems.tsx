import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const systems = [
  {
    code: "MS-01",
    title: "Adhesion Systems",
    korean: "점·접착제 / 수성 아크릴 에멀젼",
    body: "방수 시트, 차수재, 산업 라벨처럼 습기와 표면 조건이 접착 신뢰성을 좌우하는 적용처를 다룹니다.",
    keywords: ["내수성", "점착 유지력", "계면 안정"],
    application: "건축 방수 · 포장/라벨 · 산업 부품",
  },
  {
    code: "MS-02",
    title: "Functional Coating Systems",
    korean: "차열·방수·표면 보호",
    body: "도막 형성, 열 저감, 방수 성능이 필요한 건축 외피와 산업 설비 표면을 소재 관점에서 정리합니다.",
    keywords: ["차열", "도막 형성", "표면 보호"],
    application: "건축 외피 · 방수 시공 · 설비 표면",
  },
  {
    code: "MS-03",
    title: "Dispersion & Polymer Control",
    korean: "분산제 / 수용성 고분자",
    body: "코팅액, 도료, 에멀젼 시스템에서 입자 안정성과 작업성을 조율하는 배합 언어를 제공합니다.",
    keywords: ["분산 안정성", "점도 제어", "수성 전환"],
    application: "도료 배합 · 코팅액 안정화 · 무기 필러",
  },
  {
    code: "MS-04",
    title: "Eco Safety Materials",
    korean: "친환경 자연발화 억제 / 산업 안전 소재",
    body: "커피찌꺼기 기반 자연발화 억제 특허처럼 재활용 원료와 산업 안전 문제를 연결하는 R&D 축입니다.",
    keywords: ["피막 형성", "자원 재활용", "자연발화 억제"],
    application: "저탄장 · 에너지 설비 · 환경 안전 프로젝트",
  },
];

export function MaterialSystems() {
  return (
    <Section
      id="material-systems"
      className="bg-[var(--bg-soft)]"
      eyebrow="Material Systems"
      title="제품군을 네 개의 소재 시스템으로 읽히게 정리했습니다."
      description="작은 카드 나열 대신, WARSOL이 다루는 접착·코팅·분산·안전 소재 축을 기술 상담에 바로 연결되는 구조로 보여줍니다."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {systems.map((system, index) => (
          <Reveal key={system.code} delay={index * 0.06}>
            <article className="surface h-full rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--line)] pb-5">
                <div>
                  <p className="mono-label">{system.code}</p>
                  <h3 className="mt-3 text-2xl font-black text-[var(--brand-navy)]">{system.title}</h3>
                  <p className="mt-2 text-sm font-bold text-[var(--brand-blue)]">{system.korean}</p>
                </div>
                <span className="rounded-md bg-[var(--bg-technical)] px-3 py-2 text-xs font-bold text-[var(--muted-strong)]">
                  {system.application}
                </span>
              </div>
              <p className="mt-5 leading-7 text-[var(--muted)]">{system.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {system.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold text-[var(--brand-navy)]">
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
