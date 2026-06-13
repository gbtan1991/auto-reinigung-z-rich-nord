import { useState } from "react";
import { CheckCircle2, Star } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import { googleReviewUrl, images } from "@/data/siteContent";

export default function Review() {
  const [rating, setRating] = useState(0);
  const [sent, setSent] = useState(false);
  const positive = rating >= 4;

  return (
    <>
      <SEO title="Bewertung abgeben | Autoreinigung Zürich-Nord" description="Bewerten Sie Ihre Erfahrung mit Autoreinigung Zürich-Nord. Zufriedene Kunden werden zur Google Bewertung weitergeleitet, Feedback bleibt intern." path="/bewertung" image={images.heroRim} breadcrumbs={[{ label: "Bewertung" }]} />
      <Breadcrumb items={[{ label: "Bewertung abgeben" }]} />
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-4xl rounded-[2.5rem] border border-border bg-card p-8 text-center shadow-2xl md:p-14"><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">Google Bewertung System</p><h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">Wie zufrieden sind Sie?</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Ihre Rückmeldung hilft uns, die Qualität der Autoreinigung Zürich-Nord weiter zu verbessern.</p><div className="mt-10 flex justify-center gap-2">{[1,2,3,4,5].map((star) => <button key={star} onClick={() => setRating(star)} className="transition hover:scale-110"><Star className={`h-10 w-10 ${rating >= star ? "fill-primary text-primary" : "text-muted-foreground/40"}`} /></button>)}</div>{rating > 0 && positive && <div className="mt-10 rounded-[2rem] bg-secondary p-6"><CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-primary" /><h2 className="font-heading text-2xl font-extrabold">Vielen Dank für Ihr positives Feedback.</h2><p className="mt-3 text-muted-foreground">Bitte teilen Sie Ihre Erfahrung auch öffentlich auf Google.</p><a href={googleReviewUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">Zu Google Bewertung</a></div>}{rating > 0 && !positive && <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 rounded-[2rem] bg-secondary p-6 text-left"><h2 className="font-heading text-2xl font-extrabold">Was können wir besser machen?</h2><p className="mt-2 text-muted-foreground">Ihre Rückmeldung bleibt intern und wird nicht veröffentlicht.</p><textarea required rows="6" placeholder="Ihr internes Feedback" className="mt-5 w-full rounded-2xl border border-input bg-background px-4 py-4 outline-none focus:ring-2 focus:ring-ring" /><input className="hidden" name="website" tabIndex="-1" autoComplete="off" /><button className="mt-4 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground">Feedback senden</button>{sent && <p className="mt-4 font-bold text-primary">Danke – Ihr Feedback wurde intern aufgenommen.</p>}</form>}</div></section>
    </>
  );
}