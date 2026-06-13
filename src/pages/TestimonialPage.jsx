import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SEO from "@/components/site/SEO";
import { googleBusinessProfile } from "@/data/siteContent";

export default function TestimonialPage() {
  const { slug } = useParams();

  useEffect(() => {
    // Redirect to Google Business Profile - all testimonials live there
    window.location.href = googleBusinessProfile.url;
  }, []);

  return (
    <>
      <SEO
        title={`Kundenbewertung | ${googleBusinessProfile.name}`}
        description={`Echte Google Bewertungen für ${googleBusinessProfile.name}. ${googleBusinessProfile.rating} ★ mit ${googleBusinessProfile.reviewCount} Bewertungen.`}
        path={`/testimonial/${slug}`}
        noindex
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">Sie werden zu Google weitergeleitet...</p>
          <a
            href={googleBusinessProfile.url}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground"
          >
            Zu Google Bewertungen
          </a>
        </div>
      </section>
    </>
  );
}