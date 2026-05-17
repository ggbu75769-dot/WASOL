export type ProductCategory = {
  slug: string;
  name: string;
  englishName: string;
  eyebrow: string;
  shortDefinition: string;
  summary: string;
  technologyBasis: string;
  applications: string[];
  properties: string[];
  technicalVariables: string[];
  benefits: string[];
  officialDataStatus: string;
  tdsStatus: string;
  relatedTechnologies: string[];
  relatedApplicationSlugs: string[];
  inquiryPrompts: string[];
  sourceIds: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "adhesion-systems",
    name: "수성 점·접착 소재",
    englishName: "Adhesion Systems",
    eyebrow: "접착·점착",
    shortDefinition:
      "기재 밀착, 초기 점착, 내수성, 박리 안정성을 함께 검토하는 수계 접착·점착 소재군",
    summary:
      "방수 시트, 차수재, 필름, 라벨처럼 기재 표면과 수분 노출 조건이 결과를 좌우하는 분야를 중심으로 적용 가능성을 검토합니다.",
    technologyBasis:
      "수성 아크릴 에멀젼, 계면 안정화, 내수성 개선, 도포·건조 조건 검토",
    applications: ["방수 시트", "차수재", "산업용 라벨", "필름·시트 가공"],
    properties: ["기재 밀착", "초기 점착", "내수성", "박리 안정성"],
    technicalVariables: ["기재 표면", "수분 노출", "도포량", "건조 조건", "박리 강도"],
    benefits: ["기재별 소재 검토", "수계 공정 적용", "샘플 조건 기반 상담"],
    officialDataStatus: "적용처, 기재, 샘플 조건 확인 후 제품 자료를 안내합니다.",
    tdsStatus: "TDS, SDS, 샘플 조건 자료 요청이 가능합니다.",
    relatedTechnologies: ["수성 아크릴계 수지", "접착 계면 설계"],
    relatedApplicationSlugs: ["building-envelope", "packaging-label"],
    inquiryPrompts: ["기재 종류", "수분 노출", "도포 방식", "목표 점착", "샘플 단계"],
    sourceIds: ["patent-waterproof-acrylic", "rndcircle-technology-summary"],
  },
  {
    slug: "functional-coatings",
    name: "수용성 기능성 코팅제",
    englishName: "Functional Coatings",
    eyebrow: "코팅",
    shortDefinition:
      "도막 형성, 표면 보호, 건조 조건, 방식·방수 적용성을 검토하는 산업용 수계 코팅 소재",
    summary:
      "건축 외피, 설비 표면, 원료 배합, 방식 코팅처럼 도막 형성·보호 성능·작업 안정성이 필요한 영역에 맞춰 코팅 소재와 적용 조건을 함께 검토합니다.",
    technologyBasis: "수용성 바인더, 도막 형성, 표면 보호, 기능성 첨가 설계",
    applications: ["건축 외피", "방수 시공", "산업 설비 표면", "방식 코팅"],
    properties: ["도막 형성", "표면 보호", "방수성", "건조 안정성"],
    technicalVariables: ["도막 두께", "건조 조건", "외부 노출", "목표 성능", "혼합 조건"],
    benefits: ["수계 코팅 적용", "도막 안정성 검토", "현장 조건별 상담"],
    officialDataStatus: "적용 표면과 공정 조건 확인 후 자료를 제공합니다.",
    tdsStatus: "TDS, SDS, 시험 조건 자료 요청이 가능합니다.",
    relatedTechnologies: ["수용성 바인더", "기능성 코팅"],
    relatedApplicationSlugs: ["building-envelope", "coating-paint"],
    inquiryPrompts: ["적용 표면", "건조 조건", "실외 노출", "목표 성능"],
    sourceIds: ["patent-thermal-coating", "rndcircle-technology-summary"],
  },
  {
    slug: "waterproof-thermal-protection",
    name: "방수·차열 보호 소재",
    englishName: "Waterproof and Thermal Protection",
    eyebrow: "방수·차열",
    shortDefinition:
      "수분 노출, 열 노출, 외부 환경, 건축 외피 조건을 기준으로 검토하는 보호 소재군",
    summary:
      "콘크리트, 외피 마감, 기존 도막, 시공 온도처럼 현장 변수가 큰 방수·차열 적용처를 대상으로 소재 후보와 검증 조건을 함께 정리합니다.",
    technologyBasis: "아크릴계 방수 점착, 차열 코팅 조성, 표면 내구성 검토",
    applications: ["건축 방수", "차열 마감", "콘크리트 보호", "외피 유지보수"],
    properties: ["방수 계면", "열 노출 저감", "균열 대응", "외부 내구성"],
    technicalVariables: ["기재", "통기 조건", "시공 온도", "기존 코팅", "검증 방식"],
    benefits: ["외피 보호", "시공 조건 검토", "시험 기준 정리"],
    officialDataStatus: "기재와 시공 조건 확인 후 제품 자료를 안내합니다.",
    tdsStatus: "TDS, SDS, 시험 조건 자료 요청이 가능합니다.",
    relatedTechnologies: ["방수 점착", "차열 코팅"],
    relatedApplicationSlugs: ["building-envelope", "energy-storage-safety"],
    inquiryPrompts: ["기재와 기존 표면", "통기와 외부 노출", "도막 구조", "시공 일정"],
    sourceIds: ["patent-waterproof-acrylic", "patent-thermal-coating"],
  },
  {
    slug: "dispersion-additives",
    name: "수용성 분산·점도 소재",
    englishName: "Dispersion Additives",
    eyebrow: "분산·점도",
    shortDefinition:
      "분산 안정성, 고형분, 점도, 보관 안정성을 조정하는 수계 배합용 소재",
    summary:
      "수용성 분산제, Sodium Polyacrylate, CMC, 천연검·변성검 응용처럼 세제·수처리·제지·원료 배합에서 안정성이 필요한 영역을 다룹니다.",
    technologyBasis: "분산 안정성, 점도 제어, 수용성 시스템 적용, 고형분 관리",
    applications: ["세제 배합", "수처리", "제지 공정", "원료·코팅 배합"],
    properties: ["분산 안정성", "점도 관리", "저장 안정성", "작업성"],
    technicalVariables: ["입자 종류", "고형분", "혼합 순서", "보관 조건", "목표 점도"],
    benefits: ["배합 안정성", "공정 반복성", "수계 시스템 적용"],
    officialDataStatus: "배합 목적과 사용 조건 확인 후 제품 자료를 제공합니다.",
    tdsStatus: "TDS, SDS, 샘플 조건 자료 요청이 가능합니다.",
    relatedTechnologies: ["수용성 분산제", "점도 제어"],
    relatedApplicationSlugs: ["coating-paint", "packaging-label"],
    inquiryPrompts: ["배합 목적", "목표 점도", "혼합 조건", "보관 기간"],
    sourceIds: ["rndcircle-technology-summary"],
  },
  {
    slug: "eco-safety-materials",
    name: "친환경·안전 소재",
    englishName: "Eco Safety Materials",
    eyebrow: "친환경·안전",
    shortDefinition:
      "재활용 원료, 보관 안정성, 자연발화 억제 연구를 중심으로 검토하는 안전 소재군",
    summary:
      "재활용 원료의 보관 안정성, 발열 위험 저감, 환경 안전 과제처럼 실제 적용 환경과 안전 기준 확인이 필요한 연구개발 중심 제품군입니다.",
    technologyBasis: "재활용 원료 적용, 자연발화 억제, 보관 안정성, 안전성 검토",
    applications: ["저장 안전", "재활용 소재", "발열 위험 저감", "환경 안전 프로젝트"],
    properties: ["원료 재활용성", "보관 안정성", "자연발화 억제", "저유해성 검토"],
    technicalVariables: ["저장 원료", "보관 방식", "발열 조건", "안전 기준", "적용 환경"],
    benefits: ["친환경 소재 검토", "안전 리스크 평가", "공동개발 가능성"],
    officialDataStatus: "적용 환경과 안전 기준 확인 후 검토 범위를 안내합니다.",
    tdsStatus: "개발 단계와 적용 범위에 따라 자료 제공 가능 여부를 협의합니다.",
    relatedTechnologies: ["재활용 원료 적용", "자연발화 억제"],
    relatedApplicationSlugs: ["energy-storage-safety"],
    inquiryPrompts: ["저장 원료", "보관 환경", "발열 위험", "필요 문서"],
    sourceIds: ["patent-coffee-grounds"],
  },
];

export const technologyPillars = [
  "수용성 고분자",
  "수용성 분산제",
  "Sodium Polyacrylate",
  "CMC·천연검 응용",
  "아크릴계 수지",
  "우레탄계 수지",
  "비닐계 수지",
  "기능성 코팅",
  "접착 시스템",
  "분산 제어",
  "친환경 안전소재",
];

export const industries = [
  {
    title: "건축·방수",
    description: "방수 시트, 차수재, 외피 보호, 차열 코팅처럼 수분과 열 노출이 큰 표면",
  },
  {
    title: "코팅·도료",
    description: "수용성 코팅제, 방식 코팅, 도막 안정성, 표면 보호가 필요한 산업 표면",
  },
  {
    title: "세제·수처리·제지",
    description: "수용성 분산제, 점도 제어, 배합 안정성이 중요한 수계 공정",
  },
  {
    title: "산업용 접착",
    description: "필름, 라벨, 시트, 산업 포장재의 기재 밀착과 박리 안정성",
  },
];

export const productDecisionGuide = [
  {
    question: "적용 조건",
    detail: "산업, 기재, 배합 목적, 사용 환경, 보관 조건을 먼저 확인합니다.",
  },
  {
    question: "성능 항목",
    detail: "점도, 분산 안정성, 접착력, 내수성, 도막 안정성, 표면 보호 성능을 정리합니다.",
  },
  {
    question: "요청 자료",
    detail: "TDS, SDS, 샘플, 시험 조건, 견적, 공동개발 여부를 문의 목적에 맞춰 구분합니다.",
  },
  {
    question: "후속 검토",
    detail: "샘플 적용, 배합 조정, 검증 자료, 공급 가능성 순서로 검토 범위를 좁힙니다.",
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((product) => product.slug === slug);
}
