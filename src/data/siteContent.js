export const bookingUrl = "https://widget.calenso.com/?partner=turicumreinigung&type=appointment&store_id=&service[]=&isFrame=true&lang=de_CH";
export const googleReviewUrl = "https://g.page/autoreinigungzuerichnord";
export const whatsappUrl = "https://wa.me/41797415658?text=Guten%20Tag%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20professionelle%20Autoreinigung%20in%20Z%C3%BCrich%20Nord.";
export const phoneUrl = "tel:+41445119490";

export const images = {
  heroRim: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-felgenreinigung-900x675.jpg",
  heroInterior: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-innenreinigung-1-900x675.jpg",
  heroPolish: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-politur-3-900x675.jpg",
  ctaExterior: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-aussenreinigung-von-hand-1-1200x675.jpg",
  serviceInterior: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-innenreinigung-2.jpg",
  serviceExterior: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-aussenreinigung-von-hand-4.jpg",
  servicePolish: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-politur-1.jpg",
  trust: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-nach-der-reinigung-800x450.jpg",
  about: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-turicum-ueber-uns-900x675.jpg",
  booking: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-innenreinigung-3-900x675.jpg",
  interiorHero: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-innenreinigung-2-800x450.jpg",
  exteriorHero: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-aussenreinigung-von-hand-4-800x450.jpg",
  polishHero: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-politur-1-800x450.jpg",
  before: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-vor-der-reinigung-1200x675.jpg",
  after: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/05/zuerich-nord-autoreinigung-nach-der-reinigung-1200x675.jpg",
  map: "https://www.autoreinigung-zuerich-nord.ch/wp-content/uploads/2021/03/output-1.svg"
};

export const navItems = [
  { label: "Start", href: "/" },
  { label: "Dienstleistungen", href: "/dienstleistungen" },
  { label: "Standorte", href: "/standorte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Bewertung", href: "/bewertung" },
  { label: "Kontakt", href: "/kontakt" }
];

export const services = [
  {
    slug: "innenreinigung",
    eyebrow: "Innenreinigung",
    title: "Die reinste Freude: Auto-Innenreinigung Zürich-Nord",
    summary: "Eine gründliche Auto-Innenreinigung wirkt für Ihren vierrädrigen Freund wie ein Jungbrunnen. Wir päppeln den Innenraum des Fahrzeugs mehr als nur optisch auf: Schlechte Gerüche, abgenutzte Materialien? Freuen Sie sich auf das Refresh!",
    image: images.interiorHero,
    cardImage: images.serviceInterior,
    content: [
      "Damit Sie sich in Ihrem Fahrzeug rundum wohlfühlen, übernehmen wir die gründliche Auto-Innenreinigung in Zürich Nord. Wir entfernen Staub, Schmutz, Tierhaare, Flecken, Bakterien und unangenehme Gerüche sorgfältig und materialschonend. Je nach Bedarf reinigen wir schwer erreichbare Ritzen, Lüftungskanäle, Sitze, Teppiche, Armaturen sowie Stoff- und Lederbezüge professionell und pflegend.",
      "Auf Wunsch desinfizieren wir Ihr Fahrzeug zusätzlich und sorgen für einen hygienisch sauberen Innenraum. Unsere Innenreinigung eignet sich ideal für Privatfahrzeuge, Familienautos, Firmenfahrzeuge, Leasingrückgaben, Occasionen sowie Fahrzeuge vor der MFK. Dank professioneller Reinigungsmittel und schonender Verfahren bleibt Ihr Auto gepflegt, sauber und werterhaltend."
    ],
    packages: [
      { name: "Basic", price: "CHF 80.-", features: ["Grundreinigung: Staub, Schmutz und fetthaltige Flecken von Oberflächen entfernen"] },
      { name: "Advanced", price: "CHF 150.-", features: ["Grundreinigung: Staub, Schmutz und fetthaltige Flecken von Oberflächen entfernen", "Ritzen und Lüftungskanäle reinigen"] },
      { name: "Premium", price: "CHF 350.-", features: ["Grundreinigung: Staub, Schmutz und fetthaltige Flecken von Oberflächen entfernen", "Ritzen und Lüftungskanäle reinigen", "Sitze shamponieren/Stoffreinigung", "Lederreinigung, -pflege und -konservierung"] }
    ],
    extras: ["Tierhaarentfernung: nach Aufwand, ab CHF 100.-", "Komplett Desinfektion mit Anokath inkl. Geruchsentfernung: CHF 140.-"],
    testimonials: ["Andreas Stofer", "Ivasto Heizungen GmbH", "Sandra Stierli"]
  },
  {
    slug: "aussenreinigung",
    eyebrow: "Aussenreinigung",
    title: "Saubere Arbeit: Aussenreinigung Zürich-Nord",
    summary: "Ihr Auto wie aus dem Beauty-Salon: Bei der Aussenreinigung waschen und pflegen wir jedes Fahrzeug gründlich und gekonnt von Hand. Auf Wunsch kümmern wir uns um alles, worauf Profis besonders achten, z. B. Motor, Fahrwerk, Bremssättel.",
    image: images.exteriorHero,
    cardImage: images.serviceExterior,
    content: [
      "Unsere Auto-Aussenreinigung in Zürich Nord umfasst eine sorgfältige und schonende Handwäsche inklusive gründlicher Felgenreinigung. Dabei entfernen wir Schmutz, Bremsstaub, Ablagerungen und Verschmutzungen professionell, damit Ihr Fahrzeug wieder sauber, gepflegt und glänzend aussieht.",
      "Je nach gewähltem Paket reinigen wir zusätzlich den Motorraum, das Fahrwerk, Bremssättel, Federbeine, Radhäuser sowie den Unterboden Ihres Fahrzeugs. Besonders nach dem Winter oder vor der MFK ist eine gründliche Fahrzeugreinigung sinnvoll, um Salz, Schmutz und Ablagerungen zu entfernen und den Werterhalt Ihres Autos zu unterstützen.",
      "Für zusätzlichen Schutz bieten wir eine hochwertige Nanoversiegelung und Lackkonservierung an. Diese schützt den Lack langfristig vor Umwelteinflüssen, Schmutz und Wasser und sorgt für einen langanhaltenden Glanz. Unsere Aussenreinigung eignet sich ideal für Privatfahrzeuge, Firmenwagen, Leasingfahrzeuge, Occasionen und gepflegte Alltagsautos in Zürich, Oerlikon, Seebach, Opfikon, Wallisellen und Umgebung."
    ],
    packages: [
      { name: "Basic", price: "ab CHF 70.-", features: ["Handwäsche", "Felgenwäsche"] },
      { name: "Advanced", price: "ab CHF 100.-", features: ["Handwäsche", "Felgenwäsche", "Motorraumwäsche und konservierung", "Für MFK Reinigung Motor-/ Chassis Reinigung"] },
      { name: "Premium", price: "ab CHF 200.-", features: ["Handwäsche", "Felgenwäsche", "Motorraumwäsche und -konservierung", "Chassis-Reinigung", "Unterbodenreinigung", "Fahrwerkreinigung (Bremssättel Federbein Radhausschalenabdeckung etc.)", "Lackversiegelung und -konservierung"] }
    ],
    extras: [],
    testimonials: ["Grazia Sclaverano", "Ivasto Heizungen GmbH"]
  },
  {
    slug: "politur",
    eyebrow: "Politur und kleine Ausbesserungen",
    title: "Perfekt ausgebügelt: Autopolituren in Zürich-Nord",
    summary: "Lassen Sie nichts auf Ihre Liebe kommen. Kleinere Kratzer in Lack, Leder und Stoff bessern wir fachmännisch aus. Und damit das Blech mehr abhaben kann, spendieren wir ihm auf Wunsch eine Wachsversiegelung. Von Hand, versteht sich.",
    image: images.polishHero,
    cardImage: images.servicePolish,
    content: [
      "Mit professioneller Autopolitur und Lackpflege in Zürich Nord bringen wir matte und stumpfe Lacke wieder zum Glänzen und reduzieren leichte Kratzer, Hologramme, Gebrauchsspuren sowie Verwitterungen sichtbar. Unsere sorgfältige Lackaufbereitung verbessert nicht nur die Optik Ihres Fahrzeugs, sondern unterstützt auch den langfristigen Werterhalt.",
      "Dank unserer Erfahrung beseitigen wir Lackmängel wie Flugrost, Farbflecken, Baumharz, stumpfe Stellen und feine Oberflächenkratzer besonders schonend und effektiv. Zusätzlich kümmern wir uns auf Wunsch um leicht beschädigte Kunststoffe, Felgen, Fahrzeugbeleuchtung sowie Stoff- und Lederoberflächen.",
      "Für einen dauerhaften Schutz bieten wir hochwertige Lackkonservierungen, Wachsbehandlungen und Nanoversiegelungen an. Diese schützen den Lack vor Witterungseinflüssen, UV-Strahlung, Schmutz und Wasser und sorgen für einen langanhaltenden Tiefenglanz. Unsere Lackpflege eignet sich ideal für Privatfahrzeuge, Firmenwagen, Leasingfahrzeuge, Sportwagen und gepflegte Occasionen in Zürich, Oerlikon, Seebach, Opfikon, Wallisellen und Umgebung."
    ],
    packages: [
      { name: "Basic", price: "ab CHF 350.-", features: ["Glanzpolitur"] },
      { name: "Advanced", price: "ab CHF 500.-", features: ["Glanzpolitur", "Kratzpolitur (Kratzerentfernung)"] },
      { name: "Premium", price: "ab CHF 750.-", features: ["Glanzpolitur", "Kratzpolitur (Kratzerentfernung)", "Swissvax Wachsversiegelung rein per Hand", "Nano-Versiegelung je nach Wunsch"] }
    ],
    extras: ["Spotreparatur (Polieren+Lackieren von kleineren kosmetischen Makeln): nach Aufwand, ab CHF 100.-", "Kunststoffkonservierung: nach Aufwand, ab CHF 50.-", "Stoffreparatur: nach Aufwand, ab CHF 50.-", "Lederreparatur: nach Aufwand, ab CHF 50.-", "Felgenreparaturen (Kosmetik): nach Aufwand, ab CHF 50.-", "Matte-Scheinwerfer polieren bzw schleifen und neu lackieren: nach Aufwand, ab CHF 50.-"],
    testimonials: ["Sandra Stierli", "Andreas Stofer"]
  }
];

export const testimonials = [
  { name: "Andreas Stofer", location: "Schwamendingen", text: "Kompliment, das ist ein echter Unterschied. Ihr habt nicht nur rausgesaugt und drübergewischt. Auch alle Kunststoffe, Armaturen und die Scheiben glänzen jetzt... hab praktisch wieder einen Neuwagen!" },
  { name: "Grazia Sclaverano", location: "Zürich-Oerlikon", text: "Für Unterboden, Federbeinholme und Innenkotflügel gilt: Sauberkeit ist der beste Rostschutz! Damit es bei der MFK keine böse Überraschung gibt, braucht es für die Pflege stets Leute vom Fach." },
  { name: "Ivasto Heizungen GmbH", location: "Zürich-Oerlikon", text: "Alle Ivasto Heizungen GmbH Firmenfahrzeuge werden von unseren Handwerkern stark genutzt. Die monatlichen Innenreinigungen bei Autoreinigung Zürich-Nord sind für uns daher unerlässlich, auch im Hinblick auf den späteren Wiederverkaufswert." },
  { name: "Sandra Stierli", location: "Russikon", text: "Ich bin jahrelang samstags durch die Waschanlage gefahren. Irgendwann bemerkte ich diese typischen Hologramm-Rückstrahlungen auf dem Lack. Autoreinigung Zürich-Nord hat’s wieder ausgebügelt und mir gezeigt, wie sich sowas vermeiden lässt." },
  { name: "Andreas Stofer", location: "Schwamendingen", text: "Auto glänzt, Familie strahlt! Ihr habt die Lackschäden echt günstig ausgebessert. Man sieht sich nächstes Jahr wieder nach der Sommerferientour!" },
  { name: "Sandra Stierli", location: "Russikon", text: "Wer Kinder hat, kennt das: Man fährt Krümel, Safttüten, Schokoflecken und verschwundene Spielsachen ;-) durch die Gegend. Die Autoreinigung Zürich-Nord-Leute bringen unser Auto immer schnell auf Vordermann – einfach klasse!" },
  { name: "Ivasto Heizungen GmbH", location: "Zürich-Oerlikon", text: "Autoreinigung Zürich-Nord wäscht unsere Autos seit einem Jahr. Man erlaubt sich dort keine noch so kleine Nachlässigkeit. So zeigt der Autolack niemals Silikatspuren oder unscheinbare Polierkratzer auf, was hässliche Lichtbrechungen verursachen kann." }
];

export const faqs = [
  { q: "Für welche Fahrzeuge eignet sich die Autoreinigung?", a: "Unsere professionelle Autoreinigung in Zürich Nord eignet sich ideal für Privatfahrzeuge, Firmenfahrzeuge, Leasingautos, Occasionen sowie Fahrzeuge vor der MFK oder dem Verkauf." },
  { q: "Warum lohnt sich professionelle Autoreinigung?", a: "Eine professionelle Autoreinigung sorgt nicht nur für ein gepflegtes Erscheinungsbild, sondern trägt auch zum langfristigen Werterhalt Ihres Fahrzeugs bei." },
  { q: "Kann ich online einen Termin buchen?", a: "Ja. Über unsere Online-Buchung sichern Sie sich sekundenschnell einen Termin für Innenreinigung, Aussenreinigung oder Politur." },
  { q: "Wo befindet sich Autoreinigung Zürich-Nord?", a: "Unser Standort ist an der Heerenwiesen 18, 8051 Zürich und ideal erreichbar aus Zürich-City, Oerlikon, Schwamendingen, Seebach, Opfikon, Glattbrugg, Wallisellen und Umgebung." }
];

export const contact = {
  company: "Autoreinigung Zürich-Nord",
  address: "Heerenwiesen 18, 8051 Zürich",
  email: "info@autoreinigung-zuerich-nord.ch",
  phone: "+41 44 511 94 90",
  mobile: "+41 79 741 56 58",
  hours: "Mo – Fr: 08.00 – 12.00 Uhr und 13.30 – 18.00 Uhr · Sa: 09.00 Uhr – 14.00 Uhr"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Autoreinigung Zürich-Nord",
  address: { "@type": "PostalAddress", streetAddress: "Heerenwiesen 18", postalCode: "8051", addressLocality: "Zürich", addressCountry: "CH" },
  telephone: "+41445119490",
  email: "info@autoreinigung-zuerich-nord.ch",
  areaServed: ["Zürich Nord", "Oerlikon", "Schwamendingen", "Seebach", "Opfikon", "Glattbrugg", "Wallisellen"],
  openingHours: ["Mo-Fr 08:00-12:00", "Mo-Fr 13:30-18:00", "Sa 09:00-14:00"],
  url: "https://www.autoreinigung-zuerich-nord.ch/"
};