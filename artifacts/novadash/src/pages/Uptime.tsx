import React from "react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

const STATUS_URL = "https://novadash.betteruptime.com";

export default function Uptime() {
  const { t } = useI18n();
  useSEO('seo.uptime.title', 'seo.uptime.description');

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10 nd-botanical-fade-up">
          <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
            {t('uptime.eyebrow')}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
            {t('uptime.title')}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
            {t('uptime.subtitle')}
          </p>
        </div>
      </section>

      {/* Embedded status page */}
      <section className="pb-24 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="nd-botanical-card overflow-hidden">
            <iframe
              src={STATUS_URL}
              title={t('uptime.title')}
              className="w-full h-[800px] border-0 block bg-white"
              loading="lazy"
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href={STATUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wide text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
            >
              {t('uptime.openExternal')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
