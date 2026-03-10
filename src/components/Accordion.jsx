import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Accordion({ items }) {
  const [openItem, setOpenItem] = useState(items[0]?.title ?? null);

  return (
    <div className="divide-y divide-black/10 rounded-[1.5rem] border border-black/5 bg-white">
      {items.map((item) => {
        const isOpen = openItem === item.title;
        return (
          <div key={item.title} className="px-6 py-5">
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
            >
              <span className="font-serif text-2xl text-ink">{item.title}</span>
              <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} size={18} />
            </button>
            {isOpen ? <p className="mt-4 text-sm leading-7 text-stone-600">{item.content}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
