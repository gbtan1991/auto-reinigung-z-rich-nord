import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items }) {
  // items: [{ label, href }] – letztes item ist aktive Seite (kein href nötig)
  return (
    <nav aria-label="Breadcrumb" className="px-5 pt-6 pb-0 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors" itemProp="item">
              <Home className="h-3.5 w-3.5" />
              <span itemProp="name" className="sr-only">Startseite</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <ChevronRight className="h-3.5 w-3.5 shrink-0" />
              {item.href ? (
                <Link to={item.href} className="hover:text-primary transition-colors" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-foreground font-medium" itemProp="name">{item.label}</span>
              )}
              <meta itemProp="position" content={String(i + 2)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}