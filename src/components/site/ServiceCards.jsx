import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/siteContent";
import Reveal from "./Reveal";

export default function ServiceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.slug} delay={index * 90}>
          <Link to={`/service/${service.slug}`} className="shine group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl">
            <div className="overflow-hidden">
              <img src={service.cardImage} alt={`${service.eyebrow} Autoreinigung Zürich Nord`} loading="lazy" className="h-52 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-56 lg:h-60" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Service</p>
              <h3 className="mt-2 font-heading text-xl font-extrabold lg:text-2xl">{service.eyebrow}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{service.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Mehr erfahren <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}