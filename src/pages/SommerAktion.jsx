import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Car, Phone, ShieldCheck, Sparkles, Sun, Wind } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { calensoLinks, contact, phoneUrl, whatsappUrl, images } from "@/data/siteContent";

const bookingLink = calensoLinks.aktionen.sommeraktion;
const heroImage = "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1200&h=800&fit=crop&q=80&auto=format";

const paketinhalt = [
  { title: "Premium Innenreinigung", image: images.heroInterior, href: "/dienstleistungen/innenreinigung" },
  { title: "Basic Aussenreinigung", image: images.ctaExterior, href: "/dienstleistungen/aussenreinigung" },
  { title: "Geruchsentfernung & Desinfektion", image: images.heroRim, href: "/dienstleistungen/innenreinigung" },
];

const Vorteile = [
  { icon: Sun, title: "Perfekt für die Herbstmonate", text: "Starten Sie gepflegt in den Herbst." },
  { icon: Car, title: "Rundum-Reinigung innen und aussen", text: "Komplette Fahrzeugpflege aus einer Hand." },
  { icon: Wind, title: "Geruchsneutralisierung inklusive", text: "Frischer Innenraum durch Desinfektion." },
  { icon: Sparkles, title: "Professionelle Handwäsche", text: "Schonend, kratzerfrei, per Hand." },
  { icon: ShieldCheck, title: "Premium Fahrzeugpflege", text: "Werterhalt und Schutz für Ihr Auto." },
];

export default function SommerAktion() {
  return (
    <>
      <SEO
        title="Herbst-Aktion | Autoreinigung Zürich Nord"
        description="Profitieren Sie von unserer zeitlich begrenzten Herbst-Aktion: Premium-Innenreinigung, Basic-Aussenreinigung und Geruchsentfernung & Desinfektion in einem attraktiven Paket."
        path="/sommer-aktion"
        type="service"
        serviceName="Herbst-Aktion"
        breadcrumbs={[{ label: "Herbst-Aktion" }]}
        image={heroImage}
      />
      <Breadcrumb items={[{ label: "Herbst-Aktion" }]} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Herbst-Aktion Autoreinigung Zürich Nord" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
              <Sun className="h-4 w-4" /> Zeitlich begrenztes Angebot
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-background sm:text-5xl lg:text-6xl">
              <Sun className="inline h-9 w-9 text-primary sm:h-11 sm:w-11" /> Herbst-Aktion
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-background/85">
              Premium-Innenreinigung + Basic Aussenreinigung + Geruchsentfernung &amp; Desinfektion. Ihr Auto rundum wie ab Werk – innen, aussen und Felgen.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={bookingLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
                Jetzt Herbst-Aktion buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={phoneUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/10 px-7 py-4 font-bold text-background backdrop-blur transition hover:bg-background hover:text-foreground">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Paketinhalt */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Paketinhalt" title="Das ist in der Herbst-Aktion enthalten" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paketinhalt.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link to={item.href} className="group block h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-52 w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center gap-3 p-5">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                    <p className="font-heading text-lg font-bold transition group-hover:text-primary">{item.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-primary/20 bg-secondary/70 p-6 text-center sm:p-8">
              <p className="font-heading text-xl font-extrabold sm:text-2xl">Ihr Auto rundum wie ab Werk – innen, aussen und Felgen.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Vorteile" title="Warum die Herbst-Aktion?" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Vorteile.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Sun className="mx-auto mb-5 h-10 w-10 text-primary" />
            <h2 className="font-heading text-2xl font-extrabold text-background sm:text-3xl lg:text-4xl">Jetzt Herbst-Aktion buchen</h2>
            <p className="mt-4 text-base text-background/75 sm:text-lg">
              Premium-Innenreinigung, Basic-Aussenreinigung und Geruchsentfernung &amp; Desinfektion in einem attraktiven Paket.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={bookingLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Jetzt Herbst-Aktion buchen <ArrowRight className="h-5 w-5" />
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