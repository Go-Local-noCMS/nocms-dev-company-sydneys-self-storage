import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = process.env.SITE_URL ?? "https://sydneysselfstorage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/facility", priority: 0.9, freq: "weekly" },
    { path: "/size-guide", priority: 0.8, freq: "monthly" },
    { path: "/storage-in-overland-park", priority: 0.8, freq: "monthly" },
    { path: "/storage-in-kansas", priority: 0.8, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
  ] as const;

  return pages.map(({ path, priority, freq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
