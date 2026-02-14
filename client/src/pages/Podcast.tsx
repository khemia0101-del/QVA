/*
 * QVA Holdings — Podcast Listing Page
 * Design: "Institutional Trust" — Navy/Gold palette, DM Serif Display headlines
 * Purpose: Lead generation through audio/transcript content about credit partnerships
 */

import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Headphones, Mic, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { podcastEpisodes, podcastCategories } from "@/lib/podcastData";
import { IMAGES } from "@/lib/images";

export default function Podcast() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEpisodes = activeCategory === "All"
    ? podcastEpisodes
    : podcastEpisodes.filter((e) => e.category === activeCategory);

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
            <Link href="/blog" className="text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase">Blog</Link>
            <Link href="/podcast" className="text-gold text-sm font-medium tracking-wide uppercase">Podcast</Link>
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
              <Mic size={14} className="text-gold" />
              <span className="text-gold text-sm font-medium tracking-wide">The Credit Partnership Playbook</span>
            </div>
            <h1 className="text-4xl lg:text-6xl text-white mb-6">
              The <span className="text-gold italic">Podcast</span>
            </h1>
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Deep dives into credit partnerships, DSCR financing, and strategies to turn your excellent credit score into real income. New episodes weekly.
            </p>
          </motion.div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </section>

      {/* ─── CATEGORY FILTER ─── */}
      <section className="bg-cream-50 border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {podcastCategories.map((cat) => (
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

      {/* ─── LATEST EPISODE (FEATURED) ─── */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-sm text-gold font-semibold tracking-widest uppercase mb-6">Latest Episode</div>
            <Link href={`/podcast/${filteredEpisodes[0]?.slug}`}>
              <div className="group grid lg:grid-cols-5 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg shadow-navy/5 border border-border hover:shadow-xl transition-shadow cursor-pointer">
                <div className="lg:col-span-2 aspect-square lg:aspect-auto overflow-hidden relative">
                  <img
                    src={filteredEpisodes[0]?.coverImage}
                    alt={filteredEpisodes[0]?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-xl">
                      <Headphones size={32} className="text-navy" />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                      EP {filteredEpisodes[0]?.episodeNumber}
                    </span>
                    <span className="bg-navy/5 text-navy/60 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                      {filteredEpisodes[0]?.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock size={12} /> {filteredEpisodes[0]?.duration}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl text-navy mb-4 group-hover:text-gold-dark transition-colors leading-tight font-serif">
                    {filteredEpisodes[0]?.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {filteredEpisodes[0]?.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold-dark font-semibold text-sm">
                    Listen & Read Transcript <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── ALL EPISODES ─── */}
      <section className="pb-16 lg:pb-24">
        <div className="container">
          <div className="space-y-6">
            {filteredEpisodes.slice(1).map((episode, i) => (
              <motion.div
                key={episode.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              >
                <Link href={`/podcast/${episode.slug}`}>
                  <div className="group grid md:grid-cols-4 gap-6 bg-white rounded-xl overflow-hidden shadow-md shadow-navy/5 border border-border hover:shadow-lg transition-all cursor-pointer">
                    <div className="md:col-span-1 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                      <img
                        src={episode.coverImage}
                        alt={episode.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center">
                          <Headphones size={22} className="text-navy" />
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gold/10 text-gold-dark px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                          EP {episode.episodeNumber}
                        </span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock size={12} /> {episode.duration}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {episode.date}
                        </span>
                      </div>
                      <h3 className="text-xl text-navy mb-2 group-hover:text-gold-dark transition-colors font-serif leading-snug">
                        {episode.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {episode.subtitle}
                      </p>
                      <div className="flex items-center gap-2 text-gold-dark font-semibold text-sm mt-4">
                        Listen & Read <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Your Credit Score Is Worth More Than You Think
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            If you have a 740+ credit score, you could earn $10K–$25K through a credit partnership with QVA Holdings. No cash investment. No repayment.
          </p>
          <Link href="/#apply">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-navy font-semibold text-lg px-10 py-6">
              Check Your Eligibility <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
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
