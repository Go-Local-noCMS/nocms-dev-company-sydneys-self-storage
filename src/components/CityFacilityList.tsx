import Link from "next/link";
import { MapPin, Star, Thermometer, Clock } from "lucide-react";

interface FacilityListing {
  name: string;
  address: string;
  distance: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  topSizes: { size: string; price: number; available: boolean }[];
  features: string[];
  slug: string;
}

interface CityFacilityListProps {
  city?: string;
  facilities?: FacilityListing[];
}

const defaultFacilities: FacilityListing[] = [
  {
    name: "Sydney's Self Storage — Metcalf",
    address: "9800 Metcalf Ave, Overland Park, KS 66212",
    distance: "0.0 mi",
    rating: 4.9,
    reviewCount: 312,
    startingPrice: 49,
    slug: "facility",
    features: ["Climate Control", "24/7 Access", "Drive-Up", "Online Payments"],
    topSizes: [
      { size: "5×10", price: 79, available: true },
      { size: "10×10", price: 119, available: true },
      { size: "10×20", price: 189, available: false },
    ],
  },
  {
    name: "Sydney's Self Storage — 135th St",
    address: "13505 W 135th St, Overland Park, KS 66221",
    distance: "3.2 mi",
    rating: 4.8,
    reviewCount: 198,
    startingPrice: 45,
    slug: "facility",
    features: ["Climate Control", "24/7 Access", "Online Payments"],
    topSizes: [
      { size: "5×5", price: 45, available: true },
      { size: "10×10", price: 109, available: true },
      { size: "10×15", price: 149, available: true },
    ],
  },
];

export function CityFacilityList({ city = "Overland Park", facilities = defaultFacilities }: CityFacilityListProps) {
  return (
    <section className="bg-background py-24 px-6" data-nocms-component="city-facility-list">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            {city} Locations
          </span>
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-primary uppercase tracking-wide leading-[0.85]" data-role="heading">
            {facilities.length} {facilities.length === 1 ? "Facility" : "Facilities"}<br />Near You
          </h2>
        </div>

        <div className="space-y-6">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="bg-surface border border-white/5 hover:border-primary/30 transition-colors shadow-xl shadow-black/30"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-text uppercase tracking-wide mb-1">
                      {facility.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {facility.address}
                      </span>
                      <span className="text-primary font-bold">{facility.distance}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                      <span className="font-bold text-text">{facility.rating}</span>
                      <span className="text-muted text-sm">({facility.reviewCount} reviews)</span>
                    </div>
                    <div className="text-muted text-sm">From <span className="text-primary font-bold text-lg">${facility.startingPrice}/mo</span></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {facility.features.map((f, fi) => (
                    <span key={fi} className="text-xs border border-white/10 text-muted px-3 py-1 flex items-center gap-1">
                      {f === "Climate Control" && <Thermometer className="w-3 h-3" aria-hidden="true" />}
                      {f === "24/7 Access" && <Clock className="w-3 h-3" aria-hidden="true" />}
                      {f}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/5 pt-5">
                  <div className="text-xs text-muted uppercase tracking-wider mb-3">Available Sizes</div>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {facility.topSizes.map((sz, si) => (
                      <div
                        key={si}
                        className={`border px-4 py-2 text-center min-w-[80px] ${
                          sz.available
                            ? "border-primary/30 bg-primary/5"
                            : "border-white/10 opacity-50"
                        }`}
                      >
                        <div className="font-heading text-lg font-extrabold text-primary">{sz.size}</div>
                        <div className="text-sm text-text">${sz.price}/mo</div>
                        <div className={`text-xs mt-0.5 ${sz.available ? "text-green-400" : "text-muted"}`}>
                          {sz.available ? "Available" : "Full"}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/${facility.slug}`}
                    className="bg-primary text-white font-bold px-8 py-3.5 uppercase tracking-widest text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform inline-block"
                  >
                    View Units &amp; Reserve
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
