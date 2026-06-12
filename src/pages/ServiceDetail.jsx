import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Testimonials from "@/components/site/Testimonials";
import Reveal from "@/components/site/Reveal";
import { bookingUrl, images, services, contact } from "@/data/siteContent";
import { standorte, seoServices, landingpages } from "@/data/seoData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug) || services[0];

  return (
    <>
      <SEO
        title={`${service.eyebrow} Zürich Nord | Autoreinigung Zürich-Nord`}
        description={service.summary.slice(0, 155)}
        path={`/service/${service.slug}`}
        image={service.image}
        type="service"
        serviceName={service.eyebrow}
        breadcrumbs={[
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: service.eyebrow },
        ]}
      />
      <Breadcrumb items={[
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: service.eyebrow },
      ]} />

      {/* Hero */}
      <section className="px-5 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">{service.eyebrow}</p>
              <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{service.title}</h1>
              <div className="mt-5 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {service.content.map((p) => <p key={p}>{p}</p>)}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                  Termin buchen <ArrowRight className="h-5 w-5" />
                </a>
                <Link to="/kontakt" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                  Frage stellen
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <img src={service.image} alt={`${service.eyebrow} Zürich Nord`} className="w-full rounded-[2rem] object-cover shadow-2xl" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Unsere Packages" title={`${service.eyebrow} – Preise & Pakete`} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.packages.map((pkg) => (
              <article key={pkg.name} className="flex flex-col rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-heading text-xl font-extrabold">{pkg.name}</p>
                <p className="my-4 font-heading text-3xl font-extrabold text-primary">{pkg.price}</p>
                <ul className="flex-1 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90">
                  Buchen <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          {service.extras.length > 0 && (
            <div className="mt-8 rounded-[1.75rem] border border-border bg-background p-6">
              <h2 className="font-heading text-2xl font-extrabold">Extras & Zusatzleistungen</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.extras.map((extra) => (
                  <li key={extra} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {extra}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Before/After (Innenreinigung only) */}
      {service.slug === "innenreinigung" && (
        <section className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader center eyebrow="Vorher / Nachher" title="Sichtbarer Unterschied" />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Vorher</p>
                <img src={images.before} alt="Vor der Innenreinigung" className="w-full rounded-[1.75rem] shadow-xl" />
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Nachher</p>
                <img src={images.after} alt="Nach der Innenreinigung" className="w-full rounded-[1.75rem] shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Referenzen" title="Was Kunden sagen" />
          <div className="mt-10"><Testimonials names={service.testimonials} /></div>
        </div>
      </section>

      {/* Cross-Links: verwandte SEO-Seiten, Standorte & Money Pages */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Mehr erfahren" title={`${service.eyebrow} – alle Details & Standorte`} />

          {/* Verwandte SeoService-Seiten */}
          {(() => {
            const relatedSeo = seoServices.filter((s) => s.slug === service.slug);
            return relatedSeo.length > 0 ? (
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Ausführliche Infos</p>
                <div className="flex flex-wrap gap-2">
                  {relatedSeo.map((s) => (
                    <Link key={s.slug} to={`/dienstleistung/${s.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null;
          })()}

          {/* Verwandte Dienstleistungen (andere services) */}
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Verwandte Dienstleistungen</p>
            <div className="flex flex-wrap gap-2">
              {services.filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.slug} to={`/service/${s.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                  {s.eyebrow}
                </Link>
              ))}
            </div>
          </div>

          {/* Relevante Money Pages */}
          {(() => {
            const relatedLPs = landingpages.filter((lp) => lp.serviceSlug === service.slug);
            return relatedLPs.length > 0 ? (
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Nach Standort</p>
                <div className="flex flex-wrap gap-2">
                  {relatedLPs.map((lp) => (
                    <Link key={`${lp.serviceSlug}-${lp.ortSlug}`} to={`/lp/${lp.serviceSlug}/${lp.ortSlug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                      {lp.ortName}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null;
          })()}

          {/* Standorte */}
          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Standorte in der Region</p>
            <div className="flex flex-wrap gap-2">
              {standorte.slice(0, 6).map((ort) => (
                <Link key={ort.slug} to={`/standorte/${ort.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                  {ort.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div className="mt-6">
            <Link to="/kontakt" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              <ArrowRight className="h-4 w-4" /> Fragen? Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}