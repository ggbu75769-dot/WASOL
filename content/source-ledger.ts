export type SourceConfidence =
  | "official"
  | "public database"
  | "patent database"
  | "unverified";

export type SourceEntry = {
  id: string;
  claim: string;
  sourceTitle: string;
  sourceUrl: string;
  retrievedDate: string;
  confidence: SourceConfidence;
  homepageSafe: boolean;
  note?: string;
};

export const sourceLedger: SourceEntry[] = [
  {
    id: "bizno-company-identity",
    claim:
      "주식회사 워솔은 영문명 WARSOL.,Inc로 표시되며 대표자명은 이창주로 공개되어 있다.",
    sourceTitle: "(주)워솔 - Bizno",
    sourceUrl: "https://bizno.net/article/1408111013",
    retrievedDate: "2026-05-12",
    confidence: "public database",
    homepageSafe: true,
    note: "공식 사업자등록증 또는 회사 소개서로 최종 표기 확인 필요.",
  },
  {
    id: "bizno-business-fields",
    claim:
      "공개 DB 기준 워솔은 제조업/화학물질 및 화학제품 제조업 계열이며 종목은 접착제 및 젤라틴 제조업, 주요제품은 수용성고분자로 기재되어 있다.",
    sourceTitle: "(주)워솔 - Bizno",
    sourceUrl: "https://bizno.net/article/1408111013",
    retrievedDate: "2026-05-12",
    confidence: "public database",
    homepageSafe: true,
  },
  {
    id: "bizno-registration-contact",
    claim:
      "공개 DB 기준 등록일은 2005-09-23이며 전화 031-498-1405, 팩스 031-433-5706, 홈페이지 http://www.warsolchem.co.kr 정보가 표시되어 있다.",
    sourceTitle: "(주)워솔 - Bizno",
    sourceUrl: "https://bizno.net/article/1408111013",
    retrievedDate: "2026-05-12",
    confidence: "public database",
    homepageSafe: false,
    note: "연락처는 문의 페이지에 검증 필요 안내와 함께 사용.",
  },
  {
    id: "rndcircle-technology-summary",
    claim:
      "RnDcircle은 워솔을 아크릴, 우레탄, 비닐 수지 기반 점착제, 접착제, 기능성 코팅제, 분산제 등을 개발·생산하는 화학 소재 기업으로 요약한다.",
    sourceTitle: "(주)워솔 기업 정보 | RnDcircle",
    sourceUrl:
      "https://app.rndcircle.io/company/547c55b3-77c8-5494-9c7b-caebb21bfab3",
    retrievedDate: "2026-05-12",
    confidence: "public database",
    homepageSafe: true,
    note: "고객명, 독보적 경쟁력, 매출 등 고검증 필요 문구는 홈페이지 핵심 카피에서 제외.",
  },
  {
    id: "rndcircle-address",
    claim:
      "RnDcircle은 사업자 주소를 경기도 시흥시 공단2대로139번길 10 정왕동 시화공단2마711호로 표시한다.",
    sourceTitle: "(주)워솔 기업 정보 | RnDcircle",
    sourceUrl:
      "https://app.rndcircle.io/company/547c55b3-77c8-5494-9c7b-caebb21bfab3",
    retrievedDate: "2026-05-12",
    confidence: "public database",
    homepageSafe: false,
    note: "특허/채용 DB의 화성 주소와 상이하므로 공식 확인 전 지도 고정 금지.",
  },
  {
    id: "jobplanet-history-unverified",
    claim:
      "Jobplanet 공개 정보에는 2005년 법인 설립, 2008년 기업부설연구소 설립, 2017년 전곡산업단지 화성공장 입주, 2021년 ISO 9001 인증 등이 표시되어 있다.",
    sourceTitle: "(주)워솔 2026년 기업정보 | Jobplanet",
    sourceUrl:
      "https://www.jobplanet.co.kr/companies/61204/landing/%EC%9B%8C%EC%86%94",
    retrievedDate: "2026-05-12",
    confidence: "unverified",
    homepageSafe: false,
    note: "인증/연혁은 공식 인증서 또는 회사 자료 확인 전 사이트 본문에서 확정 주장하지 않음.",
  },
  {
    id: "patent-waterproof-acrylic",
    claim:
      "KR100865482B1은 주식회사 워솔이 공동 원출원인으로 표시된 '내수성 및 방수성이 개선된 수성 아크릴계 에멀젼 방수성점착제 및 그 제조방법' 특허이다.",
    sourceTitle: "KR100865482B1 - Google Patents",
    sourceUrl: "https://patents.google.com/patent/KR100865482B1/ko",
    retrievedDate: "2026-05-12",
    confidence: "patent database",
    homepageSafe: true,
  },
  {
    id: "patent-thermal-coating",
    claim:
      "KR102068982B1 특허공보에는 주식회사 워솔이 특허권자로 함께 기재된 '고기능성 차열도료 조성물 및 이를 이용한 차열방수 시공방법'이 표시된다.",
    sourceTitle: "등록특허 10-2068982 - Patent PDF",
    sourceUrl:
      "https://patentimages.storage.googleapis.com/b7/61/f4/f546219af3e6d0/KR102068982B1.pdf",
    retrievedDate: "2026-05-12",
    confidence: "patent database",
    homepageSafe: true,
  },
  {
    id: "patent-coffee-grounds",
    claim:
      "KR102625026B1은 주식회사 워솔이 원출원인으로 표시된 '커피찌꺼기를 이용한 친환경 자연발화억제제 및 이의 사용방법' 특허이다.",
    sourceTitle: "KR102625026B1 - Google Patents",
    sourceUrl: "https://patents.google.com/patent/KR102625026B1/ko",
    retrievedDate: "2026-05-12",
    confidence: "patent database",
    homepageSafe: true,
  },
  {
    id: "official-logo-pending",
    claim:
      "공식 로고 원본 파일은 현재 저장소와 공개 검색 결과만으로 확정하지 않았다.",
    sourceTitle: "Local project decision",
    sourceUrl: "F:/WASOL/워솔_계획안.txt",
    retrievedDate: "2026-05-12",
    confidence: "unverified",
    homepageSafe: false,
    note: "임시 SVG 워드마크를 사용하고 공식 CI 파일 수령 후 교체해야 함.",
  },
];

export const getSourceById = (id: string) =>
  sourceLedger.find((entry) => entry.id === id);
