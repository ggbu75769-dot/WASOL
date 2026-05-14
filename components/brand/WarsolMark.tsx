type WarsolMarkProps = {
  className?: string;
  compact?: boolean;
};

export function WarsolMark({ className = "", compact = false }: WarsolMarkProps) {
  const width = compact ? 44 : 58;
  const height = Math.round(width * 0.67);

  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="WARSOL 로고">
      <svg width={width} height={height} viewBox="0 0 240 160" aria-hidden="true">
        <defs>
          <linearGradient id="warsolOval" x1="34" y1="32" x2="202" y2="126" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#e51b54" />
            <stop offset="0.5" stopColor="#b2197e" />
            <stop offset="1" stopColor="#3847b7" />
          </linearGradient>
          <radialGradient id="warsolShine" cx="37%" cy="24%" r="72%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.42" />
            <stop offset="0.42" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="1" stopColor="#08113d" stopOpacity="0.28" />
          </radialGradient>
          <linearGradient id="warsolMetal" x1="48" y1="96" x2="190" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#6f7176" />
            <stop offset="0.18" stopColor="#d9dadd" />
            <stop offset="0.42" stopColor="#ffffff" />
            <stop offset="0.72" stopColor="#a5a7aa" />
            <stop offset="1" stopColor="#303238" />
          </linearGradient>
          <linearGradient id="warsolSide" x1="154" y1="34" x2="182" y2="109" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fafafa" />
            <stop offset="0.44" stopColor="#a5a7a9" />
            <stop offset="1" stopColor="#3a3b40" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="80" rx="94" ry="58" fill="url(#warsolOval)" transform="rotate(-6 120 80)" />
        <ellipse cx="120" cy="80" rx="94" ry="58" fill="url(#warsolShine)" transform="rotate(-6 120 80)" />
        <path
          d="M26 103c22-3 42-9 58-27 10 23 16 32 29 33 13 0 17-10 22-45 2-14 7-26 19-31 18-8 38-1 57 16-17-4-31-2-40 8-9 11-8 25-8 38 0 24-10 37-29 39-24 3-40-12-57-35-14 14-31 22-51 24Z"
          fill="#22242a"
          opacity="0.34"
          transform="translate(4 6)"
        />
        <path
          d="M29 96c22-4 40-12 55-31 10 24 17 36 30 36 13 0 16-11 21-47 2-15 8-27 20-32 19-8 40 1 59 19-18-5-33-4-43 7-9 11-8 26-8 39 0 25-10 39-30 41-25 3-41-14-58-37-14 15-29 23-46 25Z"
          fill="url(#warsolMetal)"
        />
        <path
          d="M154 22c21-8 42 1 60 19-18-5-33-4-43 7-9 11-8 26-8 39 0 25-10 39-30 41 18-18 22-52 21-106Z"
          fill="url(#warsolSide)"
          opacity="0.96"
        />
      </svg>
      <span className="grid leading-none">
        <span data-warsol-word className={`${compact ? "text-xl" : "text-2xl"} font-black tracking-normal text-[var(--brand-navy)]`}>
          WARSOL
        </span>
        {!compact && (
          <span data-warsol-sub className="mt-1 text-[0.68rem] font-bold tracking-normal text-[var(--brand-blue)]">
            수용성 고분자 · 접착 · 코팅
          </span>
        )}
      </span>
    </div>
  );
}
