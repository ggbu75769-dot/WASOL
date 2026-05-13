"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { applicationGuides } from "@/content/applications";
import { backendBlockedCopy, inquiryCategories, quantityTimelineOptions, sampleStages } from "@/content/inquiry";
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
  quantityTimeline: string;
  sampleStage: string;
  message: string;
};

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
  quantityTimeline: "",
  sampleStage: "",
  message: "",
};

export function InquiryForm() {
  const searchParams = useSearchParams();
  const productFromQuery = searchParams.get("product") ?? "";
  const applicationFromQuery = searchParams.get("application") ?? "";
  const [form, setForm] = useState<FormState>({
    ...initialState,
    product: productCategories.some((item) => item.slug === productFromQuery) ? productFromQuery : "",
    application: applicationGuides.some((item) => item.slug === applicationFromQuery) ? applicationFromQuery : "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [summary, setSummary] = useState("");
  const [copyState, setCopyState] = useState("Copy summary");

  const selectedProduct = useMemo(
    () => productCategories.find((item) => item.slug === form.product),
    [form.product],
  );
  const selectedApplication = useMemo(
    () => applicationGuides.find((item) => item.slug === form.application),
    [form.application],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setCopyState("Copy summary");
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.category.trim()) nextErrors.category = "문의 유형을 선택해 주세요.";
    if (!form.product.trim()) nextErrors.product = "제품군을 선택해 주세요.";
    if (!form.application.trim()) nextErrors.application = "적용 산업을 선택해 주세요.";
    if (!form.name.trim()) nextErrors.name = "성함을 입력해 주세요.";
    if (!form.organization.trim()) nextErrors.organization = "회사/기관명을 입력해 주세요.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "업무용 이메일 형식을 확인해 주세요.";
    if (!form.substrate.trim()) nextErrors.substrate = "기재 또는 소재 정보를 입력해 주세요.";
    if (!form.environment.trim()) nextErrors.environment = "온도, 습도, 외부 노출 등 사용 환경을 입력해 주세요.";
    if (!form.requiredProperty.trim()) nextErrors.requiredProperty = "요구 물성을 입력해 주세요.";
    if (!form.quantityTimeline.trim()) nextErrors.quantityTimeline = "수량/샘플/일정 단계를 선택해 주세요.";
    if (form.message.trim().length < 12) nextErrors.message = "문의 내용을 12자 이상 입력해 주세요.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSummary("");
    if (!validate()) return;

    const inquirySummary = [
      `[WARSOL 기술 문의 준비 요약] ${form.category}`,
      `성함: ${form.name}`,
      `회사/기관: ${form.organization}`,
      `이메일: ${form.email}`,
      `연락처: ${form.phone || "미기재"}`,
      `문의 유형: ${form.category}`,
      `제품군: ${selectedProduct ? `${selectedProduct.name} (${selectedProduct.englishName})` : "미정"}`,
      `적용 산업: ${selectedApplication ? selectedApplication.title : "미정"}`,
      `기재/소재: ${form.substrate}`,
      `사용 환경: ${form.environment}`,
      `요구 물성: ${form.requiredProperty}`,
      `수량/샘플/일정: ${form.quantityTimeline}`,
      `현재 단계: ${form.sampleStage || "미기재"}`,
      `문의 내용: ${form.message}`,
      "",
      `기술 상담 메모: ${selectedProduct?.inquiryPrompts.join(", ") ?? "제품군 미정"}`,
      `적용처 체크리스트: ${selectedApplication?.inquiryChecklist.join(", ") ?? "적용 산업 미정"}`,
      "",
      `전송 상태: ${backendBlockedCopy}`,
    ].join("\n");

    setSummary(inquirySummary);
  };

  const handleCopy = async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("Copied");
    } catch {
      setCopyState("Copy blocked");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="surface grid gap-5 rounded-lg p-6" noValidate>
      <Field label="문의 유형" fieldId="category" error={errors.category}>
        <select
          id="category"
          name="category"
          value={form.category}
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? "category-error" : undefined}
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
        <Field label="제품군 선택" fieldId="product" error={errors.product}>
          <select
            id="product"
            name="product"
            value={form.product}
            aria-invalid={Boolean(errors.product)}
            aria-describedby={errors.product ? "product-error" : undefined}
            onChange={(event) => updateField("product", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          >
            <option value="">제품군 선택</option>
            {productCategories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="적용 산업 선택" fieldId="application" error={errors.application}>
          <select
            id="application"
            name="application"
            value={form.application}
            aria-invalid={Boolean(errors.application)}
            aria-describedby={errors.application ? "application-error" : undefined}
            onChange={(event) => updateField("application", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          >
            <option value="">적용 산업 선택</option>
            {applicationGuides.map((application) => (
              <option key={application.slug} value={application.slug}>
                {application.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="성함" fieldId="name" error={errors.name}>
          <input
            id="name"
            name="name"
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
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
            aria-invalid={Boolean(errors.organization)}
            aria-describedby={errors.organization ? "organization-error" : undefined}
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
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field label="연락처(선택)" fieldId="phone">
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
        <Field label="기재 / 소재" fieldId="substrate" error={errors.substrate}>
          <input
            id="substrate"
            name="substrate"
            value={form.substrate}
            aria-invalid={Boolean(errors.substrate)}
            aria-describedby={errors.substrate ? "substrate-error" : undefined}
            onChange={(event) => updateField("substrate", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 콘크리트, PET 필름, 금속, 복합재 표면"
          />
        </Field>
        <Field label="사용 환경" fieldId="environment" error={errors.environment}>
          <input
            id="environment"
            name="environment"
            value={form.environment}
            aria-invalid={Boolean(errors.environment)}
            aria-describedby={errors.environment ? "environment-error" : undefined}
            onChange={(event) => updateField("environment", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 외부 노출, 고습, 열 노출, 도포 방식"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="요구 물성" fieldId="requiredProperty" error={errors.requiredProperty}>
          <input
            id="requiredProperty"
            name="requiredProperty"
            value={form.requiredProperty}
            aria-invalid={Boolean(errors.requiredProperty)}
            aria-describedby={errors.requiredProperty ? "requiredProperty-error" : undefined}
            onChange={(event) => updateField("requiredProperty", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
            placeholder="예: 내수성, 차열, 분산 안정성, 열 안정성"
          />
        </Field>
        <Field label="수량 / 샘플 / 일정" fieldId="quantityTimeline" error={errors.quantityTimeline}>
          <select
            id="quantityTimeline"
            name="quantityTimeline"
            value={form.quantityTimeline}
            aria-invalid={Boolean(errors.quantityTimeline)}
            aria-describedby={errors.quantityTimeline ? "quantityTimeline-error" : undefined}
            onChange={(event) => updateField("quantityTimeline", event.target.value)}
            className="w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          >
            <option value="">수량/일정 선택</option>
            {quantityTimelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

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

      <Field label="문의 내용" fieldId="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          value={form.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 w-full rounded-md border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--text)]"
          placeholder="현재 문제, 목표 성능, 샘플/견적 필요 여부를 적어 주세요."
        />
      </Field>

      <div className="rounded-md border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)] p-4 text-sm leading-6 text-[var(--muted-strong)]">
        {backendBlockedCopy}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit">기술 문의 요약 생성</Button>
        <Button type="button" variant="secondary" onClick={() => window.print()} disabled={!summary}>
          Print summary
        </Button>
        <Button type="button" variant="secondary" onClick={handleCopy} disabled={!summary}>
          {copyState}
        </Button>
      </div>

      {summary && (
        <div className="inquiry-summary rounded-lg border border-[rgba(18,168,199,0.3)] bg-[rgba(18,168,199,0.07)] p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold text-[var(--brand-navy)]">기술 문의 요약</p>
            <p className="text-xs font-bold text-[var(--muted)]">Local summary only · not sent</p>
          </div>
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
        <span id={`${fieldId}-error`} data-field-error className="text-sm font-semibold text-[var(--danger)]">
          {error}
        </span>
      )}
    </div>
  );
}
