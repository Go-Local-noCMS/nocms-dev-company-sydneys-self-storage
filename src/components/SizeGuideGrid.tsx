import Link from "next/link";

interface SizeUnit {
  id: string;
  size: string;
  sqft: number;
  dimensions: string;
  priceFrom: number;
  whatFits: string[];
  icon: string;
  label: string;
}

const sizes: SizeUnit[] = [
  {
    id: "5x5",
    size: "5×5",
    sqft: 25,
    dimensions: "5 ft wide × 5 ft deep × 8 ft tall",
    priceFrom: 49,
    label: "Closet",
    icon: "🗄️",
    whatFits: ["Boxes & small items", "Seasonal decor", "Sports equipment", "Small appliances", "Bikes"],
  },
  {
    id: "5x10",
    size: "5×10",
    sqft: 50,
    dimensions: "5 ft wide × 10 ft deep × 8 ft tall",
    priceFrom: 79,
    label: "Walk-In Closet",
    icon: "📦",
    whatFits: ["Studio apartment contents", "Mattress + bed frame", "Small furniture", "Appliances", "10–15 boxes"],
  },
  {
    id: "10x10",
    size: "10×10",
    sqft: 100,
    dimensions: "10 ft wide × 10 ft deep × 9 ft tall",
    priceFrom: 119,
    label: "Small Bedroom",
    icon: "🛏️",
    whatFits: ["1–2 bedroom apartment", "Couch + chairs", "Dining set", "Washer/dryer", "20–30 boxes"],
  },
  {
    id: "10x15",
    size: "10×15",
    sqft: 150,
    dimensions: "10 ft wide × 15 ft deep × 9 ft tall",
    priceFrom: 149,
    label: "Large Bedroom",
    icon: "🏠",
    whatFits: ["2–3 bedroom home", "Full bedroom sets", "Large appliances", "Patio furniture", "30–40 boxes"],
  },
  {
    id: "10x20",
    size: "10×20",
    sqft: 200,
    dimensions: "10 ft wide × 20 ft deep × 9 ft tall",
    priceFrom: 189,
    label: "One-Car Garage",
    icon: "🚗",
    whatFits: ["3–4 bedroom home", "Full household contents", "Vehicle storage", "Business inventory", "50+ boxes"],
  },
  {
    id: "10x25",
    size: "10×25",
    sqft: 250,
    dimensions: "10 ft wide × 25 ft deep × 9 ft tall",
    priceFrom: 229,
    label: "Two-Car Garage",
    icon: "🏭",
    whatFits: ["4–5 bedroom home", "Multiple vehicles", "Contractor equipment", "Full restaurant kit", "Boat or RV-size items"],
  },
  {
    id: "10x30",
    size: "10×30",
    sqft: 300,
    dimensions: "10 ft wide × 30 ft deep × 9 ft tall",
    priceFrom: 269,
    label: "Warehouse Bay",
    icon: "🏗️",
    whatFits: ["Entire house contents", "Commercial storage", "Large vehicles", "Equipment & machinery", "Oversized loads"],
  },
];

export function SizeGuideGrid() {
  return (
    <section className="bg-background py-24 px-6" data-nocms-component="size-guide-grid">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            All Unit Sizes
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-4" data-role="heading">
            Find Your<br />Perfect Fit
          </h2>
          <p className="text-muted text-xl max-w-2xl font-body leading-relaxed" data-role="subheading">
            Compare every size side-by-side. Click any unit to reserve — or use the size selector below if you're not sure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/5">
          {sizes.map((unit) => (
            <div
              key={unit.id}
              id={unit.id}
              className="bg-background p-8 group hover:bg-surface transition-colors border-l-2 border-transparent hover:border-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-4xl mb-2">{unit.icon}</div>
                  <div className="font-heading text-4xl font-extrabold text-primary">{unit.size}</div>
                  <div className="text-muted text-sm font-body">{unit.label} · {unit.sqft} sq ft</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted uppercase tracking-wider mb-1">From</div>
                  <div className="font-heading text-3xl font-extrabold text-primary">${unit.priceFrom}</div>
                  <div className="text-muted text-xs">/month</div>
                </div>
              </div>

              <p className="font-mono text-xs text-muted border border-white/10 px-3 py-2 mb-5 inline-block">
                {unit.dimensions}
              </p>

              {/* Visual dimension diagram */}
              <div className="mb-5 relative">
                <div
                  className="border-2 border-primary/30 bg-primary/5 flex items-center justify-center text-primary/60 font-mono text-xs"
                  style={{
                    width: `${Math.min(100, unit.sqft / 3)}%`,
                    height: "48px",
                    minWidth: "60px",
                  }}
                >
                  {unit.size}
                </div>
              </div>

              <ul className="space-y-1 mb-6">
                {unit.whatFits.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted font-body">
                    <span className="w-1 h-1 bg-primary/60 flex-shrink-0 inline-block" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={`/facility#reserve`}
                className="bg-primary text-white font-bold px-6 py-3 uppercase tracking-widest text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform inline-block w-full text-center"
              >
                Reserve {unit.size} Unit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
