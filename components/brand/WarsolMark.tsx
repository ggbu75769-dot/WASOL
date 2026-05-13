type WarsolMarkProps = {
  className?: string;
  compact?: boolean;
};

export function WarsolMark({ className = "", compact = false }: WarsolMarkProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} aria-label="WARSOL provisional brand mark">
      <svg
        width={compact ? 40 : 48}
        height={compact ? 40 : 48}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="46" height="46" rx="12" fill="#FFFFFF" stroke="#D8E1EA" strokeWidth="2" />
        <path
          d="M10 31L16 16L22 31L28 16L34 31L40 16"
          stroke="#0B2A4A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 36H38" stroke="#12A8C7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="grid leading-none">
        <span className={`${compact ? "text-xl" : "text-2xl"} font-black tracking-normal text-[var(--brand-navy)]`}>
          WARSOL
        </span>
        {!compact && (
          <span className="mt-1 text-[0.68rem] font-bold uppercase tracking-normal text-[var(--brand-blue)]">
            Polymer · Adhesion · Coating
          </span>
        )}
      </span>
    </div>
  );
}
