import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { contact, localBusinessSchema } from '@/data/siteContent';
import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
import { trackAds } from '@/components/ads/adsTracking';
export default function AdsLocation() {
  const [map, setMap] = useState(false);
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
  return <AdsSection tinted eyebrow="Ihr Standort" title="Autoreinigung direkt in Zürich Nord">
    <div className="grid gap-8 lg:grid-cols-2"><div><h3 className="font-heading text-xl font-bold">{contact.company}</h3><p className="mt-2 text-sm text-muted-foreground">{localBusinessSchema.legalName}</p><p className="mt-6 flex items-center gap-2 font-semibold"><MapPin className="h-5 w-5 text-primary" />{contact.address}</p><p className="mt-4 flex items-start gap-2 text-sm leading-6"><Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />{contact.hours}</p><p className="mt-5 text-sm leading-6 text-muted-foreground">Gut erreichbar aus Zürich, Oerlikon, Schwamendingen, Seebach, Opfikon, Glattbrugg, Wallisellen, Dübendorf und Dietlikon.</p><BookingCTA placement="location" className="mt-6">Termin in Zürich Nord buchen</BookingCTA></div>
      <div className="overflow-hidden rounded-2xl border border-border bg-background">{map ? <iframe title="Standort Heerenwiesen 18 in Zürich" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0" /> : <div className="flex h-80 flex-col items-center justify-center p-6 text-center"><MapPin className="mb-4 h-10 w-10 text-primary" /><p className="font-heading font-bold">Heerenwiesen 18 · 8051 Zürich</p><button onClick={() => {setMap(true);trackAds('map_click',{placement:'location'});}} className="mt-5 min-h-12 rounded-full border border-border px-6 text-sm font-semibold">Google-Karte anzeigen</button><p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">Beim Laden der Karte werden Daten an Google übertragen.</p></div>}</div>
    </div>
  </AdsSection>;
}