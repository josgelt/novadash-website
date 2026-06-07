import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Package, 
  RefreshCw, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  Globe,
  Truck,
  CheckCircle2
} from "lucide-react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  const { t } = useI18n();
  useSEO('seo.home.title', 'seo.home.description');

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16 nd-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              {t('home.hero.title1')} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
                {t('home.hero.title2')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-indigo-600/20 transition-all hover:scale-105">
                <Link href="/early-access">{t('home.hero.cta1')}</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-medium border-slate-300 text-slate-700 hover:bg-slate-100 transition-all">
                <Link href="/funktionen">{t('home.hero.cta2')}</Link>
              </Button>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="relative mx-auto max-w-5xl nd-fade-in-up nd-delay-200">
            <div className="absolute inset-0 -top-10 -bottom-10 bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl -z-10 rounded-full"></div>
            <div className="bg-white rounded-2xl p-2 md:p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200/60 relative z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/dashboard.png`} 
                alt="NovaDash Interface" 
                className="w-full h-auto rounded-xl border border-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-12 border-y border-slate-200/60 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">
            {t('home.integration')}
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold font-serif">amazon</span>
            <span className="text-xl font-bold tracking-tighter text-blue-600">eBay</span>
            <span className="text-xl font-medium tracking-wide">Ecwid</span>
            <span className="text-xl font-black italic text-red-600">DHL</span>
            <span className="text-xl font-black text-blue-800">GLS</span>
            <span className="text-xl font-semibold">Sendcloud</span>
            <span className="text-xl font-bold tracking-tight">17TRACK</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 nd-fade-in-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm nd-hover-lift">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                    <RefreshCw size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t('home.problems.items.0.title')}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.problems.items.0.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8 nd-hover-lift">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    <Package size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t('home.problems.items.1.title')}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.problems.items.1.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm -mt-8 nd-hover-lift">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-4">
                    <Activity size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t('home.problems.items.2.title')}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.problems.items.2.desc')}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm nd-hover-lift">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Globe size={20} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{t('home.problems.items.3.title')}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{t('home.problems.items.3.desc')}</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t('home.problems.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('home.problems.subtitle')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{t('home.problems.bullet1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{t('home.problems.bullet2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">{t('home.problems.bullet3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Solution Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t('home.features.title1')} <br/>{t('home.features.title2')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-200 transition-all shadow-sm">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.features.items.0.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('home.features.items.0.desc')}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-200 transition-all shadow-sm">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.features.items.1.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('home.features.items.1.desc')}
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-200 transition-all shadow-sm">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t('home.features.items.2.title')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('home.features.items.2.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-24 px-6 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800/50 border border-indigo-700 text-indigo-200 text-xs font-semibold tracking-wide uppercase mb-6">
                <ShieldCheck size={14} />
                {t('home.trust.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                {t('home.trust.title')}
              </h2>
              <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                {t('home.trust.subtitle')}
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t('home.trust.items.0.title')}</h4>
                    <p className="text-sm text-indigo-300">{t('home.trust.items.0.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t('home.trust.items.1.title')}</h4>
                    <p className="text-sm text-indigo-300">{t('home.trust.items.1.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t('home.trust.items.2.title')}</h4>
                    <p className="text-sm text-indigo-300">{t('home.trust.items.2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-800/30 border border-indigo-700/50 p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
                  <ShieldCheck className="text-teal-400 shrink-0" size={32} />
                  <div>
                    <div className="text-white font-medium">{t('home.trust.card1Title')}</div>
                    <div className="text-xs text-indigo-300">{t('home.trust.card1Desc')}</div>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
                  <Activity className="text-teal-400 shrink-0" size={32} />
                  <div>
                    <div className="text-white font-medium">{t('home.trust.card2Title')}</div>
                    <div className="text-xs text-indigo-300">{t('home.trust.card2Desc')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-7 text-lg font-medium shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 group inline-flex items-center gap-2 mx-auto cursor-pointer">
            <Link href="/early-access">
              {t('home.cta.button')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
