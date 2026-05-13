export type ApplicationGuide = {
  slug: string;
  title: string;
  englishName: string;
  application: string;
  materialControl: string;
  useContext: string;
  materialChallenges: string[];
  relevantProductSlugs: string[];
  inquiryChecklist: string[];
  riskNote: string;
  sourceIds: string[];
};

export const applicationGuides: ApplicationGuide[] = [
  {
    slug: "building-envelope",
    title: "건축 외피·방수·차열 가이드",
    englishName: "Building Envelope",
    application: "건축 방수 / 차열",
    materialControl: "수성 접착 · 차열 도막 · 방수 계면",
    useContext: "방수 시트, 차수재, 건축 외피, 차열·방수 시공",
    materialChallenges: ["콘크리트 표면 상태", "습기와 외부 노출", "도막 두께와 균열", "시공 온도와 건조 조건"],
    relevantProductSlugs: ["adhesion-systems", "functional-coatings", "waterproof-thermal-protection"],
    inquiryChecklist: ["기재와 기존 코팅 유무", "실내/실외 노출", "방수와 차열 중 우선 목표", "샘플 또는 현장 검토 일정"],
    riskNote: "실제 보증, 시공 사례, 성능 수치는 공식 TDS와 시험 조건 확인 후 확정해야 합니다.",
    sourceIds: ["patent-waterproof-acrylic", "patent-thermal-coating"],
  },
  {
    slug: "coating-paint",
    title: "코팅·도료 배합 가이드",
    englishName: "Coating & Paint",
    application: "도료 / 코팅",
    materialControl: "분산 안정 · 필름 균일성 · 표면 보호",
    useContext: "도료 배합, 코팅액 안정화, 무기 필러·안료 분산, 장비 표면 보호",
    materialChallenges: ["안료/필러 종류", "목표 점도", "저장 안정성", "건조 조건과 도막 균일성"],
    relevantProductSlugs: ["functional-coatings", "dispersion-additives"],
    inquiryChecklist: ["입자/필러 정보", "고형분과 목표 점도", "혼합 순서", "도막 목표와 시험 방법"],
    riskNote: "배합비, additive grade, 성능값은 공식 자료 또는 별도 기술 검토 후 확정되어야 합니다.",
    sourceIds: ["rndcircle-technology-summary", "patent-thermal-coating"],
  },
  {
    slug: "packaging-label",
    title: "포장·라벨·필름 접착 가이드",
    englishName: "Packaging & Label",
    application: "포장 / 라벨",
    materialControl: "점착 안정 · 표면 에너지 · 반복 취급 내구",
    useContext: "산업 라벨, 포장 필름, 물류 취급 환경, 반복 박리·부착 조건",
    materialChallenges: ["필름 표면 에너지", "초기 점착", "박리 강도", "온습도와 반복 취급"],
    relevantProductSlugs: ["adhesion-systems", "dispersion-additives"],
    inquiryChecklist: ["필름/라벨 소재", "부착 대상 표면", "반복 취급 조건", "요구 점착과 박리 기준"],
    riskNote: "라벨·포장 적용은 실제 기재와 보관 조건에 따라 결과가 크게 달라질 수 있습니다.",
    sourceIds: ["rndcircle-technology-summary"],
  },
  {
    slug: "energy-storage-safety",
    title: "에너지 저장·안전 소재 가이드",
    englishName: "Energy Storage Safety",
    application: "에너지 저장 / 안전",
    materialControl: "열 안정 · 친환경 안전 소재 · 표면 보호",
    useContext: "저장 환경, 발열 위험 저감, 재활용 원료 연구, 산업 안전 소재 검토",
    materialChallenges: ["발열 조건", "원료 보관 방식", "표면 보호 요구", "SDS/규제 문서 필요성"],
    relevantProductSlugs: ["eco-safety-materials", "waterproof-thermal-protection"],
    inquiryChecklist: ["대상 원료와 보관 방식", "발열/분진 위험", "요구 규제 문서", "샘플 또는 공동 개발 단계"],
    riskNote: "안전·규제 관련 주장은 공식 SDS, 시험성적서, 승인 문서 확인 전까지 확정하지 않습니다.",
    sourceIds: ["patent-coffee-grounds"],
  },
];

export const applicationRows = applicationGuides.map((guide) => ({
  application: guide.application,
  materialControl: guide.materialControl,
  useContext: guide.useContext,
  inquiryFocus: guide.inquiryChecklist,
  relatedProductSlugs: guide.relevantProductSlugs,
}));

export function getApplicationBySlug(slug: string) {
  return applicationGuides.find((application) => application.slug === slug);
}
