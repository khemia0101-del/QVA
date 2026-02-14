/*
 * QVA Holdings — Blog Article Detail Page
 * Design: "Institutional Trust" — Navy/Gold palette, editorial reading experience
 * Purpose: Lead generation through in-depth educational content
 */

import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blogData";
import { IMAGES } from "@/lib/images";
import { useEffect } from "react";
import { updateMetaTags, generateArticleSchema, generateBreadcrumbSchema, formatDateISO, cleanupSchemas } from "@/lib/seo";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  // SEO: Update meta tags and schema when post loads
  useEffect(() => {
    if (!post) return;

    const url = `https://qvaholdings.com/blog/${post.slug}`;

    // Update meta tags
    updateMetaTags({
      title: `${post.title} | QVA Holdings Blog`,
      description: post.metaDescription,
      canonical: url,
      ogImage: post.heroImage,
      ogType: "article",
      keywords: [
        "credit partnership",
        "DSCR loan",
        "real estate financing",
        "credit score monetization",
        post.category.toLowerCase(),
      ],
      author: "QVA Holdings",
      publishedTime: formatDateISO(post.date),
    });

    // Generate Article schema
    generateArticleSchema({
      title: post.title,
      description: post.metaDescription,
      image: post.heroImage,
      datePublished: formatDateISO(post.date),
      url,
    });

    // Generate breadcrumb schema
    generateBreadcrumbSchema([
      { name: "Home", url: "https://qvaholdings.com" },
      { name: "Blog", url: "https://qvaholdings.com/blog" },
      { name: post.title, url },
    ]);

    // Cleanup on unmount
    return () => {
      cleanupSchemas(["article-schema", "breadcrumb-schema"]);
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl text-navy mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button className="bg-gold hover:bg-gold-dark text-navy">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

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

      {/* ─── ARTICLE HERO ─── */}
      <section className="pt-20 bg-navy">
        <div className="container py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                {post.category}
              </span>
              <span className="text-white/40 text-sm flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </span>
              <span className="text-white/40 text-sm flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-white leading-tight mb-6 max-w-4xl">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg lg:text-xl max-w-3xl leading-relaxed">
              {post.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── HERO IMAGE ─── */}
      <div className="container -mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 aspect-[21/9]"
        >
          <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* ─── ARTICLE CONTENT ─── */}
      <article className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl lg:text-3xl text-navy mt-12 mb-6 font-serif">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-foreground/80 leading-relaxed mb-6 text-[17px]"
                  dangerouslySetInnerHTML={{
                    __html: block
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy font-semibold">$1</strong>')
                  }}
                />
              );
            })}
          </motion.div>

          {/* ─── IN-ARTICLE CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-navy rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl lg:text-3xl text-white mb-4 font-serif">
              {post.cta.headline}
            </h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              {post.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#apply">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                  Apply Now <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/#video">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6 w-full sm:w-auto">
                  Watch Explainer Video
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* ─── RELATED ARTICLES ─── */}
      <section className="py-12 lg:py-16 bg-cream-50 border-t border-border">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl text-navy mb-8 font-serif">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all cursor-pointer">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={related.heroImage}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                      {related.category}
                    </span>
                    <h3 className="text-lg text-navy mt-3 group-hover:text-gold-dark transition-colors font-serif leading-snug">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
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
