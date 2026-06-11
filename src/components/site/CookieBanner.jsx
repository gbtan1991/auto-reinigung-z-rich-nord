import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("azn-cookies-v2");
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("azn-cookies-v2", JSON.stringify({ necessary: true, analytics: true, ts: Date.now() }));
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem("azn-cookies-v2", JSON.stringify({ necessary: true, analytics: false, ts: Date.now() }));
    setShow(false);
  };

  const saveSettings = () => {
    localStorage.setItem("azn-cookies-v2", JSON.stringify({ necessary: true, analytics, ts: Date.now() }));
    setShow(false);
    setShowSettings(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 z-50 max-w-md rounded-3xl border border-border bg-background p-5 shadow-2xl sm:right-auto">
      {!showSettings ? (
        <>
          <div className="flex items-start gap-3 mb-3">
            <Cookie className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="font-heading text-base font-bold leading-snug">Cookie-Einstellungen</p>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir verwenden notwendige Cookies für den Betrieb der Website. Mit Ihrer Zustimmung setzen wir zusätzlich Analyse-Cookies ein, um die Website zu verbessern. Mehr Infos in unserer{" "}
            <Link to="/datenschutz" className="underline hover:text-primary transition-colors">Datenschutzerklärung</Link>.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              onClick={accept}
              className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={reject}
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-bold transition hover:border-primary hover:text-primary"
            >
              Ablehnen
            </button>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="mt-2 w-full text-center text-xs text-muted-foreground underline hover:text-primary transition-colors"
          >
            Einstellungen anpassen
          </button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between mb-3">
            <p className="font-heading text-base font-bold">Cookie-Einstellungen</p>
            <button onClick={() => setShowSettings(false)} className="text-muted-foreground hover:text-foreground transition">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-3 py-2.5">
              <div>
                <p className="font-semibold">Notwendige Cookies</p>
                <p className="text-xs text-muted-foreground mt-0.5">Für den Betrieb der Website erforderlich</p>
              </div>
              <span className="text-xs font-bold text-primary">Immer aktiv</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-3 py-2.5">
              <div>
                <p className="font-semibold">Analyse-Cookies</p>
                <p className="text-xs text-muted-foreground mt-0.5">Helfen uns, die Website zu verbessern (Google Analytics)</p>
              </div>
              <button
                onClick={() => setAnalytics(!analytics)}
                className={`relative h-6 w-11 rounded-full transition-colors ${analytics ? "bg-primary" : "bg-border"}`}
              >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${analytics ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>
          <button
            onClick={saveSettings}
            className="mt-4 w-full rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            Einstellungen speichern
          </button>
        </>
      )}
    </div>
  );
}