import { SizeGuideGrid } from "@/components/SizeGuideGrid";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import Link from "next/link";

const recommendations = [
  {
    situation: "Moving between apartments",
    recommended: "10×10",
    reason: "Fits a 1–2 bedroom apartment comfortably with room to walk in.",
    href: "/facility#units",
  },
  {
    situation: "Storing seasonal items",
    recommended: "5×5",
    reason: "Perfect for holiday decor, sports gear, or a few boxes.",
    href: "/facility#units",
  },
  {
    situation: "Clearing out a 3-bedroom home",
    recommended: "10×20",
    reason: "One-car garage sized unit holds full household contents.",
    href: "/facility#units",
  },
  {
    situation: "Business inventory storage",
    recommended: "10×15",
    reason: "Great for retail inventory, supplies, or light equipment.",
    href: "/facility#units",
  },
];

export default function SizeGuidePage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-background pt-20 pb-12 px-6 border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(224,32,112,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(224,32,112,0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-6">
            Storage Size Guide
          </span>
          <h1
            className="font-heading text-6xl md:text-8xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-6"
            style={{ textShadow: "0 0 40px rgba(224,32,112,0.4)" }}
          >
            What Size<br />
            <span className="text-text">Do You Need?</span>
          </h1>
          <p className="text-muted text-xl font-body leading-relaxed max-w-2xl">
            Compare every unit from a 5×5 closet to a 10×30 warehouse bay. See dimensions, what fits, and current pricing — then reserve in minutes.
          </p>
        </div>
      </section>

      {/* Help Me Choose */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-extrabold text-primary uppercase tracking-wide mb-8">
            Help Me Choose
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {recommendations.map((rec, i) => (
              <div key={i} className="bg-surface p-8 hover:bg-background transition-colors group">
                <div className="text-muted text-sm uppercase tracking-wider mb-2 font-body">{rec.situation}</div>
                <div className="font-heading text-3xl font-extrabold text-primary mb-2">
                  {rec.recommended}
                </div>
                <p className="text-muted text-sm font-body leading-relaxed mb-4">{rec.reason}</p>
                <Link
                  href={rec.href}
                  className="text-primary font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all inline-flex items-center gap-1"
                >
                  Reserve This Size →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Grid */}
      <SizeGuideGrid />

      {/* CTA */}
      <StorageCTABanner
        heading="Not Sure? We'll Help."
        subheading="Call or chat with our team — we'll recommend the right size and lock in your rate today."
        primaryLabel="Browse All Units"
        primaryHref="/facility"
        secondaryLabel="Call Us"
        secondaryHref="tel:9135550190"
      />
    </main>
  );
}
