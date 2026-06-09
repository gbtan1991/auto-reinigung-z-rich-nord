import { useEffect } from "react";
import { faqs, localBusinessSchema } from "@/data/siteContent";

export default function SEO({ title, description, path = "/", image }) {
  useEffect(() => {
    document.documentElement.lang = "de-CH";
    document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/\[(name|property)="(.+?)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:url"]', "content", `https://www.autoreinigung-zuerich-nord.ch${path}`);
    if (image) setMeta('meta[property="og:image"]', "content", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.autoreinigung-zuerich-nord.ch${path}`;

    const existing = document.getElementById("structured-data");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify([
      localBusinessSchema,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a }
        }))
      }
    ]);
    document.head.appendChild(script);
  }, [title, description, path, image]);

  return null;
}