export type TechnologyPlatform = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  variables: string[];
  applications: string[];
  sourceIds: string[];
};

export const technologyPlatforms: TechnologyPlatform[] = [
  {
    id: "water-based-polymer",
    eyebrow: "Water-Based Polymer Platform",
    title: "수용성 고분자와 수성 수지 기반",
    summary:
      "공개 DB에서 확인되는 수용성 고분자 중심성을 바탕으로 접착, 코팅, 분산 공정에 적용 가능한 수성 소재 설계 언어를 제공합니다.",
    variables: ["수지 계열", "고형분", "점도", "분산 안정성", "공정 물성"],
    applications: ["수성 접착제", "코팅 바인더", "저 VOC 전환", "에멀젼 공정"],
    sourceIds: ["bizno-business-fields", "rndcircle-technology-summary"],
  },
  {
    id: "adhesion-engineering",
    eyebrow: "Adhesion Engineering",
    title: "점착·접착 계면 설계",
    summary:
      "수성 아크릴계 에멀젼 방수성 점착제 특허처럼 습기, 표면 에너지, 박리 조건이 성능을 좌우하는 계면 문제를 다룹니다.",
    variables: ["초기 점착", "박리 강도", "내수성", "피착재", "잔사 여부"],
    applications: ["방수 시트", "차수재", "산업 라벨", "필름 접착"],
    sourceIds: ["patent-waterproof-acrylic", "rndcircle-technology-summary"],
  },
  {
    id: "functional-coating",
    eyebrow: "Functional Coating",
    title: "도막 형성과 표면 기능 제어",
    summary:
      "기능성 코팅제와 차열도료 공개 특허를 기반으로 표면 보호, 열 저감, 방수 성능을 하나의 도막 시스템으로 검토합니다.",
    variables: ["도막 두께", "차열성", "방수성", "표면 보호", "시공 조건"],
    applications: ["건축 외피", "방수 시공", "산업 설비 표면", "열 저감 코팅"],
    sourceIds: ["patent-thermal-coating", "rndcircle-technology-summary"],
  },
  {
    id: "dispersion-control",
    eyebrow: "Dispersion & Polymer Control",
    title: "분산 안정성과 배합 작업성",
    summary:
      "도료, 코팅액, 에멀젼 시스템에서 입자 안정성, 점도, 필러 호환성을 함께 보며 생산 공정의 반복성을 높이는 방향입니다.",
    variables: ["입자 안정성", "무기 필러", "전단 조건", "점도 변화", "저장 안정성"],
    applications: ["도료 배합", "코팅액 안정화", "무기 필러 분산", "에멀젼 공정"],
    sourceIds: ["rndcircle-technology-summary"],
  },
  {
    id: "waterproof-thermal",
    eyebrow: "Waterproof / Thermal Protection",
    title: "방수·차열 보호 시스템",
    summary:
      "방수성과 차열성을 단일 홍보 문구로 과장하지 않고, 기재 표면·도막·외부 환경 조건이 함께 맞아야 하는 보호 시스템으로 설명합니다.",
    variables: ["외부 노출", "온도", "습도", "도막 균열", "시공 방식"],
    applications: ["차열 방수", "건축 외피", "설비 보호", "에너지 저감 프로젝트"],
    sourceIds: ["patent-thermal-coating", "patent-waterproof-acrylic"],
  },
];

export const materialProcessSteps = [
  {
    step: "01",
    title: "Requirement Mapping",
    body: "적용 산업, 기재 표면, 요구 물성, 온습도, 시공 조건을 먼저 정의합니다.",
  },
  {
    step: "02",
    title: "Polymer / Resin Direction",
    body: "수성 고분자, 아크릴·우레탄·비닐 수지, 분산제, 기능성 첨가 축을 검토합니다.",
  },
  {
    step: "03",
    title: "Film & Interface Review",
    body: "도막 형성, 계면 접착, 입자 안정성, 방수·차열 목표를 적용 조건과 함께 맞춥니다.",
  },
  {
    step: "04",
    title: "Sample Condition Brief",
    body: "샘플, 배합 상담, 견적, 공동 개발 중 어느 단계인지 정리해 다음 대화를 준비합니다.",
  },
];

export const inquiryVariables = [
  "적용 산업",
  "피착재/기재",
  "요구 물성",
  "온도·습도",
  "시공/도포 방식",
  "샘플 단계",
  "현재 문제",
  "목표 일정",
];
