import { Thermometer, Camera, CreditCard, Clock, Lock, Truck, Zap, Shield } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Thermometer className="w-7 h-7" aria-hidden="true" />,
    title: "Climate Control",
    description: "Year-round temperature and humidity regulation protects your valuables from Kansas weather extremes.",
  },
  {
    icon: <Camera className="w-7 h-7" aria-hidden="true" />,
    title: "24/7 HD Security",
    description: "Continuous video surveillance, motion-activated lighting, and individual unit alarms throughout the facility.",
  },
  {
    icon: <Clock className="w-7 h-7" aria-hidden="true" />,
    title: "24/7 Gate Access",
    description: "Access your unit any time of day or night, 365 days a year. Your schedule, your storage.",
  },
  {
    icon: <CreditCard className="w-7 h-7" aria-hidden="true" />,
    title: "Online Payments",
    description: "Manage your account, pay rent, and reserve units entirely online. No office visit required.",
  },
  {
    icon: <Lock className="w-7 h-7" aria-hidden="true" />,
    title: "Electronic Gate",
    description: "Personal PIN code access and keypad entry. Every unit has a heavy-duty disc lock system.",
  },
  {
    icon: <Truck className="w-7 h-7" aria-hidden="true" />,
    title: "Drive-Up Access",
    description: "Pull your truck right up to select units. No hauling heavy items across long corridors.",
  },
  {
    icon: <Zap className="w-7 h-7" aria-hidden="true" />,
    title: "Instant Reservations",
    description: "Reserve online in under 2 minutes. No credit card required, no commitment to hold your unit.",
  },
  {
    icon: <Shield className="w-7 h-7" aria-hidden="true" />,
    title: "Rate Guarantee",
    description: "We match any local competitor's advertised rate. Best price guaranteed for the same unit type.",
  },
];

export function StorageFeatureGrid() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-extrabold text-primary uppercase tracking-wide leading-[0.85]">
            Everything<br />You Need
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-background p-8 group hover:bg-surface transition-colors"
            >
              <div className="h-14 w-14 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-heading text-lg font-extrabold text-text uppercase tracking-wide mb-3">
                {f.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
