export function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-[2rem] border border-dashed border-black/10 bg-white px-8 py-14 text-center shadow-soft">
      <h3 className="font-serif text-4xl text-ink">{title}</h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600">{description}</p>
      <div className="mt-8">{action}</div>
    </div>
  );
}
