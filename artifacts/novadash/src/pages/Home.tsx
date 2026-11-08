import { Link } from "wouter";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { homeB } from "@/i18n/home-b";

// Sample rows for the control-room preview (illustrative, not real orders).
const SAMPLE_ROWS = [
  { id: "302-4417", item: "Kaffeemühle Edelstahl", channel: "Amazon", carrier: "DHL", state: "open" },
  { id: "11-0293", item: "Thermobecher 2er Set", channel: "eBay", carrier: "GLS", state: "label" },
  { id: "WC-1084", item: "Filterhalter Keramik", channel: "WooCommerce", carrier: "SENDCLOUD", state: "print" },
  { id: "EC-552", item: "Wasserkessel 1,7 l", channel: "Ecwid", carrier: "SENDDROP", state: "sent" },
] as const;

const TONE_VAR: Record<string, string> = {
  open: "var(--st-open)",
  label: "var(--st-label)",
  print: "var(--st-print)",
  sent: "var(--st-sent)",
  plain: "var(--color-text)",
};

export default function Home() {
  const { lang } = useI18n();
  useSEO("seo.home.title", "seo.home.description");
  const c = homeB[lang];

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pt-36 md:pt-40 pb-10">
        <p className="nd-mono mb-5 text-[13px] tracking-[0.04em] text-[var(--color-primary)]">{c.eyebrow}</p>
        <h1 className="mb-6 max-w-[900px] text-[44px] md:text-[72px] leading-none tracking-[-0.035em] font-bold">
          {c.title1}
          <br />
          <span className="text-[var(--color-faint)]">{c.title2}</span>
        </h1>
        <p className="mb-9 max-w-[600px] text-[19px] leading-relaxed text-[var(--color-text-muted)]">{c.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/early-access" className="nd-btn-lime px-[22px] py-[15px] text-base">{c.ctaPrimary}</Link>
          <Link href="/funktionen" className="nd-btn-ghost px-[22px] py-[14px] text-base">{c.ctaSecondary}</Link>
        </div>
      </section>

      {/* Control-room preview */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 pb-[72px]" aria-label={c.sampleNote}>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-[18px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 mb-3.5">
            {c.kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3.5">
                <div className="nd-mono text-[11px] tracking-[0.06em] text-[var(--color-faint)]">{k.label}</div>
                <div className="mt-1.5 flex items-baseline gap-2.5">
                  <span className="nd-mono text-[30px] font-semibold" style={{ color: TONE_VAR[k.tone] }}>{k.value}</span>
                  <span className="text-xs text-[var(--color-faint)]">{k.hint}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <caption className="sr-only">{c.sampleNote}</caption>
              <tbody>
                {SAMPLE_ROWS.map((r, i) => (
                  <tr key={r.id} className={i > 0 ? "border-t border-[var(--color-border)]" : ""}>
                    <td className="nd-mono px-4 py-3">{r.id}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{r.item}</td>
                    <td className="px-4 py-3 text-[13px] text-[var(--color-faint)]">{r.channel}</td>
                    <td className="nd-mono px-4 py-3 text-xs text-[var(--color-faint)]">{r.carrier}</td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="nd-mono inline-block rounded px-2 py-[3px] text-xs font-semibold border"
                        style={{ color: TONE_VAR[r.state], borderColor: TONE_VAR[r.state] }}
                      >
                        {c.status[r.state]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features: hairline grid */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {c.features.map((f) => (
              <div key={f.n} className="bg-[var(--color-bg)] px-7 pt-8 pb-9">
                <div className="nd-mono mb-[18px] text-xs text-[var(--color-primary)]">{f.n}</div>
                <h3 className="mb-2.5 text-[22px] tracking-[-0.015em] font-semibold">{f.t}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-6 pt-6 pb-[88px] flex flex-wrap gap-7 items-center justify-between">
        <div className="flex-[1_1_520px]">
          <h2 className="mb-2.5 text-[32px] md:text-[40px] tracking-[-0.025em] font-bold">{c.ctaTitle}</h2>
          <p className="text-[17px] text-[var(--color-text-muted)]">{c.ctaText}</p>
        </div>
        <Link href="/early-access" className="nd-btn-lime px-6 py-4 text-base">{c.ctaPrimary}</Link>
      </section>
    </>
  );
}
