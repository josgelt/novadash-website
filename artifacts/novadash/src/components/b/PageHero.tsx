import { Link } from "wouter";

// Design B page header: mono eyebrow, large title, muted subtitle.
export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-36 md:pt-40 pb-12">
      <p className="nd-mono mb-5 text-[13px] tracking-[0.04em] text-[var(--color-primary)]">{eyebrow}</p>
      <h1 className="mb-6 max-w-[900px] text-[40px] md:text-[60px] leading-[1.03] tracking-[-0.035em] font-bold">{title}</h1>
      {subtitle && <p className="max-w-[640px] text-[19px] leading-relaxed text-[var(--color-text-muted)]">{subtitle}</p>}
    </section>
  );
}

// Closing call to action shared by the B subpages.

export function CtaRow({ title, text, button, href = "/early-access" }: { title: string; text?: string; button: string; href?: string }) {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-[1200px] px-6 py-[72px] flex flex-wrap gap-7 items-center justify-between">
        <div className="flex-[1_1_520px]">
          <h2 className="mb-2.5 text-[30px] md:text-[38px] tracking-[-0.025em] font-bold">{title}</h2>
          {text && <p className="text-[17px] text-[var(--color-text-muted)]">{text}</p>}
        </div>
        <Link href={href} className="nd-btn-lime px-6 py-4 text-base">{button}</Link>
      </div>
    </section>
  );
}
