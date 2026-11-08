// Legal documents (privacy policy, terms). A body item is either a paragraph
// (string) or a bullet list (string[]). "{imprint}" renders as a link to /impressum.

export type LegalSection = { title: string; body: (string | string[])[] };
export type LegalDoc = { updated: string; intro?: string; sections: LegalSection[] };

const privacyDe: LegalDoc = {
  updated: "8. November 2026",
  sections: [
    {
      title: "Verantwortlicher",
      body: ["Der im {imprint} genannte Betreiber, erreichbar unter info@novadash.eu."],
    },
    {
      title: "Besuch dieser Website",
      body: [
        "Beim Aufruf verarbeitet der Server IP-Adresse, Zeitpunkt, aufgerufene Seite, verweisende Seite und Browser-Kennung, um die Website sicher und stabil bereitzustellen (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Empfänger ist unser Hosting-Dienstleister mit Servern in der EU. Speicherdauer: 14 Tage.",
        "Beim Öffnen der Seite „Status“ wird Ihre IP-Adresse an den Anbieter der dort eingebundenen Verfügbarkeitsanzeige übermittelt (Art. 6 Abs. 1 lit. f DSGVO).",
        "Ohne diese Daten kann die Website nicht angezeigt werden.",
      ],
    },
    {
      title: "Kontakt per E-Mail",
      body: [
        "Ihre Angaben verwenden wir zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. f DSGVO) und löschen sie, sobald sie dafür nicht mehr benötigt werden und keine gesetzliche Aufbewahrungspflicht besteht.",
      ],
    },
    {
      title: "Nutzung der Plattform",
      body: [
        "Für die Nutzung von NovaDash verarbeiten wir Ihre Kontodaten (z. B. E-Mail-Adresse, Anmeldedaten, Verbindungen zu Marktplätzen) zur Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO). Ohne diese Daten ist die Nutzung nicht möglich. Empfänger sind unser Hosting-Dienstleister mit Servern in der EU sowie ein Dienstleister zur Fehlererkennung in den USA; die Übermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln. Die Daten werden nach Vertragsende gelöscht, soweit keine gesetzliche Aufbewahrungspflicht besteht.",
        "Für ein kostenpflichtiges Abo wickelt ein Zahlungsdienstleister mit Sitz in Irland und den USA Bezahlung, Rechnung und Umsatzsteuer ab (Art. 6 Abs. 1 lit. b DSGVO). Er erhält von uns die Kennung Ihres Kontos und eine E-Mail-Adresse; Name, Anschrift und Zahlungsdaten geben Sie direkt bei ihm ein, wir erhalten sie nicht. Für Betrugsabwehr, eigene gesetzliche Pflichten und die Abwicklung als Händler des Bezahlvorgangs ist er selbst verantwortlich. Die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework und der EU-Standardvertragsklauseln.",
      ],
    },
    {
      title: "Ihre Rechte",
      body: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (info@novadash.eu) sowie das Recht auf Beschwerde bei der Datenschutzbehörde, Barichgasse 40–42, 1030 Wien.",
      ],
    },
  ],
};

const privacyEn: LegalDoc = {
  updated: "8 November 2026",
  sections: [
    {
      title: "Controller",
      body: ["The operator named in the {imprint}, reachable at info@novadash.eu."],
    },
    {
      title: "Visiting this website",
      body: [
        "When you visit, the server processes IP address, time, requested page, referring page and browser identifier to provide the website securely and reliably (legitimate interest, Art. 6(1)(f) GDPR). The recipient is our hosting provider with servers in the EU. Retention: 14 days.",
        "When you open the “Status” page, your IP address is transmitted to the provider of the embedded availability display (Art. 6(1)(f) GDPR).",
        "Without this data the website cannot be displayed.",
      ],
    },
    {
      title: "Contact by email",
      body: [
        "We use your details to handle your request (Art. 6(1)(b) or (f) GDPR) and delete them once no longer needed for that purpose and no statutory retention obligation applies.",
      ],
    },
    {
      title: "Using the platform",
      body: [
        "To provide NovaDash we process your account data (e.g. email address, sign-in data, marketplace connections) to perform the contract (Art. 6(1)(b) GDPR). Without this data the platform cannot be used. Recipients are our hosting provider with servers in the EU and an error-monitoring provider in the USA; transfers to the USA are based on the EU Standard Contractual Clauses. The data is deleted after the contract ends unless a statutory retention obligation applies.",
        "For a paid subscription, a payment service provider based in Ireland and the USA handles payment, invoicing and VAT (Art. 6(1)(b) GDPR). We give it your account identifier and an email address; you enter your name, address and payment details directly with the provider, and we do not receive them. The provider is itself responsible for fraud prevention, its own legal obligations and handling the transaction as merchant of record. Transfers to the USA are based on the EU-U.S. Data Privacy Framework and the EU Standard Contractual Clauses.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "You have the right of access, rectification, erasure, restriction of processing, data portability and objection (info@novadash.eu), and the right to lodge a complaint with the Austrian Data Protection Authority, Barichgasse 40–42, 1030 Vienna.",
      ],
    },
  ],
};

const termsDe: LegalDoc = {
  updated: "8. November 2026",
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
        "Ein kostenpflichtiges Abo kommt zustande, wenn der Kunde es in NovaDash unter Einstellungen → Abrechnung auswählt und den Bezahlvorgang auf der Bezahlseite von Stripe abschließt. Die dabei angezeigten Abo-Bedingungen (Preis, Abrechnungszeitraum, Testzeitraum, Erweiterungen) sind Teil des Vertrags.",
      ],
    },
    {
      title: "Leistungen",
      body: [
        "Der Anbieter stellt dem Kunden NovaDash als webbasierte Software (Software as a Service) über das Internet zur Verfügung. Der Leistungsumfang ergibt sich aus dem gebuchten Abo (Grundpaket und gebuchte Erweiterungen wie das Retourenportal) bzw. der individuellen Vereinbarung.",
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
        "Es gelten die Preise, die in NovaDash vor dem Abschluss angezeigt werden. Sie enthalten die gesetzliche Umsatzsteuer. Bei Unternehmen mit gültiger UID-Nummer kann die Steuerschuld auf den Kunden übergehen (Reverse Charge); der Betrag bleibt dann gleich und enthält keine Umsatzsteuer.",
        "Bezahlt wird über Stripe Managed Payments. Bezahlvorgang, Rechnung und Umsatzsteuer übernimmt Link (Sold through Link, LLC), ein Unternehmen der Stripe-Gruppe; die Rechnung stellt Link im eigenen Namen aus. Für den Bezahlvorgang gelten ergänzend die Bedingungen von Link für Käufe „Verkauft über Link“ (link.com/terms).",
        "Abgebucht wird im Voraus für den gewählten Abrechnungszeitraum (Monat oder Jahr) vom Zahlungsmittel, das der Kunde auf der Bezahlseite hinterlegt, erstmals bei Abschluss bzw. am Ende des Testzeitraums. Wird eine Erweiterung während eines laufenden Zeitraums dazugebucht, wird sie für den Rest dieses Zeitraums anteilig sofort berechnet.",
        "Neue Kunden können NovaDash einmalig 14 Tage kostenlos testen. Das Zahlungsmittel wird beim Start hinterlegt. Wird das Abo nicht vor Ende des Testzeitraums gekündigt, geht es automatisch in das gewählte kostenpflichtige Abo über; die erste Abbuchung erfolgt am Ende des Testzeitraums.",
        "Schlägt eine Abbuchung fehl, wird sie während rund zwei Wochen erneut versucht, und der Kunde wird in NovaDash darauf hingewiesen. Gelingt sie nicht, endet das Abo und das Konto wechselt in den Lesemodus: Daten ansehen und exportieren bleibt möglich, Abgleiche, Etiketten und automatische Abläufe ruhen, bis wieder ein Abo besteht.",
        "Bezahlte Zeiträume werden bei Kündigung oder Abbestellung nicht anteilig erstattet. Unberührt bleiben die Erstattungsrichtlinie von Link (support.link.com/questions/sold-through-link-refunds) und gesetzliche Ansprüche.",
      ],
    },
    {
      title: "Laufzeit und Kündigung",
      body: [
        "Ein Abo läuft für den gewählten Abrechnungszeitraum (Monat oder Jahr) und verlängert sich automatisch um denselben Zeitraum zum selben Preis, wenn es nicht vor dessen Ende gekündigt wird.",
        "Der Kunde kann jederzeit zum Ende des laufenden Zeitraums kündigen: in NovaDash unter Einstellungen → Abrechnung → „Abo verwalten“, über sein Link-Konto oder per E-Mail an info@novadash.eu. Bis zum Ende des bezahlten Zeitraums bleibt der gebuchte Umfang freigeschaltet. Erweiterungen wie das Retourenportal kann der Kunde in NovaDash einzeln abbestellen; sie laufen bis zum Ende des bezahlten Zeitraums weiter.",
        "Der Anbieter kann ein Abo mit einer Frist von vier Wochen zum Ende eines Abrechnungszeitraums kündigen. Das Recht beider Seiten zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.",
        "Endet das Abo, bleibt das Konto im Lesemodus bestehen. Das Konto insgesamt kann der Kunde jederzeit per E-Mail auflösen; danach werden seine Daten gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten bestehen. Der Kunde ist dafür verantwortlich, benötigte Daten vorher zu exportieren.",
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
        "Der Anbieter kann diese AGB mit Wirkung für die Zukunft ändern. Er teilt Änderungen mindestens vier Wochen vor ihrem Inkrafttreten per E-Mail mit. Widerspricht der Kunde nicht innerhalb dieser Frist, gelten die Änderungen als angenommen; auf diese Folge wird in der Mitteilung hingewiesen. Im Fall eines Widerspruchs kann jede Seite den Vertrag zum Inkrafttreten der Änderung kündigen. Das gilt auch für Preisänderungen laufender Abos; sie wirken ab dem ersten Abrechnungszeitraum nach Inkrafttreten.",
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
  updated: "8 November 2026",
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
        "A paid subscription is concluded when the customer selects it in NovaDash under Settings → Billing and completes the payment on Stripe’s checkout page. The subscription terms shown in the process (price, billing period, trial, add-ons) form part of the contract.",
      ],
    },
    {
      title: "Services",
      body: [
        "The Provider makes NovaDash available to the customer as web-based software (software as a service) over the internet. The scope of services follows from the subscription booked (base plan and add-ons such as the returns portal) or the individual agreement.",
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
        "The prices shown in NovaDash before the purchase apply. They include statutory VAT. For businesses with a valid VAT ID, the reverse-charge mechanism may apply; the amount then stays the same and contains no VAT.",
        "Payment is processed through Stripe Managed Payments. Link (Sold through Link, LLC), a Stripe group company, handles the payment, the invoice and VAT and issues the invoice in its own name. Link’s terms for purchases “Sold through Link” (link.com/terms) additionally apply to the payment process.",
        "Fees are charged in advance for the chosen billing period (month or year) to the payment method the customer provides on the checkout page, first at purchase or at the end of the trial. An add-on booked during a running period is charged immediately and pro rata for the rest of that period.",
        "New customers can test NovaDash free of charge once for 14 days. The payment method is provided at the start. Unless the subscription is cancelled before the trial ends, it automatically converts into the chosen paid subscription; the first charge takes place at the end of the trial.",
        "If a charge fails, it is retried over about two weeks and the customer is notified in NovaDash. If it does not succeed, the subscription ends and the account switches to read-only mode: viewing and exporting data remain possible, while syncs, labels and automated processes pause until a subscription exists again.",
        "Paid periods are not refunded pro rata on cancellation or removal of an add-on. Link’s refund policy (support.link.com/questions/sold-through-link-refunds) and statutory claims remain unaffected.",
      ],
    },
    {
      title: "Term and termination",
      body: [
        "A subscription runs for the chosen billing period (month or year) and renews automatically for the same period at the same price unless cancelled before the period ends.",
        "The customer may cancel at any time with effect from the end of the current period: in NovaDash under Settings → Billing → “Manage subscription”, via its Link account or by email to info@novadash.eu. The booked scope stays available until the end of the paid period. Add-ons such as the returns portal can be removed individually in NovaDash and remain active until the end of the paid period.",
        "The Provider may cancel a subscription with four weeks’ notice to the end of a billing period. The right of both parties to terminate for good cause remains unaffected.",
        "When the subscription ends, the account remains in read-only mode. The customer may close the account as a whole at any time by email; its data is then deleted unless statutory retention obligations apply. The customer is responsible for exporting any data it needs beforehand.",
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
        "The Provider may amend these terms with effect for the future. It will announce changes by email at least four weeks before they take effect. If the customer does not object within this period, the changes are deemed accepted; the notice will point out this consequence. In case of objection, either party may terminate the contract as of the date the change takes effect. This also applies to price changes for running subscriptions; they take effect from the first billing period after the change comes into force.",
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
