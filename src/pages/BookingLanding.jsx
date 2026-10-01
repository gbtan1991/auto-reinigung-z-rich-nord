import { useEffect } from 'react';
import AdsLanding from '@/pages/AdsLanding';
export default function BookingLanding() {
  useEffect(() => {
    // A fresh document prevents previously loaded onsite forms from following SPA navigation.
    if (document.querySelector('script[src*="static.klaviyo.com/"]')) window.location.reload();
  }, []);
  return <AdsLanding bookingOnly />;
}