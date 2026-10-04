// Legal documents (privacy policy, terms). A body item is either a paragraph
// (string) or a bullet list (string[]). "{imprint}" renders as a link to /impressum.

export type LegalSection = { title: string; body: (string | string[])[] };
export type LegalDoc = { updated: string; intro?: string; sections: LegalSection[] };

const privacyDe: LegalDoc = {
  updated: "4. Oktober 2026",
  intro:
    "Mit dieser Erklärung informieren wir Sie, welche personenbezogenen Daten wir beim Besuch dieser Website und bei der Nutzung der Plattform NovaDash verarbeiten, wofür und auf welcher Rechtsgrundlage, und welche Rechte Sie haben.",
  sections: [
    {
      title: "Verantwortlicher",
      body: [
        "Verantwortlich für die Datenverarbeitung ist der im {imprint} genannte Betreiber von NovaDash. Für alle Datenschutzanliegen erreichen Sie uns unter info@novadash.eu.",
        "Ein Datenschutzbeauftragter ist nicht bestellt, da hierfür keine gesetzliche Pflicht besteht.",
      ],
    },
    {
      title: "Hosting und Server-Protokolle",
      body: [
        "Website und Plattform werden auf eigenen Servern bei der Hetzner Online GmbH, Industriestraße 25, 91710 Gunzenhausen, Deutschland, betrieben. Die Server stehen in Deutschland. Mit Hetzner besteht ein Vertrag über die Auftragsverarbeitung.",
        "Bei jedem Aufruf speichert der Webserver automatisch folgende Angaben in Protokolldateien:",
        ["IP-Adresse", "Datum und Uhrzeit des Aufrufs", "aufgerufene Adresse und übertragene Datenmenge", "zuvor besuchte Seite (Referrer)", "Browser und Betriebssystem (User-Agent)", "Statuscode der Antwort"],
        "Zweck ist der sichere und stabile Betrieb, insbesondere die Abwehr und Aufklärung von Angriffen. Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Die Protokolle werden nach 14 Tagen automatisch gelöscht.",
      ],
    },
    {
      title: "Keine Cookies, kein Tracking auf dieser Website",
      body: [
        "Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking- oder Werbedienste.",
        "Ihre Sprachauswahl (Deutsch/Englisch) wird ausschließlich lokal in Ihrem Browser gespeichert und nicht an uns übertragen. Diese Speicherung ist für die von Ihnen gewünschte Funktion technisch erforderlich (§ 165 Abs. 3 TKG 2021). Sie können sie jederzeit über die Einstellungen Ihres Browsers löschen.",
        "Alle Schriftarten werden von unserem eigenen Server ausgeliefert. Beim Aufruf der Website entsteht keine Verbindung zu Google oder anderen Schriftanbietern.",
      ],
    },
    {
      title: "Statusseite",
      body: [
        "Auf der Seite „Status“ binden wir die Verfügbarkeitsanzeige unseres Überwachungsdienstes Better Stack ein. Erst wenn Sie diese Seite öffnen, lädt Ihr Browser die Anzeige direkt von Better Stack; dabei wird Ihre IP-Adresse an Better Stack übermittelt. Rechtsgrundlage ist unser berechtigtes Interesse an einer transparenten Information über die Verfügbarkeit (Art. 6 Abs. 1 lit. f DSGVO). Soweit Better Stack Daten außerhalb der EU verarbeitet, erfolgt dies auf Grundlage der EU-Standardvertragsklauseln.",
      ],
    },
    {
      title: "Kontakt per E-Mail",
      body: [
        "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben (insbesondere Name, E-Mail-Adresse und Inhalt der Nachricht), um Ihre Anfrage zu beantworten. Rechtsgrundlage ist die Anbahnung oder Erfüllung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO) bzw. unser berechtigtes Interesse an der Beantwortung (Art. 6 Abs. 1 lit. f DSGVO). Wir löschen die Korrespondenz, sobald sie nicht mehr erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
      ],
    },
    {
      title: "Nutzung der Plattform (Kundenkonto)",
      body: [
        "Für die Nutzung von NovaDash unter app.novadash.eu verarbeiten wir die Daten Ihres Kontos und Ihres Unternehmens:",
        ["E-Mail-Adresse und Kontaktangaben", "Passwort (ausschließlich als nicht umkehrbarer Hash gespeichert)", "Daten zur Zwei-Faktor-Anmeldung, sofern aktiviert", "Zugangsdaten zu verbundenen Marktplätzen und Versanddiensten (verschlüsselt gespeichert)", "technische Nutzungs- und Protokolldaten"],
        "Rechtsgrundlage ist die Erfüllung des Nutzungsvertrags (Art. 6 Abs. 1 lit. b DSGVO). Die Plattform verwendet nur technisch notwendige Cookies für die Anmeldung und den Schutz vor gefälschten Anfragen; sie gelten höchstens 7 Tage. Kontodaten speichern wir für die Dauer des Vertrags und löschen sie danach, soweit keine gesetzlichen Aufbewahrungspflichten (z. B. 7 Jahre für steuerrelevante Unterlagen nach § 132 BAO) entgegenstehen.",
        "Zur Fehlererkennung und Verfügbarkeitsüberwachung nutzen wir Sentry (Functional Software, Inc., USA) und Better Stack. Personenbezogene Inhalte werden vor der Übermittlung automatisch entfernt. Für Übermittlungen in die USA bestehen die EU-Standardvertragsklauseln.",
      ],
    },
    {
      title: "Daten der Endkunden unserer Händler",
      body: [
        "Bestell- und Versanddaten, die Händler über NovaDash verarbeiten (z. B. Name und Lieferadresse ihrer Käufer), verarbeiten wir ausschließlich im Auftrag und nach Weisung des jeweiligen Händlers (Art. 28 DSGVO). Verantwortlich ist der Händler; Anfragen von Käufern leiten wir an ihn weiter.",
        "Namen, Adressen, E-Mail-Adressen und Telefonnummern werden verschlüsselt gespeichert und 30 Tage nach dem Kaufdatum automatisch unkenntlich gemacht. Nur steuerlich erforderliche Angaben ohne Personenbezug bleiben für die gesetzliche Frist erhalten. Datensicherungen werden nach 90 Tagen überschrieben.",
        "Die Dienstleister, die wir dafür einsetzen, sind in unserer Sub-Processor-Liste aufgeführt.",
      ],
    },
    {
      title: "Empfänger und Übermittlung in Drittländer",
      body: [
        "Wir geben personenbezogene Daten nur weiter, soweit dies für die genannten Zwecke erforderlich ist: an unseren Hosting-Anbieter, an die oben genannten Überwachungsdienste sowie – bei Nutzung der Plattform – an die Versand- und Fulfillment-Dienstleister, die ein Händler selbst verbindet. Eine Übermittlung in Länder außerhalb der EU erfolgt nur auf Grundlage der EU-Standardvertragsklauseln oder eines Angemessenheitsbeschlusses. Wir verkaufen keine Daten.",
      ],
    },
    {
      title: "Ihre Rechte",
      body: [
        "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Schreiben Sie dazu an info@novadash.eu.",
        "Sie haben außerdem das Recht, sich bei der Aufsichtsbehörde zu beschweren. In Österreich ist dies die Datenschutzbehörde, Barichgasse 40–42, 1030 Wien, dsb@dsb.gv.at.",
        "Eine automatisierte Entscheidungsfindung einschließlich Profiling findet nicht statt.",
      ],
    },
    {
      title: "Änderungen",
      body: [
        "Wir passen diese Erklärung an, wenn sich unsere Datenverarbeitung oder die Rechtslage ändert. Es gilt die jeweils hier veröffentlichte Fassung; registrierte Kunden informieren wir über wesentliche Änderungen.",
      ],
    },
  ],
};

const privacyEn: LegalDoc = {
  updated: "4 October 2026",
  intro:
    "This policy explains which personal data we process when you visit this website and use the NovaDash platform, for what purposes and on what legal basis, and which rights you have.",
  sections: [
    {
      title: "Controller",
      body: [
        "The controller is the operator of NovaDash named in the {imprint}. For any data protection matter, contact us at info@novadash.eu.",
        "No data protection officer has been appointed, as there is no legal obligation to do so.",
      ],
    },
    {
      title: "Hosting and server logs",
      body: [
        "The website and platform run on our own servers at Hetzner Online GmbH, Industriestraße 25, 91710 Gunzenhausen, Germany. The servers are located in Germany. A data processing agreement is in place with Hetzner.",
        "With every request, the web server automatically stores the following in log files:",
        ["IP address", "date and time of the request", "requested address and amount of data transferred", "referring page", "browser and operating system (user agent)", "response status code"],
        "The purpose is secure and stable operation, in particular preventing and investigating attacks. The legal basis is our legitimate interest (Art. 6(1)(f) GDPR). Logs are deleted automatically after 14 days.",
      ],
    },
    {
      title: "No cookies, no tracking on this website",
      body: [
        "This website sets no cookies and uses no analytics, tracking or advertising services.",
        "Your language choice (German/English) is stored only locally in your browser and is not sent to us. This storage is technically required for the function you request (§ 165(3) Austrian Telecommunications Act 2021). You can delete it at any time in your browser settings.",
        "All fonts are served from our own server. Visiting the website creates no connection to Google or other font providers.",
      ],
    },
    {
      title: "Status page",
      body: [
        "On the “Status” page we embed the availability display of our monitoring service Better Stack. Only when you open this page does your browser load the display directly from Better Stack, which transmits your IP address to Better Stack. The legal basis is our legitimate interest in transparent information about availability (Art. 6(1)(f) GDPR). Where Better Stack processes data outside the EU, this is based on the EU Standard Contractual Clauses.",
      ],
    },
    {
      title: "Contact by email",
      body: [
        "If you contact us by email, we process your details (in particular name, email address and message content) to answer your request. The legal basis is the initiation or performance of a contract (Art. 6(1)(b) GDPR) or our legitimate interest in responding (Art. 6(1)(f) GDPR). We delete the correspondence once it is no longer needed, unless statutory retention obligations apply.",
      ],
    },
    {
      title: "Use of the platform (customer account)",
      body: [
        "To provide NovaDash at app.novadash.eu we process the data of your account and your business:",
        ["email address and contact details", "password (stored only as a non-reversible hash)", "two-factor sign-in data, if enabled", "credentials for connected marketplaces and shipping services (stored encrypted)", "technical usage and log data"],
        "The legal basis is performance of the user agreement (Art. 6(1)(b) GDPR). The platform uses only technically necessary cookies for sign-in and protection against forged requests; they are valid for no more than 7 days. We keep account data for the duration of the contract and delete it afterwards unless statutory retention obligations apply (e.g. 7 years for tax-relevant records under § 132 Austrian Federal Fiscal Code).",
        "For error detection and availability monitoring we use Sentry (Functional Software, Inc., USA) and Better Stack. Personal content is removed automatically before transmission. Transfers to the USA are covered by the EU Standard Contractual Clauses.",
      ],
    },
    {
      title: "Data of our merchants’ end customers",
      body: [
        "Order and shipping data that merchants process through NovaDash (e.g. their buyers’ names and delivery addresses) is processed solely on behalf of and as instructed by the respective merchant (Art. 28 GDPR). The merchant is the controller; we forward buyer requests to them.",
        "Names, addresses, email addresses and phone numbers are stored encrypted and automatically made unidentifiable 30 days after the purchase date. Only tax-relevant information without personal reference is kept for the statutory period. Backups are overwritten after 90 days.",
        "The service providers we use for this are listed in our sub-processor list.",
      ],
    },
    {
      title: "Recipients and transfers to third countries",
      body: [
        "We share personal data only where necessary for the purposes above: with our hosting provider, the monitoring services named above and – when the platform is used – the shipping and fulfilment providers a merchant connects. Transfers outside the EU take place only on the basis of the EU Standard Contractual Clauses or an adequacy decision. We do not sell data.",
      ],
    },
    {
      title: "Your rights",
      body: [
        "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object to processing based on legitimate interests (Art. 21). You can withdraw any consent at any time with effect for the future. Write to info@novadash.eu.",
        "You also have the right to lodge a complaint with a supervisory authority. In Austria this is the Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna, dsb@dsb.gv.at.",
        "No automated decision-making, including profiling, takes place.",
      ],
    },
    {
      title: "Changes",
      body: [
        "We update this policy when our processing or the law changes. The version published here applies; we inform registered customers about material changes.",
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
        "Soweit der Anbieter personenbezogene Daten im Auftrag des Kunden verarbeitet, geschieht dies auf Grundlage eines Vertrags über die Auftragsverarbeitung nach Art. 28 DSGVO, der Bestandteil dieses Vertrags ist. Die eingesetzten Unterauftragsverarbeiter sind in der Sub-Processor-Liste aufgeführt. Im Übrigen gilt die Datenschutzerklärung.",
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
        "Where the Provider processes personal data on behalf of the customer, it does so under a data processing agreement pursuant to Art. 28 GDPR, which forms part of this contract. The sub-processors used are listed in the sub-processor list. The privacy policy applies otherwise.",
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
