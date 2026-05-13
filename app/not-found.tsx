import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] border-b border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f8fafc)] py-24">
      <div className="container max-w-3xl">
        <p className="eyebrow">Route not found</p>
        <h1 className="mt-5 text-4xl font-black leading-tight text-[var(--brand-navy)] sm:text-6xl">
          요청한 WARSOL 페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
          제품군 또는 적용 산업 slug가 변경되었을 수 있습니다. 제품군, 적용 가이드, 자료 준비 상태 페이지에서 다시 시작할 수 있습니다.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--brand-navy)] px-5 py-3 text-sm font-black text-[#ffffff]" href="/products">
            제품군 보기
          </Link>
          <Link className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-black text-[var(--brand-navy)]" href="/applications">
            적용 가이드 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
