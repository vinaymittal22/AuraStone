import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export function StoryPage() {
  return (
    <div>
      <PageHero eyebrow="Our Story" title="Aura Stone was created to make luxury-looking jewellery feel beautifully attainable." description="Fashion-first gold-plated jewellery inspired by editorial styling, feminine confidence, and modern Indian craftsmanship." image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1700&q=80" />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10">
        <Reveal><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80" alt="Aura Stone story" className="h-[620px] w-full rounded-[2rem] object-cover shadow-soft" /></Reveal>
        <Reveal delay={100}><SectionHeading eyebrow="The Maison" title="Accessible luxury with fashion-house emotion." description="Aura Stone began with a simple belief: jewellery should make women feel more polished, more expressive, and more themselves. We design pieces with an editorial eye, but we build them to live in real wardrobes and real routines." /><p className="mt-8 text-sm leading-7 text-stone-600">Our collections celebrate brown women, western white women, and North Indian femininity within one premium visual world. Every Aura Stone piece is crafted in India for modern luxury, bringing brand pride and polish together in a way that feels both global and personal.</p><p className="mt-8 text-sm leading-7 text-stone-600">From office tailoring to resort dressing and after-dark glamour, Aura Stone is made to move with the women who wear it.</p></Reveal>
      </section>
    </div>
  );
}
