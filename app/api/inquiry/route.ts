type InquiryPayload = {
  category?: string;
  product?: string;
  industry?: string;
  material?: string;
  environment?: string;
  requirements?: string;
  documents?: string[];
  timeline?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export const dynamic = "force-static";

const requiredFields: Array<[keyof InquiryPayload, string]> = [
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function arrayText(value: unknown) {
  return Array.isArray(value) ? value.map(text).filter(Boolean) : [];
}

function normalizePayload(payload: InquiryPayload) {
  return {
    category: text(payload.category),
    product: text(payload.product),
    industry: text(payload.industry),
    material: text(payload.material),
    environment: text(payload.environment),
    requirements: text(payload.requirements),
    documents: arrayText(payload.documents),
    timeline: text(payload.timeline),
    name: text(payload.name),
    company: text(payload.company),
    email: text(payload.email),
    phone: text(payload.phone),
    message: text(payload.message),
  };
}

function validate(payload: ReturnType<typeof normalizePayload>) {
  const errors = requiredFields
    .filter(([key]) => !payload[key])
    .map(([, label]) => `${label} 입력 필요`);

  if (payload.email && !emailPattern.test(payload.email)) {
    errors.push("이메일 형식 확인");
  }

  return errors;
}

function createSummary(payload: ReturnType<typeof normalizePayload>, inquiryId: string) {
  return [
    `접수번호: ${inquiryId}`,
    `회사명: ${payload.company}`,
    `담당자: ${payload.name}`,
    `연락처: ${payload.phone}`,
    `이메일: ${payload.email}`,
    `문의 유형: ${payload.category}`,
    `제품군: ${payload.product}`,
    `적용 산업: ${payload.industry}`,
    `기재 및 소재: ${payload.material}`,
    `사용 환경: ${payload.environment}`,
    `요구 물성: ${payload.requirements}`,
    `요청 자료: ${payload.documents.length ? payload.documents.join(", ") : "선택 없음"}`,
    `일정: ${payload.timeline}`,
    `상세 내용: ${payload.message || "추가 내용 없음"}`,
  ].join("\n");
}

export function GET() {
  return Response.json(
    {
      ok: true,
      name: "WARSOL Technical Inquiry API",
      method: "POST",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST(request: Request) {
  let body: InquiryPayload;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, errors: ["요청 형식 확인"] }, { status: 400 });
  }

  const payload = normalizePayload(body);
  const errors = validate(payload);

  if (errors.length) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
  const inquiryId = `WARSOL-${stamp}`;

  return Response.json(
    {
      ok: true,
      inquiryId,
      receivedAt: new Date().toISOString(),
      summary: createSummary(payload, inquiryId),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
