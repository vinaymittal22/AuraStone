import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { products } from "../data/products";

const StoreContext = createContext(null);

const initialCart = [
  { productId: 1, quantity: 1 },
  { productId: 7, quantity: 2 },
];

const initialOrders = [
  { id: "AS-10241", date: "2026-02-15", status: "Delivered", total: 6498, items: [1, 7] },
  { id: "AS-10186", date: "2026-01-28", status: "In Transit", total: 4299, items: [12] },
];

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(initialCart);
  const [wishlist, setWishlist] = useState([2, 5, 11, 17]);
  const [recentlyViewed, setRecentlyViewed] = useState([4, 9, 14]);
  const [orders] = useState(initialOrders);
  const [user] = useState({
    name: "Aarohi Malhotra",
    email: "mittal.vinay22@gmail.com",
    phone: "+91 8955704980",
    memberSince: "2024-10-01",
    tier: "Aura Circle Gold",
    addresses: [
      { id: 1, label: "Home", line1: "18 Residency Lane", city: "Jaipur", state: "Rajasthan", pin: "302001" },
      { id: 2, label: "Studio", line1: "Tower B, Aerocity District", city: "New Delhi", state: "Delhi", pin: "110037" },
    ],
  });

  const addToCart = useCallback((productId, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...current, { productId, quantity }];
    });
  }, []);

  const updateCartQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setCart((current) => current.filter((item) => item.productId !== productId));
      return;
    }
    setCart((current) => current.map((item) => item.productId === productId ? { ...item, quantity } : item));
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const toggleWishlist = useCallback((productId) => {
    setWishlist((current) => current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]);
  }, []);

  const addRecentlyViewed = useCallback((productId) => {
    setRecentlyViewed((current) => {
      const next = [productId, ...current.filter((id) => id !== productId)].slice(0, 6);
      return next.every((id, index) => id === current[index]) ? current : next;
    });
  }, []);

  const cartItems = useMemo(() => cart.map((entry) => ({ ...entry, product: products.find((product) => product.id === entry.productId) })), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const wishlistItems = useMemo(() => products.filter((product) => wishlist.includes(product.id)), [wishlist]);
  const recentlyViewedItems = useMemo(() => products.filter((product) => recentlyViewed.includes(product.id)), [recentlyViewed]);
  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [cartItems]);

  const value = useMemo(() => ({
    cart,
    cartItems,
    cartCount,
    wishlist,
    wishlistItems,
    recentlyViewedItems,
    orders,
    user,
    subtotal,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    toggleWishlist,
    addRecentlyViewed,
  }), [cart, cartItems, cartCount, wishlist, wishlistItems, recentlyViewedItems, orders, user, subtotal, addToCart, updateCartQuantity, removeFromCart, toggleWishlist, addRecentlyViewed]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
}
