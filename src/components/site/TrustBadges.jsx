import { ShieldCheck, Clock, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/siteContent";

export default function TrustBadges({ variant = "row" }) {
  const badges = [
    { icon: MapPin, text: contact.address },
    { icon: Phone, text: contact.phone },
    { icon: Clock, text: contact.hours },
    { icon: ShieldCheck, text: "Schweizer Unternehmen · MWST-pflichtig" },
  ];

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3">
        {badges.slice(0, 3).map(({ icon: Icon, text }) => (
          <span key={text} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-primary/70" />
            {text}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {badges.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <Icon className="h-5 w-5 shrink-0 text-primary" />
          <span className="text-sm font-medium leading-tight">{text}</span>
        </div>
      ))}
    </div>
  );
}