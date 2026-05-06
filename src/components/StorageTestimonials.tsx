"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus T.",
    location: "Overland Park, KS",
    rating: 5,
    text: "Sydney's is hands-down the best storage facility I've ever used. Climate control means my furniture came out exactly as I left it — even through a brutal Kansas summer. The online reservation took less than 2 minutes.",
    date: "Jan 2025",
  },
  {
    name: "Priya R.",
    location: "Leawood, KS",
    rating: 5,
    text: "I was nervous about storing my vintage record collection but the climate control here is legit. Temperature stays consistent and the unit was spotless on move-in. Staff is incredibly friendly too.",
    date: "Feb 2025",
  },
  {
    name: "Jason & Kelly M.",
    location: "Olathe, KS",
    rating: 5,
    text: "Used Sydney's during our home sale. We stored basically our entire house for 3 months and everything came out in perfect condition. 24/7 access was a lifesaver when we needed items at odd hours.",
    date: "Mar 2025",
  },
  {
    name: "Diana C.",
    location: "Kansas City, MO",
    rating: 5,
    text: "The rate guarantee is real — they matched the competitor price without any hassle. Clean, secure, and the app makes it super easy to manage payments. Highly recommend!",
    date: "Apr 2025",
  },
  {
    name: "Brandon W.",
    location: "Shawnee, KS",
    rating: 5,
    text: "Drive-up access is a game changer. I run a small business and need to grab inventory frequently. Sydney's makes it fast and easy. Never had a single issue in 18 months.",
    date: "Apr 2025",
  },
];

export function StorageTestimonials() {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }
  function next() {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }

  const t = testimonials[current];

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden" data-nocms-component="storage-testimonials">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(224,32,112,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-primary uppercase tracking-wide leading-[0.85]" data-role="heading">
            600+ Happy<br />Customers
          </h2>
        </div>

        <div className="bg-surface border border-primary/20 p-10 md:p-14 shadow-2xl shadow-primary/10 relative">
          {/* Quote mark */}
          <div
            className="absolute top-6 right-8 font-heading text-9xl text-primary/10 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
            ))}
          </div>

          <p className="text-text text-xl md:text-2xl font-body leading-relaxed mb-8 italic" data-role="subheading">
            &ldquo;{t.text}&rdquo;
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-heading text-base font-extrabold text-primary uppercase tracking-wide">
                {t.name}
              </div>
              <div className="text-muted text-sm">{t.location} · {t.date}</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="h-12 w-12 border-2 border-white/20 flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="h-12 w-12 border-2 border-white/20 flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${i === current ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
