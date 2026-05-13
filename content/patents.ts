export type PatentItem = {
  year: string;
  title: string;
  publication: string;
  summary: string;
  problem: string;
  materialApproach: string;
  applicationLink: string;
  limitNote: string;
  sourceId: string;
  confidenceLabel: string;
};

export const patentTimeline: PatentItem[] = [
  {
    year: "2008",
    title: "수성 아크릴계 에멀젼 방수성 점착제",
    publication: "KR100865482B1",
    summary:
      "방수 시트나 차수재 부착을 위한 내수성·방수성 개선 아크릴계 에멀젼 점착제 특허입니다.",
    problem: "방수 시트와 차수재가 습기 조건에서 접착 신뢰성을 유지해야 하는 문제.",
    materialApproach: "수성 아크릴계 에멀젼 점착제 조성으로 내수성과 방수성을 함께 검토.",
    applicationLink: "건축 방수, 차수재, 산업용 시트 접착 문의의 근거 축.",
    limitNote: "상용 grade name과 시험값은 공식 TDS 확인 전 표시하지 않습니다.",
    sourceId: "patent-waterproof-acrylic",
    confidenceLabel: "Patent database",
  },
  {
    year: "2020",
    title: "고기능성 차열도료 조성물 및 차열방수 시공방법",
    publication: "KR102068982B1",
    summary:
      "수성 아크릴계 에멀전 수지, 차열성 수지, 중공필러 등을 포함하는 차열·방수 소재 특허공보입니다.",
    problem: "건축 외피나 방수 시공에서 열 저감과 방수 도막 성능을 함께 요구하는 문제.",
    materialApproach: "수성 수지, 차열성 수지, 중공필러 등 도막 구성 요소를 조합.",
    applicationLink: "차열도료, 차열방수, 표면 보호 코팅 문의의 근거 축.",
    limitNote: "차열 성능 수치와 시공 조건은 공식 시험자료 수령 후 확정해야 합니다.",
    sourceId: "patent-thermal-coating",
    confidenceLabel: "Patent PDF",
  },
  {
    year: "2024",
    title: "커피찌꺼기를 이용한 친환경 자연발화억제제",
    publication: "KR102625026B1",
    summary:
      "커피찌꺼기와 수성 수지를 활용하여 적재 석탄 표면에 피막을 형성하는 자연발화 억제 소재 특허입니다.",
    problem: "적재 석탄이나 분진성 원료 표면의 산화·발열·자연발화 위험을 낮춰야 하는 문제.",
    materialApproach: "커피찌꺼기와 수성 수지 기반 피막 형성으로 표면 안정성을 검토.",
    applicationLink: "에너지 저장, 저탄장 안전, 친환경 산업 안전 소재 문의의 근거 축.",
    limitNote: "상용 공급 범위와 규제 문서는 공식 자료 확인 전 확정하지 않습니다.",
    sourceId: "patent-coffee-grounds",
    confidenceLabel: "Patent database",
  },
];

export const researchThemes = [
  {
    title: "Water-Based Conversion",
    body: "유성 소재 의존도를 줄이고 수성 고분자와 에멀젼 시스템으로 산업 적용성을 확보하는 방향.",
  },
  {
    title: "Surface Reliability",
    body: "습기, 열, 표면 에너지, 도막 균일도처럼 현장 성능을 좌우하는 조건을 소재 설계 변수로 관리.",
  },
  {
    title: "Eco-Safety Application",
    body: "재활용 원료, 자연발화 억제, 저유해성 공정처럼 안전과 환경 문제를 소재 기술로 연결.",
  },
];

export const researchPathway = [
  {
    title: "Public Evidence",
    body: "공개 기업 DB와 특허 DB에서 확인 가능한 사실만 우선 노출합니다.",
  },
  {
    title: "Material Problem",
    body: "특허 제목을 단순 나열하지 않고 방수, 차열, 자연발화 억제처럼 해결하려는 문제로 번역합니다.",
  },
  {
    title: "Application Brief",
    body: "방문자가 적용 산업, 기재, 요구 물성을 정리해 문의로 이동할 수 있게 연결합니다.",
  },
  {
    title: "Official Upgrade",
    body: "공식 TDS, 특허 목록, 인증서가 제공되면 현재의 보수적 표현을 출시용 근거 문구로 강화합니다.",
  },
];
