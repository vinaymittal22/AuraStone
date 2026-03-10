import { Accordion } from "../components/Accordion";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { faqs } from "../data/site";

export function FaqPage() {
  return (
    <div>
      <PageHero eyebrow="FAQ" title="Answers on shipping, materials, care, and account support." description="Everything you need to shop Aura Stone with confidence." image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1700&q=80" />
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10"><Reveal><Accordion items={faqs.map((faq) => ({ title: faq.question, content: faq.answer }))} /></Reveal></section>
    </div>
  );
}
