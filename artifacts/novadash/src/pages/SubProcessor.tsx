import React from "react";
import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";

export default function SubProcessor() {
  const { t, lang } = useI18n();
  useSEO('seo.subProcessor.title', 'seo.subProcessor.description');

  const rows = translations[lang].legal.subProcessor.rows;

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
            {t('legal.subProcessorTitle')}
          </h1>
          <p className="text-sm font-mono uppercase tracking-wide text-[var(--color-text-muted)]">
            {t('legal.dateLabel')} {new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed border-l-2 border-[var(--color-primary)] pl-6 mb-8 italic">
            {t('legal.placeholderText')}
          </p>
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-12">
            {t('legal.subProcessor.intro')}
          </p>

          <div className="nd-botanical-card overflow-hidden">
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--color-border)]">
                    <th className="px-6 py-4 text-xs font-mono font-semibold uppercase tracking-wide text-[var(--color-text)] w-[260px]">
                      {t('legal.subProcessor.colName')}
                    </th>
                    <th className="px-6 py-4 text-xs font-mono font-semibold uppercase tracking-wide text-[var(--color-text)]">
                      {t('legal.subProcessor.colPurpose')}
                    </th>
                    <th className="px-6 py-4 text-xs font-mono font-semibold uppercase tracking-wide text-[var(--color-text)]">
                      {t('legal.subProcessor.colLocation')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[var(--color-border)] last:border-b-0 hover:bg-[var(--color-bg-alt)] transition-colors"
                    >
                      <td className="px-6 py-5 font-mono text-sm font-semibold text-[var(--color-text)]">{row.name}</td>
                      <td className="px-6 py-5 text-sm text-[var(--color-text-muted)] leading-relaxed">{row.purpose}</td>
                      <td className="px-6 py-5 text-sm text-[var(--color-text-muted)]">{row.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked */}
            <div className="md:hidden divide-y divide-[var(--color-border)]">
              {rows.map((row, i) => (
                <div key={i} className="p-6 hover:bg-[var(--color-bg-alt)] transition-colors">
                  <div className="font-mono text-sm font-semibold text-[var(--color-text)] mb-4">{row.name}</div>
                  <div className="mb-3">
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-wide text-[var(--color-primary)] mb-1">
                      {t('legal.subProcessor.colPurpose')}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)] leading-relaxed">{row.purpose}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-semibold uppercase tracking-wide text-[var(--color-primary)] mb-1">
                      {t('legal.subProcessor.colLocation')}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">{row.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
