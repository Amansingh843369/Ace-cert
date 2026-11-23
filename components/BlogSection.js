import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogPostGrid from "./BlogPostGrid";
import { posts as fallbackPosts } from "./siteData";
import { sanityClient, sanityConfigured, urlFor } from "../lib/sanity/client";
import { postsQuery } from "../lib/sanity/queries";

export default async function BlogSection({ content = {}, showFilters = false }) {
  let posts = [];

  if (sanityConfigured) {
    try {
      posts = await sanityClient.fetch(postsQuery);
    } catch (error) {
      console.error("Unable to load Sanity blog posts:", error);
    }
  }

  if (!posts.length) {
    posts = fallbackPosts.map((post) => ({
      ...post,
      link: "/blog",
    }));
  }

  const displayPosts = posts.map((post, index) => {
    const imageBuilder = urlFor(post.mainImage);

    return {
      id: post._id || post.id || `${post.title}-${index}`,
      title: post.title,
      slug: post.slug?.current || null,
      category: post.category || "Other",
      excerpt: post.excerpt || "",
      author: post.author || "ACERT Expert",
      publishedAt: post.publishedAt || null,
      date: post.date || "8 December 2024",
      image:
        imageBuilder?.width(900).height(480).url() ||
        post.image ||
        "/about-team-meeting.png",
      imageAlt:
        post.mainImage?.alt || `Cover image for article: ${post.title}`,
      link: post.link || "/blog",
    };
  });

  return (
    <section 
      id={showFilters ? "blog-articles" : undefined}
      className="py-12 md:py-16 bg-slate-50 font-sans antialiased border-t border-slate-200"
      aria-labelledby="blog-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-red-600 font-bold tracking-widest text-xs uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
              {content.eyebrow ?? "Latest News & Insights"}
            </span>
            
            <h2 
              id="blog-title" 
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-900 leading-tight tracking-tight"
            >
              {content.title ?? "Explore our latest articles and expert guides"}
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-900 hover:text-white px-6 py-3.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group shrink-0 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            aria-label="View all ISO certification news and articles"
          >
            <span>{content.buttonLabel ?? "View All Posts"}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <BlogPostGrid posts={displayPosts} showFilters={showFilters} />
      </div>
    </section>
  );
}