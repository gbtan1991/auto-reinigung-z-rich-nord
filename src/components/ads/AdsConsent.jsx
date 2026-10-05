import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function AdsConsent({ onDecision, onPrivacy }) {
  const [show, setShow] = useState(() => !localStorage.getItem('azn-cookies-v2'));
  const save = analytics => {
    localStorage.setItem('azn-cookies-v2', JSON.stringify({necessary:true, analytics, ts:Date.now()}));
    setShow(false); onDecision(analytics);
  };
  if (!show) return null;
  return <aside aria-label="Cookie-Einstellungen" className="fixed bottom-24 left-4 right-4 z-50 rounded-2xl border border-border bg-background p-5 shadow-xl md:bottom-5 sm:right-auto sm:max-w-sm">
    <p className="font-heading font-bold">Cookie-Einstellungen</p>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">Notwendige Cookies ermöglichen den Betrieb. Mit Ihrer Zustimmung messen wir die Nutzung. {onPrivacy ? <button onClick={onPrivacy} className="underline">Datenschutz</button> : <Link to="/datenschutz" className="underline">Datenschutz</Link>}</p>
    <div className="mt-4 grid grid-cols-2 gap-3"><button onClick={() => save(false)} className="min-h-11 rounded-full border border-border px-4 text-sm font-semibold">Ablehnen</button><button onClick={() => save(true)} className="min-h-11 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground">Akzeptieren</button></div>
  </aside>;
}