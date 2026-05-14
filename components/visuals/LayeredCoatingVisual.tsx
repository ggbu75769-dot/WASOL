const layerRows = [
  { label: "기능성 상도층", color: "#12A8C7", note: "차열 · 표면 보호" },
  { label: "수성 고분자 도막", color: "#1D5D9B", note: "도막 균일도" },
  { label: "접착 제어층", color: "#7AA7D8", note: "점착 · 계면 안정" },
  { label: "산업용 기재", color: "#CBD8E6", note: "방수 시트 · 금속 · 콘크리트" },
];

export function LayeredCoatingVisual() {
  return (
    <div className="surface technical-border relative overflow-hidden rounded-lg p-5 sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(238,244,250,0.86),rgba(255,255,255,0)_42%,rgba(18,168,199,0.08))]" />
      <div className="relative z-10 grid gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mono-label">소재 구조</p>
            <h3 className="mt-2 text-2xl font-black text-[var(--brand-navy)]">코팅 적층 구조</h3>
          </div>
          <span className="rounded-md border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold text-[var(--brand-blue)]">
            연구개발 근거
          </span>
        </div>

        <svg className="h-[250px] w-full sm:h-[330px]" viewBox="0 0 680 360" fill="none" aria-hidden="true">
          <defs>
            <pattern id="coatingGrid" width="34" height="34" patternUnits="userSpaceOnUse">
              <path d="M34 0H0V34" stroke="#D8E1EA" strokeOpacity="0.72" />
            </pattern>
            <linearGradient id="layerFace" x1="132" y1="62" x2="548" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#EEF4FA" />
            </linearGradient>
          </defs>
          <rect width="680" height="360" rx="20" fill="url(#coatingGrid)" opacity="0.55" />
          <path d="M96 262L478 142L590 190L208 310L96 262Z" fill="#E2E8F0" />
          <path d="M96 214L478 94L590 142L208 262L96 214Z" fill="#F8FAFC" stroke="#CBD8E6" />
          <path d="M96 166L478 46L590 94L208 214L96 166Z" fill="url(#layerFace)" stroke="#9EBAD6" />
          <path d="M96 124L478 4L590 52L208 172L96 124Z" fill="#EAF7FB" stroke="#12A8C7" strokeWidth="2" />
          <path d="M208 172V310" stroke="#9EBAD6" />
          <path d="M590 52V190" stroke="#9EBAD6" />
          <path d="M96 124V262" stroke="#9EBAD6" />
          <path d="M146 136C220 142 292 119 374 86C438 61 494 45 558 62" stroke="#12A8C7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M138 184C224 191 304 159 384 133C454 110 510 99 572 110" stroke="#1D5D9B" strokeOpacity="0.64" strokeWidth="2.5" strokeLinecap="round" />
          <g>
            <circle cx="256" cy="122" r="6" fill="#12A8C7" />
            <circle cx="342" cy="98" r="6" fill="#1D5D9B" />
            <circle cx="430" cy="72" r="6" fill="#F59E0B" />
            <path d="M256 122L342 98L430 72" stroke="#0B2A4A" strokeOpacity="0.28" strokeWidth="2" />
          </g>
        </svg>

        <div className="grid gap-2">
          {layerRows.map((row) => (
            <div key={row.label} className="grid grid-cols-[16px_1fr] items-center gap-3 border-t border-[var(--line)] pt-3 text-sm sm:grid-cols-[16px_1fr_auto]">
              <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: row.color }} />
              <span className="font-bold text-[var(--text)]">{row.label}</span>
              <span className="col-start-2 text-xs font-semibold text-[var(--muted)] sm:col-auto sm:text-right">{row.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
