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
    <div className="nd-editorial-bold min-h-screen selection:bg-[#E60000] selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b-2 border-[#050505] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#050505] flex items-center justify-center text-white font-serif italic text-2xl font-black">
              N
            </div>
            <span className="text-2xl font-serif font-black tracking-tighter text-[#050505] uppercase">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-[#666666]">
            <a href="#" className="text-[#050505] border-b-2 border-[#E60000] pb-1 transition-colors">Home</a>
            <a href="#" className="hover:text-[#050505] transition-colors">Funktionen</a>
            <a href="#" className="hover:text-[#050505] transition-colors">Preise</a>
            <a href="#" className="hover:text-[#050505] transition-colors">Über uns</a>
            <a href="#" className="hover:text-[#050505] transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#666666] mr-2">
              <span className="text-[#050505] cursor-pointer">DE</span>
              <span className="text-[#050505]">/</span>
              <span className="cursor-pointer hover:text-[#050505] transition-colors">EN</span>
            </div>
            <Button className="nd-editorial-bold-btn-primary px-8 py-6">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-24 px-6 md:px-12 overflow-hidden relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 nd-editorial-bold-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 border-2 border-[#050505] bg-white text-xs font-bold tracking-[0.2em] uppercase text-[#050505]">
                  <span className="w-2 h-2 bg-[#E60000] animate-pulse"></span>
                  Early Access Beta
                </div>
                <h1 className="text-6xl md:text-[5.5rem] font-serif font-black text-[#050505] mb-8 leading-[0.9] tracking-tighter uppercase">
                  Alle Marktplätze.<br />
                  <span className="italic text-[#E60000] font-light normal-case">Eine</span> Oberfläche.
                </h1>
                <div className="w-24 h-2 bg-[#050505] mb-8"></div>
                <p className="text-xl md:text-2xl text-[#666666] mb-12 leading-relaxed max-w-lg font-medium">
                  Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="w-full sm:w-auto nd-editorial-bold-btn-primary px-10 py-8 flex items-center gap-3">
                    Early Access anfragen
                    <ArrowRight size={20} />
                  </Button>
                  <Button className="w-full sm:w-auto nd-editorial-bold-btn-secondary px-10 py-8">
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-6 relative nd-editorial-bold-fade-up nd-bold-delay-200">
                <div className="aspect-[4/3] md:aspect-[3/4] relative border-2 border-[#050505] overflow-hidden">
                  <img 
                    src="/__mockup/images/nd-editorial-bold-hero.png" 
                    alt="E-Commerce Merchant packing boxes" 
                    className="object-cover w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-4 border-transparent hover:border-[#E60000] transition-colors duration-500 pointer-events-none"></div>
                </div>
                {/* Decorative floating element */}
                <div className="absolute -bottom-10 -left-10 bg-white p-6 border-2 border-[#050505] shadow-[8px_8px_0px_0px_#050505] max-w-xs hidden md:block">
                  <div className="flex items-center gap-5 mb-4">
                    <div className="w-12 h-12 bg-[#050505] flex items-center justify-center text-white">
                      <Package size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-black font-serif uppercase tracking-tight text-[#050505]">Order #10492</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">Ready to ship</div>
                    </div>
                  </div>
                  <div className="w-full bg-[#E5E5E5] h-2">
                    <div className="w-3/4 bg-[#E60000] h-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Integration Logos (Text Only) */}
        <section className="py-16 border-y-2 border-[#050505] bg-white">
          <div className="container mx-auto max-w-7xl px-6 md:px-12">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-[#050505] uppercase mb-12">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center text-[#050505] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <span className="text-2xl md:text-4xl font-serif font-black uppercase tracking-tighter">Amazon</span>
              <span className="text-2xl md:text-4xl font-serif italic">eBay</span>
              <span className="text-2xl md:text-4xl font-sans font-black tracking-tight">Ecwid</span>
              <span className="text-2xl md:text-4xl font-serif font-black tracking-wider uppercase text-[#E60000]">DHL</span>
              <span className="text-2xl md:text-4xl font-sans font-black uppercase">GLS</span>
              <span className="text-2xl md:text-4xl font-serif font-bold tracking-tight">Sendcloud</span>
              <span className="text-2xl md:text-4xl font-sans font-black tracking-widest">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem & Solution Asymmetric Section */}
        <section className="py-32 px-6 md:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1 nd-editorial-bold-fade-up">
                <div className="aspect-[4/5] relative border-2 border-[#050505] overflow-hidden">
                  <img 
                    src="/__mockup/images/nd-editorial-bold-process.png" 
                    alt="Minimalist shipping labels and boxes" 
                    className="object-cover w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E60000] flex items-center justify-center">
                    <span className="text-white font-serif font-black text-4xl">01</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 nd-editorial-bold-fade-up">
                <h2 className="text-5xl md:text-[4rem] font-serif font-black text-[#050505] mb-10 leading-[0.95] uppercase tracking-tighter">
                  Wachsen Sie nicht aus Ihren <span className="italic text-[#E60000] normal-case">Prozessen</span> heraus.
                </h2>
                <div className="w-full h-0.5 bg-[#050505] mb-10"></div>
                <p className="text-xl text-[#666666] mb-12 leading-relaxed font-medium">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-8">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="mt-1 w-8 h-8 bg-[#050505] group-hover:bg-[#E60000] transition-colors flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-white" size={18} />
                      </div>
                      <span className="text-[#050505] text-xl font-bold tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Features Grid - Editorial Style */}
        <section className="py-32 px-6 md:px-12 bg-white border-t-2 border-[#050505]">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-[4rem] font-serif font-black text-[#050505] mb-8 leading-[0.95] uppercase tracking-tighter">
                  Alles an einem Ort.<br/>
                  <span className="italic text-[#E60000] normal-case">Vollautomatisiert.</span>
                </h2>
                <div className="w-24 h-2 bg-[#050505]"></div>
              </div>
              <p className="text-xl text-[#666666] leading-relaxed font-medium max-w-md">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="nd-editorial-bold-card p-10">
                <div className="w-16 h-16 bg-[#050505] flex items-center justify-center text-white mb-10">
                  <Globe size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-serif font-black text-[#050505] mb-4 uppercase tracking-tighter">Zentrales Order-Management</h3>
                <p className="text-[#666666] leading-relaxed font-medium">
                  Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="nd-editorial-bold-card p-10 bg-[#E60000] border-[#E60000] group hover:border-[#050505]">
                <div className="w-16 h-16 bg-white flex items-center justify-center text-[#E60000] mb-10 group-hover:bg-[#050505] group-hover:text-white transition-colors">
                  <Truck size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-serif font-black text-white mb-4 uppercase tracking-tighter">Automatisierte Labels</h3>
                <p className="text-white/90 leading-relaxed font-medium">
                  Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="nd-editorial-bold-card p-10">
                <div className="w-16 h-16 bg-[#050505] flex items-center justify-center text-white mb-10">
                  <Activity size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-serif font-black text-[#050505] mb-4 uppercase tracking-tighter">Echtzeit-Tracking</h3>
                <p className="text-[#666666] leading-relaxed font-medium">
                  Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-32 px-6 md:px-12 bg-white border-t-2 border-[#050505] text-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwYzUuNTIzIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc3LTEwLTEwLTEwLTEwIDQuNDc3LTEwIDEwIDQuNDc3IDEwIDEwIDEwem0wIDJjNi42MjcgMCAxMi01LjM3MyAxMi0xMlMyNi42MjcgMCAyMCAwIDggNS4zNzMgOCAxMnM1LjM3MyAxMiAxMiAxMnoiLz48L2c+PC9zdmc+')]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl font-serif font-black text-[#050505] mb-6 uppercase tracking-tighter">Einfache, faire Preise</h2>
            <p className="text-xl text-[#050505] mb-12 font-bold tracking-tight">Skalierbar mit Ihrem Volumen. Keine versteckten Kosten.</p>
            <div className="inline-block p-12 bg-white border-4 border-[#050505] shadow-[16px_16px_0px_0px_#E60000]">
              <div className="text-sm font-black tracking-[0.2em] text-[#050505] uppercase mb-6 bg-[#E5E5E5] inline-block px-4 py-2">Pro Plan</div>
              <div className="text-[6rem] leading-none font-serif font-black text-[#050505] mb-4 tracking-tighter">
                € 49 <span className="text-2xl text-[#666666] font-sans font-bold uppercase tracking-tight">/ Monat</span>
              </div>
              <div className="text-sm font-bold text-[#E60000] uppercase tracking-widest">[Platzhalter]</div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-32 px-6 md:px-12 bg-[#050505] text-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <h2 className="text-5xl md:text-6xl font-serif font-black mb-8 leading-[0.95] uppercase tracking-tighter">
                  Kompromisslose<br/> <span className="text-[#E60000]">Sicherheit</span>.
                </h2>
                <div className="w-24 h-2 bg-[#E60000] mb-10"></div>
                <p className="text-white/70 text-xl font-medium leading-relaxed mb-10">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-4 border-2 border-white bg-transparent text-sm font-bold tracking-[0.2em] uppercase">
                  <ShieldCheck size={20} className="text-[#E60000]" />
                  Made in Germany
                </div>
              </div>
              
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-10">
                <div className="border-b-2 border-white/20 pb-10 group hover:border-[#E60000] transition-colors">
                  <h4 className="font-serif text-3xl font-black uppercase tracking-tighter mb-4 flex items-center gap-6">
                    <span className="text-[#E60000] text-5xl">01</span> DSGVO-konform
                  </h4>
                  <p className="text-white/70 font-medium text-lg pl-20">Vollständige Eindeckung europäischer Richtlinien für maximale Rechtssicherheit.</p>
                </div>
                <div className="border-b-2 border-white/20 pb-10 group hover:border-[#E60000] transition-colors">
                  <h4 className="font-serif text-3xl font-black uppercase tracking-tighter mb-4 flex items-center gap-6">
                    <span className="text-[#E60000] text-5xl">02</span> EU-Hosting
                  </h4>
                  <p className="text-white/70 font-medium text-lg pl-20">Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren).</p>
                </div>
                <div className="group hover:border-[#E60000] transition-colors">
                  <h4 className="font-serif text-3xl font-black uppercase tracking-tighter mb-4 flex items-center gap-6">
                    <span className="text-[#E60000] text-5xl">03</span> PII-Verschlüsselung
                  </h4>
                  <p className="text-white/70 font-medium text-lg pl-20">Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt, um höchste Sicherheit zu gewährleisten.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 px-6 md:px-12 bg-white border-b-2 border-[#050505]">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-6xl md:text-[5.5rem] font-serif font-black text-[#050505] mb-10 leading-[0.9] uppercase tracking-tighter">
              Bereit für effizientes<br/>
              <span className="italic text-[#E60000] normal-case">Order-Management?</span>
            </h2>
            <p className="text-2xl text-[#666666] mb-16 max-w-3xl mx-auto font-medium">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="nd-editorial-bold-btn-primary px-12 py-10 text-xl flex items-center gap-4 mx-auto">
              Jetzt für den Early Access vormerken
              <ArrowRight size={24} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#E60000] flex items-center justify-center text-white font-serif italic text-2xl font-black">
                  N
                </div>
                <span className="text-2xl font-serif font-black tracking-tighter text-white uppercase">
                  NovaDash
                </span>
              </div>
              <p className="text-base text-white/70 font-medium mb-6 leading-loose">
                [Firmenname]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/50">
                <span className="text-white border-b-2 border-[#E60000] pb-1">DE</span>
                <span>/</span>
                <span className="hover:text-white transition-colors cursor-pointer">EN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-serif text-2xl font-black uppercase tracking-tighter mb-6 text-white">Produkt</h5>
              <ul className="space-y-4 text-base text-white/70 font-bold uppercase tracking-wider">
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Funktionen</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Integrationen</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Early Access</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-2xl font-black uppercase tracking-tighter mb-6 text-white">Unternehmen</h5>
              <ul className="space-y-4 text-base text-white/70 font-bold uppercase tracking-wider">
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Über uns</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-2xl font-black uppercase tracking-tighter mb-6 text-white">Rechtliches</h5>
              <ul className="space-y-4 text-base text-white/70 font-bold uppercase tracking-wider">
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-[#E60000] transition-colors">Sub-Processor</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t-2 border-white/20 text-center text-sm text-white/50 font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} [Firmenname]. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
