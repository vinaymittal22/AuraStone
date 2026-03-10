import { Link } from "react-router-dom";
import { EmptyState } from "../components/EmptyState";
import { PillButton } from "../components/PillButton";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { useStore } from "../context/StoreContext";

export function WishlistPage() {
  const { wishlistItems } = useStore();

  if (!wishlistItems.length) {
    return <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10"><EmptyState title="Your wishlist is empty." description="Save Aura Stone pieces you want to revisit later and build your premium jewellery wardrobe." action={<PillButton as={Link} to="/shop">Browse Jewellery</PillButton>} /></div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal><h1 className="font-serif text-5xl text-ink">Wishlist</h1><p className="mt-4 text-sm leading-7 text-stone-600">Saved pieces waiting for their moment in your bag.</p></Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{wishlistItems.map((product, index) => <Reveal key={product.id} delay={index * 60}><ProductCard product={product} /></Reveal>)}</div>
    </div>
  );
}
