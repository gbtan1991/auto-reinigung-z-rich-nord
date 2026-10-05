import { Plus } from 'lucide-react';
import { questions } from '@/components/ads/adsContent';
import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
export default function AdsFAQ() {
  return <AdsSection eyebrow="Vor der Buchung" title="Kurz beantwortet."><div className="max-w-3xl divide-y divide-border border-y border-border">{questions.map(f => <details key={f.q} className="group py-1"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 font-heading font-semibold [&::-webkit-details-marker]:hidden">{f.q}<Plus className="h-5 w-5 shrink-0 text-primary group-open:rotate-45" /></summary><p className="pb-5 text-sm leading-7 text-muted-foreground">{f.a}</p></details>)}</div><BookingCTA placement="faq" className="mt-8">Termin online buchen</BookingCTA></AdsSection>;
}