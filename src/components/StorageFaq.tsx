"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  { category: "Access & Hours", question: "What are the gate access hours?", answer: "Our gate is open 24 hours a day, 7 days a week, 365 days a year. You can access your unit at any time using your personal PIN code." },
  { category: "Access & Hours", question: "What are the office hours?", answer: "Our office is open Monday through Saturday 9am–6pm and Sunday 10am–4pm. Outside of office hours, you can manage your account online or reach us by phone." },
  { category: "Payment", question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards, ACH bank transfers, and online payments through our customer portal. Auto-pay is available and recommended." },
  { category: "Payment", question: "When is rent due each month?", answer: "Rent is due on the same date you moved in each month. We offer auto-pay so you never miss a payment. There is a 5-day grace period before late fees apply." },
  { category: "Insurance", question: "Do I need storage insurance?", answer: "We strongly recommend it. While we take every precaution to secure your belongings, your homeowner's or renter's insurance may cover stored items. We also offer affordable storage protection plans starting at $9/month." },
  { category: "Insurance", question: "What does your protection plan cover?", answer: "Our protection plans cover theft, fire, water damage from facility systems, and certain natural disasters. Plans start at $9/month for up to $2,000 in coverage." },
  { category: "Moving Tips", question: "What should I do before moving items in?", answer: "Use sturdy boxes, label everything on the top and side, place heavy items on the bottom, and disassemble large furniture when possible. Climate control handles temperature, but we recommend moisture-absorbing packets for long-term storage." },
  { category: "Moving Tips", question: "Can I use the facility's equipment?", answer: "Yes — we have hand trucks, dollies, and flatbed carts available at no charge on a first-come, first-served basis. We also sell packing supplies including boxes, tape, bubble wrap, and mattress bags in our office." },
  { category: "Units", question: "Are all units climate controlled?", answer: "Yes! Every single unit at Sydney's Self Storage is fully climate controlled, keeping temperatures between 55°F and 80°F year-round. This protects furniture, electronics, documents, and other temperature-sensitive items." },
  { category: "Units", question: "Can I switch to a larger or smaller unit?", answer: "Absolutely. As long as there is availability, you can transfer to a different size unit. We'll prorate your rent for any remaining days on your current unit." },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export function StorageFaq() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter((f) => activeCategory === "All" || f.category === activeCategory);

  return (
    <section className="bg-surface py-24 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-primary uppercase tracking-wide leading-[0.85]">
            Common<br />Questions
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                activeCategory === cat
                  ? "bg-primary border-primary text-white"
                  : "border-white/20 text-muted hover:border-primary/50 hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-0 border-t border-white/10">
          {filtered.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full text-left flex items-center justify-between py-5 px-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-surface"
              >
                <span className="font-body font-bold text-text group-hover:text-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180 text-primary" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div className="pb-5 text-muted font-body leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
