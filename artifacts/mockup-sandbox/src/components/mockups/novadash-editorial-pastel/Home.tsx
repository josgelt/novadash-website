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
  Sparkles
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
    <div className="nd-pastel min-h-screen selection:bg-[#E8B4B8] selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled ? "bg-[#FDFAF9]/80 backdrop-blur-xl border-b border-[#F0E8EB] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8B4B8] to-[#D7C4E0] flex items-center justify-center text-white font-serif italic text-xl shadow-md">
              N
            </div>
            <span className="text-2xl font-serif font-medium tracking-wide text-[#4A4453]">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-[15px] text-[#847C8F] font-medium">
            <a href="#" className="text-[#4A4453] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#E8B4B8] after:bottom-[-4px] after:left-0">Home</a>
            <a href="#" className="hover:text-[#E8B4B8] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[#E8B4B8] transition-colors">Preise</a>
            <a href="#" className="hover:text-[#E8B4B8] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[#E8B4B8] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-sm font-medium text-[#847C8F] mr-2">
              <span className="text-[#4A4453] cursor-pointer">DE</span>
              <span className="text-[#F0E8EB]">|</span>
              <span className="cursor-pointer hover:text-[#E8B4B8] transition-colors">EN</span>
            </div>
            <Button className="nd-pastel-btn-primary px-6 py-5">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6 md:px-12 overflow-hidden relative">
          {/* Soft background glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E8B4B8] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#B9C6D8] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-pastel-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full text-xs font-bold tracking-widest uppercase nd-pastel-badge backdrop-blur-sm">
                  <Sparkles size={14} className="text-[#C38B90]" />
                  Early Access Beta
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#4A4453] mb-8 leading-[1.1] tracking-tight">
                  Alle Marktplätze.<br />
                  <span className="italic text-[#E8B4B8]">Eine</span> Oberfläche.
                </h1>
                <p className="text-lg md:text-xl text-[#847C8F] mb-12 leading-relaxed max-w-lg font-medium">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="w-full sm:w-auto nd-pastel-btn-primary px-8 py-7 text-base flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={18} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-pastel-btn-secondary px-8 py-7 text-base">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 relative nd-pastel-fade-up nd-delay-200">
                <div className="aspect-[4/3] md:aspect-[16/10] relative rounded-[3rem] overflow-hidden shadow-2xl shadow-[#B9C6D8]/20">
                  <img 
                    src="/__mockup/images/nd-pastel-hero.png" 
                    alt="E-Commerce Merchant packing boxes" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E8B4B8]/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
                {/* Decorative floating element */}
                <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-xl p-6 border border-[#F0E8EB] rounded-3xl shadow-[0_20px_50px_-15px_rgba(232,180,184,0.3)] max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E4EAF1] flex items-center justify-center text-[#B9C6D8]">
                      <Package size={20} className="text-[#8FA5C4]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#4A4453]">Order #10492</div>
                      <div className="text-xs font-semibold text-[#847C8F]">Ready to ship</div>
                    </div>
                  </div>
                  <div className="w-full bg-[#F0E8EB] h-2 rounded-full overflow-hidden">
                    <div className="w-3/4 bg-gradient-to-r from-[#D7C4E0] to-[#E8B4B8] h-full rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-20 bg-white/50 border-y border-[#F0E8EB]">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-xs font-bold tracking-widest text-[#847C8F] uppercase mb-12">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center text-[#4A4453]/30 hover:text-[#4A4453]/60 transition-colors duration-700">
              <span className="text-xl md:text-2xl font-serif">Amazon</span>
              <span className="text-xl md:text-2xl font-serif italic">eBay</span>
              <span className="text-xl md:text-2xl font-sans tracking-tight font-medium">Ecwid</span>
              <span className="text-xl md:text-2xl font-serif font-semibold tracking-wider">DHL</span>
              <span className="text-xl md:text-2xl font-sans font-bold">GLS</span>
              <span className="text-xl md:text-2xl font-serif">Sendcloud</span>
              <span className="text-xl md:text-2xl font-sans font-bold tracking-widest">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-32 px-6 md:px-12 relative">
          <div className="absolute right-0 top-[20%] w-[30%] h-[40%] bg-[#D7C4E0] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-pastel-fade-up">
                <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden shadow-2xl shadow-[#E8B4B8]/15 border-[8px] border-white">
                  <img 
                    src="/__mockup/images/nd-pastel-process.png" 
                    alt="Minimalist shipping labels and boxes" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-pastel-fade-up">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4A4453] mb-8 leading-[1.2]">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[#E8B4B8]">Prozessen</span> heraus.
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#E8B4B8] to-[#D7C4E0] rounded-full mb-10"></div>
                <p className="text-lg text-[#847C8F] mb-10 leading-relaxed font-medium">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-6">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-[#F0E8EB] shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#E4EAF1] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-[#8FA5C4]" size={16} />
                      </div>
                      <span className="text-[#4A4453] font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Editorial Style */}
        <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#FDFAF9] to-white relative">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4A4453] mb-6 leading-tight">
                Alles an einem Ort.<br/>
                <span className="italic text-[#B9C6D8]">Vollautomatisiert.</span>
              </h2>
              <p className="text-lg text-[#847C8F] leading-relaxed font-medium">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-pastel-card p-10">
                <div className="w-16 h-16 bg-[#E4EAF1] rounded-2xl flex items-center justify-center text-[#8FA5C4] mb-8 shadow-inner">
                  <Globe size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#4A4453] mb-4">Zentrales Order-Management</h3>
                <p className="text-[#847C8F] leading-relaxed font-medium">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-pastel-card p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B4B8] opacity-10 rounded-bl-full"></div>
                <div className="w-16 h-16 bg-[#F8EAEB] rounded-2xl flex items-center justify-center text-[#DCA1A6] mb-8 shadow-inner relative z-10">
                  <Truck size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#4A4453] mb-4 relative z-10">Automatisierte Labels</h3>
                <p className="text-[#847C8F] leading-relaxed font-medium relative z-10">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-pastel-card p-10">
                <div className="w-16 h-16 bg-[#F4EBF6] rounded-2xl flex items-center justify-center text-[#C2A8D1] mb-8 shadow-inner">
                  <Activity size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-[#4A4453] mb-4">Echtzeit-Tracking</h3>
                <p className="text-[#847C8F] leading-relaxed font-medium">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-32 px-6 md:px-12 bg-[#FDFAF9] text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-serif font-medium text-[#4A4453] mb-4">Einfache, faire Preise</h2>
            <p className="text-[#847C8F] mb-12 font-medium text-lg">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-12 bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(232,180,184,0.2)] border border-[#F0E8EB] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E8B4B8] to-[#D7C4E0] text-white text-xs font-bold uppercase tracking-widest py-2 px-6 rounded-full shadow-lg">
                Pro Plan
              </div>
              <div className="text-6xl font-serif text-[#4A4453] mb-4 mt-4">
                € 49 <span className="text-xl text-[#847C8F] font-sans font-medium">/ Monat</span>
              </div>
              <div className="text-sm text-[#B9C6D8] font-bold">[Platzhalter]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-32 px-6 md:px-12 bg-[#E4EAF1] relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4A4453] mb-8 leading-tight">
                  Kompromisslose Sicherheit für Ihre Kundendaten.
                </h2>
                <div className="w-20 h-1.5 bg-[#B9C6D8] rounded-full mb-8"></div>
                <p className="text-[#727B8A] text-lg font-medium leading-relaxed mb-10">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full text-sm font-bold tracking-wide shadow-sm text-[#4A4453]">
                  <ShieldCheck size={18} className="text-[#8FA5C4]" />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-6">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm">
                  <h4 className="font-serif text-2xl mb-2 flex items-center gap-3 text-[#4A4453]">
                    <span className="text-[#E8B4B8] font-sans font-bold text-lg">01.</span> DSGVO-konform
                  </h4>
                  <p className="text-[#727B8A] font-medium text-base pl-10">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit.</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm">
                  <h4 className="font-serif text-2xl mb-2 flex items-center gap-3 text-[#4A4453]">
                    <span className="text-[#E8B4B8] font-sans font-bold text-lg">02.</span> EU-Hosting
                  </h4>
                  <p className="text-[#727B8A] font-medium text-base pl-10">Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren).</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white shadow-sm">
                  <h4 className="font-serif text-2xl mb-2 flex items-center gap-3 text-[#4A4453]">
                    <span className="text-[#E8B4B8] font-sans font-bold text-lg">03.</span> PII-Verschlüsselung
                  </h4>
                  <p className="text-[#727B8A] font-medium text-base pl-10">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 md:px-12 bg-white text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(232,180,184,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-[#4A4453] mb-8 leading-[1.1]">
              Bereit für effizientes<br/>
              <span className="italic text-[#E8B4B8]">Order-Management?</span>
            </h2>
            <p className="text-xl text-[#847C8F] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-pastel-btn-primary px-12 py-8 text-lg flex items-center gap-3 mx-auto shadow-[0_10px_30px_rgba(232,180,184,0.4)]">
              Jetzt für den Early Access vormerken
              <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FDFAF9] border-t border-[#F0E8EB] pt-24 pb-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8B4B8] to-[#D7C4E0] flex items-center justify-center text-white font-serif italic text-sm shadow-sm">
                  N
                </div>
                <span className="text-xl font-serif font-medium tracking-wide text-[#4A4453]">
                  NovaDash
                </span>
              </div>
              <p className="text-[15px] text-[#847C8F] font-medium mb-6 leading-relaxed">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-[#847C8F]">
                <span className="text-[#4A4453] border-b-2 border-[#E8B4B8]">DE</span>
                <span className="text-[#F0E8EB]">|</span>
                <span className="hover:text-[#E8B4B8] transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-[#4A4453] text-lg mb-6">Produkt</h5>
              <ul className="space-y-4 text-[15px] text-[#847C8F] font-medium">
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-[#4A4453] text-lg mb-6">Unternehmen</h5>
              <ul className="space-y-4 text-[15px] text-[#847C8F] font-medium">
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-[#4A4453] text-lg mb-6">Rechtliches</h5>
              <ul className="space-y-4 text-[15px] text-[#847C8F] font-medium">
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[#E8B4B8] transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#F0E8EB] text-center text-sm text-[#847C8F] font-medium">
            &copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
