import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { blogPosts } from "../data/blog";
import { formatDate } from "../utils/format";

export function BlogListPage() {
  return (
    <div>
      <PageHero eyebrow="Aura Journal" title="Editorial stories around jewellery, styling, and modern luxury." description="A fashion-led journal covering office looks, resort glamour, gifting, and how to wear gold-plated jewellery with confidence." image="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1700&q=80" />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">{blogPosts.map((post, index) => <Reveal key={post.slug} delay={index * 70}><Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-[2rem] bg-white shadow-soft"><img src={post.heroImage} alt={post.title} className="h-[320px] w-full object-cover" /><div className="p-8"><p className="text-xs uppercase tracking-[0.24em] text-gold">{post.category}</p><h2 className="mt-3 font-serif text-3xl text-ink">{post.title}</h2><p className="mt-4 text-sm leading-7 text-stone-600">{post.excerpt}</p><p className="mt-6 text-xs uppercase tracking-[0.22em] text-stone-400">{formatDate(post.date)} · {post.readTime}</p></div></Link></Reveal>)}</div>
      </section>
    </div>
  );
}
