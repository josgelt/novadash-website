import { useI18n } from '@/i18n';
import { Link } from 'wouter';

// Design B: one hairline row — copyright left, links right.
export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "/funktionen", label: t('nav.features') },
    { href: "/preise", label: t('nav.pricing') },
    { href: "/kontakt", label: t('nav.contact') },
    { href: "/status", label: t('footer.status') },
    { href: "/impressum", label: t('footer.imprint') },
    { href: "/datenschutz", label: t('footer.privacy') },
    { href: "/agb", label: t('footer.terms') },
  ];

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1200px] px-6 py-7 flex flex-wrap gap-x-7 gap-y-4 text-sm text-[var(--color-faint)]">
        <span className="flex-1 min-w-[160px]">&copy; {new Date().getFullYear()} NovaDash</span>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-[var(--color-text)] transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
