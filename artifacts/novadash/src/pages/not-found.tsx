import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useI18n();
  useSEO('seo.notFound.title', 'seo.notFound.description');

  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-2xl text-center relative z-10 nd-botanical-fade-up">
        <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-6">
          {t('notFound.eyebrow')}
        </div>
        <div className="text-8xl md:text-[10rem] font-mono font-semibold text-[var(--color-primary)] leading-none mb-8 tracking-tighter">
          {t('notFound.code')}
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.1] tracking-tight">
          <span className="italic text-[var(--color-primary)]">{t('notFound.title')}</span>
        </h1>
        <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8 mx-auto"></div>
        <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-md mx-auto leading-relaxed">
          {t('notFound.text')}
        </p>
        <Button asChild className="nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide flex items-center gap-3 mx-auto">
          <Link href="/">
            <ArrowLeft size={16} />
            {t('notFound.back')}
          </Link>
        </Button>
      </div>
    </section>
  );
}
