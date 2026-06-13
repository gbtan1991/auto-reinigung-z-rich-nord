import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import { contact } from "@/data/siteContent";

export default function Datenschutz() {
  return (
    <>
      <SEO
        title="Datenschutzerklärung | Autoreinigung Zürich-Nord"
        description="Datenschutzerklärung nach Schweizer revDSG für Autoreinigung Zürich-Nord. Transparente Informationen zu Datenverarbeitung, Cookies und externen Diensten."
        path="/datenschutz"
        breadcrumbs={[{ label: "Datenschutzerklärung" }]}
      />
      <Breadcrumb items={[{ label: "Datenschutzerklärung" }]} />
      <section className="px-5 pt-6 pb-20 lg:px-8 lg:pt-8">
        <article className="prose prose-slate mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-xl md:p-12">
          <h1>Datenschutzerklärung</h1>
          <p><em>Stand: Juni 2026</em></p>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie gemäss dem Schweizer Datenschutzgesetz (revDSG, in Kraft seit 1. September 2023) darüber, welche Personendaten wir bei der Nutzung unserer Website erheben, wie wir diese verarbeiten und welche Rechte Sie haben.
          </p>

          <h2>1. Verantwortliche Stelle</h2>
          <p>
            <strong>Autoreinigung Zürich-Nord</strong><br />
            Heerenwiesen 18<br />
            8051 Zürich<br />
            Telefon: <a href="tel:+41445119490">+41 44 511 94 90</a><br />
            E-Mail: <a href="mailto:info@autoreinigung-zuerich-nord.ch">info@autoreinigung-zuerich-nord.ch</a>
          </p>

          <h2>2. Erhebung und Verarbeitung von Personendaten</h2>

          <h3>2.1 Kontaktformular</h3>
          <p>
            Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten: Name, E-Mail-Adresse, Betreff und Ihre Nachricht. Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.<br />
            <strong>Rechtsgrundlage:</strong> Vertragserfüllung bzw. vorvertragliche Massnahmen (Art. 31 revDSG) sowie berechtigtes Interesse.<br />
            <strong>Aufbewahrungsfrist:</strong> 12 Monate, danach Löschung, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>

          <h3>2.2 Telefonkontakt und E-Mail</h3>
          <p>
            Bei telefonischer oder schriftlicher Kontaktaufnahme werden die von Ihnen mitgeteilten Daten zur Bearbeitung Ihres Anliegens verarbeitet.<br />
            <strong>Aufbewahrungsfrist:</strong> 12 Monate.
          </p>

          <h3>2.3 Terminbuchung (Calenso)</h3>
          <p>
            Für die Online-Terminbuchung nutzen wir den Dienst <strong>Calenso AG</strong> (widget.calenso.com), ein Buchungssystem mit Sitz in der Schweiz. Beim Buchen eines Termins werden Daten wie Name, E-Mail-Adresse, Telefonnummer, Fahrzeugtyp und gewünschter Termin erhoben und an Calenso übermittelt.<br />
            <strong>Rechtsgrundlage:</strong> Vertragserfüllung.<br />
            <strong>Auftragsverarbeitung:</strong> Mit Calenso besteht ein Auftragsverarbeitungsvertrag.<br />
            <strong>Datenschutzrichtlinie Calenso:</strong> <a href="https://calenso.com/datenschutz" target="_blank" rel="noreferrer noopener">calenso.com/datenschutz</a>
          </p>

          <h3>2.4 Terminbuchung über LeadConnector / HighLevel</h3>
          <p>
            Ein weiterer Buchungskanal nutzt den Dienst <strong>LeadConnector (HighLevel)</strong>, ein CRM- und Buchungssystem mit Sitz in den USA. Bei der Nutzung dieses Buchungslinks werden Daten an Server in den USA übermittelt. HighLevel LLC hat sich gemäss dem EU-US Data Privacy Framework zur Einhaltung von Datenschutzstandards verpflichtet.<br />
            <strong>Rechtsgrundlage:</strong> Vertragserfüllung.<br />
            <strong>Drittlandübermittlung:</strong> USA – Standardvertragsklauseln (SCC) gemäss Art. 16 revDSG.<br />
            <strong>Datenschutzrichtlinie HighLevel:</strong> <a href="https://www.highlevel.com/privacy-policy" target="_blank" rel="noreferrer noopener">highlevel.com/privacy-policy</a>
          </p>

          <h3>2.5 Virtueller Assistent / KI-Chatbot</h3>
          <p>
            Auf unserer Website befindet sich ein virtueller Assistent (Chatbot), der auf Basis von Künstlicher Intelligenz betrieben wird. Wenn Sie den Chat nutzen, werden Ihre eingegebenen Nachrichten zur Beantwortung Ihrer Anfrage verarbeitet. Die Konversationen werden auf Servern des Dienstleisters <strong>Base44</strong> gespeichert.<br />
            <strong>Achtung:</strong> Bitte geben Sie im Chat keine sensiblen Personendaten (z.B. Passwörter, Zahlungsdaten) ein.<br />
            <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Kundenservice).<br />
            <strong>Aufbewahrungsfrist:</strong> Chatverläufe werden nach 90 Tagen gelöscht.
          </p>

          <h3>2.6 Bewerbungen</h3>
          <p>
            Wenn Sie sich per E-Mail auf eine Stelle bewerben oder eine Initiativbewerbung einreichen, werden Ihre Bewerbungsunterlagen (Name, Kontaktdaten, Lebenslauf, Zeugnisse) ausschliesslich zum Zweck der Prüfung Ihrer Bewerbung verarbeitet.<br />
            <strong>Rechtsgrundlage:</strong> Vorvertragliche Massnahmen (Bewerbungsverfahren).<br />
            <strong>Aufbewahrungsfrist:</strong> Bei Ablehnung werden Bewerbungsunterlagen nach 6 Monaten gelöscht. Bei Zusage werden die Daten in die Personalakte überführt.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die in Ihrem Browser gespeichert werden.
          </p>
          <p><strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Website technisch erforderlich (z.B. Speicherung Ihrer Cookie-Einwilligung). Sie werden ohne Ihre Zustimmung gesetzt.</p>
          <p><strong>Optionale Cookies (Analyse):</strong> Analyse-Cookies (z.B. Google Analytics) werden nur nach Ihrer ausdrücklichen Zustimmung über unseren Cookie-Banner aktiviert.</p>
          <p>Sie können Ihre Cookie-Einstellungen jederzeit über den Link "Cookie-Einstellungen" im Footer dieser Seite anpassen oder über die Einstellungen Ihres Browsers verwalten.</p>

          <h2>4. Google Fonts</h2>
          <p>
            Diese Website verwendet Google Fonts zur Darstellung von Schriftarten. Die Schriftdateien werden von unseren eigenen Servern geladen – es findet <strong>keine Verbindung zu Google-Servern</strong> statt und es werden keine Daten an Google übertragen.
          </p>

          <h2>5. Google Analytics</h2>
          <p>
            Sofern Sie über den Cookie-Banner in die Nutzung von Analyse-Cookies eingewilligt haben, kann diese Website Google Analytics von Google LLC (USA) verwenden. Google Analytics erfasst anonymisierte Daten zur Website-Nutzung (Seitenaufrufe, Verweildauer, Gerätetype). Die IP-Anonymisierung ist aktiviert – Ihre vollständige IP-Adresse wird nicht gespeichert.<br />
            <strong>Rechtsgrundlage:</strong> Ihre Einwilligung (Cookie-Banner).<br />
            <strong>Drittlandübermittlung:</strong> USA – Standardvertragsklauseln sowie Google Ads Data Processing Terms.<br />
            <strong>Opt-Out:</strong> Sie können das Google Analytics Opt-Out-Browser-Add-on unter <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener">tools.google.com/dlpage/gaoptout</a> installieren.<br />
            <strong>Datenschutzrichtlinie Google:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">policies.google.com/privacy</a>
          </p>

          <h2>6. Google Maps</h2>
          <p>
            Auf unserer Website sind Links und Bildverweise zu Google Maps (Google LLC, USA) eingebunden, die es Ihnen ermöglichen, unseren Standort zu finden. Beim Aufruf der Google Maps-Seite gelten die <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">Datenschutzbestimmungen von Google</a>. Es werden Daten (inkl. IP-Adresse) an Google-Server übertragen.
          </p>

          <h2>7. WhatsApp</h2>
          <p>
            Wir bieten Ihnen die Möglichkeit, uns über WhatsApp (WhatsApp Inc., Meta Platforms, USA) zu kontaktieren. Wenn Sie auf den WhatsApp-Button klicken und WhatsApp nutzen, werden Ihre Kontaktdaten und die Gesprächsinhalte an Meta-Server übermittelt. Für diese Datenverarbeitung ist Meta verantwortlich.<br />
            <strong>Hinweis:</strong> Die Nutzung von WhatsApp ist freiwillig. Sie können uns alternativ per Telefon oder E-Mail kontaktieren.<br />
            <strong>Datenschutzrichtlinie WhatsApp/Meta:</strong> <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener">whatsapp.com/legal/privacy-policy</a>
          </p>

          <h2>8. Externe Links und Google Reviews</h2>
          <p>
            Unsere Website enthält Links zu externen Websites wie Google Reviews (g.page). Wenn Sie auf diese Links klicken, gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Drittanbieter.
          </p>

          <h2>9. Internationale Datenübermittlung</h2>
          <p>
            Einige der von uns eingesetzten Dienste (Google, LeadConnector/HighLevel, Base44, WhatsApp/Meta) übermitteln Daten in die USA oder andere Länder ausserhalb der Schweiz. Diese Übermittlungen erfolgen auf Basis von Standardvertragsklauseln (SCC) oder anderen geeigneten Garantien gemäss Art. 16 revDSG.
          </p>

          <h2>10. Ihre Rechte</h2>
          <p>Sie haben nach revDSG folgende Rechte bezüglich Ihrer Personendaten:</p>
          <ul>
            <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen.</li>
            <li><strong>Berichtigungsrecht:</strong> Sie können unrichtige Daten korrigieren lassen.</li>
            <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
            <li><strong>Widerspruchsrecht:</strong> Sie können der Datenverarbeitung auf Basis berechtigter Interessen widersprechen.</li>
            <li><strong>Widerruf der Einwilligung:</strong> Eine erteilte Einwilligung (z.B. für Cookies) können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
            <li><strong>Datenübertragbarkeit:</strong> Sie können die Herausgabe Ihrer Daten in einem gängigen Format verlangen.</li>
          </ul>
          <p>
            Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:<br />
            <a href="mailto:info@autoreinigung-zuerich-nord.ch">info@autoreinigung-zuerich-nord.ch</a>
          </p>

          <h2>11. Beschwerderecht beim EDÖB</h2>
          <p>
            Sie haben das Recht, beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) eine Beschwerde einzureichen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Personendaten gegen das Schweizer Datenschutzgesetz verstösst:<br />
            <strong>EDÖB:</strong> <a href="https://www.edoeb.admin.ch" target="_blank" rel="noreferrer noopener">www.edoeb.admin.ch</a>
          </p>

          <h2>12. Datensicherheit</h2>
          <p>
            Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Personendaten gegen unbefugten Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website wird über eine gesicherte HTTPS-Verbindung übertragen.
          </p>

          <h2>13. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version ist stets auf dieser Seite abrufbar. Bei wesentlichen Änderungen werden wir Sie auf geeignete Weise informieren.
          </p>
        </article>
      </section>
    </>
  );
}