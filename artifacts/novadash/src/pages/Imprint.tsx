import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { Building2, UserCheck, Phone, FileText, Receipt, ShieldCheck } from "lucide-react";

export default function Imprint() {
  const { t } = useI18n();
  useSEO('seo.imprint.title', 'seo.imprint.description');

  const blocks = [
    {
      icon: Building2,
      accent: false,
      label: t('legal.imprint.s1Title'),
      lines: [
        { text: t('legal.imprint.companyName'), strong: true },
        { text: t('legal.imprint.addressLine') },
        { text: t('legal.imprint.cityLine') },
        { text: t('legal.imprint.countryLine') },
      ],
    },
    {
      icon: UserCheck,
      accent: true,
      label: t('legal.imprint.representedTitle'),
      lines: [{ text: t('legal.imprint.representedText') }],
    },
    {
      icon: Phone,
      accent: false,
      label: t('legal.imprint.contactTitle'),
      lines: [
        { text: t('legal.imprint.phoneLine') },
        { text: t('legal.imprint.emailLine') },
        { text: t('legal.imprint.websiteLine') },
      ],
    },
    {
      icon: FileText,
      accent: true,
      label: t('legal.imprint.registerTitle'),
      lines: [
        { text: t('legal.imprint.registerEntry') },
        { text: t('legal.imprint.registerCourt') },
        { text: t('legal.imprint.registerNumber') },
      ],
    },
    {
      icon: Receipt,
      accent: false,
      label: t('legal.imprint.vatTitle'),
      lines: [
        { text: t('legal.imprint.vatText') },
        { text: t('legal.imprint.vatNumber'), strong: true },
      ],
    },
    {
      icon: ShieldCheck,
      accent: true,
      label: t('legal.imprint.responsibleTitle'),
      lines: [
        { text: t('legal.imprint.responsibleName'), strong: true },
        { text: t('legal.imprint.responsibleAddress') },
      ],
    },
  ];

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
            {t('legal.imprintTitle')}
          </h1>
          <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8"></div>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {t('legal.placeholderText')}
          </p>
        </div>
      </section>

      {/* Imprint details */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {blocks.map((block, i) => {
              const Icon = block.icon;
              const color = block.accent ? 'var(--color-accent)' : 'var(--color-primary)';
              return (
                <div key={i} className="nd-botanical-card p-8 nd-botanical-fade-up">
                  <div
                    className="w-12 h-12 bg-[var(--color-bg)] rounded-lg flex items-center justify-center mb-6 border border-[var(--color-border)]"
                    style={{ color }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-4">
                    {block.label}
                  </div>
                  <div className="space-y-1.5">
                    {block.lines.map((line, j) => (
                      <p
                        key={j}
                        className={
                          line.strong
                            ? "text-base font-serif font-semibold text-[var(--color-text)]"
                            : "text-sm text-[var(--color-text-muted)] leading-relaxed font-mono"
                        }
                      >
                        {line.text}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
