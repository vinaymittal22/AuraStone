import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { formatCurrency } from "../utils/format";
import { PillButton } from "./PillButton";
import { ProductBadge } from "./ProductBadge";

export function ProductCard({ product, showDescriptor = true }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.includes(product.id);

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-gold/30">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#efe5d6]">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="absolute left-4 top-4">
          <ProductBadge />
        </div>
        <button
          className={`absolute right-4 top-4 rounded-full border p-3 backdrop-blur transition ${wished ? "border-gold bg-gold text-white" : "border-white/30 bg-white/10 text-white hover:bg-white hover:text-ink"}`}
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart size={16} fill={wished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="mt-5 space-y-4 px-2 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link to={`/product/${product.slug}`} className="font-serif text-2xl text-ink">
              {product.name}
            </Link>
            {showDescriptor ? <p className="mt-2 text-sm leading-6 text-stone-600">{product.shortDescription}</p> : null}
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-stone-500">{product.category} · {product.occasion}</p>
          </div>
          <div className="text-right">
            <p className="text-base font-semibold text-gold">{formatCurrency(product.price)}</p>
            <p className="text-xs text-stone-400 line-through">{formatCurrency(product.comparePrice)}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <PillButton variant="light" className="flex-1" as={Link} to={`/product/${product.slug}`}>
            Quick View
          </PillButton>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ink transition hover:border-gold hover:bg-gold hover:text-white"
            onClick={() => addToCart(product.id)}
          >
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
