import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, Send } from "lucide-react";
import { bookingUrl, calensoLinks } from "@/data/siteContent";

const vehiclePrices = { Kleinwagen: 0, Limousine: 20, SUV: 45, Firmenfahrzeug: 35 };
const servicePrices = { Innenreinigung: 99, Aussenreinigung: 99, Politur: 419 };
const serviceBookingUrls = {
  Innenreinigung: calensoLinks.innenreinigung.beratung,
  Aussenreinigung: calensoLinks.aussenreinigung.beratung,
  Politur: calensoLinks.politur.beratung,
};

const addons = {
  Tierhaarentfernung: 100,
  Desinfektion: 149,
  Unterbodenreinigung: 120,
  Nanoversiegelung: 180,
  Lederpflege: 179,
  "Sitze schamponieren": 169,
  "Cabrio-Dach versiegeln": 149,
  "Motorraum reinigen": 79,
  "Motor-/Chassis MFK": 169,
  "Felgenwäsche (abmontiert)": 49,
  "Felgen-Politur": 149,
  Versiegelung: 149,
};

export default function QuoteCalculator() {
  const [vehicle, setVehicle] = useState("Limousine");
  const [service, setService] = useState("Innenreinigung");
  const [selected, setSelected] = useState([]);
  const [sent, setSent] = useState(false);

  const total = useMemo(() => servicePrices[service] + vehiclePrices[vehicle] + selected.reduce((sum, item) => sum + addons[item], 0), [vehicle, service, selected]);
  const toggle = (item) => setSelected((current) => current.includes(item) ? current.filter((i) => i !== item) : [...current, item]);

  const bookingLink = serviceBookingUrls[service] || bookingUrl;
  const waMessage = `Guten Tag, ich interessiere mich für ${service} (${vehicle}), geschätzter Preis: ab CHF ${total}.–. Gewählte Add-ons: ${selected.length ? selected.join(", ") : "keine"}.`;
  const waLink = `https://wa.me/41763958050?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="rounded-[2rem] border border-border bg-card p-5 shadow-xl sm:p-7 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-primary/10 p-3 text-primary"><Calculator className="h-5 w-5" /></div>
        <div>
          <h3 className="font-heading text-xl font-extrabold sm:text-2xl">Offertenrechner</h3>
          <p className="text-sm text-muted-foreground">Richtpreis sofort berechnen.</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <p className="mb-3 text-sm font-bold">1. Fahrzeugtyp</p>
          <div className="grid gap-2">
            {Object.keys(vehiclePrices).map((item) => (
              <button key={item} onClick={() => setVehicle(item)} className={`rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition ${vehicle === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/50"}`}>{item}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold">2. Servicepaket</p>
          <div className="grid gap-2">
            {Object.keys(servicePrices).map((item) => (
              <button key={item} onClick={() => setService(item)} className={`rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition ${service === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/50"}`}>{item}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold">3. Add-ons</p>
          <div className="grid gap-2 grid-cols-2">
            {Object.keys(addons).map((item) => (
              <button key={item} onClick={() => toggle(item)} className={`rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${selected.includes(item) ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:border-primary/50"}`}>{item}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-secondary p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-muted-foreground">Geschätzter Startpreis</p>
          <p className="font-heading text-3xl font-extrabold sm:text-4xl">ab CHF {total}.–</p>
          <p className="text-xs text-muted-foreground">exkl. MwSt.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a href={bookingLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5">Termin buchen</a>
          <a href={waLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold transition hover:border-primary">WhatsApp</a>
        </div>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <input required placeholder="Ihr Name" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
        <input required type="email" placeholder="Ihre E-Mail-Adresse" className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
        <input name="website" className="hidden" tabIndex="-1" autoComplete="off" />
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background sm:col-start-3"><Send className="h-4 w-4" /> Senden</button>
      </form>
      {sent && <p className="mt-4 flex items-center gap-2 text-sm font-bold text-primary"><CheckCircle2 className="h-4 w-4" /> Danke – wir melden uns schnellstmöglich.</p>}
    </div>
  );
}