import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

export default function Privacy() {
  const { t, lang } = useI18n();
  useSEO('seo.privacy.title', 'seo.privacy.description');

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
            {t('legal.privacyTitle')}
          </h1>
          <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-6"></div>
          <p className="text-sm font-mono uppercase tracking-wide text-[var(--color-text-muted)]">
            {t('legal.dateLabel')} {new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US')}
          </p>
        </div>
      </section>

      {/* Document Body */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-4xl nd-botanical-fade-up">
          <p className="text-lg text-[var(--color-text-muted)] italic leading-relaxed border-l-2 border-[var(--color-primary)] pl-6 mb-16">
            {t('legal.placeholderText')}
          </p>

          <div className="space-y-16">
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
                {t('legal.privacy.s1Title')}
              </h2>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--color-text)] mb-3">
                {t('legal.privacy.generalSubtitle')}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {t('legal.privacy.generalText')}
              </p>
            </div>

            {/* Section 2 */}
            <div className="pt-12 border-t border-[var(--color-border)]">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
                {t('legal.privacy.s2Title')}
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {t('legal.privacy.s2Text')}
              </p>
            </div>

            {/* Section 3 */}
            <div className="pt-12 border-t border-[var(--color-border)]">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
                {t('legal.privacy.s3Title')}
              </h2>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--color-text)] mb-3">
                {t('legal.privacy.dataProtectionSubtitle')}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-10">
                {t('legal.privacy.dataProtectionText')}
              </p>

              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-[var(--color-text)] mb-3">
                {t('legal.privacy.responsibleSubtitle')}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                {t('legal.privacy.responsibleIntro')}
              </p>

              <div className="nd-botanical-card p-8">
                <p className="text-[var(--color-text)] font-medium leading-relaxed mb-4">
                  <span className="font-serif text-xl">{t('legal.privacy.responsibleName')}</span><br />
                  <span className="text-[var(--color-text-muted)]">{t('legal.privacy.addressLine')}</span><br />
                  <span className="text-[var(--color-text-muted)]">{t('legal.privacy.cityLine')}</span>
                </p>
                <p className="text-sm font-mono text-[var(--color-text-muted)] leading-relaxed">
                  {t('legal.privacy.phoneLine')}<br />
                  {t('legal.privacy.emailLine')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
