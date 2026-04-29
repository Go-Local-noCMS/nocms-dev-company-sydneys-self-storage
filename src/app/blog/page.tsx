import { BlogGrid } from "@/components/BlogGrid";
import { StorageCTABanner } from "@/components/StorageCTABanner";
import Link from "next/link";

const categories = [
  { label: "All Posts", href: "/blog", count: 12 },
  { label: "Moving Tips", href: "/blog?cat=moving-tips", count: 4 },
  { label: "Organization", href: "/blog?cat=organization", count: 3 },
  { label: "Seasonal Storage", href: "/blog?cat=seasonal-storage", count: 2 },
  { label: "Business Storage", href: "/blog?cat=business-storage", count: 2 },
  { label: "Storage Tips", href: "/blog?cat=storage-tips", count: 3 },
];

const recentPosts = [
  { title: "Is Climate-Controlled Storage Worth It?", date: "Apr 10, 2025", href: "/blog/climate-control-worth-it" },
  { title: "The Ultimate Overland Park Moving Checklist", date: "Mar 28, 2025", href: "/blog/moving-overland-park" },
  { title: "How Small Businesses Save with Storage", date: "Mar 15, 2025", href: "/blog/small-business-storage" },
  { title: "Seasonal Swaps: What to Store Each Season", date: "Mar 1, 2025", href: "/blog/seasonal-storage-guide" },
  { title: "10 Pro Tips for Organizing Your Unit", date: "Feb 18, 2025", href: "/blog/organize-storage-unit" },
];

export default function BlogPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-surface pt-20 pb-12 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-4">
            Storage Tips &amp; Blog
          </span>
          <h1
            className="font-heading text-6xl md:text-8xl font-extrabold text-primary uppercase tracking-wide leading-[0.85] mb-4"
            style={{ textShadow: "0 0 40px rgba(224,32,112,0.4)" }}
          >
            Moving &amp;<br />
            <span className="text-text">Storage Tips</span>
          </h1>
          <p className="text-muted text-xl font-body leading-relaxed max-w-2xl">
            Expert advice on moving, packing, organizing, and making the most of your storage unit — from the team at Sydney's.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <BlogGrid showFeatured={true} />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            {/* Categories */}
            <div className="bg-surface border border-white/5 p-6 mb-6">
              <h2 className="font-heading text-sm font-extrabold text-text uppercase tracking-widest mb-4">
                Categories
              </h2>
              <ul className="space-y-0 border-t border-white/10">
                {categories.map((cat, i) => (
                  <li key={i} className="border-b border-white/10">
                    <Link
                      href={cat.href}
                      className="flex items-center justify-between py-3 text-muted hover:text-primary transition-colors text-sm font-body"
                    >
                      <span>{cat.label}</span>
                      <span className="text-xs border border-white/10 px-2 py-0.5">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-surface border border-white/5 p-6 mb-6">
              <h2 className="font-heading text-sm font-extrabold text-text uppercase tracking-widest mb-4">
                Recent Posts
              </h2>
              <ul className="space-y-4">
                {recentPosts.map((post, i) => (
                  <li key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <Link href={post.href} className="group">
                      <div className="text-sm font-body font-bold text-text group-hover:text-primary transition-colors leading-tight mb-1">
                        {post.title}
                      </div>
                      <div className="text-xs text-muted">{post.date}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Widget */}
            <div className="bg-primary p-6">
              <h2 className="font-heading text-lg font-extrabold text-white uppercase tracking-wide mb-2">
                Need a Unit?
              </h2>
              <p className="text-white/80 text-sm font-body mb-4">Browse available sizes and reserve online in 2 minutes.</p>
              <Link
                href="/facility"
                className="bg-white text-primary font-bold px-5 py-3 uppercase tracking-widest text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform inline-block w-full text-center"
              >
                View Units
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <StorageCTABanner
        heading="Found What You Need?"
        subheading="Reserve your climate-controlled unit today. No credit card required."
        primaryLabel="Reserve a Unit"
        primaryHref="/facility"
      />
    </main>
  );
}
