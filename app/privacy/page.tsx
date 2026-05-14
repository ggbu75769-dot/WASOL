import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";
import { TechnicalInquiryCta } from "@/components/sections/TechnicalInquiryCta";

export const metadata: Metadata = {
  title: "개인정보 안내 | WARSOL",
  description: "WARSOL 개인정보 안내",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="개인정보"
        title="개인정보 안내"
        description="고객 정보 보호와 안전한 문의 운영"
      />

      <Section eyebrow="개인정보" title="고객 정보 보호">
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard title="목적" body="고객 문의 응대와 기술 상담" />
          <DataCard title="수집 항목" body="이름, 회사, 연락처, 문의 내용" />
          <DataCard title="보호" body="고객 정보 보호와 안전한 관리" />
        </div>
      </Section>

      <TechnicalInquiryCta />
    </>
  );
}
