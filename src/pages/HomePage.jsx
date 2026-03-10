import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PillButton } from "../components/PillButton";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { blogPosts } from "../data/blog";
import { categoryMeta } from "../data/categories";
import { products } from "../data/products";
import { testimonials } from "../data/site";

const gallery = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
];

export function HomePage() {
  const featuredCategories = categoryMeta.slice(0, 5);
  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4);
  const newArrivals = products.filter((product) => product.newArrival).slice(0, 4);
  const occasionBlocks = categoryMeta.slice(5, 9);

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden bg-[#d8c3a8]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80')" }} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gold-fade" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-12 px-6 pb-16 pt-28 sm:items-center lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-luxe text-champagne">Luxury You Can Wear Every Day</p>
            <h1 className="font-serif text-6xl leading-[0.86] text-white sm:text-7xl lg:text-[6.6rem]">A jewellery wardrobe styled like a fashion campaign.</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/82 sm:text-base">Aura Stone blends premium western fashion energy with modern Indian luxury, creating gold-plated jewellery that feels elegant, feminine, and ready for every spotlight.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PillButton as={Link} to="/new-arrivals">Shop New Arrivals</PillButton>
              <PillButton as={Link} to="/shop" variant="secondary">Explore Collection</PillButton>
            </div>
          </Reveal>
          <Reveal delay={160} className="hidden lg:block">
            <div className="ml-auto max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-xl">
              <p className="text-xs uppercase tracking-luxe text-champagne">Made in India</p>
              <p className="mt-4 font-serif text-4xl leading-none">Crafted in India for modern luxury.</p>
              <p className="mt-4 text-sm leading-7 text-white/72">Premium gold-plated silhouettes designed for office wear, party nights, beach escapes, and elevated everyday dressing.</p>
              <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/68"><Sparkles size={16} className="text-champagne" /> Editorially styled best sellers</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="Featured Categories" title="A complete world of gold, curated with a premium fashion eye." description="Discover sculptural categories and occasion-led edits that feel polished from first glance to final checkout." />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {featuredCategories.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <Link to={`/category/${item.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <div className="relative h-[360px] overflow-hidden">
                  <img src={item.heroImage} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-3xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Best Sellers" title="Pieces our community returns to, wears on repeat, and photographs beautifully." description="Runway-minded silhouettes with the comfort and ease needed for everyday styling." /><PillButton as={Link} to="/best-sellers" variant="light">View Best Sellers</PillButton></Reveal><div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{bestSellers.map((product, index) => <Reveal key={product.id} delay={index * 90}><ProductCard product={product} /></Reveal>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Reveal><SectionHeading eyebrow="New Arrivals" title="Fresh drops with polished edge and luxury boutique energy." description="A modern selection of gold-plated styles to update the season with understated glamour." /></Reveal><div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{newArrivals.map((product, index) => <Reveal key={product.id} delay={index * 90}><ProductCard product={product} /></Reveal>)}</div></section>

      <section className="bg-[#f1e7da]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Reveal><SectionHeading eyebrow="Shop by Occasion" title="Style your gold around the life you actually live." description="Beach wear, office polish, party dressing, and everyday casual edits all styled with an editorial finish." align="center" /></Reveal><div className="mt-14 grid gap-6 lg:grid-cols-4">{occasionBlocks.map((item, index) => <Reveal key={item.slug} delay={index * 100}><Link to={`/category/${item.slug}`} className="block overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1"><img src={item.heroImage} alt={item.title} className="h-[320px] w-full object-cover" /><div className="p-6"><p className="text-xs uppercase tracking-[0.24em] text-gold">{item.eyebrow}</p><h3 className="mt-3 font-serif text-3xl text-ink">{item.title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{item.description}</p></div></Link></Reveal>)}</div></div></section>

      <section className="bg-ink text-white"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10"><Reveal><SectionHeading eyebrow="Editorial Campaign" title="Crafted to elevate your presence." description="Aura Stone imagery is built around brown women, western white women, and North Indian beauty framed through premium western styling and campaign-level light." theme="dark" /><div className="mt-10 space-y-5">{["Luxury campaign energy with commerce-ready clarity.", "18K Gold Plated presentation across every shopping surface.", "Designed with elegance. Made in India."].map((line) => <div key={line} className="flex items-start gap-4 text-sm leading-7 text-white/72"><Star size={16} className="mt-1 text-champagne" />{line}</div>)}</div></Reveal><Reveal delay={120} className="overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1500&q=80" alt="Aura Stone editorial campaign" className="h-[620px] w-full object-cover" /></Reveal></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Reveal><SectionHeading eyebrow="Why Aura Stone" title="Fine-looking fashion jewellery with a luxury point of view." description="From tarnish-resistant finishes to lightweight comfort and gifting-ready presentation, every touchpoint is designed to feel elevated." align="center" /></Reveal><div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">{["18K Gold-Plated Finish", "Tarnish-Resistant Feel", "Trend-Led Designs", "Lightweight Everyday Luxury", "Elegant Gifting Experience"].map((item, index) => <Reveal key={item} delay={index * 70}><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 text-center shadow-soft"><h3 className="font-serif text-3xl text-ink">{item}</h3><p className="mt-4 text-sm leading-7 text-stone-600">Made for women who want premium style without sacrificing ease.</p></div></Reveal>)}</div></section>

      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Reveal><SectionHeading eyebrow="Customer Highlights" title="What women love about Aura Stone." description="Polished reviews from women styling Aura Stone from Mumbai to Los Angeles." /></Reveal><div className="mt-14 grid gap-6 lg:grid-cols-3">{testimonials.map((item, index) => <Reveal key={item.name} delay={index * 80}><article className="rounded-[1.75rem] border border-black/5 bg-ivory p-8 shadow-soft"><p className="font-serif text-3xl text-ink">“</p><p className="mt-4 text-sm leading-7 text-stone-600">{item.quote}</p><p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">{item.name} · {item.city}</p></article></Reveal>)}</div></div></section>

      <section className="bg-[#f8f4ed]"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Instagram" title="A social grid that still feels like an editorial spread." description="Clean crops, premium light, and women-led styling in office, casual, party, and resort settings." /><PillButton as={Link} to="/blog" variant="light">Read the Journal</PillButton></Reveal><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{gallery.map((image, index) => <Reveal key={image} delay={index * 70}><div className="overflow-hidden rounded-[1.5rem] bg-white"><img src={image} alt={`Aura Stone gallery ${index + 1}`} className="h-[320px] w-full object-cover transition duration-700 hover:scale-105" /></div></Reveal>)}</div></div></section>

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10"><Reveal><div className="overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-white sm:px-14"><p className="text-center text-xs uppercase tracking-luxe text-champagne">Join the Aura Circle</p><h2 className="mx-auto mt-5 max-w-3xl text-center font-serif text-5xl leading-none sm:text-6xl">First access to new drops, private offers, and styling notes.</h2><p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-white/72">Subscribe for launch alerts, premium gifting edits, and a closer look at every campaign release.</p><form className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row"><input type="email" placeholder="Enter your email" className="h-14 flex-1 rounded-full border border-white/15 bg-white/5 px-6 text-sm text-white placeholder:text-white/45 focus:border-champagne focus:outline-none" /><button className="h-14 rounded-full bg-gold px-8 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-bronze">Subscribe</button></form></div></Reveal></section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"><Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="From the Journal" title="Fashion notes from the Aura editorial desk." description="Luxury styling, gifting, and seasonal jewellery perspectives." /><Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-gold">View Blog <ArrowRight size={16} /></Link></Reveal><div className="mt-14 grid gap-6 lg:grid-cols-3">{blogPosts.slice(0, 3).map((post, index) => <Reveal key={post.slug} delay={index * 80}><Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-[2rem] bg-white shadow-soft"><img src={post.heroImage} alt={post.title} className="h-[280px] w-full object-cover" /><div className="p-8"><p className="text-xs uppercase tracking-[0.24em] text-gold">{post.category}</p><h3 className="mt-3 font-serif text-3xl text-ink">{post.title}</h3><p className="mt-4 text-sm leading-7 text-stone-600">{post.excerpt}</p></div></Link></Reveal>)}</div></section>
    </div>
  );
}
