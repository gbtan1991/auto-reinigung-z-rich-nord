import { Check } from 'lucide-react';
import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
import { categories, benefits } from '@/components/ads/adsContent';
export default function AdsServices() {
  return <AdsSection id="services" eyebrow="Service auswählen" title="Welche Reinigung braucht Ihr Fahrzeug?" text="Wählen Sie Ihre Reinigung und buchen Sie direkt. Alle Paketvarianten finden Sie weiter unten.">
    <div className="grid gap-5 md:grid-cols-3">{categories.map(s => <article key={s.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <img src={s.cardImage} alt={s.name} loading="lazy" decoding="async" width="600" height="400" className="aspect-[3/2] w-full object-cover" />
      <div className="flex flex-1 flex-col p-6"><h3 className="font-heading text-xl font-bold">{s.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{s.summary}</p><p className="mt-5 font-heading text-2xl font-extrabold">{s.packages[0].price}</p><p className="mt-1 text-xs text-muted-foreground">Basic-Paket · exkl. MwSt.</p>
        <ul className="my-5 space-y-2">{benefits[s.slug].map(t => <li key={t} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{t}</li>)}</ul>
        <BookingCTA placement="service_card" service={s.slug} packageName="Basic" href={s.packages[0].bookingUrl} className="mt-auto w-full">{s.slug === 'politur' ? 'Politur' : s.name} buchen</BookingCTA>
      </div>
    </article>)}</div>
  </AdsSection>;
}