import { useI18n } from '@/i18n';
import { Link } from 'wouter';

export function Footer() {
  const { lang, setLang, t } = useI18n();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              NovaDash
            </span>
          </Link>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
            <Link href="/datenschutz" className="hover:text-indigo-600 transition-colors">{t('footer.privacy')}</Link>
            <Link href="/agb" className="hover:text-indigo-600 transition-colors">{t('footer.terms')}</Link>
            <Link href="/impressum" className="hover:text-indigo-600 transition-colors">{t('footer.imprint')}</Link>
            <Link href="/sub-processor" className="hover:text-indigo-600 transition-colors">{t('footer.subProcessor')}</Link>
            <Link href="/kontakt" className="hover:text-indigo-600 transition-colors">{t('nav.contact')}</Link>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <button 
              onClick={() => setLang('de')}
              className={`${lang === 'de' ? 'text-slate-900 border-slate-200' : 'hover:text-slate-900 border-transparent'} border px-2 py-1 rounded transition-colors`}
            >
              DE
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`${lang === 'en' ? 'text-slate-900 border-slate-200' : 'hover:text-slate-900 border-transparent'} border px-2 py-1 rounded transition-colors`}
            >
              EN
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} NovaDash GmbH. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
