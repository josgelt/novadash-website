import { useI18n } from "@/i18n";
import { translations } from "@/i18n/translations";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { t, lang } = useI18n();
  useSEO('seo.about.title', 'seo.about.description');

  const team = translations[lang].about.team;

  const title = t('about.title');
  const titleWords = title.split(' ');
  const titleLast = titleWords.length > 1 ? titleWords.pop() : '';
  const titleStart = titleWords.join(' ');

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 nd-botanical-fade-up">
          <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            {t('about.eyebrow')}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
            {titleLast ? (
              <>
                {titleStart}{" "}
                <span className="italic text-[var(--color-primary)]">{titleLast}</span>
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission / Content */}
      <section className="py-28 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="nd-botanical-fade-up">
            <div className="w-12 h-1 rounded bg-[var(--color-primary)] mb-8"></div>
            <p className="text-2xl md:text-3xl font-serif text-[var(--color-text)] leading-relaxed">
              {t('about.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-6 md:px-12 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)] relative z-10 overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-40 pointer-events-none z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 nd-botanical-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
              {t('about.teamTitle')}
            </h2>
            <div className="w-12 h-1 rounded bg-[var(--color-text)] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className={`nd-botanical-card p-8 text-center nd-botanical-fade-up ${i === 1 ? 'nd-delay-100' : i === 2 ? 'nd-delay-200' : ''}`}
              >
                <div className="w-20 h-20 rounded-full bg-[var(--color-primary)] text-white font-serif italic mx-auto mb-6 flex items-center justify-center text-3xl">
                  {member.name.replace(/\[|\]/g, '').substring(0, 1)}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--color-text)]">{member.name}</h3>
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mt-3">
                  {member.role}
                </p>
              </div>
            ))}
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
