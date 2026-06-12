import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
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
        image={images.map}
      />
      <section className="px-5 py-20 lg:px-8">
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
              <a href={contact.phone} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 font-bold transition hover:border-primary hover:text-primary">
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
      <a href="https://g.page/autoreinigungzuerichnord" target="_blank" rel="noreferrer" className="block px-5 pb-20 lg:px-8">
        <img src={images.map} alt="Google Karte Autoreinigung Zürich-Nord" className="mx-auto max-h-96 w-full max-w-7xl rounded-[2rem] object-cover shadow-xl" />
      </a>
    </>
  );
}