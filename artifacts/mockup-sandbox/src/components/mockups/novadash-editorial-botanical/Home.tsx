import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  RefreshCw, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  Globe,
  Truck,
  CheckCircle2,
  Terminal
} from "lucide-react";
import "./_group.css";

export function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="nd-botanical min-h-screen selection:bg-[var(--color-primary)] selection:text-white relative">
      {/* Background Dots */}
      <div className="absolute inset-0 nd-botanical-dots opacity-50 pointer-events-none z-0"></div>

      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-[var(--color-primary)] flex items-center justify-center text-white font-serif italic text-lg shadow-sm">
              N
            </div>
            <span className="text-2xl font-serif font-medium tracking-wide text-[var(--color-text)]">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-[14px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
            <a href="#" className="text-[var(--color-primary)] font-semibold border-b-2 border-[var(--color-primary)] pb-1 transition-colors">Home</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Preise</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)] mr-2">
              <span className="text-[var(--color-text)] font-semibold cursor-pointer">DE</span>
              <span className="text-[var(--color-border)]">|</span>
              <span className="cursor-pointer hover:text-[var(--color-text)] transition-colors">EN</span>
            </div>
            <Button className="nd-botanical-btn-primary px-6 py-5 text-sm uppercase tracking-wide font-mono">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-40 pb-28 px-6 md:px-12 overflow-hidden relative">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-botanical-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[var(--color-primary)]/30 bg-white shadow-sm rounded text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)]">
                  <Terminal size={14} className="text-[var(--color-accent)]" />
                  v2.0 Beta Live
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-8 leading-[1.1] tracking-tight">
                  Alle Marktplätze.<br />
                  <span className="italic text-[var(--color-primary)] font-medium">Eine</span> Oberfläche.
                </h1>
                <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-lg">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="w-full sm:w-auto nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={16} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-botanical-btn-secondary px-8 py-6 text-sm font-mono uppercase tracking-wide">
                    Funktionen ansehen
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
                    src="/__mockup/images/nd-editorial-fresh-hero.png" 
                    alt="Clean order management dashboard" 
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
                      <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">Order ID</div>
                      <div className="text-sm font-mono font-bold text-[var(--color-text)]">#10492-DE</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--color-text-muted)]">
                    <span>Status</span>
                    <span className="text-[var(--color-primary)] font-semibold">SYNCED</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-12 bg-white border-y border-[var(--color-border)] relative z-10">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-xs font-mono tracking-[0.2em] text-[var(--color-text-muted)] uppercase mb-8">
              Nahtlose API-Integrationen
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
                      src="/__mockup/images/nd-editorial-fresh-process.png" 
                      alt="Minimalist shipping labels and boxes" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-botanical-fade-up">
                <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
                  Skalierbarkeit
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.15]">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[var(--color-primary)]">Prozessen</span> heraus.
                </h2>
                <div className="w-12 h-1 rounded bg-[var(--color-text)] mb-8"></div>
                <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-4">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
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
                Core Features
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
                Alles an einem Ort.<br/>
                <span className="italic text-[var(--color-primary)]">Vollautomatisiert.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-botanical-card p-8 group">
                <div className="w-12 h-12 bg-[var(--color-bg)] rounded-lg flex items-center justify-center text-[var(--color-primary)] mb-8 border border-[var(--color-border)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Globe size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--color-text)] mb-3">Zentrales Order-Management</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-botanical-card p-8 group">
                <div className="w-12 h-12 bg-[var(--color-bg)] rounded-lg flex items-center justify-center text-[var(--color-accent)] mb-8 border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Truck size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--color-text)] mb-3">Automatisierte Labels</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-botanical-card p-8 group">
                <div className="w-12 h-12 bg-[var(--color-bg)] rounded-lg flex items-center justify-center text-[var(--color-primary)] mb-8 border border-[var(--color-border)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                  <Activity size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--color-text)] mb-3">Echtzeit-Tracking</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-28 px-6 md:px-12 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] text-center relative z-10 overflow-hidden">
          <div className="absolute inset-0 nd-botanical-dots opacity-40 pointer-events-none z-0"></div>
          <div className="container mx-auto max-w-3xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[var(--color-text)] mb-4">Einfache, faire Preise</h2>
            <p className="text-[var(--color-text-muted)] mb-10 text-lg">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-10 bg-white border border-[var(--color-border)] rounded-2xl shadow-xl shadow-[var(--color-primary)]/5">
              <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs font-mono font-bold tracking-widest uppercase mb-6">Pro Plan</div>
              <div className="text-5xl md:text-6xl font-mono text-[var(--color-text)] font-semibold mb-3 tracking-tighter">
                € 49 <span className="text-lg text-[var(--color-text-muted)] font-sans font-normal tracking-normal">/ Monat</span>
              </div>
              <div className="text-sm font-mono text-[var(--color-text-muted)] mt-6">[Platzhalter_Inhalt]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-28 px-6 md:px-12 bg-[var(--color-secondary)] text-white relative z-10">
          <div className="absolute inset-0 nd-botanical-grid opacity-10 pointer-events-none z-0"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-6">
                  Enterprise Security
                </div>
                <h2 className="text-4xl font-serif font-semibold mb-8 leading-tight text-white">
                  Kompromisslose Sicherheit für Ihre Kundendaten.
                </h2>
                <div className="w-12 h-1 rounded bg-[var(--color-primary)] mb-8"></div>
                <p className="text-white/80 text-lg leading-relaxed mb-10">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 rounded text-xs font-mono font-semibold tracking-widest uppercase text-white">
                  <ShieldCheck size={16} className="text-[var(--color-primary)]" />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
                <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:border-[var(--color-primary)]/50 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase">01</span> DSGVO-konform
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed pl-10">Vollständige Abdeckung europäischer Richtlinien für maximale Rechtssicherheit beim Umgang mit Bestelldaten.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:border-[var(--color-primary)]/50 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase">02</span> EU-Hosting
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed pl-10">Ihre Daten verlassen niemals Deutschland. Gehostet in ISO 27001 zertifizierten Rechenzentren.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:border-[var(--color-primary)]/50 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase">03</span> Verschlüsselung
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed pl-10">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 md:px-12 bg-white border-t border-[var(--color-border)] relative z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.05] rounded-full blur-[80px] pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
              Bereit für effizientes<br/>
              <span className="italic text-[var(--color-primary)]">Order-Management?</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-botanical-btn-primary px-8 py-6 text-sm font-mono uppercase tracking-wide flex items-center gap-3 mx-auto shadow-lg shadow-[var(--color-primary)]/20">
              Jetzt für den Early Access vormerken
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)] pt-20 pb-10 px-6 md:px-12 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-[var(--color-primary)] flex items-center justify-center text-white font-serif italic text-sm">
                  N
                </div>
                <span className="text-xl font-serif font-semibold tracking-wide text-[var(--color-text)]">
                  NovaDash
                </span>
              </div>
              <p className="text-sm font-mono text-[var(--color-text-muted)] mb-6 leading-relaxed">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text)] font-semibold border-b border-[var(--color-text)] pb-0.5">DE</span>
                <span className="text-[var(--color-border)]">|</span>
                <span className="hover:text-[var(--color-text)] transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text)] mb-6">Produkt</h5>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors font-semibold">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text)] mb-6">Unternehmen</h5>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-mono text-xs font-semibold tracking-widest uppercase text-[var(--color-text)] mb-6">Rechtliches</h5>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-muted)]">
            <div>&copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
              System Status: <span className="font-semibold text-[var(--color-primary)]">Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
