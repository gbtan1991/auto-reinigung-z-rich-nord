// Interaktive Paket- und Zusatzleistungen-Auswahl für Serviceseiten
import { useMemo } from "react";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { services, bookingUrl } from "@/data/siteContent";
import { serviceCategories } from "@/data/quoteData";
import Reveal from "@/components/site/Reveal";

const formatCHF = (n) => (n >= 1000 ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") : String(n));

export default function ServicePackageSelector({
  serviceSlug,
  packages,
  serviceName,
  selectedPackage,
  onSelectPackage,
  selectedAddons,
  onToggleAddon,
}) {
  const categoryData = serviceCategories[serviceSlug];
  const addons = categoryData?.addons || [];

  const addonsWithImages = useMemo(
    () =>
      addons.map((addon) => {
        const svc = services.find((s) => s.slug === addon.serviceSlug);
        return { ...addon, image: svc?.cardImage || svc?.image };
      }),
    [addons]
  );

  const pkgPrice = selectedPackage
    ? categoryData?.packages.find((p) => p.name === selectedPackage)?.price || 0
    : 0;

  const selectedAddonItems = selectedAddons
    .map((name) => addons.find((a) => a.name === name))
    .filter(Boolean);

  const addonTotal = selectedAddonItems.reduce((sum, a) => sum + a.price, 0);
  const total = pkgPrice + addonTotal;

  const selectedPkgBookingUrl = selectedPackage
    ? categoryData?.packages.find((p) => p.name === selectedPackage)?.bookingUrl
    : null;
  const dynamicBookingUrl = selectedPkgBookingUrl || bookingUrl;

  const hasSelection = selectedPackage || selectedAddons.length > 0;

  return (
    <>
      {/* Paket-Auswahl (Radio-Verhalten) */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, i) => {
          const isSelected = selectedPackage === pkg.name;
          return (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                onClick={() => onSelectPackage(isSelected ? null : pkg.name)}
                className={`flex h-full cursor-pointer flex-col rounded-[1.75rem] border bg-card p-6 shadow-sm transition ${isSelected ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">{pkg.name}</p>
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                    {isSelected && <Check className="h-3 w-3" />}
                  </div>
                </div>
                <p className="mt-2 font-heading text-3xl font-extrabold">{pkg.price}</p>
                <p className="text-xs text-muted-foreground">exkl. MwSt.</p>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Zusatzleistungen (Checkbox-Verhalten) */}
      {addonsWithImages.length > 0 && (
        <div className="mt-10">
          <h3 className="font-heading text-lg font-extrabold">Zusatzleistungen</h3>
          <p className="mt-1 text-sm text-muted-foreground">Unabhängig voneinander wählbar – mehrere gleichzeitig möglich.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addonsWithImages.map((addon, i) => {
              const isSelected = selectedAddons.includes(addon.name);
              return (
                <Reveal key={addon.name} delay={i * 60}>
                  <div
                    onClick={() => onToggleAddon(addon.name)}
                    className={`flex h-full cursor-pointer gap-3 rounded-[1.5rem] border bg-card p-4 shadow-sm transition ${isSelected ? "border-primary ring-2 ring-primary/30" : "border-border hover:border-primary/50"}`}
                  >
                    {addon.image && (
                      <img src={addon.image} alt={addon.name} className="h-16 w-16 shrink-0 rounded-xl object-cover" loading="lazy" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{addon.name}</p>
                      <p className="text-xs text-muted-foreground">ab CHF {formatCHF(addon.price)}.–</p>
                    </div>
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                      {isSelected && <Check className="h-3 w-3" />}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      )}

      {/* Live-Preisübersicht */}
      {hasSelection && (
        <div className="mt-8 rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
          <h3 className="font-heading text-lg font-extrabold">Ihre Auswahl</h3>
          {selectedPackage && (
            <div className="mt-4 flex justify-between text-sm">
              <span className="font-semibold">{serviceName} ({selectedPackage})</span>
              <span className="font-semibold">CHF {formatCHF(pkgPrice)}.–</span>
            </div>
          )}
          {selectedAddonItems.length > 0 && (
            <div className="mt-2 space-y-1">
              <p className="text-xs font-bold text-muted-foreground">Zusatzleistungen</p>
              {selectedAddonItems.map((a) => (
                <div key={a.name} className="flex justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {a.name}
                  </span>
                  <span className="font-semibold">CHF {formatCHF(a.price)}.–</span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="font-heading text-lg font-extrabold">Gesamtpreis</span>
            <span className="font-heading text-2xl font-extrabold">CHF {formatCHF(total)}.–</span>
          </div>
          <p className="text-xs text-muted-foreground">exkl. MwSt.</p>
          <a
            href={dynamicBookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Jetzt Termin buchen <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </>
  );
}