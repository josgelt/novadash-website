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
    <div className="nd-editorial-luxe min-h-screen selection:bg-[#C4A47C] selection:text-[#1A1715]">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled ? "bg-[#1A1715]/95 backdrop-blur-md border-b border-[#3D352F] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center text-[#C4A47C] font-serif italic text-2xl border border-[#C4A47C]/40">
              N
            </div>
            <span className="text-2xl font-serif font-medium tracking-wider text-[#F3EFE9]">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-widest text-[#B3AFA8]">
            <a href="#" className="text-[#C4A47C] border-b border-[#C4A47C] pb-1 transition-colors">Home</a>
            <a href="#" className="hover:text-[#F3EFE9] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[#F3EFE9] transition-colors">Preise</a>
            <a href="#" className="hover:text-[#F3EFE9] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[#F3EFE9] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-[11px] font-medium tracking-widest text-[#B3AFA8] mr-2">
              <span className="text-[#C4A47C] cursor-pointer">DE</span>
              <span className="text-[#3D352F]">|</span>
              <span className="cursor-pointer hover:text-[#F3EFE9] transition-colors">EN</span>
            </div>
            <Button className="nd-editorial-luxe-btn-primary px-7 py-5">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6 md:px-12 overflow-hidden relative border-b border-[#3D352F]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-editorial-luxe-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 border border-[#C4A47C]/30 bg-[#2A2522]/50 backdrop-blur-sm text-[11px] font-medium tracking-[0.2em] uppercase text-[#C4A47C]">
                  <span className="w-1.5 h-1.5 bg-[#C4A47C] shadow-[0_0_8px_rgba(196,164,124,0.8)]"></span>
                  Early Access Beta
                </div>
                <h1 className="text-6xl md:text-8xl font-serif font-medium text-[#F3EFE9] mb-8 leading-[1.05] tracking-tight">
                  Alle Marktplätze.<br />
                  <span className="italic text-[#C4A47C] font-light">Eine</span> Oberfläche.
                </h1>
                <p className="text-lg md:text-xl text-[#B3AFA8] mb-12 leading-relaxed max-w-lg font-light tracking-wide">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button className="w-full sm:w-auto nd-editorial-luxe-btn-primary px-9 py-7 flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={16} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-editorial-luxe-btn-secondary px-9 py-7">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 relative nd-editorial-luxe-fade-up nd-delay-200">
                <div className="aspect-[4/3] md:aspect-[16/10] relative overflow-hidden border border-[#C4A47C]/20 p-2 bg-[#231F1C]">
                  <img 
                    src="/__mockup/images/nd-luxe-hero.png" 
                    alt="E-Commerce Merchant packing boxes" 
                    className="object-cover w-full h-full grayscale-[0.2] contrast-125"
                  />
                  <div className="absolute inset-0 border border-[#3D352F] pointer-events-none mix-blend-overlay"></div>
                </div>
                {/* Decorative floating element */}
                <div className="absolute -bottom-10 -left-10 bg-[#1A1715] p-6 border border-[#C4A47C]/30 shadow-2xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-12 h-12 border border-[#C4A47C]/30 bg-[#2A2522] flex items-center justify-center text-[#C4A47C]">
                      <Package size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-serif font-medium tracking-wider text-[#F3EFE9]">Order #10492</div>
                      <div className="text-[11px] uppercase tracking-widest text-[#B3AFA8] mt-1">Ready to ship</div>
                    </div>
                  </div>
                  <div className="w-full bg-[#2A2522] h-[2px] overflow-hidden">
                    <div className="w-3/4 bg-[#C4A47C] h-full shadow-[0_0_10px_rgba(196,164,124,0.5)]"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-20 border-b border-[#3D352F] bg-[#1A1715]">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-[10px] tracking-[0.3em] text-[#C4A47C] uppercase mb-12 opacity-80">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-14 md:gap-24 items-center text-[#B3AFA8]/40 hover:text-[#B3AFA8] transition-colors duration-700">
              <span className="text-2xl md:text-3xl font-serif">Amazon</span>
              <span className="text-2xl md:text-3xl font-serif italic font-light">eBay</span>
              <span className="text-2xl md:text-3xl font-sans tracking-widest uppercase text-sm">Ecwid</span>
              <span className="text-2xl md:text-3xl font-serif font-semibold tracking-widest">DHL</span>
              <span className="text-2xl md:text-3xl font-sans font-medium tracking-widest uppercase text-sm">GLS</span>
              <span className="text-2xl md:text-3xl font-serif">Sendcloud</span>
              <span className="text-2xl md:text-3xl font-sans font-light tracking-[0.2em]">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-32 md:py-40 px-6 md:px-12 bg-[#1A1715]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-editorial-luxe-fade-up">
                <div className="aspect-[3/4] relative overflow-hidden border border-[#C4A47C]/20 p-2 bg-[#231F1C]">
                  <img 
                    src="/__mockup/images/nd-luxe-process.png" 
                    alt="Minimalist shipping labels and boxes" 
                    className="object-cover w-full h-full grayscale-[0.1] contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1715]/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-editorial-luxe-fade-up">
                <h2 className="text-5xl md:text-6xl font-serif font-medium text-[#F3EFE9] mb-10 leading-[1.1] tracking-tight">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[#C4A47C] font-light">Prozessen</span> heraus.
                </h2>
                <div className="w-24 h-[1px] bg-[#C4A47C] mb-10 opacity-70"></div>
                <p className="text-xl text-[#B3AFA8] mb-12 leading-relaxed font-light tracking-wide">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-8">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="mt-1.5 w-5 h-5 border border-[#C4A47C] flex items-center justify-center shrink-0 bg-[#2A2522]">
                        <CheckCircle2 className="text-[#C4A47C]" size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[#F3EFE9] text-lg font-light tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Editorial Style */}
        <section className="py-32 md:py-40 px-6 md:px-12 bg-[#231F1C] border-t border-[#3D352F]">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-24 max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-serif font-medium text-[#F3EFE9] mb-8 leading-tight tracking-tight">
                Alles an einem Ort.<br/>
                <span className="italic text-[#C4A47C] font-light">Vollautomatisiert.</span>
              </h2>
              <p className="text-xl text-[#B3AFA8] leading-relaxed font-light tracking-wide">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-editorial-luxe-card p-12">
                <div className="w-14 h-14 border border-[#C4A47C]/40 bg-[#1A1715] flex items-center justify-center text-[#C4A47C] mb-10 shadow-[0_0_15px_rgba(196,164,124,0.1)]">
                  <Globe size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#F3EFE9] mb-5 tracking-wide">Zentrales Order-Management</h3>
                <p className="text-[#B3AFA8] leading-loose font-light text-[15px] tracking-wide">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-editorial-luxe-card p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A47C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="w-14 h-14 border border-[#C4A47C]/40 bg-[#1A1715] flex items-center justify-center text-[#C4A47C] mb-10 shadow-[0_0_15px_rgba(196,164,124,0.1)] relative z-10">
                  <Truck size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#F3EFE9] mb-5 tracking-wide relative z-10">Automatisierte Labels</h3>
                <p className="text-[#B3AFA8] leading-loose font-light text-[15px] tracking-wide relative z-10">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-editorial-luxe-card p-12">
                <div className="w-14 h-14 border border-[#C4A47C]/40 bg-[#1A1715] flex items-center justify-center text-[#C4A47C] mb-10 shadow-[0_0_15px_rgba(196,164,124,0.1)]">
                  <Activity size={24} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#F3EFE9] mb-5 tracking-wide">Echtzeit-Tracking</h3>
                <p className="text-[#B3AFA8] leading-loose font-light text-[15px] tracking-wide">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-32 px-6 md:px-12 bg-[#1A1715] border-t border-[#3D352F] text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#F3EFE9] mb-6 tracking-tight">Einfache, faire Preise</h2>
            <p className="text-lg text-[#B3AFA8] mb-12 font-light tracking-wide">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-12 bg-[#2A2522] border border-[#C4A47C]/30 relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C4A47C] to-transparent opacity-50"></div>
              <div className="text-[11px] font-medium tracking-[0.3em] text-[#C4A47C] uppercase mb-6">Pro Plan</div>
              <div className="text-6xl font-serif text-[#F3EFE9] mb-4 tracking-tight flex items-end justify-center gap-3">
                € 49 <span className="text-xl text-[#B3AFA8] font-sans font-light mb-1">/ Monat</span>
              </div>
              <div className="text-sm text-[#B3AFA8] italic font-serif opacity-70">[Platzhalter]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-32 px-6 md:px-12 bg-[#12100E] text-[#F3EFE9] border-t border-[#3D352F]">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight tracking-tight">
                  Kompromisslose Sicherheit für Ihre <span className="italic text-[#C4A47C] font-light">Kundendaten.</span>
                </h2>
                <div className="w-24 h-[1px] bg-[#C4A47C] mb-10 opacity-70"></div>
                <p className="text-[#B3AFA8] text-lg font-light leading-relaxed mb-10 tracking-wide">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-[#C4A47C]/40 bg-[#1A1715] text-[12px] font-medium tracking-[0.1em] uppercase">
                  <ShieldCheck size={16} className="text-[#C4A47C]" />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-10">
                <div className="border-b border-[#3D352F] pb-10">
                  <h4 className="font-serif text-2xl mb-4 flex items-center gap-4 tracking-wide">
                    <span className="text-[#C4A47C] font-light text-xl italic">01.</span> DSGVO-konform
                  </h4>
                  <p className="text-[#B3AFA8] font-light text-[15px] pl-10 tracking-wide leading-relaxed">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit.</p>
                </div>
                <div className="border-b border-[#3D352F] pb-10">
                  <h4 className="font-serif text-2xl mb-4 flex items-center gap-4 tracking-wide">
                    <span className="text-[#C4A47C] font-light text-xl italic">02.</span> EU-Hosting
                  </h4>
                  <p className="text-[#B3AFA8] font-light text-[15px] pl-10 tracking-wide leading-relaxed">Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren).</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-4 flex items-center gap-4 tracking-wide">
                    <span className="text-[#C4A47C] font-light text-xl italic">03.</span> PII-Verschlüsselung
                  </h4>
                  <p className="text-[#B3AFA8] font-light text-[15px] pl-10 tracking-wide leading-relaxed">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 md:px-12 bg-[#1A1715] border-t border-[#3D352F] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C4A47C]/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-[#F3EFE9] mb-10 leading-tight tracking-tight">
              Bereit für effizientes<br/>
              <span className="italic text-[#C4A47C] font-light">Order-Management?</span>
            </h2>
            <p className="text-xl text-[#B3AFA8] mb-16 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-editorial-luxe-btn-primary px-12 py-8 text-sm flex items-center gap-4 mx-auto">
              Jetzt für den Early Access vormerken
              <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#12100E] border-t border-[#3D352F] pt-24 pb-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 border border-[#C4A47C]/40 flex items-center justify-center text-[#C4A47C] font-serif italic text-xl">
                  N
                </div>
                <span className="text-xl font-serif font-medium tracking-wider text-[#F3EFE9]">
                  NovaDash
                </span>
              </div>
              <p className="text-[13px] text-[#B3AFA8] font-light mb-8 leading-loose tracking-wider">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-4 text-[11px] font-medium tracking-[0.2em] text-[#B3AFA8]">
                <span className="text-[#C4A47C] border-b border-[#C4A47C] pb-1">DE</span>
                <span className="text-[#3D352F]">|</span>
                <span className="hover:text-[#F3EFE9] transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-lg text-[#F3EFE9] mb-6 tracking-wide">Produkt</h5>
              <ul className="space-y-4 text-[13px] text-[#B3AFA8] font-light tracking-wider uppercase">
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-lg text-[#F3EFE9] mb-6 tracking-wide">Unternehmen</h5>
              <ul className="space-y-4 text-[13px] text-[#B3AFA8] font-light tracking-wider uppercase">
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-lg text-[#F3EFE9] mb-6 tracking-wide">Rechtliches</h5>
              <ul className="space-y-4 text-[13px] text-[#B3AFA8] font-light tracking-wider uppercase">
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[#C4A47C] transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-[#3D352F] text-center text-[11px] text-[#B3AFA8] font-light tracking-[0.2em] uppercase">
            &copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
