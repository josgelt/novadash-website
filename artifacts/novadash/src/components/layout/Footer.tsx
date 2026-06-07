import { useI18n } from '@/i18n';
import { Link } from 'wouter';

export function Footer() {
  const { lang, setLang, t } = useI18n();

  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)] pt-20 pb-10 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded bg-[var(--color-primary)] flex items-center justify-center text-white font-serif italic text-sm">
                N
              </div>
              <span className="text-xl font-serif font-semibold tracking-wide text-[var(--color-text)]">
                NovaDash
              </span>
            </Link>
            <p className="text-sm font-mono text-[var(--color-text-muted)] mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
              <button
                onClick={() => setLang('de')}
                aria-label={t('nav.languageDe')}
                className={lang === 'de' ? "text-[var(--color-text)] font-semibold border-b border-[var(--color-text)] pb-0.5" : "hover:text-[var(--color-text)] transition-colors"}
              >
                DE
              </button>
              <span className="text-[var(--color-border)]">|</span>
              <button
                onClick={() => setLang('en')}
                aria-label={t('nav.languageEn')}
                className={lang === 'en' ? "text-[var(--color-text)] font-semibold border-b border-[var(--color-text)] pb-0.5" : "hover:text-[var(--color-text)] transition-colors"}
              >
                EN
              </button>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text)] mb-6">{t('footer.product')}</h5>
            <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/funktionen" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.features')}</Link></li>
              <li><Link href="/preise" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link href="/funktionen" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.integrations')}</Link></li>
              <li><Link href="/early-access" className="hover:text-[var(--color-primary)] transition-colors font-semibold">{t('nav.earlyAccess')}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text)] mb-6">{t('footer.company')}</h5>
            <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/ueber-uns" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/kontakt" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text)] mb-6">{t('footer.legal')}</h5>
            <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
              <li><Link href="/impressum" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.imprint')}</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/agb" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.terms')}</Link></li>
              <li><Link href="/sub-processor" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.subProcessor')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] text-center text-xs font-mono text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} NovaDash GmbH. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
