type WarsolMarkProps = {
  className?: string;
  compact?: boolean;
};

export function WarsolMark({ className = "", compact = false }: WarsolMarkProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="WARSOL W 로고">
      <svg
        width={compact ? 40 : 48}
        height={compact ? 40 : 48}
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="44" height="44" rx="10" fill="#0B2A4A" />
        <path d="M8 8H40" stroke="#12A8C7" strokeWidth="3" strokeLinecap="round" />
        <text
          x="24"
          y="33"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="27"
          fontWeight="900"
          letterSpacing="0"
        >
          W
        </text>
      </svg>
      <span className="grid leading-none">
        <span data-warsol-word className={`${compact ? "text-xl" : "text-2xl"} font-black tracking-normal text-[var(--brand-navy)]`}>
          WARSOL
        </span>
        {!compact && (
          <span data-warsol-sub className="mt-1 text-[0.68rem] font-bold uppercase tracking-normal text-[var(--brand-blue)]">
            Polymer · Adhesion · Coating
          </span>
        )}
      </span>
    </div>
  );
}
