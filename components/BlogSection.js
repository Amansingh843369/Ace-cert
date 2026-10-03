"use client";

import React from "react";
import { ArrowUpRight, Calendar, User, ArrowRight } from "lucide-react";
import { posts } from "./siteData";

export default function BlogSection() {
  return (
    <section 
      className="py-16 md:py-14 bg-[#f8fafc] font-sans antialiased" 
      aria-labelledby="blog-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Latest News & Insights
            </span>
            
            <h2 
              id="blog-title" 
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-900 leading-tight tracking-tight"
            >
              Explore our latest articles and expert guides
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-900 hover:text-white px-6 py-3.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group shrink-0 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            aria-label="View all blog posts"
          >
            <span>View All Posts</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* --- BLOG CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.id || post.title || index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-500 ease-out group flex flex-col h-full"
            >
              {/* Image Container with Floating Author Badge */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Author Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white/80">
                  <User size={14} className="text-slate-800" />
                  <span className="text-xs font-bold text-slate-900 tracking-tight">
                    {post.author || "By Alex Roy"}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-7 flex flex-col flex-grow bg-white">
                
                {/* Date Row */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-3">
                  <Calendar size={15} className="text-slate-900" />
                  <time dateTime={post.date}>{post.date || "8 December 2024"}</time>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-snug tracking-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Learn More Link */}
                <a
                  href={post.link || "#"}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors duration-200 group/link"
                >
                  <span>LEARN MORE</span>
                  <ArrowUpRight 
                    size={16} 
                    className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" 
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}