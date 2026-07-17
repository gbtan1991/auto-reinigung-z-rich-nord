import { Link } from "react-router-dom";
import { ArrowRight, Sun } from "lucide-react";
import Reveal from "@/components/site/Reveal";

export default function SommerPromo() {
  return (
    <section className="px-5 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Link to="/sommer-aktion" className="group relative block overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary to-secondary shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl">
            <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-10 lg:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <Sun className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-primary">Sommer-Aktion</p>
                  <h3 className="mt-1.5 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">Limitiertes Sommer-Angebot</h3>
                  <p className="mt-2 text-base text-muted-foreground">Saisonaler Spezialpreis für Innen- und Aussenreinigung. Jetzt profitieren.</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition group-hover:gap-3 lg:whitespace-nowrap">
                Jetzt profitieren <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}