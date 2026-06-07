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
    <div className="nd-modern min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              N
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="text-indigo-600 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Funktionen</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Preise</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Über uns</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 mr-2 border-r border-slate-200 pr-4">
              <span className="text-slate-900 cursor-pointer">DE</span>
              <span className="cursor-pointer hover:text-slate-900 transition-colors">EN</span>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-sm hover:shadow transition-all">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16 nd-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Early Access Beta
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Alle Marktplätze. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
                  Eine Oberfläche.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Die cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum. Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-indigo-600/20 transition-all hover:scale-105">
                  Early Access anfragen
                </Button>
                <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-medium border-slate-300 text-slate-700 hover:bg-slate-100 transition-all">
                  Funktionen ansehen
                </Button>
              </div>
            </div>

            {/* Dashboard Visual */}
            <div className="relative mx-auto max-w-5xl nd-fade-in-up nd-delay-200">
              <div className="absolute inset-0 -top-10 -bottom-10 bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="bg-white rounded-2xl p-2 md:p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200/60 relative z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-teal-400 to-indigo-500"></div>
                <img 
                  src="/__mockup/images/novadash-dashboard-modern.png" 
                  alt="NovaDash Interface" 
                  className="w-full h-auto rounded-xl border border-slate-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Integration Logos */}
        <section className="py-12 border-y border-slate-200/60 bg-white">
          <div className="container mx-auto max-w-6xl px-6">
            <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">
              Nahtlose Integration mit Ihren Tools
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold font-serif">amazon</span>
              <span className="text-xl font-bold tracking-tighter text-blue-600">eBay</span>
              <span className="text-xl font-medium tracking-wide">Ecwid</span>
              <span className="text-xl font-black italic text-red-600">DHL</span>
              <span className="text-xl font-black text-blue-800">GLS</span>
              <span className="text-xl font-semibold">Sendcloud</span>
              <span className="text-xl font-bold tracking-tight">17TRACK</span>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 nd-fade-in-up">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm nd-hover-lift">
                    <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                      <RefreshCw size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Manuelles Chaos</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Bestellungen müssen aus diversen Kanälen abgetippt werden.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8 nd-hover-lift">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                      <Package size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Versand-Fehler</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Falsche Labels und verzögerter Versand schaden der Bewertung.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm -mt-8 nd-hover-lift">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-4">
                      <Activity size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Tracking-Lücken</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Kunden fragen "Wo ist mein Paket?", weil Updates fehlen.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm nd-hover-lift">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                      <Globe size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Silo-Systeme</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">Ständiges Einloggen in Amazon, eBay und Versanddienstleister.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Wachsen Sie nicht aus Ihren Prozessen heraus.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <ul className="space-y-4">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-teal-500 shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Solution Section */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Alles an einem Ort. <br/>Vollautomatisiert.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={24} />,
                  title: "Zentrales Order-Management",
                  desc: "Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen."
                },
                {
                  icon: <Truck size={24} />,
                  title: "Automatisierte Labels",
                  desc: "Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD."
                },
                {
                  icon: <Activity size={24} />,
                  title: "Echtzeit-Sendungsverfolgung",
                  desc: "Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert."
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-200 transition-all shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-24 px-6 bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800/50 border border-indigo-700 text-indigo-200 text-xs font-semibold tracking-wide uppercase mb-6">
                  <ShieldCheck size={14} />
                  Made in Germany
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Kompromisslose Sicherheit für Ihre Kundendaten.
                </h2>
                <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { title: "DSGVO-konform", desc: "Vollständige Eindeckung europäischer Richtlinien." },
                    { title: "EU-Hosting", desc: "Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren)." },
                    { title: "PII-Verschlüsselung", desc: "Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-indigo-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-indigo-800/30 border border-indigo-700/50 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
                    <ShieldCheck className="text-teal-400 shrink-0" size={32} />
                    <div>
                      <div className="text-white font-medium">End-to-End Encryption</div>
                      <div className="text-xs text-indigo-300">TLS 1.3 in transit, AES-256 at rest</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
                    <Activity className="text-teal-400 shrink-0" size={32} />
                    <div>
                      <div className="text-white font-medium">99.99% Uptime SLA</div>
                      <div className="text-xs text-indigo-300">Redundante Systeme</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Bereit für effizientes Order-Management?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 py-7 text-lg font-medium shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 group flex items-center gap-2 mx-auto">
              Jetzt für den Early Access vormerken
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
                N
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                NovaDash
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-indigo-600 transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">AGB</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Impressum</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Sub-Processor-Liste</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Kontakt</a>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="text-slate-900 cursor-pointer border border-slate-200 px-2 py-1 rounded">DE</span>
              <span className="cursor-pointer hover:text-slate-900 border border-transparent px-2 py-1 rounded transition-colors">EN</span>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} NovaDash GmbH. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
