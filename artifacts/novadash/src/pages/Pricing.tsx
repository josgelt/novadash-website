import React from "react";
import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const { t, lang } = useI18n();
  useSEO('seo.pricing.title', 'seo.pricing.description');

  const tiers = translations[lang].pricing.tiers;
  const popularIndex = 1;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 nd-botanical-fade-up">
          <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            {t('pricing.eyebrow')}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] mb-8">
            {t('pricing.subtitle')}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-primary)]/30 bg-white shadow-sm rounded text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)]">
            {t('pricing.earlyAccess')}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-28 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, index) => {
              const popular = index === popularIndex;
              return (
                <div
                  key={tier.name}
                  className={`nd-botanical-card p-8 flex flex-col relative ${popular ? 'border-[var(--color-primary)] ring-1 ring-[var(--color-primary)] shadow-xl shadow-[var(--color-primary)]/10 md:-mt-4' : ''}`}
                >
                  {popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-primary)] text-white px-4 py-1 rounded text-xs font-mono font-semibold uppercase tracking-widest">
                      {t('pricing.popular')}
                    </div>
                  )}
                  <h3 className="text-2xl font-serif font-semibold text-[var(--color-text)] mb-2">{tier.name}</h3>
                  <div className="text-lg font-mono text-[var(--color-text-muted)] mb-6">{tier.price}</div>
                  <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8"></div>

                  <div className="flex-1">
                    <ul className="space-y-4 mb-10">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="text-[var(--color-primary)]" size={14} />
                          </div>
                          <span className="text-[var(--color-text)] text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className={`w-full px-8 py-6 text-sm font-mono uppercase tracking-wide ${popular ? 'nd-botanical-btn-primary' : 'nd-botanical-btn-secondary'}`}
                  >
                    <Link href="/early-access">{t('nav.earlyAccess')}</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-secondary)] text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 nd-botanical-grid opacity-10 pointer-events-none z-0"></div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 leading-tight text-white">
            {t('home.cta.title1')}{" "}
            <span className="italic text-[var(--color-primary)]">{t('home.cta.title2')}</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Button asChild className="nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide flex items-center gap-3 mx-auto">
            <Link href="/early-access">
              {t('home.cta.button')}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
