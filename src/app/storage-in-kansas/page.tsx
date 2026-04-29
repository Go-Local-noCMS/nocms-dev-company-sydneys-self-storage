import Link from "next/link";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { MapPin, Building2 } from "lucide-react";

const cities = [
  { city: "Overland Park", facilityCount: 2, avgPrice: 79, topFeature: "Climate Control + Drive-Up", href: "/storage-in-overland-park", highlight: true },
  { city: "Olathe", facilityCount: 1, avgPrice: 69, topFeature: "Climate Control", href: "/storage-in-overland-park" },
  { city: "Shawnee", facilityCount: 1, avgPrice: 65, topFeature: "Drive-Up + 24/7 Access", href: "/storage-in-overland-park" },
  { city: "Lenexa", facilityCount: 1, avgPrice: 72, topFeature: "Climate Control", href: "/storage-in-overland-park" },
  { city: "Leawood", facilityCount: 1, avgPrice: 84, topFeature: "Premium Climate Units", href: "/storage-in-overland-park" },
  { city: "Prairie Village", facilityCount: 1, avgPrice: 78, topFeature: "Indoor Climate Units", href: "/storage-in-overland-park" },
  { city: "Gardner", facilityCount: 1, avgPrice: 55, topFeature: "Drive-Up Access", href: "/storage-in-overland-park" },
  { city: "Merriam", facilityCount: 1, avgPrice: 60, topFeature: "Climate Control", href: "/storage-in-overland-park" },
];

const storageTips = [
  { title: "Kansas Climate & Your Storage", body: "Kansas weather swings from -5°F winters to 100°F summers. Climate control isn't a luxury here — it's essential for protecting wood furniture, electronics, documents, and anything with adhesives." },
  { title: "Kansas Storage Regulations", body: "Kansas state law requires storage facilities to provide written rental agreements. Lien procedures follow KSA 58-816 — facilities must provide 14-day notice before auctioning delinquent units. Always get your rental agreement in writing." },
  { title: "Best Times to Rent in KS", body: "January through March typically offers the lowest rates across Kansas storage facilities. Avoid summer if possible — demand peaks June through August when people are moving between leases." },
  { title: "Insurance Requirements", body: "Kansas does not require renters to carry storage insurance by law, but most facilities require it. Check your homeowner's or renter's policy — many cover off-premise storage up to 10% of your coverage limit." },
];

export default function KansasStatePage() {
  const totalFacilities = cities.reduce((sum, c) => sum + c.facilityCount, 0);

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-background pt-20 pb-12 px-6 border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(224,32,112,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224,32,112,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-muted text-sm mb-4">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Kansas, United States</span>
          </div>
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Kansas Storage Locations
          </span>
          <h1
            className="font-heading text-6xl md:text-8xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-6"
            style={{ textShadow: "0 0 40px rgba(224,32,112,0.4)" }}
          >
            Storage<br />
            <span className="text-text">In Kansas</span>
          </h1>
          <p className="text-muted text-xl font-body leading-relaxed max-w-2xl mb-8">
            {totalFacilities} climate-controlled storage facilities across {cities.length} Kansas cities. All units feature year-round temperature regulation — because Kansas weather demands it.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="text-center">
              <div className="font-heading text-4xl font-extrabold text-primary">{totalFacilities}</div>
              <div className="text-muted text-sm">Total Facilities</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-extrabold text-primary">{cities.length}</div>
              <div className="text-muted text-sm">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-extrabold text-primary">100%</div>
              <div className="text-muted text-sm">Climate Controlled</div>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-10">
            Find Storage<br />By City
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5">
            {cities.map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className={`group block bg-background hover:bg-surface transition-colors p-8 ${
                  c.highlight ? "border-2 border-primary/30" : ""
                }`}
              >
                {c.highlight && (
                  <span className="inline-flex items-center bg-accent text-background font-bold px-2 py-0.5 text-xs uppercase tracking-wider mb-3">
                    Flagship
                  </span>
                )}
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Building2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-text group-hover:text-primary transition-colors uppercase tracking-wide">
                      {c.city}
                    </h3>
                    <div className="text-muted text-xs">{c.facilityCount} {c.facilityCount === 1 ? "facility" : "facilities"}</div>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-xs text-muted">Avg. price from </span>
                  <span className="font-heading text-xl font-extrabold text-primary">${c.avgPrice}/mo</span>
                </div>
                <div className="text-xs border border-white/10 text-muted px-2 py-1 inline-block">{c.topFeature}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Tips & Regulations */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-10">
            Kansas Storage<br />Tips &amp; Regulations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {storageTips.map((tip, i) => (
              <div key={i} className="bg-surface p-8 hover:bg-background transition-colors">
                <h3 className="font-heading text-lg font-extrabold text-text uppercase tracking-wide mb-3">{tip.title}</h3>
                <p className="text-muted text-sm font-body leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StorageCTABanner
        heading="Find a Kansas Storage Unit Near You"
        subheading="Browse all locations and reserve online in minutes. Rate guarantee on every unit."
        primaryLabel="Browse All Units"
        primaryHref="/facility"
        secondaryLabel="View Overland Park"
        secondaryHref="/storage-in-overland-park"
      />
    </main>
  );
}
