import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { bookingUrl, navItems, phoneUrl, whatsappUrl } from "@/data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = ({ isActive }) => `text-sm font-semibold tracking-wide transition ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/78 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center">
          <img src="https://media.base44.com/images/public/6a27b1b13f389ee76e4848a5/564e5face_autoreinigung.png" alt="Autoreinigung Zürich-Nord Logo" className="h-14 w-auto transition group-hover:scale-105" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => <NavLink key={item.href} to={item.href} className={active}>{item.label}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={phoneUrl} className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-md"><Phone className="h-4 w-4" /> Anrufen</a>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg">Termin buchen <ArrowRight className="h-4 w-4" /></a>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menü öffnen">{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <nav className="grid gap-4">
            {navItems.map((item) => <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="text-lg font-bold">{item.label}</Link>)}
            <a href={whatsappUrl} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-4 font-bold"><MessageCircle className="h-5 w-5" /> WhatsApp Chat</a>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 font-bold text-primary-foreground">Online buchen</a>
          </nav>
        </div>
      )}
    </header>
  );
}