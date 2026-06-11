import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SEO from "@/components/site/SEO";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { standorte } from "@/data/seoData";

export default function Standorte() {
  return (
    <>
      <SEO
        title="Autoreinigung Region Zürich Nord | Alle Standorte"
        description="Professionelle Autoreinigung für Zürich, Oerlikon, Opfikon, Wallisellen, Schwamendingen, Seebach, Dübendorf, Dietlikon & Glattbrugg."
        path="/standorte"
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Einzugsgebiet"
            title="Autoreinigung für die ganze Region Zürich Nord"
            text="Unser Betrieb an der Heerenwiesen 18, 8051 Zürich, ist der ideale Standort für Kunden aus Zürich, Oerlikon, Opfikon, Wallisellen, Schwamendingen, Seebach, Dübendorf, Dietlikon und Glattbrugg."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {standorte.map((ort, i) => (
              <Reveal key={ort.slug} delay={i * 60}>
                <Link
                  to={`/standorte/${ort.slug}`}
                  className="block rounded-[2rem] border border-border bg-card p-7 shadow-sm hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h2 className="font-heading text-xl font-extrabold">{ort.nameFull}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-7">{ort.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-primary font-bold text-sm">
                    Zur Standortseite <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}