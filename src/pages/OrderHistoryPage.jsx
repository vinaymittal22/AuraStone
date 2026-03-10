import { Link } from "react-router-dom";
import { AccountNav } from "../components/AccountNav";
import { Reveal } from "../components/Reveal";
import { useStore } from "../context/StoreContext";
import { formatCurrency, formatDate } from "../utils/format";

export function OrderHistoryPage() {
  const { orders } = useStore();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <Reveal><AccountNav /></Reveal>
        <Reveal delay={100}><div className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-soft"><h1 className="font-serif text-5xl text-ink">Order History</h1><div className="mt-8 space-y-4">{orders.map((order) => <div key={order.id} className="grid gap-4 rounded-2xl bg-ivory p-5 text-sm text-stone-600 md:grid-cols-[1.1fr_0.8fr_0.8fr_auto] md:items-center"><div><p className="font-semibold text-ink">{order.id}</p><p>{formatDate(order.date)}</p></div><p>{order.status}</p><p>{formatCurrency(order.total)}</p><div className="flex gap-3"><Link to="/order-success" className="text-gold">View details</Link><button className="text-gold">Reorder</button></div></div>)}</div></div></Reveal>
      </div>
    </div>
  );
}
