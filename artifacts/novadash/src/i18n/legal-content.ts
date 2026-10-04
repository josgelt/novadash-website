// Legal documents (privacy policy, terms). A body item is either a paragraph
// (string) or a bullet list (string[]). "{imprint}" renders as a link to /impressum.

export type LegalSection = { title: string; body: (string | string[])[] };
export type LegalDoc = { updated: string; intro?: string; sections: LegalSection[] };

const privacyDe: LegalDoc = {
  updated: "4. Oktober 2026",
  sections: [
    {
      title: "Verantwortlicher",
      body: [
        "Verantwortlich ist der im {imprint} genannte Betreiber von NovaDash. Datenschutzanfragen bitte an info@novadash.eu.",
      ],
    },
    {
      title: "Besuch dieser Website",
      body: [
        "Die Website läuft auf Servern in Deutschland. Beim Aufruf speichert der Server technisch bedingt IP-Adresse, Zeitpunkt, aufgerufene Seite, verweisende Seite und Browser-Kennung. Das dient der Sicherheit und dem stabilen Betrieb (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Diese Protokolle werden nach 14 Tagen gelöscht.",
        "Es gibt keine Cookies, kein Tracking und keine Werbedienste. Ihre Sprachauswahl wird nur lokal in Ihrem Browser gespeichert. Schriftarten werden vom eigenen Server geladen.",
        "Die Seite „Status“ zeigt die Verfügbarkeitsanzeige eines externen Überwachungsdienstes. Erst beim Öffnen dieser Seite wird dabei Ihre IP-Adresse an diesen Dienst übermittelt.",
      ],
    },
    {
      title: "Kontakt per E-Mail",
      body: [
        "Wenn Sie uns schreiben, verwenden wir Ihre Angaben nur zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und löschen sie, wenn sie nicht mehr benötigt werden und keine Aufbewahrungspflicht besteht.",
      ],
    },
    {
      title: "Nutzung der Plattform",
      body: [
        "Für die Nutzung von NovaDash verarbeiten wir die Daten Ihres Kontos (z. B. E-Mail-Adresse, Anmeldedaten und Verbindungen zu Marktplätzen) zur Erfüllung des Vertrags (Art. 6 Abs. 1 lit. b DSGVO). Die Plattform setzt nur technisch notwendige Cookies für die Anmeldung (höchstens 7 Tage). Kontodaten werden nach Vertragsende gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten bestehen.",
        "Zur Fehlererkennung setzen wir einen Dienstleister mit Sitz in den USA ein; personenbezogene Inhalte werden vorher entfernt, Grundlage sind die EU-Standardvertragsklauseln.",
        "Bestelldaten der Käufer unserer Händler verarbeiten wir nur im Auftrag des jeweiligen Händlers (Art. 28 DSGVO); verantwortlich ist der Händler. Namen und Adressen werden 30 Tage nach dem Kauf automatisch unkenntlich gemacht.",
      ],
    },
    {
      title: "Ihre Rechte",
      body: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Schreiben Sie dazu an info@novadash.eu. Beschwerden können Sie an die österreichische Datenschutzbehörde richten (Barichgasse 40–42, 1030 Wien, dsb@dsb.gv.at).",
      ],
    },
  ],
};

const privacyEn: LegalDoc = {
  updated: "4 October 2026",
  sections: [
    {
      title: "Controller",
      body: [
        "The controller is the operator of NovaDash named in the {imprint}. Please send data protection requests to info@novadash.eu.",
      ],
    },
    {
      title: "Visiting this website",
      body: [
        "The website runs on servers in Germany. For technical reasons the server logs IP address, time, requested page, referring page and browser identifier. This serves security and stable operation (legitimate interest, Art. 6(1)(f) GDPR). These logs are deleted after 14 days.",
        "There are no cookies, no tracking and no advertising services. Your language choice is stored only locally in your browser. Fonts are loaded from our own server.",
        "The “Status” page shows the availability display of an external monitoring service. Only when you open that page is your IP address transmitted to this service.",
      ],
    },
    {
      title: "Contact by email",
      body: [
        "If you write to us, we use your details only to handle your request (Art. 6(1)(b) or (f) GDPR) and delete them when no longer needed and no retention obligation applies.",
      ],
    },
    {
      title: "Using the platform",
      body: [
        "To provide NovaDash we process your account data (e.g. email address, sign-in data and marketplace connections) to perform the contract (Art. 6(1)(b) GDPR). The platform uses only technically necessary sign-in cookies (no more than 7 days). Account data is deleted after the contract ends unless statutory retention obligations apply.",
        "For error detection we use a service provider based in the USA; personal content is removed beforehand, and the EU Standard Contractual Clauses apply.",
        "Order data of our merchants’ buyers is processed only on behalf of the respective merchant (Art. 28 GDPR), who is the controller. Names and addresses are automatically made unidentifiable 30 days after purchase.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "You have the right of access, rectification, erasure, restriction, data portability and objection. Write to info@novadash.eu. You may lodge a complaint with the Austrian Data Protection Authority (Barichgasse 40–42, 1030 Vienna, dsb@dsb.gv.at).",
      ],
    },
  ],
};

const termsDe: LegalDoc = {
  updated: "4. Oktober 2026",
  sections: [
    {
      title: "Geltungsbereich",
      body: [
        "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Nutzung der Software-Plattform NovaDash zwischen dem im {imprint} genannten Betreiber (nachfolgend „Anbieter“) und seinen Kunden.",
        "NovaDash richtet sich ausschließlich an Unternehmer im Sinne des § 1 KSchG. Verträge mit Verbrauchern werden nicht geschlossen.",
        "Abweichende Bedingungen des Kunden gelten nur, wenn der Anbieter ihnen ausdrücklich schriftlich zustimmt.",
      ],
    },
    {
      title: "Vertragsschluss",
      body: [
        "Die Darstellung auf der Website ist kein bindendes Angebot. Der Vertrag kommt zustande, wenn der Anbieter einen Antrag des Kunden (z. B. eine Registrierung oder Early-Access-Anfrage) annimmt und den Zugang zur Plattform freischaltet.",
      ],
    },
    {
      title: "Leistungen",
      body: [
        "Der Anbieter stellt dem Kunden NovaDash als webbasierte Software (Software as a Service) über das Internet zur Verfügung. Der Leistungsumfang ergibt sich aus dem vereinbarten Tarif bzw. der individuellen Vereinbarung.",
        "NovaDash verbindet sich mit Diensten Dritter (insbesondere Marktplätzen und Versanddienstleistern). Deren Verfügbarkeit, Schnittstellen und Bedingungen liegen außerhalb des Einflusses des Anbieters. Ändert ein Drittanbieter seine Schnittstelle, passt der Anbieter die Anbindung in angemessener Frist an; ein Anspruch auf eine bestimmte Integration besteht nicht.",
        "Der Anbieter entwickelt NovaDash laufend weiter und darf Funktionen ändern, sofern der vertragliche Kernnutzen erhalten bleibt. In der Pilot- und Early-Access-Phase können Funktionen eingeschränkt oder vorläufig sein.",
      ],
    },
    {
      title: "Verfügbarkeit",
      body: [
        "Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit. Vorübergehende Unterbrechungen durch Wartung, Sicherheitsmaßnahmen oder Störungen außerhalb seines Einflussbereichs sind möglich. Planbare Wartungen werden nach Möglichkeit außerhalb der üblichen Geschäftszeiten durchgeführt. Eine bestimmte Verfügbarkeit gilt nur, wenn sie ausdrücklich vereinbart ist.",
      ],
    },
    {
      title: "Pflichten des Kunden",
      body: [
        [
          "Zugangsdaten geheim halten und den Anbieter bei Verdacht auf Missbrauch unverzüglich informieren.",
          "Die Plattform nur im Rahmen der geltenden Gesetze und der Bedingungen der verbundenen Marktplätze und Versanddienste nutzen.",
          "Sicherstellen, dass er zur Verarbeitung der übermittelten Daten berechtigt ist.",
          "Versandlabels, Zolldokumente und übermittelte Daten vor der Verwendung auf Richtigkeit prüfen.",
        ],
      ],
    },
    {
      title: "Nutzungsrechte",
      body: [
        "Der Kunde erhält für die Vertragslaufzeit ein nicht ausschließliches, nicht übertragbares Recht, NovaDash für eigene geschäftliche Zwecke zu nutzen. Die Daten des Kunden bleiben sein Eigentum; er kann sie während der Laufzeit exportieren.",
      ],
    },
    {
      title: "Preise und Zahlung",
      body: [
        "Es gelten die bei Vertragsschluss vereinbarten Preise. Alle Preise verstehen sich netto zuzüglich der gesetzlichen Umsatzsteuer; bei Kunden in anderen EU-Mitgliedstaaten mit gültiger UID-Nummer geht die Steuerschuld auf den Kunden über (Reverse Charge).",
        "Die Abrechnung erfolgt monatlich im Voraus. Rechnungen sind innerhalb von 14 Tagen ohne Abzug fällig. Bei Zahlungsverzug von mehr als 30 Tagen darf der Anbieter den Zugang nach vorheriger Ankündigung sperren.",
      ],
    },
    {
      title: "Laufzeit und Kündigung",
      body: [
        "Sofern nichts anderes vereinbart ist, läuft der Vertrag auf unbestimmte Zeit und kann von beiden Seiten zum Ende jedes Kalendermonats gekündigt werden. Die Kündigung per E-Mail genügt. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
        "Nach Vertragsende werden die Daten des Kunden gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten bestehen. Der Kunde ist dafür verantwortlich, benötigte Daten vorher zu exportieren.",
      ],
    },
    {
      title: "Datenschutz",
      body: [
        "Soweit der Anbieter personenbezogene Daten im Auftrag des Kunden verarbeitet, geschieht dies auf Grundlage eines Vertrags über die Auftragsverarbeitung nach Art. 28 DSGVO, der Bestandteil dieses Vertrags ist. Die eingesetzten Unterauftragsverarbeiter werden darin aufgeführt. Im Übrigen gilt die Datenschutzerklärung.",
      ],
    },
    {
      title: "Haftung",
      body: [
        "Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Personenschäden. Für leichte Fahrlässigkeit ist die Haftung ausgeschlossen.",
        "Die Haftung ist der Höhe nach auf die vom Kunden in den letzten 12 Monaten vor dem Schadensereignis gezahlten Entgelte begrenzt. Die Haftung für entgangenen Gewinn, Folgeschäden und reine Vermögensschäden ist ausgeschlossen, soweit gesetzlich zulässig.",
        "Der Anbieter haftet nicht für Ausfälle, Fehler oder Änderungen von Diensten Dritter (insbesondere Marktplätze und Versanddienstleister) und nicht für Schäden aus fehlerhaften Daten, die der Kunde oder ein Drittanbieter übermittelt hat.",
      ],
    },
    {
      title: "Änderungen dieser AGB",
      body: [
        "Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern. Er teilt Änderungen mindestens vier Wochen vor ihrem Inkrafttreten per E-Mail mit. Widerspricht der Kunde nicht innerhalb dieser Frist, gelten die Änderungen als angenommen; auf diese Folge wird in der Mitteilung hingewiesen. Im Fall eines Widerspruchs kann jede Seite den Vertrag zum Inkrafttreten der Änderung kündigen.",
      ],
    },
    {
      title: "Schlussbestimmungen",
      body: [
        "Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts und der Verweisungsnormen des internationalen Privatrechts. Gerichtsstand ist das für Salzburg sachlich zuständige Gericht.",
        "Erklärungen in Textform (z. B. E-Mail) genügen, sofern nicht ausdrücklich anders bestimmt. Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
      ],
    },
  ],
};

const termsEn: LegalDoc = {
  updated: "4 October 2026",
  intro: "This English version is provided for convenience. In case of any discrepancy, the German version prevails.",
  sections: [
    {
      title: "Scope",
      body: [
        "These General Terms and Conditions apply to all contracts for the use of the NovaDash software platform between the operator named in the {imprint} (the “Provider”) and its customers.",
        "NovaDash is offered exclusively to businesses within the meaning of § 1 of the Austrian Consumer Protection Act (KSchG). No contracts are concluded with consumers.",
        "Deviating terms of the customer apply only if the Provider expressly agrees to them in writing.",
      ],
    },
    {
      title: "Conclusion of contract",
      body: [
        "The presentation on the website is not a binding offer. The contract is concluded when the Provider accepts a customer request (e.g. a registration or early-access request) and activates access to the platform.",
      ],
    },
    {
      title: "Services",
      body: [
        "The Provider makes NovaDash available to the customer as web-based software (software as a service) over the internet. The scope of services follows from the agreed plan or individual agreement.",
        "NovaDash connects to third-party services (in particular marketplaces and shipping providers). Their availability, interfaces and terms are outside the Provider’s control. If a third party changes its interface, the Provider adapts the connection within a reasonable period; there is no entitlement to any particular integration.",
        "The Provider continuously develops NovaDash and may change features as long as the core contractual benefit is preserved. During the pilot and early-access phase, features may be limited or preliminary.",
      ],
    },
    {
      title: "Availability",
      body: [
        "The Provider strives for the highest possible availability. Temporary interruptions due to maintenance, security measures or disruptions beyond its control may occur. Planned maintenance is carried out outside normal business hours where possible. A specific availability applies only if expressly agreed.",
      ],
    },
    {
      title: "Customer obligations",
      body: [
        [
          "Keep access credentials confidential and inform the Provider immediately of any suspected misuse.",
          "Use the platform only in accordance with applicable law and the terms of the connected marketplaces and shipping services.",
          "Ensure it is entitled to process the data it submits.",
          "Check shipping labels, customs documents and transmitted data for accuracy before use.",
        ],
      ],
    },
    {
      title: "Rights of use",
      body: [
        "For the term of the contract, the customer receives a non-exclusive, non-transferable right to use NovaDash for its own business purposes. The customer’s data remains its property; it can export it during the term.",
      ],
    },
    {
      title: "Prices and payment",
      body: [
        "The prices agreed at the conclusion of the contract apply. All prices are net plus statutory VAT; for customers in other EU member states with a valid VAT ID, the reverse-charge mechanism applies.",
        "Billing is monthly in advance. Invoices are due within 14 days without deduction. If payment is more than 30 days overdue, the Provider may suspend access after prior notice.",
      ],
    },
    {
      title: "Term and termination",
      body: [
        "Unless otherwise agreed, the contract runs for an indefinite period and may be terminated by either party at the end of any calendar month. Termination by email is sufficient. The right to terminate for good cause remains unaffected.",
        "After the contract ends, the customer’s data is deleted unless statutory retention obligations apply. The customer is responsible for exporting any data it needs beforehand.",
      ],
    },
    {
      title: "Data protection",
      body: [
        "Where the Provider processes personal data on behalf of the customer, it does so under a data processing agreement pursuant to Art. 28 GDPR, which forms part of this contract. The sub-processors used are listed therein. The privacy policy applies otherwise.",
      ],
    },
    {
      title: "Liability",
      body: [
        "The Provider is liable without limitation for intent and gross negligence and for personal injury. Liability for slight negligence is excluded.",
        "Liability is limited in amount to the fees paid by the customer in the 12 months preceding the event causing the damage. Liability for lost profits, consequential damages and pure economic loss is excluded to the extent permitted by law.",
        "The Provider is not liable for outages, errors or changes of third-party services (in particular marketplaces and shipping providers), nor for damage resulting from incorrect data supplied by the customer or a third party.",
      ],
    },
    {
      title: "Changes to these terms",
      body: [
        "The Provider may amend these terms with effect for the future. It will announce changes by email at least four weeks before they take effect. If the customer does not object within this period, the changes are deemed accepted; the notice will point out this consequence. In case of objection, either party may terminate the contract as of the date the change takes effect.",
      ],
    },
    {
      title: "Final provisions",
      body: [
        "Austrian law applies, excluding the UN Convention on Contracts for the International Sale of Goods and the conflict-of-law rules. Place of jurisdiction is the competent court for Salzburg.",
        "Declarations in text form (e.g. email) are sufficient unless expressly stated otherwise. Should any provision be invalid, the validity of the remaining provisions remains unaffected.",
      ],
    },
  ],
};

export const legalContent = {
  de: { privacy: privacyDe, terms: termsDe, imprintLabel: "Impressum" },
  en: { privacy: privacyEn, terms: termsEn, imprintLabel: "imprint" },
};
