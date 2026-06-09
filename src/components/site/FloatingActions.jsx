import { Phone } from "lucide-react";
import { phoneUrl, whatsappUrl } from "@/data/siteContent";
import ChatWidget from "./ChatWidget";

export default function FloatingActions() {
  return (
    <>
      <ChatWidget />
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-3xl border border-border bg-background/90 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        <a href={phoneUrl} className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 font-bold"><Phone className="h-4 w-4" /> Anrufen</a>
        <a href={whatsappUrl} className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-bold text-primary-foreground">Chat</a>
      </div>
    </>
  );
}