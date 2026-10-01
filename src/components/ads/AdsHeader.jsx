import { Link } from 'react-router-dom';
import { logo } from '@/components/ads/adsContent';
import BookingCTA from '@/components/ads/BookingCTA';
import AdsRating from '@/components/ads/AdsRating';
export default function AdsHeader({ bookingOnly = false }) {
  return <header className="sticky top-0 z-40 border-b border-border bg-background">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
      {bookingOnly ? <img src={logo} width="160" height="64" alt="Autoreinigung Zürich Nord" className="h-12 w-auto sm:h-16" /> : <Link to="/termin-buchen" aria-label="Autoreinigung Zürich Nord – Landingpage"><img src={logo} width="160" height="64" alt="Autoreinigung Zürich Nord" className="h-12 w-auto sm:h-16" /></Link>}
      <div className="flex items-center gap-6"><AdsRating /><BookingCTA placement="header" className="hidden md:inline-flex">Termin buchen</BookingCTA></div>
    </div>
  </header>;
}