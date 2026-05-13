import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { OfficialAssetNeeded } from "@/components/sections/OfficialAssetNeeded";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { EvidenceBadge } from "@/components/ui/EvidenceBadge";
import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { InquiryPreparationVisual } from "@/components/visuals/InquiryPreparationVisual";
import { TechnicalVariableMapVisual } from "@/components/visuals/V5EnterpriseVisuals";
import { backendBlockedCopy } from "@/content/inquiry";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "기술 문의 준비 | WARSOL",
  description:
    "제품군, 적용 산업, 기재, 사용 환경, 요구 물성, 샘플/수량/일정을 정리해 WARSOL 기술 상담 요약을 생성합니다. 실제 이메일 전송은 아직 연결되지 않았습니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="적용 조건을 정리하면 소재 대화가 빨라집니다."
        description={backendBlockedCopy}
      />

      <Section
        eyebrow="Technical Inquiry Flow"
        title="단순 문의 폼이 아니라 기술 상담 요약 도구입니다."
        description="문의 유형, 제품군, 적용 산업, 기재, 사용 환경, 요구 물성, 샘플/수량/일정을 모아 복사하거나 인쇄할 수 있는 요약을 생성합니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.74fr]">
          <Suspense fallback={<div className="surface rounded-lg p-6">문의 폼을 준비하고 있습니다.</div>}>
            <InquiryForm />
          </Suspense>

          <aside className="grid gap-4">
            <InquiryPreparationVisual />
            <TechnicalVariableMapVisual />
            <div className="surface rounded-lg p-6">
              <p className="mono-label">Public DB Contact</p>
              <div className="mt-5 grid gap-3 text-[var(--muted-strong)]">
                <a href={`tel:${company.contact.phone}`} className="text-2xl font-black text-[var(--brand-navy)]">
                  {company.contact.phone}
                </a>
                <p>Fax {company.contact.fax}</p>
                <a href={company.contact.website} className="link-underlined">
                  {company.contact.website}
                </a>
              </div>
              <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{company.contact.note}</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Contact Readiness"
        title="실제 전송 성공을 가장하지 않습니다."
        description="백엔드가 연결되기 전에는 문의 내용을 로컬 화면에서 요약하고, 운영자가 복사해 공식 채널로 전달할 수 있는 상태까지만 제공합니다."
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard
            title="Email / CRM backend"
            body="아직 연결되지 않았습니다. 공식 이메일, CRM, API, 스팸 방지 정책이 준비되면 adapter를 추가할 수 있습니다."
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
          <DataCard
            title="Inquiry summary"
            body="프론트엔드에서 기술 조건 요약을 생성합니다. 이 요약은 실제 전송 증거가 아니라 문의 준비물입니다."
            aside={<EvidenceBadge status="local ui only" />}
          />
          <DataCard
            title="Copy / print"
            body="요약 생성 후 복사 또는 인쇄할 수 있습니다. 브라우저 권한에 따라 클립보드 복사는 차단될 수 있습니다."
            aside={<EvidenceBadge status="local ui only" />}
          />
        </div>
      </Section>

      <Section
        eyebrow="Backend Adapter Notes"
        title="향후 연동 시 필요한 데이터 계약"
        description="현재 프론트엔드는 이메일 템플릿, CRM 리드, 샘플 상담 요청으로 변환하기 쉬운 구조를 유지합니다."
      >
        <SpecTable
          columns={["Field group", "Collected data", "Adapter note"]}
          rows={[
            {
              label: "Requester",
              value: "성함, 회사/기관, 이메일, 연락처",
              note: "업무용 이메일 검증과 개인정보 처리 고지가 추가되어야 합니다.",
            },
            {
              label: "Technical condition",
              value: "제품군, 적용 산업, 기재, 환경, 요구 물성, 수량/일정",
              note: "제품 추천보다 상담 라우팅과 샘플 조건 파악에 먼저 사용합니다.",
            },
            {
              label: "Routing",
              value: "문의 유형, 제품군, 적용 산업 slug",
              note: "영업, R&D, 제품, 샘플 담당자 분기 기준으로 사용할 수 있습니다.",
            },
          ]}
        />
      </Section>

      <Section>
        <OfficialAssetNeeded title="문의 운영과 연동 전에 필요한 공식 자료" />
      </Section>
    </>
  );
}
