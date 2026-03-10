import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { PillButton } from "../components/PillButton";
import { ProductBadge } from "../components/ProductBadge";
import { ProductCard } from "../components/ProductCard";
import { QuantitySelector } from "../components/QuantitySelector";
import { Reveal } from "../components/Reveal";
import { useStore } from "../context/StoreContext";
import { products } from "../data/products";
import { formatCurrency } from "../utils/format";

export function CartPage() {
  const { cartItems, subtotal, removeFromCart, updateCartQuantity } = useStore();
  const shipping = subtotal > 6000 ? 0 : 250;
  const suggested = products.slice(8, 12);

  if (!cartItems.length) {
    return <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10"><EmptyState title="Your bag is waiting." description="Add premium jewellery from Aura Stone to begin a polished checkout flow." action={<PillButton as={Link} to="/shop">Continue Shopping</PillButton>} /></div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <Reveal><h1 className="font-serif text-5xl text-ink">Your Cart</h1><p className="mt-4 text-sm leading-7 text-stone-600">A refined view of your selected Aura Stone pieces before checkout.</p></Reveal>
          <div className="mt-10 space-y-5">
            {cartItems.map(({ product, quantity }, index) => (
              <Reveal key={product.id} delay={index * 70}><div className="grid gap-5 rounded-[1.75rem] border border-black/5 bg-white p-5 shadow-soft md:grid-cols-[120px_1fr_auto] md:items-center"><div className="relative overflow-hidden rounded-[1.25rem] bg-[#efe5d6]"><img src={product.image} alt={product.name} className="h-32 w-full object-cover" /><div className="absolute left-3 top-3"><ProductBadge className="px-2.5 py-1" /></div></div><div><h2 className="font-serif text-3xl text-ink">{product.name}</h2><p className="mt-2 text-sm leading-6 text-stone-600">{product.shortDescription}</p><p className="mt-3 text-xs uppercase tracking-[0.22em] text-gold">{product.material}</p></div><div className="flex flex-col items-start gap-4 md:items-end"><p className="text-lg font-semibold text-gold">{formatCurrency(product.price)}</p><QuantitySelector value={quantity} onChange={(next) => updateCartQuantity(product.id, next)} /><button className="text-sm text-stone-500 underline" onClick={() => removeFromCart(product.id)}>Remove</button></div></div></Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={140}><div className="sticky top-32 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft"><h2 className="font-serif text-3xl text-ink">Order Summary</h2><div className="mt-6 space-y-4 text-sm text-stone-600"><div className="flex justify-between"><span>Estimated subtotal</span><span>{formatCurrency(subtotal)}</span></div><div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Complimentary" : formatCurrency(shipping)}</span></div><div className="flex justify-between border-t border-black/10 pt-4 text-base font-semibold text-ink"><span>Total</span><span>{formatCurrency(subtotal + shipping)}</span></div></div><div className="mt-6 overflow-hidden rounded-full border border-black/10"><input className="h-12 w-full px-4 text-sm outline-none" placeholder="Coupon code" /></div><button className="mt-4 h-12 w-full rounded-full border border-black/10 text-xs font-semibold uppercase tracking-[0.22em] text-ink transition hover:border-gold hover:text-gold">Apply Coupon</button><PillButton as={Link} to="/checkout" className="mt-6 w-full">Proceed to Checkout</PillButton></div></Reveal>
      </div>
      <section className="mt-24"><Reveal><h2 className="font-serif text-4xl text-ink">Suggested add-ons</h2></Reveal><div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{suggested.map((item, index) => <Reveal key={item.id} delay={index * 60}><ProductCard product={item} /></Reveal>)}</div></section>
    </div>
  );
}
