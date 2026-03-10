import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import { AccountPage } from "./pages/AccountPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { BlogListPage } from "./pages/BlogListPage";
import { CartPage } from "./pages/CartPage";
import { CategoryPage } from "./pages/CategoryPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ContactPage } from "./pages/ContactPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { OrderHistoryPage } from "./pages/OrderHistoryPage";
import { PolicyPage } from "./pages/PolicyPage";
import { ProductPage } from "./pages/ProductPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ShopPage } from "./pages/ShopPage";
import { StoryPage } from "./pages/StoryPage";
import { SuccessPage } from "./pages/SuccessPage";
import { WishlistPage } from "./pages/WishlistPage";

function AppRoutes() {
  const location = useLocation();
  const minimalLayoutRoutes = ["/login", "/register"];
  const useMinimalLayout = minimalLayoutRoutes.includes(location.pathname);

  const routedContent = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/new-arrivals" element={<ShopPage preset="new" />} />
      <Route path="/best-sellers" element={<ShopPage preset="best" />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/product/:slug" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-success" element={<SuccessPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/account/orders" element={<OrderHistoryPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/our-story" element={<StoryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/policies/:slug" element={<PolicyPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );

  return useMinimalLayout ? routedContent : <MainLayout>{routedContent}</MainLayout>;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}
