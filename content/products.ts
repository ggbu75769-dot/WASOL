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
    name: "산업용 점·접착 시스템",
    englishName: "Adhesion Systems",
    eyebrow: "Adhesion / Tackifier",
    shortDefinition: "기재와 사용 환경을 먼저 확인해 접착·점착 조건을 좁히는 수성 소재군입니다.",
    summary:
      "방수 시트, 차수재, 산업용 라벨과 같이 표면 상태와 현장 환경에 따라 성능 판단이 달라지는 적용처를 위한 접착·점착 소재 축입니다.",
    technologyBasis: "수성 고분자, 아크릴계 수지, 계면 안정화, 내수성 설계",
    applications: ["방수 시트", "차수 매트", "산업용 라벨", "건축 마감재"],
    properties: ["내수성", "초기 점착", "박리 안정성", "계면 접착"],
    technicalVariables: ["기재 표면", "수분 노출", "도포 방식", "초기 점착 목표", "박리 강도 확인 방식"],
    benefits: ["제품명보다 적용 조건을 먼저 정리", "샘플 상담에 필요한 변수 누락 감소", "가짜 grade name 없이 상담 가능"],
    officialDataStatus: "공식 grade name, TDS, 시험값은 아직 공개 자료로 확인되지 않아 보류합니다.",
    tdsStatus: "TDS pending: 공식 제품 등급과 시험 조건 수령 후 표시합니다.",
    relatedTechnologies: ["adhesion-engineering", "water-based-polymer"],
    relatedApplicationSlugs: ["building-envelope", "packaging-label"],
    inquiryPrompts: ["기재 종류", "실내/실외 노출", "요구 점착·박리 수준", "샘플 또는 배합 상담 단계"],
    sourceIds: ["patent-waterproof-acrylic", "rndcircle-technology-summary"],
  },
  {
    slug: "functional-coatings",
    name: "기능성 코팅·도료 시스템",
    englishName: "Functional Coatings",
    eyebrow: "Coating / Paint",
    shortDefinition: "차열, 방수, 표면 보호처럼 필름 형성과 계면 안정성이 중요한 코팅 소재군입니다.",
    summary:
      "건축 외피, 장비 표면, 코팅·도료 배합에서 요구되는 필름 형성, 방수성, 차열성, 표면 보호 조건을 기술 상담 언어로 정리합니다.",
    technologyBasis: "수성 바인더, 필름 형성, 표면 에너지 제어, 기능성 첨가 설계",
    applications: ["건축 외피", "방수 시공", "산업 설비 표면", "기능성 도료 배합"],
    properties: ["차열", "방수", "필름 균일성", "표면 보호"],
    technicalVariables: ["도막 두께", "건조 조건", "외부 노출", "요구 차열 수준", "하도·상도 구조"],
    benefits: ["차열·방수 문구를 과장하지 않음", "시험 조건과 현장 조건을 분리", "도막 설계 상담에 바로 연결"],
    officialDataStatus: "차열·방수 성능 수치는 시험 조건 확인 전까지 표시하지 않습니다.",
    tdsStatus: "TDS pending: 공식 성능표와 적용 가이드 수령 후 다운로드를 연결합니다.",
    relatedTechnologies: ["functional-coating", "waterproof-thermal"],
    relatedApplicationSlugs: ["building-envelope", "coating-paint"],
    inquiryPrompts: ["도막 목표", "건조/경화 조건", "실외 노출", "차열·방수 우선순위"],
    sourceIds: ["patent-thermal-coating", "rndcircle-technology-summary"],
  },
  {
    slug: "waterproof-thermal-protection",
    name: "방수·차열 보호 소재",
    englishName: "Waterproof & Thermal Protection",
    eyebrow: "Envelope Protection",
    shortDefinition: "방수 계면과 차열 도막을 함께 검토해야 하는 건축·산업 보호 적용군입니다.",
    summary:
      "방수와 차열은 단일 수치보다 기재, 도포 방식, 외기 노출, 도막 구조가 함께 확인되어야 합니다. 이 페이지는 그 상담 변수를 정리합니다.",
    technologyBasis: "아크릴계 방수 접착, 기능성 차열 코팅, 계면 내구성",
    applications: ["건축 방수", "차열 마감", "콘크리트 보호", "외피 유지보수"],
    properties: ["방수 계면", "열 반사 설계", "균열 대응", "실외 내구 조건"],
    technicalVariables: ["콘크리트/금속/필름 기재", "습기 조건", "시공 온도", "기존 코팅 유무", "요구 보증/검증 방식"],
    benefits: ["방수와 차열 조건을 한 번에 정리", "시공 환경 질문을 상담 전 수집", "현장 변수를 누락하지 않음"],
    officialDataStatus: "시공 사례, 보증 범위, 시험 수치는 공식 자료 수령 전까지 pending 상태입니다.",
    tdsStatus: "TDS pending: 공식 적용처별 사양서 수령 후 업데이트합니다.",
    relatedTechnologies: ["waterproof-thermal", "adhesion-engineering"],
    relatedApplicationSlugs: ["building-envelope", "energy-storage-safety"],
    inquiryPrompts: ["기재와 기존 표면", "습기/열 노출", "도막 구조", "시공 일정"],
    sourceIds: ["patent-waterproof-acrylic", "patent-thermal-coating"],
  },
  {
    slug: "dispersion-additives",
    name: "분산·첨가제 제어",
    englishName: "Dispersion Additives",
    eyebrow: "Dispersion Control",
    shortDefinition: "입자, 점도, 배합 안정성을 중심으로 코팅·도료·수지 시스템을 조율하는 소재군입니다.",
    summary:
      "무기 필러, 안료, 수성 수지 배합에서 분산 안정성, 작업성, 점도 변화를 관리해야 하는 프로젝트에 맞춘 기술 상담 축입니다.",
    technologyBasis: "분산 안정화, 점도 제어, 수성 시스템 호환성, 계면 제어",
    applications: ["도료 배합", "무기 필러 분산", "코팅액 안정화", "수지 배합 조정"],
    properties: ["분산 안정성", "점도 관리", "작업성", "표면 균일성"],
    technicalVariables: ["입자 종류", "고형분", "혼합 순서", "저장 안정성", "점도 허용 범위"],
    benefits: ["배합 문제를 상담 가능한 변수로 전환", "안료·필러 정보를 구조화", "공정 조건 중심으로 문의 가능"],
    officialDataStatus: "구체 additive grade와 배합비는 공식 자료와 NDA 범위 확인 후 표시합니다.",
    tdsStatus: "TDS pending: 배합별 시험 데이터 수령 전까지 다운로드를 제공하지 않습니다.",
    relatedTechnologies: ["dispersion-control", "water-based-polymer"],
    relatedApplicationSlugs: ["coating-paint", "packaging-label"],
    inquiryPrompts: ["입자/필러 종류", "목표 점도", "혼합 조건", "보관 기간"],
    sourceIds: ["rndcircle-technology-summary"],
  },
  {
    slug: "eco-safety-materials",
    name: "친환경 안전 소재 응용",
    englishName: "Eco & Safety Materials",
    eyebrow: "Eco Safety",
    shortDefinition: "재활용 원료, 자연발화 억제, 저유해성 방향의 연구 적용 가능성을 정리하는 소재군입니다.",
    summary:
      "커피 찌꺼기 기반 자연발화 억제처럼 공개 특허로 확인되는 연구 축을 산업 안전과 환경 프로젝트의 상담 언어로 번역합니다.",
    technologyBasis: "재활용 원료 활용, 자연발화 억제, 산업 안전 소재, 환경 부하 저감 방향",
    applications: ["저장 안전", "분진·발열 위험 저감", "재활용 소재 연구", "환경 안전 프로젝트"],
    properties: ["원료 재활용", "열 안정성", "자연발화 억제 방향", "저유해성 목표"],
    technicalVariables: ["대상 원료", "보관 방식", "발열 조건", "규제 문서", "안전성 검증 방법"],
    benefits: ["친환경 문구를 과장하지 않음", "특허와 실제 적용 준비도를 분리", "공식 문서 필요성을 선명하게 표시"],
    officialDataStatus: "규제 문서, 공급 조건, 상용 적용 범위는 공식 확인 전까지 보류합니다.",
    tdsStatus: "TDS pending: 제품화 범위와 SDS/TDS 수령 후 표시합니다.",
    relatedTechnologies: ["eco-safety", "dispersion-control"],
    relatedApplicationSlugs: ["energy-storage-safety"],
    inquiryPrompts: ["대상 원료", "보관/취급 환경", "발열 위험", "요구 문서"],
    sourceIds: ["patent-coffee-grounds"],
  },
];

export const technologyPillars = [
  "Water-Based Polymer",
  "Acrylic Resin",
  "Urethane Resin",
  "Vinyl Resin",
  "Functional Coating",
  "Adhesion Systems",
  "Dispersion Control",
  "Eco Safety Materials",
];

export const industries = [
  {
    title: "Construction & Building Envelope",
    description: "방수 시트, 외피 차열, 콘크리트 보호처럼 현장 조건과 도막 구조가 함께 중요한 적용처입니다.",
  },
  {
    title: "Coating & Paint Formulation",
    description: "필름 형성, 분산 안정성, 표면 보호, 점도 관리가 필요한 도료·코팅 배합 영역입니다.",
  },
  {
    title: "Packaging, Label & Industrial Adhesion",
    description: "필름, 라벨, 산업 포장재의 접착 안정성과 반복 취급 조건을 다루는 적용 영역입니다.",
  },
  {
    title: "Energy Storage & Safety",
    description: "저장 환경, 발열, 표면 보호, 자연발화 억제 가능성을 보수적으로 검토하는 영역입니다.",
  },
];

export const productDecisionGuide = [
  {
    question: "어떤 표면 또는 기재에 적용하나요?",
    detail: "콘크리트, 금속, 플라스틱, 필름, 섬유, 복합재처럼 실제 기재 정보를 먼저 확인합니다.",
  },
  {
    question: "가장 중요한 물성은 무엇인가요?",
    detail: "내수성, 접착 안정성, 차열, 분산 안정성, 열 안정성 중 우선순위를 정리합니다.",
  },
  {
    question: "공정 조건은 어떻게 되나요?",
    detail: "도포 방식, 건조/경화 조건, 온습도, 기존 배합과의 호환성을 함께 전달합니다.",
  },
  {
    question: "현재 단계는 어디인가요?",
    detail: "정보 수집, 샘플 검토, 배합 조정, 견적, 문제 해결 중 어떤 단계인지 선택합니다.",
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((product) => product.slug === slug);
}
