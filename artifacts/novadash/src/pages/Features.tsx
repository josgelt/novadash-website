import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Truck, Activity, ShieldCheck, ArrowRight } from "lucide-react";

const sectionIcons = [Globe, Truck, Activity, ShieldCheck];

export default function Features() {
  const { t, lang } = useI18n();
  useSEO('seo.features.title', 'seo.features.description');

  const sections = translations[lang].features.sections;

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 nd-botanical-fade-up">
          <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            {t('features.eyebrow')}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
            {t('features.title')}
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] mb-6">
            {t('features.subtitle')}
          </p>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('features.hero')}
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, idx) => {
        const Icon = sectionIcons[idx] ?? Globe;
        const reversed = idx % 2 === 1;
        const accent = idx % 2 === 1;
        const color = accent ? 'var(--color-accent)' : 'var(--color-primary)';
        const onWhite = idx % 2 === 0;

        return (
          <section
            key={idx}
            className={`py-28 px-6 md:px-12 relative z-10 border-t border-[var(--color-border)] ${onWhite ? 'bg-white' : 'bg-[var(--color-bg-alt)]'}`}
          >
            <div className="container mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`nd-botanical-fade-up ${reversed ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <div
                    className="w-14 h-14 bg-[var(--color-bg)] rounded-lg flex items-center justify-center mb-8 border border-[var(--color-border)]"
                    style={{ color }}
                  >
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-text)] mb-5 leading-tight">
                    {t(`features.sections.${idx}.title`)}
                  </h2>
                  <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-6"></div>
                  <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
                    {t(`features.sections.${idx}.desc`)}
                  </p>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="text-[var(--color-primary)]" size={14} />
                        </div>
                        <span className="text-[var(--color-text)] font-medium font-mono text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`nd-botanical-fade-up nd-delay-100 ${reversed ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-xl shadow-[var(--color-primary)]/5 p-2">
                    <div className="absolute top-2 left-2 right-2 h-8 bg-gray-50 border-b border-[var(--color-border)] flex items-center px-4 gap-2 z-10 rounded-t-lg">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="w-full h-full rounded-lg overflow-hidden border border-[var(--color-border)]/50 flex items-center justify-center pt-8 nd-botanical-grid">
                      <div className="text-[var(--color-text-muted)] font-mono text-sm uppercase tracking-wider text-center px-6">
                        {section.placeholder}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

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
