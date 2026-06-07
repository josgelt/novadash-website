import React from "react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

export default function Terms() {
  const { t, lang } = useI18n();
  useSEO('seo.terms.title', 'seo.terms.description');

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl nd-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t('legal.termsTitle')}
          </h1>
          <p className="text-slate-500">{t('legal.dateLabel')} {new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US')}</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 italic border-l-4 border-indigo-600 pl-4 mb-8">
              {t('legal.placeholderText')}
            </p>
            
            <h2>{t('legal.terms.s1Title')}</h2>
            <p>{t('legal.terms.s1Text')}</p>

            <h2>{t('legal.terms.s2Title')}</h2>
            <p>{t('legal.terms.s2Text')}</p>

            <h2>{t('legal.terms.s3Title')}</h2>
            <p>{t('legal.terms.s3Text')}</p>

            <h2>{t('legal.terms.s4Title')}</h2>
            <p>{t('legal.terms.s4Text')}</p>

            <h2>{t('legal.terms.s5Title')}</h2>
            <p>{t('legal.terms.s5Text')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
