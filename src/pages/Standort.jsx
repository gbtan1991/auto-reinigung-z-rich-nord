import { Link, useParams } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";
import SEO from "@/components/site/SEO";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { standorte } from "@/data/seoData";
import { bookingUrl, phoneUrl, whatsappUrl, services, contact } from "@/data/siteContent";

export default function Standort() {
  const { ort } = useParams();
  const standort = standorte.find((s) => s.slug === ort) || standorte[0];

  return (
    <>
      <SEO
        title={standort.title}
        description={standort.description}
        path={`/standorte/${standort.slug}`}
      />

      {/* Hero */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              Autoreinigung in {standort.name}
            </p>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">
              Professionelle Fahrzeugpflege in {standort.nameFull}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">
              Ihr Fahrzeug professionell gereinigt und aufbereitet – Innenreinigung, Aussenreinigung und Politur. Direkt in Zürich Nord, schnell erreichbar aus {standort.name}.
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

      {/* Einleitung */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow={`Autoreinigung für ${standort.name}`}
                title={`Professionelle Fahrzeugaufbereitung für Kunden aus ${standort.name}`}
              />
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Autoreinigung Zürich-Nord an der Heerenwiesen 18, 8051 Zürich, ist die erste Adresse für professionelle Fahrzeugpflege in der Region Zürich Nord. Kunden aus {standort.name} und Umgebung vertrauen uns für Innenreinigung, Aussenreinigung, Lackpolitur und Fahrzeugaufbereitung.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Ob Privatfahrzeug, Firmenwagen oder Leasingfahrzeug: Wir reinigen Ihr Auto professionell, materialschonend und mit Fokus auf dauerhaften Werterhalt. Jedes Fahrzeug wird individuell behandelt.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <h2 className="font-heading text-2xl font-extrabold mb-6">Schnell & einfach zum Termin</h2>
                <ul className="space-y-4">
                  {[
                    "Online-Buchung in 60 Sekunden",
                    "Professionelle Handwäsche & Pflege",
                    "Alle Fahrzeugtypen willkommen",
                    "Leasingrückgabe-Spezialist",
                    "MFK-Vorbereitung aus einer Hand",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-center">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">
                  Jetzt Termin buchen <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dienstleistungen */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Unsere Dienstleistungen"
            title={`Fahrzeugpflege-Services für ${standort.name}`}
            text={`Alle unsere Dienstleistungen stehen Kunden aus ${standort.name} und der gesamten Region Zürich Nord zur Verfügung.`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <Link to={`/service/${service.slug}`} className="block rounded-[2rem] border border-border bg-card p-7 shadow-sm hover:border-primary transition-colors">
                  <h3 className="font-heading text-xl font-extrabold">{service.eyebrow}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-7">{service.summary.slice(0, 130)}...</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-primary font-bold text-sm">
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
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
                Autoreinigung für {standort.nameFull}
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">{standort.lokalerBezug}</p>
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2">Quartiere & Umgebung</h3>
                <p className="text-muted-foreground">{standort.quartiere}</p>
              </div>
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2">Typische Kundenanliegen</h3>
                <p className="text-muted-foreground">{standort.typischAnliegen}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-heading text-xl font-extrabold">Erreichbarkeit ab {standort.name}</h3>
                </div>
                <p className="text-muted-foreground leading-8">{standort.erreichbarkeit}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{contact.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warum Kunden uns wählen */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            center
            eyebrow={`Kunden aus ${standort.name}`}
            title={`Warum Kunden aus ${standort.name} uns vertrauen`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Kurze Anfahrt", text: `Von ${standort.name} sind wir schnell und bequem erreichbar – per Auto oder ÖV.` },
              { title: "Professionelle Handarbeit", text: "Jede Reinigung wird sorgfältig per Hand durchgeführt – kein Automatikbetrieb." },
              { title: "Faire Preise", text: "Transparente Pakete ab CHF 70.– mit klaren Leistungen ohne versteckte Kosten." },
              { title: "Alle Fahrzeugtypen", text: "Vom Kleinwagen bis zum SUV, vom Privatfahrzeug bis zur Firmenflotte." },
              { title: "Werterhalt", text: "Professionelle Pflege erhält den Wert Ihres Fahrzeugs langfristig." },
              { title: "Online buchbar", text: "Termin in 60 Sekunden online buchen – flexibel und ohne Wartezeit." },
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
          <SectionHeader center eyebrow="FAQ" title={`Häufige Fragen – Autoreinigung ${standort.name}`} />
          <div className="mt-10 space-y-5">
            {[
              { q: `Wie weit ist Ihr Betrieb von ${standort.name} entfernt?`, a: `Unser Betrieb an der Heerenwiesen 18, 8051 Zürich ist von ${standort.name} gut erreichbar. ${standort.erreichbarkeit.slice(0, 120)}.` },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: "Ja, wir reinigen regelmässig Firmenwagen, Transportfahrzeuge und komplette Flotten. Kontaktieren Sie uns für ein individuelles Angebot." },
              { q: "Wie lange dauert eine vollständige Fahrzeugaufbereitung?", a: "Je nach Paket dauert eine Innenreinigung 2–4 Stunden, eine Komplettreinigung 4–8 Stunden. Bitte planen Sie genug Zeit ein oder fragen Sie bei der Buchung nach." },
              { q: "Kann ich einen Termin online buchen?", a: "Ja, direkt über unsere Online-Buchung. In weniger als 60 Sekunden ist Ihr Termin gesichert – bequem von zu Hause aus." },
              { q: "Was kostet eine professionelle Autoreinigung?", a: "Unsere Pakete beginnen ab CHF 70.– für die Aussenreinigung und ab CHF 80.– für die Innenreinigung. Für individuelle Angebote kontaktieren Sie uns gerne." },
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
              Bereit für ein sauberes Auto?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Buchen Sie jetzt Ihren Termin online oder rufen Sie uns an. Wir freuen uns auf Kunden aus {standort.name} und der ganzen Region.
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