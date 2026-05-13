import { materialProcessSteps } from "@/content/technology";

export function ProcessFlowVisual() {
  return (
    <div className="surface technical-border overflow-hidden rounded-lg p-6">
      <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mono-label">Material System Pipeline</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--brand-navy)]">Requirement to Sample Brief</h3>
        </div>
        <span className="rounded-md border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-xs font-bold text-[var(--muted-strong)]">
          Adapter-ready inquiry flow
        </span>
      </div>

      <div className="relative mt-7 grid gap-4 lg:grid-cols-4">
        <div className="absolute left-0 top-10 hidden h-px w-full bg-[var(--line-strong)] lg:block" />
        {materialProcessSteps.map((step) => (
          <article key={step.step} className="relative rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_12px_32px_rgba(15,42,74,0.06)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--brand-navy)] text-sm font-black text-[#ffffff]">
              {step.step}
            </div>
            <h4 className="mt-5 text-lg font-black text-[var(--brand-navy)]">{step.title}</h4>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
          </article>
        ))}
      </div>

      <svg className="mt-7 h-[120px] w-full" viewBox="0 0 900 120" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="pipelineGradient" x1="80" x2="820" y1="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D5D9B" />
            <stop offset="0.5" stopColor="#12A8C7" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path d="M80 60H820" stroke="url(#pipelineGradient)" strokeWidth="8" strokeLinecap="round" />
        {[80, 326, 573, 820].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy="60" r="20" fill="#FFFFFF" stroke="#CBD8E6" strokeWidth="3" />
            <circle cx={x} cy="60" r="9" fill={index === 3 ? "#F59E0B" : index === 1 ? "#12A8C7" : "#1D5D9B"} />
          </g>
        ))}
      </svg>
    </div>
  );
}
