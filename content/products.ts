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
    name: "접착 및 점착 소재",
    englishName: "Adhesion Systems",
    eyebrow: "접착",
    shortDefinition: "기재와 계면 안정성을 중심으로 한 수용성 접착 소재",
    summary: "방수 시트, 차수재, 산업용 라벨, 필름 적용을 위한 접착 및 점착 소재 라인",
    technologyBasis: "수용성 아크릴계 수지, 계면 안정화, 내수성 설계",
    applications: ["방수 시트", "차수재", "산업용 라벨", "건축 마감재"],
    properties: ["내수성", "초기 점착", "박리 안정성", "계면 접착"],
    technicalVariables: ["기재 표면", "수분 노출", "도포 방식", "초기 점착", "박리 강도"],
    benefits: ["소재 적용성", "공정 안정성", "품질 데이터"],
    officialDataStatus: "제품 등급과 적용 분야",
    tdsStatus: "TDS, SDS, 시험자료",
    relatedTechnologies: ["접착 계면 설계", "수용성 고분자"],
    relatedApplicationSlugs: ["building-envelope", "packaging-label"],
    inquiryPrompts: ["기재 종류", "실내외 노출", "점착과 박리 수준", "샘플 단계"],
    sourceIds: ["patent-waterproof-acrylic", "rndcircle-technology-summary"],
  },
  {
    slug: "functional-coatings",
    name: "기능성 코팅 소재",
    englishName: "Functional Coatings",
    eyebrow: "코팅",
    shortDefinition: "방수, 차열, 표면 보호를 위한 수용성 코팅 소재",
    summary: "건축 외피, 설비 표면, 도료 배합에 적용되는 기능성 코팅 소재 라인",
    technologyBasis: "수용성 바인더, 필름 형성, 표면 보호, 기능성 첨가 설계",
    applications: ["건축 외피", "방수 시공", "산업 설비 표면", "기능성 도료 배합"],
    properties: ["차열", "방수", "필름 균일성", "표면 보호"],
    technicalVariables: ["필름 두께", "건조 조건", "외부 노출", "차열 목표", "온습도"],
    benefits: ["도막 안정성", "표면 보호", "품질 균일성"],
    officialDataStatus: "코팅 소재 포트폴리오",
    tdsStatus: "TDS, SDS, 시험자료",
    relatedTechnologies: ["기능성 코팅", "방수 및 차열 보호"],
    relatedApplicationSlugs: ["building-envelope", "coating-paint"],
    inquiryPrompts: ["필름 목표", "건조와 경화 조건", "실외 노출", "차열과 방수 우선순위"],
    sourceIds: ["patent-thermal-coating", "rndcircle-technology-summary"],
  },
  {
    slug: "waterproof-thermal-protection",
    name: "방수 및 차열 보호 소재",
    englishName: "Waterproof and Thermal Protection",
    eyebrow: "보호",
    shortDefinition: "건축 외피와 산업 표면을 위한 방수 및 차열 보호 소재",
    summary: "기재, 도막, 외부 환경 조건을 연결하는 방수 및 차열 보호 소재 라인",
    technologyBasis: "아크릴계 방수 점착, 기능성 차열 코팅, 계면 내구성",
    applications: ["건축 방수", "차열 마감", "콘크리트 보호", "외피 유지보수"],
    properties: ["방수 계면", "열 반사", "균열 대응", "실외 내구"],
    technicalVariables: ["기재", "습기 조건", "시공 온도", "기존 코팅", "검증 방식"],
    benefits: ["외피 보호", "차열 성능", "시공 안정성"],
    officialDataStatus: "보호 소재 포트폴리오",
    tdsStatus: "TDS, SDS, 시험자료",
    relatedTechnologies: ["방수 및 차열 보호", "접착 계면 설계"],
    relatedApplicationSlugs: ["building-envelope", "energy-storage-safety"],
    inquiryPrompts: ["기재와 기존 표면", "습기와 외부 노출", "필름 구조", "시공 일정"],
    sourceIds: ["patent-waterproof-acrylic", "patent-thermal-coating"],
  },
  {
    slug: "dispersion-additives",
    name: "분산 및 첨가제",
    englishName: "Dispersion Additives",
    eyebrow: "분산",
    shortDefinition: "입자 안정성과 작업성을 위한 분산 및 첨가 소재",
    summary: "안료, 필러, 무기 입자, 수지 배합 안정화를 위한 분산 소재 라인",
    technologyBasis: "분산 안정화, 점도 제어, 수용성 시스템 상용성",
    applications: ["도료 배합", "무기 필러 분산", "코팅 안정화", "수지 배합 조정"],
    properties: ["분산 안정성", "점도 관리", "작업성", "표면 균일성"],
    technicalVariables: ["입자 종류", "고형분", "혼합 순서", "저장 안정성", "점도 범위"],
    benefits: ["배합 안정성", "공정 반복성", "표면 균일성"],
    officialDataStatus: "분산 소재 포트폴리오",
    tdsStatus: "TDS, SDS, 시험자료",
    relatedTechnologies: ["분산 제어", "수용성 고분자"],
    relatedApplicationSlugs: ["coating-paint", "packaging-label"],
    inquiryPrompts: ["입자 또는 필러 종류", "목표 점도", "혼합 조건", "보관 기간"],
    sourceIds: ["rndcircle-technology-summary"],
  },
  {
    slug: "eco-safety-materials",
    name: "친환경 안전소재",
    englishName: "Eco Safety Materials",
    eyebrow: "친환경 안전",
    shortDefinition: "재활용 원료와 자연발화 억제 기술을 연결한 안전소재",
    summary: "친환경 원료, 저장 안정성, 자연발화 억제를 중심으로 한 안전소재 라인",
    technologyBasis: "재활용 원료 활용, 자연발화 억제, 보관 안정성",
    applications: ["저장 안전", "재활용 소재", "발열 위험 저감", "환경 안전 프로젝트"],
    properties: ["원료 재활용", "열 안정성", "자연발화 억제", "저유해성"],
    technicalVariables: ["저장 원료", "보관 방식", "발열 조건", "안전성", "적용 환경"],
    benefits: ["친환경 소재", "안전성", "연구개발 확장성"],
    officialDataStatus: "친환경 안전소재 포트폴리오",
    tdsStatus: "TDS, SDS, 시험자료",
    relatedTechnologies: ["친환경 안전소재", "분산 제어"],
    relatedApplicationSlugs: ["energy-storage-safety"],
    inquiryPrompts: ["저장 원료", "보관 환경", "발열 위험", "필요 문서"],
    sourceIds: ["patent-coffee-grounds"],
  },
];

export const technologyPillars = [
  "수용성 고분자",
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
    title: "건축 외피와 방수",
    description: "방수 시트, 외피 차열, 콘크리트 보호 소재",
  },
  {
    title: "코팅과 도료 배합",
    description: "필름 형성, 분산 안정성, 표면 보호 소재",
  },
  {
    title: "포장, 라벨, 산업 접착",
    description: "필름, 라벨, 산업 포장재 접착 소재",
  },
  {
    title: "에너지 저장과 안전",
    description: "저장 환경, 발열, 표면 보호, 안전소재",
  },
];

export const productDecisionGuide = [
  {
    question: "적용 기재",
    detail: "콘크리트, 금속, 플라스틱, 필름, 섬유, 복합재",
  },
  {
    question: "핵심 물성",
    detail: "내수성, 접착 안정성, 차열, 분산 안정성, 열 안정성",
  },
  {
    question: "공정 조건",
    detail: "도포 방식, 건조와 경화 조건, 온도와 습도, 배합 상용성",
  },
  {
    question: "프로젝트 단계",
    detail: "정보 수집, 샘플, 배합 조정, 견적, 문제 해결",
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((product) => product.slug === slug);
}
