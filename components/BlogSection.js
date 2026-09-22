"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "./siteData";

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 font-sans" aria-labelledby="blog-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 block">
             Latest News & Compliance Trends
            </span>
            <h2 id="blog-title" className="text-3xl sm:text-4xl lg:text-2xl font-extrabold text-slate-900 leading-tight">
               
Explore our latest articles, company announcements, and expert guides designed to help your organization achieve operational excellence
            </h2>

          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 bg-white hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-600 shadow-sm transition-all duration-300 group shrink-0"
          >
            <span>View All Posts</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- BLOG CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((post, index) => (
            <article
              key={post.title || index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-slate-100 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-56 sm:h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs text-blue-600 mb-4 font-bold uppercase tracking-wider">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
                    {post.category || "Blog"}
                  </span>
                  <span className="text-slate-300" aria-hidden="true">•</span>
                  <span className="text-slate-500 font-medium flex items-center gap-1.5 lowercase">
                    <Calendar size={14} className="text-slate-400" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt / Description (If available in siteData) */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify line-clamp-3 flex-grow">
                  {post.excerpt || post.description || "Stay updated with our latest industry insights, expert analyses, and practical tips designed to empower your business."}
                </p>

                {/* Read More Link */}
                <a
                  href={post.link || "#"}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-blue-600 group-hover:gap-3 transition-all mt-auto"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} className="text-blue-600" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}