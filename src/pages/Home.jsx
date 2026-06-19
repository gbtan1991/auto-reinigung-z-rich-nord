import { Link } from "react-router-dom";
import { ArrowRight, Car, Gauge, ShieldCheck, Sparkles, Users, MapPin } from "lucide-react";
import SEO from "@/components/site/SEO";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import ServiceCards from "@/components/site/ServiceCards";
import QuoteCalculator from "@/components/site/QuoteCalculator";
import FAQAccordion from "@/components/site/FAQAccordion";
import Testimonials from "@/components/site/Testimonials";
import { bookingUrl, images } from "@/data/siteContent";
import GoogleReviewBadge from "@/components/site/GoogleReviewBadge";
import TrustBadges from "@/components/site/TrustBadges";
import { standorte, seoServices } from "@/data/seoData";
import { services } from "@/data/siteContent";

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
      <section className="overflow-hidden px-5 pt-20 pb-12 md:pt-28 md:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="mb-4 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Swiss Detailing Lab · Zürich Nord</p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Professionelle Autoreinigung & Autoaufbereitung in Zürich Nord</h1>
            <div className="mt-5 space-y-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>Innenreinigung, Aussenreinigung, Lackpolitur, Leasingrückgabe & MFK-Vorbereitung – sorgfältige Handarbeit, hochwertige Mittel, dauerhafter Werterhalt.</p>
              <p>Ideal erreichbar aus Oerlikon, Schwamendingen, Seebach, Opfikon, Glattbrugg und Wallisellen.</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <GoogleReviewBadge compact />
            </div>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">Jetzt buchen <ArrowRight className="h-5 w-5" /></a>
              <a href="#offerte" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 font-bold transition hover:border-primary hover:text-primary">Preise berechnen</a>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative hidden sm:block">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="grid grid-cols-2 gap-3">
              {[images.heroRim, images.heroInterior, images.heroPolish, images.ctaExterior].map((image, index) => (
                <img key={image} src={image} alt="Autoreinigung Zürich Nord Fahrzeugpflege" className={`h-52 w-full rounded-[1.5rem] object-cover shadow-xl lg:h-60 ${index === 1 ? "mt-8" : ""}`} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[[Car,"Seit 2020","in Zürich-Schwamendingen"],[Users,"5-köpfiges Team","Handarbeit, kein Automatikbetrieb"],[ShieldCheck,"MFK-bereit","Motorraum, Chassis und Unterboden"],[Gauge,"Werterhalt","für Privat- und Firmenfahrzeuge"]].map(([Icon,title,text]) => (
              <Reveal key={title} className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm md:rounded-[2rem] md:p-6"><Icon className="mb-3 h-6 w-6 text-primary md:mb-5 md:h-7 md:w-7" /><p className="font-heading text-lg font-extrabold md:text-2xl">{title}</p><p className="mt-1 text-xs text-muted-foreground md:mt-2 md:text-sm">{text}</p></Reveal>
            ))}
          </div>
          <div className="mt-8">
            <TrustBadges />
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Dienstleistungen" title="Was wir für Ihr Fahrzeug tun" text="Innenreinigung, Aussenreinigung, Politur – alles per Hand, mit hochwertigen Mitteln und mit sichtbarem Ergebnis." />
          <div className="mt-10"><ServiceCards /></div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img src={images.trust} alt="Fahrzeug nach der professionellen Reinigung in Zürich Nord" className="w-full rounded-[2rem] shadow-2xl object-cover" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeader eyebrow="Warum Kunden uns vertrauen" title="Jedes Fahrzeug per Hand – kein Automatikbetrieb, keine Kratzer." text="Wir behandeln jedes Fahrzeug individuell: mit den richtigen Mitteln, der nötigen Zeit und dem Anspruch, dass das Ergebnis stimmt." />
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">Nach vier Jahren und tausenden gereinigten Fahrzeugen wissen wir, worauf es ankommt. Wir reinigen nicht schnell – wir reinigen richtig. Für Kunden aus Zürich Nord und der ganzen Region.</p>
          </Reveal>
        </div>
      </section>

      <section id="offerte" className="bg-secondary/70 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Offerte berechnen" title="Preise in Sekunden berechnen" text="Fahrzeugtyp, Service und Add-ons auswählen – dann direkt buchen oder per WhatsApp anfragen." />
          <div className="mt-10"><QuoteCalculator /></div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Google Bewertungen" title="Das sagen unsere Kunden auf Google" />
          <div className="mt-10"><Testimonials /></div>
        </div>
      </section>
      <section className="bg-secondary/70 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="FAQ" title="Häufige Fragen" />
          <div className="mt-10"><FAQAccordion /></div>
        </div>
      </section>
      {/* Interne Verlinkung: Dienstleistungen */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Alle Dienstleistungen" title="Das gesamte Leistungsangebot" text="Von der Innenreinigung über die Handwäsche bis zur Keramikversiegelung." />
          <div className="mt-8 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {seoServices.map((svc) => {
              const hasDetail = services.some((s) => s.slug === svc.slug);
              return (
                <Reveal key={svc.slug}>
                  <Link to={hasDetail ? `/dienstleistungen/${svc.slug}` : "/dienstleistungen"} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {svc.name}
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interne Verlinkung: Regionen */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Unsere Regionen" title="Autoreinigung für die ganze Region Zürich Nord" text="Kunden aus diesen Gemeinden und Stadtteilen kommen regelmässig zu uns." />
          <div className="mt-8 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {standorte.map((ort) => (
              <Reveal key={ort.slug}>
                <Link to={`/standorte/${ort.slug}`} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="truncate">{ort.nameFull}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-foreground p-8 text-background shadow-2xl md:rounded-[2.5rem] md:p-14">
          <Sparkles className="mb-5 h-7 w-7 text-primary md:mb-6 md:h-8 md:w-8" />
          <h2 className="font-heading text-3xl font-extrabold leading-tight md:text-5xl">Termin sichern – in unter 60 Sekunden</h2>
          <p className="mt-4 text-base text-background/75 md:text-lg">Termin wählen, Fahrzeug bringen – wir kümmern uns um den Rest.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5">Online buchen <ArrowRight className="h-5 w-5" /></a>
          </div>
        </div>
      </section>
    </>
  );
}