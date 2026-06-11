export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>}
      <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{text}</p>}
    </div>
  );
}