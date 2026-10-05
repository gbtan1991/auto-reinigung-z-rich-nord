import { Check } from 'lucide-react';
import { contact } from '@/data/siteContent';
import { offer } from '@/components/ads/adsContent';
import BookingCTA from '@/components/ads/BookingCTA';
import AdsRating from '@/components/ads/AdsRating';
export default function AdsFinalCTA() {
  return <section className="bg-accent px-5 py-16 text-center lg:px-8 lg:py-20"><div className="mx-auto max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Ihr nächster Schritt</p><h2 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl">Bereit für ein sauberes Auto?</h2><p className="mt-5 leading-7 text-muted-foreground">Jetzt {offer.name} {offer.price} sichern oder das passende Reinigungspaket online buchen.</p><div className="my-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">{['Online Termin auswählen','Transparente Paketpreise','Professionelle Handarbeit','Zürich Nord'].map(t => <span key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{t}</span>)}</div><BookingCTA placement="final" className="w-full sm:w-auto sm:px-10">JETZT TERMIN BUCHEN</BookingCTA><p className="mt-4 text-xs text-muted-foreground">Herbstangebot {offer.tax}. Reguläre Paketpreise exkl. MwSt.</p><div className="mt-6"><AdsRating /></div><p className="mt-3 text-xs text-muted-foreground">{contact.address}</p></div></section>;
}