import { Instagram, Mail, Phone, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 xl:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr] lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-luxe text-gold">Aura Stone</p>
          <h3 className="mt-4 font-serif text-4xl text-ink">Luxury jewellery for the modern muse.</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-stone-600">
            Accessible luxury, fashion-led shine, and premium storytelling designed for women who love elegant gold moments.
          </p>
          <form className="mt-6 flex max-w-sm overflow-hidden rounded-full border border-black/10">
            <input className="h-12 flex-1 px-4 text-sm outline-none" placeholder="Join the Aura Circle" />
            <button className="bg-gold px-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">Join</button>
          </form>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">Shop</p>
          <div className="mt-5 space-y-3 text-sm text-stone-600">
            <Link to="/shop">All Jewellery</Link><br />
            <Link to="/category/necklaces">Necklaces</Link><br />
            <Link to="/category/earrings">Earrings</Link><br />
            <Link to="/category/bracelets">Bracelets</Link><br />
            <Link to="/category/gift-collection">Gift Collection</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">Help</p>
          <div className="mt-5 space-y-3 text-sm text-stone-600">
            <Link to="/contact">Contact</Link><br />
            <Link to="/faq">FAQ</Link><br />
            <Link to="/policies/shipping">Shipping Policy</Link><br />
            <Link to="/policies/returns">Return Policy</Link><br />
            <Link to="/policies/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-stone-600">
            <p className="flex items-center gap-3"><Phone size={16} className="text-gold" /> +91 8955704980</p>
            <p className="flex items-center gap-3"><Mail size={16} className="text-gold" /> mittal.vinay22@gmail.com</p>
            <p className="flex items-center gap-3"><Instagram size={16} className="text-gold" /> @aurastoneofficial</p>
            <p className="flex items-center gap-3"><ShoppingBag size={16} className="text-gold" /> Crafted in India for modern luxury.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 px-6 py-6 text-center text-xs uppercase tracking-[0.22em] text-stone-400 lg:px-10">
        Made in India · Phone: +91 8955704980 · Email: mittal.vinay22@gmail.com
      </div>
    </footer>
  );
}
