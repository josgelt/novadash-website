import React from 'react';
import { useI18n } from '@/i18n';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
        <Logo size="md" href="/" />

        <nav className="hidden md:flex items-center gap-10 text-[14px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
          {navLinks.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-[var(--color-primary)] font-semibold border-b-2 border-[var(--color-primary)] pb-1 transition-colors"
                    : "hover:text-[var(--color-primary)] transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] mr-2">
            <button
              onClick={() => setLang('de')}
              aria-label={t('nav.languageDe')}
              className={lang === 'de' ? "text-[var(--color-text)] font-semibold" : "hover:text-[var(--color-text)] transition-colors"}
            >
              DE
            </button>
            <span className="text-[var(--color-border)]">|</span>
            <button
              onClick={() => setLang('en')}
              aria-label={t('nav.languageEn')}
              className={lang === 'en' ? "text-[var(--color-text)] font-semibold" : "hover:text-[var(--color-text)] transition-colors"}
            >
              EN
            </button>
          </div>
          <Button asChild className="hidden md:inline-flex nd-botanical-btn-primary px-6 py-5 text-sm uppercase tracking-wide font-mono">
            <Link href="/early-access">{t('nav.earlyAccess')}</Link>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] transition-colors"
                aria-label={mobileOpen ? t('nav.close') : t('nav.menu')}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[var(--color-bg)] border-l border-[var(--color-border)] flex flex-col gap-6">
              <nav className="flex flex-col gap-1 mt-8 text-sm font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
                {navLinks.map((link) => {
                  const active = location === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`py-2 ${active ? 'text-[var(--color-primary)] font-semibold' : 'hover:text-[var(--color-primary)]'} transition-colors`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-6">
                <button
                  onClick={() => setLang('de')}
                  aria-label={t('nav.languageDe')}
                  className={`${lang === 'de' ? 'text-[var(--color-text)] border-[var(--color-border)]' : 'hover:text-[var(--color-text)] border-transparent'} border px-3 py-1 rounded transition-colors`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLang('en')}
                  aria-label={t('nav.languageEn')}
                  className={`${lang === 'en' ? 'text-[var(--color-text)] border-[var(--color-border)]' : 'hover:text-[var(--color-text)] border-transparent'} border px-3 py-1 rounded transition-colors`}
                >
                  EN
                </button>
              </div>

              <Button asChild className="nd-botanical-btn-primary px-6 py-5 text-sm uppercase tracking-wide font-mono">
                <Link href="/early-access" onClick={() => setMobileOpen(false)}>{t('nav.earlyAccess')}</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
