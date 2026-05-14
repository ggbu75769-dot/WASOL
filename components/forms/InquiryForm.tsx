"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  documentRequestOptions,
  inquiryCategories,
  quantityTimelineOptions,
} from "@/content/inquiry";
import { industries, productCategories } from "@/content/products";

type InquiryFormState = {
  category: string;
  product: string;
  industry: string;
  material: string;
  environment: string;
  requirements: string;
  documents: string[];
  timeline: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type ApiResult =
  | {
      ok: true;
      inquiryId: string;
      summary: string;
    }
  | {
      ok: false;
      errors: string[];
    };

const environmentOptions = ["실내", "실외", "고습", "고온", "저온", "화학 노출", "장기 보관"];
const requirementOptions = ["접착력", "내수성", "차열", "분산 안정성", "작업성", "표면 보호", "저유해성"];

function createInitialForm(searchParams: URLSearchParams): InquiryFormState {
  const productSlug = searchParams.get("product") ?? "";
  const selectedProduct = productCategories.find((product) => product.slug === productSlug);

  return {
    category: searchParams.get("category") ?? inquiryCategories[0],
    product: selectedProduct?.name ?? productCategories[0]?.name ?? "",
    industry: industries[0]?.title ?? "",
    material: "",
    environment: environmentOptions[0],
    requirements: requirementOptions[0],
    documents: ["TDS"],
    timeline: quantityTimelineOptions[0],
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };
}

const isStaticSite = process.env.NEXT_PUBLIC_STATIC_SITE === "true";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const initialForm = useMemo(() => createInitialForm(searchParams), [searchParams]);
  const [form, setForm] = useState<InquiryFormState>(initialForm);
  const [result, setResult] = useState<ApiResult | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copyLabel, setCopyLabel] = useState("요약 복사");

  const summary = result?.ok ? result.summary : "";

  function updateField<K extends keyof InquiryFormState>(key: K, value: InquiryFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleDocument(option: string) {
    setForm((current) => {
      const exists = current.documents.includes(option);
      return {
        ...current,
        documents: exists
          ? current.documents.filter((item) => item !== option)
          : [...current.documents, option],
      };
    });
  }

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setResult(null);
    setCopyLabel("요약 복사");

    try {
      if (isStaticSite) {
        const errors = validateStaticForm(form);
        if (errors.length) {
          setResult({ ok: false, errors });
          setStatus("error");
          return;
        }

        const inquiryId = createInquiryId();
        setResult({ ok: true, inquiryId, summary: createSubmittedSummary(form, inquiryId) });
        setStatus("success");
        return;
      }

      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = (await response.json()) as ApiResult;
      setResult(json);
      setStatus(json.ok ? "success" : "error");
    } catch {
      setResult({ ok: false, errors: ["네트워크 확인"] });
      setStatus("error");
    }
  }

  async function copySummary() {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      setCopyLabel("복사 완료");
    } catch {
      setCopyLabel("복사 제한");
    }
  }

  function downloadSummary() {
    if (!summary) return;
    const blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${result?.ok ? result.inquiryId : "warsol-inquiry"}.txt`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function printSummary() {
    document.body.setAttribute("data-print-brief-active", "true");
    window.print();
    window.setTimeout(() => {
      document.body.removeAttribute("data-print-brief-active");
    }, 300);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
      <form onSubmit={submitInquiry} className="surface grid gap-5 rounded-lg p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <SelectField label="문의 유형" value={form.category} onChange={(value) => updateField("category", value)} options={inquiryCategories} />
          <SelectField label="제품군" value={form.product} onChange={(value) => updateField("product", value)} options={productCategories.map((product) => product.name)} />
          <SelectField label="적용 산업" value={form.industry} onChange={(value) => updateField("industry", value)} options={industries.map((industry) => industry.title)} />
          <TextField label="기재 및 소재" value={form.material} onChange={(value) => updateField("material", value)} placeholder="콘크리트, 금속, 필름, 섬유" />
          <SelectField label="사용 환경" value={form.environment} onChange={(value) => updateField("environment", value)} options={environmentOptions} />
          <SelectField label="요구 물성" value={form.requirements} onChange={(value) => updateField("requirements", value)} options={requirementOptions} />
          <SelectField label="일정" value={form.timeline} onChange={(value) => updateField("timeline", value)} options={quantityTimelineOptions} />
          <TextField label="회사명" value={form.company} onChange={(value) => updateField("company", value)} placeholder="회사명" />
          <TextField label="이름" value={form.name} onChange={(value) => updateField("name", value)} placeholder="담당자명" />
          <TextField label="이메일" type="email" value={form.email} onChange={(value) => updateField("email", value)} placeholder="name@company.com" />
          <TextField label="전화" value={form.phone} onChange={(value) => updateField("phone", value)} placeholder="010-0000-0000" />
        </div>

        <fieldset className="grid gap-3 rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-4">
          <legend className="px-1 text-sm font-black text-[var(--brand-navy)]">요청 자료</legend>
          <div className="flex flex-wrap gap-2">
            {documentRequestOptions.map((option) => (
              <label
                key={option}
                className={`inline-flex min-h-10 cursor-pointer items-center rounded-md border px-3 py-2 text-sm font-bold transition ${
                  form.documents.includes(option)
                    ? "border-[var(--brand-blue)] bg-white text-[var(--brand-blue)]"
                    : "border-[var(--line)] bg-white text-[var(--muted-strong)]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={form.documents.includes(option)}
                  onChange={() => toggleDocument(option)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="grid gap-2">
          <span className="text-sm font-black text-[var(--brand-navy)]">상세 내용</span>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
            placeholder="적용 조건, 목표 성능, 샘플 요청 내용을 입력"
            className="min-h-32 resize-y rounded-lg border border-[var(--line)] bg-white px-4 py-3 text-sm leading-6 text-[var(--text)] outline-none transition focus:border-[var(--brand-blue)]"
          />
        </label>

        {result && !result.ok && (
          <div className="rounded-lg border border-[rgba(194,65,12,0.28)] bg-[rgba(194,65,12,0.06)] p-4 text-sm font-bold text-[var(--danger)]">
            {result.errors.join(" · ")}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "접수 중" : "문의 접수"}
          </Button>
          <Button type="button" variant="secondary" onClick={() => setForm(initialForm)}>
            초기화
          </Button>
        </div>
      </form>

      <aside className="surface sticky top-24 rounded-lg p-6 sm:p-8" data-print-brief>
        <p className="mono-label">Inquiry Summary</p>
        <h2 className="mt-4 text-2xl font-black text-[var(--brand-navy)]">
          {result?.ok ? "문의 접수 완료" : "문의 요약"}
        </h2>
        <pre className="mt-5 min-h-72 whitespace-pre-wrap rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-4 text-sm leading-7 text-[var(--muted-strong)]">
          {summary || createPreviewSummary(form)}
        </pre>
        <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <Button type="button" variant="secondary" onClick={copySummary} disabled={!summary}>
            {copyLabel}
          </Button>
          <Button type="button" variant="secondary" onClick={downloadSummary} disabled={!summary}>
            TXT 저장
          </Button>
          <Button type="button" variant="secondary" onClick={printSummary} disabled={!summary}>
            인쇄
          </Button>
        </div>
      </aside>
    </div>
  );
}

function createPreviewSummary(form: InquiryFormState) {
  return [
    `문의 유형: ${form.category}`,
    `제품군: ${form.product}`,
    `적용 산업: ${form.industry}`,
    `기재 및 소재: ${form.material || "-"}`,
    `사용 환경: ${form.environment}`,
    `요구 물성: ${form.requirements}`,
    `요청 자료: ${form.documents.length ? form.documents.join(", ") : "-"}`,
    `일정: ${form.timeline}`,
  ].join("\n");
}

function validateStaticForm(form: InquiryFormState) {
  const requiredFields: Array<[keyof InquiryFormState, string]> = [
    ["category", "문의 유형"],
    ["product", "제품군"],
    ["industry", "적용 산업"],
    ["material", "기재 및 소재"],
    ["environment", "사용 환경"],
    ["requirements", "요구 물성"],
    ["timeline", "일정"],
    ["name", "이름"],
    ["company", "회사명"],
    ["email", "이메일"],
    ["phone", "전화"],
  ];
  const errors = requiredFields
    .filter(([key]) => !String(form[key] ?? "").trim())
    .map(([, label]) => `${label} 입력 필요`);

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.push("이메일 형식 확인");
  }

  return errors;
}

function createInquiryId() {
  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
  return `WARSOL-${stamp}`;
}

function createSubmittedSummary(form: InquiryFormState, inquiryId: string) {
  return [
    `접수번호: ${inquiryId}`,
    `회사명: ${form.company}`,
    `담당자: ${form.name}`,
    `연락처: ${form.phone}`,
    `이메일: ${form.email}`,
    `문의 유형: ${form.category}`,
    `제품군: ${form.product}`,
    `적용 산업: ${form.industry}`,
    `기재 및 소재: ${form.material}`,
    `사용 환경: ${form.environment}`,
    `요구 물성: ${form.requirements}`,
    `요청 자료: ${form.documents.length ? form.documents.join(", ") : "선택 없음"}`,
    `일정: ${form.timeline}`,
    `상세 내용: ${form.message || "추가 내용 없음"}`,
  ].join("\n");
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-[var(--brand-navy)]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-h-12 rounded-lg border border-[var(--line)] bg-white px-4 text-sm text-[var(--text)] outline-none transition focus:border-[var(--brand-blue)]"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-[var(--brand-navy)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-12 rounded-lg border border-[var(--line)] bg-white px-4 text-sm font-bold text-[var(--text)] outline-none transition focus:border-[var(--brand-blue)]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
