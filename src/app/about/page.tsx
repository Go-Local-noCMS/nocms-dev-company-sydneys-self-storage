import { StorageCTABanner } from "@/components/StorageCTABanner";
import { Shield, Star, Users, MapPin, Award, Heart } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "2", label: "KS Facilities" },
  { value: "600+", label: "5-Star Reviews" },
  { value: "100%", label: "Climate Controlled" },
];

const team = [
  {
    name: "Sydney Chen",
    title: "Co-Founder & CEO",
    bio: "Sydney founded Sydney's Self Storage in 2009 after a frustrating personal experience with poorly maintained storage in Kansas City. She built the company on three principles: cleanliness, security, and fair pricing.",
    initials: "SC",
  },
  {
    name: "David Chen",
    title: "Co-Founder & COO",
    bio: "David oversees daily operations at both facilities. With a background in commercial real estate, he manages facility maintenance, capital improvements, and the technology systems that keep everything running smoothly.",
    initials: "DC",
  },
  {
    name: "Maria Gonzalez",
    title: "Customer Experience Manager",
    bio: "Maria leads the customer service team and has been with Sydney's since 2012. She is the reason our Google rating has never dipped below 4.8 — she takes every review personally.",
    initials: "MG",
  },
  {
    name: "James Park",
    title: "Facility Manager",
    bio: "James manages the day-to-day operations of both Overland Park locations. He's obsessive about cleanliness and security — which is exactly the kind of person you want running a storage facility.",
    initials: "JP",
  },
];

const awards = [
  { icon: <Award className="w-5 h-5" aria-hidden="true" />, title: "Best of Overland Park", body: "Voted Best Self Storage by the Overland Park Chamber of Commerce — 5 years running." },
  { icon: <Star className="w-5 h-5" aria-hidden="true" />, title: "Google 4.9 Rating", body: "Over 600 five-star reviews across both locations. Consistently one of the highest-rated storage facilities in Johnson County." },
  { icon: <Shield className="w-5 h-5" aria-hidden="true" />, title: "ISSA Member", body: "Proud member of the Inside Self Storage Association — committed to industry best practices and continuous improvement." },
  { icon: <Heart className="w-5 h-5" aria-hidden="true" />, title: "Community Partner", body: "Annual sponsor of the Overland Park Food Drive. We donate one month free storage to every local nonprofit that needs it." },
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-background pt-20 pb-16 px-6 border-b border-white/5 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(224,32,112,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            About Us
          </span>
          <h1
            className="font-heading text-6xl md:text-8xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-6"
            style={{ textShadow: "0 0 40px rgba(224,32,112,0.4)" }}
          >
            Our Story &amp;<br />
            <span className="text-text">Our Mission</span>
          </h1>
          <p className="text-muted text-xl font-body leading-relaxed max-w-2xl">
            15 years of clean, secure, climate-controlled storage in Overland Park. Family-owned and genuinely committed to the community we serve.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface p-8 text-center">
                <div className="font-heading text-5xl font-extrabold text-primary mb-2">{s.value}</div>
                <div className="text-muted text-sm uppercase tracking-wider font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-8">
            How We Started
          </h2>
          <div className="space-y-6 text-muted font-body text-lg leading-relaxed">
            <p>
              In 2008, Sydney Chen was preparing to move from Chicago to Overland Park for a new job. She needed to put her belongings in storage for three months while she found a place to live. What she got was a moldy, poorly lit unit where her grandmother's furniture was damaged by Kansas summer heat. When she complained, the facility offered her a $20 credit.
            </p>
            <p>
              That experience became the founding story of Sydney's Self Storage. Sydney partnered with her husband David — a commercial real estate professional who knew the Overland Park market well — and they opened their first facility on Metcalf Ave in June 2009. They built it around three non-negotiable principles: every unit is climate-controlled, every inch of the facility is immaculately clean, and pricing is always transparent with no surprise fees.
            </p>
            <p>
              Fifteen years later, we operate two Overland Park facilities with more than 600 five-star reviews. Sydney still reads every customer review personally. The principles haven't changed.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Meet the Team
          </span>
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-10">
            The People<br />Behind Sydney's
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {team.map((member, i) => (
              <div key={i} className="bg-surface p-8 hover:bg-background transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="font-heading text-lg font-extrabold text-primary">{member.initials}</span>
                  </div>
                  <div>
                    <div className="font-heading text-lg font-extrabold text-text uppercase tracking-wide">{member.name}</div>
                    <div className="text-primary text-xs uppercase tracking-wider font-body">{member.title}</div>
                  </div>
                </div>
                <p className="text-muted text-sm font-body leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Community */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl font-extrabold text-primary uppercase tracking-wide leading-[0.9] mb-10">
            Awards &amp;<br />Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {awards.map((a, i) => (
              <div key={i} className="bg-surface p-8 hover:bg-background transition-colors">
                <div className="h-12 w-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  {a.icon}
                </div>
                <h3 className="font-heading text-base font-extrabold text-text uppercase tracking-wide mb-2">{a.title}</h3>
                <p className="text-muted text-sm font-body leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-surface py-16 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-primary uppercase tracking-wide mb-2">
              Join Our Team
            </h2>
            <p className="text-muted font-body text-lg">
              We're always looking for friendly, detail-oriented people to join the Sydney's family.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-primary text-white font-bold px-8 py-4 uppercase tracking-widest text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform inline-block"
          >
            View Open Roles
          </Link>
        </div>
      </section>

      <StorageCTABanner
        heading="Come See for Yourself"
        subheading="Schedule a free tour of our Overland Park facilities and reserve your unit the same day."
        primaryLabel="Reserve a Unit"
        primaryHref="/facility"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  );
}
