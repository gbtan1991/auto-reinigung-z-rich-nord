import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { seoServices, standorte } from "@/data/seoData";
import { bookingUrl, phoneUrl, whatsappUrl, contact } from "@/data/siteContent";

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

      {/* Regionen */}
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader center eyebrow="FAQ" title={`Häufige Fragen – ${seoSvc.name}`} />
          <div className="mt-10 space-y-5">
            {[
              { q: `Was kostet eine ${seoSvc.name} bei Ihnen?`, a: `Die Kosten hängen von Fahrzeugtyp, Grösse und Verschmutzungsgrad ab. Unsere Pakete beginnen ab CHF 70.–. Für ein genaues Angebot kontaktieren Sie uns oder buchen Sie direkt online.` },
              { q: `Wie lange dauert eine ${seoSvc.name}?`, a: "Je nach Umfang dauert die Reinigung zwischen 1 und 8 Stunden. Wir informieren Sie bei der Buchung über die voraussichtliche Dauer." },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: "Ja, wir reinigen regelmässig Firmenflotten und Geschäftsfahrzeuge. Kontaktieren Sie uns für ein massgeschneidertes Angebot für Ihre Flotte." },
              { q: "Kann ich online einen Termin buchen?", a: "Ja, über unsere Online-Buchung sichern Sie sich in weniger als 60 Sekunden Ihren Wunschtermin – bequem und ohne Wartezeit." },
              { q: "Wo befindet sich Ihr Betrieb?", a: "Wir sind an der Heerenwiesen 18, 8051 Zürich, gut erreichbar aus Oerlikon, Schwamendingen, Seebach, Opfikon, Wallisellen und der ganzen Region Zürich Nord." },
            ].map((item) => (
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