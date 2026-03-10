export function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1">
      <button className="h-9 w-9 rounded-full text-lg text-ink transition hover:bg-ivory" onClick={() => onChange(value - 1)}>
        -
      </button>
      <span className="w-10 text-center text-sm font-semibold text-ink">{value}</span>
      <button className="h-9 w-9 rounded-full text-lg text-ink transition hover:bg-ivory" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}
