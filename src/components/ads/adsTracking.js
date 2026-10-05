const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'gclid', 'gbraid', 'wbraid'];
export const providerEventMap = { appointment_booking_start: 'booking_started', compact_widget_booking_start: 'booking_started', appointment_booking_step_success: 'booking_completed' };
// These provider events are NOT inferred from links, page loads, submitted forms or return URLs.
// The embedded booking dialog listens for Calenso's documented postMessage success event.
// External-tab fallback requires Calenso-side GTM for the same completed-booking measurement.
export function trackAds(event, details = {}) {
  const saved = localStorage.getItem('azn-cookies-v2');
  if (!saved || !JSON.parse(saved).analytics) return;
  window.dataLayer = window.dataLayer || [];
  const landingPage = window.location.hash.split('?')[0] === '#/autoreinigung-buchen' ? 'autoreinigung-buchen' : 'termin-buchen';
  window.dataLayer.push({ event, landing_page: landingPage, ...details });
}
export function bookingHref(link) {
  const url = new URL(link);
  const current = new URLSearchParams(window.location.search);
  const hashQuery = new URLSearchParams(window.location.hash.split('?')[1] || '');
  campaignKeys.forEach(key => { const value = current.get(key) || hashQuery.get(key); if (value) url.searchParams.set(key, value); });
  return url.toString();
}