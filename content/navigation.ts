export type NavigationChild = {
  href: string;
  label: string;
  description?: string;
};

export type NavigationItem = {
  href: string;
  label: string;
  children?: NavigationChild[];
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "홈" },
  {
    href: "/company",
    label: "회사",
    children: [
      { href: "/company/ceo-message", label: "대표 메시지" },
      { href: "/company/history", label: "회사 개요와 위치" },
      { href: "/company/vision", label: "사업 방향" },
    ],
  },
  {
    href: "/business",
    label: "사업",
    children: [
      { href: "/technology", label: "기술" },
      { href: "/products", label: "제품" },
      { href: "/rnd", label: "연구개발" },
    ],
  },
  {
    href: "/support",
    label: "고객지원",
    children: [
      { href: "/notice", label: "공지사항" },
      { href: "/press", label: "뉴스룸" },
      { href: "/careers", label: "채용" },
      { href: "/contact", label: "기술 문의" },
    ],
  },
];
