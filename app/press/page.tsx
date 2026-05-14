import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "언론보도 | WARSOL",
  description: "WARSOL 언론보도 및 보도자료",
};

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="PRESS"
        title="WARSOL Press"
        description="News, Media, Company Story"
      />

      <Section eyebrow="Press Center" title="WARSOL Newsroom">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="Company" body="WARSOL 기업 소개와 소재 기술 스토리" />
          <DataCard title="Technology" body="수용성 고분자, 접착, 코팅, 분산 기술" />
          <DataCard title="Media Contact" body="보도자료, 인터뷰, 기업자료 문의" />
        </div>
      </Section>
    </>
  );
}
