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
  CheckCircle2
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
    <div className="nd-quiet min-h-screen selection:bg-[#9BA89C] selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled ? "bg-[#F9F8F6]/80 backdrop-blur-xl border-b border-[#E8E5DF] py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-4">
            <span className="text-xl font-serif tracking-widest text-[#1E1E1C] uppercase">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-12 text-[13px] text-[#7A7A76] uppercase tracking-widest">
            <a href="#" className="text-[#1E1E1C] border-b border-[#1E1E1C] pb-1 transition-colors">Home</a>
            <a href="#" className="hover:text-[#1E1E1C] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[#1E1E1C] transition-colors">Preise</a>
            <a href="#" className="hover:text-[#1E1E1C] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[#1E1E1C] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-4 text-[11px] font-light text-[#7A7A76] uppercase tracking-widest">
              <span className="text-[#1E1E1C] cursor-pointer">DE</span>
              <span className="text-[#E8E5DF]">|</span>
              <span className="cursor-pointer hover:text-[#1E1E1C] transition-colors">EN</span>
            </div>
            <Button className="nd-quiet-btn-primary px-8 py-5 uppercase tracking-widest text-[11px]">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-32 px-6 md:px-12 overflow-hidden relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              
              <div className="lg:col-span-5 nd-quiet-fade-up">
                <div className="inline-flex items-center gap-3 mb-10 text-[11px] tracking-[0.2em] uppercase text-[#7A7A76]">
                  <span className="w-1 h-1 bg-[#9BA89C] rounded-full"></span>
                  Early Access Beta
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-[#1E1E1C] mb-10 leading-[1.1] font-light">
                  Alle Marktplätze.<br />
                  <span className="italic text-[#9BA89C]">Eine</span> Oberfläche.
                </h1>
                <p className="text-base text-[#7A7A76] mb-14 leading-[1.8] max-w-md font-light">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button className="w-full sm:w-auto nd-quiet-btn-primary px-10 py-6 uppercase tracking-widest text-[11px] flex items-center gap-4">
                    Early Access anfragen
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-quiet-btn-secondary px-10 py-6 uppercase tracking-widest text-[11px]">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 relative nd-quiet-fade-up nd-delay-200">
                <div className="aspect-[16/10] relative overflow-hidden bg-[#F2EFEA]">
                  <img 
                    src="/__mockup/images/nd-quiet-hero.png" 
                    alt="Abstract minimalist representation of ecommerce logistics" 
                    className="object-cover w-full h-full mix-blend-multiply opacity-90"
                  />
                  <div className="absolute inset-0 border border-[#E8E5DF] pointer-events-none"></div>
                </div>
                {/* Minimal floating element */}
                <div className="absolute -bottom-10 -left-10 bg-[#F9F8F6] p-8 border border-[#E8E5DF] max-w-[280px] hidden md:block">
                  <div className="text-[10px] tracking-widest uppercase text-[#7A7A76] mb-4">Order Status</div>
                  <div className="flex items-center justify-between gap-8 mb-4">
                    <div className="font-serif text-xl text-[#1E1E1C]">#10492</div>
                    <div className="text-[11px] text-[#9BA89C] uppercase tracking-wider">Ready</div>
                  </div>
                  <div className="w-full bg-[#E8E5DF] h-px relative">
                    <div className="absolute top-0 left-0 w-3/4 bg-[#1E1E1C] h-px"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-24 border-y border-[#E8E5DF] bg-[#F9F8F6]">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-[10px] font-light tracking-[0.2em] text-[#7A7A76] uppercase mb-16">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center text-[#1E1E1C]/30 hover:text-[#1E1E1C] transition-colors duration-700">
              <span className="text-xl md:text-2xl font-serif font-light">Amazon</span>
              <span className="text-xl md:text-2xl font-serif italic">eBay</span>
              <span className="text-xl md:text-2xl font-sans font-light tracking-wide">Ecwid</span>
              <span className="text-xl md:text-2xl font-serif tracking-widest">DHL</span>
              <span className="text-xl md:text-2xl font-sans font-medium">GLS</span>
              <span className="text-xl md:text-2xl font-serif">Sendcloud</span>
              <span className="text-xl md:text-2xl font-sans tracking-[0.2em] text-sm">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-40 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-quiet-fade-up">
                <div className="aspect-[3/4] relative overflow-hidden border border-[#E8E5DF] bg-[#F2EFEA] p-4">
                  <div className="w-full h-full border border-[#E8E5DF] relative">
                    <img 
                      src="/__mockup/images/nd-quiet-process.png" 
                      alt="Minimalist shipping box" 
                      className="object-cover w-full h-full mix-blend-multiply opacity-80"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-quiet-fade-up">
                <h2 className="text-4xl md:text-5xl font-serif text-[#1E1E1C] mb-12 leading-[1.2] font-light">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[#9BA89C]">Prozessen</span> heraus.
                </h2>
                <div className="w-24 h-px bg-[#1E1E1C] mb-12 opacity-20"></div>
                <p className="text-base text-[#7A7A76] mb-16 leading-[1.8] font-light max-w-lg">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-8">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="mt-1.5 w-1 h-1 bg-[#9BA89C] rounded-full shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-[#1E1E1C] text-base font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Minimal Style */}
        <section className="py-40 px-6 md:px-12 bg-[#F2EFEA] border-t border-[#E8E5DF]">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-24 max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E1E1C] mb-8 leading-[1.2] font-light">
                Alles an einem Ort.<br/>
                <span className="italic text-[#7A7A76]">Vollautomatisiert.</span>
              </h2>
              <div className="w-12 h-px bg-[#1E1E1C] mx-auto mb-8 opacity-20"></div>
              <p className="text-base text-[#7A7A76] leading-[1.8] font-light">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-quiet-card p-12">
                <div className="mb-10 text-[#9BA89C]">
                  <Globe size={24} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-[#1E1E1C] mb-6">Zentrales Order-Management</h3>
                <p className="text-[#7A7A76] leading-[1.8] font-light text-sm">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-quiet-card p-12">
                <div className="mb-10 text-[#9BA89C]">
                  <Truck size={24} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-[#1E1E1C] mb-6">Automatisierte Labels</h3>
                <p className="text-[#7A7A76] leading-[1.8] font-light text-sm">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-quiet-card p-12">
                <div className="mb-10 text-[#9BA89C]">
                  <Activity size={24} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-serif text-[#1E1E1C] mb-6">Echtzeit-Tracking</h3>
                <p className="text-[#7A7A76] leading-[1.8] font-light text-sm">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-32 px-6 md:px-12 bg-[#F9F8F6] border-t border-[#E8E5DF] text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif text-[#1E1E1C] mb-6 font-light">Einfache, faire Preise</h2>
            <p className="text-[#7A7A76] mb-16 font-light">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-12 border border-[#E8E5DF] bg-[#F9F8F6] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F9F8F6] px-4 text-[10px] tracking-[0.2em] text-[#9BA89C] uppercase">
                Pro Plan
              </div>
              <div className="text-6xl font-serif text-[#1E1E1C] mb-4 font-light">
                € 49 <span className="text-sm text-[#7A7A76] font-sans font-light tracking-wide">/ Monat</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#7A7A76] opacity-50">[Platzhalter]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-40 px-6 md:px-12 border-t border-[#E8E5DF]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-5 sticky top-32">
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E1E1C] mb-8 leading-[1.3] font-light">
                  Kompromisslose Sicherheit für Ihre Kundendaten.
                </h2>
                <p className="text-[#7A7A76] text-base font-light leading-[1.8] mb-12">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#E8E5DF] text-[11px] font-light tracking-[0.15em] uppercase text-[#1E1E1C]">
                  <ShieldCheck size={14} className="text-[#9BA89C]" strokeWidth={1.5} />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-16">
                <div className="border-b border-[#E8E5DF] pb-12">
                  <div className="text-[10px] tracking-[0.2em] text-[#9BA89C] mb-4">01</div>
                  <h4 className="font-serif text-2xl mb-4 text-[#1E1E1C]">
                    DSGVO-konform
                  </h4>
                  <p className="text-[#7A7A76] font-light text-sm leading-[1.8]">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit im Umgang mit sensiblen Bestelldaten.</p>
                </div>
                <div className="border-b border-[#E8E5DF] pb-12">
                  <div className="text-[10px] tracking-[0.2em] text-[#9BA89C] mb-4">02</div>
                  <h4 className="font-serif text-2xl mb-4 text-[#1E1E1C]">
                    EU-Hosting
                  </h4>
                  <p className="text-[#7A7A76] font-light text-sm leading-[1.8]">Ihre Daten verlassen niemals Deutschland. Wir hosten ausschließlich in ISO 27001 zertifizierten Rechenzentren.</p>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-[#9BA89C] mb-4">03</div>
                  <h4 className="font-serif text-2xl mb-4 text-[#1E1E1C]">
                    PII-Verschlüsselung
                  </h4>
                  <p className="text-[#7A7A76] font-light text-sm leading-[1.8]">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um auf allen Ebenen höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 md:px-12 bg-[#F2EFEA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E1E1C] mb-10 leading-[1.2] font-light">
              Bereit für effizientes<br/>
              <span className="italic text-[#7A7A76]">Order-Management?</span>
            </h2>
            <div className="w-12 h-px bg-[#1E1E1C] mx-auto mb-10 opacity-20"></div>
            <p className="text-base text-[#7A7A76] mb-16 max-w-xl mx-auto font-light leading-[1.8]">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-quiet-btn-primary px-12 py-8 text-[11px] tracking-[0.2em] uppercase flex items-center gap-4 mx-auto">
              Jetzt für den Early Access vormerken
              <ArrowRight size={16} strokeWidth={1} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F9F8F6] border-t border-[#E8E5DF] pt-32 pb-16 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-1">
              <div className="mb-10">
                <span className="text-xl font-serif tracking-widest text-[#1E1E1C] uppercase">
                  NovaDash
                </span>
              </div>
              <p className="text-sm text-[#7A7A76] font-light leading-[2] mb-10">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-4 text-[10px] font-light tracking-[0.2em] text-[#7A7A76] uppercase">
                <span className="text-[#1E1E1C] border-b border-[#1E1E1C] pb-1">DE</span>
                <span className="text-[#E8E5DF]">|</span>
                <span className="hover:text-[#1E1E1C] transition-colors cursor-pointer pb-1">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-[#1E1E1C] mb-8 text-lg">Produkt</h5>
              <ul className="space-y-4 text-sm text-[#7A7A76] font-light">
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-[#1E1E1C] mb-8 text-lg">Unternehmen</h5>
              <ul className="space-y-4 text-sm text-[#7A7A76] font-light">
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-[#1E1E1C] mb-8 text-lg">Rechtliches</h5>
              <ul className="space-y-4 text-sm text-[#7A7A76] font-light">
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[#1E1E1C] transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E8E5DF] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#7A7A76] font-light tracking-wide">
            <div>&copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.</div>
            <div className="text-[#9BA89C] italic font-serif text-sm">Quiet & Minimal</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
