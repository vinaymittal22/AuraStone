import { LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { PillButton } from "../components/PillButton";
import { Reveal } from "../components/Reveal";
import { useStore } from "../context/StoreContext";
import { formatCurrency } from "../utils/format";

export function CheckoutPage() {
  const { cartItems, subtotal, user } = useStore();
  const shipping = subtotal > 6000 ? 0 : 250;

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <Reveal>
          <h1 className="font-serif text-5xl text-ink">Checkout</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">A clean, secure checkout designed to keep the Aura Stone experience polished from product discovery to order placement.</p>
          <div className="mt-10 space-y-8">
            <section className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft"><h2 className="font-serif text-3xl text-ink">Shipping Address</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{[["Full Name", user.name], ["Email", user.email], ["Phone", user.phone], ["City", "Jaipur"]].map(([label, value]) => <input key={label} defaultValue={value} placeholder={label} className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" />)}<input defaultValue="18 Residency Lane" placeholder="Address line 1" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold md:col-span-2" /><input defaultValue="Rajasthan" placeholder="State" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" /><input defaultValue="302001" placeholder="PIN code" className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-gold" /></div></section>
            <section className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft"><h2 className="font-serif text-3xl text-ink">Delivery & Payment</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><label className="rounded-2xl border border-gold bg-gold/5 p-4 text-sm text-ink"><input type="radio" name="delivery" defaultChecked className="mr-3" />Standard Delivery · 3-5 business days</label><label className="rounded-2xl border border-black/10 p-4 text-sm text-ink"><input type="radio" name="delivery" className="mr-3" />Priority Delivery · 1-2 business days</label><label className="rounded-2xl border border-gold bg-gold/5 p-4 text-sm text-ink"><input type="radio" name="payment" defaultChecked className="mr-3" />Credit / Debit Card</label><label className="rounded-2xl border border-black/10 p-4 text-sm text-ink"><input type="radio" name="payment" className="mr-3" />UPI / Wallet</label></div><div className="mt-6 overflow-hidden rounded-full border border-black/10"><input placeholder="Coupon code" className="h-12 w-full px-4 text-sm outline-none" /></div></section>
          </div>
        </Reveal>
        <Reveal delay={120}><div className="sticky top-32 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft"><h2 className="font-serif text-3xl text-ink">Order Summary</h2><div className="mt-6 space-y-4">{cartItems.map(({ product, quantity }) => <div key={product.id} className="flex items-center justify-between gap-4 text-sm text-stone-600"><span>{product.name} × {quantity}</span><span>{formatCurrency(product.price * quantity)}</span></div>)}</div><div className="mt-6 space-y-3 border-t border-black/10 pt-6 text-sm text-stone-600"><div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div><div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Complimentary" : formatCurrency(shipping)}</span></div><div className="flex justify-between text-base font-semibold text-ink"><span>Total</span><span>{formatCurrency(subtotal + shipping)}</span></div></div><div className="mt-6 rounded-[1.5rem] border border-black/5 bg-ivory p-5 text-sm leading-7 text-stone-600"><ShieldCheck size={18} className="mb-3 text-gold" />Secure checkout, premium packaging, and support via +91 8955704980 or mittal.vinay22@gmail.com.</div><PillButton as={Link} to="/order-success" className="mt-6 w-full">Place Order</PillButton><div className="mt-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-stone-500"><LockKeyhole size={14} /> Secure checkout</div></div></Reveal>
      </div>
    </div>
  );
}
