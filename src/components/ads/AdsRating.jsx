import { Star } from 'lucide-react';
import { googleBusinessProfile } from '@/data/siteContent';
export default function AdsRating({ large = false }) {
  const rating = googleBusinessProfile.rating;
  return <div className={`inline-flex flex-wrap items-center gap-2 ${large ? 'text-lg' : 'text-xs sm:text-sm'}`} aria-label={`${rating} von 5 auf Google`}>
    <span className="relative inline-block" aria-hidden="true"><span className="flex text-primary/25">{Array.from({length:5}, (_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span><span className="absolute inset-y-0 left-0 overflow-hidden" style={{width: `${rating / 5 * 100}%`}}><span className="flex w-max text-primary">{Array.from({length:5}, (_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</span></span></span>
    <span><strong>{rating.toFixed(1)}</strong><span className="ml-1 text-muted-foreground">/ 5 Google</span></span>
  </div>;
}