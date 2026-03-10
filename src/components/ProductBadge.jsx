export function ProductBadge({ className = "" }) {
  return (
    <span className={`inline-flex rounded-full border border-white/30 bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink backdrop-blur ${className}`}>
      18K Gold Plated
    </span>
  );
}
