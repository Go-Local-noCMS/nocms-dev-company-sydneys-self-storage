import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage?: string;
  featured?: boolean;
}

interface BlogGridProps {
  posts?: BlogPost[];
  showFeatured?: boolean;
}

const defaultPosts: BlogPost[] = [
  {
    slug: "climate-control-worth-it",
    title: "Is Climate-Controlled Storage Worth the Extra Cost?",
    excerpt: "Your grandmother's oak dresser and your vinyl record collection have something in common: they both hate Kansas summers. Here's when climate control is a must and when you can skip it.",
    date: "2025-04-10",
    category: "Storage Tips",
    featured: true,
  },
  {
    slug: "moving-overland-park",
    title: "The Ultimate Moving Checklist for Overland Park Residents",
    excerpt: "Moving in or around Overland Park? This room-by-room packing guide will save you hours and prevent damage to your most valuable items.",
    date: "2025-03-28",
    category: "Moving Tips",
  },
  {
    slug: "small-business-storage",
    title: "How Local Businesses Use Self Storage to Cut Costs",
    excerpt: "From e-commerce inventory to contractor equipment, small business owners in Johnson County are saving thousands per year with smart storage strategies.",
    date: "2025-03-15",
    category: "Business Storage",
  },
  {
    slug: "seasonal-storage-guide",
    title: "What to Store (and What to Toss) Before Each Season",
    excerpt: "Seasonal swaps done right: a room-by-room guide to rotating your wardrobe, holiday decor, sports gear, and outdoor furniture in and out of storage.",
    date: "2025-03-01",
    category: "Seasonal Storage",
  },
  {
    slug: "organize-storage-unit",
    title: "10 Pro Tips for Organizing Your Storage Unit",
    excerpt: "A well-organized storage unit can save you hours of searching. These 10 techniques from professional organizers will transform your unit into an easy-to-navigate space.",
    date: "2025-02-18",
    category: "Organization",
  },
  {
    slug: "right-size-unit",
    title: "How to Choose the Right Storage Unit Size",
    excerpt: "Renting too small means a second trip. Renting too large means wasted money. This visual guide helps you estimate exactly how much space you really need.",
    date: "2025-02-05",
    category: "Storage Tips",
  },
];

const categories = ["All", "Storage Tips", "Moving Tips", "Business Storage", "Seasonal Storage", "Organization"];

export function BlogGrid({ posts = defaultPosts, showFeatured = true }: BlogGridProps) {
  const featured = showFeatured ? posts.find((p) => p.featured) : null;
  const rest = showFeatured ? posts.filter((p) => !p.featured) : posts;

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <span className="inline-flex items-center bg-accent text-background font-bold px-4 py-1.5 uppercase tracking-wider text-sm mb-6">
              Featured Post
            </span>
            <Link href={`/blog/${featured.slug}`} className="block group">
              <div className="bg-surface border border-primary/20 p-10 md:p-14 hover:border-primary/40 transition-colors shadow-xl shadow-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider border border-primary/30 px-3 py-1">
                    {featured.category}
                  </span>
                  <span className="text-muted text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" aria-hidden="true" />
                    {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-text group-hover:text-primary transition-colors uppercase tracking-wide leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-muted text-lg font-body leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {rest.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group block">
              <article className="bg-background p-8 h-full hover:bg-surface transition-colors border-b-2 border-transparent hover:border-primary">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider border border-primary/30 px-2 py-0.5">
                    {post.category}
                  </span>
                  <span className="text-muted text-xs">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-extrabold text-text group-hover:text-primary transition-colors uppercase tracking-wide leading-tight mb-3">
                  {post.title}
                </h3>
                <p className="text-muted text-sm font-body leading-relaxed mb-6">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
