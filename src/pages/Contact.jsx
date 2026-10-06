import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import { contact, images, whatsappUrl } from "@/data/siteContent";
import GoogleReviewBadge from "@/components/site/GoogleReviewBadge";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      await base44.functions.invoke("submitEnquiry", form);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };
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
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-card p-6 shadow-xl md:p-8"
          >
            <div className="grid gap-4">
              <input required placeholder="Ihr Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <input required type="email" placeholder="Ihre E-Mail-Adresse" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <input required placeholder="Betreff" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <textarea placeholder="Ihre Nachricht (optional)" rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" />
              <label className="hidden">Bitte lasse dieses Feld leer.<input name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></label>
              <button disabled={sending} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground disabled:opacity-60">
                <Send className="h-4 w-4" /> {sending ? "Wird gesendet…" : "Senden"}
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
            {error && (
              <p className="mt-4 font-bold text-destructive">
                Da ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.
              </p>
            )}
          </form>
        </div>
      </section>
      <div className="px-5 pb-20 lg:px-8">
        <iframe
          title="Autoreinigung Zürich-Nord Standort"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.169837228736!2d8.566123315674805!3d47.40557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0b0e2f3b3b3%3A0x0!2sHeerenwiesen+18%2C+8051+Z%C3%BCrich!5e0!3m2!1sde!2sch!4v1234567890"
          className="mx-auto block h-80 md:h-96 w-full max-w-7xl rounded-[2rem] shadow-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}