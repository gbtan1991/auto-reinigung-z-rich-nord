import { Phone } from "lucide-react";
import { phoneUrl, whatsappUrl } from "@/data/siteContent";
import ChatWidget from "./ChatWidget";

export default function FloatingActions() {
  return (
    <>
      <ChatWidget />
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        <a href={phoneUrl} className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3.5 text-sm font-bold transition active:scale-95"><Phone className="h-4 w-4 text-primary" /> Anrufen</a>
        <a href={whatsappUrl} className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground transition active:scale-95">WhatsApp</a>
      </div>
    </>
  );
}