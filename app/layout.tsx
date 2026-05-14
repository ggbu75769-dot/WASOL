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
    "WARSOL 수용성 고분자 기반 접착, 코팅, 방수, 분산, 친환경 안전소재 솔루션",
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
      "산업의 표면과 안전을 바꾸는 WARSOL 소재 기술",
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
    description: "WARSOL 접착, 코팅, 방수, 분산, 친환경 안전소재",
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
