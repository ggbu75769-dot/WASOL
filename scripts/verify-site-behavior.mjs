import { readFile } from "node:fs/promises";

const baseUrl = process.env.SITE_VERIFY_BASE_URL ?? "http://127.0.0.1:3000";

const routes = [
  ["/", "산업 현장을 위한"],
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

const homeRequiredText = [
  "수용성 소재 솔루션",
  "사업분야",
  "기술 미리보기",
  "회사소개",
  "적용 산업",
  "품질·기술지원",
  "소식·문의",
];

const homeForbiddenText = [
  "Water-based Materials for Industrial Performance",
  "WARSOL MATERIALS",
  "BUSINESS",
  "TECHNOLOGY",
  "PRODUCT PORTFOLIO",
  "NEWS & CONTACT",
  "Review Inputs",
];

const homeHeroForbiddenText = [
  "2005",
  "화성 전곡산단",
  "수용성 고분자",
  "샘플·TDS·SDS",
  "사업분야 보기",
  "기술 문의",
];

const homeRailMinHeightChecks = [
  ["business", "md:min-h-[260px]"],
  ["industries", "md:min-h-[190px]"],
  ["support", "md:min-h-[150px]"],
];

// Home public-copy budget intentionally excludes global navigation and footer.
const HOME_MAIN_TEXT_MAX_WITH_SPACES = 600;
const HOME_MAIN_TEXT_MAX_WITHOUT_SPACES = 470;

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

function normalizeHtmlText(text) {
  return text
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", "\"")
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'");
}

function stripTags(html) {
  return normalizeHtmlText(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
}

function extractMainVisibleText(html) {
  const mainMatch = html.match(/<main[^>]*id="main-content"[^>]*>([\s\S]*?)<\/main>/i);
  assert(mainMatch, "home page missing main-content wrapper");
  return stripTags(mainMatch[1]);
}

function extractHomeHeroVisibleText(html) {
  const heroMatch = html.match(/<section[^>]*enterprise-photo-hero[^>]*>([\s\S]*?)<\/section>/i);
  assert(heroMatch, "home page missing enterprise-photo-hero section");
  return stripTags(heroMatch[1]);
}

function assertHomeRailMinHeight(html, railName, minHeightClass) {
  const railPattern = new RegExp(`data-home-card-rail="${railName}"[^>]*class="([^"]*)"`);
  const railMatch = html.match(railPattern);
  assert(railMatch, `/ missing ${railName} home card rail`);
  assert(
    railMatch[1].includes(minHeightClass),
    `/ ${railName} home card rail missing ${minHeightClass}`
  );
}

function countCharacters(text) {
  const withSpaces = [...text].length;
  const withoutSpaces = [...text.replace(/\s+/g, "")].length;
  return { withSpaces, withoutSpaces };
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
  const text = normalizeHtmlText(await fetchText(path));
  assert(text.includes(expectedText), `${path} missing expected screen text: ${expectedText}`);

  if (path === "/") {
    for (const requiredText of homeRequiredText) {
      assert(text.includes(requiredText), `/ missing expected home text: ${requiredText}`);
    }

    for (const forbiddenText of homeForbiddenText) {
      assert(!text.includes(forbiddenText), `/ contains forbidden English home text: ${forbiddenText}`);
    }

    const homeHeroText = extractHomeHeroVisibleText(text);
    for (const forbiddenText of homeHeroForbiddenText) {
      assert(!homeHeroText.includes(forbiddenText), `/ hero contains removed lower copy: ${forbiddenText}`);
    }

    for (const [railName, minHeightClass] of homeRailMinHeightChecks) {
      assertHomeRailMinHeight(text, railName, minHeightClass);
    }

    const homeMainText = extractMainVisibleText(text);
    const homeTextCount = countCharacters(homeMainText);
    assert(
      homeTextCount.withSpaces <= HOME_MAIN_TEXT_MAX_WITH_SPACES,
      `/ home main text too long: ${homeTextCount.withSpaces} chars with spaces (max ${HOME_MAIN_TEXT_MAX_WITH_SPACES})`
    );
    assert(
      homeTextCount.withoutSpaces <= HOME_MAIN_TEXT_MAX_WITHOUT_SPACES,
      `/ home main text too long: ${homeTextCount.withoutSpaces} chars without spaces (max ${HOME_MAIN_TEXT_MAX_WITHOUT_SPACES})`
    );
  }
}

const koreanCopyPolicy = await readFile(new URL("../docs/korean-copy-policy.md", import.meta.url), "utf8");
assert(
  koreanCopyPolicy.includes("메인 페이지의 공개 문구는 한국어를 기본으로 유지한다"),
  "docs/korean-copy-policy.md missing Korean homepage copy policy"
);

for (const payload of [validInquiry, invalidInquiry]) {
  const { response, json } = await postInquiry(payload);
  assert(response.status === 503, "unconfigured delivery must return 503");
  assert(json.ok === false && json.code === "official-data-needed", "delivery must fail closed");
  assert(!json.inquiryId && !json.receivedAt, "unconfigured delivery must not issue a receipt");
}

console.log("SITE_BEHAVIOR_PASS");
