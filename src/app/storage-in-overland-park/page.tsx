import { CityFacilityList } from "@/components/CityFacilityList";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { StorageFaq } from "@/components/StorageFaq";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

const neighborhoods = [
  { name: "Blue Valley", description: "Near 135th St corridor — units available from $45/mo." },
  { name: "Leawood Border", description: "Quick access from 119th St and Roe Ave — 24/7 gate." },
  { name: "Corporate Woods", description: "Business storage near the business park corridor." },
  { name: "Corbin Park", description: "Easy access for South Overland Park residents." },
];

const localReviews = [
  { name: "Greg F.", neighborhood: "Blue Valley", rating: 5, text: "Best storage option in south OP. Clean, affordable, and the climate control is legit." },
  { name: "Megan L.", neighborhood: "Leawood", rating: 5, text: "Used Sydney's for our home renovation. Stored everything for 8 weeks and it all came back perfect." },
  { name: "Carlos V.", neighborhood: "Olathe", rating: 5, text: "Worth the 5-minute drive from Olathe. Better facilities and pricing than anything closer to me." },
];

const movingResources = [
  { title: "Overland Park Moving Guide", href: "/blog/moving-overland-park" },
  { title: "Best Neighborhoods in OP", href: "#" },
  { title: "Storage Size Guide", href: "/size-guide" },
  { title: "Packing Tips for KS Weather", href: "/blog/seasonal-storage-guide" },
];

export default function OverlandParkPage() {
  return (
    <main className="bg-background">
      {/* SEO Hero */}
      <section className="bg-background pt-20 pb-12 px-6 border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(224,32,112,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-muted text-sm mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Johnson County, Kansas</span>
          </div>
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Overland Park, KS
          </span>
          <h1
            className="font-heading text-6xl md:text-8xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-6"
            style={{ textShadow: "0 0 40px rgba(224,32,112,0.4)" }}
          >
            Self Storage<br />
            <span className="text-text">Overland Park</span>
          </h1>
          <p className="text-muted text-xl font-body leading-relaxed max-w-2xl mb-8">
            Climate-controlled self storage in Overland Park, KS. Two convenient locations serving Blue Valley, Leawood, Olathe, and the entire south KC metro. Units available from $45/month.
          </p>
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

      {/* Facility Listings */}
      <CityFacilityList city="Overland Park" />

      {/* Neighborhoods */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-8">
            Serving Every<br />Neighborhood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {neighborhoods.map((n, i) => (
              <div key={i} className="bg-surface p-8 hover:bg-background transition-colors">
                <h3 className="font-heading text-lg font-extrabold text-text uppercase tracking-wide mb-2">{n.name}</h3>
                <p className="text-muted text-sm font-body">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Reviews */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-10">
            Overland Park<br />Customers Love Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {localReviews.map((r, i) => (
              <div key={i} className="bg-surface p-8">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted text-sm font-body leading-relaxed mb-4 italic">"{r.text}"</p>
                <div className="font-heading text-sm font-extrabold text-text uppercase tracking-wide">{r.name}</div>
                <div className="text-muted text-xs">{r.neighborhood}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Resources */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl font-extrabold text-primary uppercase tracking-wide mb-8">
            Overland Park Moving Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {movingResources.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                className="bg-background border border-white/10 px-6 py-4 hover:border-primary/40 hover:bg-surface transition-colors flex items-center justify-between group"
              >
                <span className="text-text font-body font-bold group-hover:text-primary transition-colors">{r.title}</span>
                <span className="text-primary text-lg" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StorageFaq />

      <StorageCTABanner
        heading="Storage Near You in Overland Park"
        subheading="Reserve a climate-controlled unit today. Same-day move-in available at both Overland Park locations."
        primaryLabel="Reserve Now"
        primaryHref="/facility"
      />
    </main>
  );
}
