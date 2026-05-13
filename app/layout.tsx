import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { company } from "@/content/company";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.warsolchem.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.englishName} | 수용성 고분자·접착·코팅 소재`,
    template: `%s | ${company.englishName}`,
  },
  description:
    "WARSOL은 수성 고분자, 산업용 점·접착제, 기능성 코팅, 분산 제어, 방수·차열, 친환경 안전 소재를 다루는 B2B 화학 소재 기술 기업입니다.",
  applicationName: "WARSOL Corporate Website",
  authors: [{ name: company.englishName }],
  creator: company.englishName,
  publisher: company.englishName,
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
    languages: {
      ko: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: company.englishName,
    title: `${company.englishName} | Advanced Water-Based Polymer Technology`,
    description:
      "WARSOL technology portfolio for water-based polymer, adhesion, functional coating, dispersion, waterproof/thermal protection, and eco safety materials.",
    images: [
      {
        url: "/og/warsol-og.svg",
        width: 1200,
        height: 630,
        alt: "WARSOL advanced polymer technology visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.englishName} | Advanced Water-Based Polymer Technology`,
    description:
      "Water-based polymer, adhesion, functional coating, dispersion, waterproof/thermal protection, and eco safety material portfolio.",
    images: ["/og/warsol-og.svg"],
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
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
