import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { bookingUrl, contact, googleReviewUrl, images, services } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr_0.85fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-primary"><Star className="h-4 w-4 fill-primary" /> Google Bewertungs Widget</div>
          <img src="https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/564e5face_autoreinigung.png" alt="Autoreinigung Zürich-Nord Logo" className="h-20 w-auto" />
          <p className="mt-4 max-w-xl text-muted-foreground">Professionelle Autoreinigung, Autoaufbereitung, Innenreinigung, Aussenreinigung und Politur in Zürich Nord – sorgfältig, materialschonend und werterhaltend.</p>
          <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">4.9 Sterne auf Google ansehen</a>
        </div>
        <div>
          <h3 className="mb-5 font-heading text-lg font-bold">Dienstleistungen</h3>
          <div className="grid gap-3">
            {services.map((service) => <Link key={service.slug} to={`/service/${service.slug}`} className="text-muted-foreground transition hover:text-primary">{service.eyebrow}</Link>)}
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-primary">Online buchen</a>
            <Link to="/jobs" className="text-muted-foreground transition hover:text-primary">Karriere</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-heading text-lg font-bold">Kontakt</h3>
          <div className="space-y-3 text-muted-foreground">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-primary" /> {contact.address}</p>
            <p className="flex gap-3"><Mail className="mt-1 h-4 w-4 text-primary" /> {contact.email}</p>
            <p className="flex gap-3"><Phone className="mt-1 h-4 w-4 text-primary" /> {contact.phone}<br />{contact.mobile}</p>
            <p className="flex gap-3"><Clock className="mt-1 h-4 w-4 text-primary" /> {contact.hours}</p>
          </div>
        </div>
      </div>
      <a href={googleReviewUrl} target="_blank" rel="noreferrer" className="block overflow-hidden border-y border-border bg-background">
        <img src={images.map} alt="Karte Autoreinigung Zürich-Nord Heerenwiesen 18" loading="lazy" className="h-48 w-full object-cover opacity-90" />
      </a>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© Autoreinigung Zuerich Nord</p>
        <div className="flex gap-5"><Link to="/kontakt">Kontakt</Link><Link to="/impressum">Impressum</Link><Link to="/datenschutz">Datenschutz</Link></div>
      </div>
    </footer>
  );
}