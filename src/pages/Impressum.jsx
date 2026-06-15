import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";

export default function Impressum() {
  return (
    <>
      <SEO
        title="Impressum | Autoreinigung Zürich-Nord"
        description="Impressum der Autoreinigung Zürich-Nord, Heerenwiesen 18, 8051 Zürich."
        path="/impressum"
        breadcrumbs={[{ label: "Impressum" }]}
      />
      <Breadcrumb items={[{ label: "Impressum" }]} />
      <section className="px-5 pt-6 pb-20 lg:px-8 lg:pt-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-extrabold text-foreground mb-10">Impressum</h1>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm">

            <section className="pb-8 border-b border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-5">Verantwortlich für den Inhalt dieser Website</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-0.5 text-sm leading-relaxed">
                  <p className="font-semibold text-foreground">Turicum Automobile GmbH</p>
                  <p className="text-muted-foreground text-xs">Marke: Autoreinigung Zürich-Nord</p>
                  <p className="text-muted-foreground">Heerenwiesen 18<br />8051 Zürich<br />Schweiz</p>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div>
                    <span className="text-xs text-muted-foreground block">E-Mail</span>
                    <a href="mailto:info@autoreinigung-zuerich-nord.ch" className="text-primary font-medium underline hover:opacity-80">info@autoreinigung-zuerich-nord.ch</a>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Telefon</span>
                    <a href="tel:+41445119490" className="text-primary font-medium underline hover:opacity-80">+41 44 511 94 90</a>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Mobile</span>
                    <a href="tel:+41797415658" className="text-primary font-medium underline hover:opacity-80">+41 79 378 44 23</a>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">MWST-Nr.:</span> CHE-329.889.425 MWST</p>
                <p><span className="font-semibold text-foreground">Handelsreg. Nr.:</span> CH-020.4.068.035-4</p>
              </div>
            </section>

            <section className="pt-8 pb-8 border-b border-border">
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">Haftungsausschluss</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die Inhalte dieser Website wurden sorgfältig zusammengestellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten verantwortlich. Für fremde Inhalte auf verlinkten externen Seiten übernehmen wir keine Haftung, da wir auf diese keinen Einfluss haben.
              </p>
            </section>

            <section className="pt-8 pb-8 border-b border-border">
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">Urheberrecht</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von Autoreinigung Zürich-Nord.
              </p>
            </section>

            <section className="pt-8 pb-8 border-b border-border">
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">Hosting</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Diese Website wird auf Servern der <span className="font-semibold text-foreground">Hostpoint AG</span> in der Schweiz gehostet. Sämtliche Daten verbleiben in Rechenzentren in der Schweiz.
              </p>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">Hostpoint AG</p>
                <p>Neue Jonastrasse 60<br />8640 Rapperswil-Jona<br />Schweiz</p>
                <p><a href="https://www.hostpoint.ch/" target="_blank" rel="noreferrer noopener" className="text-primary underline hover:opacity-80">www.hostpoint.ch</a></p>
              </div>
            </section>

            <section className="pt-8">
              <h2 className="font-heading text-lg font-bold text-foreground mb-3">Datenschutz</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer <a href="/datenschutz" className="text-primary underline hover:opacity-80 font-medium">Datenschutzerklärung</a>.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit ausdrücklich widersprochen.
              </p>
            </section>

          </div>
        </div>
      </section>
    </>
  );
}