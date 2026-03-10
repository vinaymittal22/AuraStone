import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { blogPosts } from "../data/blog";
import { formatDate } from "../utils/format";

export function BlogDetailPage() {
  const { slug } = useParams();
  const article = blogPosts.find((post) => post.slug === slug) ?? blogPosts[0];
  const related = blogPosts.filter((post) => post.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <PageHero eyebrow={article.category} title={article.title} description={`${formatDate(article.date)} · ${article.readTime} · ${article.author}`} image={article.heroImage} />
      <article className="mx-auto max-w-4xl px-6 py-20 lg:px-10"><Reveal><div className="rounded-[2rem] bg-white p-10 shadow-soft"><div className="space-y-7 text-base leading-8 text-stone-700">{article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-gold"><span>Share</span><span>Instagram</span><span>Pinterest</span><span>WhatsApp</span></div></div></Reveal></article>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10"><Reveal><h2 className="font-serif text-4xl text-ink">Related posts</h2></Reveal><div className="mt-10 grid gap-6 lg:grid-cols-3">{related.map((post, index) => <Reveal key={post.slug} delay={index * 70}><Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-[2rem] bg-white shadow-soft"><img src={post.heroImage} alt={post.title} className="h-[280px] w-full object-cover" /><div className="p-8"><h3 className="font-serif text-3xl text-ink">{post.title}</h3><p className="mt-4 text-sm leading-7 text-stone-600">{post.excerpt}</p></div></Link></Reveal>)}</div></section>
    </div>
  );
}
