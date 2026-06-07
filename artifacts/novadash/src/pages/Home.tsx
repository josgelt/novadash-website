import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Package,
  ShieldCheck,
  Activity,
  ArrowRight,
  Globe,
  Truck,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  const { t } = useI18n();
  useSEO('seo.home.title', 'seo.home.description');

  const heroTitle2 = t('home.hero.title2');
  const [heroAccent, ...heroRest] = heroTitle2.split(' ');

  const bullets = [
    t('home.problems.bullet1'),
    t('home.problems.bullet2'),
    t('home.problems.bullet3'),
  ];

  const featureCards = [
    { icon: Globe, accent: false, title: t('home.features.items.0.title'), desc: t('home.features.items.0.desc') },
    { icon: Truck, accent: true, title: t('home.features.items.1.title'), desc: t('home.features.items.1.desc') },
    { icon: Activity, accent: false, title: t('home.features.items.2.title'), desc: t('home.features.items.2.desc') },
  ];

  const trustCards = [
    { num: "01", title: t('home.trust.items.0.title'), desc: t('home.trust.items.0.desc') },
    { num: "02", title: t('home.trust.items.1.title'), desc: t('home.trust.items.1.desc') },
    { num: "03", title: t('home.trust.items.2.title'), desc: t('home.trust.items.2.desc') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-28 px-6 md:px-12 overflow-hidden relative">
        <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 nd-botanical-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[var(--color-primary)]/30 bg-white shadow-sm rounded text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)]">
                <Terminal size={14} className="text-[var(--color-accent)]" />
                {t('home.hero.badge')}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-8 leading-[1.1] tracking-tight">
                {t('home.hero.title1')}<br />
                <span className="italic text-[var(--color-primary)] font-medium">{heroAccent}</span> {heroRest.join(' ')}
              </h1>
              <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-lg">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild className="w-full sm:w-auto nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide flex items-center gap-3">
                  <Link href="/early-access">
                    {t('home.hero.cta1')}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild className="w-full sm:w-auto nd-botanical-btn-secondary px-8 py-6 text-sm font-mono uppercase tracking-wide">
                  <Link href="/funktionen">{t('home.hero.cta2')}</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative nd-botanical-fade-up nd-delay-200">
              <div className="aspect-[4/3] md:aspect-[16/10] relative rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-2xl shadow-[var(--color-primary)]/10 ring-1 ring-black/5">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-50 border-b border-[var(--color-border)] flex items-center px-4 gap-2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}images/nd-editorial-fresh-hero.png`}
                  alt={t('home.hero.imageAlt')}
                  className="object-cover w-full h-full pt-8"
                />
              </div>
              {/* Decorative floating element */}
              <div className="absolute -bottom-6 -left-8 bg-white p-4 border border-[var(--color-border)] rounded-lg shadow-xl max-w-xs hidden md:block z-20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)]">
                    <Package size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">{t('home.hero.orderId')}</div>
                    <div className="text-sm font-mono font-bold text-[var(--color-text)]">#10492-DE</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)]">
                  <span>{t('home.hero.statusLabel')}</span>
                  <span className="text-[var(--color-primary)] font-semibold">{t('home.hero.statusValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-12 bg-white border-y border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-center text-xs font-mono tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-8">
            {t('home.integration')}
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center text-[var(--color-text-muted)]/60 hover:text-[var(--color-primary)] transition-colors duration-500">
            <span className="text-xl md:text-2xl font-serif">Amazon</span>
            <span className="text-xl md:text-2xl font-serif italic">eBay</span>
            <span className="text-xl md:text-2xl font-sans tracking-tight font-semibold">Shopify</span>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest">DHL</span>
            <span className="text-xl md:text-2xl font-sans font-bold">GLS</span>
            <span className="text-xl md:text-2xl font-serif">Sendcloud</span>
            <span className="text-xl md:text-2xl font-mono font-semibold tracking-wider">REST_API</span>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="absolute inset-0 nd-botanical-grid opacity-30 pointer-events-none z-0"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 nd-botanical-fade-up">
              <div className="aspect-[4/5] relative rounded-xl overflow-hidden border border-[var(--color-border)] shadow-xl bg-white p-2">
                <div className="w-full h-full rounded-lg overflow-hidden border border-[var(--color-border)]/50">
                  <img
                    src={`${import.meta.env.BASE_URL}images/nd-editorial-fresh-process.png`}
                    alt={t('home.problems.title')}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 nd-botanical-fade-up">
              <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
                {t('home.problems.eyebrow')}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.15]">
                {t('home.problems.title')}
              </h2>
              <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8"></div>
              <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed">
                {t('home.problems.subtitle')}
              </p>
              <div className="space-y-4">
                {bullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-white border border-[var(--color-border)] shadow-sm hover:border-[var(--color-primary)]/50 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-[var(--color-primary)]" size={14} />
                    </div>
                    <span className="text-[var(--color-text)] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 max-w-2xl mx-auto text-center">
            <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
              {t('home.features.eyebrow')}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
              {t('home.features.title1')}<br />
              <span className="italic text-[var(--color-primary)]">{t('home.features.title2')}</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((f, i) => {
              const Icon = f.icon;
              const color = f.accent ? 'var(--color-accent)' : 'var(--color-primary)';
              return (
                <div key={i} className="nd-botanical-card p-8 group">
                  <div
                    className="w-12 h-12 bg-[var(--color-bg)] rounded-lg flex items-center justify-center mb-8 border border-[var(--color-border)] transition-colors group-hover:text-white"
                    style={{ color }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[var(--color-text)] mb-3">{f.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-28 px-6 md:px-12 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] text-center relative z-10 overflow-hidden">
        <div className="absolute inset-0 nd-botanical-dots opacity-40 pointer-events-none z-0"></div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-text)] mb-4">{t('home.pricingTeaser.title')}</h2>
          <p className="text-[var(--color-text-muted)] mb-10 text-lg">{t('home.pricingTeaser.subtitle')}</p>
          <Link href="/preise" className="inline-block p-10 bg-white border border-[var(--color-border)] rounded-2xl shadow-xl shadow-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/50 transition-colors">
            <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs font-mono font-bold tracking-widest uppercase mb-6">{t('home.pricingTeaser.badge')}</div>
            <div className="text-5xl md:text-6xl font-mono text-[var(--color-text)] font-semibold mb-3 tracking-tighter">
              {t('home.pricingTeaser.price')} <span className="text-lg text-[var(--color-text-muted)] font-sans font-normal tracking-normal">{t('home.pricingTeaser.perMonth')}</span>
            </div>
            <div className="text-sm font-mono text-[var(--color-primary)] mt-6 uppercase tracking-wide">{t('home.pricingTeaser.cta')}</div>
          </Link>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-28 px-6 md:px-12 bg-[var(--color-secondary)] text-white relative z-10">
        <div className="absolute inset-0 nd-botanical-grid opacity-10 pointer-events-none z-0"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-6">
                {t('home.trust.eyebrow')}
              </div>
              <h2 className="text-4xl font-serif font-semibold mb-8 leading-tight text-white">
                {t('home.trust.title')}
              </h2>
              <div className="w-12 h-1 rounded bg-[var(--color-primary)] mb-8"></div>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                {t('home.trust.subtitle')}
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 rounded text-xs font-mono font-semibold tracking-widest uppercase text-white">
                <ShieldCheck size={16} className="text-[var(--color-primary)]" />
                {t('home.trust.badge')}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
              {trustCards.map((c, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-lg bg-white/5 hover:border-[var(--color-primary)]/50 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase">{c.num}</span> {c.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed pl-10">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.05] rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
            {t('home.cta.title1')}<br />
            <span className="italic text-[var(--color-primary)]">{t('home.cta.title2')}</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <Button asChild className="nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide flex items-center gap-3 mx-auto shadow-lg shadow-[var(--color-primary)]/20">
            <Link href="/early-access">
              {t('home.cta.button')}
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
