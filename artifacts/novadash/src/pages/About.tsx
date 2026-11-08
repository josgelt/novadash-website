import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { useDesign } from "@/theme";
import { pagesB } from "@/i18n/pages-b";
import { PageHero, CtaRow } from "@/components/b/PageHero";
import AboutClassic from "./AboutClassic";

export default function About() {
  const design = useDesign();
  return design === "classic" ? <AboutClassic /> : <AboutB />;
}

function AboutB() {
  const { lang } = useI18n();
  useSEO("seo.about.title", "seo.about.description");
  const c = pagesB[lang].about;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
          {c.blocks.map((b, i) => (
            <article key={b.t} className="bg-[var(--color-surface)] px-7 pt-8 pb-9">
              <div className="nd-mono mb-4 text-xs text-[var(--color-primary)]">[0{i + 1}]</div>
              <h2 className="mb-2.5 text-[21px] tracking-[-0.015em] font-semibold">{b.t}</h2>
              <p className="text-[15px] leading-relaxed text-[var(--color-text-muted)]">{b.d}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaRow title={c.title} button={c.cta} href="/kontakt" />
    </>
  );
}
