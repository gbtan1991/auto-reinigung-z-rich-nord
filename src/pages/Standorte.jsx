import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { standorte, landingpages } from "@/data/seoData";

export default function Standorte() {
  return (
    <>
      <SEO
        title="Autoreinigung Region Zürich Nord | Einzugsgebiete"
        description="Professionelle Autoreinigung für Zürich, Oerlikon, Opfikon, Wallisellen, Schwamendingen, Seebach, Dübendorf, Dietlikon & Glattbrugg."
        path="/standorte"
      />
      <Breadcrumb items={[{ label: "Einzugsgebiete" }]} />
      <section className="px-5 pt-16 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Unsere Regionen"
            title="Professionelle Autoreinigung – schnell erreichbar aus der ganzen Region Zürich Nord"
            text="Ein Standort, neun Regionen: Von unserem Betrieb an der Heerenwiesen 18, 8051 Zürich aus bedienen wir Kunden aus Zürich, Oerlikon, Opfikon, Wallisellen, Schwamendingen, Seebach, Dübendorf, Dietlikon und Glattbrugg."
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
                    Zur Region <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Top Money Pages */}
      {landingpages.filter((lp) => lp.priority === "SOFORT").length > 0 && (
        <section className="bg-secondary/70 px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Beliebte Kombinationen"
              title="Dienstleistung + Ort – unsere Top-Angebote"
            />
            <div className="mt-7 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {landingpages
                .filter((lp) => lp.priority === "SOFORT")
                .map((lp) => (
                  <Link
                    key={`${lp.serviceSlug}-${lp.ortSlug}`}
                    to={`/lp/${lp.serviceSlug}/${lp.ortSlug}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                  >
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {lp.serviceName} in {lp.ortName}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}