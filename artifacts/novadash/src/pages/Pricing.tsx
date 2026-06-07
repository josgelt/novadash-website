import React from "react";
import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  const { t, lang } = useI18n();
  useSEO('seo.pricing.title', 'seo.pricing.description');

  const tiers = translations[lang].pricing.tiers;
  const popularIndex = 1;

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center nd-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-slate-600 mb-4">
            {t('pricing.subtitle')}
          </p>
          <div className="inline-block bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100">
            {t('pricing.earlyAccess')}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const popular = index === popularIndex;
              return (
                <div 
                  key={tier.name} 
                  className={`relative p-8 rounded-3xl border ${popular ? 'border-indigo-600 shadow-xl shadow-indigo-600/10' : 'border-slate-200 shadow-sm'} bg-white flex flex-col nd-hover-lift`}
                >
                  {popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {t('pricing.popular')}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="text-xl text-slate-600 mb-6 font-medium">{tier.price}</div>
                  
                  <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={20} />
                          <span className="text-slate-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className={`w-full rounded-full py-6 text-base font-medium ${popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                    <Link href="/early-access">{t('nav.earlyAccess')}</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
