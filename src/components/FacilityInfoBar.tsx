import { MapPin, Clock, Phone, Shield, Thermometer } from "lucide-react";
import Link from "next/link";

interface FacilityInfoBarProps {
  address?: string;
  phone?: string;
  officeHours?: string;
  gateHours?: string;
}

export function FacilityInfoBar({
  address = "9800 Metcalf Ave, Overland Park, KS 66212",
  phone = "(913) 555-0190",
  officeHours = "Mon–Sat 9am–6pm, Sun 10am–4pm",
  gateHours = "24/7 — Every Day",
}: FacilityInfoBarProps) {
  const items = [
    { icon: <MapPin className="w-5 h-5" aria-hidden="true" />, label: "Address", value: address },
    { icon: <Phone className="w-5 h-5" aria-hidden="true" />, label: "Phone", value: phone },
    { icon: <Clock className="w-5 h-5" aria-hidden="true" />, label: "Office Hours", value: officeHours },
    { icon: <Shield className="w-5 h-5" aria-hidden="true" />, label: "Gate Access", value: gateHours },
    { icon: <Thermometer className="w-5 h-5" aria-hidden="true" />, label: "Climate", value: "All Units Climate Controlled" },
  ];

  return (
    <div className="bg-surface border-y border-primary/20" data-nocms-component="facility-info-bar">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-8 items-center justify-between">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 min-w-0">
              <div className="h-10 w-10 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted uppercase tracking-wider font-body">{item.label}</div>
                <div className="text-sm font-bold text-text font-body truncate">{item.value}</div>
              </div>
            </div>
          ))}
          <Link
            href="#reserve"
            className="bg-primary text-white font-bold px-6 py-3 uppercase tracking-widest text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform flex-shrink-0 inline-block"
          >
            Reserve a Unit
          </Link>
        </div>
      </div>
    </div>
  );
}
