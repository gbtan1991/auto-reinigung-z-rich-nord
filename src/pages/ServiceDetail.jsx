import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/site/SEO";
import Breadcrumb from "@/components/site/Breadcrumb";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { services, bookingUrl, phoneUrl, whatsappUrl, contact, images, addonRedirects } from "@/data/siteContent";
import { seoServices, standorte, landingpages } from "@/data/seoData";
import { useState } from "react";
import ServicePackageSelector from "@/components/site/ServicePackageSelector";
import { serviceCategories } from "@/data/quoteData";

// Service-spezifische FAQs
const serviceFaqs = {
  autoaufbereitung: [
    { q: "Was beinhaltet eine vollständige Autoaufbereitung?", a: "Unsere vollständige Autoaufbereitung umfasst die Innenreinigung (Staubsaugen, Shampoonieren, Leder), Aussenreinigung per Handwäsche, Felgen, Scheiben sowie optional Lackpolitur und Versiegelung. Wir begutachten das Fahrzeug zuerst und empfehlen das passende Paket." },
    { q: "Wie oft sollte ich mein Fahrzeug aufbereiten lassen?", a: "Für Privatfahrzeuge empfehlen wir eine vollständige Aufbereitung 1–2 Mal pro Jahr. Firmenfahrzeuge oder Leasingfahrzeuge vor der Rückgabe profitieren von einer Aufbereitung nach Bedarf." },
    { q: "Kann ich das Fahrzeug während der Aufbereitung abholen?", a: "Nein – bitte planen Sie 4–8 Stunden ein. Wir informieren Sie bei der Buchung über die genaue Dauer." },
    { q: "Ist die Autoaufbereitung auch für ältere Fahrzeuge sinnvoll?", a: "Ja. Auch ältere Fahrzeuge profitieren enorm von einer professionellen Aufbereitung – besonders vor dem Verkauf." },
    { q: "Wo befindet sich Ihr Betrieb?", a: "Heerenwiesen 18, 8051 Zürich-Schwamendingen. Gut erreichbar aus Oerlikon (8 Min.), Schwamendingen (5 Min.), Seebach (7 Min.), Opfikon (10 Min.) und Wallisellen (12 Min.)." },
  ],
  innenreinigung: [
    { q: "Was genau wird bei der Innenreinigung gereinigt?", a: "Wir reinigen alle Bereiche des Innenraums: Sitze und Teppiche (shampooniert), Leder (gereinigt und gepflegt), Armaturen, Ablagen, Türverkleidungen, Lüftungskanäle, Fensterscheiben innen und alle schwer zugänglichen Stellen." },
    { q: "Wie wird Geruch im Auto beseitigt?", a: "Bei starkem Geruch bieten wir das Anokath-Desinfektionsverfahren an. Dieses beseitigt Gerüche dauerhaft an der Quelle." },
    { q: "Ich habe Tierhaare im Auto – kein Problem?", a: "Tierhaare sind unsere Spezialität. Mit speziellen Werkzeugen entfernen wir hartnäckige Tierhaare auch aus tiefen Sitznähten und Teppichfasern." },
    { q: "Wie lange dauert eine Innenreinigung?", a: "Je nach Fahrzeugtyp und Verschmutzungsgrad 1–4 Stunden." },
    { q: "Kann ich einen Termin kurzfristig buchen?", a: "Ja. Über unsere Online-Buchung sind oft Termine innerhalb weniger Tage verfügbar." },
  ],
  aussenreinigung: [
    { q: "Was ist der Unterschied zwischen Handwäsche und Maschinenwäsche?", a: "Bei der Handwäsche entstehen keine Kratzer oder Hologramme, wie sie Bürsten in Automatikwaschanlagen verursachen. Wir reinigen per Zwei-Eimer-Methode – schonend und gründlich." },
    { q: "Was wird bei der Aussenreinigung alles gereinigt?", a: "Karosserie, Türrahmen und Türschweller, Felgen und Reifen, Scheiben. Auf Wunsch: Motorraum, Unterboden, Fahrwerk, Bremssättel." },
    { q: "Wann ist eine Aussenreinigung besonders wichtig?", a: "Nach dem Winter (Streusalz), vor der MFK oder Leasingrückgabe, vor dem Verkauf und nach langen Reisen." },
    { q: "Bieten Sie auch eine Lackversiegelung an?", a: "Ja. Wachsversiegelung, Nanoversiegelung oder Keramikversiegelung nach der Handwäsche." },
    { q: "Muss ich einen Termin buchen?", a: "Ja, bitte buchen Sie vorab online oder rufen Sie an." },
  ],
  handwasche: [
    { q: "Warum Handwäsche statt Automatikwaschanlage?", a: "Automatikwaschanlagen mit Bürsten hinterlassen feine Kratzer und Hologramme im Lack. Wir reinigen ausschliesslich per Hand mit der Zwei-Eimer-Methode." },
    { q: "Für welche Fahrzeuge ist die Handwäsche besonders wichtig?", a: "Premium-Fahrzeuge, folierte Autos, Fahrzeuge mit Keramikversiegelung, Sportwagen, Oldtimer." },
    { q: "Wie oft sollte ich mein Fahrzeug per Handwäsche reinigen lassen?", a: "Idealerweise alle 4–8 Wochen, im Winter öfter wegen Streusalz." },
    { q: "Reinigen Sie auch Felgen und Reifen?", a: "Ja, die Felgen- und Reifenreinigung ist fester Bestandteil." },
    { q: "Kann ich die Handwäsche mit einer Innenreinigung kombinieren?", a: "Ja, und das empfehlen wir auch. Fragen Sie bei der Buchung nach einem Kombipaket." },
  ],
  politur: [
    { q: "Welche Kratzer können durch Politur entfernt werden?", a: "Feine bis mittelschwere Kratzer in der Klarlackschicht, Hologramme, Oxidationen, matte Flecken und Verwitterungen." },
    { q: "Was ist der Unterschied zwischen Glanzpolitur und Kratzpolitur?", a: "Glanzpolitur beseitigt leichte Hologramme und verstärkt den Glanz. Kratzpolitur beseitigt tiefere Kratzer, erfordert aber anschliessende Fehpolitur." },
    { q: "Muss das Fahrzeug nach der Politur versiegelt werden?", a: "Nicht zwingend, aber sehr empfehlenswert für den Werterhalt." },
    { q: "Wie lange hält der Effekt einer Lackpolitur?", a: "Je nach Versiegelung und Nutzung 6–24 Monate." },
    { q: "Können Hologramme durch die Automatikwaschanlage entstehen?", a: "Ja, das ist die häufigste Ursache. Wir beseitigen diese durch Maschinenpolieren." },
  ],
  leasingrueckgabe: [
    { q: "Wann sollte ich die Leasingrückgabe-Reinigung buchen?", a: "Idealerweise 2–7 Tage vor dem Übergabetermin." },
    { q: "Was können Nachforderungen beim Leasing verursachen?", a: "Flecken auf Sitzen, Geruch, Schmutz, Kratzer auf dem Lack, Felgenschäden. Wir adressieren alle diese Punkte." },
    { q: "Können Sie auch Kratzer vor der Rückgabe entfernen?", a: "Feine bis mittelschwere Kratzer können wir durch Lackpolitur deutlich reduzieren." },
    { q: "Machen Sie auch Firmen-Leasingflotten?", a: "Ja. Kontaktieren Sie uns für ein individuelles Angebot." },
    { q: "Was kostet eine Leasingrückgabe-Reinigung?", a: "Typisch CHF 150.– bis CHF 400.– je nach Fahrzeuggrösse und Zustand." },
  ],
  "mfk-vorbereitung": [
    { q: "Welche Bereiche reinigen Sie für die MFK-Vorbereitung?", a: "Motorraum, Unterboden, Fahrwerk, Bremssättel, Radhäuser sowie die Karosserie aussen." },
    { q: "Verbessert eine Reinigung die Chancen bei der MFK?", a: "Ein sauberer Motorraum erleichtert die Fehlerdiagnose und zeigt dem Prüfer, dass das Fahrzeug gepflegt wird." },
    { q: "Wann sollte ich die MFK-Vorbereitung buchen?", a: "1–3 Tage vor der MFK." },
    { q: "Bieten Sie die Motorraum- und Unterbodenreinigung auch separat an?", a: "Ja, als Einzelleistung oder im Paket mit der Aussenreinigung." },
    { q: "Wo finden MFK-Stationen in Zürich statt?", a: "In Schwamendingen (Riedtlistrasse), Oerlikon, Altstetten und weiteren Standorten." },
  ],
  keramikversiegelung: [
    { q: "Was ist der Unterschied zwischen Keramik- und Wachsversiegelung?", a: "Wachs hält 2–6 Monate, Keramik 2–5 Jahre. Keramik ist härter und wasserabweisender." },
    { q: "Muss der Lack vor der Keramikversiegelung poliert werden?", a: "Ja, immer – für ein perfektes Ergebnis." },
    { q: "Wie lange dauert die Keramikversiegelung?", a: "Reinigung, Politur und Versiegelung dauern einen vollen Tag (6–10 Stunden)." },
    { q: "Schützt die Keramikversiegelung auch vor Kratzern?", a: "Keramik erhöht die Lackhärte, ein vollständiger Kratzschutz ist es jedoch nicht." },
    { q: "Für welche Fahrzeuge lohnt sich die Keramikversiegelung?", a: "Neufahrzeuge, Premium-Fahrzeuge, Sportwagen – alle, bei denen Werterhalt Priorität hat." },
  ],
  motorraumreinigung: [
    { q: "Ist die Motorraumreinigung sicher für mein Fahrzeug?", a: "Ja, wir schützen empfindliche Elektronikteile und reinigen mit angepasstem Druck." },
    { q: "Was bewirkt eine saubere Motorraumreinigung?", a: "Erleichtert Fehlerdiagnose, professioneller Eindruck bei MFK und Verkauf." },
    { q: "Wie oft sollte der Motorraum gereinigt werden?", a: "Alle 2–3 Jahre oder jährlich vor der MFK." },
    { q: "Was kostet die Motorraumreinigung?", a: "Als Einzelleistung ab CHF 79.–." },
    { q: "Kann ich die Motorraumreinigung mit der Aussenreinigung kombinieren?", a: "Ja, das ist empfehlenswert." },
  ],
};

const serviceContent = {
  autoaufbereitung: {
    was: "Autoaufbereitung ist die professionelle Gesamtpflege Ihres Fahrzeugs. Sie umfasst die gründliche Innenreinigung, Aussenreinigung per Handwäsche, Lackpolitur sowie optionale Versiegelungen. Eine vollständige Aufbereitung stellt den ursprünglichen Zustand Ihres Fahrzeugs so weit wie möglich wieder her.",
    vorteile: ["Dauerhafter Werterhalt des Fahrzeugs", "Professionelles Erscheinungsbild für Firmenfahrzeuge", "Optimale Vorbereitung für Leasingrückgabe oder Verkauf", "Schutz der Oberflächen vor frühzeitigem Verschleiss"],
    ablauf: ["Fahrzeugbegutachtung und Zustandserfassung", "Gründliche Innenreinigung", "Handwäsche aussen inkl. Felgen und Motorraum", "Lackpolitur und Versiegelung nach Wunsch", "Abschlusskontrolle und Übergabe"],
    einsatzbereiche: "Privatfahrzeuge, Firmenflotten, Leasingfahrzeuge, Occasionen, Fahrzeuge vor dem Verkauf, Sportwagen, SUVs.",
  },
  innenreinigung: {
    was: "Die professionelle Auto-Innenreinigung entfernt sämtliche Verunreinigungen aus dem Fahrzeuginnenraum: Staub, Schmutz, Tierhaare, Flecken, Bakterien und unangenehme Gerüche. Auf Wunsch bieten wir eine vollständige Desinfektion mit dem Anokath-Verfahren.",
    vorteile: ["Hygienisch sauberer Innenraum", "Entfernung von Allergenen und Bakterien", "Geruchsbeseitigung durch Desinfektion", "Professioneller Schutz von Leder- und Stoffoberflächen"],
    ablauf: ["Gründliches Staubsaugen aller Oberflächen", "Reinigung von Ritzen, Lüftungskanälen und Ablagen", "Sitze shampoonieren oder Leder reinigen und pflegen", "Armaturen, Scheiben und Kunststoffe behandeln", "Desinfektion auf Wunsch"],
    einsatzbereiche: "Familienfahrzeuge, Firmenfahrzeuge, Tierhalter, Leasingnehmer, MFK-Vorbereitung, Occasionen.",
  },
  aussenreinigung: {
    was: "Die professionelle Auto-Aussenreinigung per Handwäsche schützt Ihren Lack vor Kratzern, die bei Maschinenwäschen entstehen. Wir reinigen Karosserie, Scheiben, Türrahmen, Felgen und Reifenflanken sorgfältig von Hand.",
    vorteile: ["Schonende Reinigung ohne Lackschäden", "Vollständige Felgen- und Reifenreinigung", "Motorraum und Fahrwerk auf Wunsch", "Lackversiegelung für Langzeitschutz"],
    ablauf: ["Vorwäsche und Einweichen von Schmutz und Bremsstaub", "Handwäsche der Karosserie mit hochwertigen Mitteln", "Felgen- und Reifenreinigung", "Scheiben innen und aussen", "Trocknung und optionale Versiegelung"],
    einsatzbereiche: "Alle Fahrzeugtypen, besonders nach Winter, vor MFK, für Leasingrückgabe, Premium-Fahrzeuge.",
  },
  handwasche: {
    was: "Die Handwäsche ist die schonendste Art, Ihr Fahrzeug zu waschen. Anders als bei Automatikwaschanlagen entsteht kein Risiko von Kratzern oder Hologrammen. Wir waschen jedes Fahrzeug per Hand mit hochwertigen, pH-neutralen Reinigungsmitteln.",
    vorteile: ["Kein Lackschaden durch Bürsten", "Individuelle Behandlung jedes Fahrzeugs", "Schutz von Folierungen und Versiegelungen", "Ergebnis sichtbar besser als Automatikwäsche"],
    ablauf: ["Vorwäsche und Schaumbehandlung", "Handwäsche mit Zwei-Eimer-Methode", "Felgen und Reifen separat reinigen", "Trocknung mit Mikrofasertuch", "Optionale Lackkonservierung"],
    einsatzbereiche: "Premium-Fahrzeuge, Sportwagen, foliierte Fahrzeuge, Keramikversiegelungen, Oldtimer.",
  },
  politur: {
    was: "Die professionelle Lackpolitur entfernt feine Kratzer, Hologramme, Oxidationen und Verwitterungen aus der Lackoberfläche. Durch maschinelles Polieren stellen wir den ursprünglichen Glanz des Lacks wieder her.",
    vorteile: ["Sichtbare Kratzerentfernung", "Wiederherstellung des ursprünglichen Glanzes", "Vorbereitung für optimale Versiegelung", "Werterhalt des Fahrzeuglacks"],
    ablauf: ["Lackzustandsanalyse und Reinigung", "Maschinenpolieren mit Glanzpolitur", "Kratzpolitur bei stärkeren Schäden", "Wachs- oder Nanoversiegelung", "Finish und Kontrolle"],
    einsatzbereiche: "Premium-Fahrzeuge, Fahrzeuge vor Verkauf, Leasingrückgabe, nach Maschinenwaschanlage.",
  },
  leasingrueckgabe: {
    was: "Die Leasingrückgabe-Reinigung bereitet Ihr Fahrzeug optimal auf die Rückgabe an den Leasinggeber vor. Ziel ist es, kostspielige Nachforderungen zu vermeiden. Wir reinigen Innen- und Aussenraum vollständig.",
    vorteile: ["Vermeidung von Leasingnachforderungen", "Professionelles Erscheinungsbild bei Rückgabe", "Innen und Aussen aus einer Hand", "Transparente Preise"],
    ablauf: ["Fahrzeugzustand dokumentieren", "Vollständige Innenreinigung", "Aussenreinigung per Handwäsche", "Flecken- und Geruchsbeseitigung", "Leichte Kratzer reduzieren (optional)"],
    einsatzbereiche: "Alle Leasingnehmer bei Vertragsende, Unternehmens-Leasingfahrzeuge, Langzeitmieter.",
  },
  "mfk-vorbereitung": {
    was: "Die MFK-Vorbereitung umfasst die gründliche Reinigung von Motorraum, Unterboden, Fahrwerk und Karosserie. Ein sauberer Motorraum erleichtert die Inspektion und hinterlässt einen professionellen Eindruck.",
    vorteile: ["Professioneller Eindruck bei MFK-Prüfung", "Leichtere Fehlerdiagnose", "Entfernung von Salz und Korrosionsablagerungen", "Vollständig aus einer Hand"],
    ablauf: ["Motorraum reinigen und konservieren", "Unterboden und Fahrwerk reinigen", "Bremssättel und Radhäuser", "Aussenreinigung Karosserie", "Abschlusscheck"],
    einsatzbereiche: "Alle Fahrzeughalter vor der MFK, Occasionsverkäufer, Leasingrückgabe vor Prüfung.",
  },
  keramikversiegelung: {
    was: "Die Keramikversiegelung ist der modernste und dauerhafteste Schutz für Ihren Fahrzeuglack. Keramische Beschichtungen bilden eine harte, wasserabweisende Schutzschicht, die mehrere Jahre hält.",
    vorteile: ["Mehrjähriger Lackschutz", "Hydrophober Lotus-Effekt: Schmutz perlt ab", "UV-Schutz und Glanzerhalt", "Einfachere Pflege dauerhaft"],
    ablauf: ["Vollständige Reinigung und Dekontamination", "Lackpolitur für perfekte Haftung", "Auftragen der Keramikbeschichtung", "Aushärtezeit einhalten", "Abschlusskontrolle"],
    einsatzbereiche: "Premium-Fahrzeuge, Sportwagen, Neufahrzeuge, Fahrzeuge mit wertvollem Lack.",
  },
  motorraumreinigung: {
    was: "Die professionelle Motorraumreinigung entfernt Öl, Schmutz, Staub und Ablagerungen aus dem Motorraum. Ein sauberer Motorraum erleichtert die Fehlerdiagnose und hinterlässt einen professionellen Eindruck.",
    vorteile: ["Professioneller Eindruck bei Verkauf und MFK", "Erleichterte Fehlerdiagnose", "Schutz vor Überhitzung durch Schmutzablagerungen", "Konservierung von Gummiteilen"],
    ablauf: ["Kaltentfettung des Motorraums", "Dampfreinigung oder Schaumreinigung", "Pinselreinigung schwer zugänglicher Bereiche", "Trocknung", "Konservierung von Dichtungen und Kunststoffen"],
    einsatzbereiche: "Alle Fahrzeuge vor MFK, Verkauf oder nach langer Betriebsdauer.",
  },
  "geruchsentfernung-desinfektion": {
    was: "Die Geruchsentfernung mit Desinfektion beseitigt unangenehme Gerüche dauerhaft an der Quelle. Mit dem professionellen Anokath-Verfahren eliminieren wir Bakterien, Viren und Allergene zuverlässig.",
    vorteile: ["Dauerhafte Geruchsbeseitigung an der Quelle", "Hygienisch sauberer Innenraum", "Entfernung von Bakterien, Viren und Allergenen", "Angenehmes Raumgefühl ohne Überdecken"],
    ablauf: ["Innenraum begutachten und Geruchsquelle lokalisieren", "Anokath-Desinfektionsverfahren anwenden", "Alle Oberflächen und Lüftungskanäle behandeln", "Trocknung und Belüftung", "Erfolgskontrolle"],
    einsatzbereiche: "Familienfahrzeuge, Firmenfahrzeuge, Raucherfahrzeuge, Tierhalter, Leasingrückgaben, Occasionen.",
  },
  "lederpflege": {
    was: "Die professionelle Lederpflege umfasst die Reinigung, Pflege und Konservierung aller Lederflächen im Fahrzeug. Wir verwenden hochwertige Produkte, die das Leder geschmeidig halten und vor Verschleiss schützen.",
    vorteile: ["Geschmeidiges und farbechtes Leder", "Schutz vor UV-Strahlung und Rissbildung", "Wiederherstellung des originalen Aussehens", "Langfristiger Werterhalt der Lederausstattung"],
    ablauf: ["Lederflächen reinigen", "Hochwertige Lederpflege auftragen", "Konservierung gegen UV-Strahlung", "Schutzschicht aufbauen", "Finish und Kontrolle"],
    einsatzbereiche: "Fahrzeuge mit Lederausstattung, Premium-Fahrzeuge, Occasionen vor dem Verkauf, Leasingrückgaben.",
  },
  "sitze-schamponieren": {
    was: "Die professionelle Shampoonierung entfernt tiefen Schmutz, Flecken und Gerüche aus Stoffbezügen und Teppichen. Mit der Extraktionsmethode dringen wir tief in die Fasern ein.",
    vorteile: ["Tiefenreinheit für Stoffbezüge", "Flecken- und Geruchsentfernung", "Schonende Reinigung der Fasern", "Frische und saubere Sitze"],
    ablauf: ["Vorbehandlung der Flecken", "Shampoonierung mit Extraktionsmethode", "Tiefenreinigung der Fasern", "Wasserextraktion", "Trocknung"],
    einsatzbereiche: "Familienfahrzeuge, Tierhalter, Leasingrückgaben, Occasionen, stark verschmutzte Stoffbezüge.",
  },
  "sommer-aktion": {
    was: "Die Sommer-Aktion kombiniert unsere beliebtesten Innen- und Aussenreinigungs-Leistungen zu einem attraktiven Aktionspreis. Nutzen Sie die Saison, um Ihr Fahrzeug rundum aufbereiten zu lassen.",
    vorteile: ["Saisonaler Spezialpreis", "Kombination aus Innen- und Aussenreinigung", "Limitiertes Angebot", "Rundum-Paket für den Sommer"],
    ablauf: ["Fahrzeugbegutachtung", "Innenreinigung nach Bedarf", "Aussenreinigung per Hand", "Pflege und Schutz", "Übergabe"],
    einsatzbereiche: "Alle Fahrzeuge, Privat- und Firmenfahrzeuge, vor der Sommersaison, für Cabrios und Wohnmobile.",
  },
  "cabrio-dach-versiegeln": {
    was: "Die Cabrio-Dach-Versiegelung schützt Stoffdächer vor Wasser, Schmutz und UV-Strahlung. Wir reinigen das Dach gründlich, imprägnieren es und versiegeln es für langfristigen Schutz.",
    vorteile: ["Wasserabweisender Schutz", "Schutz vor UV-Strahlung und Verwitterung", "Farbe- und Strukturerhalt", "Längere Lebensdauer des Stoffdachs"],
    ablauf: ["Dach gründlich reinigen", "Algen und Ablagerungen entfernen", "Imprägnierung auftragen", "Versiegelung aufbringen", "Trocknung und Kontrolle"],
    einsatzbereiche: "Cabrios mit Stoffdach, vor der Saison, nach der Winterpause, bei Verwitterungserscheinungen.",
  },
  "motor-chassis-reinigung-mfk": {
    was: "Die Motor-/Chassis-Reinigung für die MFK kombiniert die Motorraumreinigung mit der Chassis-Reinigung. Sie entfernt Schmutz, Öl und Korrosion zuverlässig und bereitet das Fahrzeug optimal auf die Prüfung vor.",
    vorteile: ["Optimal vorbereitet für die MFK", "Sauberer Motorraum und Chassis", "Entfernung von Schmutz, Öl und Korrosion", "Positiver Eindruck beim Prüfer"],
    ablauf: ["Motorraum reinigen und konservieren", "Chassis-Reinigung (MFK-gerecht)", "Korrosionsablagerungen entfernen", "Trocknung", "Abschlusskontrolle"],
    einsatzbereiche: "Alle Fahrzeughalter vor der MFK, Occasionen vor dem Verkauf, nach dem Winter.",
  },
  "felgenwaesche": {
    was: "Die Felgenwäsche abmontiert ermöglicht die Reinigung auch schwer zugänglicher Bereiche wie Felgenrückseiten und Radnaben. Wir entfernen Bremsstaub, Strassenschmutz und Ablagerungen schonend und gründlich.",
    vorteile: ["Reinigung auch schwer zugänglicher Bereiche", "Entfernung hartnäckigen Bremsstaubs", "Schonende Reinigung der Felgenoberfläche", "Strahlend saubere Felgen"],
    ablauf: ["Felgen abmontieren", "Vorreinigung und Einweichen", "Gründliche Reinigung inkl. Rückseiten", "Radnaben reinigen", "Trocknung und Kontrolle"],
    einsatzbereiche: "Premium-Felgen, Alufelgen, vor dem Verkauf, Saisonvorbereitung, als Ergänzung zur Aussenreinigung.",
  },
  "felgen-politur": {
    was: "Die Felgen-Politur beseitigt feine Kratzer, Bremsstaub-Rückstände und Verwitterungen auf den Felgen. Wir stellen den ursprünglichen Glanz wieder her und versiegeln auf Wunsch für langanhaltenden Schutz.",
    vorteile: ["Sichtbare Kratzerentfernung", "Wiederherstellung des Glanzes", "Schutz vor erneuter Verschmutzung", "Wertsteigerung der Felgen"],
    ablauf: ["Felgen reinigen", "Politur auftragen und maschinell bearbeiten", "Feinpolitur für perfekten Glanz", "Optionale Versiegelung", "Kontrolle"],
    einsatzbereiche: "Premium-Felgen, Alufelgen, vor dem Verkauf, gepflegte Occasionen, nach Maschinenwaschschäden.",
  },
  "versiegelung": {
    was: "Die Lackversiegelung bildet eine Schutzschicht auf dem Fahrzeuglack, die Schmutz, Wasser und Umwelteinflüssen abweist. Wir bieten Wachs- und Nanoversiegelung je nach Bedarf.",
    vorteile: ["Langfristiger Lackschutz", "Abweisung von Schmutz und Wasser", "Dauerhafter Glanz", "Deutlich einfachere Pflege"],
    ablauf: ["Lack reinigen und dekontaminieren", "Versiegelung auftragen", "Schutzschicht aufbauen", "Aushärten", "Kontrolle und Finish"],
    einsatzbereiche: "Alle Fahrzeuge, nach der Politur, als eigenständiger Lackschutz, Premium-Fahrzeuge, Neufahrzeuge.",
  },
};

// Before/After images nur für Innenreinigung
const beforeAfterImages = {
  innenreinigung: { before: images.before, after: images.after },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  if (slug === "sommer-aktion") {
    return <Navigate to="/sommer-aktion" replace />;
  }
  if (addonRedirects[slug]) {
    return <Navigate to={`/dienstleistungen/${addonRedirects[slug]}`} replace />;
  }
  const seoSvc = seoServices.find((s) => s.slug === slug) || seoServices[0];
  const coreService = services.find((s) => s.slug === slug);
  const content = serviceContent[seoSvc.slug] || serviceContent.autoaufbereitung;
  const relatedLPs = landingpages.filter((lp) => lp.serviceSlug === seoSvc.slug);
  const beforeAfter = beforeAfterImages[slug];
  const categoryData = serviceCategories[slug];
  const selectedPkgData = categoryData?.packages.find((p) => p.name === selectedPackage);
  const dynamicBookingUrl = selectedPkgData?.bookingUrl || coreService?.bookingUrl || bookingUrl;

  return (
    <>
      <SEO
        title={seoSvc.title}
        description={seoSvc.description}
        path={`/dienstleistungen/${seoSvc.slug}`}
        type="service"
        serviceName={seoSvc.name}
        breadcrumbs={[
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: seoSvc.name },
        ]}
      />
      <Breadcrumb items={[
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: seoSvc.name },
      ]} />

      {/* Hero */}
      <section className="px-5 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">{seoSvc.name}</p>
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{seoSvc.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {seoSvc.heroText || coreService?.summary || `Professionelle ${seoSvc.name} in Zürich Nord – schonend, gründlich, Termin online buchbar.`}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={dynamicBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={phoneUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Was ist diese Dienstleistung */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader eyebrow="Die Dienstleistung" title={`Was ist ${seoSvc.name}?`} />
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{content.was}</p>
              {coreService && coreService.content && coreService.content.map((p, i) => (
                <p key={i} className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{p}</p>
              ))}
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-2xl font-extrabold">Ihre Vorteile</h2>
              <ul className="mt-5 space-y-3">
                {content.vorteile.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="So funktioniert es" title="Unser Ablauf" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.ablauf.map((step, i) => (
              <Reveal key={step} delay={i * 70}>
                <div className="rounded-[1.75rem] border border-border bg-card p-5 shadow-sm">
                  <div className="mb-3 font-heading text-3xl font-extrabold text-primary/20">{i + 1}</div>
                  <p className="text-sm leading-7 sm:text-base">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages (nur für die 3 Kern-Dienstleistungen) */}
      {coreService?.packages && coreService.packages.length > 0 && (
        <section className="bg-secondary/70 px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader center eyebrow="Pakete & Preise" title={`${seoSvc.name} – Unsere Pakete`} text="Transparente Preise, keine versteckten Kosten." />
            <ServicePackageSelector
              serviceSlug={slug}
              packages={coreService.packages}
              serviceName={seoSvc.name}
              selectedPackage={selectedPackage}
              onSelectPackage={setSelectedPackage}
              selectedAddons={selectedAddons}
              onToggleAddon={(name) =>
                setSelectedAddons((current) =>
                  current.includes(name) ? current.filter((i) => i !== name) : [...current, name]
                )
              }
            />
          </div>
        </section>
      )}

      {/* Before/After (nur Innenreinigung) */}
      {beforeAfter && (
        <section className="px-5 py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader center eyebrow="Vorher / Nachher" title="Der Unterschied ist sichtbar" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="overflow-hidden rounded-[1.75rem] shadow-lg">
                  <p className="bg-destructive px-5 py-3 text-sm font-bold text-destructive-foreground">Vorher</p>
                  <img src={beforeAfter.before} alt="Vor der Reinigung" className="w-full h-64 object-cover" />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="overflow-hidden rounded-[1.75rem] shadow-lg">
                  <p className="bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Nachher</p>
                  <img src={beforeAfter.after} alt="Nach der Reinigung" className="w-full h-64 object-cover" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Einsatzbereiche */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader eyebrow="Für wen?" title={`Für wen eignet sich ${seoSvc.name}?`} />
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{content.einsatzbereiche}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <h3 className="font-heading text-xl font-extrabold mb-4">Preisfaktoren</h3>
                <ul className="space-y-2.5">
                  {["Fahrzeugtyp und -grösse", "Verschmutzungsgrad", coreService ? "Gewähltes Paket (Basic / Advanced / Premium)" : "Umfang der gewünschten Leistung", "Zusatzleistungen und Extras", "Zustand von Lack und Innenraum"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={dynamicBookingUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition hover:opacity-90">
                  Jetzt Angebot anfragen <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Regionen + Money Pages */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Einzugsgebiet" title={`${seoSvc.name} – Region Zürich Nord`} />
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {standorte.map((ort) => (
              <Link key={ort.slug} to={`/standorte/${ort.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                {ort.name}
              </Link>
            ))}
          </div>
          {relatedLPs.length > 0 && (
            <div className="mt-8">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Spezifische Infos je Standort</p>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {relatedLPs.map((lp) => (
                  <Link key={`${lp.serviceSlug}-${lp.ortSlug}`} to={`/lp/${lp.serviceSlug}/${lp.ortSlug}`} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary">
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {lp.serviceName} {lp.ortName}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Weitere Dienstleistungen */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="Verwandte Dienstleistungen" title="Das könnte Sie auch interessieren" />
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {seoServices.filter((s) => s.slug !== slug).map((svc) => (
              <Link key={svc.slug} to={`/dienstleistungen/${svc.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                {svc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader center eyebrow="FAQ" title={`Fragen – ${seoSvc.name}`} />
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
            {(serviceFaqs[seoSvc.slug] || [
              { q: `Was kostet eine ${seoSvc.name} bei Ihnen?`, a: `Die Kosten hängen von Fahrzeugtyp, Grösse und Zustand ab. Unsere Pakete beginnen ab CHF 99.–.` },
              { q: `Wie lange dauert eine ${seoSvc.name}?`, a: "Je nach Umfang 1–8 Stunden." },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: "Ja, wir reinigen regelmässig Firmenflotten." },
              { q: "Kann ich online einen Termin buchen?", a: "Ja, in weniger als 60 Sekunden." },
              { q: "Wo befindet sich Ihr Betrieb?", a: "Heerenwiesen 18, 8051 Zürich – erreichbar aus Oerlikon, Schwamendingen, Seebach, Opfikon und Wallisellen." },
            ]).map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="font-bold text-base sm:text-lg">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Alle FAQs anzeigen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold text-background sm:text-3xl lg:text-4xl">Termin buchen für {seoSvc.name}</h2>
            <p className="mt-4 text-base text-background/75 sm:text-lg">
              Termin online buchen oder anrufen – wir sind Mo–Sa erreichbar.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={dynamicBookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin online buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-background/30 px-7 py-4 font-bold text-background transition hover:bg-background hover:text-foreground">
                WhatsApp Anfrage
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}