import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { footerColumns, socialLinks, type FooterColumn as FooterColumnType } from "@/data/site-config";
import skinConfig from "@/skin.config";

interface FooterProps {
  brandName?: string;
  columns?: FooterColumnType[];
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

export function Footer({
  brandName = skinConfig.brandName,
  columns = footerColumns,
  contactInfo,
}: FooterProps) {
  const phone = contactInfo?.phone ?? skinConfig.phone;
  const email = contactInfo?.email ?? skinConfig.email ?? "hello@sydneysselfstorage.com";
  const address = contactInfo?.address ?? skinConfig.address ?? "";

  const iconMap: Record<string, React.ElementType> = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
  };

  return (
    <footer className="bg-surface border-t border-primary/20 text-text relative overflow-hidden" data-nocms-component="layout/footer">
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-primary/40 via-secondary/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top row: logo & contact */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-10 mb-10 border-b border-white/10">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 bg-primary flex items-center justify-center">
                <span className="text-white font-heading text-lg font-bold">
                  {brandName.charAt(0)}
                </span>
              </div>
              <span className="font-heading text-xl font-bold text-text tracking-tight">
                {brandName}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed" data-role="subheading">
              {skinConfig.tagline}. Clean, secure, and accessible 24/7 — because your belongings deserve real protection.
            </p>
          </div>
          <div className="text-sm text-muted space-y-2 lg:text-right">
            {address && (
              <div className="flex items-center gap-2 lg:justify-end">
                <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                {address}
              </div>
            )}
            <div className="flex items-center gap-2 lg:justify-end">
              <Phone className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="hover:text-text transition-colors">
                {phone}
              </a>
              <span className="mx-1">&middot;</span>
              <Mail className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              <a href={`mailto:${email}`} className="hover:text-text transition-colors">
                {email}
              </a>
            </div>
            <p className="text-muted text-xs">Gate Access: 24/7 &middot; Office: Mon&ndash;Sat 9am&ndash;6pm</p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-text tracking-wide uppercase mb-4" data-role="heading">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-50 transition-all"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.platform];
              return Icon ? (
                <a
                  key={social.platform}
                  href={social.href}
                  className="h-9 w-9 bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
