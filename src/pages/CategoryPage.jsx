import { useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { categoryMeta } from "../data/categories";
import { products } from "../data/products";

export function CategoryPage() {
  const { slug } = useParams();
  const category = categoryMeta.find((item) => item.slug === slug) ?? categoryMeta[0];
  const filteredProducts = products.filter((product) => {
    if (category.type === "category") return category.match.includes(product.category);
    if (category.type === "occasion") return category.match.includes(product.occasion);
    return product.tags.some((tag) => category.match.includes(tag));
  });

  return (
    <div>
      <PageHero eyebrow={category.eyebrow} title={category.title} description={category.description} image={category.heroImage} />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal><SectionHeading eyebrow="Curated Selection" title={`An edit of ${filteredProducts.length} pieces, chosen for ${category.title.toLowerCase()}.`} description="Each product is styled with a refined fashion lens, balancing editorial imagery with premium commerce clarity." /></Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{filteredProducts.map((product, index) => <Reveal key={product.id} delay={index * 60}><ProductCard product={product} /></Reveal>)}</div>
      </section>
    </div>
  );
}
