import React from "react";
import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";
import { CheckCircle2, Globe, Truck, Activity, ShieldCheck } from "lucide-react";

export default function Features() {
  const { t, lang } = useI18n();
  useSEO('seo.features.title', 'seo.features.description');

  const sections = translations[lang].features.sections;

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center nd-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('features.title')}
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            {t('features.subtitle')}
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('features.hero')}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 nd-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('features.sections.0.title')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('features.sections.0.desc')}
              </p>
              <ul className="space-y-3">
                {sections[0].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 nd-fade-in-up nd-delay-100">
              <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center border border-slate-200 shadow-inner">
                {/* Placeholder for feature image */}
                <div className="text-slate-400 font-medium">{sections[0].placeholder}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="nd-fade-in-up">
              <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center border border-slate-200 shadow-inner">
                {/* Placeholder for feature image */}
                <div className="text-slate-400 font-medium">{sections[1].placeholder}</div>
              </div>
            </div>
            <div className="nd-fade-in-up nd-delay-100">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                <Truck size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('features.sections.1.title')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('features.sections.1.desc')}
              </p>
              <ul className="space-y-3">
                {sections[1].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 nd-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Activity size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('features.sections.2.title')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('features.sections.2.desc')}
              </p>
              <ul className="space-y-3">
                {sections[2].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 nd-fade-in-up nd-delay-100">
              <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center border border-slate-200 shadow-inner">
                {/* Placeholder for feature image */}
                <div className="text-slate-400 font-medium">{sections[2].placeholder}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="nd-fade-in-up">
              <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center border border-slate-200 shadow-inner">
                {/* Placeholder for feature image */}
                <div className="text-slate-400 font-medium">{sections[3].placeholder}</div>
              </div>
            </div>
            <div className="nd-fade-in-up nd-delay-100">
              <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('features.sections.3.title')}</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('features.sections.3.desc')}
              </p>
              <ul className="space-y-3">
                {sections[3].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
