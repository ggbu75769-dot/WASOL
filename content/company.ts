import type { SourceConfidence } from "./source-ledger";

export const company = {
  legalName: "주식회사 워솔",
  englishName: "WARSOL Inc.",
  sourceDisplayName: "WARSOL.,Inc",
  representative: "이창주",
  tagline: "산업의 표면과 안전을 바꾸는 수용성 고분자 기술",
  englishTagline: "Advanced Water-Based Polymer Technology for Industrial Performance",
  shortDescription:
    "워솔은 수용성 고분자와 산업용 특수 수지 기술을 기반으로 점·접착제, 기능성 코팅, 분산 제어, 친환경 소재 응용을 다루는 B2B 화학 소재 기술 기업입니다.",
  positioning:
    "아크릴·우레탄·비닐 수지 플랫폼을 산업 현장의 접착, 코팅, 방수, 차열, 분산, 안전 소재 요구에 맞게 설계하는 R&D 중심 소재 파트너.",
  founded: {
    label: "공개 DB 등록일",
    value: "2005.09.23",
    sourceId: "bizno-registration-contact",
    confidence: "public database" as SourceConfidence,
  },
  contact: {
    phone: "031-498-1405",
    fax: "031-433-5706",
    website: "http://www.warsolchem.co.kr",
    email: null,
    sourceId: "bizno-registration-contact",
    note: "공개 기업 DB 기준 연락처입니다. 공식 자료로 재확인 후 운영 반영을 권장합니다.",
  },
  addressRecords: [
    {
      label: "공개 기업 DB 주소",
      value: "경기도 시흥시 공단2대로139번길 10 정왕동 시화공단2마711호",
      sourceId: "rndcircle-address",
      confidence: "public database" as SourceConfidence,
    },
    {
      label: "특허/채용 DB에서 관찰된 주소",
      value: "경기도 화성시 서신면 전곡산단4길 43",
      sourceId: "jobplanet-history-unverified",
      confidence: "unverified" as SourceConfidence,
    },
  ],
  values: [
    {
      title: "Surface Performance",
      body: "접착, 코팅, 방수, 분산처럼 표면에서 성능이 결정되는 산업 소재 요구를 화학 설계로 다룹니다.",
    },
    {
      title: "Water-Based Direction",
      body: "수용성 고분자와 수성 수지 기술을 중심으로 현장 적용성과 환경 부담 저감을 함께 고려합니다.",
    },
    {
      title: "Patent-Led R&D",
      body: "공개 특허로 확인되는 점착제, 차열도료, 자연발화 억제 소재 축을 기술 신뢰의 중심에 둡니다.",
    },
  ],
  operatingPrinciples: [
    {
      title: "조건을 먼저 묻는 소재 상담",
      body: "제품명보다 적용 산업, 기재 표면, 요구 물성, 온습도, 공정 조건을 먼저 확인해야 정확한 소재 대화가 가능합니다.",
    },
    {
      title: "확인 가능한 근거 중심의 공개 카피",
      body: "공개 DB와 특허 DB로 확인 가능한 내용은 사용하되, 고객사·인증·수치·공장 사진처럼 공식 자료가 필요한 항목은 보류합니다.",
    },
    {
      title: "수성 전환과 산업 안전의 균형",
      body: "수용성 고분자, 기능성 코팅, 친환경 안전 소재를 현장 적용성과 함께 검토하는 방향을 유지합니다.",
    },
  ],
  sourceBackedFacts: [
    {
      claim: "법인명 / 영문명 / 대표자",
      status: "공개 기업 DB 기반",
      use: "회사 소개와 푸터에 보수적으로 사용",
      sourceId: "bizno-company-identity",
    },
    {
      claim: "주요제품: 수용성고분자",
      status: "공개 기업 DB 기반",
      use: "홈페이지 핵심 포지셔닝에 사용",
      sourceId: "bizno-business-fields",
    },
    {
      claim: "아크릴·우레탄·비닐 수지 기반 점착제, 접착제, 기능성 코팅제, 분산제",
      status: "공개 기술 DB 기반",
      use: "제품/기술 taxonomy에 사용",
      sourceId: "rndcircle-technology-summary",
    },
    {
      claim: "방수성 점착제, 차열도료, 자연발화억제제 특허 축",
      status: "특허 DB 기반",
      use: "R&D/제품 근거로 사용",
      sourceId: "patent-waterproof-acrylic",
    },
  ],
  officialDataRequests: [
    "공식 CI/로고 원본 파일",
    "확정 법인 표기, 주소, 대표 연락처",
    "제품 등급명, TDS, 시험 조건",
    "공식 제품·설비·연구소 사진",
    "인증서, 고객사, 납품 사례 공개 가능 범위",
    "문의 이메일, CRM, 폼 API 또는 담당자 라우팅",
  ],
  history: [
    {
      year: "2005",
      title: "법인 등록 정보 공개",
      body: "공개 기업 DB에 2005년 9월 23일 등록일이 기재되어 있습니다.",
      sourceId: "bizno-registration-contact",
      status: "source-backed",
    },
    {
      year: "2008",
      title: "수성 아크릴계 에멀젼 방수성 점착제 특허",
      body: "내수성 및 방수성이 개선된 수성 아크릴계 에멀젼 방수용 점착제 특허에 워솔이 공동 원출원인으로 표시됩니다.",
      sourceId: "patent-waterproof-acrylic",
      status: "patent-backed",
    },
    {
      year: "2020",
      title: "차열도료·차열방수 특허 포트폴리오",
      body: "고기능성 차열도료 조성물 및 차열방수 시공방법 특허공보에 워솔이 특허권자로 함께 기재되어 있습니다.",
      sourceId: "patent-thermal-coating",
      status: "patent-backed",
    },
    {
      year: "2024",
      title: "커피찌꺼기 기반 친환경 자연발화억제제 특허",
      body: "커피찌꺼기를 이용한 친환경 자연발화억제제 및 사용방법 특허의 원출원인으로 워솔이 표시됩니다.",
      sourceId: "patent-coffee-grounds",
      status: "patent-backed",
    },
  ],
};
