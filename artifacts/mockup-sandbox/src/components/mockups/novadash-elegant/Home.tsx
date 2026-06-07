import React, { useEffect, useRef } from "react";
import "./_group.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  BarChart3, 
  Box, 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  Layers, 
  Lock, 
  Package, 
  RefreshCcw, 
  Server, 
  ShieldCheck
} from "lucide-react";

export function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="elegant-theme min-h-screen selection:bg-primary selection:text-primary-foreground overflow-hidden relative">
      <div className="glow-accent top-[-200px] left-[-200px]"></div>
      <div className="glow-accent top-[40%] right-[-300px]"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-white/5 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
            <Box className="w-4 h-4 text-primary" />
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight text-white">NovaDash</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#funktionen" className="hover:text-white transition-colors">Funktionen</a>
          <a href="#preise" className="hover:text-white transition-colors">Preise</a>
          <a href="#ueber-uns" className="hover:text-white transition-colors">Über uns</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 text-white bg-transparent">
            Login
          </Button>
          <Button className="bg-white text-black hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Early Access
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 text-xs font-medium text-primary mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Early Access Phase Q3
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Alle Marktplätze.<br />Eine Oberfläche.
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-light">
            Die cloudbasierte Multi-Channel-Plattform für Order-Management. Kleine und mittlere E-Commerce-Händler verwalten Bestellungen, Versand und Tracking an einer zentralen Stelle.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base px-8 h-14 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Early Access anfragen
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 bg-transparent text-base px-8 h-14 w-full sm:w-auto gap-2 group">
              Funktionen ansehen
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-on-scroll delay-200 group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          <img 
            src="/__mockup/images/nd-elegant-dashboard.png" 
            alt="NovaDash Dashboard Interface" 
            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
      </section>

      {/* Integrationen */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01] relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
          <span className="text-sm font-medium tracking-widest uppercase">Integrationen</span>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-lg font-serif italic">
            <span>Amazon</span>
            <span>eBay</span>
            <span>Ecwid</span>
            <span>DHL</span>
            <span>GLS</span>
            <span>Sendcloud</span>
            <span>17TRACK</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Das Ende des <br/><span className="text-white/40">Tracking-Chaos.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 font-light">
              Der Wechsel zwischen Amazon Seller Central, eBay, Ihrem Shop-System und verschiedenen Versanddienstleistern kostet täglich wertvolle Stunden und führt unweigerlich zu Fehlern.
            </p>
            <ul className="space-y-4">
              {[
                "Manuelle Übertragung von Bestelldaten",
                "Fehleranfällige Erstellung von Versandlabels",
                "Fehlende Übersicht über verschiedene Marktplätze",
                "Langsame Reaktion auf Kundenanfragen zum Versandstatus"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <div className="mt-1 w-5 h-5 rounded-full bg-destructive/20 border border-destructive/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-on-scroll delay-200">
            <div className="space-y-4 mt-8">
              <div className="glass-card p-6 rounded-xl border border-white/5">
                <Package className="w-8 h-8 text-white/40 mb-4" />
                <h3 className="font-semibold text-white mb-2">Manuelle Prozesse</h3>
                <p className="text-sm text-white/50">Zeitaufwendiges Copy & Paste von Adressdaten.</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-white/5">
                <RefreshCcw className="w-8 h-8 text-white/40 mb-4" />
                <h3 className="font-semibold text-white mb-2">Bestell-Chaos</h3>
                <p className="text-sm text-white/50">Verlorene Übersicht über den Status einzelner Orders.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                <Layers className="w-8 h-8 text-white/40 mb-4" />
                <h3 className="font-semibold text-white mb-2">Fragmentierung</h3>
                <p className="text-sm text-white/50">Zu viele Tabs, Logins und inkompatible Systeme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lösung / Features */}
      <section id="funktionen" className="py-32 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">Präzision in jedem Schritt</h2>
            <p className="text-white/60 text-lg font-light">
              NovaDash konsolidiert Ihre gesamte Auftragsabwicklung in einer hochperformanten, sicheren Umgebung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-primary" />,
                title: "Kanalübergreifend zentral",
                desc: "Bündeln Sie Bestellungen von Amazon, eBay, Ecwid und weiteren in einer einheitlichen, sauberen Ansicht."
              },
              {
                icon: <Box className="w-6 h-6 text-primary" />,
                title: "Automatischer Versand",
                desc: "Regelbasierte Erstellung von Versandlabels für DHL, GLS und Co. direkt aus der Bestellansicht."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-primary" />,
                title: "Echtzeit-Verfolgung",
                desc: "Integrierte 17TRACK-Anbindung für proaktives Monitoring aller Sendungen weltweit."
              }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 rounded-xl border border-white/5 hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ animationDelay: `${(i+1)*100}ms`}}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-on-scroll">
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-white/80 mb-4" />
              <h4 className="font-medium text-white mb-2">DSGVO-Konform</h4>
              <p className="text-xs text-white/50">Vollständig rechtskonform nach EU-Standards</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col items-center text-center mt-0 sm:mt-8">
              <Server className="w-10 h-10 text-white/80 mb-4" />
              <h4 className="font-medium text-white mb-2">EU-Hosting</h4>
              <p className="text-xs text-white/50">Datenstandort Deutschland, ISO 27001 zertifiziert</p>
            </div>
            <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col items-center text-center sm:col-span-2">
              <Lock className="w-10 h-10 text-white/80 mb-4" />
              <h4 className="font-medium text-white mb-2">PII-Verschlüsselung</h4>
              <p className="text-xs text-white/50">Personenbezogene Daten werden auf Datenbankebene verschlüsselt (AES-256)</p>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-on-scroll delay-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 text-xs font-medium text-white/70 mb-6">
              Enterprise Grade Security
            </div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Kompromisslose Datensicherheit.
            </h2>
            <p className="text-white/60 text-lg mb-8 font-light">
              Ihre Kundendaten und Geschäftsprozesse verdienen den höchsten Schutz. NovaDash ist von Grund auf mit Enterprise-Sicherheitsstandardsarchitektur entwickelt worden.
            </p>
            <Button variant="link" className="text-white p-0 h-auto hover:no-underline hover:text-primary group">
              Details zur Sicherheitsarchitektur lesen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative z-10">
        <div className="absolute inset-0 bg-primary/5 border-y border-primary/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-on-scroll">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Bereit für operatives Exzellenz?
          </h2>
          <p className="text-xl text-white/70 mb-10 font-light max-w-2xl mx-auto">
            Sichern Sie sich Ihren Platz im Early Access Programm und transformieren Sie Ihr Order-Management.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base px-10 h-14 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Jetzt für den Early Access vormerken
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-16 pb-8 px-6 md:px-12 bg-black relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
                <Box className="w-3 h-3 text-primary" />
              </div>
              <span className="font-serif font-semibold text-lg tracking-tight text-white">NovaDash</span>
            </div>
            <p className="text-white/40 text-sm font-light max-w-xs">
              Die cloudbasierte Multi-Channel-Plattform für professionelles Order-Management im europäischen E-Commerce.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Plattform</h4>
            <ul className="space-y-2 text-sm text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Funktionen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrationen</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sicherheit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/40 font-light">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Sub-Processor-Liste</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <span className="text-white">DE</span>
              <a href="#" className="hover:text-white transition-colors">EN</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
