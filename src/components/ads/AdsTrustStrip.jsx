import { Hand, Users, MapPin, CalendarCheck } from 'lucide-react';
import AdsRating from '@/components/ads/AdsRating';
const facts = [[CalendarCheck,'Seit 2020'],[Users,'5-köpfiges Team'],[Hand,'Handarbeit'],[MapPin,'Zürich-Schwamendingen']];
export default function AdsTrustStrip() {
  return <section aria-label="Vertrauen und Standort" className="border-y border-border bg-background px-5 py-6 lg:px-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:justify-between"><AdsRating />{facts.map(([Icon,text]) => <div key={text} className="flex items-center gap-2 text-sm font-semibold"><Icon className="h-5 w-5 text-primary" />{text}</div>)}</div></section>;
}