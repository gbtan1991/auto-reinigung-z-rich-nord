import { Car, CalendarDays, Sparkles } from 'lucide-react';
import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
const steps = [[Sparkles,'Service auswählen','Reinigung oder Paket für Ihr Fahrzeug wählen.'],[CalendarDays,'Termin online buchen','Verfügbaren Termin im Calenso-Portal wählen und Buchung abschliessen.'],[Car,'Fahrzeug vorbeibringen','Zum gebuchten Termin an die Heerenwiesen 18 in Zürich Nord kommen.']];
export default function AdsSteps() {
  return <AdsSection tinted eyebrow="Einfach buchen" title="In 3 Schritten zum sauberen Auto">
    <div className="grid gap-6 md:grid-cols-3">{steps.map(([Icon,title,text],i) => <div key={title} className="rounded-2xl border border-border bg-background p-6"><div className="mb-5 flex items-center justify-between"><span className="font-heading text-4xl font-extrabold text-primary/25">0{i+1}</span><Icon className="h-7 w-7 text-primary" /></div><h3 className="font-heading text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div><BookingCTA placement="steps" className="mt-8">Termin auswählen</BookingCTA>
  </AdsSection>;
}