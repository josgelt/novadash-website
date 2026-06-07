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
    <div className="nd-playful min-h-screen selection:bg-[#FF7B54] selection:text-white overflow-hidden">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#FFFDF4]/90 backdrop-blur-md border-b-2 border-[#F5E8D8] py-3 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-[#FF7B54] flex items-center justify-center text-white font-serif text-xl shadow-md group-hover:rotate-12 transition-transform">
              N
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#4A3C31]">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-[16px] font-bold text-[#827366]">
            <a href="#" className="text-[#FF7B54] relative">
              Home
              <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#FF7B54] rounded-full"></span>
            </a>
            <a href="#" className="hover:text-[#4A3C31] hover:-translate-y-0.5 transition-all">Funktionen</a>
            <a href="#" className="hover:text-[#4A3C31] hover:-translate-y-0.5 transition-all">Preise</a>
            <a href="#" className="hover:text-[#4A3C31] hover:-translate-y-0.5 transition-all">Über uns</a>
            <a href="#" className="hover:text-[#4A3C31] hover:-translate-y-0.5 transition-all">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-sm font-bold text-[#827366] mr-2 bg-white px-3 py-1.5 rounded-full border border-[#F5E8D8]">
              <span className="text-[#4A3C31] cursor-pointer">DE</span>
              <span className="text-[#F5E8D8]">|</span>
              <span className="cursor-pointer hover:text-[#FF7B54] transition-colors">EN</span>
            </div>
            <Button className="nd-playful-btn-primary px-7 py-6 rounded-full text-base">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 md:px-12 relative">
          {/* Playful background elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#CBF3F0] rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FFE5DF] rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-playful-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border-2 border-[#CBF3F0] rounded-full text-sm font-bold text-[#2EC4B6] shadow-sm transform -rotate-2">
                  <Sparkles size={16} className="text-[#2EC4B6]" />
                  Early Access Beta
                </div>
                <h1 className="text-5xl md:text-[5.5rem] font-serif font-black text-[#4A3C31] mb-8 leading-[1.1] tracking-tight">
                  Alle Marktplätze.<br />
                  <span className="text-[#FF7B54] relative inline-block">
                    Eine
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#2EC4B6]" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 Q50,20 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span> Oberfläche.
                </h1>
                <p className="text-lg md:text-xl text-[#827366] mb-12 leading-relaxed max-w-lg font-medium">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="w-full sm:w-auto nd-playful-btn-primary px-8 py-7 text-lg flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="w-full sm:w-auto nd-playful-btn-secondary px-8 py-7 text-lg bg-white">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 relative nd-playful-fade-up nd-delay-200">
                <div className="aspect-[4/3] md:aspect-[16/10] relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 bg-[#CBF3F0]">
                  <img 
                    src="/__mockup/images/nd-playful-hero.png" 
                    alt="E-Commerce Merchant packing boxes" 
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Decorative floating element */}
                <div className="absolute -bottom-8 -left-8 bg-white p-5 border-2 border-[#F5E8D8] rounded-[1.5rem] shadow-xl max-w-xs hidden md:block transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#CBF3F0] flex items-center justify-center text-[#2EC4B6]">
                      <Package size={24} />
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#4A3C31]">Order #10492</div>
                      <div className="text-sm font-semibold text-[#827366]">Ready to ship ✨</div>
                    </div>
                  </div>
                  <div className="w-full bg-[#FFFDF4] h-2.5 rounded-full overflow-hidden">
                    <div className="w-3/4 bg-[#FF7B54] h-full rounded-full relative">
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-20 border-y-2 border-[#F5E8D8] bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
            <p className="text-center text-sm font-bold tracking-widest text-[#2EC4B6] uppercase mb-12">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center text-[#827366]/40 hover:text-[#4A3C31] transition-colors duration-500">
              <span className="text-2xl md:text-3xl font-serif font-bold">Amazon</span>
              <span className="text-2xl md:text-3xl font-serif italic font-bold text-[#FF7B54]/80">eBay</span>
              <span className="text-2xl md:text-3xl font-sans font-black tracking-tight">Ecwid</span>
              <span className="text-2xl md:text-3xl font-serif font-black tracking-wider text-[#FFCC00]/80">DHL</span>
              <span className="text-2xl md:text-3xl font-sans font-black">GLS</span>
              <span className="text-2xl md:text-3xl font-sans font-bold text-[#2EC4B6]/80">Sendcloud</span>
              <span className="text-2xl md:text-3xl font-sans font-black tracking-widest">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-32 px-6 md:px-12 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-playful-fade-up relative">
                <div className="absolute inset-0 bg-[#FF7B54] rounded-[3rem] transform -rotate-3 scale-105 opacity-20"></div>
                <div className="aspect-[3/4] relative rounded-[3rem] overflow-hidden border-4 border-white shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-[#FFF8EE]">
                  <img 
                    src="/__mockup/images/nd-playful-process.png" 
                    alt="Minimalist shipping labels and boxes" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-playful-fade-up">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#4A3C31] mb-8 leading-[1.1]">
                  Wachsen Sie nicht aus Ihren <span className="text-[#FF7B54]">Prozessen</span> heraus.
                </h2>
                <div className="w-20 h-2 bg-[#2EC4B6] rounded-full mb-8"></div>
                <p className="text-xl text-[#827366] mb-10 leading-relaxed font-medium">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-6">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors border-2 border-transparent hover:border-[#F5E8D8]">
                      <div className="mt-0.5 w-8 h-8 rounded-full bg-[#FFE5DF] text-[#FF7B54] flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} className="fill-current text-white" />
                      </div>
                      <span className="text-[#4A3C31] text-lg font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Playful Style */}
        <section className="py-32 px-6 md:px-12 bg-white border-t-2 border-[#F5E8D8] relative">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-20 max-w-2xl text-center mx-auto">
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[#4A3C31] mb-6 leading-tight">
                Alles an einem Ort.<br/>
                <span className="text-[#2EC4B6] relative inline-block">
                  Vollautomatisiert.
                  <span className="absolute -top-4 -right-8 text-[#FFCC00] text-4xl">✨</span>
                </span>
              </h2>
              <p className="text-xl text-[#827366] leading-relaxed font-medium">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-playful-card p-10 group">
                <div className="w-16 h-16 rounded-2xl bg-[#CBF3F0] flex items-center justify-center text-[#2EC4B6] mb-8 transform group-hover:rotate-6 transition-transform">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#4A3C31] mb-4">Zentrales Order-Management</h3>
                <p className="text-[#827366] leading-relaxed font-medium text-lg">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-playful-card p-10 group">
                <div className="w-16 h-16 rounded-2xl bg-[#FFE5DF] flex items-center justify-center text-[#FF7B54] mb-8 transform group-hover:-rotate-6 transition-transform">
                  <Truck size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#4A3C31] mb-4">Automatisierte Labels</h3>
                <p className="text-[#827366] leading-relaxed font-medium text-lg">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-playful-card p-10 group">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF3C4] flex items-center justify-center text-[#E6A700] mb-8 transform group-hover:rotate-6 transition-transform">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#4A3C31] mb-4">Echtzeit-Tracking</h3>
                <p className="text-[#827366] leading-relaxed font-medium text-lg">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-24 px-6 md:px-12 bg-[#CBF3F0] text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-10 left-10 text-[#2EC4B6] opacity-30 transform -rotate-12">
            <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
              <polygon points="50,0 100,50 50,100 0,50" />
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 text-[#FF7B54] opacity-30 transform rotate-12">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>

          <div className="container mx-auto max-w-3xl relative z-10">
            <h2 className="text-4xl lg:text-5xl font-serif font-black text-[#4A3C31] mb-4">Einfache, faire Preise 🎈</h2>
            <p className="text-xl text-[#2C8279] mb-12 font-bold">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-12 bg-white rounded-[3rem] shadow-xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform">
              <div className="inline-block px-4 py-1.5 bg-[#FFE5DF] rounded-full text-sm font-black tracking-widest text-[#FF7B54] uppercase mb-6">
                Pro Plan
              </div>
              <div className="text-6xl lg:text-7xl font-serif font-black text-[#4A3C31] mb-4">
                € 49 <span className="text-2xl text-[#827366] font-sans font-bold">/ Monat</span>
              </div>
              <div className="text-sm font-bold text-[#827366] bg-[#FFFDF4] px-4 py-2 rounded-full inline-block">
                [Platzhalter für Features]
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-24 px-6 md:px-12 bg-[#FF7B54] text-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">
                  Kompromisslose Sicherheit für Ihre Kundendaten. 🔒
                </h2>
                <div className="w-20 h-2 bg-[#FFF3C4] rounded-full mb-8"></div>
                <p className="text-[#FFE5DF] text-xl font-bold leading-relaxed mb-10">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#FF7B54] rounded-full text-lg font-black shadow-lg">
                  <ShieldCheck size={24} />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-6">
                <div className="bg-white/10 p-8 rounded-[2rem] border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="font-serif text-2xl font-bold mb-3 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white text-[#FF7B54] flex items-center justify-center text-lg">1</div>
                    DSGVO-konform
                  </h4>
                  <p className="text-[#FFE5DF] font-medium text-lg pl-14">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit.</p>
                </div>
                <div className="bg-white/10 p-8 rounded-[2rem] border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="font-serif text-2xl font-bold mb-3 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white text-[#FF7B54] flex items-center justify-center text-lg">2</div>
                    EU-Hosting
                  </h4>
                  <p className="text-[#FFE5DF] font-medium text-lg pl-14">Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren).</p>
                </div>
                <div className="bg-white/10 p-8 rounded-[2rem] border-2 border-white/20 hover:bg-white/20 transition-colors">
                  <h4 className="font-serif text-2xl font-bold mb-3 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white text-[#FF7B54] flex items-center justify-center text-lg">3</div>
                    PII-Verschlüsselung
                  </h4>
                  <p className="text-[#FFE5DF] font-medium text-lg pl-14">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-6 md:px-12 bg-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#FFFDF4] rounded-t-[5rem] -z-10 mt-10"></div>
          <div className="container mx-auto max-w-4xl pt-10">
            <div className="inline-block mb-6 animate-bounce">
              <span className="text-5xl">🚀</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#4A3C31] mb-8 leading-tight">
              Bereit für effizientes<br/>
              <span className="text-[#2EC4B6]">Order-Management?</span>
            </h2>
            <p className="text-xl text-[#827366] mb-12 max-w-2xl mx-auto font-bold">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-playful-btn-primary px-12 py-8 text-xl flex items-center gap-4 mx-auto shadow-2xl">
              Jetzt für den Early Access vormerken
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFFDF4] border-t-2 border-[#F5E8D8] pt-20 pb-10 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-[#4A3C31] flex items-center justify-center text-white font-serif text-lg">
                  N
                </div>
                <span className="text-xl font-serif font-bold tracking-wide text-[#4A3C31]">
                  NovaDash
                </span>
              </div>
              <p className="text-base text-[#827366] font-bold mb-6">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-[#827366] bg-white w-fit px-4 py-2 rounded-full border border-[#F5E8D8]">
                <span className="text-[#4A3C31] border-b-2 border-[#4A3C31]">DE</span>
                <span className="text-[#F5E8D8]">|</span>
                <span className="hover:text-[#FF7B54] transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-xl font-bold text-[#4A3C31] mb-6">Produkt</h5>
              <ul className="space-y-4 text-base text-[#827366] font-bold">
                <li><a href="#" className="hover:text-[#FF7B54] hover:pl-2 transition-all block">Funktionen</a></li>
                <li><a href="#" className="hover:text-[#FF7B54] hover:pl-2 transition-all block">Preise</a></li>
                <li><a href="#" className="hover:text-[#FF7B54] hover:pl-2 transition-all block">Integrationen</a></li>
                <li><a href="#" className="hover:text-[#FF7B54] hover:pl-2 transition-all block">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-xl font-bold text-[#4A3C31] mb-6">Unternehmen</h5>
              <ul className="space-y-4 text-base text-[#827366] font-bold">
                <li><a href="#" className="hover:text-[#2EC4B6] hover:pl-2 transition-all block">Über uns</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] hover:pl-2 transition-all block">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-xl font-bold text-[#4A3C31] mb-6">Rechtliches</h5>
              <ul className="space-y-4 text-base text-[#827366] font-bold">
                <li><a href="#" className="hover:text-[#4A3C31] hover:pl-2 transition-all block">Impressum</a></li>
                <li><a href="#" className="hover:text-[#4A3C31] hover:pl-2 transition-all block">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[#4A3C31] hover:pl-2 transition-all block">AGB</a></li>
                <li><a href="#" className="hover:text-[#4A3C31] hover:pl-2 transition-all block">Sub-Processor-Liste</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t-2 border-[#F5E8D8] text-center text-sm text-[#827366] font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>&copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.</div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7B54]"></div>
              <div className="w-2 h-2 rounded-full bg-[#2EC4B6]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FFCC00]"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
