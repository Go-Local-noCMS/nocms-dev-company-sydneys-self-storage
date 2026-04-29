import Link from "next/link";

interface StorageCTABannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function StorageCTABanner({
  heading = "Ready to Reserve Your Unit?",
  subheading = "Join 600+ happy customers in Overland Park. Reserve online in under 2 minutes — no credit card required.",
  primaryLabel = "View Available Units",
  primaryHref = "/facility",
  secondaryLabel = "Call (913) 555-0190",
  secondaryHref = "tel:9135550190",
}: StorageCTABannerProps) {
  return (
    <section className="bg-primary py-20 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 -top-32 w-96 h-96 bg-white/5 pointer-events-none"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-6xl font-extrabold text-white uppercase tracking-wide leading-[0.9] mb-4"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {heading}
        </h2>
        <p className="text-white/80 text-xl font-body mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-white text-primary font-bold px-10 py-5 uppercase tracking-widest text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-transform inline-block"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border-2 border-white/60 text-white font-bold px-10 py-5 uppercase tracking-widest text-base hover:bg-white/10 transition-colors inline-block"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
