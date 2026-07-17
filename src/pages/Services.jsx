import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import ServiceCards from "@/components/site/ServiceCards";
import Testimonials from "@/components/site/Testimonials";
import { bookingUrl, images, addonSlugs } from "@/data/siteContent";
import { seoServices } from "@/data/seoData";

export default function Services() {
  return (
    <>
      <SEO
        title="Dienstleistungen Autoreinigung Zürich Nord | Alle Services"
        description="Alle Dienstleistungen von Autoreinigung Zürich-Nord: Innenreinigung, Aussenreinigung, Politur, Leasingrückgabe, MFK, Keramikversiegelung. Preise & Online-Buchung."
        path="/dienstleistungen"
        image={images.booking}
        type="service"
        breadcrumbs={[{ label: "Dienstleistungen" }]}
      />
      <Breadcrumb items={[{ label: "Dienstleistungen" }]} />
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">Online buchen</p><h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">Nicht lange warten: sekundenschnell Termin sichern</h1><a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground">Jetzt buchen</a></div><img src={images.booking} alt="Autoreinigung Zürich Nord Innenreinigung" className="rounded-[2.5rem] shadow-2xl" /></div></section>
      <section className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Unsere Dienstleistungen" title="Innenreinigung, Aussenreinigung und Politur" text="Jede Dienstleistung wird per Hand ausgeführt – mit hochwertigen Mitteln, gründlich und materialschonend." /><div className="mt-10"><ServiceCards /></div></div></section>
      {/* Alle SEO-Dienstleistungsseiten intern verlinken */}
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Alle Dienstleistungen" title="Weitere Leistungen im Überblick" />
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {seoServices.filter((svc) => !addonSlugs.includes(svc.slug)).map((svc) => (
              <Link key={svc.slug} to={`/dienstleistungen/${svc.slug}`} className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 hover:border-primary hover:text-primary transition-colors group">
                <span className="font-bold text-sm">{svc.name}</span>
                <ArrowRight className="h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="Google Bewertungen" title="Was Kunden auf Google sagen" /><div className="mt-10"><Testimonials /></div></div></section>
    </>
  );
}