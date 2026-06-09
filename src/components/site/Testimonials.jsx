import { Star } from "lucide-react";
import { testimonials } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function Testimonials({ names }) {
  const items = names ? testimonials.filter((item) => names.includes(item.name)) : testimonials;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={`${item.name}-${index}`} delay={index * 70} className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
          <div className="mb-5 flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}</div>
          <p className="text-lg leading-8">«{item.text}»</p>
          <div className="mt-6 border-t border-border pt-4"><p className="font-bold">{item.name}</p><p className="text-sm text-muted-foreground">{item.location}</p></div>
        </Reveal>
      ))}
    </div>
  );
}