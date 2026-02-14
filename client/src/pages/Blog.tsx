/*
 * QVA Holdings — Blog Listing Page
 * Design: "Institutional Trust" — Navy/Gold palette, DM Serif Display headlines
 * Purpose: Lead generation through educational content about credit partnerships
 * SEO: Optimized for LLM discovery (ChatGPT, Gemini, Claude)
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts, blogCategories } from "@/lib/blogData";
import { IMAGES } from "@/lib/images";
import EmailSignup from "@/components/EmailSignup";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "QVA Holdings Blog — Credit Partnership & DSCR Financing Articles";
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", "Read expert articles on credit partnerships, DSCR loans, and how to leverage your credit score for passive income. Educational blog by QVA Holdings with strategies for real estate financing.");
    }
  }, []);

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src={IMAGES.shieldIcon} alt="QVA Holdings" className="w-9 h-9 lg:w-11 lg:h-11" />
            <span className="text-white font-serif text-lg lg:text-xl tracking-wide">QVA Holdings</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase">Home</Link>
            <Link href="/blog" className="text-gold text-sm font-medium tracking-wide uppercase">Blog</Link>
            <Link href="/podcast" className="text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase">Podcast</Link>
            <Link href="/#apply">
              <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 tracking-wide">Apply Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative pt-20 bg-navy">
        <div className="container py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <BookOpen size={14} className="text-gold" />
              <span className="text-gold text-sm font-medium tracking-wide">QVA Holdings Blog</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              Learn How to <span className="text-gold italic">Leverage</span> Your Credit
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Expert insights on credit partnerships, DSCR financing, and strategies to turn your excellent credit score into real income.
            </p>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ─── CATEGORY FILTER ─── */}
      <section className="bg-cream-50 border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-white text-navy/60 hover:bg-navy/5 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED POST ─── */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href={`/blog/${filteredPosts[0]?.slug}`}>
              <div className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg shadow-navy/5 border border-border hover:shadow-xl transition-shadow cursor-pointer">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={filteredPosts[0]?.heroImage}
                    alt={filteredPosts[0]?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                      {filteredPosts[0]?.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock size={12} /> {filteredPosts[0]?.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-navy mb-4 group-hover:text-gold-dark transition-colors leading-tight">
                    {filteredPosts[0]?.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {filteredPosts[0]?.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-gold-dark font-semibold text-sm">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── POST GRID ─── */}
      <section className="pb-16 lg:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {/* Email Signup Sidebar */}
            <div className="lg:col-start-3 lg:row-start-1 h-fit sticky top-32">
              <EmailSignup source="blog" title="Get Blog Updates" description="Subscribe to receive new articles on credit partnerships and real estate financing." />
            </div>
            
            {/* Blog Posts Grid */}
            <div className="md:col-span-2 lg:col-span-2">
            {filteredPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-md shadow-navy/5 border border-border hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg text-navy mb-3 group-hover:text-gold-dark transition-colors leading-snug font-serif">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {post.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-gold-dark font-semibold text-sm mt-4">
                        Read More <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Ready to Put Your Credit Score to Work?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            If you have a 740+ credit score, you could earn $15K–$100K through a credit partnership with QVA Holdings. No cash investment. No repayment.
          </p>
          <Link href="/#apply">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold text-lg px-10 py-6">
              Apply Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* ─── CALENDLY BOOKING ─── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl text-navy mb-4 font-serif">Schedule a Consultation</h2>
            <p className="text-muted-foreground text-lg">Ready to discuss your credit partnership opportunity? Book a call with our team.</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <iframe
                src="https://calendly.com/qvaholdings/consultation"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a consultation with QVA Holdings"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy-dark py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={IMAGES.shieldIcon} alt="QVA Holdings" className="w-8 h-8" />
              <span className="text-white/50 font-serif">QVA Holdings</span>
            </div>
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} QVA Holdings. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
