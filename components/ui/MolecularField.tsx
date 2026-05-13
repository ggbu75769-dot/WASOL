export function MolecularField() {
  const nodes: Array<[number, number, string]> = [
    [96, 220, "#58E6D9"],
    [182, 162, "#D9FFF3"],
    [260, 232, "#B8C7FF"],
    [324, 174, "#58E6D9"],
    [440, 128, "#F1C46B"],
    [560, 110, "#D9FFF3"],
    [668, 70, "#B8C7FF"],
    [118, 350, "#F1C46B"],
    [224, 330, "#58E6D9"],
    [342, 352, "#D9FFF3"],
    [486, 286, "#B8C7FF"],
    [650, 270, "#F1C46B"],
  ];

  return (
    <div className="surface technical-border relative overflow-hidden rounded-lg p-4 sm:p-6">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(88,230,217,0.12),transparent_38%,rgba(241,196,107,0.08))]" />
      <svg
        className="molecular-field relative z-10 h-[320px] w-full sm:h-[420px]"
        viewBox="0 0 760 520"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fieldLine" x1="83" y1="105" x2="650" y2="410" gradientUnits="userSpaceOnUse">
            <stop stopColor="#58E6D9" />
            <stop offset="0.48" stopColor="#B8C7FF" />
            <stop offset="1" stopColor="#F1C46B" />
          </linearGradient>
          <linearGradient id="film" x1="110" y1="366" x2="650" y2="366" gradientUnits="userSpaceOnUse">
            <stop stopColor="#58E6D9" stopOpacity="0.08" />
            <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="1" stopColor="#F1C46B" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M96 350C180 294 256 408 342 352C430 294 493 242 650 270" stroke="url(#fieldLine)" strokeWidth="2.4" className="flow-line" />
        <path d="M86 220C162 138 242 246 322 174C420 86 519 122 668 70" stroke="url(#fieldLine)" strokeOpacity="0.58" strokeWidth="2" className="flow-line" />
        <path d="M118 414C228 383 331 462 450 404C520 370 584 354 675 384" stroke="url(#fieldLine)" strokeOpacity="0.42" strokeWidth="2" className="flow-line" />
        <path d="M110 364H650L610 436H150L110 364Z" fill="url(#film)" stroke="rgba(217,255,243,0.28)" />
        {nodes.map(([cx, cy, fill], index) => (
          <g key={`${cx}-${cy}`} style={{ transformOrigin: `${cx}px ${cy}px`, animationDelay: `${index * 0.18}s` }} className="pulse-node">
            <circle cx={cx} cy={cy} r="8" fill={fill} fillOpacity="0.96" />
            <circle cx={cx} cy={cy} r="18" fill={fill} fillOpacity="0.12" />
          </g>
        ))}
        <g opacity="0.72">
          <path d="M144 392L618 392" stroke="rgba(255,255,255,0.16)" />
          <path d="M178 414L584 414" stroke="rgba(255,255,255,0.1)" />
          <path d="M220 374L202 430" stroke="rgba(255,255,255,0.12)" />
          <path d="M386 374L368 430" stroke="rgba(255,255,255,0.12)" />
          <path d="M552 374L534 430" stroke="rgba(255,255,255,0.12)" />
        </g>
        <text x="116" y="494" fill="#9AA7B5" fontSize="18" fontFamily="monospace">WATER-BASED POLYMER · ADHESIVE · COATING FILM</text>
      </svg>
    </div>
  );
}
