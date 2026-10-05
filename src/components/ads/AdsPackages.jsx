import { Check } from 'lucide-react';
import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
import { categories } from '@/components/ads/adsContent';
export default function AdsPackages() {
  return <AdsSection id="pakete" eyebrow="Pakete & Preise" title="Ihr Paket. Ihr Termin." text="Alle bestehenden Pakete im direkten Vergleich. Preise ab dem angegebenen Betrag, exkl. MwSt.; abhängig von Fahrzeuggrösse, Zustand und Leistungsumfang.">
    <div className="space-y-12">{categories.map(s => <div key={s.slug}><h3 className="mb-5 font-heading text-xl font-extrabold">{s.name}</h3><div className="grid gap-4 md:grid-cols-3">{s.packages.map(p => <article key={p.name} className="flex flex-col rounded-2xl border border-border bg-card p-6"><p className="text-sm font-bold uppercase tracking-wider text-primary">{p.name}</p><p className="mt-3 font-heading text-3xl font-extrabold">{p.price}</p><p className="mt-2 text-xs text-muted-foreground">exkl. MwSt.</p><ul className="my-6 flex-1 space-y-3">{p.features.map(f => <li key={f} className="flex gap-2 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{f}</span></li>)}</ul><BookingCTA href={p.bookingUrl} placement="package" service={s.slug} packageName={p.name} className="w-full">Paket buchen</BookingCTA></article>)}</div></div>)}</div>
  </AdsSection>;
}