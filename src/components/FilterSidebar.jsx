import { SlidersHorizontal } from "lucide-react";

const groups = {
  category: ["all", "Necklaces", "Earrings", "Bracelets", "Rings", "Layered Sets"],
  price: ["all", "under-2500", "2500-4000", "4000-plus"],
  occasion: ["all", "Office", "Party", "Beach", "Casual"],
  tone: ["all", "Champagne Gold", "Warm Gold", "Molten Gold", "Soft Taupe Gold", "Sunlit Gold", "Muted Gold"],
};

export function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <SlidersHorizontal size={18} className="text-gold" />
        <h3 className="font-serif text-3xl text-ink">Filter</h3>
      </div>
      <div className="mt-8 space-y-6">
        {Object.entries(groups).map(([key, options]) => (
          <div key={key}>
            <label className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{key}</label>
            <select
              value={filters[key]}
              onChange={(event) => setFilters((current) => ({ ...current, [key]: event.target.value }))}
              className="mt-3 h-12 w-full rounded-2xl border border-black/10 bg-ivory px-4 text-sm text-ink outline-none transition focus:border-gold"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? "All" : option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <label className="flex items-center justify-between rounded-2xl border border-black/5 bg-ivory px-4 py-3 text-sm text-ink">
          Best Seller
          <input type="checkbox" checked={filters.bestSeller} onChange={(event) => setFilters((current) => ({ ...current, bestSeller: event.target.checked }))} />
        </label>
        <label className="flex items-center justify-between rounded-2xl border border-black/5 bg-ivory px-4 py-3 text-sm text-ink">
          New Arrival
          <input type="checkbox" checked={filters.newArrival} onChange={(event) => setFilters((current) => ({ ...current, newArrival: event.target.checked }))} />
        </label>
      </div>
    </aside>
  );
}
