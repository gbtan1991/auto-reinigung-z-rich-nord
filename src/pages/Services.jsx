import SEO from "@/components/site/SEO";
import SectionHeader from "@/components/site/SectionHeader";
import ServiceCards from "@/components/site/ServiceCards";
import Testimonials from "@/components/site/Testimonials";
import { bookingUrl, images } from "@/data/siteContent";

export default function Services() {
  return (
    <>
      <SEO title="Dienstleistungen | Autoreinigung Zürich-Nord" description="Innenreinigung, Aussenreinigung und Politur in Zürich Nord – professionelle Fahrzeugpflege mit Packages, Extras und Online-Buchung." path="/dienstleistungen" image={images.booking} />
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">Online buchen</p><h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">Nicht lange warten: sekundenschnell Termin sichern</h1><a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground">Jetzt buchen</a></div><img src={images.booking} alt="Autoreinigung Zürich Nord Innenreinigung" className="rounded-[2.5rem] shadow-2xl" /></div></section>
      <section className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Unsere Dienstleistungen" title="Innenreinigung, Aussenreinigung und Politur" text="Die vollständigen bestehenden Service-Inhalte, Preise, Packages und Extras modern strukturiert." /><div className="mt-10"><ServiceCards /></div></div></section>
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionHeader center eyebrow="Bewertungen" title="Kunden berichten" /><div className="mt-10"><Testimonials names={["Grazia Sclaverano", "Sandra Stierli", "Ivasto Heizungen GmbH", "Andreas Stofer"]} /></div></div></section>
    </>
  );
}