export function SectionHeading({ eyebrow, title, description, align = "left", theme = "light" }) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleTone = theme === "dark" ? "text-white" : "text-ink";
  const bodyTone = theme === "dark" ? "text-white/72" : "text-stone-600";

  return (
    <div className={alignClass}>
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-gold">{eyebrow}</p> : null}
      <h2 className={`font-serif text-4xl leading-none sm:text-5xl lg:text-[3.5rem] ${titleTone}`}>{title}</h2>
      {description ? <p className={`mt-5 text-sm leading-7 sm:text-base ${bodyTone}`}>{description}</p> : null}
    </div>
  );
}
