import { LayoutGrid, Package, Heart, MapPin, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/account", label: "Dashboard", icon: LayoutGrid },
  { to: "/account/orders", label: "Orders", icon: Package },
  { to: "/wishlist", label: "Wishlist", icon: Heart },
  { to: "/contact", label: "Support", icon: MapPin },
];

export function AccountNav() {
  const location = useLocation();

  return (
    <aside className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft">
      <p className="text-xs uppercase tracking-luxe text-gold">Aura Account</p>
      <div className="mt-6 space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          const active = location.pathname === link.to;
          return (
            <Link key={link.to} to={link.to} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${active ? "bg-ink text-white" : "bg-ivory text-ink hover:bg-white"}`}>
              <Icon size={16} /> {link.label}
            </Link>
          );
        })}
        <button className="flex w-full items-center gap-3 rounded-2xl bg-ivory px-4 py-3 text-sm text-ink transition hover:bg-white">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  );
}
