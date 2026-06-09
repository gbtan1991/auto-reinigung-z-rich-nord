import { Link, useParams } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import SEO from "@/components/site/SEO";
import Testimonials from "@/components/site/Testimonials";
import { testimonials } from "@/data/siteContent";

const slugMap = {
  "andreas-stofer": "Andreas Stofer",
  "andreas-stofer-2": "Andreas Stofer",
  "ivasto-heizungen-gmbh": "Ivasto Heizungen GmbH",
  "ivasto-heizungen-gmbh-2": "Ivasto Heizungen GmbH",
  "sandra-stierli": "Sandra Stierli",
  "sandra-stierli-2": "Sandra Stierli",
  "grazia-sclaverano": "Grazia Sclaverano",
  "nadja-moravetti": "Kundenbewertung",
  "marco-ilicevic": "Kundenbewertung",
  "manuel-klaus": "Kundenbewertung",
  "chiara-hrubes": "Kundenbewertung"
};

export default function TestimonialPage() {
  const { slug } = useParams();
  const name = slugMap[slug] || "Kundenbewertung";
  const matches = testimonials.filter((item) => item.name === name);

  return (
    <>
      <SEO title={`${name} | Kundenbewertung Autoreinigung Zürich-Nord`} description="Kundenbewertung für Autoreinigung Zürich-Nord – professionelle Fahrzeugpflege in Zürich Nord." path={`/testimonial/${slug}`} />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 flex justify-center gap-1 text-primary">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-primary" />)}</div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">Kundenbewertung</p>
          <h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">{name}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Die ursprünglichen Testimonial-Unterseiten wurden in eine moderne Bewertungsansicht überführt.</p>
          <Link to="/bewertung" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">Bewertung abgeben <ArrowRight className="h-5 w-5" /></Link>
        </div>
        <div className="mx-auto mt-12 max-w-7xl"><Testimonials names={matches.length ? [name] : undefined} /></div>
      </section>
    </>
  );
}