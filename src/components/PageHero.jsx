import { Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, description, image, align = "left", overlay = true }) {
  return (
    <section className="relative overflow-hidden bg-[#d8c3a8]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      {overlay ? <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" /> : null}
      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-6 py-16 lg:px-10 lg:py-20">
        <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-luxe text-champagne">{eyebrow}</p>
          <h1 className="font-serif text-5xl leading-none text-white sm:text-6xl lg:text-[4.8rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
