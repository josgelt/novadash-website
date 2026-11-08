// Copy for the design-B subpages. Facts only: integrations, prices and data
// handling as they exist in the product (prices: Stripe billing plan, 2026-11).

export const pagesB = {
  de: {
    features: {
      eyebrow: "// FUNKTIONEN",
      title: "Alles, was zwischen Bestellung und Paket passiert.",
      subtitle: "Ein Arbeitsplatz für Aufträge, Labels, Druck, Tracking und Retouren – für Händler, die auf mehreren Marktplätzen verkaufen.",
      sections: [
        { n: "[01]", t: "Aufträge aus allen Kanälen", d: "Neue Bestellungen laufen automatisch ein – sortiert, durchsuchbar, ohne Doppelte. Stornierungswünsche von Käufern sind sofort sichtbar.", tags: ["Amazon", "eBay", "WooCommerce", "Ecwid"] },
        { n: "[02]", t: "Versandlabels in Serie", d: "Aufträge markieren, Versanddienst wählen, alle Labels auf einmal erzeugen – auch Retourenlabels.", tags: ["DHL", "GLS", "Sendcloud", "SendDrop"] },
        { n: "[03]", t: "Drucken ohne Umweg", d: "Der NovaDash Print Client schickt Labels direkt an Ihren Etikettendrucker. Kein Herunterladen, kein Öffnen, kein Druckdialog.", tags: ["Windows", "macOS"] },
        { n: "[04]", t: "Tracking und Rückmeldung", d: "Sendungsnummern gehen automatisch an den Marktplatz zurück. Hängende Sendungen ohne neuen Status fallen auf, bevor der Kunde fragt.", tags: ["Automatische Rückmeldung", "Sendungsverfolgung"] },
        { n: "[05]", t: "Retouren im Griff", d: "Rücksendungen und Erstattungen aus allen Kanälen an einem Ort. Auf Wunsch mit eigenem Retourenportal für Ihre Käufer.", tags: ["Erstattungen", "Retourenportal"] },
        { n: "[06]", t: "Fulfillment angebunden", d: "Aufträge können an einen Fulfillment-Dienstleister übergeben werden, der Rückmeldungen laufen wieder in NovaDash zusammen.", tags: ["LogoiX"] },
      ],
      security: {
        title: "Sicherheit ist eingebaut, nicht nachgerüstet.",
        items: [
          "Namen, Adressen und Kontaktdaten Ihrer Käufer werden verschlüsselt gespeichert.",
          "Personenbezogene Bestelldaten werden 30 Tage nach dem Kauf automatisch unkenntlich gemacht.",
          "Anmeldung mit Zwei-Faktor-Code.",
          "Alle Daten liegen auf Servern in der EU.",
        ],
      },
    },
    pricing: {
      eyebrow: "// PREISE",
      title: "Ein Preis. Alles drin.",
      subtitle: "Keine Staffeln nach Bestellvolumen, keine Aufpreise pro Marktplatz.",
      plan: {
        name: "NOVADASH",
        monthly: "39 €",
        monthlyUnit: "pro Monat",
        yearly: "oder 390 € pro Jahr – zwei Monate geschenkt",
        includes: ["Alle Marktplätze und Versanddienste", "Versandlabels und Retourenlabels", "Print Client für den Etikettendrucker", "Tracking-Rückmeldung an die Marktplätze", "Retouren und Erstattungen", "Zwei-Faktor-Anmeldung"],
        cta: "Early Access anfragen",
      },
      addon: {
        name: "RETOURENPORTAL",
        price: "+ 7,99 € pro Monat",
        yearly: "oder 79,90 € pro Jahr",
        d: "Ihre Käufer melden Rücksendungen selbst an und erhalten das Retourenlabel direkt – ohne E-Mail-Pingpong.",
      },
      notes: ["Preise inklusive Umsatzsteuer.", "14 Tage kostenlos testen, danach monatlich kündbar.", "Während des Pilotbetriebs nehmen wir neue Händler einzeln auf."],
    },
    about: {
      eyebrow: "// ÜBER UNS",
      title: "Aus dem Handel. Für den Handel.",
      subtitle: "NovaDash entsteht in Salzburg – aus der eigenen Erfahrung, Bestellungen von mehreren Marktplätzen gleichzeitig zu versenden.",
      blocks: [
        { t: "Warum es NovaDash gibt", d: "Wer auf Amazon, eBay und im eigenen Shop verkauft, arbeitet in drei Backends, druckt aus drei Portalen und pflegt Sendungsnummern von Hand nach. NovaDash fasst diese Arbeit an einem Ort zusammen." },
        { t: "Wie wir arbeiten", d: "Wir bauen zuerst das, was im Versandalltag Zeit kostet, und prüfen jede Funktion mit echten Bestellungen von Pilot-Händlern, bevor sie für alle freigeschaltet wird." },
        { t: "Worauf Sie sich verlassen können", d: "Kundendaten werden verschlüsselt gespeichert und nach 30 Tagen unkenntlich gemacht, alle Server stehen in der EU, und jede Anbindung läuft über die offiziellen Schnittstellen der Marktplätze." },
      ],
      cta: "Kontakt aufnehmen",
    },
  },
  en: {
    features: {
      eyebrow: "// FEATURES",
      title: "Everything between order and parcel.",
      subtitle: "One workspace for orders, labels, printing, tracking and returns – for merchants selling on several marketplaces.",
      sections: [
        { n: "[01]", t: "Orders from every channel", d: "New orders flow in automatically – sorted, searchable, without duplicates. Buyer cancellation requests show up right away.", tags: ["Amazon", "eBay", "WooCommerce", "Ecwid"] },
        { n: "[02]", t: "Shipping labels in batches", d: "Select orders, pick a carrier, create all labels at once – return labels included.", tags: ["DHL", "GLS", "Sendcloud", "SendDrop"] },
        { n: "[03]", t: "Printing without detours", d: "The NovaDash Print Client sends labels straight to your label printer. No downloading, no opening, no print dialog.", tags: ["Windows", "macOS"] },
        { n: "[04]", t: "Tracking flows back", d: "Tracking numbers go back to the marketplace automatically. Stuck shipments without a new status are flagged before the customer asks.", tags: ["Automatic feedback", "Shipment tracking"] },
        { n: "[05]", t: "Returns under control", d: "Returns and refunds from every channel in one place. Optionally with your own returns portal for buyers.", tags: ["Refunds", "Returns portal"] },
        { n: "[06]", t: "Fulfilment connected", d: "Orders can be handed to a fulfilment provider; its feedback comes back into NovaDash.", tags: ["LogoiX"] },
      ],
      security: {
        title: "Security built in, not bolted on.",
        items: [
          "Your buyers' names, addresses and contact details are stored encrypted.",
          "Personal order data is made unidentifiable 30 days after purchase automatically.",
          "Sign-in with a two-factor code.",
          "All data is stored on servers in the EU.",
        ],
      },
    },
    pricing: {
      eyebrow: "// PRICING",
      title: "One price. Everything included.",
      subtitle: "No tiers by order volume, no surcharge per marketplace.",
      plan: {
        name: "NOVADASH",
        monthly: "€39",
        monthlyUnit: "per month",
        yearly: "or €390 per year – two months free",
        includes: ["All marketplaces and carriers", "Shipping and return labels", "Print Client for your label printer", "Tracking feedback to the marketplaces", "Returns and refunds", "Two-factor sign-in"],
        cta: "Request early access",
      },
      addon: {
        name: "RETURNS PORTAL",
        price: "+ €7.99 per month",
        yearly: "or €79.90 per year",
        d: "Your buyers register returns themselves and get the return label straight away – no email ping-pong.",
      },
      notes: ["Prices include VAT.", "Try free for 14 days, then cancel monthly.", "During the pilot phase we onboard new merchants one by one."],
    },
    about: {
      eyebrow: "// ABOUT",
      title: "From retail. For retail.",
      subtitle: "NovaDash is built in Salzburg – from first-hand experience of shipping orders from several marketplaces at once.",
      blocks: [
        { t: "Why NovaDash exists", d: "Selling on Amazon, eBay and your own shop means three back offices, printing from three portals and copying tracking numbers by hand. NovaDash brings that work into one place." },
        { t: "How we work", d: "We build what costs time in daily shipping first, and test every feature with real orders from pilot merchants before releasing it to everyone." },
        { t: "What you can rely on", d: "Customer data is stored encrypted and made unidentifiable after 30 days, all servers are in the EU, and every connection uses the marketplaces' official interfaces." },
      ],
      cta: "Get in touch",
    },
  },
};
