import { ArrowRight, CheckCircle2, Phone, Sun } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { calensoLinks, contact, phoneUrl, whatsappUrl, images } from "@/data/siteContent";

const bookingLink = calensoLinks.aktionen.sommeraktion;
const heroImage = "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1200&h=800&fit=crop&q=80&auto=format";

const leistungsumfang = [
  "Saisonale Aktion mit Spezialpreis",
  "Kombination aus Innen- und Aussenreinigung",
  "Limitiertes Angebot",
  "Online buchen und sparen",
];

export default function SommerAktion() {
  return (
    <>
      <SEO
        title="Sommer-Aktion Autoreinigung Zürich | Saisonal sparen"
        description="Limitierte Sommer-Aktion bei Autoreinigung Zürich-Nord: Kombination aus Innen- und Aussenreinigung zum Aktionspreis. Online buchen."
        path="/sommer-aktion"
        type="service"
        serviceName="Sommer-Aktion"
        breadcrumbs={[{ label: "Sommer-Aktion" }]}
        image={heroImage}
      />
      <Breadcrumb items={[{ label: "Sommer-Aktion" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sommer-Aktion Autoreinigung Zürich Nord" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
              <Sun className="h-4 w-4" /> Limitiertes Sommer-Angebot
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl">Sommer-Aktion</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-background/85">
              Limitierte Sommer-Aktion: Profitieren Sie von einem saisonalen Spezialpreis für die Kombination aus Innen- und Aussenreinigung. Frisch, sauber und geschützt in den Sommer.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={bookingLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                Jetzt Termin buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={phoneUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/10 px-7 py-4 font-bold text-background backdrop-blur transition hover:bg-background hover:text-foreground">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leistungsumfang */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Leistungsumfang" title="Das ist in der Sommer-Aktion enthalten" text="Eine Kombination aus Innen- und Aussenreinigung zu einem attraktiven Aktionspreis." />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-[1.75rem] shadow-lg">
                <img src={images.ctaExterior} alt="Aussenreinigung im Sommer" className="h-72 w-full object-cover" />
              </div>
              <ul className="mt-8 space-y-3">
                {leistungsumfang.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[1.75rem] shadow-lg">
                <img src={images.heroRim} alt="Fahrzeugpflege Sommer" className="h-72 w-full object-cover" />
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-border bg-secondary/70 p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Saisonaler Preis</p>
                <p className="mt-2 font-heading text-3xl font-extrabold">Aktionspreis</p>
                <p className="mt-2 text-sm text-muted-foreground">exkl. MwSt.</p>
                <a href={bookingLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:opacity-90">
                  Jetzt Angebot anfragen <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Sun className="mx-auto mb-5 h-10 w-10 text-primary" />
            <h2 className="font-heading text-2xl font-extrabold text-background sm:text-3xl lg:text-4xl">Jetzt Sommer-Aktion buchen</h2>
            <p className="mt-4 text-base text-background/75 sm:text-lg">
              Die Aktion ist nur für kurze Zeit verfügbar. Sichern Sie sich Ihren Termin jetzt online und profitieren Sie vom Aktionspreis.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={bookingLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Jetzt Sommer-Aktion buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-4 font-bold text-background transition hover:bg-background hover:text-foreground">
                WhatsApp Anfrage
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}