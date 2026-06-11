import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { seoServices, standorte, landingpages } from "@/data/seoData";
import { bookingUrl, phoneUrl, whatsappUrl, contact } from "@/data/siteContent";

// Service-spezifische FAQs (unique pro Dienstleistung, kein generischer Copy-Paste)
const serviceFaqs = {
  autoaufbereitung: [
    { q: "Was beinhaltet eine vollständige Autoaufbereitung?", a: "Unsere vollständige Autoaufbereitung umfasst die Innenreinigung (Staubsaugen, Shampoonieren, Leder), Aussenreinigung per Handwäsche, Felgen, Scheiben sowie optional Lackpolitur und Versiegelung. Wir begutachten das Fahrzeug zuerst und empfehlen das passende Paket." },
    { q: "Wie oft sollte ich mein Fahrzeug aufbereiten lassen?", a: "Für Privatfahrzeuge empfehlen wir eine vollständige Aufbereitung 1–2 Mal pro Jahr. Firmenfahrzeuge oder Leasingfahrzeuge vor der Rückgabe profitieren von einer Aufbereitung nach Bedarf – spätestens kurz vor dem Übergabetermin." },
    { q: "Kann ich das Fahrzeug während der Aufbereitung abholen?", a: "Nein – bitte planen Sie 4–8 Stunden ein. Wir informieren Sie bei der Buchung über die genaue Dauer. Die meisten Kunden kommen per ÖV oder lassen sich abholen." },
    { q: "Ist die Autoaufbereitung auch für ältere Fahrzeuge sinnvoll?", a: "Ja. Auch ältere Fahrzeuge profitieren enorm von einer professionellen Aufbereitung – besonders vor dem Verkauf. Ein gepflegtes Fahrzeug erzielt deutlich höhere Preise." },
    { q: "Wo befindet sich Ihr Betrieb?", a: "Heerenwiesen 18, 8051 Zürich-Schwamendingen. Gut erreichbar aus Oerlikon (8 Min.), Schwamendingen (5 Min.), Seebach (7 Min.), Opfikon (10 Min.) und Wallisellen (12 Min.)." },
  ],
  innenreinigung: [
    { q: "Was genau wird bei der Innenreinigung gereinigt?", a: "Wir reinigen alle Bereiche des Innenraums: Sitze und Teppiche (shampooniert), Leder (gereinigt und gepflegt), Armaturen, Ablagen, Türverkleidungen, Lüftungskanäle, Fensterscheiben innen und alle Ritzen und schwer zugänglichen Stellen." },
    { q: "Wie wird Geruch im Auto beseitigt?", a: "Bei starkem Geruch (Zigaretten, Hund, Feuchtigkeit) bieten wir das Anokath-Desinfektionsverfahren an. Dieses Verfahren beseitigt Gerüche dauerhaft an der Quelle, nicht nur oberflächlich." },
    { q: "Ich habe Tierhaare im Auto – kein Problem?", a: "Tierhaare sind unsere Spezialität. Mit speziellen Werkzeugen entfernen wir hartnäckige Tierhaare auch aus tiefen Sitznähten und Teppichfasern vollständig." },
    { q: "Wie lange dauert eine Innenreinigung?", a: "Je nach Fahrzeugtyp und Verschmutzungsgrad 2–4 Stunden. Wir informieren Sie bei der Buchung über die voraussichtliche Dauer." },
    { q: "Kann ich einen Termin kurzfristig buchen?", a: "Ja. Über unsere Online-Buchung sind oft Termine innerhalb weniger Tage verfügbar. Für dringende Anfragen können Sie uns auch direkt anrufen: +41 44 511 94 90." },
  ],
  aussenreinigung: [
    { q: "Was ist der Unterschied zwischen Handwäsche und Maschinenwäsche?", a: "Bei der Handwäsche entstehen keine Kratzer oder Hologramme, wie sie Bürsten in Automatikwaschanlagen verursachen. Wir reinigen per Zwei-Eimer-Methode mit pH-neutralen Mitteln – schonend und gründlich." },
    { q: "Was wird bei der Aussenreinigung alles gereinigt?", a: "Karosserie, Türrahmen und Türschweller, Felgen und Reifen, Scheiben aussen und innen, Spiegel und Kameralinsen. Auf Wunsch: Motorraum, Unterboden, Fahrwerk, Bremssättel." },
    { q: "Wann ist eine Aussenreinigung besonders wichtig?", a: "Nach dem Winter (Streusalz greift den Lack an), vor dem Frühjahr, vor MFK oder Leasingrückgabe, vor dem Verkauf und nach langen Reisen durch Insekten- oder Schmutzgebiete." },
    { q: "Bieten Sie auch eine Lackversiegelung an?", a: "Ja. Nach der Handwäsche können wir eine Wachsversiegelung, eine Nanoversiegelung oder eine Keramikversiegelung auftragen. Letztere hält mehrere Jahre." },
    { q: "Muss ich einen Termin buchen?", a: "Ja. Bitte buchen Sie vorab online oder rufen Sie an. Wir planen jeden Einsatz individuell und möchten Ihr Fahrzeug mit der nötigen Zeit und Sorgfalt reinigen." },
  ],
  handwasche: [
    { q: "Warum Handwäsche statt Automatikwaschanlage?", a: "Automatikwaschanlagen mit Bürsten hinterlassen feine Kratzer und Hologramme im Lack. Wir reinigen ausschliesslich per Hand mit der Zwei-Eimer-Methode und hochwertigen Mikrofasertüchern – ohne jedes Risiko für Ihren Lack." },
    { q: "Für welche Fahrzeuge ist die Handwäsche besonders wichtig?", a: "Für alle Fahrzeuge mit empfindlichem Lack, Hochglanzlackierungen, Folierungen, Keramikversiegelungen oder hochwertigen Metalliclackierungen. Auch für Sportwagen, Oldtimer und Fahrzeuge mit speziellem Lack." },
    { q: "Wie oft sollte ich mein Fahrzeug per Handwäsche reinigen lassen?", a: "Idealerweise alle 4–8 Wochen, je nach Nutzung und Jahreszeit. Im Winter öfter, da Streusalz den Lack dauerhaft schädigen kann." },
    { q: "Reinigen Sie auch Felgen und Reifen?", a: "Ja, die Felgen- und Reifenreinigung ist fester Bestandteil unserer Handwäsche. Bremsstaub und Teerspuren werden vollständig entfernt." },
    { q: "Kann ich die Handwäsche mit einer Innenreinigung kombinieren?", a: "Ja, und das empfehlen wir auch. Innen und Aussen aus einer Hand – das ist die effizienteste Art der Fahrzeugpflege. Fragen Sie bei der Buchung nach einem Kombipaket." },
  ],
  politur: [
    { q: "Welche Kratzer können durch Politur entfernt werden?", a: "Feine bis mittelschwere Kratzer in der Klarlackschicht, Hologramme von Maschinenwäschen, Oxidationen, matte Flecken und Verwitterungen. Tiefe Kratzer bis auf das Metall können durch Politur nicht vollständig beseitigt werden." },
    { q: "Was ist der Unterschied zwischen Glanzpolitur und Kratzpolitur?", a: "Die Glanzpolitur (Ein-Schritt) beseitigt leichte Hologramme und Oxidationen und verstärkt den Glanz. Die Kratzpolitur (Zwei-Schritt) ist aggressiver und beseitigt tiefere Kratzer in der Klarlackschicht, erfordert aber anschliessende Politur für maximalen Glanz." },
    { q: "Muss das Fahrzeug nach der Politur versiegelt werden?", a: "Es ist nicht zwingend, aber sehr empfehlenswert. Nach der Politur ist der Lack rein und optimal vorbereitet für eine Versiegelung, die den Glanz schützt und das nächste Polieren hinauszögert." },
    { q: "Wie lange hält der Effekt einer Lackpolitur?", a: "Je nach Versiegelung und Nutzung 6–24 Monate. Eine anschliessende Keramikversiegelung verlängert den Effekt auf mehrere Jahre." },
    { q: "Können Hologramme durch meine Automatikwaschanlage entstehen?", a: "Ja, das ist die häufigste Ursache für Hologramme. Bürsten in Automatikwaschanlagen hinterlassen feine kreisförmige Kratzer, die im Licht als Hologramme sichtbar sind. Wir beseitigen diese durch Maschinenpolieren." },
  ],
  leasingrueckgabe: [
    { q: "Wann sollte ich die Leasingrückgabe-Reinigung buchen?", a: "Idealerweise 2–7 Tage vor dem Übergabetermin. So hat das Fahrzeug Zeit, vollständig zu trocknen, und wir können bei Bedarf kurzfristig nacharbeiten." },
    { q: "Was können Nachforderungen beim Leasing verursachen?", a: "Flecken auf Sitzen, Geruch, Schmutz im Innenraum, Kratzer auf dem Lack, Felgenschäden, Schmutz im Motorraum und mangelhafte Aussenreinigung. Wir adressieren alle diese Punkte gezielt." },
    { q: "Können Sie auch Kratzer vor der Rückgabe entfernen?", a: "Feine bis mittelschwere Kratzer können wir durch Lackpolitur deutlich reduzieren. Tiefe Kratzer bis auf das Grundmaterial sind durch Reinigung allein nicht zu beheben – hier empfehlen wir einen Karosseriefachmann." },
    { q: "Machen Sie auch Firmen-Leasingflotten?", a: "Ja. Wir arbeiten regelmässig mit Unternehmen zusammen, die mehrere Leasingfahrzeuge zurückgeben müssen. Kontaktieren Sie uns für ein individuelles Angebot." },
    { q: "Was kostet eine Leasingrückgabe-Reinigung?", a: "Die Kosten hängen vom Umfang ab – Innen, Aussen oder komplett. Typisch sind CHF 150.– bis CHF 400.– je nach Fahrzeuggrösse und Zustand. Für ein genaues Angebot melden Sie sich direkt." },
  ],
  "mfk-vorbereitung": [
    { q: "Welche Bereiche reinigen Sie für die MFK-Vorbereitung?", a: "Motorraum (Kaltentfettung und Dampfreinigung), Unterboden, Fahrwerk, Bremssättel, Radhäuser sowie die Karosserie aussen. Der Motorraum wird anschliessend konserviert." },
    { q: "Verbessert eine Reinigung die Chancen bei der MFK?", a: "Direkt technisch nicht – aber ein sauberer Motorraum erleichtert die Fehlerdiagnose und zeigt dem Prüfer, dass das Fahrzeug gepflegt wird. Oft werden bei sauberen Fahrzeugen auch kleinere Mängel weniger streng bewertet." },
    { q: "Wann sollte ich die MFK-Vorbereitung buchen?", a: "1–3 Tage vor der MFK. Motorraum und Unterboden müssen trocken sein, um bei der Prüfung einen professionellen Eindruck zu machen." },
    { q: "Bieten Sie die Motorraum- und Unterbodenreinigung auch separat an?", a: "Ja. Motorraum und Unterboden können als Einzelleistung oder im Paket mit der Aussenreinigung gebucht werden." },
    { q: "Wo finden MFK-Stationen in Zürich statt?", a: "In Zürich gibt es MFK-Stationen in Schwamendingen (Riedtlistrasse), Oerlikon, Altstetten und weiteren Standorten. Wir sind ideal positioniert als Reinigungsstopp kurz vor der Prüfung." },
  ],
  keramikversiegelung: [
    { q: "Was ist der Unterschied zwischen Keramikversiegelung und Wachsversiegelung?", a: "Wachs hält 2–6 Monate, Keramik 2–5 Jahre. Keramische Beschichtungen sind härter, wasserabweisender und bieten besseren UV- und Kratzschutz. Die Aufbereitung ist aufwendiger, aber das Preis-Leistungs-Verhältnis auf lange Sicht deutlich besser." },
    { q: "Muss der Lack vor der Keramikversiegelung poliert werden?", a: "Ja, immer. Die Keramikschicht legt sich direkt auf den Klarlack und zeigt jede Unebenheit. Wir polieren zuerst und versiegeln dann – für ein perfektes Ergebnis." },
    { q: "Wie lange dauert die Keramikversiegelung?", a: "Reinigung, Politur und Versiegelung dauern zusammen einen vollen Tag (6–10 Stunden). Die Keramikschicht benötigt danach 12–24 Stunden Aushärtezeit, in der das Fahrzeug nicht nass werden darf." },
    { q: "Schützt die Keramikversiegelung auch vor Kratzern?", a: "Keramik erhöht die Lackhärte und kann leichte Kratzer durch Waschen reduzieren – ein vollständiger Kratzschutz ist es jedoch nicht. Sie schützt sehr gut vor UV, Schmutz, Vogelkot und chemischen Einflüssen." },
    { q: "Für welche Fahrzeuge lohnt sich die Keramikversiegelung besonders?", a: "Für Neufahrzeuge (sofort versiegeln), Premium-Fahrzeuge, Sportwagen und alle Fahrzeuge, bei denen der Werterhalt des Lacks Priorität hat. Auch für foliierte Fahrzeuge gibt es spezielle Keramikprodukte." },
  ],
  motorraumreinigung: [
    { q: "Ist die Motorraumreinigung sicher für mein Fahrzeug?", a: "Ja, wenn sie professionell durchgeführt wird. Wir schützen empfindliche Elektronikteile und Stecker vor Feuchtigkeit und reinigen mit angepasstem Druck. Nach der Reinigung trocknen wir den Motorraum sorgfältig." },
    { q: "Was bewirkt eine saubere Motorraumreinigung?", a: "Ein sauberer Motorraum erleichtert die Fehlerdiagnose für Ihren Mechaniker, hinterlässt einen professionellen Eindruck bei MFK und Verkauf und verhindert das Schmoren von Ölrückständen an heissen Teilen, was Brandgeruch verursachen kann." },
    { q: "Wie oft sollte der Motorraum gereinigt werden?", a: "Alle 2–3 Jahre für Normalfahrzeuge, jährlich vor der MFK oder wenn Ölrückstände oder starke Verschmutzungen sichtbar sind." },
    { q: "Was kostet die Motorraumreinigung?", a: "Die Motorraumreinigung kostet als Einzelleistung ab CHF 80.–. Im Paket mit Aussenreinigung oder MFK-Vorbereitung günstiger – fragen Sie bei der Buchung nach." },
    { q: "Kann ich die Motorraumreinigung mit der Aussenreinigung kombinieren?", a: "Ja, das ist sogar empfehlenswert. Motorraum, Unterboden und Karosserie aussen sind thematisch zusammengehörig und werden von vielen Kunden gemeinsam gebucht." },
  ],
};

// Extended content per service slug
const serviceContent = {
  autoaufbereitung: {
    was: "Autoaufbereitung ist die professionelle Gesamtpflege Ihres Fahrzeugs. Sie umfasst die gründliche Innenreinigung, Aussenreinigung per Handwäsche, Lackpolitur sowie optionale Versiegelungen. Eine vollständige Aufbereitung stellt den ursprünglichen Zustand Ihres Fahrzeugs so weit wie möglich wieder her. Unsere Fachleute behandeln jeden Bereich des Fahrzeugs sorgfältig: von Sitzen, Teppichen und Leder bis hin zu Felgen, Unterboden und Lackoberfläche. Das Ergebnis ist ein Fahrzeug, das aussieht und riecht wie neu.",
    vorteile: ["Dauerhafter Werterhalt des Fahrzeugs", "Professionelles Erscheinungsbild für Firmenfahrzeuge", "Optimale Vorbereitung für Leasingrückgabe oder Verkauf", "Schutz der Oberflächen vor frühzeitigem Verschleiss"],
    ablauf: ["Fahrzeugbegutachtung und Zustandserfassung", "Gründliche Innenreinigung (Staubsaugen, Shampoonieren, Lederreinigung)", "Handwäsche aussen inkl. Felgen und Motorraum", "Lackpolitur und Versiegelung nach Wunsch", "Abschlusskontrolle und Übergabe"],
    einsatzbereiche: "Privatfahrzeuge, Firmenflotten, Leasingfahrzeuge, Occasionen, Fahrzeuge vor dem Verkauf, Sportwagen, SUVs.",
  },
  innenreinigung: {
    was: "Die professionelle Auto-Innenreinigung entfernt sämtliche Verunreinigungen aus dem Fahrzeuginnenraum: Staub, Schmutz, Tierhaare, Flecken, Bakterien und unangenehme Gerüche. Unsere Fachleute reinigen alle Bereiche materialschonend – von Sitzen über Teppiche bis hin zu Armaturen, Lüftungskanälen und schwer zugänglichen Ritzen. Auf Wunsch bieten wir auch eine vollständige Desinfektion mit dem Anokath-Verfahren inklusive Geruchsbeseitigung.",
    vorteile: ["Hygienisch sauberer Innenraum", "Entfernung von Allergenen und Bakterien", "Geruchsbeseitigung durch Desinfektion", "Professioneller Schutz von Leder- und Stoffoberflächen"],
    ablauf: ["Gründliches Staubsaugen aller Oberflächen", "Reinigung von Ritzen, Lüftungskanälen und Ablagen", "Sitze shampoonieren oder Leder reinigen und pflegen", "Armaturen, Scheiben und Kunststoffe behandeln", "Desinfektion auf Wunsch"],
    einsatzbereiche: "Familienfahrzeuge, Firmenfahrzeuge, Tierhalter, Leasingnehmer, MFK-Vorbereitung, Occasionen.",
  },
  aussenreinigung: {
    was: "Die professionelle Auto-Aussenreinigung per Handwäsche schützt Ihren Lack vor Kratzern, die bei Maschinenwäschen entstehen. Wir reinigen die Karosserie, Scheiben, Türrahmen, Felgen und Reifenflanken sorgfältig von Hand. Je nach Paket reinigen wir zusätzlich Motorraum, Fahrwerk, Bremssättel, Radhäuser und Unterboden. Eine regelmässige Aussenreinigung ist die Grundlage für den Werterhalt Ihres Fahrzeugs.",
    vorteile: ["Schonende Reinigung ohne Lackschäden", "Vollständige Felgen- und Reifenreinigung", "Motorraum und Fahrwerk auf Wunsch", "Lackversiegelung für Langzeitschutz"],
    ablauf: ["Vorwäsche und Einweichen von Schmutz und Bremsstaub", "Handwäsche der Karosserie mit hochwertigen Mitteln", "Felgen- und Reifenreinigung", "Scheiben innen und aussen", "Trocknung und optionale Versiegelung"],
    einsatzbereiche: "Alle Fahrzeugtypen, besonders nach Winter, vor MFK, für Leasingrückgabe, Premium-Fahrzeuge.",
  },
  handwasche: {
    was: "Die Handwäsche ist die schonendste Art, Ihr Fahrzeug zu waschen. Anders als bei Automatikwaschanlagen entsteht kein Risiko von Kratzern oder Hologrammen. Unsere Fachleute waschen jedes Fahrzeug individuell per Hand mit hochwertigen, pH-neutralen Reinigungsmitteln. Besonders für Fahrzeuge mit empfindlichem Lack, Folierungen oder Keramikversiegelungen ist die Handwäsche die einzig empfehlenswerte Methode.",
    vorteile: ["Kein Lackschaden durch Bürsten", "Individuelle Behandlung jedes Fahrzeugs", "Schutz von Folierungen und Versiegelungen", "Ergebnis sichtbar besser als Automatikwäsche"],
    ablauf: ["Vorwäsche und Schaumbehandlung", "Handwäsche mit Zwei-Eimer-Methode", "Felgen und Reifen separat reinigen", "Trocknung mit Mikrofasertuch", "Optionale Lackkonservierung"],
    einsatzbereiche: "Premium-Fahrzeuge, Sportwagen, foliierte Fahrzeuge, Keramikversiegelungen, Oldtimer.",
  },
  politur: {
    was: "Die professionelle Lackpolitur entfernt feine Kratzer, Hologramme, Oxidationen und Verwitterungen aus der Lackoberfläche. Durch maschinelles Polieren mit hochwertigen Poliermitteln stellen unsere Fachleute den ursprünglichen Glanz des Lacks wieder her. Die Lackpolitur ist der erste Schritt vor einer Versiegelung und entscheidend für das Endergebnis. Bei stärkeren Schäden führen wir eine Kratzpolitur durch, um tiefere Kratzer sichtbar zu reduzieren.",
    vorteile: ["Sichtbare Kratzerentfernung", "Wiederherstellung des ursprünglichen Glanzes", "Vorbereitung für optimale Versiegelung", "Werterhalt des Fahrzeuglacks"],
    ablauf: ["Lackzustandsanalyse und Reinigung", "Maschinenpolieren mit Glanzpolitur", "Kratzpolitur bei stärkeren Schäden", "Wachs- oder Nanoversiegelung", "Finish und Kontrolle"],
    einsatzbereiche: "Premium-Fahrzeuge, Fahrzeuge vor Verkauf, Leasingrückgabe, nach Hologrammen durch Maschinenwaschanlage.",
  },
  leasingrueckgabe: {
    was: "Die Leasingrückgabe-Reinigung bereitet Ihr Fahrzeug optimal auf die Rückgabe an den Leasinggeber vor. Ziel ist es, kostspielige Nachforderungen durch Mängel zu vermeiden. Wir reinigen Innen- und Aussenraum vollständig, entfernen Flecken, Gerüche und leichte Kratzer. Auf Wunsch führen wir eine vollständige Aufbereitung durch, die Ihr Fahrzeug in möglichst originalem Zustand präsentiert. Viele Leasingnehmer sparen durch unsere Aufbereitung Hunderte von Franken an Nachforderungen.",
    vorteile: ["Vermeidung von Leasingnachforderungen", "Professionelles Erscheinungsbild bei Rückgabe", "Innen und Aussen aus einer Hand", "Transparente Preise und klares Ergebnis"],
    ablauf: ["Fahrzeugzustand dokumentieren", "Vollständige Innenreinigung", "Aussenreinigung per Handwäsche", "Flecken- und Geruchsbeseitigung", "Leichte Kratzer reduzieren (optional)"],
    einsatzbereiche: "Alle Leasingnehmer bei Vertragsende, Unternehmens-Leasingfahrzeuge, Langzeitmieter.",
  },
  "mfk-vorbereitung": {
    was: "Die MFK-Vorbereitung (Motorfahrzeugkontrolle) umfasst die gründliche Reinigung von Motorraum, Unterboden, Fahrwerk und Karosserie. Bei der MFK wird das Fahrzeug technisch geprüft – ein sauberer Motorraum erleichtert die Inspektion und hinterlässt einen professionellen Eindruck. Wir reinigen alle relevanten Bereiche professionell und bereiten Ihr Fahrzeug optimal auf die Prüfung vor. Eine saubere Aussenreinigung gehört ebenfalls zur vollständigen MFK-Vorbereitung.",
    vorteile: ["Professioneller Eindruck bei MFK-Prüfung", "Leichtere Fehlerdiagnose durch sauberen Motorraum", "Entfernung von Salz und Korrosionsablagerungen", "Vollständig aus einer Hand"],
    ablauf: ["Motorraum reinigen und konservieren", "Unterboden und Fahrwerk reinigen", "Bremssättel und Radhäuser", "Aussenreinigung Karosserie", "Abschlusscheck"],
    einsatzbereiche: "Alle Fahrzeughalter vor der MFK, Occasionsverkäufer, Leasingrückgabe vor Prüfung.",
  },
  keramikversiegelung: {
    was: "Die Keramikversiegelung ist der modernste und dauerhafteste Schutz für Ihren Fahrzeuglack. Keramische Beschichtungen bilden eine harte, wasserabweisende Schutzschicht auf dem Lack, die Kratzer, UV-Strahlung, Schmutz und chemische Einflüsse abwehrt. Im Unterschied zu Wachsversiegelungen hält eine professionelle Keramikversiegelung mehrere Jahre. Die Oberfläche muss vor der Versiegelung vollständig gereinigt und poliert sein, damit optimale Haftung entsteht.",
    vorteile: ["Mehrjähriger Lackschutz", "Hydrophober Lotus-Effekt: Schmutz perlt ab", "UV-Schutz und Glanzerhalt", "Einfachere Pflege dauerhaft"],
    ablauf: ["Vollständige Reinigung und Dekontamination", "Lackpolitur für perfekte Haftung", "Auftragen der Keramikbeschichtung", "Aushärtezeit einhalten", "Abschlusskontrolle"],
    einsatzbereiche: "Premium-Fahrzeuge, Sportwagen, Neufahrzeuge, Fahrzeuge mit wertvollem Lack.",
  },
  motorraumreinigung: {
    was: "Die professionelle Motorraumreinigung entfernt Öl, Schmutz, Staub und Ablagerungen aus dem Motorraum. Ein sauberer Motorraum erleichtert die Fehlerdiagnose, verhindert das Schmoren von Verschmutzungen an heissen Teilen und hinterlässt bei der MFK oder beim Verkauf einen professionellen Eindruck. Wir reinigen den Motorraum schonend und konservieren Gummidichtungen und Kunststoffteile anschliessend für langfristigen Schutz.",
    vorteile: ["Professioneller Eindruck bei Verkauf und MFK", "Erleichterte Fehlerdiagnose", "Schutz vor Überhitzung durch Schmutzablagerungen", "Konservierung von Gummiteilen"],
    ablauf: ["Kaltentfettung des Motorraums", "Dampfreinigung oder Schaumreinigung", "Pinselreinigung von schwer zugänglichen Bereichen", "Trocknung", "Konservierung von Dichtungen und Kunststoffen"],
    einsatzbereiche: "Alle Fahrzeuge vor MFK, Verkauf oder nach langer Betriebsdauer.",
  },
};

export default function SeoService() {
  const { service } = useParams();
  const seoSvc = seoServices.find((s) => s.slug === service) || seoServices[0];
  const content = serviceContent[seoSvc.slug] || serviceContent.autoaufbereitung;
  const relatedLPs = landingpages.filter((lp) => lp.serviceSlug === seoSvc.slug);

  return (
    <>
      <SEO
        title={seoSvc.title}
        description={seoSvc.description}
        path={`/dienstleistung/${seoSvc.slug}`}
        type="service"
        serviceName={seoSvc.name}
        breadcrumbs={[
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: seoSvc.name },
        ]}
      />
      <Breadcrumb items={[
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: seoSvc.name },
      ]} />

      {/* Hero */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">{seoSvc.name}</p>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">{seoSvc.h1}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
              {seoSvc.heroText || `Professionelle ${seoSvc.name} in Zürich Nord – schonend, gründlich und mit Fokus auf dauerhaften Werterhalt. Termin online buchbar.`}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">
                Termin buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={phoneUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Was ist diese Dienstleistung */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader eyebrow="Die Dienstleistung" title={`Was ist ${seoSvc.name}?`} />
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{content.was}</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-3xl font-extrabold mb-6">Ihre Vorteile</h2>
              <ul className="space-y-4">
                {content.vorteile.map((v) => (
                  <li key={v} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-lg">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="So funktioniert es" title="Unser Ablauf" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.ablauf.map((step, i) => (
              <Reveal key={step} delay={i * 70}>
                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                  <div className="font-heading text-4xl font-extrabold text-primary/20 mb-3">{i + 1}</div>
                  <p>{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Einsatzbereiche */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <SectionHeader eyebrow="Für wen?" title={`Für wen eignet sich ${seoSvc.name}?`} />
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{content.einsatzbereiche}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-extrabold mb-4">Preisfaktoren</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {["Fahrzeugtyp und -grösse", "Verschmutzungsgrad", "Gewähltes Paket (Basic / Advanced / Premium)", "Zusatzleistungen und Extras", "Zustand von Lack und Innenraum"].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">
                  Jetzt Angebot anfragen <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Regionen + Money Pages */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Einzugsgebiet" title={`${seoSvc.name} – Region Zürich Nord`} />
          <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
            {standorte.map((ort) => (
              <Link key={ort.slug} to={`/standorte/${ort.slug}`} className="rounded-full border border-border bg-card px-5 py-3 text-center text-sm font-bold hover:border-primary hover:text-primary transition-colors">
                {ort.name}
              </Link>
            ))}
          </div>
          {relatedLPs.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary mb-4">Spezifische Infos je Standort</p>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {relatedLPs.map((lp) => (
                  <Link key={`${lp.serviceSlug}-${lp.ortSlug}`} to={`/lp/${lp.serviceSlug}/${lp.ortSlug}`} className="flex items-center gap-2 rounded-2xl border border-border bg-card p-4 text-sm font-bold hover:border-primary hover:text-primary transition-colors">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                    {lp.serviceName} {lp.ortName}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader center eyebrow="FAQ" title={`Häufige Fragen – ${seoSvc.name}`} />
          <div className="mt-10 space-y-5">
            {(serviceFaqs[seoSvc.slug] || [
              { q: `Was kostet eine ${seoSvc.name} bei Ihnen?`, a: `Die Kosten hängen von Fahrzeugtyp, Grösse und Verschmutzungsgrad ab. Unsere Pakete beginnen ab CHF 70.–. Für ein genaues Angebot kontaktieren Sie uns oder buchen Sie direkt online.` },
              { q: `Wie lange dauert eine ${seoSvc.name}?`, a: "Je nach Umfang dauert die Reinigung zwischen 1 und 8 Stunden. Wir informieren Sie bei der Buchung über die voraussichtliche Dauer." },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: "Ja, wir reinigen regelmässig Firmenflotten und Geschäftsfahrzeuge. Kontaktieren Sie uns für ein massgeschneidertes Angebot für Ihre Flotte." },
              { q: "Kann ich online einen Termin buchen?", a: "Ja, über unsere Online-Buchung sichern Sie sich in weniger als 60 Sekunden Ihren Wunschtermin – bequem und ohne Wartezeit." },
              { q: "Wo befindet sich Ihr Betrieb?", a: "Wir sind an der Heerenwiesen 18, 8051 Zürich, gut erreichbar aus Oerlikon, Schwamendingen, Seebach, Opfikon, Wallisellen und der ganzen Region Zürich Nord." },
            ]).map((item) => (
              <Reveal key={item.q}>
                <div className="rounded-[2rem] border border-border bg-card p-6">
                  <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-extrabold">Bereit für professionelle {seoSvc.name}?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Buchen Sie jetzt online oder kontaktieren Sie uns direkt. Wir freuen uns auf Ihr Fahrzeug.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground">
                Termin online buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-bold">
                WhatsApp Anfrage
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}