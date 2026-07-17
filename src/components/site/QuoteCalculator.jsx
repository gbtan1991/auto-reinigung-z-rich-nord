import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, Send } from "lucide-react";
import { bookingUrl, calensoLinks } from "@/data/siteContent";

const vehiclePrices = { Kleinwagen: 0, Limousine: 20, SUV: 45, Firmenfahrzeug: 35 };

const formatCHF = (n) => (n >= 1000 ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") : String(n));

const categories = [
  {
    name: "Innenreinigung",
    packages: [
      { name: "Basic", price: 99, bookingUrl: calensoLinks.innenreinigung.basic },
      { name: "Advanced", price: 179, bookingUrl: calensoLinks.innenreinigung.advanced },
      { name: "Premium", price: 399, bookingUrl: calensoLinks.innenreinigung.premium },
    ],
    addons: [
      { name: "Geruchsentfernung + Desinfektion", price: 149, bookingUrl: calensoLinks.innenreinigung.geruchsentfernung },
      { name: "Lederpflege", price: 179, bookingUrl: calensoLinks.innenreinigung.lederpflege },
      { name: "Sitze schamponieren", price: 169, bookingUrl: calensoLinks.innenreinigung.sitzeSchamponieren },
    ],
  },
  {
    name: "Aussenreinigung",
    packages: [
      { name: "Basic", price: 99, bookingUrl: calensoLinks.aussenreinigung.basic },
      { name: "Advanced", price: 149, bookingUrl: calensoLinks.aussenreinigung.advanced },
      { name: "Premium", price: 299, bookingUrl: calensoLinks.aussenreinigung.premium },
    ],
    addons: [
      { name: "Cabrio-Dach versiegeln", price: 199, bookingUrl: calensoLinks.aussenreinigung.cabrioDach },
      { name: "Motorraum reinigen", price: 79, bookingUrl: calensoLinks.aussenreinigung.motorraum },
      { name: "Motor-/Chassis-Reinigung MFK", price: 149, bookingUrl: calensoLinks.aussenreinigung.motorChassisMfk },
      { name: "Felgenwäsche (abmontiert)", price: 79, bookingUrl: calensoLinks.aussenreinigung.felgenwaesche },
    ],
  },
  {
    name: "Politur",
    packages: [
      { name: "Basic", price: 419, bookingUrl: calensoLinks.politur.basic },
      { name: "Advanced", price: 559, bookingUrl: calensoLinks.politur.advanced },
      { name: "Premium", price: 1119, bookingUrl: calensoLinks.politur.premium },
    ],
    addons: [
      { name: "Felgen-Politur", price: 349, bookingUrl: calensoLinks.politur.felgenPolitur },
      { name: "Versiegelung", price: 199, bookingUrl: calensoLinks.politur.versiegelung },
    ],
  },
];

const allAddons = categories.flatMap((c) => c.addons.map((a) => ({ ...a, category: c.name })));

export default function QuoteCalculator() {
  const [vehicle, setVehicle] = useState("Limousine");
  const [selectedPackages, setSelectedPackages] = useState({});
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [sent, setSent] = useState(false);

  const selectPackage = (category, packageName) =>
    setSelectedPackages((prev) => ({ ...prev, [category]: packageName }));

  const toggleAddon = (name) =>
    setSelectedAddons((current) =>
      current.includes(name) ? current.filter((i) => i !== name) : [...current, name]
    );

  const packageItems = useMemo(
    () =>
      categories
        .map((c) => {
          const pkgName = selectedPackages[c.name];
          if (!pkgName) return null;
          const pkg = c.packages.find((p) => p.name === pkgName);
          return pkg ? { category: c.name, name: pkg.name, price: pkg.price, bookingUrl: pkg.bookingUrl } : null;
        })
        .filter(Boolean),
    [selectedPackages]
  );

  const addonItems = useMemo(
    () => selectedAddons.map((name) => allAddons.find((a) => a.name === name)).filter(Boolean),
    [selectedAddons]
  );

  const packageTotal = packageItems.reduce((sum, p) => sum + p.price, 0);
  const addonTotal = addonItems.reduce((sum, a) => sum + a.price, 0);
  const total = packageTotal + addonTotal + vehiclePrices[vehicle];

  const bookingLink = packageItems[0]?.bookingUrl || bookingUrl;

  const summaryLines = [
    ...packageItems.map((p) => ({ label: `${p.category} (${p.name})`, price: p.price })),
    ...addonItems.map((a) => ({ label: a.name, price: a.price })),
  ];

  const summaryText = summaryLines.length
    ? summaryLines.map((l) => `${l.label} CHF ${formatCHF(l.price)}.–`).join("\n") + `\nGesamt CHF ${formatCHF(total)}.–`
    : `Keine Auswahl – geschätzter Startpreis: ab CHF ${formatCHF(total)}.–`;

  const waMessage = `Guten Tag, ich interessiere mich für eine Offerte.\nFahrzeug: ${vehicle}${
    summaryLines.length
      ? "\nAuswahl:\n" + summaryLines.map((l) => `- ${l.label} CHF ${formatCHF(l.price)}.–`).join("\n")
      : "\nKeine Auswahl"
  }\nGeschätzter Gesamtpreis: ab CHF ${formatCHF(total)}.– (exkl. MwSt.)`;
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
          <p className="mb-3 text-sm font-bold">2. Pakete</p>
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.name}>
                <p className="mb-2 text-xs font-bold text-muted-foreground">{cat.name}</p>
                <div className="grid gap-2">
                  {cat.packages.map((pkg) => (
                    <button key={`${cat.name}-${pkg.name}`} onClick={() => selectPackage(cat.name, pkg.name)} className={`rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition ${selectedPackages[cat.name] === pkg.name ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/50"}`}>
                      {pkg.name} <span className="ml-1 text-xs opacity-70">CHF {formatCHF(pkg.price)}.–</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold">3. Zusatzleistungen</p>
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.name}>
                <p className="mb-2 text-xs font-bold text-muted-foreground">{cat.name}</p>
                <div className="grid gap-2">
                  {cat.addons.map((addon) => (
                    <button key={addon.name} onClick={() => toggleAddon(addon.name)} className={`rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${selectedAddons.includes(addon.name) ? "border-primary bg-primary/10 text-primary" : "border-border bg-background hover:border-primary/50"}`}>
                      {addon.name} <span className="ml-1 opacity-70">CHF {formatCHF(addon.price)}.–</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-secondary p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          {summaryLines.length > 0 && (
            <div className="mb-3 space-y-0.5">
              {summaryLines.map((line, i) => (
                <p key={i} className="flex justify-between text-xs text-muted-foreground">
                  <span className="truncate pr-2">{line.label}</span>
                  <span className="shrink-0 font-semibold">CHF {formatCHF(line.price)}.–</span>
                </p>
              ))}
              <div className="my-1 border-t border-border" />
            </div>
          )}
          <p className="text-sm font-bold text-muted-foreground">Geschätzter Startpreis</p>
          <p className="font-heading text-3xl font-extrabold sm:text-4xl">ab CHF {formatCHF(total)}.–</p>
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
        <input type="hidden" name="offerte" value={summaryText} />
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background sm:col-start-3"><Send className="h-4 w-4" /> Senden</button>
      </form>
      {sent && <p className="mt-4 flex items-center gap-2 text-sm font-bold text-primary"><CheckCircle2 className="h-4 w-4" /> Danke – wir melden uns schnellstmöglich.</p>}
    </div>
  );
}