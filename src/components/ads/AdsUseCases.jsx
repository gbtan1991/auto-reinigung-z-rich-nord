import { bookingUrl, calensoLinks } from '@/data/siteContent';
import { useCases } from '@/components/ads/adsContent';
import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
export default function AdsUseCases() {
  return <AdsSection eyebrow="Passend zu Ihrem Anlass" title="Fahrzeugaufbereitung mit einem klaren Ziel.">
    <div className="grid gap-4 sm:grid-cols-2">{useCases.map(([title,text]) => <article key={title} className="rounded-2xl border border-border p-6"><h3 className="font-heading text-xl font-bold">{title}</h3><p className="my-4 text-sm leading-6 text-muted-foreground">{text}</p><BookingCTA placement="use_case" service={title} href={title === 'MFK-Vorbereitung' ? calensoLinks.aussenreinigung.motorChassisMfk : bookingUrl}>Passenden Termin buchen</BookingCTA></article>)}</div>
    <div className="mt-5 rounded-2xl bg-secondary p-6"><h3 className="font-heading font-bold">Lackschutz mit Keramikversiegelung</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Weitere Lackpflege mit Reinigung, Politur und keramischer Schutzschicht – eine bestehende Leistung unserer Fahrzeugaufbereitung.</p><BookingCTA placement="ceramic" service="keramikversiegelung" className="mt-4">Termin online buchen</BookingCTA></div>
  </AdsSection>;
}