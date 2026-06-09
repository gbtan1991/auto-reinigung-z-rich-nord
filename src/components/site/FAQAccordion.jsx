import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/siteContent";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-4xl divide-y divide-border rounded-[2rem] border border-border bg-card shadow-sm">
      {faqs.map((item, index) => (
        <div key={item.q} className="p-6">
          <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 text-left font-heading text-lg font-bold">
            {item.q}<ChevronDown className={`h-5 w-5 transition ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index && <p className="mt-4 leading-7 text-muted-foreground">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}