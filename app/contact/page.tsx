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
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "워솔 제품·기술 문의, 샘플·견적 상담 준비, 적용 조건 기반 기술 문의 요약 생성과 백엔드 연동 보류 상태 안내 페이지입니다.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="적용 조건을 정리하면 소재 대화가 빨라집니다."
        description="현재 폼은 실제 이메일을 전송하지 않는 안전한 프론트엔드 문의 UI입니다. 운영 전 공식 이메일 또는 CRM/API 연동이 필요하며, 이 페이지는 기술 상담에 필요한 정보를 빠짐없이 정리하도록 설계되었습니다."
      />

      <Section
        eyebrow="Technical Inquiry Flow"
        title="제품군이 확정되지 않아도 문의를 시작할 수 있습니다."
        description="문의 유형, 기재, 사용 환경, 요구 물성, 샘플 단계를 모아 담당자에게 전달하기 쉬운 요약을 생성합니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.74fr]">
          <Suspense fallback={<div className="surface rounded-lg p-6">문의 폼을 준비하고 있습니다.</div>}>
            <InquiryForm />
          </Suspense>

          <aside className="grid gap-4">
            <InquiryPreparationVisual />
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
        description="백엔드가 연결되기 전에는 문의 내용을 로컬 화면에서 요약하고, 운영팀이 복사해 공식 채널로 전달할 수 있는 상태까지만 제공합니다."
        className="bg-[var(--bg-soft)]"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard
            title="Email / CRM backend"
            body="아직 연결되지 않았습니다. 공식 이메일, CRM, 폼 API, 스팸 방지 정책이 제공되면 어댑터를 추가할 수 있습니다."
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
          <DataCard
            title="Inquiry summary"
            body="프론트엔드에서 기술 조건 요약을 생성합니다. 이 요약은 실제 전송 증거가 아니라 문의 준비물입니다."
            aside={<EvidenceBadge status="local ui only" />}
          />
          <DataCard
            title="Address / map"
            body="공개 자료 간 주소가 상이하므로 지도 임베드와 LocalBusiness address는 공식 확인 전 보류합니다."
            aside={<EvidenceBadge status="pending official confirmation" />}
          />
        </div>
      </Section>

      <Section
        eyebrow="Backend Adapter Notes"
        title="향후 연동 시 필요한 데이터 계약"
        description="현재 폼 필드는 이메일 템플릿, CRM 리드, 샘플 상담 티켓으로 변환하기 쉬운 구조로 유지합니다."
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
              value: "적용 산업, 기재, 환경, 요구 물성, 현재 단계",
              note: "제품 추천보다 상담 라우팅과 샘플 조건 파악에 우선 사용합니다.",
            },
            {
              label: "Routing",
              value: "문의 유형, 제품군 선택",
              note: "영업, R&D, 제품, 샘플 담당자 분기 기준으로 사용할 수 있습니다.",
            },
          ]}
        />
      </Section>

      <Section>
        <OfficialAssetNeeded title="문의 운영과 런칭 전에 필요한 공식 자료" />
      </Section>
    </>
  );
}
