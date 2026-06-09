import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(localStorage.getItem("azn-cookies") !== "accepted");
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-md rounded-3xl border border-border bg-background p-5 shadow-2xl">
      <p className="font-heading text-lg font-bold">Cookie Hinweis</p>
      <p className="mt-2 text-sm text-muted-foreground">Wir verwenden notwendige Cookies für eine moderne, sichere Nutzung der Website. Analyse-Cookies werden nur mit Ihrer Zustimmung eingesetzt.</p>
      <button onClick={() => { localStorage.setItem("azn-cookies", "accepted"); setShow(false); }} className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground">Akzeptieren</button>
    </div>
  );
}