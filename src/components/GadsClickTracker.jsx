import { useEffect } from "react";

/**
 * Globaler Click-Listener für Google Ads Klick-Conversions (gtag.js).
 * Einziger Listener für die gesamte SPA – feuert nur bei echtem Klick,
 * nicht beim Laden oder bei Routenwechseln. Nutzt ausschließlich das
 * bestehende window.gtag; baut den Basis-Tag nicht erneut auf.
 */

// Google Ads send_to IDs pro Klick-Aktion
const CONVERSIONS = {
  phone: "AW-18450468859/HIER-DAS-CONVERSION-LABEL-EINSETZEN",
};

export default function GadsClickTracker() {
  useEffect(() => {
    const handleClick = (event) => {
      const anchor = event.target?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";

      // Telefon-Klick
      if (href.startsWith("tel:")) {
        if (typeof window.gtag === "function") {
          window.gtag("event", "conversion", { send_to: CONVERSIONS.phone });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}