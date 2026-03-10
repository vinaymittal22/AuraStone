import { Link } from "react-router-dom";
import { AccountNav } from "../components/AccountNav";
import { PillButton } from "../components/PillButton";
import { Reveal } from "../components/Reveal";
import { useStore } from "../context/StoreContext";
import { formatCurrency, formatDate } from "../utils/format";

export function AccountPage() {
  const { user, orders, wishlistItems } = useStore();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <Reveal><AccountNav /></Reveal>
        <div className="space-y-8">
          <Reveal><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft"><p className="text-xs uppercase tracking-luxe text-gold">Account Overview</p><h1 className="mt-4 font-serif text-5xl text-ink">{user.name}</h1><p className="mt-4 text-sm leading-7 text-stone-600">{user.email} · {user.phone} · Member since {formatDate(user.memberSince)}</p><div className="mt-6 rounded-full bg-ivory px-5 py-3 text-sm text-ink inline-flex">{user.tier}</div></div></Reveal>
          <div className="grid gap-8 xl:grid-cols-2">
            <Reveal><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft"><h2 className="font-serif text-3xl text-ink">Saved Addresses</h2><div className="mt-6 space-y-4">{user.addresses.map((address) => <div key={address.id} className="rounded-2xl bg-ivory p-5 text-sm leading-7 text-stone-600"><p className="font-semibold text-ink">{address.label}</p><p>{address.line1}</p><p>{address.city}, {address.state} {address.pin}</p></div>)}</div></div></Reveal>
            <Reveal delay={100}><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft"><h2 className="font-serif text-3xl text-ink">Payment Methods</h2><div className="mt-6 rounded-2xl border border-dashed border-black/10 bg-ivory p-5 text-sm leading-7 text-stone-600">Visa ending in 4412 · Placeholder secure payment vault. Add cards securely at checkout.</div></div></Reveal>
          </div>
          <div className="grid gap-8 xl:grid-cols-2">
            <Reveal><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft"><div className="flex items-center justify-between"><h2 className="font-serif text-3xl text-ink">Order History</h2><Link to="/account/orders" className="text-sm text-gold">View all</Link></div><div className="mt-6 space-y-4">{orders.slice(0, 2).map((order) => <div key={order.id} className="rounded-2xl bg-ivory p-5 text-sm leading-7 text-stone-600"><p className="font-semibold text-ink">{order.id}</p><p>{formatDate(order.date)} · {order.status}</p><p>{formatCurrency(order.total)}</p></div>)}</div></div></Reveal>
            <Reveal delay={100}><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft"><div className="flex items-center justify-between"><h2 className="font-serif text-3xl text-ink">Wishlist</h2><Link to="/wishlist" className="text-sm text-gold">View all</Link></div><div className="mt-6 space-y-4">{wishlistItems.slice(0, 3).map((item) => <div key={item.id} className="rounded-2xl bg-ivory p-5 text-sm leading-7 text-stone-600"><p className="font-semibold text-ink">{item.name}</p><p>{item.shortDescription}</p></div>)}</div><PillButton as={Link} to="/wishlist" variant="light" className="mt-6">Open Wishlist</PillButton></div></Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
