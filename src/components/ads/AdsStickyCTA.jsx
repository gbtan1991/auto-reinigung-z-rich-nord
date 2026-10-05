import BookingCTA from '@/components/ads/BookingCTA';
export default function AdsStickyCTA() {
  return <aside aria-label="Termin online buchen" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lg md:hidden"><BookingCTA placement="mobile_sticky" className="w-full">Termin online buchen</BookingCTA></aside>;
}