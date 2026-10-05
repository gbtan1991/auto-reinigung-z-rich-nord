import { contact, localBusinessSchema } from '@/data/siteContent';
import { logo } from '@/components/ads/adsContent';
export default function BookingOnlyFooter({ onCookies, onLegal }) {
  return <footer className="border-t border-border px-5 pb-28 pt-10 text-sm text-muted-foreground md:pb-10 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-7 sm:grid-cols-3">
        <div><img src={logo} alt="Autoreinigung Zürich Nord" loading="lazy" width="150" height="60" className="mb-3 h-14 w-auto" /><p className="font-semibold text-foreground">{contact.company}</p><p className="mt-1">{localBusinessSchema.legalName}</p></div>
        <div><p>{contact.address}</p><p className="mt-3 leading-6">{contact.hours}</p></div>
        <div className="space-y-2"><p>{contact.phone}</p><p>{contact.mobile}</p><p className="break-all">{contact.email}</p></div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 text-xs">
        <p>© {new Date().getFullYear()} {contact.company}</p>
        <div className="flex flex-wrap gap-5"><button onClick={() => onLegal('impressum')} className="py-2 underline">Impressum</button><button onClick={() => onLegal('datenschutz')} className="py-2 underline">Datenschutz</button><button onClick={onCookies} className="py-2 underline">Cookie-Einstellungen</button></div>
      </div>
    </div>
  </footer>;
}