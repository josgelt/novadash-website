import { Link } from "wouter";
import { useI18n } from "@/i18n";
import type { LegalDoc } from "@/i18n/legal-content";
import { legalContent } from "@/i18n/legal-content";

function RichText({ text }: { text: string }) {
  const { lang } = useI18n();
  const parts = text.split("{imprint}");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <Link href="/impressum" className="text-[var(--color-primary)] underline underline-offset-2">
              {legalContent[lang].imprintLabel}
            </Link>
          )}
        </span>
      ))}
    </>
  );
}

export function LegalDocument({ title, doc }: { title: string; doc: LegalDoc }) {
  const { t } = useI18n();

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
            {title}
          </h1>
          <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8"></div>
          <p className="text-sm font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
            {t('legal.dateLabel')} {doc.updated}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-4xl">
          {doc.intro && (
            <p className="text-lg text-[var(--color-text-muted)] italic leading-relaxed border-l-2 border-[var(--color-primary)] pl-6 mb-16">
              {doc.intro}
            </p>
          )}

          <div className="space-y-14">
            {doc.sections.map((section, idx) => (
              <div key={idx}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm font-mono font-semibold tracking-widest text-[var(--color-primary)] shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[var(--color-text)] leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4 md:pl-10">
                  {section.body.map((item, j) =>
                    Array.isArray(item) ? (
                      <ul key={j} className="list-disc pl-6 space-y-1.5 text-[var(--color-text-muted)] leading-relaxed text-lg">
                        {item.map((li, k) => <li key={k}><RichText text={li} /></li>)}
                      </ul>
                    ) : (
                      <p key={j} className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                        <RichText text={item} />
                      </p>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
