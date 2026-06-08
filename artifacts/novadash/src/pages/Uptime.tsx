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
      <section className="pt-40 pb-12 px-6 md:px-12 relative overflow-hidden">
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

      {/* Embedded status page — full-bleed, borderless, no inner scroll */}
      <section className="relative z-10 bg-white">
        <iframe
          src={STATUS_URL}
          title={t('uptime.title')}
          className="block w-full border-0 bg-white"
          style={{ height: "1900px" }}
          scrolling="no"
          loading="lazy"
        />
      </section>
    </>
  );
}
