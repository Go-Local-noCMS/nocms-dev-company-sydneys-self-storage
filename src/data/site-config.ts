export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "linkedin" | "x";
  href: string;
  label: string;
}

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Storage Units",
    href: "/facility",
    children: [
      { label: "View All Units", href: "/facility", description: "Browse available sizes & pricing" },
      { label: "Size Guide", href: "/size-guide", description: "Find the right unit for you" },
      { label: "Climate Control", href: "/facility#climate", description: "Why climate control matters" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Overland Park, KS", href: "/storage-in-overland-park", description: "Our flagship facility" },
      { label: "Kansas Storage", href: "/storage-in-kansas", description: "All KS locations" },
    ],
  },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Blog & Tips", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Storage Units",
    links: [
      { label: "View Available Units", href: "/facility" },
      { label: "5×5 Small Units", href: "/size-guide#5x5" },
      { label: "10×10 Medium Units", href: "/size-guide#10x10" },
      { label: "10×20 Large Units", href: "/size-guide#10x20" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Overland Park, KS", href: "/storage-in-overland-park" },
      { label: "Storage in Kansas", href: "/storage-in-kansas" },
      { label: "All Locations", href: "/locations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Moving Tips", href: "/blog" },
      { label: "Storage Size Guide", href: "/size-guide" },
      { label: "FAQ", href: "/facility#faq" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Reserve a Unit", href: "/facility" },
      { label: "Contact Us", href: "/contact" },
      { label: "Get Directions", href: "/contact#map" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "#", label: "Follow us on Facebook" },
  { platform: "instagram", href: "#", label: "Follow us on Instagram" },
];
