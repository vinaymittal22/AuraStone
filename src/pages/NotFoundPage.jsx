import { Link } from "react-router-dom";
import { PillButton } from "../components/PillButton";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <div className="rounded-[2rem] bg-white px-8 py-16 text-center shadow-soft"><p className="text-xs uppercase tracking-luxe text-gold">404</p><h1 className="mt-4 font-serif text-5xl text-ink">This page slipped out of the jewellery box.</h1><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-stone-600">The route you requested could not be found, but the Aura Stone collection is still waiting for you.</p><div className="mt-10 flex justify-center"><PillButton as={Link} to="/shop">Return to Shop</PillButton></div></div>
    </div>
  );
}
