import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Testimonials from "@/components/site/Testimonials";
import { bookingUrl, images, services, contact } from "@/data/siteContent";

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
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">{service.eyebrow}</p><h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">{service.title}</h1><div className="mt-8 space-y-5 text-lg leading-8 text-muted-foreground">{service.content.map((p) => <p key={p}>{p}</p>)}</div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">Termin buchen <ArrowRight className="h-5 w-5" /></a><Link to="/kontakt" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 font-bold">Frage stellen</Link></div></div><img src={service.image} alt={`${service.eyebrow} Zürich Nord`} className="rounded-[2.5rem] shadow-2xl" /></div></section>

      <section className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Unsere Packages" title={`${service.eyebrow} Preise & Pakete`} /><div className="mt-10 grid gap-5 lg:grid-cols-3">{service.packages.map((pkg) => <article key={pkg.name} className="rounded-[2rem] border border-border bg-card p-7 shadow-sm"><p className="font-heading text-2xl font-extrabold">{pkg.name}</p><p className="my-5 font-heading text-4xl font-extrabold text-primary">{pkg.price}</p><ul className="space-y-3">{pkg.features.map((feature) => <li key={feature} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {feature}</li>)}</ul></article>)}</div>{service.extras.length > 0 && <div className="mt-10 rounded-[2rem] border border-border bg-background p-7"><h2 className="font-heading text-3xl font-extrabold">Extras</h2><ul className="mt-5 grid gap-3 md:grid-cols-2">{service.extras.map((extra) => <li key={extra} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {extra}</li>)}</ul></div>}</div></section>

      {service.slug === "innenreinigung" && <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="Vorher / Nachher" title="Sichtbarer Unterschied" /><div className="mt-10 grid gap-5 md:grid-cols-2"><img src={images.before} alt="Vor der Innenreinigung" className="rounded-[2rem] shadow-xl" /><img src={images.after} alt="Nach der Innenreinigung" className="rounded-[2rem] shadow-xl" /></div></div></section>}
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="Referenzen" title="Was Kunden sagen" /><div className="mt-10"><Testimonials names={service.testimonials} /></div></div></section>
    </>
  );
}