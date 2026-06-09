import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, Send } from "lucide-react";
import { bookingUrl, whatsappUrl } from "@/data/siteContent";

const vehiclePrices = { Kleinwagen: 0, Limousine: 20, SUV: 45, Firmenfahrzeug: 35 };
const servicePrices = { Innenreinigung: 80, Aussenreinigung: 70, Politur: 350 };
const addons = { Tierhaarentfernung: 100, Desinfektion: 140, Unterbodenreinigung: 120, Nanoversiegelung: 180 };

export default function QuoteCalculator() {
  const [vehicle, setVehicle] = useState("Limousine");
  const [service, setService] = useState("Innenreinigung");
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);

  const total = useMemo(() => servicePrices[service] + vehiclePrices[vehicle] + selected.reduce((sum, item) => sum + addons[item], 0), [vehicle, service, selected]);
  const toggle = (item) => setSelected((current) => current.includes(item) ? current.filter((i) => i !== item) : [...current, item]);

  return (
    <div className="rounded-[2rem] border border-border bg-card p-5 shadow-xl md:p-8">
      <div className="mb-6 flex items-center gap-3"><div className="rounded-2xl bg-primary/10 p-3 text-primary"><Calculator /></div><div><h3 className="font-heading text-2xl font-extrabold">Offertenrechner</h3><p className="text-sm text-muted-foreground">Schnelle Anfrage mit Richtpreis.</p></div></div>
      <div className="grid gap-6 md:grid-cols-3">
        <div><p className="mb-3 text-sm font-bold">1. Fahrzeugtyp</p><div className="grid gap-2">{Object.keys(vehiclePrices).map((item) => <button key={item} onClick={() => setVehicle(item)} className={`rounded-2xl border px-4 py-3 text-left font-semibold transition ${vehicle === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/50"}`}>{item}</button>)}</div></div>
        <div><p className="mb-3 text-sm font-bold">2. Servicepaket</p><div className="grid gap-2">{Object.keys(servicePrices).map((item) => <button key={item} onClick={() => setService(item)} className={`rounded-2xl border px-4 py-3 text-left font-semibold transition ${service === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/50"}`}>{item}</button>)}</div></div>
        <div><p className="mb-3 text-sm font-bold">3. Add-ons</p><div className="grid gap-2">{Object.keys(addons).map((item) => <button key={item} onClick={() => toggle(item)} className={`rounded-2xl border px-4 py-3 text-left font-semibold transition ${selected.includes(item) ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:border-primary/50"}`}>{item}</button>)}</div></div>
      </div>
      <div className="mt-7 rounded-3xl bg-secondary p-5 md:flex md:items-center md:justify-between">
        <div><p className="text-sm font-bold text-muted-foreground">Geschätzter Startpreis</p><p className="font-heading text-4xl font-extrabold">ab CHF {total}.-</p></div>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row md:mt-0">
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">Termin buchen</a>
          <a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-bold">WhatsApp Anfrage</a>
        </div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
        <input required placeholder="Ihr Name" className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
        <input required type="email" placeholder="Ihre E-Mail-Adresse" className="rounded-2xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
        <input name="website" className="hidden" tabIndex="-1" autoComplete="off" />
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3 font-bold text-background"><Send className="h-4 w-4" /> Anfrage senden</button>
      </form>
      {sent && <p className="mt-4 flex items-center gap-2 text-sm font-bold text-primary"><CheckCircle2 className="h-4 w-4" /> Danke – Ihre Anfrage wurde vorbereitet. Wir melden uns schnellstmöglich.</p>}
    </div>
  );
}