import { Link } from "react-router-dom";
import { Star, ExternalLink, MessageCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import GoogleReviewBadge from "@/components/site/GoogleReviewBadge";
import { googleReviewUrl, whatsappUrl, bookingUrl, images } from "@/data/siteContent";

export default function Bewertungen() {
  return (
    <>
      <SEO
        title="Google Bewertungen | Autoreinigung Zürich-Nord – 4.6 ★"
        description="Echte Google Bewertungen der Autoreinigung Zürich-Nord. 4.6 Sterne – lesen Sie was unsere Kunden sagen und geben Sie Ihre eigene Bewertung ab."
        path="/bewertungen"
        image={images.heroRim}
      />
      <Breadcrumb items={[{ label: "Bewertungen" }]} />

      {/* Hero */}
      <section className="px-5 pt-6 pb-12 lg:px-8 lg:pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Das sagen unsere Kunden auf Google
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 max-w-2xl mx-auto">
            Lesen Sie ungefilterte Bewertungen auf Google – oder geben Sie Ihre eigene Bewertung ab.
          </p>
          <div className="mt-8 flex justify-center">
            <GoogleReviewBadge />
          </div>
        </div>
      </section>

      {/* Google Maps Embed mit Bewertungen */}
      <section className="px-5 pb-10 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl">
            <iframe
              title="Google Bewertungen Autoreinigung Zürich-Nord"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.7!2d8.5481!3d47.4114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa1e58a7178ff%3A0xc17f4f43e6e229c2!2sAutoreinigung%20Z%C3%BCrich%20Nord!5e0!3m2!1sde!2sch!4v1718000000000!5m2!1sde!2sch"
              className="h-[500px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Über den Marker im Kartenausschnitt lassen sich alle Google Bewertungen direkt einsehen.
          </p>
        </div>
      </section>

      {/* Bewertung abgeben */}
      <section className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-secondary/70 p-8 text-center md:p-12">
          <Star className="mx-auto mb-4 h-8 w-8 text-[#F9AB00]" />
          <h2 className="font-heading text-2xl font-extrabold md:text-3xl">Ihre Bewertung zählt</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Helfen Sie anderen Kunden mit Ihrer ehrlichen Rückmeldung – und zeigen Sie uns, was wir noch besser machen können.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5"
            >
              <ExternalLink className="h-5 w-5" /> Jetzt auf Google bewerten
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-4 font-bold transition hover:border-primary hover:text-primary"
            >
              Termin buchen
            </a>
          </div>
          <div className="mt-5 flex flex-col items-center gap-2">
            <Link to="/bewertung" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowRight className="h-4 w-4" /> Bewertung direkt an uns senden (intern)
            </Link>
            <p className="text-sm text-muted-foreground">
              Oder direkt per WhatsApp:{" "}
              <a href={whatsappUrl} className="inline-flex items-center gap-1 font-semibold text-primary underline">
                <MessageCircle className="h-4 w-4" /> +41 79 741 56 58
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}