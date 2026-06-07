import React from "react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

export default function Terms() {
  const { t, lang } = useI18n();
  useSEO('seo.terms.title', 'seo.terms.description');

  const sections = [
    { num: "01", title: t('legal.terms.s1Title'), text: t('legal.terms.s1Text') },
    { num: "02", title: t('legal.terms.s2Title'), text: t('legal.terms.s2Text') },
    { num: "03", title: t('legal.terms.s3Title'), text: t('legal.terms.s3Text') },
    { num: "04", title: t('legal.terms.s4Title'), text: t('legal.terms.s4Text') },
    { num: "05", title: t('legal.terms.s5Title'), text: t('legal.terms.s5Text') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10 nd-botanical-fade-up">
          <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            {t('legal.eyebrow')}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
            {t('legal.termsTitle')}
          </h1>
          <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8"></div>
          <p className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
            {t('legal.dateLabel')} {new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US')}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-[var(--color-text-muted)] italic leading-relaxed border-l-2 border-[var(--color-primary)] pl-6 mb-16">
            {t('legal.placeholderText')}
          </p>

          <div className="space-y-14">
            {sections.map((section, idx) => (
              <div key={idx} className="nd-botanical-fade-up">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm font-mono font-semibold tracking-widest text-[var(--color-primary)] shrink-0">
                    {section.num}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text)] leading-tight">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-lg md:pl-10">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
