import React from 'react';
import { useI18n } from '@/i18n';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [location] = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/funktionen", label: t('nav.features') },
    { href: "/preise", label: t('nav.pricing') },
    { href: "/ueber-uns", label: t('nav.about') },
    { href: "/kontakt", label: t('nav.contact') },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            N
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            NovaDash
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${location === link.href ? 'text-indigo-600' : 'hover:text-indigo-600'} transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 mr-2 border-r border-slate-200 pr-4">
            <button 
              onClick={() => setLang('de')}
              aria-label={t('nav.languageDe')}
              className={`${lang === 'de' ? 'text-slate-900' : 'hover:text-slate-900'} transition-colors`}
            >
              DE
            </button>
            <button 
              onClick={() => setLang('en')}
              aria-label={t('nav.languageEn')}
              className={`${lang === 'en' ? 'text-slate-900' : 'hover:text-slate-900'} transition-colors`}
            >
              EN
            </button>
          </div>
          <Button asChild className="hidden md:inline-flex bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-sm hover:shadow transition-all">
            <Link href="/early-access">{t('nav.earlyAccess')}</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={t('nav.menu')}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white flex flex-col gap-6">
              <nav className="flex flex-col gap-1 mt-8 text-base font-medium text-slate-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 ${location === link.href ? 'text-indigo-600' : 'hover:text-indigo-600'} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 border-t border-slate-200 pt-6">
                <button
                  onClick={() => setLang('de')}
                  aria-label={t('nav.languageDe')}
                  className={`${lang === 'de' ? 'text-slate-900 border-slate-200' : 'hover:text-slate-900 border-transparent'} border px-3 py-1 rounded transition-colors`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLang('en')}
                  aria-label={t('nav.languageEn')}
                  className={`${lang === 'en' ? 'text-slate-900 border-slate-200' : 'hover:text-slate-900 border-transparent'} border px-3 py-1 rounded transition-colors`}
                >
                  EN
                </button>
              </div>

              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-sm hover:shadow transition-all">
                <Link href="/early-access" onClick={() => setMobileOpen(false)}>{t('nav.earlyAccess')}</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
