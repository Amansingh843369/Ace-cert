"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronDown, Search, User } from "lucide-react";

export default function BlogPostGrid({ posts, showFilters = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = useMemo(
    () => [...new Set(posts.map((post) => post.category).filter(Boolean))].sort(),
    [posts],
  );
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const searchableText = [
        post.title,
        post.excerpt,
        post.author,
        post.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase();

      return matchesCategory && (!query || searchableText.includes(query));
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <>
      {showFilters && (
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_240px] sm:gap-4">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search articles..."
              className="min-h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-100"
            />
          </label>

          <label className="relative block">
            <span className="sr-only">Filter articles by category</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="min-h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-11 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-100"
            >
              <option value="all">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            />
          </label>
        </div>
      )}

      {showFilters && (
        <p className="mb-5 text-sm text-slate-500" role="status" aria-live="polite">
          Showing {filteredPosts.length} of {posts.length} articles
        </p>
      )}

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/95 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                  <User
                    size={14}
                    className="text-red-600"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold tracking-tight text-slate-900">
                    {post.author}
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col bg-white p-7">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  <Calendar
                    size={15}
                    className="text-red-600"
                    aria-hidden="true"
                  />
                  <time dateTime={post.publishedAt || post.date}>
                    {post.publishedAt
                      ? new Intl.DateTimeFormat("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }).format(new Date(post.publishedAt))
                      : post.date}
                  </time>
                </div>

                <h3 className="mb-6 line-clamp-2 text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-red-600">
                  {post.title}
                </h3>

                <Link
                  href={post.slug ? `/blog/${post.slug}` : post.link}
                  className="group/link mt-auto inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 transition-colors duration-200 hover:text-red-600 focus:outline-none focus:text-red-600"
                  aria-label={`Read full article: ${post.title}`}
                >
                  <span>Learn More</span>
                  <ArrowUpRight
                    size={16}
                    className="transform transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center text-slate-600">
          No articles match your search. Try a different keyword or category.
        </p>
      )}
    </>
  );
}
