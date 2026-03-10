import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PillButton } from "../components/PillButton";

export function SuccessPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <div className="rounded-[2rem] bg-white px-8 py-16 text-center shadow-soft">
        <CheckCircle2 className="mx-auto text-gold" size={48} />
        <p className="mt-6 text-xs uppercase tracking-luxe text-gold">Order confirmed</p>
        <h1 className="mt-4 font-serif text-5xl text-ink">Thank you for shopping Aura Stone.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-600">Your order <span className="font-semibold text-ink">AS-20387</span> is confirmed. A premium jewellery experience is now on its way to your door.</p>
        <div className="mx-auto mt-8 max-w-xl rounded-[1.5rem] border border-black/5 bg-ivory p-6 text-left text-sm leading-7 text-stone-600">Shipping to Jaipur · Standard delivery · Tracking updates will be shared on mittal.vinay22@gmail.com and +91 8955704980.</div>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"><PillButton as={Link} to="/shop">Continue Shopping</PillButton><PillButton as={Link} to="/account/orders" variant="light">View Order</PillButton></div>
      </div>
    </div>
  );
}
