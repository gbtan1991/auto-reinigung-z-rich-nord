import { useContext } from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { AdsBookingContext, AdsBookingModeContext } from '@/components/ads/AdsBookingProvider';
import { bookingUrl } from '@/data/siteContent';
import { bookingHref, trackAds } from '@/components/ads/adsTracking';
export default function BookingCTA({ children = 'Termin online buchen', href = bookingUrl, placement, service, packageName, className = '' }) {
  const openBooking = useContext(AdsBookingContext);
  const bookingOnly = useContext(AdsBookingModeContext);
  const click = event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    trackAds('booking_cta_click', { placement, service: service || 'all', package_name: packageName || '', booking_url: href });
    if (service) trackAds('service_selected', { service, package_name: packageName || '' });
    if (openBooking) { event.preventDefault();openBooking({href:bookingHref(href),service,packageName}); }
    // A click is a handoff, never proof of a started or completed booking.
  };
  return <a href={bookingHref(href)} onClick={click} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`}>
    <CalendarDays className="h-4 w-4 shrink-0" /><span>{bookingOnly ? 'Jetzt buchen' : children}</span><ArrowRight className="h-4 w-4 shrink-0" />
  </a>;
}