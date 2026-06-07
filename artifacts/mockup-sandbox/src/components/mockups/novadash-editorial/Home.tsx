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
    <div className="nd-editorial min-h-screen selection:bg-[#C05746] selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5E0D8] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#C05746] flex items-center justify-center text-white font-serif italic text-lg">
              N
            </div>
            <span className="text-xl font-serif font-medium tracking-wide text-[#2A2F2C]">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-[15px] text-[#5A625D]">
            <a href="#" className="text-[#2A2F2C] border-b border-[#2A2F2C] pb-0.5 transition-colors">Home</a>
            <a href="#" className="hover:text-[#2A2F2C] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[#2A2F2C] transition-colors">Preise</a>
            <a href="#" className="hover:text-[#2A2F2C] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[#2A2F2C] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-sm font-medium text-[#5A625D] mr-2">
              <span className="text-[#2A2F2C] cursor-pointer">DE</span>
              <span className="text-[#E5E0D8]">|</span>
              <span className="cursor-pointer hover:text-[#2A2F2C] transition-colors">EN</span>
            </div>
            <Button className="nd-editorial-btn-primary px-6 py-5 rounded-sm">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 md:px-12 overflow-hidden relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-editorial-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#E5E0D8] bg-white rounded-sm text-xs font-medium tracking-widest uppercase text-[#C05746]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C05746] animate-pulse"></span>
                  Early Access Beta
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#2A2F2C] mb-8 leading-[1.05] tracking-tight">
                  Alle Marktplätze.<br />
                  <span className="italic text-[#C05746]">Eine</span> Oberfläche.
                </h1>
                <p className="text-lg md:text-xl text-[#5A625D] mb-12 leading-relaxed max-w-lg font-light">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="w-full sm:w-auto nd-editorial-btn-primary px-8 py-7 text-base rounded-sm flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={18} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-editorial-btn-secondary px-8 py-7 text-base rounded-sm">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 relative nd-editorial-fade-up nd-delay-200">
                <div className="aspect-[4/3] md:aspect-[16/10] relative rounded-sm overflow-hidden">
                  <img 
                    src="/__mockup/images/nd-editorial-hero.png" 
                    alt="E-Commerce Merchant packing boxes" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 border border-[#E5E0D8]/40 pointer-events-none rounded-sm"></div>
                </div>
                {/* Decorative floating element */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 border border-[#E5E0D8] rounded-sm shadow-xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8ECE9] flex items-center justify-center text-[#2C4234]">
                      <Package size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2A2F2C]">Order #10492</div>
                      <div className="text-xs text-[#5A625D]">Ready to ship</div>
                    </div>
                  </div>
                  <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full overflow-hidden">
                    <div className="w-3/4 bg-[#C05746] h-full rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-16 border-y border-[#E5E0D8] bg-white">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-xs font-medium tracking-widest text-[#5A625D] uppercase mb-10">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center text-[#2A2F2C]/40 hover:text-[#2A2F2C] transition-colors duration-500">
              <span className="text-xl md:text-2xl font-serif">Amazon</span>
              <span className="text-xl md:text-2xl font-serif italic">eBay</span>
              <span className="text-xl md:text-2xl font-sans tracking-tight">Ecwid</span>
              <span className="text-xl md:text-2xl font-serif font-semibold tracking-wider">DHL</span>
              <span className="text-xl md:text-2xl font-sans font-bold">GLS</span>
              <span className="text-xl md:text-2xl font-serif">Sendcloud</span>
              <span className="text-xl md:text-2xl font-sans font-medium tracking-widest">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-editorial-fade-up">
                <div className="aspect-[3/4] relative rounded-sm overflow-hidden border border-[#E5E0D8]">
                  <img 
                    src="/__mockup/images/nd-editorial-process.png" 
                    alt="Minimalist shipping labels and boxes" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-editorial-fade-up">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#2A2F2C] mb-8 leading-[1.1]">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[#C05746]">Prozessen</span> heraus.
                </h2>
                <div className="w-16 h-px bg-[#C05746] mb-8"></div>
                <p className="text-lg text-[#5A625D] mb-10 leading-relaxed font-light">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-6">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full border border-[#C05746] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-[#C05746]" size={14} />
                      </div>
                      <span className="text-[#2A2F2C] text-lg font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Editorial Style */}
        <section className="py-32 px-6 md:px-12 bg-white border-t border-[#E5E0D8]">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-20 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#2A2F2C] mb-6 leading-tight">
                Alles an einem Ort.<br/>
                <span className="italic text-[#5A625D]">Vollautomatisiert.</span>
              </h2>
              <p className="text-lg text-[#5A625D] leading-relaxed font-light">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-editorial-card p-10 rounded-sm">
                <div className="w-12 h-12 border border-[#E5E0D8] rounded-full flex items-center justify-center text-[#2C4234] mb-8">
                  <Globe size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-medium text-[#2A2F2C] mb-4">Zentrales Order-Management</h3>
                <p className="text-[#5A625D] leading-relaxed font-light text-sm">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-editorial-card p-10 rounded-sm">
                <div className="w-12 h-12 border border-[#E5E0D8] rounded-full flex items-center justify-center text-[#C05746] mb-8">
                  <Truck size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-medium text-[#2A2F2C] mb-4">Automatisierte Labels</h3>
                <p className="text-[#5A625D] leading-relaxed font-light text-sm">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-editorial-card p-10 rounded-sm">
                <div className="w-12 h-12 border border-[#E5E0D8] rounded-full flex items-center justify-center text-[#2C4234] mb-8">
                  <Activity size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-medium text-[#2A2F2C] mb-4">Echtzeit-Tracking</h3>
                <p className="text-[#5A625D] leading-relaxed font-light text-sm">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E5E0D8] text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-medium text-[#2A2F2C] mb-4">Einfache, faire Preise</h2>
            <p className="text-[#5A625D] mb-8 font-light">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-8 bg-white border border-[#E5E0D8] rounded-sm shadow-sm">
              <div className="text-sm font-medium tracking-widest text-[#C05746] uppercase mb-4">Pro Plan</div>
              <div className="text-5xl font-serif text-[#2A2F2C] mb-2">
                € 49 <span className="text-lg text-[#5A625D] font-sans font-light">/ Monat</span>
              </div>
              <div className="text-xs text-[#5A625D] italic">[Platzhalter]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-24 px-6 md:px-12 bg-[#2C4234] text-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 leading-tight">
                  Kompromisslose Sicherheit für Ihre Kundendaten.
                </h2>
                <div className="w-16 h-px bg-[#C05746] mb-8"></div>
                <p className="text-[#E8ECE9] text-lg font-light leading-relaxed mb-8">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#E8ECE9]/20 bg-white/5 rounded-sm text-sm font-medium tracking-wide">
                  <ShieldCheck size={16} className="text-[#C05746]" />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
                <div className="border-b border-white/10 pb-8">
                  <h4 className="font-serif text-xl mb-2 flex items-center gap-3">
                    <span className="text-[#C05746]">01.</span> DSGVO-konform
                  </h4>
                  <p className="text-[#E8ECE9] font-light text-sm pl-8">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit.</p>
                </div>
                <div className="border-b border-white/10 pb-8">
                  <h4 className="font-serif text-xl mb-2 flex items-center gap-3">
                    <span className="text-[#C05746]">02.</span> EU-Hosting
                  </h4>
                  <p className="text-[#E8ECE9] font-light text-sm pl-8">Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren).</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-2 flex items-center gap-3">
                    <span className="text-[#C05746]">03.</span> PII-Verschlüsselung
                  </h4>
                  <p className="text-[#E8ECE9] font-light text-sm pl-8">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 md:px-12 bg-[#FAF8F5]">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-[#2A2F2C] mb-8 leading-tight">
              Bereit für effizientes<br/>
              <span className="italic text-[#C05746]">Order-Management?</span>
            </h2>
            <p className="text-lg text-[#5A625D] mb-12 max-w-2xl mx-auto font-light">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-editorial-btn-primary px-10 py-8 text-lg rounded-sm flex items-center gap-3 mx-auto">
              Jetzt für den Early Access vormerken
              <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E0D8] pt-20 pb-10 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-sm bg-[#2A2F2C] flex items-center justify-center text-white font-serif italic text-sm">
                  N
                </div>
                <span className="text-lg font-serif font-medium tracking-wide text-[#2A2F2C]">
                  NovaDash
                </span>
              </div>
              <p className="text-sm text-[#5A625D] font-light mb-4">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-3 text-xs font-medium text-[#5A625D]">
                <span className="text-[#2A2F2C] border-b border-[#2A2F2C]">DE</span>
                <span className="text-[#E5E0D8]">|</span>
                <span className="hover:text-[#2A2F2C] transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-[#2A2F2C] mb-4">Produkt</h5>
              <ul className="space-y-3 text-sm text-[#5A625D] font-light">
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-[#2A2F2C] mb-4">Unternehmen</h5>
              <ul className="space-y-3 text-sm text-[#5A625D] font-light">
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-[#2A2F2C] mb-4">Rechtliches</h5>
              <ul className="space-y-3 text-sm text-[#5A625D] font-light">
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[#C05746] transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#E5E0D8] text-center text-xs text-[#5A625D] font-light">
            &copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
