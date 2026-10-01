import { googleReviewUrl } from '@/data/siteContent';
import AdsSection from '@/components/ads/AdsSection';
import AdsRating from '@/components/ads/AdsRating';
import BookingCTA from '@/components/ads/BookingCTA';
export default function AdsReviews() {
  return <AdsSection eyebrow="Google Bewertungen" title="Vertrauen aus der Region.">
    <div className="rounded-3xl border border-border bg-secondary p-7 text-center sm:p-10"><p className="font-heading text-5xl font-extrabold text-primary">4.6<span className="text-xl text-muted-foreground"> / 5</span></p><div className="mt-4"><AdsRating large /></div><p className="mx-auto mt-5 max-w-lg leading-7 text-muted-foreground">Die auf unserer Website ausgewiesene Google-Bewertung. Echte Kundenstimmen finden Sie ungefiltert im Google Business Profil.</p><a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block py-3 text-sm text-muted-foreground underline underline-offset-4">Google-Bewertungen ansehen</a><div className="mt-4"><BookingCTA placement="reviews">Jetzt eigenen Termin buchen</BookingCTA></div></div>
  </AdsSection>;
}