import { Link, useParams } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { standorte, landingpages } from "@/data/seoData";
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
        type="location"
        ortName={standort.name}
        breadcrumbs={[
          { label: "Standorte", href: "/standorte" },
          { label: standort.nameFull },
        ]}
      />
      <Breadcrumb items={[
        { label: "Standorte", href: "/standorte" },
        { label: standort.nameFull },
      ]} />

      {/* Hero */}
      <section className="px-5 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              Autoreinigung in {standort.name}
            </p>
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Professionelle Fahrzeugpflege in {standort.nameFull}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Innenreinigung, Aussenreinigung und Politur – direkt in Zürich Nord, schnell erreichbar aus {standort.name}.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={phoneUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Einleitung */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow={`Autoreinigung für ${standort.name}`}
                title={`Fahrzeugaufbereitung für Kunden aus ${standort.name}`}
              />
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Autoreinigung Zürich-Nord an der Heerenwiesen 18 ist die erste Anlaufstelle für Fahrzeugpflege in der Region. Kunden aus {standort.name} kommen regelmässig zu uns für Innenreinigung, Aussenreinigung, Lackpolitur und Fahrzeugaufbereitung.
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Privatfahrzeug, Firmenwagen oder Leasingfahrzeug – wir reinigen jedes Fahrzeug sorgfältig per Hand und mit dem richtigen Material.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <h2 className="font-heading text-xl font-extrabold mb-5">Schnell & einfach zum Termin</h2>
                <ul className="space-y-3">
                  {[
                    "Online-Buchung in 60 Sekunden",
                    "Professionelle Handwäsche & Pflege",
                    "Alle Fahrzeugtypen willkommen",
                    "Leasingrückgabe-Spezialist",
                    "MFK-Vorbereitung aus einer Hand",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:opacity-90">
                  Jetzt Termin buchen <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dienstleistungen */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Unsere Dienstleistungen"
            title={`Fahrzeugpflege für ${standort.name}`}
            text={`Alle Leistungen stehen Kunden aus ${standort.name} und der Region Zürich Nord zur Verfügung.`}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <Link to={`/service/${service.slug}`} className="flex flex-col rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition hover:border-primary">
                  <h3 className="font-heading text-lg font-extrabold">{service.eyebrow}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{service.summary.slice(0, 120)}…</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lokaler Bezug & Erreichbarkeit */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
                Autoreinigung für {standort.nameFull}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{standort.lokalerBezug}</p>
              <div className="mt-5">
                <h3 className="font-bold text-base mb-1.5">Quartiere & Umgebung</h3>
                <p className="text-sm text-muted-foreground">{standort.quartiere}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-base mb-1.5">Typische Kundenanliegen</h3>
                <p className="text-sm text-muted-foreground">{standort.typischAnliegen}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <h3 className="font-heading text-lg font-extrabold">Erreichbarkeit ab {standort.name}</h3>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{standort.erreichbarkeit}</p>
                <div className="mt-5 space-y-2 border-t border-border pt-5">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{contact.hours}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warum Kunden uns wählen – standortspezifisch */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            center
            eyebrow={`Kunden aus ${standort.name}`}
            title={`Warum Kunden aus ${standort.name} uns vertrauen`}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: `Kurze Anfahrt aus ${standort.name}`, text: standort.erreichbarkeit.split(".")[0] + "." },
              { title: "Professionelle Handarbeit", text: "Jede Reinigung per Hand – kein Automatikbetrieb, kein Lackkratzer." },
              { title: "Lokale Bedürfnisse", text: standort.typischAnliegen },
              { title: "Alle Quartiere, ein Ziel", text: `Kunden aus ${standort.quartiere} vertrauen uns regelmässig ihre Fahrzeuge an.` },
              { title: "Leasingrückgabe & Werterhalt", text: "Wir kennen die Anforderungen der Leasinggeber und bereiten Ihr Fahrzeug gezielt vor." },
              { title: "Online buchbar – 24/7", text: "Termin in 60 Sekunden online sichern – flexibel, ohne Wartezeit." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="rounded-[1.75rem] border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-6">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader center eyebrow="FAQ" title={`Fragen – Autoreinigung ${standort.name}`} />
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
            {[
              { q: `Wie weit ist Ihr Betrieb von ${standort.name} entfernt?`, a: `Unser Betrieb an der Heerenwiesen 18, 8051 Zürich ist von ${standort.name} gut erreichbar. ${standort.erreichbarkeit.slice(0, 120)}.` },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: "Ja, wir reinigen regelmässig Firmenwagen, Transportfahrzeuge und komplette Flotten. Kontaktieren Sie uns für ein individuelles Angebot." },
              { q: "Wie lange dauert eine vollständige Fahrzeugaufbereitung?", a: "Je nach Paket dauert eine Innenreinigung 2–4 Stunden, eine Komplettreinigung 4–8 Stunden. Bitte fragen Sie bei der Buchung nach." },
              { q: "Kann ich einen Termin online buchen?", a: "Ja, direkt über unsere Online-Buchung. In weniger als 60 Sekunden ist Ihr Termin gesichert." },
              { q: "Was kostet eine professionelle Autoreinigung?", a: "Unsere Pakete beginnen ab CHF 70.– für die Aussenreinigung und ab CHF 80.– für die Innenreinigung." },
            ].map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="font-bold text-base sm:text-lg">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Pages für diesen Standort */}
      {landingpages.filter((lp) => lp.ortSlug === standort.slug).length > 0 && (
        <section className="px-5 py-12 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Spezifische Leistungsseiten"
              title={`${standort.name}: detaillierte Infos`}
            />
            <div className="mt-7 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {landingpages
                .filter((lp) => lp.ortSlug === standort.slug)
                .map((lp) => (
                  <Reveal key={`${lp.serviceSlug}-${lp.ortSlug}`}>
                    <Link
                      to={`/lp/${lp.serviceSlug}/${lp.ortSlug}`}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {lp.serviceName} in {lp.ortName}
                    </Link>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Bereit für ein sauberes Auto?
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Buchen Sie online oder rufen Sie uns an – wir sind für Kunden aus {standort.name} da.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin online buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                WhatsApp Anfrage
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}