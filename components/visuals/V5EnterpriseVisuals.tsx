import { applicationGuides } from "@/content/applications";
import { productCategories } from "@/content/products";

function VisualFrame({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="surface overflow-hidden rounded-lg p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="mono-label">{eyebrow}</p>
        <p className="text-sm font-black text-[var(--brand-navy)]">{title}</p>
      </div>
      {children}
    </div>
  );
}

export function MaterialPipelineVisual() {
  const steps = ["Source", "Surface", "Formula", "Sample", "Verification"];
  return (
    <VisualFrame eyebrow="Material Pipeline" title="condition-first flow">
      <div className="grid gap-3 sm:grid-cols-5">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-lg border border-[var(--line)] bg-white p-4">
            <p className="text-3xl font-black text-[rgba(18,168,199,0.22)]">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-4 text-sm font-black text-[var(--brand-navy)]">{step}</p>
            <div className="mt-4 h-2 rounded-full bg-[var(--bg-technical)]">
              <div className="h-full rounded-full bg-[var(--cyan)]" style={{ width: `${46 + index * 11}%` }} />
            </div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function PatentEvidenceRailVisual() {
  return (
    <VisualFrame eyebrow="Patent Evidence Rail" title="source-backed only">
      <div className="grid gap-3 md:grid-cols-3">
        {["Adhesion", "Thermal Coating", "Eco Safety"].map((item, index) => (
          <div key={item} className="rounded-lg border border-[var(--line)] bg-[var(--bg-soft)] p-4">
            <p className="mono-label">PUBLIC DB 0{index + 1}</p>
            <p className="mt-3 text-xl font-black text-[var(--brand-navy)]">{item}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Evidence can support technology positioning, not product grade, customer, or certification claims.
            </p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function IndustryMapVisual() {
  return (
    <VisualFrame eyebrow="Application Map" title="route-level guides">
      <div className="grid gap-3 md:grid-cols-4">
        {applicationGuides.map((guide) => (
          <a
            key={guide.slug}
            href={`/applications/${guide.slug}`}
            className="rounded-lg border border-[var(--line)] bg-white p-4 transition hover:border-[var(--brand-blue)]"
          >
            <p className="text-sm font-black text-[var(--brand-blue)]">{guide.englishName}</p>
            <p className="mt-3 text-lg font-black leading-tight text-[var(--brand-navy)]">{guide.title}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{guide.materialControl}</p>
          </a>
        ))}
      </div>
    </VisualFrame>
  );
}

export function TechnicalVariableMapVisual() {
  const variables = ["Substrate", "Environment", "Required property", "Sample stage"];
  return (
    <VisualFrame eyebrow="Variable Map" title="inquiry inputs">
      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-[var(--line)] bg-white p-4">
          <svg viewBox="0 0 360 220" role="img" aria-label="Technical variable map" className="h-auto w-full">
            <rect x="20" y="20" width="320" height="180" rx="16" fill="#f8fafc" stroke="#cbd8e6" />
            <circle cx="180" cy="110" r="34" fill="#ffffff" stroke="#12a8c7" strokeWidth="4" />
            <text x="180" y="115" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0b2a4a">
              WARSOL
            </text>
            {[
              [72, 58, "Substrate"],
              [288, 58, "Env."],
              [70, 166, "Property"],
              [290, 166, "Stage"],
            ].map(([x, y, label]) => (
              <g key={String(label)}>
                <line x1={180} y1={110} x2={x as number} y2={y as number} stroke="#8ab0d9" strokeWidth="2" />
                <circle cx={x as number} cy={y as number} r="18" fill="#dff5fb" stroke="#12a8c7" strokeWidth="2" />
                <text x={x as number} y={(y as number) + 36} textAnchor="middle" fontSize="11" fill="#334155">
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="grid gap-3">
          {variables.map((variable) => (
            <div key={variable} className="rounded-lg border border-[var(--line)] bg-white p-4">
              <p className="text-sm font-black text-[var(--brand-navy)]">{variable}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Captured before recommending a material family.</p>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

export function ProductComparisonVisual() {
  return (
    <VisualFrame eyebrow="Product Matrix" title="family comparison">
      <div className="overflow-x-auto">
        <table className="min-w-[780px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--line)]">
              <th className="px-4 py-3 text-[var(--brand-blue)]">Family</th>
              <th className="px-4 py-3 text-[var(--brand-blue)]">Technology basis</th>
              <th className="px-4 py-3 text-[var(--brand-blue)]">Ask first</th>
              <th className="px-4 py-3 text-[var(--brand-blue)]">Data status</th>
            </tr>
          </thead>
          <tbody>
            {productCategories.map((product) => (
              <tr key={product.slug} className="border-b border-[var(--line)] last:border-b-0">
                <td className="px-4 py-4 font-black text-[var(--brand-navy)]">{product.englishName}</td>
                <td className="px-4 py-4 text-[var(--muted-strong)]">{product.technologyBasis}</td>
                <td className="px-4 py-4 text-[var(--muted-strong)]">{product.technicalVariables.slice(0, 2).join(", ")}</td>
                <td className="px-4 py-4 text-[var(--muted)]">TDS pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualFrame>
  );
}

export function ResearchPathwayVisual() {
  const path = ["Patent signal", "Material variable", "Application guide", "Inquiry summary"];
  return (
    <VisualFrame eyebrow="Research Pathway" title="evidence to inquiry">
      <div className="grid gap-3 md:grid-cols-4">
        {path.map((item, index) => (
          <div key={item} className="rounded-lg border border-[var(--line)] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-technical)] text-sm font-black text-[var(--brand-blue)]">
              {index + 1}
            </div>
            <p className="mt-4 text-lg font-black text-[var(--brand-navy)]">{item}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">Kept conservative until official documents confirm exact claims.</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function OfficialDataReadinessVisual() {
  const states = [
    ["Public evidence", "usable"],
    ["Official CI/logo", "pending"],
    ["TDS/SDS files", "pending"],
    ["Email backend", "blocked"],
  ];
  return (
    <VisualFrame eyebrow="Data Readiness" title="what is safe today">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {states.map(([label, status]) => (
          <div key={label} className="rounded-lg border border-[var(--line)] bg-white p-4">
            <p className="text-sm font-black text-[var(--brand-navy)]">{label}</p>
            <p className="mt-3 inline-flex rounded-md bg-[var(--bg-technical)] px-3 py-2 text-xs font-black uppercase text-[var(--brand-blue)]">
              {status}
            </p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
