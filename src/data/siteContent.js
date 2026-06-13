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
  { label: "Regionen", href: "/standorte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Bewertungen 4.6", href: "/bewertungen" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" }
];

export const services = [
  {
    slug: "innenreinigung",
    eyebrow: "Innenreinigung",
    title: "Professionelle Innenreinigung: Frisch, hygienisch, wie neu",
    summary: "Eine gründliche Innenreinigung bringt Ihren Fahrzeuginnenraum wieder auf Vordermann. Wir entfernen Staub, Flecken, Gerüche und Tierhaare – sorgfältig per Hand, materialschonend und mit sichtbarem Ergebnis.",
    image: images.interiorHero,
    cardImage: images.serviceInterior,
    content: [
      "Damit Sie sich in Ihrem Fahrzeug rundum wohlfühlen, übernehmen wir die gründliche Auto-Innenreinigung in Zürich Nord. Wir entfernen Staub, Schmutz, Tierhaare, Flecken, Bakterien und unangenehme Gerüche sorgfältig und materialschonend. Je nach Bedarf reinigen wir schwer erreichbare Ritzen, Lüftungskanäle, Sitze, Teppiche, Armaturen sowie Stoff- und Lederbezüge professionell und pflegend.",
      "Auf Wunsch desinfizieren wir Ihr Fahrzeug zusätzlich und sorgen für einen hygienisch sauberen Innenraum. Unsere Innenreinigung eignet sich ideal für Privatfahrzeuge, Familienautos, Firmenfahrzeuge, Leasingrückgaben, Occasionen sowie Fahrzeuge vor der MFK. Dank professioneller Reinigungsmittel und schonender Verfahren bleibt Ihr Auto gepflegt, sauber und werterhaltend."
    ],
    packages: [
      { name: "Basic", price: "CHF 80.–", features: ["Grundreinigung: Staub, Schmutz und fetthaltige Flecken von Oberflächen entfernen"] },
      { name: "Advanced", price: "CHF 150.–", features: ["Grundreinigung: Staub, Schmutz und fetthaltige Flecken von Oberflächen entfernen", "Ritzen und Lüftungskanäle reinigen"] },
      { name: "Premium", price: "CHF 350.–", features: ["Grundreinigung: Staub, Schmutz und fetthaltige Flecken von Oberflächen entfernen", "Ritzen und Lüftungskanäle reinigen", "Sitze shampoonieren / Stoff reinigen", "Lederreinigung, -pflege und -konservierung"] }
    ],
    extras: ["Tierhaar-Entfernung: nach Aufwand, ab CHF 100.–", "Vollständige Desinfektion mit Anokath inkl. Geruchsbeseitigung: CHF 140.–"]
  },
  {
    slug: "aussenreinigung",
    eyebrow: "Aussenreinigung",
    title: "Handwäsche Aussenreinigung Zürich-Nord – kratzerlos, gründlich",
    summary: "Wir waschen jedes Fahrzeug von Hand – gründlich, schonend und ohne Kratzer. Auf Wunsch reinigen wir auch Motorraum, Fahrwerk und Bremssättel. Das Ergebnis spricht für sich.",
    image: images.exteriorHero,
    cardImage: images.serviceExterior,
    content: [
      "Unsere Auto-Aussenreinigung in Zürich Nord umfasst eine sorgfältige und schonende Handwäsche inklusive gründlicher Felgenreinigung. Dabei entfernen wir Schmutz, Bremsstaub, Ablagerungen und Verschmutzungen professionell, damit Ihr Fahrzeug wieder sauber, gepflegt und glänzend aussieht.",
      "Je nach gewähltem Paket reinigen wir zusätzlich den Motorraum, das Fahrwerk, Bremssättel, Federbeine, Radhäuser sowie den Unterboden Ihres Fahrzeugs. Besonders nach dem Winter oder vor der MFK ist eine gründliche Fahrzeugreinigung sinnvoll, um Salz, Schmutz und Ablagerungen zu entfernen und den Werterhalt Ihres Autos zu unterstützen.",
      "Für zusätzlichen Schutz bieten wir eine hochwertige Nanoversiegelung und Lackkonservierung an. Diese schützt den Lack langfristig vor Umwelteinflüssen, Schmutz und Wasser und sorgt für einen langanhaltenden Glanz. Unsere Aussenreinigung eignet sich ideal für Privatfahrzeuge, Firmenwagen, Leasingfahrzeuge, Occasionen und gepflegte Alltagsautos in Zürich, Oerlikon, Seebach, Opfikon, Wallisellen und Umgebung."
    ],
    packages: [
      { name: "Basic", price: "ab CHF 70.–", features: ["Handwäsche", "Felgenreinigung"] },
      { name: "Advanced", price: "ab CHF 100.–", features: ["Handwäsche", "Felgenreinigung", "Motorraumreinigung und -konservierung", "Chassis-Reinigung (MFK-gerecht)"] },
      { name: "Premium", price: "ab CHF 200.–", features: ["Handwäsche", "Felgenreinigung", "Motorraumreinigung und -konservierung", "Chassis-Reinigung", "Unterbodenreinigung", "Fahrwerkreinigung (Bremssättel, Federbein, Radhausabdeckung)", "Lackversiegelung und -konservierung"] }
    ],
    extras: []
  },
  {
    slug: "politur",
    eyebrow: "Politur und kleine Ausbesserungen",
    title: "Lackpolitur & Kratzerentfernung Zürich-Nord – sichtbarer Unterschied",
    summary: "Feine Kratzer, Hologramme und matten Lack bringen wir maschinell und per Hand wieder zum Glänzen. Auf Wunsch versiegeln wir den Lack anschliessend dauerhaft – mit Wachs oder Nano.",
    image: images.polishHero,
    cardImage: images.servicePolish,
    content: [
      "Mit professioneller Autopolitur und Lackpflege in Zürich Nord bringen wir matte und stumpfe Lacke wieder zum Glänzen und reduzieren leichte Kratzer, Hologramme, Gebrauchsspuren sowie Verwitterungen sichtbar. Unsere sorgfältige Lackaufbereitung verbessert nicht nur die Optik Ihres Fahrzeugs, sondern unterstützt auch den langfristigen Werterhalt.",
      "Dank unserer Erfahrung beseitigen wir Lackmängel wie Flugrost, Farbflecken, Baumharz, stumpfe Stellen und feine Oberflächenkratzer besonders schonend und effektiv. Zusätzlich kümmern wir uns auf Wunsch um leicht beschädigte Kunststoffe, Felgen, Fahrzeugbeleuchtung sowie Stoff- und Lederoberflächen.",
      "Für einen dauerhaften Schutz bieten wir hochwertige Lackkonservierungen, Wachsbehandlungen und Nanoversiegelungen an. Diese schützen den Lack vor Witterungseinflüssen, UV-Strahlung, Schmutz und Wasser und sorgen für einen langanhaltenden Tiefenglanz. Unsere Lackpflege eignet sich ideal für Privatfahrzeuge, Firmenwagen, Leasingfahrzeuge, Sportwagen und gepflegte Occasionen in Zürich, Oerlikon, Seebach, Opfikon, Wallisellen und Umgebung."
    ],
    packages: [
      { name: "Basic", price: "ab CHF 350.–", features: ["Glanzpolitur"] },
      { name: "Advanced", price: "ab CHF 500.–", features: ["Glanzpolitur", "Kratzpolitur (Kratzerentfernung)"] },
      { name: "Premium", price: "ab CHF 750.–", features: ["Glanzpolitur", "Kratzpolitur (Kratzerentfernung)", "Swissvax-Wachsversiegelung per Hand", "Nanoversiegelung nach Wunsch"] }
    ],
    extras: ["Spot-Reparatur (Polieren und Lackieren kleiner kosmetischer Schäden): nach Aufwand, ab CHF 100.–", "Kunststoffkonservierung: nach Aufwand, ab CHF 50.–", "Stoff-Reparatur: nach Aufwand, ab CHF 50.–", "Leder-Reparatur: nach Aufwand, ab CHF 50.–", "Felgenreparatur (kosmetisch): nach Aufwand, ab CHF 50.–", "Matte Scheinwerfer schleifen und neu lackieren: nach Aufwand, ab CHF 50.–"]
  }
];

export const googleBusinessProfile = {
  url: "https://g.page/autoreinigungzuerichnord",
  name: "Autoreinigung Zürich-Nord",
  placeId: "ChIJ_7hxivmloUcRwinm5kNPf8E",
  rating: 4.6,
  reviewCount: 47,
};

export const faqs = [
  { q: "Für welche Fahrzeuge bieten Sie die Autoreinigung an?", a: "Für alle: Privatfahrzeuge, Familienautos, Firmenwagen, SUVs, Sportwagen, Leasingfahrzeuge, Occasionen, Fahrzeuge vor der MFK oder dem Verkauf. Auch Firmenflotten reinigen wir regelmässig – auf Wunsch mit Flottenvertrag." },
  { q: "Was kostet eine professionelle Autoreinigung in Zürich?", a: "Die Innenreinigung beginnt ab CHF 80.–, die Aussenreinigung ab CHF 70.– und die Lackpolitur ab CHF 350.–. Die genauen Kosten hängen vom Fahrzeugtyp, der Grösse und dem Verschmutzungsgrad ab. Mit unserem Online-Kalkulator erhalten Sie in Sekunden eine erste Preiseinschätzung." },
  { q: "Wie lange dauert eine vollständige Fahrzeugaufbereitung?", a: "Eine einfache Innenreinigung dauert 2–3 Stunden, eine Aussenreinigung mit Motorraum ca. 2–4 Stunden. Eine komplette Aufbereitung mit Politur kann 4–8 Stunden dauern. Die genaue Dauer besprechen wir bei der Buchung mit Ihnen." },
  { q: "Kann ich online einen Termin buchen?", a: "Ja. Über unsere Online-Buchung sichern Sie sich sekundenschnell Ihren Wunschtermin – für Innenreinigung, Aussenreinigung, Politur, Leasingrückgabe oder MFK-Vorbereitung. Die Buchung dauert weniger als 60 Sekunden." },
  { q: "Wo befindet sich Autoreinigung Zürich-Nord und wie komme ich hin?", a: "Unser Betrieb befindet sich an der Heerenwiesen 18, 8051 Zürich-Schwamendingen. Erreichbar mit dem Auto über die Schaffhauserstrasse oder die Zürichbergstrasse. Mit dem ÖV: Tram 10 oder 14 bis Schaffhauserplatz, dann Bus 63. Gut erreichbar aus Oerlikon, Schwamendingen, Seebach, Opfikon, Glattbrugg, Wallisellen und der ganzen Region Zürich Nord." },
  { q: "Ist eine Leasingrückgabe-Reinigung bei Ihnen möglich?", a: "Ja – die Leasingrückgabe ist eine unserer Spezialitäten. Wir bereiten Ihr Fahrzeug innen und aussen auf, um teure Nachforderungen zu vermeiden. Auf Wunsch entfernen wir zusätzlich leichte Kratzer und Gerüche." },
  { q: "Wie kann ich eine Autoaufbereitung in Zürich Nord anfragen?", a: "Am einfachsten über unsere Online-Buchung. Sie können uns auch anrufen: +41 44 511 94 90 oder per WhatsApp: +41 79 741 56 58. Für Firmenflotten und spezielle Aufbereitungen erstellen wir Ihnen gerne ein individuelles Angebot." }
];

export const contact = {
  company: "Autoreinigung Zürich-Nord",
  address: "Heerenwiesen 18, 8051 Zürich",
  email: "info@autoreinigung-zuerich-nord.ch",
  phone: "+41 44 511 94 90",
  mobile: "+41 79 741 56 58",
  hours: "Mo–Fr: 08.00–12.00 Uhr / 13.30–18.00 Uhr · Sa: 09.00–14.00 Uhr"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoWash"],
  "@id": "https://www.autoreinigung-zuerich-nord.ch/#business",
  name: "Autoreinigung Zürich-Nord",
  legalName: "Autoreinigung Zürich-Nord",
  description: "Professionelle Autoreinigung, Autoaufbereitung, Innenreinigung, Aussenreinigung, Lackpolitur und Fahrzeugpflege in Zürich Nord. Spezialist für Leasingrückgabe und MFK-Vorbereitung.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Heerenwiesen 18",
    postalCode: "8051",
    addressLocality: "Zürich",
    addressRegion: "ZH",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.4114,
    longitude: 8.5481,
  },
  telephone: "+41445119490",
  email: "info@autoreinigung-zuerich-nord.ch",
  url: "https://www.autoreinigung-zuerich-nord.ch/",
  sameAs: [
    "https://g.page/autoreinigungzuerichnord",
  ],
  areaServed: [
    { "@type": "City", name: "Zürich" },
    { "@type": "City", name: "Oerlikon" },
    { "@type": "City", name: "Schwamendingen" },
    { "@type": "City", name: "Seebach" },
    { "@type": "City", name: "Opfikon" },
    { "@type": "City", name: "Glattbrugg" },
    { "@type": "City", name: "Wallisellen" },
    { "@type": "City", name: "Dübendorf" },
    { "@type": "City", name: "Dietlikon" },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "12:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "13:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  hasMap: "https://maps.google.com/?q=Heerenwiesen+18+8051+Z%C3%BCrich",
  priceRange: "CHF 70.– – CHF 750.–",
  currenciesAccepted: "CHF",
  paymentAccepted: "Cash, Credit Card",
  knowsLanguage: ["de", "de-CH"],
};