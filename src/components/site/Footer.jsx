import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Cookie, Mail, MapPin, Phone, Star } from "lucide-react";
import { bookingUrl, contact, googleReviewUrl, images, services } from "@/data/siteContent";
import { standorte } from "@/data/seoData";

export default function Footer() {
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  const reopenCookieBanner = () => {
    localStorage.removeItem("azn-cookies-v2");
    window.location.reload();
  };

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <img src="https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/564e5face_autoreinigung.png" alt="Autoreinigung Zürich-Nord Logo" className="mb-4 h-14 w-auto" />
            <p className="text-sm leading-7 text-muted-foreground">Professionelle Autoreinigung, Autoaufbereitung, Innenreinigung, Aussenreinigung und Politur in Zürich Nord – sorgfältig, materialschonend und werterhaltend.</p>
            <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
              <Star className="h-4 w-4 fill-primary-foreground" /> 4.6 ★ auf Google
            </a>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-base font-bold">Dienstleistungen</h3>
            <div className="flex flex-col gap-2.5">
              {services.map((service) => <Link key={service.slug} to={`/dienstleistungen/${service.slug}`} className="text-sm text-muted-foreground transition hover:text-primary">{service.eyebrow}</Link>)}
              <Link to="/dienstleistungen" className="text-sm text-muted-foreground transition hover:text-primary">Alle Dienstleistungen</Link>
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground transition hover:text-primary">Online buchen</a>
              <Link to="/jobs" className="text-sm text-muted-foreground transition hover:text-primary">Karriere</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-base font-bold">Regionen</h3>
            <div className="flex flex-col gap-2.5">
              {standorte.slice(0, 5).map((ort) => <Link key={ort.slug} to={`/standorte/${ort.slug}`} className="text-sm text-muted-foreground transition hover:text-primary">{ort.nameFull}</Link>)}
              <Link to="/standorte" className="text-sm text-muted-foreground transition hover:text-primary">Alle Regionen</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-heading text-base font-bold">Kontakt</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {contact.address}</p>
              <p className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {contact.email}</p>
              <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <span>{contact.phone}<br />{contact.mobile}</span></p>
              <p className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
      <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="block overflow-hidden border-y border-border">
        <img src={images.map} alt="Karte Autoreinigung Zürich-Nord Heerenwiesen 18" loading="lazy" className="h-40 w-full object-cover opacity-80 transition hover:opacity-100" />
      </a>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Autoreinigung Zürich Nord</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link>
          <Link to="/bewertungen" className="hover:text-primary transition-colors">Bewertungen</Link>
          <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          <button
            onClick={reopenCookieBanner}
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            <Cookie className="h-3.5 w-3.5" /> Cookie-Einstellungen
          </button>
        </div>
      </div>
    </footer>
  );
}