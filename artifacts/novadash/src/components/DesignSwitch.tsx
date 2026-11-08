import { useI18n } from '@/i18n';
import { setDesign, useDesign } from '@/theme';

// Lets visitors go back to the previous design (and forward again).
export function DesignSwitch({ className = "" }: { className?: string }) {
  const { lang } = useI18n();
  const design = useDesign();
  const toClassic = design === 'b';
  const label = toClassic
    ? (lang === 'de' ? 'Klassisches Design' : 'Classic design')
    : (lang === 'de' ? 'Neues Design' : 'New design');
  return (
    <button
      type="button"
      onClick={() => setDesign(toClassic ? 'classic' : 'b')}
      className={`text-xs underline underline-offset-4 decoration-dotted hover:no-underline ${className}`}
    >
      {label}
    </button>
  );
}
