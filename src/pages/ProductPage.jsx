import { useEffect, useMemo, useState } from "react";
import { ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useParams } from "react-router-dom";
import { Accordion } from "../components/Accordion";
import { PillButton } from "../components/PillButton";
import { ProductBadge } from "../components/ProductBadge";
import { ProductCard } from "../components/ProductCard";
import { QuantitySelector } from "../components/QuantitySelector";
import { Reveal } from "../components/Reveal";
import { useStore } from "../context/StoreContext";
import { products } from "../data/products";
import { formatCurrency } from "../utils/format";

export function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const { addToCart, toggleWishlist, wishlist, addRecentlyViewed, recentlyViewedItems } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.gallery[0]);

  useEffect(() => {
    setActiveImage(product.gallery[0]);
    addRecentlyViewed(product.id);
  }, [product, addRecentlyViewed]);

  const relatedProducts = useMemo(() => products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4), [product]);
  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Material & Care", content: `${product.material}. Store dry, avoid moisture, and wipe gently after wear to preserve shine.` },
    { title: "Shipping & Returns", content: "Dispatch within 48 hours. Delivery in 3-5 business days. Returns available on eligible unworn items within 7 days." },
    { title: "Styling Tips", content: product.stylingNotes },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-[120px_1fr]">
            <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
              {product.gallery.map((image) => (
                <button key={image} className={`overflow-hidden rounded-[1.25rem] border ${activeImage === image ? "border-gold" : "border-black/10"}`} onClick={() => setActiveImage(image)}>
                  <img src={image} alt={product.name} className="h-24 w-24 object-cover" />
                </button>
              ))}
            </div>
            <div className="relative order-1 overflow-hidden rounded-[2rem] bg-[#efe5d6] lg:order-2">
              <img src={activeImage} alt={product.name} className="h-[640px] w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute left-6 top-6"><ProductBadge /></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-luxe text-gold">{product.category}</p>
          <h1 className="mt-4 font-serif text-5xl text-ink">{product.name}</h1>
          <p className="mt-4 text-sm leading-7 text-stone-600">{product.shortDescription}</p>
          <div className="mt-6 flex flex-wrap items-end gap-4"><p className="text-3xl font-semibold text-gold">{formatCurrency(product.price)}</p><p className="text-lg text-stone-400 line-through">{formatCurrency(product.comparePrice)}</p><span className="rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-gold">Save {formatCurrency(product.comparePrice - product.price)}</span></div>
          <div className="mt-6 rounded-[1.5rem] border border-gold/15 bg-gold/5 p-5 text-sm leading-7 text-stone-600">Use code <span className="font-semibold text-ink">AURA10</span> for an additional styling offer at checkout. Designed with elegance. Made in India.</div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{product.highlights.map((item) => <div key={item} className="rounded-2xl border border-black/5 bg-white px-4 py-4 text-sm text-stone-600">{item}</div>)}</div>
          <div className="mt-8 flex flex-wrap items-center gap-4"><QuantitySelector value={quantity} onChange={(next) => setQuantity(Math.max(1, next))} /><button className="rounded-full border border-black/10 px-5 py-3 text-sm text-ink transition hover:border-gold hover:text-gold" onClick={() => toggleWishlist(product.id)}>{wishlist.includes(product.id) ? "Wishlisted" : "Add to Wishlist"}</button></div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row"><PillButton className="flex-1" onClick={() => addToCart(product.id, quantity)}>Add to Cart</PillButton><PillButton variant="dark" className="flex-1">Buy Now</PillButton></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="rounded-[1.5rem] border border-black/5 bg-white p-5"><ShieldCheck className="text-gold" size={18} /><p className="mt-3 text-sm leading-7 text-stone-600">Skin-friendly finish with refined premium shine.</p></div><div className="rounded-[1.5rem] border border-black/5 bg-white p-5"><Truck className="text-gold" size={18} /><p className="mt-3 text-sm leading-7 text-stone-600">{product.delivery}</p></div></div>
          <div className="mt-8"><Accordion items={accordionItems} /></div>
          <div className="mt-8 rounded-[1.5rem] border border-black/5 bg-white p-6 text-sm leading-7 text-stone-600"><Sparkles className="mb-3 text-gold" size={18} />{product.stylingNotes}</div>
        </Reveal>
      </div>
      <section className="mt-24"><Reveal><h2 className="font-serif text-4xl text-ink">Related products</h2></Reveal><div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{relatedProducts.map((item, index) => <Reveal key={item.id} delay={index * 60}><ProductCard product={item} /></Reveal>)}</div></section>
      <section className="mt-24"><Reveal><h2 className="font-serif text-4xl text-ink">Recently viewed</h2></Reveal><div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{recentlyViewedItems.filter((item) => item.id !== product.id).slice(0, 3).map((item, index) => <Reveal key={item.id} delay={index * 60}><ProductCard product={item} /></Reveal>)}</div></section>
    </div>
  );
}
