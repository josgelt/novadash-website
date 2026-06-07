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
  Leaf
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
    <div className="nd-botanical min-h-screen selection:bg-[var(--color-primary)] selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-br-xl rounded-tl-xl rounded-tr-sm rounded-bl-sm bg-[var(--color-primary)] flex items-center justify-center text-white font-serif italic text-lg shadow-sm">
              N
            </div>
            <span className="text-2xl font-serif font-medium tracking-wide text-[var(--color-text)]">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-[16px] text-[var(--color-text-muted)] font-medium">
            <a href="#" className="text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1 transition-colors">Home</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Preise</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-sm font-medium text-[var(--color-text-muted)] mr-2">
              <span className="text-[var(--color-text)] cursor-pointer">DE</span>
              <span className="text-[var(--color-border)]">|</span>
              <span className="cursor-pointer hover:text-[var(--color-text)] transition-colors">EN</span>
            </div>
            <Button className="nd-botanical-btn-primary px-7 py-6">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-28 px-6 md:px-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-[var(--color-accent)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-[400px] bg-[var(--color-primary)] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-botanical-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-[var(--color-primary)]/20 bg-white/60 backdrop-blur-sm rounded-full text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)]">
                  <Leaf size={14} className="text-[var(--color-accent)]" />
                  Early Access Beta
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-semibold text-[var(--color-text)] mb-8 leading-[1.1] tracking-tight">
                  Alle Marktplätze.<br />
                  <span className="italic text-[var(--color-accent)] font-medium">Eine</span> Oberfläche.
                </h1>
                <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-lg font-medium">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="w-full sm:w-auto nd-botanical-btn-primary px-8 py-7 text-base flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={18} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-botanical-btn-secondary px-8 py-7 text-base">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 relative nd-botanical-fade-up nd-delay-200">
                <div className="aspect-[4/3] md:aspect-[16/10] relative nd-botanical-leaf-shape overflow-hidden border-4 border-white shadow-2xl shadow-[var(--color-primary)]/10">
                  <img 
                    src="/__mockup/images/nd-botanical-hero.png" 
                    alt="E-Commerce Merchant packing boxes" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 border border-black/5 pointer-events-none rounded-inherit"></div>
                </div>
                {/* Decorative floating element */}
                <div className="absolute -bottom-6 -left-10 bg-white/90 backdrop-blur-md p-5 border border-white/50 rounded-2xl shadow-xl max-w-xs hidden md:block z-20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-primary)]">
                      <Package size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--color-text)]">Order #10492</div>
                      <div className="text-xs font-medium text-[var(--color-text-muted)]">Ready to ship</div>
                    </div>
                  </div>
                  <div className="w-full bg-[var(--color-bg)] h-2 rounded-full overflow-hidden">
                    <div className="w-3/4 bg-[var(--color-accent)] h-full rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 w-full h-full translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-16 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-sm font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-10">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center text-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-colors duration-500">
              <span className="text-2xl md:text-3xl font-serif">Amazon</span>
              <span className="text-2xl md:text-3xl font-serif italic">eBay</span>
              <span className="text-2xl md:text-3xl font-sans tracking-tight">Ecwid</span>
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest">DHL</span>
              <span className="text-2xl md:text-3xl font-sans font-bold">GLS</span>
              <span className="text-2xl md:text-3xl font-serif">Sendcloud</span>
              <span className="text-2xl md:text-3xl font-sans font-semibold tracking-widest">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-botanical-fade-up">
                <div className="aspect-[3/4] relative nd-botanical-leaf-shape overflow-hidden border border-[var(--color-border)] shadow-lg">
                  <img 
                    src="/__mockup/images/nd-botanical-process.png" 
                    alt="Minimalist shipping labels and boxes" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-botanical-fade-up">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-[1.15]">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[var(--color-primary)]">Prozessen</span> heraus.
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-[var(--color-accent)] mb-8"></div>
                <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed font-medium">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-6">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-[var(--color-border)]">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-[var(--color-primary)]" size={16} />
                      </div>
                      <span className="text-[var(--color-text)] text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Botanical Style */}
        <section className="py-32 px-6 md:px-12 bg-white relative border-t border-[var(--color-border)]">
          <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[var(--color-bg)] to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="mb-20 max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[var(--color-text)] mb-6 leading-tight">
                Alles an einem Ort.<br/>
                <span className="italic text-[var(--color-primary)]">Vollautomatisiert.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed font-medium">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-botanical-card p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-[100px] transition-all group-hover:bg-[var(--color-primary)]/10"></div>
                <div className="w-14 h-14 bg-[var(--color-bg)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 relative z-10 border border-[var(--color-border)]">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[var(--color-text)] mb-4">Zentrales Order-Management</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed font-medium text-base">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-botanical-card p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-bl-[100px] transition-all group-hover:bg-[var(--color-accent)]/10"></div>
                <div className="w-14 h-14 bg-[var(--color-bg)] rounded-2xl flex items-center justify-center text-[var(--color-accent)] mb-8 relative z-10 border border-[var(--color-border)]">
                  <Truck size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[var(--color-text)] mb-4">Automatisierte Labels</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed font-medium text-base">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-botanical-card p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-bl-[100px] transition-all group-hover:bg-[var(--color-primary)]/10"></div>
                <div className="w-14 h-14 bg-[var(--color-bg)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 relative z-10 border border-[var(--color-border)]">
                  <Activity size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[var(--color-text)] mb-4">Echtzeit-Tracking</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed font-medium text-base">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-28 px-6 md:px-12 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)] text-center relative overflow-hidden">
          <div className="absolute -left-20 top-20 w-64 h-64 border border-[var(--color-primary)]/20 rounded-full blur-[1px]"></div>
          <div className="absolute -right-20 bottom-10 w-80 h-80 border border-[var(--color-accent)]/20 rounded-full blur-[1px]"></div>
          
          <div className="container mx-auto max-w-3xl relative z-10">
            <h2 className="text-4xl font-serif font-semibold text-[var(--color-text)] mb-4">Einfache, faire Preise</h2>
            <p className="text-[var(--color-text-muted)] mb-10 font-medium text-lg">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-10 bg-white border-2 border-white rounded-[2.5rem] shadow-xl shadow-[var(--color-primary)]/5">
              <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-xs font-bold tracking-widest uppercase mb-6">Pro Plan</div>
              <div className="text-6xl font-serif text-[var(--color-text)] font-semibold mb-3">
                € 49 <span className="text-xl text-[var(--color-text-muted)] font-sans font-medium">/ Monat</span>
              </div>
              <div className="text-sm text-[var(--color-text-muted)] italic font-medium">[Platzhalter]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-28 px-6 md:px-12 bg-[var(--color-secondary)] text-[var(--color-bg)]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8 leading-tight text-white">
                  Kompromisslose Sicherheit für Ihre Kundendaten.
                </h2>
                <div className="w-16 h-1.5 rounded-full bg-[var(--color-accent)] mb-8"></div>
                <p className="text-[var(--color-bg)]/80 text-lg font-medium leading-relaxed mb-10">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-5 py-3 border border-white/20 bg-white/5 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm text-white">
                  <ShieldCheck size={18} className="text-[var(--color-accent)]" />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-10">
                <div className="border-b border-white/10 pb-8 hover:border-white/30 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-accent)] font-semibold">01.</span> DSGVO-konform
                  </h4>
                  <p className="text-[var(--color-bg)]/70 font-medium text-base pl-12">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit.</p>
                </div>
                <div className="border-b border-white/10 pb-8 hover:border-white/30 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-accent)] font-semibold">02.</span> EU-Hosting
                  </h4>
                  <p className="text-[var(--color-bg)]/70 font-medium text-base pl-12">Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren).</p>
                </div>
                <div className="hover:border-white/30 transition-colors">
                  <h4 className="font-serif text-2xl font-medium mb-3 flex items-center gap-4 text-white">
                    <span className="text-[var(--color-accent)] font-semibold">03.</span> PII-Verschlüsselung
                  </h4>
                  <p className="text-[var(--color-bg)]/70 font-medium text-base pl-12">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[var(--color-text)] mb-8 leading-tight">
              Bereit für effizientes<br/>
              <span className="italic text-[var(--color-primary)]">Order-Management?</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto font-medium">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-botanical-btn-primary px-10 py-8 text-lg flex items-center gap-3 mx-auto shadow-lg shadow-[var(--color-primary)]/20">
              Jetzt für den Early Access vormerken
              <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-bg-alt)] border-t border-[var(--color-border)] pt-24 pb-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-br-lg rounded-tl-lg rounded-tr-sm rounded-bl-sm bg-[var(--color-primary)] flex items-center justify-center text-white font-serif italic text-sm">
                  N
                </div>
                <span className="text-xl font-serif font-semibold tracking-wide text-[var(--color-text)]">
                  NovaDash
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] font-medium mb-6 leading-relaxed">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-3 text-xs font-bold text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text)] border-b-2 border-[var(--color-text)]">DE</span>
                <span className="text-[var(--color-border)]">|</span>
                <span className="hover:text-[var(--color-text)] transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-6">Produkt</h5>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)] font-medium">
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-6">Unternehmen</h5>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)] font-medium">
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-lg font-semibold text-[var(--color-text)] mb-6">Rechtliches</h5>
              <ul className="space-y-4 text-sm text-[var(--color-text-muted)] font-medium">
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-muted)] font-medium">
            &copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
