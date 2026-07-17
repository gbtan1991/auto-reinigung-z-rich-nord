// Gemeinsame Preis- und Zusatzleistungen-Daten für Offertenrechner und Serviceseiten
import { calensoLinks } from "@/data/siteContent";

export const serviceCategories = {
  innenreinigung: {
    packages: [
      { name: "Basic", price: 99, bookingUrl: calensoLinks.innenreinigung.basic },
      { name: "Advanced", price: 179, bookingUrl: calensoLinks.innenreinigung.advanced },
      { name: "Premium", price: 399, bookingUrl: calensoLinks.innenreinigung.premium },
    ],
    addons: [
      { name: "Geruchsentfernung + Desinfektion", price: 149, bookingUrl: calensoLinks.innenreinigung.geruchsentfernung, serviceSlug: "geruchsentfernung-desinfektion" },
      { name: "Lederpflege", price: 179, bookingUrl: calensoLinks.innenreinigung.lederpflege, serviceSlug: "lederpflege" },
      { name: "Sitze schamponieren", price: 169, bookingUrl: calensoLinks.innenreinigung.sitzeSchamponieren, serviceSlug: "sitze-schamponieren" },
    ],
  },
  aussenreinigung: {
    packages: [
      { name: "Basic", price: 99, bookingUrl: calensoLinks.aussenreinigung.basic },
      { name: "Advanced", price: 149, bookingUrl: calensoLinks.aussenreinigung.advanced },
      { name: "Premium", price: 299, bookingUrl: calensoLinks.aussenreinigung.premium },
    ],
    addons: [
      { name: "Cabrio-Dach versiegeln", price: 199, bookingUrl: calensoLinks.aussenreinigung.cabrioDach, serviceSlug: "cabrio-dach-versiegeln" },
      { name: "Motorraum reinigen", price: 79, bookingUrl: calensoLinks.aussenreinigung.motorraum, serviceSlug: "motorraumreinigung" },
      { name: "Motor-/Chassis-Reinigung MFK", price: 149, bookingUrl: calensoLinks.aussenreinigung.motorChassisMfk, serviceSlug: "motor-chassis-reinigung-mfk" },
      { name: "Felgenwäsche (abmontiert)", price: 79, bookingUrl: calensoLinks.aussenreinigung.felgenwaesche, serviceSlug: "felgenwaesche" },
    ],
  },
  politur: {
    packages: [
      { name: "Basic", price: 419, bookingUrl: calensoLinks.politur.basic },
      { name: "Advanced", price: 559, bookingUrl: calensoLinks.politur.advanced },
      { name: "Premium", price: 1119, bookingUrl: calensoLinks.politur.premium },
    ],
    addons: [
      { name: "Felgen-Politur", price: 349, bookingUrl: calensoLinks.politur.felgenPolitur, serviceSlug: "felgen-politur" },
      { name: "Versiegelung", price: 199, bookingUrl: calensoLinks.politur.versiegelung, serviceSlug: "versiegelung" },
    ],
  },
};