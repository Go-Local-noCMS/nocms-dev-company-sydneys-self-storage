"use client";
import { useState } from "react";
import Link from "next/link";

interface Unit {
  size: string;
  dimensions: string;
  price: number;
  features: string[];
  availability: number;
  popular?: boolean;
}

interface UnitTableProps {
  units?: Unit[];
  facilitySlug?: string;
}

const defaultUnits: Unit[] = [
  { size: "5×5", dimensions: "5 ft × 5 ft × 8 ft", price: 49, features: ["Climate Control", "Ground Floor"], availability: 8 },
  { size: "5×10", dimensions: "5 ft × 10 ft × 8 ft", price: 79, features: ["Climate Control", "Ground Floor"], availability: 5, popular: true },
  { size: "10×10", dimensions: "10 ft × 10 ft × 9 ft", price: 119, features: ["Climate Control", "Drive-Up", "24/7 Access"], availability: 3 },
  { size: "10×15", dimensions: "10 ft × 15 ft × 9 ft", price: 149, features: ["Climate Control", "Drive-Up", "24/7 Access"], availability: 6 },
  { size: "10×20", dimensions: "10 ft × 20 ft × 9 ft", price: 189, features: ["Climate Control", "Drive-Up", "24/7 Access"], availability: 2 },
  { size: "10×25", dimensions: "10 ft × 25 ft × 9 ft", price: 229, features: ["Climate Control", "Drive-Up", "24/7 Access"], availability: 4 },
  { size: "10×30", dimensions: "10 ft × 30 ft × 9 ft", price: 269, features: ["Climate Control", "Drive-Up", "24/7 Access", "Vehicle Storage"], availability: 1 },
];

export function UnitTable({ units = defaultUnits, facilitySlug = "facility" }: UnitTableProps) {
  const [filter, setFilter] = useState<string>("all");

  const filters = [
    { key: "all", label: "All Sizes" },
    { key: "small", label: "Small (5×5–5×10)" },
    { key: "medium", label: "Medium (10×10–10×15)" },
    { key: "large", label: "Large (10×20+)" },
  ];

  const filtered = units.filter((u) => {
    if (filter === "small") return ["5×5", "5×10"].includes(u.size);
    if (filter === "medium") return ["10×10", "10×15"].includes(u.size);
    if (filter === "large") return ["10×20", "10×25", "10×30"].includes(u.size);
    return true;
  });

  return (
    <div className="w-full" data-nocms-component="unit-table">
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2 text-sm font-bold uppercase tracking-widest border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              filter === f.key
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                : "border-white/20 text-muted hover:border-primary/50 hover:text-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary/30">
              <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Size</th>
              <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Dimensions</th>
              <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Features</th>
              <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Monthly Rate</th>
              <th className="text-left py-4 px-4 text-xs font-bold uppercase tracking-widest text-muted">Availability</th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((unit, i) => (
              <tr
                key={i}
                className={`border-b border-white/5 transition-colors hover:bg-surface ${
                  unit.popular ? "bg-primary/5" : ""
                }`}
              >
                <td className="py-5 px-4">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-2xl font-extrabold text-primary">{unit.size}</span>
                    {unit.popular && (
                      <span className="inline-flex items-center bg-accent text-background font-bold px-3 py-1 text-xs uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-5 px-4 text-muted font-mono text-sm">{unit.dimensions}</td>
                <td className="py-5 px-4">
                  <div className="flex flex-wrap gap-1">
                    {unit.features.map((f, fi) => (
                      <span key={fi} className="text-xs border border-white/10 text-muted px-2 py-0.5 font-body">
                        {f}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-5 px-4">
                  <span className="font-heading text-3xl font-extrabold text-primary">${unit.price}</span>
                  <span className="text-muted text-sm">/mo</span>
                </td>
                <td className="py-5 px-4">
                  {unit.availability <= 2 ? (
                    <span className="inline-flex items-center gap-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full inline-block"></span>
                      Only {unit.availability} Left!
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 uppercase tracking-wider border border-white/10 text-text">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                      {unit.availability} Available
                    </span>
                  )}
                </td>
                <td className="py-5 px-4">
                  <Link
                    href={`/${facilitySlug}#reserve`}
                    className="bg-primary text-white font-bold px-6 py-3 uppercase tracking-widest text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Reserve
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.map((unit, i) => (
          <div
            key={i}
            className={`bg-surface border p-5 ${
              unit.popular ? "border-primary/40 shadow-lg shadow-primary/10" : "border-white/5"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading text-3xl font-extrabold text-primary">{unit.size}</span>
                  {unit.popular && (
                    <span className="inline-flex items-center bg-accent text-background font-bold px-2 py-0.5 text-xs uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-muted font-mono text-xs">{unit.dimensions}</p>
              </div>
              <div className="text-right">
                <div className="font-heading text-3xl font-extrabold text-primary">${unit.price}</div>
                <div className="text-muted text-xs">/month</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {unit.features.map((f, fi) => (
                <span key={fi} className="text-xs border border-white/10 text-muted px-2 py-0.5">
                  {f}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              {unit.availability <= 2 ? (
                <span className="text-secondary text-xs font-bold">Only {unit.availability} Left!</span>
              ) : (
                <span className="text-text text-xs">{unit.availability} Available</span>
              )}
              <Link
                href={`/${facilitySlug}#reserve`}
                className="bg-primary text-white font-bold px-5 py-2.5 uppercase tracking-widest text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-shadow inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Reserve
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
