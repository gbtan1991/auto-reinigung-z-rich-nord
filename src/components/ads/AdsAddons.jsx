import AdsSection from '@/components/ads/AdsSection';
import BookingCTA from '@/components/ads/BookingCTA';
import { categories } from '@/components/ads/adsContent';
export default function AdsAddons() {
  return <AdsSection tinted eyebrow="Zusatzleistungen" title="Gezielt ergänzen, was Ihr Auto braucht." text="Die vorhandenen Zusatzleistungen können Sie im bestehenden Buchungsportal auswählen. Keine neue Buchungssoftware, keine separate Anfrage.">
    <div className="grid gap-5 lg:grid-cols-3">{categories.map(s => <div key={s.slug} className="rounded-2xl border border-border bg-background p-5"><h3 className="mb-4 font-heading font-bold">{s.name}</h3><ul className="divide-y divide-border">{s.addons.map(a => <li key={a.name} className="flex items-start justify-between gap-4 py-3 text-sm"><span>{a.name}</span><span className="shrink-0 font-semibold">ab CHF {a.price}.–</span></li>)}</ul><BookingCTA placement="addons" className="mt-5 w-full" service={s.slug}>Termin online buchen</BookingCTA></div>)}</div>
    <p className="mt-4 text-xs leading-5 text-muted-foreground">Zusatzleistungen: exkl. MwSt. gemäss Website. Verfügbare Kombinationen und Termine werden im Buchungsportal angezeigt.</p>
    <details className="mt-6 rounded-2xl border border-border bg-background p-5"><summary className="cursor-pointer py-1 font-semibold">Weitere Pflege- und Reparaturleistungen</summary><div className="mt-4 grid gap-5 sm:grid-cols-2">{categories.filter(s => s.extras.length).map(s => <div key={s.slug}><h4 className="font-bold">{s.name}</h4><ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">{s.extras.map(e => <li key={e}>{e}</li>)}</ul></div>)}</div><p className="mt-3 text-xs text-muted-foreground">Leistungen nach Aufwand, exkl. MwSt.</p></details>
  </AdsSection>;
}