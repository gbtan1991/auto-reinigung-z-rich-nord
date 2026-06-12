import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import FAQAccordion from "@/components/site/FAQAccordion";

export default function FAQ() {
  return (
    <>
      <SEO
        title="Häufige Fragen (FAQ) | Autoreinigung Zürich-Nord"
        description="Häufige Fragen zur Autoreinigung, Autoaufbereitung, Innenreinigung, Aussenreinigung und Politur in Zürich Nord. Preise, Dauer, Terminbuchung & mehr."
        path="/faq"
      />
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader center eyebrow="FAQ" title="Häufige Fragen" text="Antworten zu unseren Dienstleistungen, Preisen, Terminbuchung und mehr." />
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}