import { Check, MapPin } from 'lucide-react';
import { images, contact } from '@/data/siteContent';
import { offer } from '@/components/ads/adsContent';
import BookingCTA from '@/components/ads/BookingCTA';
import AdsRating from '@/components/ads/AdsRating';
export default function AdsHero({ bookingOnly = false }) {
  return <section className="overflow-hidden bg-secondary px-5 pb-10 pt-8 sm:py-14 lg:px-8 lg:py-16">
    <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.08fr_1fr] lg:gap-12">
      <div>
        <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"><MapPin className="h-4 w-4" /> {bookingOnly ? 'Herbst-Aktion · Zürich Nord' : 'Zürich Nord · Seit 2020'}</p>
        <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-5xl">{bookingOnly ? <><span className="text-primary">Herbst-Aktion:</span> Ihr Auto wieder sauber – innen und aussen.</> : <>Professionelle Autoreinigung in <span className="text-primary">Zürich Nord.</span></>}</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{bookingOnly ? 'Wieder gerne einsteigen statt sich über Schmutz und Gerüche ärgern: Premium-Innenreinigung, Handwäsche, Felgenwäsche und Geruchsentfernung mit Desinfektion – im Herbst-Paket ab CHF 399.– inkl. MwSt. Sorgfältige Handarbeit in Zürich Nord. Wählen Sie jetzt Ihren Termin online.' : 'Ein sauberer Innenraum. Gepflegte Oberflächen. Glänzender Lack. Innenreinigung, Aussenreinigung und Fahrzeugaufbereitung – sorgfältig von Hand.'}</p>
        <div className="mt-6 rounded-2xl border border-primary/25 bg-background p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-accent px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary">{offer.name}</span><strong className="font-heading text-xl">{offer.price}</strong></div>
          <p className="mt-3 text-sm font-semibold leading-6">Premium-Innenreinigung + Basic Aussenreinigung + Geruchsentfernung & Desinfektion + Felgenwäsche</p>
          <p className="mt-2 text-xs text-muted-foreground">{offer.tax}</p>
        </div>
        <BookingCTA href={offer.url} service="herbstangebot" placement="hero" className="mt-5 w-full sm:w-auto">Herbst-Aktion sichern & Termin buchen</BookingCTA>
        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold sm:text-sm">{['Professionelle Handarbeit', 'Keine automatische Waschstrasse', 'Transparente Paketpreise', 'Direkte Online-Buchung'].map(t => <li key={t} className="flex items-start gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{t}</li>)}</ul>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"><AdsRating /><span className="text-xs text-muted-foreground">{contact.address}</span></div>
      </div>
      <div className="relative"><img src={images.heroPolish} alt="Professionelle Lackpflege bei Autoreinigung Zürich Nord" width="960" height="1100" fetchPriority="high" decoding="async" className="aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-[4/5]" /><div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/95 p-4 shadow-lg"><p className="font-heading font-bold">Handarbeit. Kein Automatikbetrieb.</p><p className="mt-1 text-xs text-muted-foreground">Für Privatfahrzeuge, Firmenwagen und Leasingfahrzeuge.</p></div></div>
    </div>
  </section>;
}