import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { useDesign } from "@/theme";
import { pagesB } from "@/i18n/pages-b";
import { homeB } from "@/i18n/home-b";
import { PageHero, CtaRow } from "@/components/b/PageHero";
import FeaturesClassic from "./FeaturesClassic";

export default function Features() {
  const design = useDesign();
  return design === "classic" ? <FeaturesClassic /> : <FeaturesB />;
}

function FeaturesB() {
  const { lang } = useI18n();
  useSEO("seo.features.title", "seo.features.description");
  const c = pagesB[lang].features;
  const cta = homeB[lang];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
          {c.sections.map((s) => (
            <article key={s.n} className="bg-[var(--color-surface)] px-7 pt-8 pb-9">
              <div className="nd-mono mb-4 text-xs text-[var(--color-primary)]">{s.n}</div>
              <h2 className="mb-2.5 text-[22px] tracking-[-0.015em] font-semibold">{s.t}</h2>
              <p className="mb-5 text-[15px] leading-relaxed text-[var(--color-text-muted)]">{s.d}</p>
              <ul className="flex flex-wrap gap-2" aria-label={s.t}>
                {s.tags.map((tag) => (
                  <li key={tag} className="nd-mono rounded border border-[var(--color-border)] px-2 py-1 text-[11px] text-[var(--color-faint)]">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 flex flex-wrap gap-10">
          <h2 className="flex-[1_1_320px] text-[28px] md:text-[34px] leading-tight tracking-[-0.025em] font-bold">{c.security.title}</h2>
          <ul className="flex-[2_1_520px] grid gap-3">
            {c.security.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-[15px]">
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--st-sent)]" aria-hidden="true"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaRow title={cta.ctaTitle} text={cta.ctaText} button={cta.ctaPrimary} />
    </>
  );
}
