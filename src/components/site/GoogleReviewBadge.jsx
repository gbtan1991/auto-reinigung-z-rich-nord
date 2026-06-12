import { Star } from "lucide-react";
import { googleReviewUrl } from "@/data/siteContent";

export default function GoogleReviewBadge({ compact = false }) {
  // Reale Daten aus Google Business Profil: 4.6 ★
  const rating = 4.6;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;

  if (compact) {
    return (
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary"
        title="Google Bewertungen ansehen"
      >
        <span className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < fullStars ? "fill-[#F9AB00] text-[#F9AB00]" : i === fullStars && hasHalf ? "fill-[#F9AB00] text-[#F9AB00]" : "text-muted-foreground/30"}`}
            />
          ))}
        </span>
        <span className="tabular-nums">{rating}</span>
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div>
          <p className="font-heading text-lg font-extrabold">Google Bewertung</p>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < fullStars ? "fill-[#F9AB00] text-[#F9AB00]" : i === fullStars && hasHalf ? "fill-[#F9AB00] text-[#F9AB00]" : "text-muted-foreground/30"}`}
                />
              ))}
            </span>
            <span className="text-2xl font-extrabold tabular-nums">{rating}</span>
          </div>
        </div>
      </div>
      <a
        href={googleReviewUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5"
      >
        Alle Bewertungen auf Google ansehen
      </a>
    </div>
  );
}