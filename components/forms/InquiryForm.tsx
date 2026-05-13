"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { company } from "@/content/company";
import { productCategories } from "@/content/products";

type FormState = {
  category: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  product: string;
  application: string;
  substrate: string;
  environment: string;
  requiredProperty: string;
  sampleStage: string;
  message: string;
};

const inquiryCategories = [
  "제품 적용 상담",
  "샘플 검토",
  "배합 / 공동 개발",
  "견적 / 공급 가능성",
  "R&D / 특허 기반 기술 문의",
];

const sampleStages = ["정보 수집", "샘플 검토", "배합 조정", "양산 적용 검토", "문제 해결"];

const initialState: FormState = {
  category: "",
  name: "",
  organization: "",
  email: "",
  phone: "",
  product: "",
  application: "",
  substrate: "",
  environment: "",
  requiredProperty: "",
  sampleStage: "",
  message: "",
};

export function InquiryForm() {
  const searchParams = useSearchParams();
  const productFromQuery = searchParams.get("product") ?? "";
  const [form, setForm] = useState<FormState>({
    ...initialState,
    product: productFromQuery,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [summary, setSummary] = useState("");

  const selectedProduct = useMemo(
    () => productCategories.find((item) => item.name === form.product),
    [form.product],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.category.trim()) nextErrors.category = "문의 유형을 선택해 주세요.";
    if (!form.name.trim()) nextErrors.name = "성함을 입력해 주세요.";
    if (!form.organization.trim()) nextErrors.organization = "회사/기관명을 입력해 주세요.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "업무용 이메일 형식을 확인해 주세요.";
    if (!form.application.trim()) nextErrors.application = "적용 산업 또는 사용처를 입력해 주세요.";
    if (!form.substrate.trim()) nextErrors.substrate = "기재 또는 피착재 정보를 입력해 주세요.";
    if (!form.environment.trim()) nextErrors.environment = "온도, 습도, 외부 노출 등 사용 환경을 입력해 주세요.";
    if (!form.requiredProperty.trim()) nextErrors.requiredProperty = "요구 물성을 입력해 주세요.";
    if (form.message.trim().length < 12) nextErrors.message = "문의 내용을 12자 이상 입력해 주세요.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSummary("");
    if (!validate()) return;

    const inquirySummary = [
      `[WARSOL 기술 문의] ${form.category}`,
      `성함: ${form.name}`,
      `회사/기관: ${form.organization}`,
      `이메일: ${form.email}`,
      `연락처: ${form.phone || "미기재"}`,
      `문의 유형: ${form.category}`,
      `제품군: ${form.product || "미정 / 상담 필요"}`,
      selectedProduct ? `제품 맥락: ${selectedProduct.eyebrow}` : "",
      `적용 산업/사용처: ${form.application}`,
      `기재/피착재: ${form.substrate}`,
      `사용 환경: ${form.environment}`,
      `요구 물성: ${form.requiredProperty}`,
      `현재 단계: ${form.sampleStage || "미기재"}`,
      `문의 내용: ${form.message}`,
      "",
      "전송 상태: 이메일/CRM 백엔드가 아직 연결되지 않아 실제 전송은 수행하지 않았습니다.",
    ]
      .filter(Boolean)
      .join("\n");

    setSummary(inquirySummary);
  };

  return (
    <form onSubmit={handleSubmit} className="surface grid gap-5 rounded-lg p-6" noValidate>
      <Field label="문의 유형" fieldId="category" error={errors.category}>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={(event) => updateField("category", event.target.value)}
          className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
        >
          <option value="">문의 유형 선택</option>
          {inquiryCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="성함" fieldId="name" error={errors.name}>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            autoComplete="name"
          />
        </Field>
        <Field label="회사/기관" fieldId="organization" error={errors.organization}>
          <input
            id="organization"
            name="organization"
            value={form.organization}
            onChange={(event) => updateField("organization", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            autoComplete="organization"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="이메일" fieldId="email" error={errors.email}>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field label="연락처" fieldId="phone">
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="제품군 선택(선택)" fieldId="product">
          <select
            id="product"
            name="product"
            value={form.product}
            onChange={(event) => updateField("product", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          >
            <option value="">제품군 미정 / 상담 필요</option>
            {productCategories.map((category) => (
              <option key={category.slug} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="현재 단계(선택)" fieldId="sampleStage">
          <select
            id="sampleStage"
            name="sampleStage"
            value={form.sampleStage}
            onChange={(event) => updateField("sampleStage", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          >
            <option value="">단계 선택</option>
            {sampleStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="적용 산업 / 사용처" fieldId="application" error={errors.application}>
          <input
            id="application"
            name="application"
            value={form.application}
            onChange={(event) => updateField("application", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 건축 방수 시트, 도료 배합, 저탄장 안전"
          />
        </Field>
        <Field label="기재 / 피착재" fieldId="substrate" error={errors.substrate}>
          <input
            id="substrate"
            name="substrate"
            value={form.substrate}
            onChange={(event) => updateField("substrate", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 콘크리트, PET 필름, 금속, 석탄 표면"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="사용 환경" fieldId="environment" error={errors.environment}>
          <input
            id="environment"
            name="environment"
            value={form.environment}
            onChange={(event) => updateField("environment", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 외부 노출, 고습, 열 노출, 도포 방식"
          />
        </Field>
        <Field label="요구 물성" fieldId="requiredProperty" error={errors.requiredProperty}>
          <input
            id="requiredProperty"
            name="requiredProperty"
            value={form.requiredProperty}
            onChange={(event) => updateField("requiredProperty", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 내수성, 차열, 분산 안정성, 피막 형성"
          />
        </Field>
      </div>

      <Field label="문의 내용" fieldId="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          placeholder="현재 문제, 목표 성능, 샘플/견적 필요 여부를 적어 주세요."
        />
      </Field>

      <div className="rounded-md border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)] p-4 text-sm leading-6 text-[var(--muted-strong)]">
        이메일/CRM 백엔드가 아직 연결되지 않았습니다. 제출 시 실제 전송 성공을 가장하지 않고, 검증된 문의 요약만 생성합니다.
        운영 전 공식 이메일 또는 폼 API 연동이 필요합니다.
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit">문의 요약 생성</Button>
        <a
          href={`tel:${company.contact.phone}`}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-bold text-[var(--brand-navy)] transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
        >
          공개 DB 전화 문의
        </a>
      </div>

      {summary && (
        <div className="rounded-lg border border-[rgba(18,168,199,0.3)] bg-[rgba(18,168,199,0.07)] p-4">
          <p className="text-sm font-bold text-[var(--brand-navy)]">문의 요약</p>
          <pre data-inquiry-summary className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[var(--muted-strong)]">{summary}</pre>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  fieldId,
  error,
  children,
}: {
  label: string;
  fieldId: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={fieldId} className="text-sm font-bold text-[var(--brand-navy)]">
        {label}
      </label>
      {children}
      {error && (
        <span data-field-error className="text-sm font-semibold text-[var(--danger)]">
          {error}
        </span>
      )}
    </div>
  );
}
