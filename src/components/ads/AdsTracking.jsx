import { useEffect, useRef } from 'react';
import { trackAds } from '@/components/ads/adsTracking';
export default function AdsTracking({ consentVersion }) {
  const viewed = useRef(false);
  useEffect(() => {
    const consent = localStorage.getItem('azn-cookies-v2');
    if (!viewed.current && consent && JSON.parse(consent).analytics) {
      trackAds('landing_page_view'); viewed.current = true;
    }
  }, [consentVersion]);
  return null;
}