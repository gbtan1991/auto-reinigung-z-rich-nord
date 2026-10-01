import { useState } from 'react';
import SEO from '@/components/site/SEO';
import { images } from '@/data/siteContent';
import AdsHeader from '@/components/ads/AdsHeader';
import AdsHero from '@/components/ads/AdsHero';
import AdsTrustStrip from '@/components/ads/AdsTrustStrip';
import AdsServices from '@/components/ads/AdsServices';
import AdsOffer from '@/components/ads/AdsOffer';
import AdsBeforeAfter from '@/components/ads/AdsBeforeAfter';
import AdsBenefits from '@/components/ads/AdsBenefits';
import AdsReviews from '@/components/ads/AdsReviews';
import AdsSteps from '@/components/ads/AdsSteps';
import AdsPackages from '@/components/ads/AdsPackages';
import AdsAddons from '@/components/ads/AdsAddons';
import AdsUseCases from '@/components/ads/AdsUseCases';
import AdsLocation from '@/components/ads/AdsLocation';
import AdsFAQ from '@/components/ads/AdsFAQ';
import AdsFinalCTA from '@/components/ads/AdsFinalCTA';
import AdsFooter from '@/components/ads/AdsFooter';
import AdsStickyCTA from '@/components/ads/AdsStickyCTA';
import AdsConsent from '@/components/ads/AdsConsent';
import AdsTracking from '@/components/ads/AdsTracking';
import BookingCTA from '@/components/ads/BookingCTA';
import AdsBookingProvider from '@/components/ads/AdsBookingProvider';
import BookingOnlyFooter from '@/components/ads/BookingOnlyFooter';
import BookingLegalDialog from '@/components/ads/BookingLegalDialog';
export default function AdsLanding({ bookingOnly = false }) {
  const [legalTopic, setLegalTopic] = useState(null);
  const [consentVersion,setConsentVersion] = useState(0);
  const [cookieKey,setCookieKey] = useState(0);
  const reopen = () => { localStorage.removeItem('azn-cookies-v2');setCookieKey(x=>x+1); };
  return <AdsBookingProvider bookingOnly={bookingOnly}><div data-ads-landing className="min-h-screen bg-background font-body text-foreground">
    <SEO title={bookingOnly ? 'Autoreinigung Zürich Nord – Basic ab CHF 99.–' : 'Autoreinigung Zürich Nord – Herbstangebot & Online-Buchung'} description="Innenreinigung und Aussenreinigung ab CHF 99.–, Politur ab CHF 419.–. Herbstangebot ab CHF 399.–. Professionelle Handarbeit in Zürich Nord. Termin online buchen." path={bookingOnly ? '/#/autoreinigung-buchen' : '/#/termin-buchen'} type="service" serviceName="Autoreinigung Zürich Nord" image={images.heroPolish} noindex />
    <AdsTracking consentVersion={consentVersion} /><AdsHeader bookingOnly={bookingOnly} />
    <main>
      <AdsHero bookingOnly={bookingOnly} /><AdsTrustStrip /><AdsServices /><AdsOffer /><AdsBeforeAfter />
      <div className="mx-auto max-w-6xl px-5 pb-12 lg:px-8"><BookingCTA placement="visual_proof">Termin für mein Fahrzeug buchen</BookingCTA></div>
      <AdsBenefits /><AdsReviews bookingOnly={bookingOnly} /><AdsSteps /><AdsPackages /><AdsAddons />
      <AdsUseCases /><AdsLocation bookingOnly={bookingOnly} /><AdsFAQ /><AdsFinalCTA />
    </main>
    {bookingOnly ? <BookingOnlyFooter onCookies={reopen} onLegal={setLegalTopic} /> : <AdsFooter onCookies={reopen} />}<AdsStickyCTA />
    <AdsConsent key={cookieKey} onDecision={() => setConsentVersion(x=>x+1)} onPrivacy={bookingOnly ? () => setLegalTopic('datenschutz') : undefined} />
    {bookingOnly && <BookingLegalDialog topic={legalTopic} onClose={() => setLegalTopic(null)} />}
  </div></AdsBookingProvider>;
}