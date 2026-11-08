// Copy for the design-B home page ("Kontrollraum").

export const homeB = {
  de: {
    eyebrow: "// AMAZON · EBAY · WOOCOMMERCE · ECWID",
    title1: "Ihr Versand.",
    title2: "Auf einen Blick.",
    subtitle: "Alle Marktplatz-Aufträge in einer Steuerzentrale: Labels in Serie, Druck direkt am Etikettendrucker, Tracking und Retouren laufen automatisch zurück.",
    ctaPrimary: "Early Access anfragen",
    ctaSecondary: "Funktionen ansehen",
    sampleNote: "Beispielansicht mit erfundenen Aufträgen",
    kpis: [
      { label: "OFFEN", value: "42", hint: "davon 12 heute", tone: "open" },
      { label: "LABEL BEREIT", value: "9", hint: "warten auf Druck", tone: "label" },
      { label: "HEUTE VERSENDET", value: "118", hint: "bis 14:00", tone: "sent" },
      { label: "RETOUREN", value: "7", hint: "2 erstattet", tone: "plain" },
    ],
    status: { open: "OFFEN", label: "LABEL", print: "GEDRUCKT", sent: "VERSENDET" },
    features: [
      { n: "[01] SAMMELN", t: "Ein Eingang für alle Kanäle", d: "Bestellungen aus Amazon, eBay, WooCommerce und Ecwid laufen automatisch in eine Liste." },
      { n: "[02] VERSENDEN", t: "Labels in Serie, Druck ohne Umweg", d: "Aufträge markieren, Labels erzeugen – der Print Client druckt direkt am Etikettendrucker." },
      { n: "[03] ABSCHLIESSEN", t: "Tracking und Retouren zurück", d: "Sendungsnummern gehen an den Marktplatz, Retouren werden erkannt und abgeschlossen." },
    ],
    ctaTitle: "Weniger Tabs. Mehr Pakete.",
    ctaText: "Pilotbetrieb – wir nehmen neue Händler einzeln auf.",
  },
  en: {
    eyebrow: "// AMAZON · EBAY · WOOCOMMERCE · ECWID",
    title1: "Your shipping.",
    title2: "At a glance.",
    subtitle: "All marketplace orders in one control centre: labels in batches, printing straight to the label printer, tracking and returns flow back automatically.",
    ctaPrimary: "Request early access",
    ctaSecondary: "See features",
    sampleNote: "Sample view with made-up orders",
    kpis: [
      { label: "OPEN", value: "42", hint: "12 of them today", tone: "open" },
      { label: "LABEL READY", value: "9", hint: "waiting to print", tone: "label" },
      { label: "SHIPPED TODAY", value: "118", hint: "until 2 pm", tone: "sent" },
      { label: "RETURNS", value: "7", hint: "2 refunded", tone: "plain" },
    ],
    status: { open: "OPEN", label: "LABEL", print: "PRINTED", sent: "SHIPPED" },
    features: [
      { n: "[01] COLLECT", t: "One inbox for every channel", d: "Orders from Amazon, eBay, WooCommerce and Ecwid flow into one list automatically." },
      { n: "[02] SHIP", t: "Labels in batches, printing without detours", d: "Select orders, create labels – the Print Client prints straight to the label printer." },
      { n: "[03] COMPLETE", t: "Tracking and returns flow back", d: "Tracking numbers go to the marketplace, returns are recognised and completed." },
    ],
    ctaTitle: "Fewer tabs. More parcels.",
    ctaText: "Pilot phase – we onboard new merchants one by one.",
  },
};
