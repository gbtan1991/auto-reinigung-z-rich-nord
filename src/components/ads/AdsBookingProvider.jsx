import { createContext, useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Loader2, ExternalLink } from 'lucide-react';
import { providerEventMap, trackAds } from '@/components/ads/adsTracking';
export const AdsBookingContext = createContext(null);
export const AdsBookingModeContext = createContext(false);
export default function AdsBookingProvider({ children, bookingOnly = false }) {
  const [booking,setBooking] = useState(null);
  const [loading,setLoading] = useState(true);
  const frame = useRef(null);
  const completed = useRef(false);
  useEffect(() => {
    const receive = event => {
      if (!booking || event.origin !== 'https://book.calenso.com' || event.source !== frame.current?.contentWindow) return;
      const name = providerEventMap[event.data?.eventName];
      if (!name || (name === 'booking_completed' && completed.current)) return;
      if (name === 'booking_completed') completed.current = true;
      trackAds(name, {service:booking.service || 'all', package_name:booking.packageName || ''});
      // Only Calenso's documented success message counts; no personal bookingData is copied.
    };
    window.addEventListener('message',receive);
    return () => window.removeEventListener('message',receive);
  }, [booking]);
  const open = selection => { completed.current = false;setLoading(true);setBooking(selection); };
  const url = booking ? new URL(booking.href) : null;
  if (url) url.searchParams.set('isFrame','true');
  return <AdsBookingModeContext.Provider value={bookingOnly}><AdsBookingContext.Provider value={open}>{children}
    <Dialog open={!!booking} onOpenChange={value => {if(!value)setBooking(null);}}>
      <DialogContent className="flex max-h-[95dvh] w-[calc(100%-1rem)] max-w-4xl flex-col gap-2 rounded-2xl p-4 sm:p-6">
        <DialogTitle className="pr-7 font-heading">Termin online buchen</DialogTitle>
        <DialogDescription>Wählen Sie Ihren Termin und schliessen Sie Ihre Buchung direkt im bestehenden Calenso-Portal ab.</DialogDescription>
        <div className="relative min-h-0 flex-1">{loading && <div role="status" className="absolute inset-0 flex items-center justify-center gap-2 bg-background"><Loader2 className="h-5 w-5 animate-spin text-primary" /> Buchungsportal wird geladen…</div>}
          {booking && <iframe ref={frame} title="Calenso Online-Terminbuchung" src={url.toString()} onLoad={() => setLoading(false)} className="h-[65dvh] w-full rounded-xl border border-border sm:h-[70dvh]" allow="payment" />}
        </div>
        {booking && <a href={booking.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-primary underline"><ExternalLink className="h-4 w-4" />Buchung separat öffnen</a>}
      </DialogContent>
    </Dialog>
  </AdsBookingContext.Provider></AdsBookingModeContext.Provider>;
}