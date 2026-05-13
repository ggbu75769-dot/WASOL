export type ApplicationRow = {
  application: string;
  materialControl: string;
  useContext: string;
  inquiryFocus: string[];
  relatedProductSlugs: string[];
};

export const applicationRows: ApplicationRow[] = [
  {
    application: "건축 방수 / 차열",
    materialControl: "수성 점착 · 차열 도막 · 방수 계면",
    useContext: "방수 시트, 차수재, 건축 외피, 차열·방수 시공",
    inquiryFocus: ["기재 표면", "외부 노출", "내수성", "차열성", "시공 방식"],
    relatedProductSlugs: ["adhesive-tackifier", "functional-coating"],
  },
  {
    application: "도료 / 코팅",
    materialControl: "분산 안정 · 도막 균일도 · 표면 보호",
    useContext: "코팅액, 도료 배합, 무기 필러, 설비 표면 보호",
    inquiryFocus: ["점도", "분산 안정성", "필러 종류", "건조 조건", "도막 두께"],
    relatedProductSlugs: ["functional-coating", "dispersion-control"],
  },
  {
    application: "포장 / 라벨 / 물류",
    materialControl: "접착 유지력 · 표면 에너지 · 습도 대응",
    useContext: "라벨, 필름, 산업 포장재, 반복 취급 환경",
    inquiryFocus: ["피착재", "초기 점착", "박리 강도", "온습도", "잔사 여부"],
    relatedProductSlugs: ["adhesive-tackifier", "water-based-polymer"],
  },
  {
    application: "에너지 저장 / 자연발화 억제",
    materialControl: "피막 형성 · 친환경 안전 소재 · 표면 안정",
    useContext: "저탄장, 에너지 설비, 분진·발열 위험 표면",
    inquiryFocus: ["대상 원료", "살포 방식", "피막 지속성", "환경 조건", "안전 목표"],
    relatedProductSlugs: ["eco-safety-materials"],
  },
  {
    application: "산업 부품 / 표면처리",
    materialControl: "계면 안정 · 내수성 · 공정 작업성",
    useContext: "금속, 플라스틱, 복합재 표면의 접착·코팅·보호",
    inquiryFocus: ["표면 처리", "건조/경화", "내구 조건", "공정 속도", "물성 우선순위"],
    relatedProductSlugs: ["water-based-polymer", "dispersion-control"],
  },
];
