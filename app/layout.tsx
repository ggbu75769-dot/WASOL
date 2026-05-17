import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { company } from "@/content/company";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warsolchem.co.kr";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const publicAssetUrl = (path: string) => `${normalizedSiteUrl}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.englishName} | 수용성 고분자 기반 산업 소재`,
    template: `%s | ${company.englishName}`,
  },
  description:
    "WARSOL 수용성 고분자, 분산제, 코팅제, 접착·점착 소재 개발 및 생산",
  applicationName: "WARSOL 공식 사이트",
  authors: [{ name: company.englishName }],
  creator: company.englishName,
  publisher: company.englishName,
  icons: {
    icon: publicAssetUrl("/favicon.svg"),
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: company.englishName,
    title: `${company.englishName} | 수용성 고분자 기반 산업 소재`,
    description:
      "수용성 고분자와 산업용 수지로 현장 조건에 맞는 소재를 검토합니다.",
    images: [
      {
        url: publicAssetUrl("/og/warsol-og.svg"),
        width: 1200,
        height: 630,
        alt: "WARSOL 수용성 고분자 기술 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.englishName} | 수용성 고분자 기반 산업 소재`,
    description: "WARSOL 수용성 분산제, 코팅제, 점·접착 소재",
    images: [publicAssetUrl("/og/warsol-og.svg")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StructuredData />
        <div className="page-shell">
          <a href="#main-content" className="skip-link">
            본문으로 건너뛰기
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
