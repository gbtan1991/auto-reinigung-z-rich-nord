import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Clock, Phone } from "lucide-react";
import SEO from "@/components/site/SEO";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { landingpages, standorte, seoServices } from "@/data/seoData";
import Breadcrumb from "@/components/site/Breadcrumb";
import { bookingUrl, phoneUrl, whatsappUrl, contact } from "@/data/siteContent";

// Spezifischer Content pro Kombination (Service + Ort) – kein Duplicate Content
const specificContent = {
  "innenreinigung-oerlikon": {
    einleitung: "Sie suchen professionelle Innenreinigung in Oerlikon? Autoreinigung Zürich-Nord liegt keine 8 Minuten von Oerlikon Zentrum entfernt – ideal für Pendler, die ihren Wagen morgens abgeben und abends sauber abholen. Oerlikon ist geprägt von Geschäftsverkehr, Bahn und hohem Fahrzeugaufkommen: Das spiegelt sich im Innenzustand vieler Fahrzeuge wider.",
    leistungBeschrieb: "Die professionelle Innenreinigung umfasst das vollständige Staubsaugen aller Oberflächen, Shampoonieren von Sitzen und Teppichen, Reinigung von Leder, Kunststoffen, Armaturen und Lüftungskanälen sowie auf Wunsch eine Desinfektion nach dem Anokath-Verfahren. Gerade für Firmenfahrzeuge aus dem Geschäftszentrum Oerlikon – wo täglich Mitarbeitende oder Kunden mitfahren – ist ein hygienisch sauberer Innenraum entscheidend. Wir behandeln jeden Bereich materialschonend und übergeben Ihr Fahrzeug in frischem, gepflegtem Zustand.",
    fuerWen: "Firmenfahrzeuge aus Oerlikon und Leutschenbach, Leasingnehmer vor Rückgabe, Familien mit Kindern oder Haustieren sowie Fahrzeugbesitzer, die Wert auf einen hygienisch sauberen Innenraum legen. Besonders beliebt bei Pendlern, die täglich Bahnhof Oerlikon nutzen und ihr Auto bequem vorher abgeben.",
    lokalerBezug: "Oerlikon ist mit dem Bahnhof Oerlikon, dem zweitgrössten der Schweiz, ein zentraler Knotenpunkt. Viele Nutzer kombinieren die Fahrzeugreinigung mit der ÖV-Fahrt: Wagen morgens abgeben, per Tram 10 oder Buslinie 62 weiterfahren, abends das saubere Auto abholen. Von Neu-Oerlikon, Leutschenbach oder der Messestrasse sind wir in 5–8 Minuten erreichbar.",
    warum: "Oerliker Kunden schätzen besonders die Kombination aus Nähe, Effizienz und Qualität. Keine langen Wartezeiten, kein Automatikbetrieb – jede Reinigung per Hand. Das zahlt sich besonders für Fahrzeuge aus, die täglich im dichten Stadtverkehr unterwegs sind.",
  },
  "aussenreinigung-oerlikon": {
    einleitung: "Ihr Auto zeigt Bremsstaub, Strassendreck oder Salzflecken nach dem Winter? Die professionelle Aussenreinigung bei Autoreinigung Zürich-Nord – 8 Minuten von Oerlikon – bringt Ihr Fahrzeug wieder auf Hochglanz. Handwäsche ohne Kratzer, Felgenreinigung, Scheiben und optionale Lackversiegelung.",
    leistungBeschrieb: "Die Aussenreinigung per Handwäsche schützt Ihren Lack vor Kratzern, die bei Maschinenwäschen entstehen. Wir reinigen Karosserie, Türrahmen, Felgen, Reifen und Scheiben sorgfältig per Hand. Gerade in Oerlikon, wo enger Stadtverkehr, Busspuren und häufiges Einparken den Lack beanspruchen, ist eine schonende Handwäsche die richtige Wahl. Optional: Motorraum, Unterboden, Lackkonservierung.",
    fuerWen: "Privatfahrzeuge und Firmenfahrzeuge aus Oerlikon und Leutschenbach, Premium-Fahrzeuge, foliierte Autos, Fahrzeuge nach der Winterperiode und vor dem Frühjahrsverkauf.",
    lokalerBezug: "Aus dem Herzen Oerlikons – Oerlikon Zentrum, Neu-Oerlikon, Glattpark oder Messe Zürich – sind wir in wenigen Minuten erreichbar. Buslinie 62 oder Tram 10 bringen Sie direkt in unsere Nähe. Viele Oerliker Kunden kombinieren die Aussenreinigung mit einer Innenreinigung für die komplette Aufbereitung.",
    warum: "Wer täglich durch Oerlikon fährt, weiss: Bremsstaub und Strassendreck setzen sich schnell fest. Eine professionelle Handwäsche alle 4–6 Wochen hält den Lack schützend sauber und spart langfristig teure Lackreparaturen.",
  },
  "leasingrueckgabe-zuerich": {
    einleitung: "Leasingvertrag läuft aus? Vermeiden Sie teure Nachforderungen mit einer professionellen Leasingrückgabe-Reinigung. Autoreinigung Zürich-Nord ist der Spezialist für Leasingrückgabe in Zürich – Innen und Aussen aus einer Hand, transparent und zuverlässig.",
    leistungBeschrieb: "Die Leasingrückgabe-Reinigung bereitet Ihr Fahrzeug optimal auf den Übergabetermin vor. Wir reinigen den Innenraum vollständig, entfernen Flecken, Gerüche und Schmutzspuren. Aussen: Handwäsche, Felgenreinigung, Scheiben innen und aussen. Auf Wunsch: leichte Kratzer reduzieren durch Politur, Geruchsbeseitigung und vollständige Aufbereitung. Viele Leasingnehmer in Zürich sparen durch unsere professionelle Aufbereitung Hunderte von Franken an Nachforderungen des Leasinggebers.",
    fuerWen: "Alle Leasingnehmer in Zürich bei Vertragsende, Unternehmen mit Flottenleasingfahrzeugen, Langzeitmieter und alle, die bei der Fahrzeugrückgabe keine bösen Überraschungen erleben möchten.",
    lokalerBezug: "Zürich ist die Hochburg des Fahrzeugleasings in der Schweiz. Besonders in Zürich Nord, Oerlikon, Schwamendingen und Seebach sind Leasingfahrzeuge weit verbreitet. Unser Betrieb an der Heerenwiesen 18 ist aus allen Stadtteilen Zürichs schnell erreichbar – ideal für eine letzte professionelle Aufbereitung vor der Rückgabe.",
    warum: "Ein professionell gereinigtes Fahrzeug hinterlässt beim Leasinggeber einen guten Eindruck und vermeidet Kostenpunkte im Übergabeprotokoll. Wir kennen die Standards und bereiten Ihr Fahrzeug optimal vor.",
  },
  "autoaufbereitung-zuerich": {
    einleitung: "Professionelle Autoaufbereitung in Zürich – komplett, persönlich und mit sichtbarem Ergebnis. Autoreinigung Zürich-Nord bietet die vollständige Fahrzeugaufbereitung für Privat- und Firmenfahrzeuge: Innen, Aussen, Politur und Versiegelung aus einer Hand.",
    leistungBeschrieb: "Die vollständige Autoaufbereitung kombiniert Innenreinigung, Aussenreinigung, Lackpolitur und optionale Keramikversiegelung zu einem rundum erneuerten Fahrzeug. Jede Aufbereitung beginnt mit einer Zustandserfassung: Wir beurteilen Lack, Innenraum, Felgen und Motorraum und empfehlen das passende Paket. Das Ergebnis: ein Fahrzeug, das aussieht, riecht und fährt wie frisch aus dem Showroom – ideal für Verkauf, Leasingrückgabe oder einfach für den eigenen Anspruch.",
    fuerWen: "Fahrzeugbesitzer in Zürich, die eine vollständige Aufbereitung suchen: vor dem Verkauf, nach langer Nutzung, für die Leasingrückgabe oder als jährliche Grundpflege. Beliebt auch für Geschäftsfahrzeuge aus Zürich City und Zürich Nord.",
    lokalerBezug: "Zürich bietet eine hohe Dichte an Fahrzeughaltern mit dem Anspruch auf Qualität. Viele Zürcherinnen und Zürcher entscheiden sich für eine vollständige Aufbereitung statt Verkauf – weil ein gepflegtes Fahrzeug im Wiederverkauf deutlich mehr wert ist. Wir sind von allen Zürcher Stadtteilen erreichbar.",
    warum: "Eine vollständige Autoaufbereitung in Zürich ist keine Frage des Luxus – sie ist eine Investition in den Werterhalt Ihres Fahrzeugs. Bei uns bekommen Sie professionelle Handarbeit, keine Automatik, zu fairen Preisen.",
  },
  "autoaufbereitung-oerlikon": {
    einleitung: "Autoaufbereitung in Oerlikon – professionell, gründlich, in Ihrer Nähe. Autoreinigung Zürich-Nord liegt 8 Minuten von Oerlikon und bietet die vollständige Fahrzeugaufbereitung für Privat- und Firmenfahrzeuge aus dem Zentrum Zürich Nords.",
    leistungBeschrieb: "Für Fahrzeuge aus Oerlikon und der Umgebung bieten wir die vollständige Aufbereitung mit Innenreinigung, Handwäsche aussen, Felgenreinigung, Lackpolitur und optionaler Versiegelung. Oerlikon ist ein hochfrequentierter Wirtschaftsstandort – Fahrzeuge sind hier täglich Stadtverkehr, Bahnhofsnähe und intensivem Einsatz ausgesetzt. Die vollständige Aufbereitung alle 6–12 Monate ist die beste Pflege für den Werterhalt.",
    fuerWen: "Firmenflotten aus Leutschenbach und dem Glattpark, Privatfahrzeuge aus Oerlikon Zentrum und Neu-Oerlikon, Leasingfahrzeuge vor Rückgabe und Occasionsfahrzeuge vor dem Verkauf.",
    lokalerBezug: "Oerlikon ist der Geschäftsmittelpunkt von Zürich Nord. Viele Unternehmen hier unterhalten eigene Flotten oder Poolfahrzeuge, die regelmässige professionelle Aufbereitung benötigen. Wir haben langjährige Erfahrung mit Oerliker Firmenkunden und kennen die Anforderungen: schnell, zuverlässig, professionell.",
    warum: "Kunden aus Oerlikon schätzen die Effizienz: Wagen morgens abgeben, per Tram oder Bus weiterfahren, abends ein vollständig aufbereitetes Fahrzeug abholen. Kein Aufwand, maximales Ergebnis.",
  },
  "innenreinigung-zuerich": {
    einleitung: "Professionelle Innenreinigung in Zürich – für Familien, Firmen und alle, die Wert auf einen sauberen, hygienischen Innenraum legen. Autoreinigung Zürich-Nord reinigt Ihren Fahrzeuginnenraum gründlich, materialschonend und mit sichtbarem Ergebnis.",
    leistungBeschrieb: "Die Innenreinigung umfasst das vollständige Staubsaugen, Shampoonieren von Sitzen und Teppichen, Lederreinigung und -pflege, Reinigung von Armaturen, Lüftungskanälen und Ritzen sowie auf Wunsch eine vollständige Desinfektion. Zürich mit seinem intensiven Stadtverkehr und vielen Pendlern bringt besondere Anforderungen: Schmutz, Abgase und Feuchtigkeit setzen sich im Innenraum fest. Wir reinigen professionell – nicht nur oberflächlich.",
    fuerWen: "Familien mit Kindern, Tierhalter, Pendler, Leasingnehmer vor Rückgabe, Firmenfahrzeuge und alle, die einen hygienisch sauberen Innenraum in ihrem Zürcher Fahrzeug schätzen.",
    lokalerBezug: "Zürich ist eine dichte, vielgenutzte Stadt – Fahrzeuge werden intensiv genutzt. Wir reinigen Fahrzeuge aus allen Stadtteilen: Zürich City, Oerlikon, Schwamendingen, Seebach, Altstetten, Wiedikon und mehr. Erreichbar von überall in Zürich, zentrale Lage in Zürich-Schwamendingen.",
    warum: "Ein sauberer Innenraum ist keine Frage des Komforts, sondern der Hygiene – besonders wenn täglich Kinder, Kollegen oder Kunden mitfahren. Wir bieten Zürcher Qualität zu fairen Preisen.",
  },
  "handwasche-oerlikon": {
    einleitung: "Handwäsche in Oerlikon – schonend, kratzerlos und professionell. Bei Autoreinigung Zürich-Nord, 8 Minuten von Oerlikon, reinigen wir Ihr Fahrzeug nach der Zwei-Eimer-Methode per Hand. Kein Automatikbetrieb, kein Lackkratzer.",
    leistungBeschrieb: "Die Handwäsche per Zwei-Eimer-Methode ist die schonendste Form der Fahrzeugwäsche und der einzige empfehlenswerte Weg für Fahrzeuge mit empfindlichem Lack, Folierungen oder Keramikversiegelung. Wir reinigen Karosserie, Felgen, Reifen und Scheiben komplett von Hand. Optional: Lackkonservierung, Felgenversiegelung, Reifenglanzpflege. In Oerlikon mit seinem dichten Verkehr sind Fahrzeuge ständig Bremsstaub und Schmutz ausgesetzt – regelmässige Handwäsche ist die beste Langzeitinvestition.",
    fuerWen: "Besitzer von Premium-Fahrzeugen, Sportwagen, folierten Autos oder Fahrzeugen mit Keramikversiegelung aus Oerlikon und Zürich Nord. Empfehlenswert für alle, die keine Kratzer durch Bürsten riskieren wollen.",
    lokalerBezug: "Oerlikon und der Glattpark sind bekannt für gehobene Fahrzeugklassen und Firmenwagen. Eine Automatikwaschanlage ist für diese Fahrzeuge keine Option. Unsere Handwäsche in unmittelbarer Nähe ist die logische Lösung für anspruchsvolle Fahrzeugbesitzer aus Oerlikon.",
    warum: "Handwäsche bei Autoreinigung Zürich-Nord ist kein Luxus – es ist die richtige Behandlung für ein Fahrzeug, das Ihnen wichtig ist. Günstig, lokal, professionell.",
  },
  "politur-zuerich": {
    einleitung: "Autopolitur in Zürich – Kratzerentfernung, Glanzwiederherstellung und Lackpflege vom Profi. Autoreinigung Zürich-Nord bietet professionelle Lackpolitur für Zürcherinnen und Zürcher, die den ursprünglichen Glanz ihres Fahrzeugs wiederherstellen möchten.",
    leistungBeschrieb: "Die professionelle Lackpolitur mit der Maschine entfernt feine Kratzer, Hologramme, Oxidationen und matte Stellen aus der Lackoberfläche. Wir analysieren zuerst den Lackzustand und wählen das passende Poliermittel und Pad. Das Ergebnis: ein spiegelglatter, strahlender Lack wie am ersten Tag. Besonders in Zürich, wo enge Parkhäuser, Automatikwaschanlagen und Bürsten für Hologramme und feine Kratzer sorgen, ist eine professionelle Politur die beste Massnahme.",
    fuerWen: "Fahrzeugbesitzer in Zürich, die feine Kratzer aus dem Stadtverkehr, Parkplatzschäden oder Maschinenwäschen entfernen möchten. Empfehlenswert vor dem Verkauf, für die Leasingrückgabe und für Fahrzeuge mit wertvollem Lack.",
    lokalerBezug: "Zürich bietet viele enge Parkhäuser, dichten Verkehr und häufige Maschinenwäschen – der Feind eines makellosen Lacks. Viele Züricher Fahrzeuge weisen Hologramme und feine Kratzer auf, die nur mit maschineller Politur beseitigt werden können. Wir sind die Politur-Spezialisten in Zürich Nord.",
    warum: "Eine Lackpolitur ist die effizienteste Methode, den Wert Ihres Fahrzeugs spürbar zu steigern. Sichtbare Verbesserung nach einem Nachmittag – für weniger als eine Fahrzeuglackierung.",
  },
  "mfk-vorbereitung-zuerich": {
    einleitung: "MFK steht an? Eine professionelle Reinigung vor der Motorfahrzeugkontrolle hinterlässt beim Prüfer einen guten Eindruck und erleichtert die technische Inspektion. Autoreinigung Zürich-Nord ist Ihr Spezialist für MFK-Vorbereitung in Zürich.",
    leistungBeschrieb: "Die MFK-Vorbereitung umfasst die gründliche Reinigung von Motorraum, Unterboden, Fahrwerk und Karosserie. Ein sauberer Motorraum erleichtert die Fehlerdiagnose und zeigt dem Prüfer, dass das Fahrzeug sorgfältig gepflegt wird. Wir entfernen Öl, Schmutz und Ablagerungen aus dem Motorraum, reinigen Unterboden und Fahrwerk von Salz und Korrosion und bereiten die Karosserie aussenrein vor. Alles aus einer Hand, am selben Tag.",
    fuerWen: "Alle Fahrzeughalter in Zürich vor der periodischen MFK, Occasionsverkäufer, Fuhrparkbetreiber und alle, die bei der Motorfahrzeugkontrolle professionell auftreten möchten.",
    lokalerBezug: "In Zürich gibt es zahlreiche MFK-Stationen: in Schwamendingen, Oerlikon, Altstetten und weiteren Stadtteilen. Wer die Reinigung und die MFK in Zürich Nord kombinieren möchte, ist bei uns ideal aufgehoben. Wir sind unmittelbar vor der Prüfung buchbar.",
    warum: "Ein sauberer Motorraum und eine gepflegte Karosserie signalisieren dem Prüfer, dass das Fahrzeug gut gewartet wird. Das kostet wenig – kann aber bei der Prüfung einen grossen Unterschied machen.",
  },
  "keramikversiegelung-zuerich": {
    einleitung: "Keramikversiegelung in Zürich – der modernste und dauerhafteste Schutz für Ihren Fahrzeuglack. Autoreinigung Zürich-Nord bietet professionelle Keramikbeschichtungen für Zürcherinnen und Zürcher, die ihren Lack langfristig schützen möchten.",
    leistungBeschrieb: "Die Keramikversiegelung bildet eine harte, wasserabweisende Schutzschicht auf Ihrem Lack, die Kratzer, UV-Strahlung, Schmutz und chemische Einflüsse abwehrt. Voraussetzung ist eine vollständige Reinigung und Lackpolitur, die wir ebenfalls übernehmen. Das Ergebnis hält mehrere Jahre – im Gegensatz zu Wachsversiegelungen, die nach wenigen Monaten nachlassen. In Zürich mit seinem ganzjährigen Strassendreck, Salz im Winter und intensiver UV-Strahlung im Sommer ist die Keramikversiegelung die klügste Investition in den Lackschutz.",
    fuerWen: "Besitzer von Neufahrzeugen, Premium-Fahrzeugen und Sportwagen in Zürich, die ihren Lack dauerhaft schützen möchten. Empfehlenswert für alle Fahrzeuge, bei denen Werterhalt Priorität hat.",
    lokalerBezug: "Zürich ist eine anspruchsvolle Stadt für Fahrzeuglacke: Winter mit Salz und Splitt, Sommer mit UV und Baumharz, ganzjährig enger Stadtverkehr. Eine Keramikversiegelung schützt ganzjährig und macht die Pflege einfacher. Wir sind die Spezialisten in Zürich Nord.",
    warum: "Wer ein hochwertiges Fahrzeug fährt, sollte es auch professionell schützen. Eine Keramikversiegelung bei Autoreinigung Zürich-Nord ist die langfristig günstigste Form des Lackschutzes.",
  },
  "innenreinigung-wallisellen": {
    einleitung: "Innenreinigung in Wallisellen – kurze Anfahrt, professionelles Ergebnis. Autoreinigung Zürich-Nord liegt 10 Minuten von Wallisellen und bietet die komplette Innenreinigung für Privatfahrzeuge und Firmenflotten aus dem Glattal.",
    leistungBeschrieb: "Fahrzeuge aus Wallisellen und dem Glattpark sind oft Teil von Geschäftsflotten oder gehören Premium-Fahrzeughaltern, die hohe Ansprüche stellen. Wir reinigen den Innenraum vollständig: Staubsaugen, Shampoonieren, Leder reinigen und pflegen, Armaturen und Lüftungskanäle behandeln. Auf Wunsch Desinfektion und Geruchsbeseitigung. Das Glattzentrum und der Businesspark Glattpark sind bekannt für Firmenfahrzeuge der gehobenen Klasse – wir kennen die Anforderungen.",
    fuerWen: "Firmenflotten aus dem Businesspark Glattpark, Leasingnehmer vor Rückgabe, Premium-Fahrzeugbesitzer aus Wallisellen-Dorf und Auzelg sowie Familien mit Kindern.",
    lokalerBezug: "Von Wallisellen nach Zürich-Schwamendingen: ca. 10 Minuten mit dem Auto über die A1 oder via Dübendorferstrasse. S-Bahn S3/S9 ab Bahnhof Wallisellen bis Oerlikon in 8 Minuten. Viele Walliseller Kunden kombinieren die Reinigung mit einem Einkauf im Glattzentrum.",
    warum: "Wallisellen ist eine wohlhabende Gemeinde mit überdurchschnittlichem Fahrzeugbestand. Professionelle Innenreinigung ist hier kein Ausnahmefall, sondern Standard für die Pflege hochwertiger Fahrzeuge.",
  },
  "autoaufbereitung-wallisellen": {
    einleitung: "Autoaufbereitung in Wallisellen – für Fahrzeuge mit hohen Ansprüchen. Autoreinigung Zürich-Nord ist die bevorzugte Anlaufstelle für Walliseller Fahrzeugbesitzer und Firmenkunden, die eine vollständige professionelle Aufbereitung suchen.",
    leistungBeschrieb: "Die vollständige Aufbereitung für Fahrzeuge aus Wallisellen umfasst Innenreinigung, Aussenreinigung per Handwäsche, Lackpolitur und auf Wunsch Keramikversiegelung. Besonders im Glattal, wo viele Unternehmen und wohlhabende Privatpersonen wohnen, ist die vollständige Fahrzeugaufbereitung gefragter Bestandteil regelmässiger Fahrzeugpflege. Wir übernehmen den gesamten Prozess – von der ersten Begutachtung bis zur Übergabe.",
    fuerWen: "Unternehmen mit Geschäftsflotten aus dem Businesspark Glattpark und Glattzentrum, Leasingnehmer, Privatfahrzeugbesitzer mit Premium- und Mittelklassefahrzeugen sowie Walliseller Autohändler vor Occasionsverkauf.",
    lokalerBezug: "Wallisellen hat eine der höchsten Autodichten im Kanton Zürich. Das Glattal ist ein wirtschaftlich starkes Gebiet mit hohem Bedarf an professioneller Fahrzeugpflege. Wir betreuen regelmässig Kunden aus Wallisellen und Umgebung und bieten verlässliche Qualität.",
    warum: "Für Walliseller Firmenkunden bieten wir Flottenverträge und individuelle Lösungen. Rufen Sie uns an – wir erstellen Ihnen ein massgeschneidertes Angebot.",
  },
  "innenreinigung-schwamendingen": {
    einleitung: "Innenreinigung in Schwamendingen – um die Ecke, professionell, zuverlässig. Autoreinigung Zürich-Nord liegt direkt in Zürich-Schwamendingen und ist für Kunden aus diesem Quartier besonders schnell erreichbar.",
    leistungBeschrieb: "Als Betrieb in Schwamendingen kennen wir unsere Kunden aus dem Quartier besonders gut: Familien, deren Fahrzeuge von Kindern intensiv genutzt werden, Tierhalter mit Hundegeruch im Innenraum, Pendler, die täglich unterwegs sind. Die Innenreinigung umfasst vollständiges Staubsaugen, Shampoonieren, Geruchsbeseitigung, Lederreinigung und die gründliche Behandlung aller Oberflächen. Als lokaler Betrieb sind wir Ihr direkter Ansprechpartner.",
    fuerWen: "Familien aus Schwamendingen-Mitte, Hirzenbach, Saatlen und Auzelg, Tierhalter, Leasingnehmer, Pendler sowie alle Anwohner, die einen hygienisch sauberen Innenraum möchten.",
    lokalerBezug: "Wir sind ein lokaler Betrieb in Zürich-Schwamendingen. Unsere Kunden aus dem Quartier sind oft auch Stammkunden, die mehrmals im Jahr zu uns kommen. Schwamendingerstrasse, Zürichbergstrasse oder direkt zu Fuss – wir sind direkt vor Ort.",
    warum: "Als lokaler Betrieb kennen wir die Bedürfnisse der Schwamendinger Bevölkerung. Kurze Wege, persönlicher Service, faire Preise – das ist unser Versprechen an unser Quartier.",
  },
  "leasingrueckgabe-opfikon": {
    einleitung: "Leasingrückgabe in Opfikon? Vermeiden Sie kostspielige Nachforderungen durch professionelle Aufbereitung. Autoreinigung Zürich-Nord, 10 Minuten von Opfikon-Glattbrugg, ist Ihr Spezialist für Leasingrückgabe in der Flughafenregion.",
    leistungBeschrieb: "Die Leasingrückgabe-Reinigung für Fahrzeuge aus Opfikon und Glattbrugg ist eine unserer gefragtesten Leistungen. In der Flughafenregion, wo viele internationale Unternehmen und Flughafen-Pendler Leasingfahrzeuge nutzen, ist eine professionelle Aufbereitung vor der Rückgabe Standard. Wir reinigen Innen und Aussen vollständig, entfernen Flecken und Gerüche, reduzieren leichte Kratzer durch Politur und übergeben das Fahrzeug in bestmöglichem Zustand.",
    fuerWen: "Leasingnehmer aus Opfikon, Glattbrugg und der Flughafenregion, internationale Mitarbeitende in der Region, Unternehmen mit Leasingflotten in Balsberg und dem Industriegebiet sowie Privatpersonen vor Leasingrückgabe.",
    lokalerBezug: "Opfikon-Glattbrugg liegt direkt an der Grenze zu Zürich und in unmittelbarer Flughafennähe. Viele internationale Unternehmen haben hier ihre Schweizer Büros und unterhalten Leasingflotten. Die Anforderungen an die Fahrzeugrückgabe sind hoch. Wir kennen die Standards und bereiten Ihr Fahrzeug professionell vor. Von Opfikon via A51 oder Leutschenbachstrasse sind wir in 10 Minuten erreichbar.",
    warum: "In der Flughafenregion sind Leasingverträge Standard. Wir helfen Ihnen, das Fahrzeug ohne Mängel zurückzugeben und teure Nachforderungen zu vermeiden. Buchen Sie frühzeitig – Termine sind gefragt.",
  },
};

// Fallback für nicht spezifisch definierte Kombinationen
const getLandingContent = (serviceSlug, ortSlug, ortName, serviceName) => {
  const key = `${serviceSlug}-${ortSlug}`;
  if (specificContent[key]) return specificContent[key];
  // Fallback (sollte nicht aufgerufen werden für produktive LPs)
  return {
    einleitung: `Sie suchen professionelle ${serviceName} in ${ortName}? Autoreinigung Zürich-Nord an der Heerenwiesen 18, 8051 Zürich ist die erste Adresse für Kunden aus ${ortName}. Kurze Anfahrt, professionelle Handarbeit, faire Preise.`,
    leistungBeschrieb: `Unsere ${serviceName} für Fahrzeuge aus ${ortName} umfasst eine professionelle Behandlung nach höchsten Standards. Jedes Fahrzeug wird individuell begutachtet, mit hochwertigen Produkten behandelt und in gepflegtem Zustand übergeben. Wir haben langjährige Erfahrung mit Fahrzeugen aus der Region Zürich Nord.`,
    fuerWen: `Privatfahrzeuge, Firmenfahrzeuge und Leasingfahrzeuge aus ${ortName}. Empfehlenswert vor MFK, Leasingrückgabe oder Fahrzeugverkauf.`,
    lokalerBezug: `${ortName} und Zürich-Schwamendingen sind gut verbunden. Unser Betrieb an der Heerenwiesen 18 ist von ${ortName} schnell erreichbar – per Auto oder ÖV via Oerlikon.`,
    warum: `Kunden aus ${ortName} wählen uns wegen der kurzen Anfahrt, der professionellen Handarbeit und der transparenten Preise. Buchen Sie online oder rufen Sie uns an.`,
  };
};

export default function LandingPage() {
  const { service, ort } = useParams(); // route: /lp/:service/:ort
  const lp = landingpages.find((l) => l.serviceSlug === service && l.ortSlug === ort);
  const ortData = standorte.find((s) => s.slug === ort);
  const svcData = seoServices.find((s) => s.slug === service);

  if (!lp || !ortData || !svcData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-extrabold">Seite nicht gefunden</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary font-bold">
            <ArrowRight className="h-4 w-4" /> Zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  const content = getLandingContent(service, ort, ortData.name, lp.serviceName);
  const title = `${lp.serviceName} ${ortData.name} | Autoreinigung Zürich Nord`;
  const description = `${lp.serviceName} in ${ortData.name} – professionelle Fahrzeugpflege von Autoreinigung Zürich-Nord. Termin online buchen.`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        path={`/lp/${service}/${ort}`}
        type="service"
        serviceName={lp.serviceName}
        ortName={ortData.name}
        breadcrumbs={[
          { label: "Dienstleistungen", href: "/dienstleistungen" },
          { label: lp.serviceName, href: `/dienstleistung/${service}` },
          { label: ortData.nameFull },
        ]}
      />
      <Breadcrumb items={[
        { label: "Dienstleistungen", href: "/dienstleistungen" },
        { label: lp.serviceName, href: `/dienstleistung/${service}` },
        { label: ortData.nameFull },
      ]} />

      {/* Hero */}
      <section className="px-5 py-12 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              {lp.serviceName} in {ortData.name}
            </p>
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {lp.serviceName} in {ortData.nameFull}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {content.einleitung}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={phoneUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                <Phone className="h-4 w-4" /> {contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow={`${lp.serviceName} in ${ortData.name}`}
                title={`${lp.serviceName} in ${ortData.nameFull}`}
              />
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{content.leistungBeschrieb}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <h2 className="font-heading text-xl font-extrabold mb-4">Für wen geeignet?</h2>
                <p className="text-sm leading-7 text-muted-foreground">{content.fuerWen}</p>
                <div className="mt-5 space-y-2.5">
                  {["Privatfahrzeuge und Familienfahrzeuge", "Firmenfahrzeuge und Flotten", "Leasingfahrzeuge vor Rückgabe", "Fahrzeuge vor MFK oder Verkauf"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow="So läuft es ab" title="In 3 Schritten zum sauberen Auto" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { step: "1", title: "Termin buchen", text: "Online in 60 Sekunden – flexibel, ohne Wartezeit." },
              { step: "2", title: "Fahrzeug bringen", text: `Heerenwiesen 18, 8051 Zürich – schnell erreichbar aus ${ortData.name}.` },
              { step: "3", title: "Sauberes Auto abholen", text: "Ihr Fahrzeug wartet gereinigt und gepflegt auf Sie." },
            ].map((item) => (
              <Reveal key={item.step} delay={parseInt(item.step) * 80}>
                <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm text-center">
                  <div className="mb-3 font-heading text-4xl font-extrabold text-primary/20">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lokaler Bezug & Erreichbarkeit */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
                {lp.serviceName} für Kunden aus {ortData.nameFull}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{content.lokalerBezug}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <h3 className="font-heading text-lg font-extrabold">Erreichbarkeit ab {ortData.name}</h3>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{ortData.erreichbarkeit}</p>
                <div className="mt-5 space-y-2 border-t border-border pt-5">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{contact.hours}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{contact.address}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader center eyebrow={`Warum Kunden aus ${ortData.name}`} title={`Warum Kunden aus ${ortData.name} uns wählen`} />
          <Reveal>
            <p className="mt-5 max-w-3xl mx-auto text-center text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{content.warum}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Professionelle Handarbeit", text: "Jede Reinigung per Hand – kein Automatikbetrieb, kein Lackkratzer." },
              { title: "Faire Preise", text: "Transparente Pakete ab CHF 70.– ohne versteckte Kosten." },
              { title: "Flexibel buchbar", text: "Termin online sichern – 24/7, in weniger als 60 Sekunden." },
              { title: "Alle Fahrzeugtypen", text: "Von Kleinwagen bis Transporter, Privatfahrzeug bis Flotte." },
              { title: "Werterhalt durch regelmässige Pflege", text: "Professionell gereinigte Fahrzeuge erzielen beim Verkauf und bei der Leasingrückgabe deutlich bessere Resultate." },
              { title: `Kurze Anfahrt aus ${ortData.name}`, text: "Schnell erreichbar per Auto oder ÖV." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="rounded-[1.75rem] border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-primary" />
                  <h3 className="font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-6">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/70 px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader center eyebrow="FAQ" title={`Fragen – ${lp.serviceName} ${ortData.name}`} />
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
            {[
              { q: `Bieten Sie ${lp.serviceName} für Kunden aus ${ortData.name} an?`, a: `Ja, wir sind die bevorzugte Anlaufstelle für Kunden aus ${ortData.name} – schnell und bequem erreichbar.` },
              { q: `Was kostet eine ${lp.serviceName} bei Ihnen?`, a: `Unsere Pakete beginnen ab CHF 70.–. Der genaue Preis hängt von Fahrzeugtyp und Zustand ab – buchen Sie online oder rufen Sie uns kurz an.` },
              { q: "Wie lange dauert die Reinigung?", a: "Je nach Umfang 1–8 Stunden. Wir informieren Sie bei der Buchung über die voraussichtliche Dauer." },
              { q: "Kann ich online buchen?", a: "Ja, in weniger als 60 Sekunden – bequem von zu Hause oder unterwegs." },
              { q: "Nehmen Sie auch Firmenfahrzeuge an?", a: `Ja, wir reinigen regelmässig Firmenflotten aus ${ortData.name}. Kontaktieren Sie uns für ein individuelles Angebot.` },
            ].map((item) => (
              <div key={item.q} className="p-5">
                <h3 className="font-bold text-base sm:text-lg">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              {lp.serviceName} in {ortData.name} – jetzt buchen
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Termin online sichern oder direkt anrufen – wir sind für Sie da.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">
                Termin online buchen <ArrowRight className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-bold transition hover:border-primary hover:text-primary">
                WhatsApp Anfrage
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}