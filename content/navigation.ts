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
      { href: "/company/ceo-message", label: "CEO 소개 및 메시지" },
      { href: "/company/history", label: "회사연혁 및 소개" },
      { href: "/company/vision", label: "회사 VISION" },
    ],
  },
  {
    href: "/business",
    label: "BUSINESS",
    children: [
      { href: "/technology", label: "기술" },
      { href: "/products", label: "제품" },
      { href: "/rnd", label: "연구개발" },
    ],
  },
  {
    href: "/support",
    label: "문의",
    children: [
      { href: "/notice", label: "공지사항" },
      { href: "/press", label: "언론보도" },
      { href: "/careers", label: "채용" },
      { href: "/contact", label: "문의" },
    ],
  },
];
