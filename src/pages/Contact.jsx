import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import { contact, images, whatsappUrl } from "@/data/siteContent";
import GoogleReviewBadge from "@/components/site/GoogleReviewBadge";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <SEO
        title="Kontakt | Autoreinigung Zürich-Nord"
        description="Kontaktieren Sie Autoreinigung Zürich-Nord an der Heerenwiesen 18, 8051 Zürich. Telefon, E-Mail, WhatsApp und Anfrageformular."
        path="/kontakt"
        image={images.ctaExterior}
        breadcrumbs={[{ label: "Kontakt" }]}
      />
      <Breadcrumb items={[{ label: "Kontakt" }]} />
      <section className="px-5 pt-6 pb-16 lg:px-8 lg:pt-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">Kontakt</h1>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span>
                  <b className="text-foreground">{contact.company}</b><br />
                  Heerenwiesen 18<br />
                  8051 Zürich
                </span>
              </p>
              <p className="flex gap-3"><Mail className="mt-1 h-5 w-5 text-primary" /> {contact.email}</p>
              <p className="flex gap-3"><Phone className="mt-1 h-5 w-5 text-primary" /> {contact.phone}<br />{contact.mobile}</p>
            </div>
            <div className="mt-8">
              <GoogleReviewBadge />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={whatsappUrl} className="inline-flex rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">
                WhatsApp Schnellkontakt
              </a>
              <a href="tel:+41445119490" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 font-bold transition hover:border-primary hover:text-primary">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
            <p className="mt-5 rounded-xl bg-secondary/70 p-4 text-sm leading-relaxed text-muted-foreground">
              <b className="text-foreground">Öffnungszeiten:</b><br />
              {contact.hours}
            </p>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              Beim Klick werden Daten (inkl. Telefonnummer) an WhatsApp/Meta (USA) übertragen.{" "}
              <Link to="/datenschutz" className="underline hover:text-primary transition-colors">Mehr Infos</Link>
            </p>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-[2rem] border border-border bg-card p-6 shadow-xl md:p-8"
          >
            <div className="grid gap-4">
              <input required placeholder="Ihr Name" className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Ihre E-Mail-Adresse" className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <input required placeholder="Betreff" className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <textarea placeholder="Ihre Nachricht (optional)" rows="6" className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <label className="hidden">Bitte lasse dieses Feld leer.<input name="website" tabIndex="-1" autoComplete="off" /></label>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground">
                <Send className="h-4 w-4" /> Senden
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Bearbeitung Ihrer Anfrage zu. Weitere Informationen finden Sie in unserer{" "}
              <Link to="/datenschutz" className="underline hover:text-primary transition-colors">Datenschutzerklärung</Link>.
            </p>
            {sent && (
              <p className="mt-4 flex items-center gap-2 font-bold text-primary">
                <CheckCircle2 className="h-5 w-5" /> Vielen Dank – wir melden uns so bald wie möglich bei Ihnen.
              </p>
            )}
          </form>
        </div>
      </section>
      <div className="px-5 pb-20 lg:px-8">
        <a href="https://maps.google.com/?q=Heerenwiesen+18,+8051+Zürich" target="_blank" rel="noreferrer"
          className="relative mx-auto block max-w-7xl rounded-[2rem] overflow-hidden shadow-xl h-80 md:h-96 cursor-pointer group">
          {/* Base map - detailed OpenStreetMap */}
          <img
            src="https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/9fd4b1fb1_map.jpg"
            alt="Karte Schwamendingen Zürich"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Pin overlay - semi-transparent, blended to show marker */}
          <img
            src="https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/a47cce46d_Screenshot-2021-03-02-at-102803.png"
            alt="Standort Autoreinigung Zürich-Nord"
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-80"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-end justify-center pb-5">
            <span className="bg-white/90 backdrop-blur-sm text-foreground text-sm font-semibold px-4 py-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity">
              In Google Maps öffnen ↗
            </span>
          </div>
        </a>
      </div>
    </>
  );
}