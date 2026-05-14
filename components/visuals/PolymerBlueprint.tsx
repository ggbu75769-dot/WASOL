export function PolymerBlueprint() {
  const nodes: Array<[number, number, string]> = [
    [84, 90, "#12A8C7"],
    [154, 54, "#1D5D9B"],
    [236, 104, "#12A8C7"],
    [332, 72, "#F59E0B"],
    [430, 118, "#1D5D9B"],
    [528, 82, "#12A8C7"],
    [122, 200, "#1D5D9B"],
    [230, 236, "#12A8C7"],
    [340, 202, "#1D5D9B"],
    [468, 250, "#F59E0B"],
    [574, 210, "#12A8C7"],
  ];

  return (
    <div className="rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.76)] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="mono-label">고분자 네트워크</p>
        <p className="text-xs font-bold text-[var(--muted)]">수용성 제어 맵</p>
      </div>
      <svg className="polymer-blueprint h-[172px] w-full" viewBox="0 0 640 240" fill="none" aria-hidden="true">
        <defs>
          <pattern id="blueprintGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" stroke="#D8E1EA" strokeOpacity="0.86" />
          </pattern>
        </defs>
        <rect width="640" height="240" rx="16" fill="#F8FAFC" />
        <rect width="640" height="240" rx="16" fill="url(#blueprintGrid)" />
        <path
          d="M84 90L154 54L236 104L332 72L430 118L528 82M122 200L230 236L340 202L468 250L574 210M236 104L230 236M332 72L340 202M430 118L468 250M154 54L122 200"
          stroke="#1D5D9B"
          strokeOpacity="0.46"
          strokeWidth="2"
          className="flow-line"
        />
        {nodes.map(([cx, cy, fill], index) => (
          <g key={`${cx}-${cy}`} className="pulse-node" style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${index * 0.14}s` }}>
            <circle cx={cx} cy={cy} r="7" fill={fill} />
            <circle cx={cx} cy={cy} r="16" fill={fill} fillOpacity="0.14" />
          </g>
        ))}
        <path d="M44 34H188" stroke="#0B2A4A" strokeOpacity="0.24" />
        <path d="M44 206H184" stroke="#0B2A4A" strokeOpacity="0.24" />
        <text x="44" y="56" fill="#526071" fontSize="14" fontFamily="monospace">접착 / 분산</text>
        <text x="44" y="226" fill="#526071" fontSize="14" fontFamily="monospace">도막 형성 범위</text>
      </svg>
    </div>
  );
}
