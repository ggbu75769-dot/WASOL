import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { DataCard } from "@/components/ui/DataCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "개인정보·문의 데이터 준비 상태 | WARSOL",
  description:
    "WARSOL 문의 화면의 개인정보, 기술 문의 요약, 이메일/CRM 미연동 상태와 운영 전 확인이 필요한 정책 항목을 설명합니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Readiness"
        title="문의 데이터는 전송 성공으로 가장하지 않습니다."
        description="현재 사이트의 문의 플로우는 기술 상담 요약을 로컬 화면에서 생성하는 프론트엔드 도구이며, 실제 이메일/CRM 전송은 아직 연결되지 않았습니다."
      />
      <Section
        eyebrow="Current State"
        title="운영 전 반드시 확인해야 할 데이터 경계"
        description="정식 출시 전 개인정보 처리방침, 이메일 수신 채널, 보관 기간, 보안/스팸 정책 승인이 필요합니다."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <DataCard
            title="Local summary only"
            body="문의 폼은 입력값으로 요약을 만들지만 서버나 이메일로 전송하지 않습니다."
            items={["No fake send success", "Copy/print only", "Backend blocked state"]}
          />
          <DataCard
            title="Approval needed"
            body="공식 이메일 주소, CRM/API, 개인정보 처리 위탁 여부, 보관 기간이 확정되어야 합니다."
            items={["Official email", "CRM/API", "Privacy approval"]}
          />
          <DataCard
            title="Launch requirement"
            body="운영 전 실제 처리방침과 동의 문구를 회사 승인 자료로 교체해야 합니다."
            items={["Legal review", "Security review", "Spam handling"]}
          />
        </div>
      </Section>
    </>
  );
}
