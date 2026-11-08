import { Link } from "wouter";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { useDesign } from "@/theme";
import { pagesB } from "@/i18n/pages-b";
import { PageHero } from "@/components/b/PageHero";
import PricingClassic from "./PricingClassic";

export default function Pricing() {
  const design = useDesign();
  return design === "classic" ? <PricingClassic /> : <PricingB />;
}

function PricingB() {
  const { lang } = useI18n();
  useSEO("seo.pricing.title", "seo.pricing.description");
  const c = pagesB[lang].pricing;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="mx-auto max-w-[1200px] px-6 pb-20 flex flex-wrap gap-5 items-start">
        <div className="flex-[2_1_520px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <div className="nd-mono text-xs tracking-[0.06em] text-[var(--color-faint)]">{c.plan.name}</div>
          <div className="mt-3 flex flex-wrap items-baseline gap-3">
            <span className="nd-mono text-[56px] font-semibold leading-none">{c.plan.monthly}</span>
            <span className="text-[var(--color-text-muted)]">{c.plan.monthlyUnit}</span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{c.plan.yearly}</p>
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {c.plan.includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px]">
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--st-sent)]" aria-hidden="true"></span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/early-access" className="nd-btn-lime mt-8 px-6 py-4 text-base">{c.plan.cta}</Link>
        </div>

        <div className="flex-[1_1_300px] rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <div className="nd-mono text-xs tracking-[0.06em] text-[var(--color-faint)]">{c.addon.name}</div>
          <div className="nd-mono mt-3 text-[28px] font-semibold" style={{ color: "var(--st-label)" }}>{c.addon.price}</div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.addon.yearly}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-text-muted)]">{c.addon.d}</p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)]">
        <ul className="mx-auto max-w-[1200px] px-6 py-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-[var(--color-text-muted)]">
          {c.notes.map((n) => (
            <li key={n} className="nd-mono">{n}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
