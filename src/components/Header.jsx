import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { categoryMeta } from "../data/categories";
import { useStore } from "../context/StoreContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/new-arrivals", label: "New Arrivals" },
  { to: "/best-sellers", label: "Best Sellers" },
  { to: "/blog", label: "Blog" },
  { to: "/our-story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { cartCount, wishlist } = useStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const categoryLinks = categoryMeta.slice(0, 10);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-ivory/85 backdrop-blur-2xl">
      <div className="bg-ink px-6 py-2 text-center text-[11px] uppercase tracking-[0.22em] text-white/75">
        Luxury You Can Wear Every Day · Designed with elegance. Made in India.
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button className="rounded-full border border-black/10 p-3 lg:hidden" onClick={() => setMobileOpen((value) => !value)}>
          <Menu size={18} />
        </button>
        <div>
          <p className="text-[11px] uppercase tracking-luxe text-gold">Luxury Fashion Jewellery</p>
          <Link to="/" className="font-serif text-3xl tracking-[0.08em] text-ink">Aura Stone</Link>
        </div>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-sm text-stone-700 transition hover:text-gold">
              {link.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button className="inline-flex items-center gap-2 text-sm text-stone-700 transition hover:text-gold">
              Categories <ChevronDown size={15} />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full mt-4 hidden w-[680px] -translate-x-1/2 rounded-[2rem] border border-black/5 bg-white p-8 shadow-soft group-hover:block group-hover:pointer-events-auto">
              <div className="grid grid-cols-2 gap-4">
                {categoryLinks.map((item) => (
                  <Link key={item.slug} to={`/category/${item.slug}`} className="rounded-2xl border border-black/5 bg-ivory px-4 py-4 transition hover:border-gold hover:bg-white">
                    <p className="font-serif text-2xl text-ink">{item.title}</p>
                    <p className="mt-2 text-sm text-stone-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/shop" className="hidden rounded-full border border-black/10 p-3 lg:inline-flex"><Search size={17} /></Link>
          <Link to="/wishlist" className="relative rounded-full border border-black/10 p-3">
            <Heart size={17} />
            {wishlist.length ? <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-white">{wishlist.length}</span> : null}
          </Link>
          <Link to="/account" className="rounded-full border border-black/10 p-3"><User size={17} /></Link>
          <Link to="/cart" className="relative rounded-full border border-black/10 p-3">
            <ShoppingBag size={17} />
            {cartCount ? <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] text-white">{cartCount}</span> : null}
          </Link>
        </div>
      </div>
      {mobileOpen ? (
        <div className="border-t border-black/5 bg-white px-6 py-5 lg:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="text-sm text-stone-700">
                {link.label}
              </NavLink>
            ))}
            {categoryLinks.map((item) => (
              <Link key={item.slug} to={`/category/${item.slug}`} onClick={() => setMobileOpen(false)} className="text-sm text-stone-600">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
