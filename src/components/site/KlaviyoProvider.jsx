import { createContext, useContext, useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { klaviyoIdentifyCurrentUser } from "@/lib/klaviyo";

const KlaviyoContext = createContext({ companyId: null, listId: null });
export const useKlaviyo = () => useContext(KlaviyoContext);

// Fetches the public Klaviyo config from the backend, injects the onsite
// JS snippet into <head>, then identifies the logged-in user (covers the
// moment a user lands on the app right after login/signup).
export default function KlaviyoProvider({ children }) {
  const [config, setConfig] = useState({ companyId: null, listId: null });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await base44.functions.invoke("getKlaviyoConfig", {});
        const data = res?.data || {};
        const { companyId, listId } = data;
        if (cancelled || !companyId) return;
        setConfig({ companyId, listId });
        window._learnq = window._learnq || [];
        const s = document.createElement("script");
        s.async = true;
        s.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${encodeURIComponent(companyId)}`;
        s.addEventListener("load", () => klaviyoIdentifyCurrentUser());
        document.head.appendChild(s);
      } catch (e) {
        /* Klaviyo not configured — silently skip */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return <KlaviyoContext.Provider value={config}>{children}</KlaviyoContext.Provider>;
}