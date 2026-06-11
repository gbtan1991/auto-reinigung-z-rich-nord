import { useEffect } from "react";
import { faqs, localBusinessSchema, contact } from "@/data/siteContent";

// Erweiterte Schema-Daten je Seitentyp
function buildSchema(type, extra = {}) {
  const base = [localBusinessSchema];

  if (type === "home" || type === "faq") {
    base.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  if (type === "service" && extra.serviceName) {
    base.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: extra.serviceName,
      provider: {
        "@type": "LocalBusiness",
        name: "Autoreinigung Zürich-Nord",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Heerenwiesen 18",
          postalCode: "8051",
          addressLocality: "Zürich",
          addressCountry: "CH",
        },
        telephone: contact.phone,
        url: "https://www.autoreinigung-zuerich-nord.ch/",
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 47.4114, longitude: 8.5481 },
        geoRadius: "20000",
      },
    });
  }

  if (type === "location" && extra.ortName) {
    base.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Autoreinigung ${extra.ortName}`,
      provider: {
        "@type": "LocalBusiness",
        name: "Autoreinigung Zürich-Nord",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Heerenwiesen 18",
          postalCode: "8051",
          addressLocality: "Zürich",
          addressCountry: "CH",
        },
        telephone: contact.phone,
      },
      areaServed: { "@type": "City", name: extra.ortName },
    });
  }

  if (extra.breadcrumbs) {
    base.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: extra.breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: `https://www.autoreinigung-zuerich-nord.ch${crumb.path}`,
      })),
    });
  }

  return base;
}

export default function SEO({
  title,
  description,
  path = "/",
  image,
  type = "home",
  serviceName,
  ortName,
  breadcrumbs,
  noindex = false,
}) {
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
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:url"]', "content", `https://www.autoreinigung-zuerich-nord.ch${path}`);
    setMeta('meta[property="og:locale"]', "content", "de_CH");
    setMeta('meta[property="og:site_name"]', "content", "Autoreinigung Zürich-Nord");
    if (image) setMeta('meta[property="og:image"]', "content", image);

    // Twitter Card
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    // Canonical
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.autoreinigung-zuerich-nord.ch${path}`;

    // Schema JSON-LD
    const existing = document.getElementById("structured-data");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(
      buildSchema(type, { serviceName, ortName, breadcrumbs })
    );
    document.head.appendChild(script);
  }, [title, description, path, image, type, serviceName, ortName, noindex]);

  return null;
}