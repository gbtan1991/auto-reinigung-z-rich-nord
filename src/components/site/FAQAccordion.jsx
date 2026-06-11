import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/siteContent";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-4xl space-y-2">
      {faqs.map((item, index) => (
        <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-bold transition hover:text-primary sm:text-lg"
          >
            <span>{item.q}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index && (
            <div className="px-6 pb-5">
              <div className="border-t border-border pt-4">
                <p className="leading-7 text-muted-foreground">{item.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}