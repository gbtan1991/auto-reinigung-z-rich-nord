import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { bookingUrl, navItems, phoneUrl, whatsappUrl } from "@/data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = ({ isActive }) => `text-sm font-semibold tracking-wide transition ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="group flex items-center shrink-0">
          <img src="https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/564e5face_autoreinigung.png" alt="Autoreinigung Zürich-Nord Logo" className="h-32 w-auto transition group-hover:scale-105" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => <NavLink key={item.href} to={item.href} className={active}>{item.label}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a href={phoneUrl} className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"><Phone className="h-4 w-4" /> Anrufen</a>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">Termin buchen <ArrowRight className="h-4 w-4" /></a>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-border lg:hidden" onClick={() => setOpen(!open)} aria-label="Menü öffnen">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base font-semibold hover:bg-secondary hover:text-primary transition-colors">{item.label}</Link>
            ))}
            <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
              <a href={whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-5 py-3.5 font-bold"><MessageCircle className="h-5 w-5 text-primary" /> WhatsApp Chat</a>
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground">Online buchen <ArrowRight className="h-4 w-4" /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}