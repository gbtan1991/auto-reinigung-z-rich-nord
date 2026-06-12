import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { faqs, bookingUrl } from "@/data/siteContent";
import { seoServices } from "@/data/seoData";

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ – Häufige Fragen | Autoreinigung Zürich-Nord"
        description="Häufige Fragen zur Autoreinigung Zürich-Nord: Preise, Dauer, Fahrzeugtypen, Leasingrückgabe, MFK, Online-Buchung und mehr."
        path="/faq"
        type="faq"
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <Breadcrumb items={[{ label: "FAQ" }]} />

      {/* Hero */}
      <section className="px-5 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <HelpCircle className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Häufige Fragen
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Antworten auf die wichtigsten Fragen rund um unsere Dienstleistungen, Preise, Standorte und Buchung.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Allgemeine FAQs */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader center eyebrow="Allgemein" title="Fragen zur Autoreinigung" />
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
            {faqs.map((item) => (
              <div key={item.q} className="p-5">
                <h2 className="font-bold text-base sm:text-lg">{item.q}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dienstleistungs-FAQs */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader center eyebrow="Dienstleistungen" title="Fragen zu einzelnen Leistungen" text="Detaillierte Informationen zu jeder Dienstleistung finden Sie auf den jeweiligen Dienstleistungsseiten." />
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {seoServices.map((svc) => (
              <Link
                key={svc.slug}
                to={`/dienstleistungen/${svc.slug}`}
                className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 hover:border-primary hover:text-primary transition-colors group"
              >
                <span className="font-bold text-sm">{svc.name}</span>
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Noch Fragen? Wir helfen gerne.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Rufen Sie uns an oder buchen Sie direkt online – wir sind für Sie da.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin online buchen <ArrowRight className="h-5 w-5" />
              </a>
              <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}