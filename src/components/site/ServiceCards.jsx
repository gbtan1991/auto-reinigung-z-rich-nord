import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function ServiceCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={index * 90}>
          <Link to={`/service/${service.slug}`} className="shine group block overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="overflow-hidden"><img src={service.cardImage} alt={`${service.eyebrow} Autoreinigung Zürich Nord`} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" /></div>
            <div className="p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-primary">Service</p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold">{service.eyebrow}</h3>
              <p className="mt-4 min-h-28 text-muted-foreground">{service.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">Mehr erfahren <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}