import { Link } from "react-router-dom";
import { ArrowRight, Car, Gauge, ShieldCheck, Sparkles, Users } from "lucide-react";
import SEO from "@/components/site/SEO";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import ServiceCards from "@/components/site/ServiceCards";
import QuoteCalculator from "@/components/site/QuoteCalculator";
import FAQAccordion from "@/components/site/FAQAccordion";
import Testimonials from "@/components/site/Testimonials";
import { bookingUrl, images } from "@/data/siteContent";
import { standorte } from "@/data/seoData";

export default function Home() {
  return (
    <>
      <SEO
        title="Autoreinigung Zürich Nord | Autoaufbereitung, Innenreinigung, Politur"
        description="Professionelle Autoreinigung Zürich Nord – Innenreinigung ab CHF 80, Aussenreinigung ab CHF 70, Lackpolitur, Leasingrückgabe & MFK. Online buchen."
        path="/"
        image={images.heroRim}
        type="home"
        breadcrumbs={[{ name: "Startseite", path: "/" }]}
      />
      <section className="overflow-hidden px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-primary">Swiss Detailing Lab</p>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">Professionelle Autoreinigung und Autoaufbereitung in Zürich Nord</h1>
            <div className="mt-7 space-y-5 text-lg leading-8 text-muted-foreground">
              <p>Sie suchen eine professionelle Autoreinigung in Zürich Nord? Bei Autoreinigung Zürich-Nord reinigen, pflegen und bereiten wir Fahrzeuge gründlich und materialschonend auf – von der Innenreinigung über die Aussenreinigung bis hin zu Politur, Lackpflege, Motorraumreinigung und Unterbodenreinigung.</p>
              <p>Ob Privatfahrzeug, Firmenauto, Leasingrückgabe, Occasion oder Fahrzeug vor der MFK: Wir sorgen dafür, dass Ihr Auto sauber, gepflegt und werterhaltend aufbereitet wird. Mit sorgfältiger Handarbeit, hochwertigen Reinigungsprodukten und viel Erfahrung kümmern wir uns um jedes Detail Ihres Fahrzeugs.</p>
              <p>Unser Standort in Zürich Nord ist ideal erreichbar für Kundinnen und Kunden aus Zürich-City, Oerlikon, Schwamendingen, Seebach, Opfikon, Glattbrugg, Wallisellen und Umgebung.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-lg">Jetzt buchen <ArrowRight className="h-5 w-5" /></a>
              <a href="#offerte" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 font-bold">Preise berechnen</a>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="grid gap-4 md:grid-cols-2">
              {[images.heroRim, images.heroInterior, images.heroPolish, images.ctaExterior].map((image, index) => (
                <img key={image} src={image} alt="Autoreinigung Zürich Nord Fahrzeugpflege" className={`h-64 w-full rounded-[2rem] object-cover shadow-xl ${index === 1 ? "md:mt-14" : ""}`} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {[[Car,"Seit 2020","in Zürich-Schwamendingen"],[Users,"5-köpfig","Team mit Herz und Hand"],[ShieldCheck,"MFK-ready","Motor, Chassis und Unterboden"],[Gauge,"Werterhalt","für Privat- und Firmenfahrzeuge"]].map(([Icon,title,text]) => (
              <Reveal key={title} className="rounded-[2rem] border border-border bg-card p-6 shadow-sm"><Icon className="mb-5 h-7 w-7 text-primary" /><p className="font-heading text-2xl font-extrabold">{title}</p><p className="mt-2 text-sm text-muted-foreground">{text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Dienstleistungen" title="Saubere Arbeit: unsere Dienstleistungen" text="Alle bestehenden Leistungen wurden übernommen und in eine klare Premium-Service-Matrix übersetzt." /><div className="mt-10"><ServiceCards /></div></div></section>

      <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><Reveal><img src={images.trust} alt="Fahrzeug nach der professionellen Reinigung in Zürich Nord" className="rounded-[2.5rem] shadow-2xl" /></Reveal><Reveal delay={100}><SectionHeader eyebrow="Warum Kunden uns vertrauen" title="Handarbeit, hochwertige Mittel und schonende Pflege." text="Bei Autoreinigung Zürich-Nord legen wir grossen Wert auf sorgfältige Handarbeit, hochwertige Reinigungsmittel und schonende Fahrzeugpflege. Jedes Fahrzeug wird individuell behandelt – unabhängig davon, ob es sich um ein Alltagsfahrzeug, ein Firmenauto, einen Sportwagen oder ein Leasingfahrzeug handelt." /><p className="mt-6 text-lg leading-8 text-muted-foreground">Dank unserer Erfahrung in der professionellen Fahrzeugaufbereitung wissen wir genau, welche Reinigungs- und Pflegeverfahren in welcher Situation sinnvoll sind. Unser Ziel ist eine gründliche, materialschonende und nachhaltige Autoreinigung für Kundinnen und Kunden aus Zürich Nord und Umgebung.</p></Reveal></div></section>

      <section id="offerte" className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="Lead System" title="Offerte in Sekunden vorbereiten" text="Fahrzeugtyp, Service und Add-ons auswählen – danach direkt buchen oder per WhatsApp anfragen." /><div className="mt-10"><QuoteCalculator /></div></div></section>

      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="Kundenstimmen" title="Vertrauen aus Zürich Nord" /><div className="mt-10"><Testimonials /></div></div></section>
      {/* Regionen-Hub – interne Verlinkung */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Einzugsgebiet" title="Autoreinigung für die ganze Region Zürich Nord" text="Unser Betrieb an der Heerenwiesen 18 ist ideal erreichbar für Kunden aus der gesamten Region." />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {standorte.map((ort) => (
              <Link key={ort.slug} to={`/standorte/${ort.slug}`} className="rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-bold hover:border-primary hover:text-primary transition-colors">
                {ort.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/standorte" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
              Alle Standorte ansehen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="FAQ" title="Häufige Fragen" /><div className="mt-10"><FAQAccordion /></div></div></section>
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-5xl rounded-[2.5rem] bg-foreground p-8 text-background shadow-2xl md:p-14"><Sparkles className="mb-6 h-8 w-8 text-primary" /><h2 className="font-heading text-4xl font-extrabold md:text-6xl">Nicht lange warten: sekundenschnell Termin sichern</h2><p className="mt-5 text-lg text-background/75">Jetzt online buchen und Ihr Fahrzeug sauber, gepflegt und werterhaltend wieder abholen.</p><a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground">Online buchen</a></div></section>
    </>
  );
}