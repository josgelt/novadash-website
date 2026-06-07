import React from "react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

export default function Imprint() {
  const { t } = useI18n();
  useSEO('seo.imprint.title', 'seo.imprint.description');

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-16 px-6">
        <div className="container mx-auto max-w-4xl nd-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t('legal.imprintTitle')}
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 italic border-l-4 border-indigo-600 pl-4 mb-8">
              {t('legal.placeholderText')}
            </p>
            
            <h3>{t('legal.imprint.s1Title')}</h3>
            <p>
              <strong>{t('legal.imprint.companyName')}</strong><br />
              {t('legal.imprint.addressLine')}<br />
              {t('legal.imprint.cityLine')}<br />
              {t('legal.imprint.countryLine')}
            </p>

            <h3>{t('legal.imprint.representedTitle')}</h3>
            <p>{t('legal.imprint.representedText')}</p>

            <h3>{t('legal.imprint.contactTitle')}</h3>
            <p>
              {t('legal.imprint.phoneLine')}<br />
              {t('legal.imprint.emailLine')}<br />
              {t('legal.imprint.websiteLine')}
            </p>

            <h3>{t('legal.imprint.registerTitle')}</h3>
            <p>
              {t('legal.imprint.registerEntry')}<br />
              {t('legal.imprint.registerCourt')}<br />
              {t('legal.imprint.registerNumber')}
            </p>

            <h3>{t('legal.imprint.vatTitle')}</h3>
            <p>
              {t('legal.imprint.vatText')}<br />
              {t('legal.imprint.vatNumber')}
            </p>

            <h3>{t('legal.imprint.responsibleTitle')}</h3>
            <p>
              {t('legal.imprint.responsibleName')}<br />
              {t('legal.imprint.responsibleAddress')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
