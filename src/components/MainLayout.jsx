import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
