"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";

const locations = [
  {
    id: "metcalf",
    name: "Metcalf Ave — Flagship",
    address: "9800 Metcalf Ave, Overland Park, KS 66212",
    phone: "(913) 555-0190",
    officeHours: "Mon–Sat 9am–6pm, Sun 10am–4pm",
    gateHours: "24/7",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098!2d-94.6704!3d38.9822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ebb77d7c2e1b%3A0x1234!2s9800+Metcalf+Ave+Overland+Park+KS!5e0!3m2!1sen!2sus!4v1",
  },
  {
    id: "135th",
    name: "W 135th St",
    address: "13505 W 135th St, Overland Park, KS 66221",
    phone: "(913) 555-0191",
    officeHours: "Mon–Fri 9am–5pm, Sat 9am–4pm",
    gateHours: "24/7",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098!2d-94.73!3d38.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e!2s13505+W+135th+St+Overland+Park+KS!5e0!3m2!1sen!2sus!4v1",
  },
];

const inquiryTypes = ["General Inquiry", "Reserve a Unit", "Billing & Payments", "Moving Help", "Careers"];

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState("metcalf");
  const [inquiryType, setInquiryType] = useState("General Inquiry");
  const [submitted, setSubmitted] = useState(false);

  const loc = locations.find((l) => l.id === selectedLocation) ?? locations[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-background pt-20 pb-12 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Contact Us
          </span>
          <h1
            className="font-heading text-6xl md:text-8xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-4"
            style={{ textShadow: "0 0 40px rgba(224,32,112,0.4)" }}
          >
            Get In<br />
            <span className="text-text">Touch</span>
          </h1>
          <p className="text-muted text-xl font-body leading-relaxed max-w-2xl">
            Questions, reservations, billing, or just want to say hello — we're here. Choose your location and send us a message.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-text uppercase tracking-wide mb-6">
              Send a Message
            </h2>

            {submitted ? (
              <div className="bg-surface border border-primary/30 p-10 text-center">
                <div className="font-heading text-5xl text-primary mb-4">✓</div>
                <h3 className="font-heading text-2xl font-extrabold text-text uppercase tracking-wide mb-2">Message Sent!</h3>
                <p className="text-muted font-body">We'll get back to you within 1 business day. For urgent needs, call us directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Location selector */}
                <div>
                  <label htmlFor="location-select" className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 font-body">
                    Select Location
                  </label>
                  <div className="relative">
                    <select
                      id="location-select"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-surface border-2 border-white/10 px-5 py-3.5 text-text focus:outline-none focus:border-primary/50 transition-colors appearance-none font-body"
                    >
                      {locations.map((l) => (
                        <option key={l.id} value={l.id}>{l.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                {/* Inquiry type */}
                <div>
                  <label htmlFor="inquiry-type" className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 font-body">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full bg-surface border-2 border-white/10 px-5 py-3.5 text-text focus:outline-none focus:border-primary/50 transition-colors appearance-none font-body"
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 font-body">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full bg-surface border-2 border-white/10 px-5 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 font-body">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-surface border-2 border-white/10 px-5 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors font-body"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 font-body">Phone (optional)</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="(913) 555-0000"
                    className="w-full bg-surface border-2 border-white/10 px-5 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors font-body"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-muted uppercase tracking-widest mb-2 font-body">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-surface border-2 border-white/10 px-5 py-3.5 text-text placeholder:text-muted focus:outline-none focus:border-primary/50 transition-colors font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-primary text-white font-bold px-8 py-4 uppercase tracking-widest text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-transform w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Location Info */}
          <div>
            {/* Location tabs */}
            <div className="flex gap-0 mb-6 border border-white/10">
              {locations.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLocation(l.id)}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                    selectedLocation === l.id
                      ? "bg-primary text-white"
                      : "text-muted hover:text-text hover:bg-surface"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              {[
                { icon: <MapPin className="w-5 h-5" aria-hidden="true" />, label: "Address", value: loc.address },
                { icon: <Phone className="w-5 h-5" aria-hidden="true" />, label: "Phone", value: loc.phone, href: `tel:${loc.phone.replace(/\D/g, "")}` },
                { icon: <Mail className="w-5 h-5" aria-hidden="true" />, label: "Email", value: "hello@sydneysselfstorage.com", href: "mailto:hello@sydneysselfstorage.com" },
                { icon: <Clock className="w-5 h-5" aria-hidden="true" />, label: "Office Hours", value: loc.officeHours },
                { icon: <Clock className="w-5 h-5" aria-hidden="true" />, label: "Gate Access", value: loc.gateHours },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-surface border border-white/5 p-5">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider mb-1 font-body">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-text font-bold font-body hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-text font-bold font-body">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="border border-white/10 overflow-hidden" id="map">
              <iframe
                src={loc.mapUrl}
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map for ${loc.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
