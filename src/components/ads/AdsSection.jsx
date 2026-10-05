export default function AdsSection({ id, eyebrow, title, text, children, tinted = false }) {
  return <section id={id} className={`px-5 py-14 lg:px-8 lg:py-20 ${tinted ? 'bg-secondary border-y border-border' : ''}`}>
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 max-w-3xl sm:mb-10">
        {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
        <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
        {text && <p className="mt-4 leading-7 text-muted-foreground">{text}</p>}
      </div>
      {children}
    </div>
  </section>;
}