import Link from "next/link";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Find Your Unit",
    description: "Browse available sizes, compare features, and check real-time pricing. Use our size guide if you're not sure what fits.",
  },
  {
    number: "02",
    title: "Reserve Online",
    description: "Lock in your rate in under 2 minutes — no credit card required. We hold your unit until move-in day.",
  },
  {
    number: "03",
    title: "Move Right In",
    description: "Pick up your access code, roll up the door, and start storing. We'll be here if you need anything.",
  },
];

export function StorageProcess() {
  return (
    <section className="bg-surface py-24 px-6 relative overflow-hidden">
      {/* diagonal slash accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{ background: "linear-gradient(135deg, transparent 40%, #e02070 100%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Getting Started
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-primary uppercase tracking-wide leading-[0.85]">
            3 Easy<br />Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-white/5 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-surface md:bg-background p-10 relative group hover:bg-surface transition-colors">
              <div
                className="font-heading text-8xl md:text-9xl font-extrabold leading-none mb-6 select-none"
                style={{ color: "rgba(224,32,112,0.12)" }}
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="absolute top-10 left-10">
                <span className="font-heading text-sm font-extrabold text-primary uppercase tracking-widest">
                  Step {step.number}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold text-text uppercase tracking-wide mb-4 mt-2">
                {step.title}
              </h3>
              <p className="text-muted text-base leading-relaxed font-body">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-px top-1/2 -translate-y-1/2 w-px h-1/2 bg-primary/20" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/facility"
            className="bg-primary text-white font-bold px-8 py-4 uppercase tracking-widest text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform inline-block"
          >
            View Available Units
          </Link>
          <Link
            href="/size-guide"
            className="border-2 border-primary/50 text-primary font-bold px-8 py-4 uppercase tracking-widest hover:bg-primary/10 transition-colors inline-block"
          >
            Size Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
