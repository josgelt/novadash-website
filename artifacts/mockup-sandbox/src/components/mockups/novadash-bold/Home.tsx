import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShieldCheck, BarChart3, Zap, Globe, Menu, X, CheckCircle2, Server, Lock } from "lucide-react";
import "./_group.css";

export function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="novadash-bold min-h-screen selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wide text-white">
              NOVADASH
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#funktionen" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Funktionen</a>
            <a href="#preise" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Preise</a>
            <a href="#ueber-uns" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#kontakt" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Kontakt</a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded-none uppercase tracking-wider">
              Early Access
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card border-b border-border p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#" className="text-lg font-medium text-foreground">Home</a>
            <a href="#funktionen" className="text-lg font-medium text-muted-foreground">Funktionen</a>
            <a href="#preise" className="text-lg font-medium text-muted-foreground">Preise</a>
            <a href="#ueber-uns" className="text-lg font-medium text-muted-foreground">Über uns</a>
            <a href="#kontakt" className="text-lg font-medium text-muted-foreground">Kontakt</a>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold w-full mt-4 rounded-none uppercase">
              Early Access anfragen
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-primary font-semibold text-xs rounded-full uppercase tracking-widest mb-8 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Next-Gen Order Management
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6 text-white">
                ALLE MARKTPLÄTZE.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  EINE OBERFLÄCHE.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light leading-relaxed">
                Beenden Sie das Tab-Chaos. Verwalten Sie Bestellungen, Versand und Tracking über Amazon, eBay und Ihren Shop hinweg automatisiert an einem zentralen Ort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 h-auto rounded-none uppercase tracking-wide">
                  Early Access anfragen
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary text-white font-bold text-lg px-8 py-6 h-auto rounded-none uppercase tracking-wide bg-transparent">
                  Funktionen ansehen
                </Button>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />
              <img 
                src="/__mockup/images/nd-bold-hero.png" 
                alt="NovaDash Interface" 
                className="w-full h-auto object-cover rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-border rotate-[2deg] hover:rotate-0 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Bar */}
      <section className="border-y border-border bg-card/50 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Nahtlose Integration mit ihren wichtigsten Kanälen
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['AMAZON', 'EBAY', 'ECWID', 'DHL', 'GLS', 'SENDCLOUD', '17TRACK'].map((brand) => (
              <div key={brand} className="font-display font-bold text-2xl tracking-wider text-white">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32 relative bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Der Schmerz des Wachstums.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Mehr Kanäle bedeuten mehr Umsatz — aber auch mehr Chaos im Backend.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Zersplitterte Systeme", desc: "Zwischen 5 verschiedenen Tabs hin und her springen, nur um den Status einer Bestellung zu prüfen." },
                { title: "Manuelle Fehler", desc: "Tippfehler bei Copy-Paste von Lieferadressen führen zu teuren Retouren und verärgerten Kunden." },
                { title: "Tracking-Blindflug", desc: "Kundenfragen nach dem Paketstatus blockieren den Support, weil Informationen fehlen." },
                { title: "Zeitfresser Versand", desc: "Manuelles Drucken von Labels für jeden Kanal einzeln kostet Stunden pro Woche." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-card border border-border border-l-4 border-l-destructive hover:translate-x-2 transition-transform duration-300 group">
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-destructive transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="funktionen" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
              Kontrolle zurückerobern.
            </h2>
            <p className="text-xl text-muted-foreground">
              NovaDash konsolidiert Ihre gesamte E-Commerce-Operation in einem kraftvollen, blitzschnellen Interface.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border p-10 rounded-none hover:border-primary transition-colors group">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Zentrales Cockpit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alle Bestellungen aus Amazon, eBay und Ihrem Shop fließen in Echtzeit in eine einzige, übersichtliche Liste.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-10 rounded-none hover:border-primary transition-colors group translate-y-0 md:translate-y-8">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Auto-Versand</h3>
              <p className="text-muted-foreground leading-relaxed">
                Regelbasierte Label-Erstellung für DHL und GLS. Ein Klick, und das Paket ist bereit für den Abholer.
              </p>
            </Card>
            
            <Card className="bg-card border-border p-10 rounded-none hover:border-primary transition-colors group">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Echtzeit-Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatischer Sync von Tracking-IDs zurück zu den Marktplätzen. Proaktive Updates für Ihre Kunden.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-primary text-primary-foreground p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                <path d="M0,0 L100,0 L100,100 L0,100 Z M50,10 L90,50 L50,90 L10,50 Z" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Sicherheit ohne Kompromisse.
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Als B2B-Profiwerkzeug nehmen wir den Schutz Ihrer und der Daten Ihrer Kunden ernst. Entwickelt und gehostet in Deutschland.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold text-lg">100% DSGVO-konform</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6" />
                    <span className="font-bold text-lg">EU-Hosting (Frankfurt a.M.)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6" />
                    <span className="font-bold text-lg">AES-256 PII-Verschlüsselung</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <ShieldCheck className="w-64 h-64 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-border bg-card text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-white uppercase tracking-tight">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sichern Sie sich einen Platz in unserer geschlossenen Beta und transformieren Sie Ihr Order-Management.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 h-auto rounded-none uppercase tracking-widest shadow-[0_0_40px_rgba(255,87,34,0.3)] hover:shadow-[0_0_60px_rgba(255,87,34,0.5)] transition-all">
            Jetzt für Early Access vormerken
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-border pb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-wide text-white">
                  NOVADASH
                </span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                Die kompromisslose Multi-Channel-Plattform für E-Commerce Profis im DACH-Raum.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white uppercase tracking-widest mb-6">Rechtliches</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AGB</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Impressum</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sub-Processor-Liste</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white uppercase tracking-widest mb-6">Unternehmen</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Über uns</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kontakt</a></li>
                <li className="pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-white font-bold cursor-pointer">DE</span>
                    <span>/</span>
                    <span className="hover:text-white cursor-pointer transition-colors">EN</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} NovaDash. Alle Rechte vorbehalten.</p>
            <p>Made in Germany.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
