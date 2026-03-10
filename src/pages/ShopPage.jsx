import { useMemo, useState } from "react";
import { FilterSidebar } from "../components/FilterSidebar";
import { PageHero } from "../components/PageHero";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { products } from "../data/products";
import { applyProductFilters, sortProducts } from "../utils/shop";

export function ShopPage({ preset }) {
  const [filters, setFilters] = useState({ category: "all", price: "all", occasion: "all", tone: "all", bestSeller: preset === "best", newArrival: preset === "new" });
  const [sortBy, setSortBy] = useState(preset === "new" ? "newest" : preset === "best" ? "best" : "featured");
  const filteredProducts = useMemo(() => sortProducts(applyProductFilters(products, filters), sortBy), [filters, sortBy]);

  return (
    <div>
      <PageHero eyebrow="Shop Aura Stone" title="A premium jewellery boutique built for modern wardrobes." description="Explore the complete Aura Stone assortment with filters for category, occasion, tone, and signature best sellers." image="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1700&q=80" />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <Reveal><FilterSidebar filters={filters} setFilters={setFilters} /></Reveal>
          <div>
            <Reveal className="flex flex-col gap-5 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Collection View" title={`${filteredProducts.length} premium pieces selected for you.`} description="Every product card carries the Aura Stone 18K Gold Plated signature and made-in-India craftsmanship story." />
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Sort by</label>
                <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="mt-3 h-12 rounded-2xl border border-black/10 bg-ivory px-4 text-sm outline-none focus:border-gold">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price low to high</option>
                  <option value="price-high">Price high to low</option>
                  <option value="best">Best selling</option>
                </select>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product, index) => <Reveal key={product.id} delay={index * 50}><ProductCard product={product} /></Reveal>)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
