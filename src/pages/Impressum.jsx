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
        <article className="prose prose-slate mx-auto max-w-4xl rounded-[2rem] border border-border bg-card p-8 shadow-xl md:p-12">
          <h1>Impressum</h1>

          <h2>Verantwortlich für den Inhalt dieser Website</h2>
          <p>
            <strong>Turicum Automobile GmbH</strong><br />
            (Marke: Autoreinigung Zürich-Nord)<br />
            Heerenwiesen 18<br />
            8051 Zürich<br />
            Schweiz
          </p>
          <p>
            <a href="mailto:info@autoreinigung-zuerich-nord.ch">info@autoreinigung-zuerich-nord.ch</a>
          </p>
          <p>
            Telefon: <a href="tel:+41445119490">+41 44 511 94 90</a><br />
            Mobile: <a href="tel:+41797415658">+41 79 741 56 58</a>
          </p>
          <p>
            MWST-Nr.: CHE-329.889.425 MWST<br />
            Handelsreg. Nr.: CH-020.4.068.035-4
          </p>

          <h2>Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden sorgfältig zusammengestellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten verantwortlich. Für fremde Inhalte auf verlinkten externen Seiten übernehmen wir keine Haftung, da wir auf diese keinen Einfluss haben.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von Autoreinigung Zürich-Nord.
          </p>

          <h2>Datenschutz</h2>
          <p>
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.
          </p>
          <p>
            Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit ausdrücklich widersprochen.
          </p>
        </article>
      </section>
    </>
  );
}