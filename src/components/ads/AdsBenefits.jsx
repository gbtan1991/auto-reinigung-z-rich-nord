import { Hand, ShieldCheck, Users, MapPin } from 'lucide-react';
import { images } from '@/data/siteContent';
import AdsSection from '@/components/ads/AdsSection';
const items = [
  [Hand, 'Handarbeit statt Waschstrasse', 'Jedes Fahrzeug wird individuell von Hand gereinigt.'],
  [ShieldCheck, 'Materialschonende Pflege', 'Hochwertige Mittel für Innenraum, Oberflächen und Fahrzeuglack.'],
  [Users, 'Seit 2020 in Zürich', 'Ein 5-köpfiges Team für Privat- und Firmenfahrzeuge.'],
  [MapPin, 'Zürich-Schwamendingen', 'Fahrzeugpflege direkt an der Heerenwiesen 18.'],
];
export default function AdsBenefits() {
  return <AdsSection tinted eyebrow="Warum Zürich Nord?" title="Sorgfältige Arbeit. Ein gepflegtes Fahrzeug.">
    <div className="grid items-center gap-8 lg:grid-cols-2"><img src={images.trust} alt="Fahrzeug nach der Reinigung bei Autoreinigung Zürich Nord" loading="lazy" decoding="async" width="900" height="675" className="aspect-[4/3] w-full rounded-2xl object-cover" /><div className="grid gap-6 sm:grid-cols-2">{items.map(([Icon,title,text]) => <div key={title}><Icon className="mb-3 h-7 w-7 text-primary" /><h3 className="font-heading font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div>
  </AdsSection>;
}