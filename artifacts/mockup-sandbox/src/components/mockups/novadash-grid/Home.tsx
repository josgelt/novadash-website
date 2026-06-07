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
  ArrowUpRight,
  Menu
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
    <div className="nd-grid min-h-screen bg-[#F4F4F0] text-stone-950 flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-colors duration-200 border-b border-stone-300 ${scrolled ? 'bg-[#F4F4F0]' : 'bg-[#F4F4F0]'}`}>
        <div className="flex h-16">
          {/* Logo */}
          <div className="w-16 md:w-64 border-r border-stone-300 flex items-center justify-center shrink-0 bg-orange-600 text-white font-bold text-xl tracking-tight">
            <span className="hidden md:block">NOVADASH</span>
            <span className="md:hidden">ND</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-1 items-center border-r border-stone-300">
            {["Funktionen", "Preise", "Über uns", "Kontakt"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="h-full px-8 flex items-center border-r border-stone-300 last:border-r-0 font-medium text-sm hover:bg-stone-200 transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex-1 lg:hidden"></div>

          {/* Actions */}
          <div className="flex items-center">
            <div className="hidden md:flex h-full items-center px-6 border-r border-stone-300 font-bold text-sm tracking-wider">
              <span className="cursor-pointer border-b-2 border-stone-950 pb-0.5">DE</span>
              <span className="mx-2 text-stone-300">/</span>
              <span className="cursor-pointer text-stone-400 hover:text-stone-950 transition-colors">EN</span>
            </div>
            <button className="h-full px-6 md:px-8 bg-stone-950 text-white font-bold text-sm hover:bg-orange-600 transition-colors flex items-center gap-2 uppercase tracking-wider">
              <span className="hidden sm:inline">Early Access</span>
              <span className="sm:hidden">Access</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative border-b border-stone-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-stone-300 flex flex-col justify-center">
              <div className="mb-8 inline-flex items-center border border-stone-950 px-4 py-1.5 rounded-none font-bold text-xs uppercase tracking-widest bg-orange-600 text-white self-start">
                <span className="w-2 h-2 bg-white mr-2"></span>
                Early Access Beta
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                ALLE MARKT-<br />PLÄTZE.<br />
                <span className="text-orange-600">EINE OBERFLÄCHE.</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-stone-600 leading-snug mb-12 max-w-2xl">
                Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-stone-950 text-white px-8 py-5 font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  Early Access anfragen <ArrowRight size={18} />
                </button>
                <button className="border-2 border-stone-950 px-8 py-5 font-bold text-sm uppercase tracking-widest hover:bg-stone-200 transition-colors text-center">
                  Funktionen ansehen
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-200 relative overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-16">
              <div className="absolute top-0 right-0 p-4 font-bold text-stone-400 text-sm">FIG. 01</div>
              <div className="relative w-full shadow-2xl border-4 border-stone-950 bg-white">
                <div className="border-b-4 border-stone-950 bg-stone-100 p-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                  <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                  <div className="w-3 h-3 rounded-full bg-stone-300"></div>
                </div>
                <img 
                  src="/__mockup/images/novadash-dashboard-grid.png" 
                  alt="NovaDash Interface" 
                  className="w-full h-auto grayscale-[50%] contrast-125"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Banner */}
        <section className="border-b border-stone-300 overflow-hidden bg-white">
          <div className="flex items-center h-20 md:h-24 px-6 gap-8 whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Amazon</span>
                <span className="text-stone-300">/</span>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">eBay</span>
                <span className="text-stone-300">/</span>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Ecwid</span>
                <span className="text-stone-300">/</span>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">DHL</span>
                <span className="text-stone-300">/</span>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">GLS</span>
                <span className="text-stone-300">/</span>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Sendcloud</span>
                <span className="text-stone-300">/</span>
                <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">17TRACK</span>
                <span className="text-stone-300">/</span>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Problems */}
        <section className="border-b border-stone-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-stone-300 bg-stone-950 text-white">
              <div className="text-orange-600 font-bold mb-4">02 // DAS PROBLEM</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                WACHSEN SIE NICHT AUS IHREN PROZESSEN HERAUS.
              </h2>
              <p className="text-stone-400 font-medium leading-snug mb-12">
                Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps.
              </p>
              <ul className="space-y-6">
                {[
                  "Kein Einloggen in 5 verschiedene Portale mehr",
                  "Reduzierung manueller Übertragungsfehler auf 0",
                  "Skalierbare Prozesse für das Weihnachtsgeschäft"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-bold text-sm tracking-wide">
                    <CheckCircle2 className="text-orange-600 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2">
              {[
                { icon: <RefreshCw size={32} />, title: "Manuelles Chaos", desc: "Bestellungen müssen aus diversen Kanälen abgetippt werden." },
                { icon: <Package size={32} />, title: "Versand-Fehler", desc: "Falsche Labels und verzögerter Versand schaden der Bewertung." },
                { icon: <Activity size={32} />, title: "Tracking-Lücken", desc: "Kunden fragen 'Wo ist mein Paket?', weil Updates fehlen." },
                { icon: <Globe size={32} />, title: "Silo-Systeme", desc: "Ständiges Einloggen in Amazon, eBay und Versanddienstleister." }
              ].map((item, i) => (
                <div key={i} className="p-8 md:p-12 border-b last:border-b-0 md:even:border-l border-stone-300 md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0 bg-[#F4F4F0] hover:bg-stone-200 transition-colors">
                  <div className="w-16 h-16 border-2 border-stone-950 flex items-center justify-center mb-8 text-orange-600 bg-white">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-stone-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-b border-stone-300">
          <div className="p-8 md:p-16 border-b border-stone-300 bg-orange-600 text-white flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="text-stone-950 font-bold mb-4">03 // DIE LÖSUNG</div>
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
                ALLES AN EINEM ORT.<br />VOLLAUTOMATISIERT.
              </h2>
            </div>
            <p className="max-w-md text-xl font-medium leading-snug">
              NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { num: "01", icon: <Globe size={32} />, title: "Zentrales Order-Management", desc: "Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen." },
              { num: "02", icon: <Truck size={32} />, title: "Automatisierte Labels", desc: "Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD." },
              { num: "03", icon: <Activity size={32} />, title: "Echtzeit-Sendungsverfolgung", desc: "Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert." }
            ].map((feature, i) => (
              <div key={i} className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 last:border-r-0 bg-white">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-stone-950">{feature.icon}</div>
                  <div className="text-2xl font-bold text-stone-300">{feature.num}</div>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
                <p className="text-stone-600 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security / Trust */}
        <section className="border-b border-stone-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-stone-300 bg-[#F4F4F0]">
              <div className="text-stone-500 font-bold mb-4">04 // SICHERHEIT</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                KOMPROMISSLOSE<br />SICHERHEIT.
              </h2>
              <p className="text-stone-600 font-medium leading-snug mb-12 max-w-md">
                Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
              </p>
              <div className="inline-flex items-center gap-2 border-2 border-stone-950 px-4 py-2 font-bold uppercase tracking-widest text-sm bg-white">
                <ShieldCheck size={18} className="text-orange-600" />
                Made in Germany
              </div>
            </div>
            <div className="grid grid-rows-3 border-stone-300">
              {[
                { title: "DSGVO-KONFORM", desc: "Vollständige Eindeckung europäischer Richtlinien." },
                { title: "EU-HOSTING", desc: "Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren)." },
                { title: "PII-VERSCHLÜSSELUNG", desc: "Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt." }
              ].map((item, i) => (
                <div key={i} className="p-8 border-b last:border-b-0 border-stone-300 flex items-center gap-8 bg-white hover:bg-stone-100 transition-colors">
                  <div className="w-12 h-12 shrink-0 border border-stone-950 flex items-center justify-center text-orange-600 font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight mb-1">{item.title}</h4>
                    <p className="text-stone-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser & Final CTA */}
        <section className="border-b border-stone-300 grid grid-cols-1 lg:grid-cols-2">
           <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-stone-300 bg-stone-950 text-white flex flex-col justify-center items-start">
              <div className="text-orange-600 font-bold mb-4">PREICING PREVIEW</div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9] mb-6">
                TRANSPARENTE PREISE.
              </h2>
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                € 49 <span className="text-2xl text-stone-500">/ Monat</span>
              </div>
              <div className="inline-block border border-stone-700 text-stone-400 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-8">
                [Platzhalter]
              </div>
              <p className="text-stone-400 font-medium max-w-md">
                Keine versteckten Gebühren. Skalieren Sie Ihr Business, nicht Ihre Fixkosten.
              </p>
           </div>
           <div className="p-8 md:p-16 bg-orange-600 text-white flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                BEREIT FÜR<br />EFFIZIENTES<br />ORDER-MANAGEMENT?
              </h2>
              <button className="bg-stone-950 text-white px-10 py-6 font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-stone-950 transition-colors flex items-center justify-center gap-4 w-full max-w-md border-2 border-stone-950 hover:border-white">
                Jetzt vormerken <ArrowRight size={24} />
              </button>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-b-8 border-stone-950">
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-stone-300">
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 col-span-2">
            <div className="text-3xl font-bold uppercase tracking-tighter mb-4">NOVADASH</div>
            <p className="text-stone-600 font-medium mb-8 max-w-sm">
              Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum.
            </p>
            <div className="text-stone-500 font-bold text-sm uppercase">
              [Firmenname]<br />
              [Adresse]<br />
              [Ort, Land]
            </div>
          </div>
          
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300">
            <h4 className="font-bold uppercase tracking-widest text-stone-400 mb-6 text-sm">Legal</h4>
            <div className="flex flex-col gap-4 font-bold text-sm uppercase tracking-wide">
              <a href="#" className="hover:text-orange-600 transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-orange-600 transition-colors">AGB</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Impressum</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Sub-Processor</a>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-between">
             <div className="flex items-center gap-4 font-bold text-sm tracking-wider mb-12">
              <span className="border-b-2 border-stone-950 pb-0.5">DE</span>
              <span className="text-stone-400 hover:text-stone-950 transition-colors cursor-pointer">EN</span>
            </div>
            <div className="text-stone-400 font-bold text-xs uppercase tracking-widest">
              &copy; {new Date().getFullYear()} NOVADASH GMBH.<br />ALLE RECHTE VORBEHALTEN.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
