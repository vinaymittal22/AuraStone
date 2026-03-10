import { useParams } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { policies } from "../data/site";

export function PolicyPage() {
  const { slug } = useParams();
  const policy = policies[slug] ?? policies.shipping;

  return (
    <div>
      <PageHero eyebrow="Policies" title={policy.title} description="Clear, premium, customer-first information for shopping with confidence at Aura Stone." image="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1700&q=80" />
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10"><Reveal><div className="rounded-[2rem] bg-white p-10 shadow-soft"><div className="space-y-6 text-sm leading-7 text-stone-600">{policy.sections.map((section) => <p key={section}>{section}</p>)}</div></div></Reveal></section>
    </div>
  );
}
