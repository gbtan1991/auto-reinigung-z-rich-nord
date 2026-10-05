import { CheckCircle2 } from 'lucide-react';
import { images } from '@/data/siteContent';
import { offer } from '@/components/ads/adsContent';
import BookingCTA from '@/components/ads/BookingCTA';
export default function AdsOffer() {
  return <section id="herbstangebot" className="bg-primary px-5 py-14 text-primary-foreground lg:px-8 lg:py-20"><div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
    <div><span className="text-xs font-extrabold uppercase tracking-[0.2em]">{offer.name} · {offer.bookingName}</span><h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Jetzt Fahrzeug fit für den Herbst machen.</h2><p className="mt-4 leading-7 text-primary-foreground/90">Vier Leistungen in einem Angebot: innen sauber, aussen gepflegt und Gerüche an der Quelle behandeln.</p>
      <ul className="my-6 space-y-3">{offer.items.map(t => <li key={t} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0" />{t}</li>)}</ul>
      <div className="rounded-2xl bg-background p-6 text-foreground"><p className="font-heading text-3xl font-extrabold">{offer.price}</p><p className="mt-2 text-xs text-muted-foreground">{offer.tax}</p><BookingCTA href={offer.url} service="herbstangebot" placement="offer" className="mt-5 w-full sm:w-auto">Herbst-Aktion sichern</BookingCTA><p className="mt-3 text-xs leading-5 text-muted-foreground">Termin nach Verfügbarkeit im bestehenden Buchungsportal auswählen. Das Angebot ist dort als «Herbstangebot» hinterlegt.</p></div>
    </div><img src={images.heroInterior} alt="Professionelle Innenreinigung – Bestandteil des Herbstangebots" width="900" height="1050" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-3xl object-cover lg:aspect-[4/5]" />
  </div></section>;
}