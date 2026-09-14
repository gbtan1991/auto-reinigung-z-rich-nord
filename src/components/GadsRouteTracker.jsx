import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * SPA-Route-Tracking für gtag.js (Google Ads AW-18450468859 & GA4 G-BPT1418JQ4).
 *
 * Der initiale Page View wird beim Laden durch `gtag('config', …)` in index.html
 * einmalig gesendet. Dieser Tracker feuert nur bei tatsächlichen Route-Wechseln
 * (inkl. Browser Zurück/Vorwärts) jeweils einen weiteren page_view – nicht beim
 * ersten Mount, um Doppelzählungen zu vermeiden.
 */
export default function GadsRouteTracker() {
  const { pathname, search, hash } = useLocation();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_path: pathname + search + hash,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search, hash]);

  return null;
}