export type ProductCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  applications: string[];
  properties: string[];
  tdsStatus: string;
  inquiryPrompts: string[];
  sourceIds: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "water-based-polymer",
    name: "수용성 고분자 / 수성 수지 플랫폼",
    eyebrow: "Water-Based Polymer",
    summary:
      "워솔의 공개 주요제품으로 확인되는 수용성 고분자를 중심으로 산업용 접착, 코팅, 분산 공정에 맞춘 수성 소재 설계를 제안합니다.",
    applications: ["수성 접착제", "코팅 바인더", "분산 안정화", "저 VOC 소재 전환"],
    properties: ["수성 기반", "공정 적용성", "점도·분산 설계", "환경 부담 저감 방향"],
    tdsStatus: "공식 제품 등급과 TDS 수령 전까지 플랫폼 수준으로 표기합니다.",
    inquiryPrompts: ["목표 고형분/점도", "기존 유성 소재 대체 여부", "건조 조건", "분산 안정성 기준"],
    sourceIds: ["bizno-business-fields", "rndcircle-technology-summary"],
  },
  {
    slug: "adhesive-tackifier",
    name: "산업용 점·접착제",
    eyebrow: "Adhesive & Tackifier",
    summary:
      "아크릴계 에멀젼 점착제와 방수 시트 적용 특허를 기반으로 내수성, 방수성, 접착 유지력이 중요한 산업 현장에 대응합니다.",
    applications: ["방수 시트", "차수 매트", "산업용 라벨", "건축 마감재"],
    properties: ["내수성", "방수성", "점착 유지력", "수성 에멀젼"],
    tdsStatus: "공식 grade name과 박리/점착 시험값은 미확정입니다.",
    inquiryPrompts: ["피착재", "초기 점착/박리 목표", "습도 노출", "잔사 허용 여부"],
    sourceIds: ["patent-waterproof-acrylic", "rndcircle-technology-summary"],
  },
  {
    slug: "functional-coating",
    name: "기능성 코팅제 / 도료",
    eyebrow: "Functional Coating",
    summary:
      "기능성 코팅제와 차열도료 공개 특허 정보를 바탕으로 표면 보호, 열 차단, 방수 성능이 요구되는 적용처를 지원합니다.",
    applications: ["건축 외피", "방수 시공", "산업 설비 표면", "열 저감 코팅"],
    properties: ["차열", "방수", "도막 형성", "표면 보호"],
    tdsStatus: "차열·방수 성능 수치와 시험 조건은 공식 TDS 확인 후 표시합니다.",
    inquiryPrompts: ["도막 두께", "외부 노출", "차열 목표", "방수/균열 조건"],
    sourceIds: ["patent-thermal-coating", "rndcircle-technology-summary"],
  },
  {
    slug: "dispersion-control",
    name: "분산제 / 입자 제어",
    eyebrow: "Dispersion Control",
    summary:
      "분산제와 수지 배합 기술을 통해 코팅, 도료, 에멀젼 시스템에서 입자 안정성과 작업성을 높이는 소재 방향을 제시합니다.",
    applications: ["도료 배합", "코팅액 안정화", "무기 필러 분산", "에멀젼 공정"],
    properties: ["분산 안정성", "작업성", "배합 적합성", "표면 균일도"],
    tdsStatus: "분산제 제품명, 추천 사용량, 호환 원료는 공식 자료 수령 전 보류합니다.",
    inquiryPrompts: ["필러/입자 종류", "전단 조건", "저장 안정성", "점도 변화 허용 범위"],
    sourceIds: ["rndcircle-technology-summary"],
  },
  {
    slug: "eco-safety-materials",
    name: "친환경 안전 소재 응용",
    eyebrow: "Eco & Safety Materials",
    summary:
      "커피찌꺼기 기반 자연발화 억제 특허처럼 재활용 원료와 산업 안전 문제를 연결하는 응용 소재 R&D를 확장합니다.",
    applications: ["저탄장 안전", "분진·자연발화 대응", "자원 재활용 소재", "환경 안전 프로젝트"],
    properties: ["커피찌꺼기 활용", "피막 형성", "자연발화 억제", "친환경 방향"],
    tdsStatus: "상용 적용 범위, 공급 조건, 규제 문서는 공식 확인 전 확정하지 않습니다.",
    inquiryPrompts: ["대상 원료", "살포/도포 방식", "피막 지속성", "환경 안전 목표"],
    sourceIds: ["patent-coffee-grounds"],
  },
];

export const technologyPillars = [
  "Water-Based Polymer",
  "Acrylic Resin",
  "Urethane Resin",
  "Vinyl Resin",
  "Functional Coating",
  "Adhesive & Tackifier",
  "Dispersion Control",
  "Eco Materials",
];

export const industries = [
  {
    title: "Construction & Waterproofing",
    description: "방수 시트, 차수재, 건축 외피, 차열·방수 시공에 필요한 접착·코팅 소재.",
  },
  {
    title: "Coating & Surface Treatment",
    description: "도막 형성, 표면 보호, 분산 안정성이 중요한 도료·코팅 응용.",
  },
  {
    title: "Industrial Parts & Labels",
    description: "습도, 온도, 표면 조건이 까다로운 산업용 접착·라벨·부품 조립 환경.",
  },
  {
    title: "Energy Safety",
    description: "저탄장과 에너지 설비의 자연발화·분진·표면 안정성 이슈에 대응하는 소재.",
  },
  {
    title: "Eco Material Projects",
    description: "수성 전환, 재활용 원료 활용, 저유해성 방향의 소재 개발 프로젝트.",
  },
];

export const productDecisionGuide = [
  {
    question: "어떤 표면 또는 기재에 적용하나요?",
    detail: "콘크리트, 금속, 플라스틱, 필름, 섬유, 석탄 적재 표면처럼 실제 기재 정보를 먼저 정리합니다.",
  },
  {
    question: "가장 중요한 성능은 무엇인가요?",
    detail: "내수성, 접착 유지력, 차열, 분산 안정성, 피막 형성, 저유해성 중 우선순위를 지정합니다.",
  },
  {
    question: "공정 조건은 어떻게 되나요?",
    detail: "도포 방식, 건조/경화 조건, 온습도, 외부 노출, 기존 배합과의 호환성을 함께 전달합니다.",
  },
  {
    question: "현재 단계는 어디인가요?",
    detail: "샘플 검토, 배합 상담, 견적, 공동 개발, 문제 해결 중 어느 단계인지 선택합니다.",
  },
];
