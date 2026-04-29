import type { Metadata } from "next";
import { Orbitron, Nunito_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sydney's Self Storage — Climate-Controlled Storage in Overland Park, KS",
  description:
    "Climate-controlled self storage in Overland Park, Kansas. Secure units from $49/mo. 24/7 gate access, online reservations, rate guarantee. Serving the entire KC metro.",
};

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Storage Units",
    href: "/facility",
    children: [
      { label: "View All Units", href: "/facility", description: "Browse available sizes & pricing" },
      { label: "Size Guide", href: "/size-guide", description: "Find the right unit for you" },
    ],
  },
  {
    label: "Locations",
    href: "/storage-in-overland-park",
    children: [
      { label: "Overland Park, KS", href: "/storage-in-overland-park", description: "Our flagship facility" },
      { label: "Kansas Storage", href: "/storage-in-kansas", description: "All KS locations" },
    ],
  },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Blog & Tips", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${nunitoSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text font-body antialiased">
        <Navbar
          links={navLinks}
          logo="Sydney's Self Storage"
          phone="(913) 555-0190"
          ctaText="Reserve Now"
          ctaHref="/facility"
        />
        <div className="pt-16">
          {children}
        </div>
        <Footer
          brandName="Sydney's Self Storage"
          contactInfo={{
            phone: "(913) 555-0190",
            email: "hello@sydneysselfstorage.com",
            address: "9800 Metcalf Ave, Overland Park, KS 66212",
          }}
        />
      </body>
    </html>
  );
}
