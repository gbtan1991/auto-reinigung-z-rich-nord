import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";

const Section = ({ id, title, children }) => (
  <section id={id} className="pt-8 first:pt-0 border-t border-border first:border-t-0">
    <h2 className="font-heading text-xl font-bold text-foreground mb-5">{title}</h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="font-heading text-base font-bold text-foreground mb-3">{title}</h3>
    {children}
  </div>
);

const DetailRow = ({ label, children }) => (
  <div className="text-sm text-muted-foreground leading-relaxed mb-1.5">
    <span className="font-semibold text-foreground">{label}:</span>{" "}
    {children}
  </div>
);

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
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-extrabold text-foreground mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-muted-foreground mb-10">Stand: Juni 2026</p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm space-y-0">
            <p className="text-muted-foreground leading-relaxed mb-0">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie gemäss dem Schweizer Datenschutzgesetz (revDSG, in Kraft seit 1. September 2023) darüber, welche Personendaten wir bei der Nutzung unserer Website erheben, wie wir diese verarbeiten und welche Rechte Sie haben.
            </p>

            <Section id="verantwortliche" title="1. Verantwortliche Stelle">
              <div className="text-sm leading-relaxed space-y-0.5">
                <p className="font-semibold text-foreground">Autoreinigung Zürich-Nord</p>
                <p>Heerenwiesen 18<br />8051 Zürich</p>
                <p>Telefon: <a href="tel:+41445119490" className="text-primary underline hover:opacity-80">+41 44 511 94 90</a></p>
                <p>E-Mail: <a href="mailto:info@autoreinigung-zuerich-nord.ch" className="text-primary underline hover:opacity-80">info@autoreinigung-zuerich-nord.ch</a></p>
              </div>
            </Section>

            <Section id="erhebung" title="2. Erhebung und Verarbeitung von Personendaten">

              <SubSection title="2.1 Kontaktformular">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten: Name, E-Mail-Adresse, Betreff und Ihre Nachricht. Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
                </p>
                <DetailRow label="Rechtsgrundlage">Vertragserfüllung bzw. vorvertragliche Massnahmen (Art. 31 revDSG) sowie berechtigtes Interesse.</DetailRow>
                <DetailRow label="Aufbewahrungsfrist">12 Monate, danach Löschung, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</DetailRow>
              </SubSection>

              <SubSection title="2.2 Telefonkontakt und E-Mail">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Bei telefonischer oder schriftlicher Kontaktaufnahme werden die von Ihnen mitgeteilten Daten zur Bearbeitung Ihres Anliegens verarbeitet.
                </p>
                <DetailRow label="Aufbewahrungsfrist">12 Monate.</DetailRow>
              </SubSection>

              <SubSection title="2.3 Terminbuchung (Calenso)">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Für die Online-Terminbuchung nutzen wir den Dienst <span className="font-semibold text-foreground">Calenso AG</span> (widget.calenso.com), ein Buchungssystem mit Sitz in der Schweiz. Beim Buchen eines Termins werden Daten wie Name, E-Mail-Adresse, Telefonnummer, Fahrzeugtyp und gewünschter Termin erhoben und an Calenso übermittelt.
                </p>
                <DetailRow label="Rechtsgrundlage">Vertragserfüllung.</DetailRow>
                <DetailRow label="Auftragsverarbeitung">Mit Calenso besteht ein Auftragsverarbeitungsvertrag.</DetailRow>
                <DetailRow label="Datenschutzrichtlinie Calenso">
                  <a href="https://calenso.com/datenschutz" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">calenso.com/datenschutz</a>
                </DetailRow>
              </SubSection>

              <SubSection title="2.5 Virtueller Assistent / KI-Chatbot">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Auf unserer Website befindet sich ein virtueller Assistent (Chatbot), der auf Basis von Künstlicher Intelligenz betrieben wird. Wenn Sie den Chat nutzen, werden Ihre eingegebenen Nachrichten zur Beantwortung Ihrer Anfrage verarbeitet. Die Konversationen werden auf unseren Servern bei <span className="font-semibold text-foreground">Hostpoint</span> (Schweiz) gespeichert.
                </p>
                <DetailRow label="Achtung">Bitte geben Sie im Chat keine sensiblen Personendaten (z.B. Passwörter, Zahlungsdaten) ein.</DetailRow>
                <DetailRow label="Rechtsgrundlage">Berechtigtes Interesse (Kundenservice).</DetailRow>
                <DetailRow label="Aufbewahrungsfrist">Chatverläufe werden nach 90 Tagen gelöscht.</DetailRow>
              </SubSection>

              <SubSection title="2.6 Bewerbungen">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Wenn Sie sich per E-Mail auf eine Stelle bewerben oder eine Initiativbewerbung einreichen, werden Ihre Bewerbungsunterlagen (Name, Kontaktdaten, Lebenslauf, Zeugnisse) ausschliesslich zum Zweck der Prüfung Ihrer Bewerbung verarbeitet.
                </p>
                <DetailRow label="Rechtsgrundlage">Vorvertragliche Massnahmen (Bewerbungsverfahren).</DetailRow>
                <DetailRow label="Aufbewahrungsfrist">Bei Ablehnung werden Bewerbungsunterlagen nach 6 Monaten gelöscht. Bei Zusage werden die Daten in die Personalakte überführt.</DetailRow>
              </SubSection>

            </Section>

            <Section id="cookies" title="3. Cookies">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die in Ihrem Browser gespeichert werden.
              </p>
              <DetailRow label="Notwendige Cookies">Diese sind für den Betrieb der Website technisch erforderlich (z.B. Speicherung Ihrer Cookie-Einwilligung). Sie werden ohne Ihre Zustimmung gesetzt.</DetailRow>
              <DetailRow label="Optionale Cookies (Analyse)">Analyse-Cookies (z.B. Google Analytics) werden nur nach Ihrer ausdrücklichen Zustimmung über unseren Cookie-Banner aktiviert.</DetailRow>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                Sie können Ihre Cookie-Einstellungen jederzeit über den Link „Cookie-Einstellungen" im Footer dieser Seite anpassen oder über die Einstellungen Ihres Browsers verwalten.
              </p>
            </Section>

            <Section id="google-fonts" title="4. Google Fonts">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diese Website verwendet Google Fonts zur Darstellung von Schriftarten. Die Schriftdateien werden von unseren eigenen Servern geladen – es findet <span className="font-semibold text-foreground">keine Verbindung zu Google-Servern</span> statt und es werden keine Daten an Google übertragen.
              </p>
            </Section>

            <Section id="google-analytics" title="5. Google Analytics">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Sofern Sie über den Cookie-Banner in die Nutzung von Analyse-Cookies eingewilligt haben, kann diese Website Google Analytics von Google LLC (USA) verwenden. Google Analytics erfasst anonymisierte Daten zur Website-Nutzung (Seitenaufrufe, Verweildauer, Gerätetype). Die IP-Anonymisierung ist aktiviert – Ihre vollständige IP-Adresse wird nicht gespeichert.
              </p>
              <DetailRow label="Rechtsgrundlage">Ihre Einwilligung (Cookie-Banner).</DetailRow>
              <DetailRow label="Drittlandübermittlung">USA – Standardvertragsklauseln sowie Google Ads Data Processing Terms.</DetailRow>
              <DetailRow label="Opt-Out">Sie können das Google Analytics Opt-Out-Browser-Add-on unter <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">tools.google.com/dlpage/gaoptout</a> installieren.</DetailRow>
              <DetailRow label="Datenschutzrichtlinie Google">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">policies.google.com/privacy</a>
              </DetailRow>
            </Section>

            <Section id="google-maps" title="6. Google Maps">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Auf unserer Website sind Links und Bildverweise zu Google Maps (Google LLC, USA) eingebunden, die es Ihnen ermöglichen, unseren Standort zu finden. Beim Aufruf der Google Maps-Seite gelten die <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">Datenschutzbestimmungen von Google</a>. Es werden Daten (inkl. IP-Adresse) an Google-Server übertragen.
              </p>
            </Section>

            <Section id="whatsapp" title="7. WhatsApp">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Wir bieten Ihnen die Möglichkeit, uns über WhatsApp (WhatsApp Inc., Meta Platforms, USA) zu kontaktieren. Wenn Sie auf den WhatsApp-Button klicken und WhatsApp nutzen, werden Ihre Kontaktdaten und die Gesprächsinhalte an Meta-Server übermittelt. Für diese Datenverarbeitung ist Meta verantwortlich.
              </p>
              <DetailRow label="Hinweis">Die Nutzung von WhatsApp ist freiwillig. Sie können uns alternativ per Telefon oder E-Mail kontaktieren.</DetailRow>
              <DetailRow label="Datenschutzrichtlinie WhatsApp/Meta">
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">whatsapp.com/legal/privacy-policy</a>
              </DetailRow>
            </Section>

            <Section id="externe-links" title="8. Externe Links und Google Reviews">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unsere Website enthält Links zu externen Websites wie Google Reviews (g.page). Wenn Sie auf diese Links klicken, gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Drittanbieter.
              </p>
            </Section>

            <Section id="internationale-datenuebermittlung" title="9. Internationale Datenübermittlung">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Einige der von uns eingesetzten Dienste (Google, WhatsApp/Meta) übermitteln Daten in die USA oder andere Länder ausserhalb der Schweiz. Diese Übermittlungen erfolgen auf Basis von Standardvertragsklauseln (SCC) oder anderen geeigneten Garantien gemäss Art. 16 revDSG.
              </p>
            </Section>

            <Section id="rechte" title="10. Ihre Rechte">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Sie haben nach revDSG folgende Rechte bezüglich Ihrer Personendaten:
              </p>
              <ul className="space-y-2.5 mb-4">
                <li className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Auskunftsrecht:</span> Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen.</li>
                <li className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Berichtigungsrecht:</span> Sie können unrichtige Daten korrigieren lassen.</li>
                <li className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Löschungsrecht:</span> Sie können die Löschung Ihrer Daten verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Widerspruchsrecht:</span> Sie können der Datenverarbeitung auf Basis berechtigter Interessen widersprechen.</li>
                <li className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Widerruf der Einwilligung:</span> Eine erteilte Einwilligung (z.B. für Cookies) können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
                <li className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">Datenübertragbarkeit:</span> Sie können die Herausgabe Ihrer Daten in einem gängigen Format verlangen.</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:<br />
                <a href="mailto:info@autoreinigung-zuerich-nord.ch" className="text-primary underline hover:opacity-80">info@autoreinigung-zuerich-nord.ch</a>
              </p>
            </Section>

            <Section id="edoeb" title="11. Beschwerderecht beim EDÖB">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sie haben das Recht, beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) eine Beschwerde einzureichen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Personendaten gegen das Schweizer Datenschutzgesetz verstösst:
              </p>
              <DetailRow label="EDÖB">
                <a href="https://www.edoeb.admin.ch" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">www.edoeb.admin.ch</a>
              </DetailRow>
            </Section>

            <Section id="datensicherheit" title="12. Datensicherheit">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Personendaten gegen unbefugten Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website wird über eine gesicherte HTTPS-Verbindung übertragen.
              </p>
            </Section>

            <Section id="hosting" title="13. Hosting">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Diese Website wird auf Servern der <span className="font-semibold text-foreground">Hostpoint AG</span> in der Schweiz gehostet. Sämtliche Daten verbleiben in Schweizer Rechenzentren und unterliegen dem Schweizer Datenschutzrecht. Es findet keine Datenübermittlung an Server ausserhalb der Schweiz statt.
              </p>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">Hostpoint AG</p>
                <p>Neue Jonastrasse 60<br />8640 Rapperswil-Jona<br />Schweiz</p>
                <p><a href="https://www.hostpoint.ch/" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">www.hostpoint.ch</a></p>
              </div>
            </Section>

            <Section id="aenderungen" title="14. Änderungen dieser Datenschutzerklärung">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version ist stets auf dieser Seite abrufbar. Bei wesentlichen Änderungen werden wir Sie auf geeignete Weise informieren.
              </p>
            </Section>

          </div>
        </div>
      </section>
    </>
  );
}