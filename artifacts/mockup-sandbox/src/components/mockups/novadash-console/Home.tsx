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
  Terminal,
  Database,
  Cpu,
  Lock,
  Server
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
    <div className="nd-console min-h-screen selection:bg-[#bef264] selection:text-[#09090b]">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? "bg-[#09090b]/90 backdrop-blur-md border-[#27272a] py-3" : "bg-[#09090b] border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#bef264] flex items-center justify-center text-[#09090b] font-bold text-lg">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              NovaDash
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a1a1aa] font-mono">
            <a href="#" className="text-[#bef264] transition-colors">&gt; Home</a>
            <a href="#" className="hover:text-white transition-colors">&gt; Funktionen</a>
            <a href="#" className="hover:text-white transition-colors">&gt; Preise</a>
            <a href="#" className="hover:text-white transition-colors">&gt; Über uns</a>
            <a href="#" className="hover:text-white transition-colors">&gt; Kontakt</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 text-xs font-mono text-[#a1a1aa] mr-2">
              <span className="text-white cursor-pointer bg-[#27272a] px-2 py-1 rounded-sm">DE</span>
              <span className="cursor-pointer hover:text-white transition-colors">EN</span>
            </div>
            <Button className="bg-[#bef264] hover:bg-[#d9f99d] text-[#09090b] rounded-sm px-6 font-bold uppercase tracking-wider text-xs border-b-2 border-r-2 border-[#84cc16] active:border-0 active:translate-y-[2px] active:translate-x-[2px] transition-all">
              Early Access
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10"></div>
          
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[rgba(190,242,100,0.1)] border border-[#bef264]/30 text-[#bef264] text-xs font-mono tracking-wider uppercase mb-8">
                  <div className="w-2 h-2 bg-[#bef264] rounded-full nd-console-pulse"></div>
                  STATUS: EARLY ACCESS BETA
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05] uppercase">
                  Alle Marktplätze.<br />
                  <span className="text-[#bef264]">Eine Konsole.</span>
                </h1>
                <p className="text-lg text-[#a1a1aa] mb-10 leading-relaxed max-w-xl font-mono text-sm">
                  &gt; INIT: Cloudbasierte Order-Management-Plattform für E-Commerce im DACH-Raum.<br/>
                  &gt; EXEC: Verwalten Sie Bestellungen, Versand und Tracking automatisiert an einer zentralen Stelle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="w-full sm:w-auto bg-[#bef264] hover:bg-[#d9f99d] text-[#09090b] rounded-sm px-8 py-6 text-sm font-bold uppercase tracking-wider border-b-4 border-r-4 border-[#84cc16] active:border-b-0 active:border-r-0 active:translate-y-[4px] active:translate-x-[4px] transition-all flex items-center justify-center gap-2">
                    <Terminal size={18} />
                    Early Access anfragen
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto rounded-sm px-8 py-6 text-sm font-bold uppercase tracking-wider border-[#27272a] text-white hover:bg-[#18181b] hover:text-[#bef264] transition-colors flex items-center justify-center gap-2">
                    <Database size={18} />
                    Funktionen ansehen
                  </Button>
                </div>
              </div>

              {/* Hero Visual - Dashboard Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#bef264]/10 blur-[100px] -z-10 rounded-full"></div>
                <div className="bg-[#18181b] rounded-sm border border-[#27272a] shadow-2xl overflow-hidden relative">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272a] bg-[#09090b]">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                    <div className="ml-4 font-mono text-xs text-[#a1a1aa]">ops_console.exe</div>
                  </div>
                  <div className="relative p-1">
                    <img 
                      src="/__mockup/images/novadash-console-hero.png" 
                      alt="NovaDash Operations Console" 
                      className="w-full h-auto"
                    />
                    <div className="nd-console-scanline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Bar */}
        <section className="py-8 border-y border-[#27272a] bg-[#09090b]">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-xs font-mono text-[#a1a1aa] uppercase whitespace-nowrap">
                <span className="text-[#bef264] mr-2">&gt;</span>
                Supported Nodes:
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 items-center w-full font-mono text-sm">
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">Amazon</span>
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">eBay</span>
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">Ecwid</span>
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">DHL</span>
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">GLS</span>
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">Sendcloud</span>
                <span className="text-[#52525b] uppercase hover:text-white transition-colors cursor-default">17TRACK</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 bg-[#09090b] relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                  Wachsen Sie nicht aus Ihren <span className="text-[#ef4444]">Prozessen</span> heraus.
                </h2>
                <p className="text-[#a1a1aa] mb-10 leading-relaxed font-mono text-sm">
                  Mit jedem neuen Marktplatz multipliziert sich der Verwaltungsaufwand. Was mit 10 Bestellungen am Tag funktionierte, führt bei 100 zum Systemkollaps. Zeit ist Ihr wertvollstes Gut – verschwenden Sie sie nicht mit Copy & Paste.
                </p>
                <div className="space-y-4 font-mono text-sm">
                  {[
                    "Kein Einloggen in 5 verschiedene Portale mehr",
                    "Reduzierung manueller Übertragungsfehler auf 0",
                    "Skalierbare Prozesse für das Weihnachtsgeschäft"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border border-[#27272a] bg-[#18181b] rounded-sm">
                      <div className="text-[#bef264] mt-0.5">&gt;</div>
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <RefreshCw size={24} />, title: "Manuelles Chaos", desc: "Bestellungen müssen aus diversen Kanälen abgetippt werden.", color: "text-[#ef4444]", border: "border-[#ef4444]/30" },
                  { icon: <Package size={24} />, title: "Versand-Fehler", desc: "Falsche Labels und verzögerter Versand schaden der Bewertung.", color: "text-[#f59e0b]", border: "border-[#f59e0b]/30" },
                  { icon: <Activity size={24} />, title: "Tracking-Lücken", desc: 'Kunden fragen "Wo ist mein Paket?", weil Updates fehlen.', color: "text-[#a1a1aa]", border: "border-[#27272a]" },
                  { icon: <Globe size={24} />, title: "Silo-Systeme", desc: "Ständiges Einloggen in Amazon, eBay und Versanddienstleister.", color: "text-[#a1a1aa]", border: "border-[#27272a]" }
                ].map((item, i) => (
                  <div key={i} className={`bg-[#18181b] p-6 border ${item.border} rounded-sm relative overflow-hidden group`}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className={`${item.color} mb-6`}>{item.icon}</div>
                    <h3 className="font-bold text-white mb-3 uppercase text-sm">{item.title}</h3>
                    <p className="text-xs font-mono text-[#a1a1aa] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 bg-[#18181b] border-y border-[#27272a]">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                Alles an einem Ort.<br/>
                <span className="text-[#bef264]">Vollautomatisiert.</span>
              </h2>
              <p className="text-[#a1a1aa] font-mono text-sm max-w-2xl">
                &gt; NovaDash ist nicht einfach ein weiteres Tool, sondern das Betriebssystem für Ihren E-Commerce-Erfolg.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe size={24} />,
                  title: "Zentrales Order-Management",
                  desc: "Bestellungen von Amazon, eBay, Ihrem Onlineshop und mehr laufen in Echtzeit in einer sauberen Liste zusammen.",
                  metric: "SYS.01"
                },
                {
                  icon: <Truck size={24} />,
                  title: "Automatisierte Labels",
                  desc: "Regelbasierter Versand. Mit einem Klick das günstigste Label erstellen – egal ob DHL, GLS oder DPD.",
                  metric: "SYS.02"
                },
                {
                  icon: <Activity size={24} />,
                  title: "Echtzeit-Sendungsverfolgung",
                  desc: "Automatischer Rückfluss der Tracking-IDs an die Marktplätze. Ihre Kunden sind immer informiert.",
                  metric: "SYS.03"
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-[#09090b] border border-[#27272a] rounded-sm hover:border-[#bef264]/50 transition-colors relative group">
                  <div className="absolute top-4 right-4 text-[#27272a] font-mono text-xs group-hover:text-[#bef264]/30 transition-colors">
                    {feature.metric}
                  </div>
                  <div className="w-12 h-12 bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#bef264] mb-8">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase">{feature.title}</h3>
                  <p className="text-[#a1a1aa] font-mono text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-24 px-6 bg-[#09090b]">
          <div className="container mx-auto max-w-3xl">
            <div className="p-10 border border-[#27272a] bg-[#18181b] rounded-sm relative text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#09090b] border border-[#27272a] text-xs font-mono text-[#a1a1aa] uppercase">
                Resource Allocation
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 uppercase">Transparente Infrastruktur-Kosten</h2>
              <div className="text-5xl font-mono font-bold text-[#bef264] mb-4">
                € 49 <span className="text-lg text-[#a1a1aa]">/ Monat</span>
              </div>
              <div className="text-xs font-mono text-[#ef4444] mb-8">[Platzhalter]</div>
              <Button className="bg-white hover:bg-gray-200 text-[#09090b] rounded-sm px-8 py-6 text-sm font-bold uppercase tracking-wider transition-colors">
                Preise ansehen
              </Button>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="py-24 px-6 bg-[#09090b] border-t border-[#27272a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>
          
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#18181b] border border-[#27272a] text-[#a1a1aa] text-xs font-mono tracking-wider uppercase mb-8">
                  <ShieldCheck size={14} className="text-blue-500" />
                  SEC_LEVEL: MAXIMUM
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
                  Kompromisslose<br/>Sicherheit.
                </h2>
                <p className="text-[#a1a1aa] font-mono text-sm mb-10 leading-relaxed">
                  Als Profi-Werkzeug nehmen wir Datensicherheit ernst. Keine Experimente, keine Grauzonen. NovaDash ist von Grund auf für die strengen europäischen Datenschutzstandards konzipiert.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "DSGVO-konform", desc: "Vollständige Eindeckung europäischer Richtlinien." },
                    { title: "EU-Hosting", desc: "Ihre Daten verlassen niemals Deutschland (ISO 27001 zertifizierte Rechenzentren)." },
                    { title: "PII-Verschlüsselung", desc: "Personenbezogene Daten (PII) sind asymmetrisch verschlüsselt." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 text-blue-500">
                        <Lock size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white uppercase text-sm mb-1">{item.title}</h4>
                        <p className="text-[#a1a1aa] font-mono text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#18181b] border border-[#27272a] rounded-sm p-8 font-mono text-xs text-[#a1a1aa]">
                <div className="flex items-center justify-between border-b border-[#27272a] pb-4 mb-4">
                  <span className="uppercase text-white">System Status</span>
                  <span className="text-[#10b981]">OPERATIONAL</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Uptime SLA</span>
                    <span className="text-white">99.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Encryption</span>
                    <span className="text-white">AES-256 / TLS 1.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Datacenter</span>
                    <span className="text-white">Frankfurt, DE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Audit</span>
                    <span className="text-white">ISO 27001</span>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-[#27272a]">
                  <div className="text-blue-500 flex items-center gap-2">
                    <Server size={14} />
                    <span>EU-Hosting Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 bg-[#bef264] text-[#09090b] text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight">
              Bereit für effizientes<br/>Order-Management?
            </h2>
            <p className="text-[#18181b] font-mono text-sm mb-12 max-w-xl mx-auto">
              Wir vergeben aktuell exklusive Plätze für unsere Early Access Phase. Sichern Sie sich Ihren Zugang und gestalten Sie die Zukunft des E-Commerce mit.
            </p>
            <Button className="bg-[#09090b] hover:bg-[#27272a] text-white rounded-sm px-10 py-8 text-base font-bold uppercase tracking-wider transition-all hover:-translate-y-1 shadow-2xl flex items-center gap-3 mx-auto">
              <Terminal size={20} />
              Jetzt vormerken
              <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#09090b] border-t border-[#27272a] py-16 px-6 font-mono text-xs">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-[#bef264] flex items-center justify-center text-[#09090b]">
                  <Terminal size={14} strokeWidth={3} />
                </div>
                <span className="font-bold text-white uppercase tracking-widest">NovaDash</span>
              </div>
              <p className="text-[#a1a1aa] mb-4 max-w-xs leading-relaxed">
                Cloudbasierte Multi-Channel Order-Management Plattform für den modernen E-Commerce.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase mb-4 tracking-widest">Legal</h4>
              <ul className="space-y-3 text-[#a1a1aa]">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase mb-4 tracking-widest">Company</h4>
              <ul className="space-y-3 text-[#a1a1aa]">
                <li>[Firmenname]</li>
                <li>[Adresse]</li>
                <li>[PLZ Stadt]</li>
                <li><a href="#" className="hover:text-[#bef264] transition-colors mt-2 block">Kontakt</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#27272a] flex flex-col md:flex-row justify-between items-center gap-4 text-[#52525b]">
            <div>&copy; {new Date().getFullYear()} NovaDash. All systems operational.</div>
            <div className="flex items-center gap-2">
              <span>SYS_LANG:</span>
              <span className="text-white border border-[#27272a] px-1.5 py-0.5 bg-[#18181b]">DE</span>
              <span className="hover:text-white cursor-pointer px-1.5 py-0.5">EN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
