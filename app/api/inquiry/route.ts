export const dynamic = "force-static";

export function GET() {
  return Response.json({
    ok: false,
    code: "official-data-needed",
    name: "WARSOL Technical Inquiry API",
    deliveryAvailable: false,
  });
}

export function POST() {
  return Response.json(
    {
      ok: false,
      code: "official-data-needed",
      errors: ["온라인 문의 전송은 준비 중입니다. 문의 요약을 저장한 뒤 공식 연락처로 문의해 주세요."],
    },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
