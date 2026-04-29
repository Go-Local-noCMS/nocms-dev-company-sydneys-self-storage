import { FacilityInfoBar } from "@/components/FacilityInfoBar";
import { UnitTable } from "@/components/UnitTable";
import { StorageFaq } from "@/components/StorageFaq";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import { Star, MapPin } from "lucide-react";
import Link from "next/link";

const photos = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Facility exterior view" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Climate-controlled storage hallway" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", alt: "Unit interior" },
  { src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80", alt: "Drive-up access units" },
];

const reviews = [
  { name: "Sarah K.", rating: 5, date: "March 2025", text: "Cleanest storage facility I've ever been in. The climate control really works — my antique furniture was perfect after 6 months." },
  { name: "Tom B.", rating: 5, date: "February 2025", text: "Easy online reservation, super helpful staff, and the 24/7 access is genuinely convenient. Highly recommend." },
  { name: "Anika P.", rating: 5, date: "January 2025", text: "Moved from Chicago and needed short-term storage. Sydney's made it painless. Prices are fair and the facility is immaculate." },
];

export default function FacilityPage() {
  return (
    <main className="bg-background">
      {/* Hero Units Section */}
      <section className="bg-background pt-16 pb-10 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-muted text-sm mb-3">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>9800 Metcalf Ave, Overland Park, KS 66212</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-primary uppercase tracking-wide leading-[0.85]"
                style={{ textShadow: "0 0 30px rgba(224,32,112,0.3)" }}
              >
                Storage Units<br />
                <span className="text-text">Overland Park</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <span className="text-text font-bold">4.9</span>
              <span className="text-muted text-sm">(600+ reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Info Bar */}
      <FacilityInfoBar />

      {/* Unit Availability Table */}
      <section className="bg-background py-16 px-6" id="units">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-3">
              Live Availability
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary uppercase tracking-wide leading-[0.9]">
              Available Units
            </h2>
          </div>
          <UnitTable facilitySlug="facility" />
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-extrabold text-text uppercase tracking-wide mb-8">
            Facility Photos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {photos.map((photo, i) => (
              <div key={i} className="aspect-square overflow-hidden border border-white/10 hover:border-primary/40 transition-colors">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve CTA */}
      <section id="reserve" className="bg-background py-16 px-6 border-y border-primary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-4">
            Reserve Your Unit
          </h2>
          <p className="text-muted font-body text-lg mb-8 leading-relaxed">
            Lock in today's rate — no credit card required. Your unit is held until your move-in date.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:9135550190"
              className="bg-primary text-white font-bold px-10 py-5 uppercase tracking-widest text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform inline-block"
            >
              Call (913) 555-0190
            </a>
            <Link
              href="#units"
              className="border-2 border-primary/50 text-primary font-bold px-10 py-5 uppercase tracking-widest hover:bg-primary/10 transition-colors inline-block"
            >
              Browse Units
            </Link>
          </div>
        </div>
      </section>

      {/* About / History */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Our Story
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-6">
            About Sydney's Self Storage
          </h2>
          <div className="space-y-4 text-muted font-body text-lg leading-relaxed">
            <p>
              Sydney's Self Storage has been serving Overland Park and the greater Kansas City metro area for over 15 years. Founded by Sydney and David Chen in 2009, we started with a single facility on Metcalf Ave and a simple promise: clean, secure, climate-controlled storage at a fair price.
            </p>
            <p>
              Today that promise still drives every decision we make. We were one of the first facilities in Johnson County to offer fully climate-controlled units across every size — from a small closet unit to a warehouse bay. We believe your belongings deserve real protection, not just a padlock on a metal door.
            </p>
            <p>
              Every unit is individually alarmed, every corridor is climate-controlled, and every customer gets 24/7 access. Because when you trust us with your things, we take that seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background py-16 px-6" id="map">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-extrabold text-text uppercase tracking-wide mb-6">
            Get Directions
          </h2>
          <div className="border-2 border-white/10 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.123456789!2d-94.6704!3d38.9822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ebb77d7c2e1b%3A0x1234567890abcdef!2s9800%20Metcalf%20Ave%2C%20Overland%20Park%2C%20KS%2066212!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sydney's Self Storage location map"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Reviews
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-10">
            What Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-surface p-8">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted text-sm font-body leading-relaxed mb-4 italic">"{r.text}"</p>
                <div className="font-heading text-sm font-extrabold text-text uppercase tracking-wide">{r.name}</div>
                <div className="text-muted text-xs">{r.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <StorageFaq />

      {/* CTA Banner */}
      <StorageCTABanner
        heading="Ready to Move In?"
        subheading="Reserve your climate-controlled unit today. No credit card required to hold your spot."
      />
    </main>
  );
}
