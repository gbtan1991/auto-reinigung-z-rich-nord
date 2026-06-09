export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>}
      <h2 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>}
    </div>
  );
}