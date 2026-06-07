import React from "react";
import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";

export default function About() {
  const { t, lang } = useI18n();
  useSEO('seo.about.title', 'seo.about.description');

  const team = translations[lang].about.team;

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center nd-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('about.title')}
          </h1>
          <p className="text-xl text-slate-600">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none mb-20 nd-fade-in-up">
            <p className="text-xl leading-relaxed text-slate-600">
              {t('about.content')}
            </p>
          </div>
          
          <div className="nd-fade-in-up nd-delay-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t('about.teamTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mx-auto mb-4 overflow-hidden flex items-center justify-center text-slate-400 font-bold text-2xl">
                    {member.name.replace(/\[|\]/g, '').substring(0, 1)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600 font-medium mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
