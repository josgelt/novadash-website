import React from 'react';
import { useI18n } from '@/i18n';
import { Link, useLocation } from 'wouter';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Moon, Sun } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { getTheme, setTheme, type Theme } from '@/theme';
import { DesignSwitch } from '@/components/DesignSwitch';

function ThemeToggle() {
  const { lang } = useI18n();
  const [theme, setThemeState] = React.useState<Theme>(() => getTheme());
  const next: Theme = theme === 'dark' ? 'light' : 'dark';
  const label = lang === 'de'
    ? (next === 'light' ? 'Helle Ansicht' : 'Dunkle Ansicht')
    : (next === 'light' ? 'Light mode' : 'Dark mode');
  return (
    <button
      type="button"
      onClick={() => { setTheme(next); setThemeState(next); }}
      aria-label={label}
      title={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] transition-colors"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

// Design B: slim bar in the page colour, hairline border, lime call to action.
export function Header() {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/funktionen", label: t('nav.features') },
    { href: "/preise", label: t('nav.pricing') },
    { href: "/ueber-uns", label: t('nav.about') },
    { href: "/kontakt", label: t('nav.contact') },
  ];

  const langButton = (code: 'de' | 'en', label: string) => (
    <button
      onClick={() => setLang(code)}
      aria-label={label}
      aria-pressed={lang === code}
      className={lang === code ? "text-[var(--color-text)] font-semibold" : "text-[var(--color-faint)] hover:text-[var(--color-text)] transition-colors"}
    >
      {code.toUpperCase()}
    </button>
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/95 backdrop-blur border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center gap-6">
        <Logo size="md" href="/" />

        <nav aria-label="Hauptnavigation" className="hidden lg:flex flex-1 items-center gap-7 text-[15px]">
          {navLinks.map((link) => {
            const active = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "text-[var(--color-text)] font-semibold" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs nd-mono">
            {langButton('de', t('nav.languageDe'))}
            <span className="text-[var(--color-border)]" aria-hidden="true">|</span>
            {langButton('en', t('nav.languageEn'))}
          </div>
          <DesignSwitch className="hidden lg:inline text-[var(--color-faint)] hover:text-[var(--color-text)]" />
          <ThemeToggle />
          <Link href="/early-access" className="hidden lg:inline-flex nd-btn-lime px-[18px] py-3 text-[15px]">
            {t('nav.earlyAccess')}
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] transition-colors"
                aria-label={mobileOpen ? t('nav.close') : t('nav.menu')}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="nd-botanical w-[280px] bg-[var(--color-bg)] text-[var(--color-text)] border-l border-[var(--color-border)] flex flex-col gap-6">
              <nav className="flex flex-col gap-1 mt-8 text-base">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 ${location === link.href ? 'text-[var(--color-text)] font-semibold' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3 text-sm nd-mono border-t border-[var(--color-border)] pt-6">
                {langButton('de', t('nav.languageDe'))}
                {langButton('en', t('nav.languageEn'))}
              </div>
              <DesignSwitch className="self-start text-[var(--color-text-muted)]" />
              <Link href="/early-access" onClick={() => setMobileOpen(false)} className="nd-btn-lime px-6 py-3">
                {t('nav.earlyAccess')}
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
