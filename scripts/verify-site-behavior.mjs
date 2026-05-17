const baseUrl = process.env.SITE_VERIFY_BASE_URL ?? "http://127.0.0.1:3000";

const routes = [
  ["/", "수용성 고분자 소재 전문기업"],
  ["/company", "수용성 고분자 소재 전문기업, WARSOL"],
  ["/company/ceo-message", "좋은 소재는 현장 조건"],
  ["/company/history", "화성 전곡산업단지 사업장"],
  ["/company/vision", "WARSOL 소재 사업 방향"],
  ["/business", "WARSOL 사업 영역"],
  ["/technology", "WARSOL 기술 포트폴리오"],
  ["/products", "WARSOL 제품 포트폴리오"],
  ["/products/adhesion-systems", "수성 점·접착 소재"],
  ["/rnd", "WARSOL 연구개발 중점"],
  ["/support", "공지사항"],
  ["/notice", "고객 안내"],
  ["/press", "WARSOL 뉴스룸"],
  ["/careers", "현장을 이해하는 소재 인재"],
  ["/contact", "제품 적용 상담"],
];

const validInquiry = {
  category: "제품 적용 상담",
  product: "접착 및 점착 소재",
  industry: "건축 외피와 방수",
  material: "콘크리트",
  environment: "외부 노출",
  requirements: "내수성과 접착 안정성",
  documents: ["TDS", "SDS"],
  timeline: "샘플 검토",
  name: "홍길동",
  company: "테스트기업",
  email: "test@example.com",
  phone: "010-1234-5678",
  message: "방수 시트 적용 상담 요청",
};

const invalidInquiry = {
  ...validInquiry,
  email: "",
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function fetchText(path) {
  const response = await fetch(`${baseUrl}${path}`, { redirect: "manual" });
  const text = await response.text();
  assert(response.status === 200, `${path} expected 200, got ${response.status}`);
  return text;
}

async function postInquiry(payload) {
  const response = await fetch(`${baseUrl}/api/inquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await response.json();
  return { response, json };
}

for (const [path, expectedText] of routes) {
  const text = await fetchText(path);
  assert(text.includes(expectedText), `${path} missing expected screen text: ${expectedText}`);
}

const validResult = await postInquiry(validInquiry);
assert(validResult.response.status === 200, `valid inquiry expected 200, got ${validResult.response.status}`);
assert(validResult.json.ok === true, "valid inquiry expected ok=true");
assert(
  typeof validResult.json.summary === "string" && validResult.json.summary.includes(validInquiry.company),
  "valid inquiry expected generated summary"
);

const invalidResult = await postInquiry(invalidInquiry);
assert(invalidResult.response.status === 400, `invalid inquiry expected 400, got ${invalidResult.response.status}`);
assert(invalidResult.json.ok === false, "invalid inquiry expected ok=false");
assert(Array.isArray(invalidResult.json.errors) && invalidResult.json.errors.length > 0, "invalid inquiry expected errors");

console.log("SITE_BEHAVIOR_PASS");
