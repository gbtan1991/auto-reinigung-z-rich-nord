import { Briefcase, CheckCircle2 } from "lucide-react";
import SEO from "@/components/site/SEO";
import { images } from "@/data/siteContent";

export default function Jobs() {
  return (
    <>
      <SEO title="Karriere | Autoreinigung Zürich-Nord" description="Karriere bei Autoreinigung Zürich-Nord: Werden Sie Teil eines sorgfältigen Teams für professionelle Fahrzeugpflege in Zürich-Schwamendingen." path="/jobs" image={images.about} />
      <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div><p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">Karriere</p><h1 className="font-heading text-5xl font-extrabold tracking-tight md:text-7xl">Arbeiten, wo Präzision sichtbar wird.</h1><p className="mt-7 text-lg leading-8 text-muted-foreground">Falls aktuell keine offenen Stellen ausgeschrieben sind, freuen wir uns dennoch über motivierte Menschen mit Liebe zum gepflegten Automobil, sorgfältiger Handarbeit und einem Auge fürs Detail.</p></div><img src={images.about} alt="Karriere Autoreinigung Zürich Nord" className="rounded-[2.5rem] shadow-2xl" /></div></section>
      <section className="bg-secondary/70 px-5 py-20 lg:px-8"><div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-card p-8 shadow-xl"><Briefcase className="mb-5 h-8 w-8 text-primary" /><h2 className="font-heading text-3xl font-extrabold">Initiativbewerbung</h2><div className="mt-6 grid gap-3 md:grid-cols-2">{["Sorgfältige Arbeitsweise", "Freude an Fahrzeugpflege", "Zuverlässigkeit", "Teamgeist", "Qualitätsbewusstsein", "Kundenorientierung"].map((item) => <p key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary" /> {item}</p>)}</div><a href="mailto:info@autoreinigung-zuerich-nord.ch?subject=Initiativbewerbung%20Autoreinigung%20Z%C3%BCrich-Nord" className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 font-bold text-primary-foreground">Jetzt bewerben</a></div></section>
    </>
  );
}