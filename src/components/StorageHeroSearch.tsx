"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Shield, Star, Clock } from "lucide-react";

interface TrustSignal {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function StorageHeroSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/facility?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/facility");
    }
  }

  const trustSignals: TrustSignal[] = [
    { icon: <Star className="w-5 h-5" aria-hidden="true" />, value: "4.9★", label: "600+ Reviews" },
    { icon: <Shield className="w-5 h-5" aria-hidden="true" />, value: "15+", label: "Years in Business" },
    { icon: <Clock className="w-5 h-5" aria-hidden="true" />, value: "24/7", label: "Gate Access" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background" data-nocms-component="storage-hero-search">
      {/* Neon grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(224,32,112,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224,32,112,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />
      {/* Pink glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest px-4 py-2 mb-8">
          <MapPin className="w-4 h-4" aria-hidden="true" />
          Overland Park, Kansas
        </div>

        {/* Headline */}
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-6"
          style={{ textShadow: "0 0 40px rgba(224,32,112,0.5), 0 0 80px rgba(224,32,112,0.2)" }} data-role="heading"
        >
          Sydney's<br />
          <span className="text-text">Self</span><br />
          Storage
        </h1>

        <p className="text-xl text-muted font-body mb-10 max-w-2xl mx-auto leading-relaxed" data-role="subheading">
          Climate-controlled units in Overland Park. Secure, clean, and accessible 24/7.
          Reserve online in minutes — no credit card required.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto mb-12 shadow-2xl shadow-primary/20">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter zip code or city…"
              aria-label="Enter zip code or city to find storage units"
              className="w-full bg-surface border-2 border-white/10 pl-12 pr-4 py-5 text-text placeholder:text-muted focus:outline-none focus:border-primary/50 focus:shadow-[0_0_10px] focus:shadow-primary/20 transition-colors text-lg font-body"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold px-10 py-5 uppercase tracking-widest text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform flex items-center gap-2 justify-center" data-role="cta"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
            Find Units
          </button>
        </form>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-8">
          {trustSignals.map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-left">
              <div className="h-12 w-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                {s.icon}
              </div>
              <div>
                <div className="font-heading text-xl font-extrabold text-primary">{s.value}</div>
                <div className="text-muted text-sm">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
