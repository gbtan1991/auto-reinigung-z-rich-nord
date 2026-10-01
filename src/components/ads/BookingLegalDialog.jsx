import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { contact, localBusinessSchema } from '@/data/siteContent';
export default function BookingLegalDialog({ topic, onClose }) {
  const privacy = topic === 'datenschutz';
  return <Dialog open={!!topic} onOpenChange={open => {if (!open) onClose();}}>
    <DialogContent className="max-h-[85dvh] overflow-y-auto">
      <DialogTitle>{privacy ? 'Datenschutz' : 'Impressum'}</DialogTitle>
      <DialogDescription>{privacy ? 'Informationen zur Datenverarbeitung auf dieser Buchungs-Landingpage.' : 'Verantwortlich für den Inhalt dieser Website.'}</DialogDescription>
      <div className="space-y-5 text-sm leading-6 text-muted-foreground">
        <section><h3 className="font-semibold text-foreground">{localBusinessSchema.legalName}</h3><p>Marke: {contact.company}</p><p>{contact.address} · Schweiz</p><p>Telefon: {contact.phone}</p><p>E-Mail: {contact.email}</p></section>
        {privacy ? <>
          <section><h3 className="font-semibold text-foreground">Online-Terminbuchung (Calenso)</h3><p>Für die Online-Terminbuchung nutzen wir den Dienst Calenso AG, ein Buchungssystem mit Sitz in der Schweiz. Beim Buchen eines Termins werden Daten wie Name, E-Mail-Adresse, Telefonnummer, Fahrzeugtyp und gewünschter Termin erhoben und an Calenso übermittelt.</p><p>Rechtsgrundlage: Vertragserfüllung. Mit Calenso besteht ein Auftragsverarbeitungsvertrag.</p><p>Datenschutzrichtlinie Calenso: calenso.com/datenschutz</p></section>
          <section><h3 className="font-semibold text-foreground">Cookies und Analyse</h3><p>Notwendige Cookies sind für den Betrieb der Website technisch erforderlich, zum Beispiel zur Speicherung Ihrer Cookie-Einwilligung. Optionale Analyse-Cookies werden nur nach Ihrer ausdrücklichen Zustimmung über unseren Cookie-Banner aktiviert. Sie können Ihre Cookie-Einstellungen jederzeit über die Cookie-Einstellungen im Footer anpassen.</p></section>
          <section><h3 className="font-semibold text-foreground">Google Analytics und Erfolgsmessung</h3><p>Sofern Sie in die Nutzung von Analyse-Cookies eingewilligt haben, kann diese Website Google Analytics von Google LLC (USA) verwenden. Google Analytics erfasst Daten zur Website-Nutzung wie Seitenaufrufe, Verweildauer und Gerätetyp. Buchungsbuttons sowie tatsächliche Calenso-Buchungsereignisse werden zur Erfolgsmessung erfasst; persönliche Buchungsdaten werden dabei nicht in unsere Tracking-Ereignisse übernommen.</p><p>Rechtsgrundlage: Ihre Einwilligung. Drittlandübermittlung: USA – Standardvertragsklauseln sowie Google Ads Data Processing Terms. Datenschutzrichtlinie Google: policies.google.com/privacy</p></section>
          <section><h3 className="font-semibold text-foreground">Ihre Rechte</h3><p>Sie können Auskunft über Ihre gespeicherten Personendaten verlangen, unrichtige Daten berichtigen lassen und die Löschung verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sie können der Verarbeitung auf Basis berechtigter Interessen widersprechen, Ihre Einwilligung mit Wirkung für die Zukunft widerrufen und die Herausgabe Ihrer Daten in einem gängigen Format verlangen.</p><p>Zur Geltendmachung Ihrer Rechte wenden Sie sich an die oben genannte E-Mail-Adresse. Sie haben das Recht, beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) eine Beschwerde einzureichen: www.edoeb.admin.ch.</p></section>
          <section><h3 className="font-semibold text-foreground">Datensicherheit</h3><p>Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Personendaten gegen unbefugten Zugriff, Verlust oder Missbrauch zu schützen. Unsere Website wird über eine gesicherte HTTPS-Verbindung übertragen.</p></section>
        </> : <>
          <p>MWST-Nr.: CHE-406.280.998 MWST<br />Handelsreg. Nr.: CHE-406.280.998</p>
          <section><h3 className="font-semibold text-foreground">Haftungsausschluss</h3><p>Die Inhalte dieser Website wurden sorgfältig zusammengestellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten verantwortlich. Für fremde Inhalte auf verlinkten externen Seiten übernehmen wir keine Haftung, da wir auf diese keinen Einfluss haben.</p></section>
          <section><h3 className="font-semibold text-foreground">Urheberrecht</h3><p>Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von Autoreinigung Zürich-Nord.</p></section>
          <p>Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit ausdrücklich widersprochen.</p>
        </>}
      </div>
    </DialogContent>
  </Dialog>;
}