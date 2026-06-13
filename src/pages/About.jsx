import { Clock, MapPin, Users, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import GoogleReviewBadge from "@/components/site/GoogleReviewBadge";
import { images, contact, googleReviewUrl } from "@/data/siteContent";

export default function About() {
  return (
    <>
      <SEO
        title="Über uns | Autoreinigung Zürich-Nord – Handarbeit seit 2020"
        description="Autoreinigung Zürich-Nord: 5-köpfiges Team in Zürich-Schwamendingen. Professionelle Fahrzeugpflege von Hand – Teil der Turicum Automobile GmbH. Jetzt kennenlernen."
        path="/ueber-uns"
        image={images.about}
        breadcrumbs={[{ label: "Über uns" }]}
      />
      <Breadcrumb items={[{ label: "Über uns" }]} />

      {/* Hero */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">Über uns</p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">Handarbeit, Erfahrung, echte Resultate</h1>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Seit 2020 reinigen wir Fahrzeuge in Zürich-Schwamendingen – von Hand, mit hochwertigen Mitteln und mit dem Anspruch, dass Sie Ihr Auto danach wirklich wiedererkennen. Unser 5-köpfiges Team ist Teil der Kfz-Werkstatt <strong>turicum-automobile.ch</strong> und pflegt Fahrzeuge mit der gleichen Sorgfalt, die man von einem guten Mechaniker erwartet: gründlich, ehrlich und ohne unnötigen Aufwand.
            </p>
            <div className="mt-6"><GoogleReviewBadge compact /></div>
          </Reveal>
          <Reveal delay={120}>
            <img src={images.about} alt="Eingangsbereich Zürich Nord Autoreinigung" className="rounded-[2.5rem] shadow-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Fakten */}
      <section className="bg-secondary/70 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: MapPin, label: "Standort", value: "Zürich-Schwamendingen" },
              { icon: Clock, label: "Seit", value: "2020" },
              { icon: Users, label: "Team", value: "5 Mitarbeiter" },
              { icon: ShieldCheck, label: "Firma", value: "Turicum Automobile GmbH" },
            ].map(({ icon: Icon, label, value }) => (
              <Reveal key={label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
                <Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-1 font-heading text-lg font-extrabold">{value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Unsere Arbeitsweise" title="Keine Waschanlage – jedes Fahrzeug von Hand" text="Automatikbetrieb, Standardprogramme, Fließband – das gibt es bei uns nicht. Warum? Weil jedes Fahrzeug anders ist." />
          <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Eine Waschanlage arbeitet mit rotierenden Bürsten, die Schmutz und Staub nicht entfernen, sondern über den Lack schleifen. Mikrokratzer, Hologramme und matter Lack sind die Folge. Wir waschen jedes Fahrzeug <strong>von Hand</strong> – mit sauberen Mikrofasertüchern, hochwertigen Reinigungsmitteln und dem nötigen Auge fürs Detail. Jedes Panel, jede Ritze, jede Felge wird einzeln bearbeitet.
            </p>
            <p>
              Bei der Innenreinigung gilt dasselbe Prinzip: Statt Allzweckreiniger und Durchlaufprinzip arbeiten wir materialschonend mit spezifischen Pflegeprodukten für Leder, Stoff, Kunststoff und Teppich. Tierhaare, Flecken und Gerüche behandeln wir gezielt – nicht pauschal.
            </p>
          </div>
        </div>
      </section>

      {/* Fahrzeugwert */}
      <section className="bg-secondary/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Fahrzeugwert" title="Gepflegt ist mehr wert – das gilt für jedes Fahrzeug." />
          <div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">
            <p>Eine professionelle Aufbereitung zahlt sich aus – nicht nur optisch, sondern auch finanziell. Ein sauberes, gepflegtes Fahrzeug erzielt beim Verkauf erfahrungsgemäss mehrere hundert Franken mehr. Kauf- und Leasinginteressenten urteilen zuerst über das Erscheinungsbild – und wer gepflegt ist, wirkt gepflegt.</p>
            <p>Das gilt auch umgekehrt: Sie haben eine Occasion mit Gebrauchsspuren gekauft und möchten sie aufwerten? Eine Aufbereitung kostet einen Bruchteil einer Neulackierung – und das Ergebnis überrascht oft beide Seiten. Auch für Oldtimer und Classic Cars ist regelmässige Pflege wichtig, damit Material und Patina erhalten bleiben.</p>
            <p>Haben Sie Fragen oder möchten Sie ein Angebot für Ihr Fahrzeug? Rufen Sie uns an oder buchen Sie direkt online – wir schauen es uns gerne an.</p>
          </div>
        </div>
      </section>

      {/* Standort + Erreichbarkeit */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Standort" title="Gut erreichbar – mitten in Zürich Nord" text="Unser Betrieb befindet sich an der Heerenwiesen 18, 8051 Zürich-Schwamendingen – ideal erreichbar aus der ganzen Region." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-heading text-base font-bold">Adresse</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {contact.company}<br />
                Heerenwiesen 18<br />
                8051 Zürich
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-heading text-base font-bold">Öffnungszeiten</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{contact.hours}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Zürich","Oerlikon","Schwamendingen","Seebach","Opfikon","Glattbrugg","Wallisellen","Dübendorf","Dietlikon"].map((ort) => (
              <Link key={ort} to={`/standorte/${ort.toLowerCase()}`} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition hover:border-primary hover:text-primary">{ort}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-foreground p-8 text-center text-background shadow-2xl md:p-12">
          <Star className="mx-auto mb-4 h-7 w-7 text-[#F9AB00]" />
          <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Überzeugen Sie sich selbst</h2>
          <p className="mt-3 text-background/75">Sehen Sie was unsere Kunden auf Google sagen – oder buchen Sie direkt einen Termin.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5">Google Bewertungen ansehen</a>
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 font-bold transition hover:border-background/60">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>
    </>
  );
}