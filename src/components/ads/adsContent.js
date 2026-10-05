import { mainServices, bookingUrl, calensoLinks, faqs } from '@/data/siteContent';
import { serviceCategories } from '@/data/quoteData';
export const logo = 'https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/564e5face_autoreinigung.png';
export const offer = { name: 'Herbst-Aktion', bookingName: 'Herbstangebot', price: 'ab CHF 399.–', tax: 'inkl. MwSt. gemäss Buchungsportal', url: calensoLinks.aktionen.sommeraktion, items: ['Premium-Innenreinigung', 'Basic Aussenreinigung', 'Geruchsentfernung + Desinfektion', 'Felgenwäsche'] };
// Herbstangebot: live Calenso service 48832, geprüft am 01.10.2026.
// Kein prozentualer Rabatt, Enddatum oder weitere Aktionsbedingungen veröffentlicht.
export const categories = mainServices.map(s => ({ ...s, name: s.slug === 'politur' ? 'Politur / Lackpflege' : s.eyebrow, packages: s.packages.map(p => ({ ...p, bookingUrl: serviceCategories[s.slug].packages.find(x => x.name === p.name).bookingUrl })), addons: serviceCategories[s.slug].addons.map(a => ({ ...a, bookingUrl: a.serviceSlug === 'geruchsentfernung-desinfektion' ? `${bookingUrl}/info@autoreinigung-zuerich-nord.ch/geruchsentfernung-desinfektion` : a.serviceSlug === 'sitze-schamponieren' ? `${bookingUrl}/info@autoreinigung-zuerich-nord.ch/sitze-schamponieren` : a.bookingUrl })) }));
export const benefits = {
  innenreinigung: ['Staub und Schmutz entfernen', 'Ritzen und Lüftungskanäle je nach Paket', 'Stoff- und Lederpflege je nach Paket'],
  aussenreinigung: ['Schonende Handwäsche', 'Felgenreinigung', 'Motorraum und Chassis je nach Paket'],
  politur: ['Glanzpolitur', 'Kratzerentfernung je nach Paket', 'Wachs- und Nanoversiegelung je nach Paket'],
};
export const questions = [
  { q: 'Was kostet eine professionelle Autoreinigung?', a: 'Innen- und Aussenreinigung beginnen jeweils ab CHF 99.–, Politur ab CHF 419.–, jeweils exkl. MwSt. Fahrzeuggrösse, Zustand und gewählter Umfang bestimmen den Preis.' },
  { q: 'Wie lange dauert die Reinigung?', a: faqs[2].a },
  { q: 'Kann ich direkt online buchen?', a: 'Ja. Wählen Sie im bestehenden Calenso-Buchungsportal Ihre Dienstleistung, einen verfügbaren Termin und geben Sie Ihre Angaben ein.' },
  { q: 'Wo befindet sich Autoreinigung Zürich Nord?', a: 'Heerenwiesen 18, 8051 Zürich-Schwamendingen. Gut erreichbar aus Oerlikon, Seebach, Opfikon, Glattbrugg und Wallisellen.' },
  { q: 'Welche Reinigung passt zu meinem Fahrzeug?', a: 'Innenreinigung für einen gepflegten Innenraum, Aussenreinigung für Handwäsche und Felgen, Politur für matten Lack und leichte Kratzer. Die Paketübersicht zeigt den jeweiligen Umfang.' },
  { q: 'Bieten Sie Leasingrückgabe-Reinigung an?', a: 'Ja. Wir bereiten Fahrzeuge innen und aussen für die Leasingrückgabe auf. Leichte Kratzer und Gerüche können zusätzlich behandelt werden.' },
  { q: 'Bieten Sie MFK-Vorbereitung an?', a: 'Ja. Motorraum- und Chassis-Reinigung sind im Aussenreinigungspaket Advanced enthalten und auch als Zusatzleistung buchbar.' },
  { q: 'Kann ich Zusatzleistungen buchen?', a: 'Ja. Unter anderem Desinfektion, Lederpflege, Sitze schamponieren, Motorraumreinigung, Felgenpflege und Versiegelung. Die Zusatzleistungen sind separat im Buchungsportal auswählbar.' },
];
export const useCases = [
  ['Leasingrückgabe', 'Innen und aussen gepflegt zur Rückgabe. Ergänzende Politur nach Bedarf.'],
  ['Fahrzeugverkauf', 'Ein sauberer Innenraum und gepflegter Lack für einen überzeugenden ersten Eindruck.'],
  ['MFK-Vorbereitung', 'Motorraum und Chassis reinigen lassen – als Paket oder Zusatzleistung.'],
  ['Regelmässige Fahrzeugpflege', 'Innen und aussen wieder sauber. Für Privat- und Firmenfahrzeuge.'],
];