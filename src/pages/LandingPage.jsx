import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Clock, Phone } from "lucide-react";
import SEO from "@/components/site/SEO";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { landingpages, standorte, seoServices } from "@/data/seoData";
import Breadcrumb from "@/components/site/Breadcrumb";
import { bookingUrl, phoneUrl, whatsappUrl, contact } from "@/data/siteContent";

// Content per (serviceSlug, ortSlug) pair – targeted local content
const getLandingContent = (serviceSlug, ortName, serviceName) => ({
  einleitung: `Sie suchen professionelle ${serviceName} in ${ortName}? Autoreinigung Zürich-Nord an der Heerenwiesen 18, 8051 Zürich ist Ihre erste Adresse in der Region. Kunden aus ${ortName} schätzen unsere kurze Anfahrt, die professionellen Ergebnisse und die transparenten Preise. Ob Privatfahrzeug, Firmenwagen oder Leasingfahrzeug – wir reinigen Ihr Auto gründlich, materialschonend und mit Fokus auf dauerhaften Werterhalt.`,
  leistungBeschrieb: `Unsere ${serviceName} in ${ortName} und der Region Zürich Nord umfasst eine professionelle Behandlung Ihres Fahrzeugs nach höchsten Standards. Jedes Fahrzeug wird individuell begutachtet und entsprechend seinem Zustand behandelt. Wir verwenden ausschliesslich hochwertige, materialschonende Reinigungsmittel und Pflegeprodukte. Das Ergebnis ist ein Fahrzeug, das sauber, gepflegt und werterhaltend übergeben wird. Kunden aus ${ortName} profitieren von der guten Erreichbarkeit unseres Standorts und der Möglichkeit, den Termin flexibel online zu buchen. Unsere Fachleute haben jahrelange Erfahrung und behandeln jedes Fahrzeug mit der nötigen Sorgfalt. Ob kurze Aussenreinigung oder vollständige Aufbereitung – wir finden das passende Paket für Ihr Fahrzeug und Ihr Budget.`,
  fuerWen: `Die ${serviceName} empfiehlt sich für Privatfahrzeugbesitzer aus ${ortName}, Leasingnehmer vor der Fahrzeugrückgabe, Unternehmen mit Firmenflotten sowie alle, die ihr Fahrzeug optimal pflegen möchten. Auch Fahrzeuge vor dem Verkauf oder der MFK profitieren von einer professionellen Reinigung.`,
  lokalerBezug: `${ortName} und Zürich Nord sind eng miteinander verbunden. Viele Fahrzeugbesitzer aus ${ortName} nutzen täglich die Verbindungen nach Zürich und schätzen eine zuverlässige, professionelle Anlaufstelle für ihre Fahrzeugpflege. Unser Betrieb an der Heerenwiesen 18 ist von ${ortName} schnell und bequem erreichbar – mit dem Auto über die A1 oder A51, oder mit S-Bahn und Tram direkt bis Oerlikon, von wo aus wir wenige Minuten entfernt sind. Kunden aus ${ortName} schätzen die professionellen Ergebnisse, die persönliche Beratung und die transparente Preisstruktur. Wir betreuen regelmässig Kunden aus der gesamten Region Zürich Nord und kennen die spezifischen Bedürfnisse von Fahrzeugbesitzern in dieser Region.`,
  warum: `Kunden aus ${ortName} wählen Autoreinigung Zürich-Nord wegen der kurzen Anfahrt, der professionellen Handarbeit und der fairen Preise. Wir kennen die Anforderungen von Fahrzeughaltern in der Region und bieten massgeschneiderte Lösungen – von der einfachen Innenreinigung bis zur vollständigen Fahrzeugaufbereitung mit Keramikversiegelung. Buchen Sie jetzt Ihren Termin online oder rufen Sie uns an. Wir freuen uns auf Ihr Fahrzeug.`,
});

export default function LandingPage() {
  const { service, ort } = useParams(); // route: /lp/:service/:ort
  const lp = landingpages.find((l) => l.serviceSlug === service && l.ortSlug === ort);
  const ortData = standorte.find((s) => s.slug === ort);
  const svcData = seoServices.find((s) => s.slug === service);

  if (!lp || !ortData || !svcData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold">Seite nicht gefunden</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary font-bold">
            <ArrowRight className="h-4 w-4" /> Zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  const content = getLandingContent(service, ortData.name, lp.serviceName);
  const title = `${lp.serviceName} ${ortData.name} | Autoreinigung Zürich Nord`;
  const description = `${lp.serviceName} in ${ortData.name} – professionelle Fahrzeugpflege von Autoreinigung Zürich-Nord. Termin online buchen.`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={`/lp/${service}/${ort}`}
        type="service"
        serviceName={lp.serviceName}
        ortName={ortData.name}
        breadcrumbs={[
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: lp.serviceName, href: `/dienstleistung/${service}` },
          { label: ortData.nameFull },
        ]}
      />
      <Breadcrumb items={[
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: lp.serviceName, href: `/dienstleistung/${service}` },
        { label: ortData.nameFull },
      ]} />

      {/* Hero */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              {lp.serviceName} in {ortData.name}
            </p>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">
              {lp.serviceName} in {ortData.nameFull}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
              {content.einleitung}
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

      {/* Hauptinhalt */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow={`${lp.serviceName} in ${ortData.name}`}
                title={`${lp.serviceName} in ${ortData.nameFull} – professionell und zuverlässig`}
              />
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{content.leistungBeschrieb}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-extrabold mb-6">Für wen geeignet?</h2>
                <p className="text-muted-foreground">{content.fuerWen}</p>
                <div className="mt-6 space-y-3">
                  {["Privatfahrzeuge und Familienfahrzeuge", "Firmenfahrzeuge und Flotten", "Leasingfahrzeuge vor Rückgabe", "Fahrzeuge vor MFK oder Verkauf"].map((item) => (
                    <div key={item} className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="So läuft es ab" title="In 3 Schritten zum sauberen Auto" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { step: "1", title: "Termin buchen", text: "Online in 60 Sekunden buchen – flexibel, ohne Wartezeit." },
              { step: "2", title: "Fahrzeug bringen", text: `Bringen Sie Ihr Fahrzeug zu uns an die Heerenwiesen 18, 8051 Zürich – schnell erreichbar aus ${ortData.name}.` },
              { step: "3", title: "Gepflegtes Auto abholen", text: "Wir reinigen Ihr Fahrzeug professionell und geben es in einwandfreiem Zustand zurück." },
            ].map((item) => (
              <Reveal key={item.step} delay={parseInt(item.step) * 80}>
                <div className="rounded-[2rem] border border-border bg-card p-7 shadow-sm text-center">
                  <div className="font-heading text-5xl font-extrabold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lokaler Bezug & Erreichbarkeit */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-heading text-3xl font-extrabold mb-5">
                {lp.serviceName} für Kunden aus {ortData.nameFull}
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">{content.lokalerBezug}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-xl font-extrabold">Erreichbarkeit ab {ortData.name}</h3>
                </div>
                <p className="text-muted-foreground leading-8">{ortData.erreichbarkeit}</p>
                <div className="mt-6 pt-6 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{contact.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow={`Warum Kunden aus ${ortData.name}`} title={`Warum Kunden aus ${ortData.name} uns wählen`} />
          <Reveal>
            <p className="mt-6 max-w-4xl mx-auto text-center text-lg leading-8 text-muted-foreground">{content.warum}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Professionelle Handarbeit", text: "Jede Reinigung per Hand – kein Automatikbetrieb, kein Lackkratzer." },
              { title: "Faire Preise", text: "Transparente Pakete ab CHF 70.– ohne versteckte Kosten." },
              { title: "Flexibel buchbar", text: "Termin online sichern – 24/7, in weniger als 60 Sekunden." },
              { title: "Alle Fahrzeugtypen", text: "Von Kleinwagen bis Transporter, von Privatfahrzeug bis Flotte." },
              { title: "Werterhalt garantiert", text: "Professionelle Pflege erhält den Wert Ihres Fahrzeugs dauerhaft." },
              { title: `Kurze Anfahrt aus ${ortData.name}`, text: `Schnell erreichbar per Auto oder ÖV – kein langer Umweg.` },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader center eyebrow="FAQ" title={`Häufige Fragen – ${lp.serviceName} ${ortData.name}`} />
          <div className="mt-10 space-y-5">
            {[
              { q: `Bieten Sie ${lp.serviceName} für Kunden aus ${ortData.name} an?`, a: `Ja, wir sind die bevorzugte Anlaufstelle für Kunden aus ${ortData.name} und der ganzen Region Zürich Nord. Unser Betrieb ist von ${ortData.name} schnell und bequem erreichbar.` },
              { q: `Was kostet eine ${lp.serviceName} bei Ihnen?`, a: `Die Kosten hängen von Fahrzeugtyp, Grösse und Verschmutzungsgrad ab. Unsere Pakete beginnen ab CHF 70.–. Für ein genaues Angebot kontaktieren Sie uns oder buchen Sie direkt online.` },
              { q: "Wie lange dauert die Reinigung?", a: "Je nach Umfang dauert die Reinigung zwischen 1 und 8 Stunden. Wir informieren Sie bei der Buchung über die voraussichtliche Dauer Ihres gewählten Pakets." },
              { q: "Kann ich ein Termin online buchen?", a: "Ja, über unsere Online-Buchung sichern Sie sich in weniger als 60 Sekunden Ihren Wunschtermin – bequem von zu Hause oder unterwegs." },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: `Ja, wir reinigen regelmässig Firmenflotten aus ${ortData.name} und der ganzen Region. Kontaktieren Sie uns für ein individuelles Angebot für Ihre Flotte.` },
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
            <h2 className="font-heading text-4xl font-extrabold">
              {lp.serviceName} in {ortData.name} – jetzt buchen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Buchen Sie Ihren Termin online oder kontaktieren Sie uns direkt. Wir freuen uns auf Ihr Fahrzeug aus {ortData.name}.
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