/*
 * QVA Holdings — Podcast Episode Detail Page
 * Design: "Institutional Trust" — Navy/Gold palette, editorial reading experience
 * Purpose: Lead generation through podcast transcript and episode content
 */

import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Calendar, Headphones, ListMusic, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { podcastEpisodes } from "@/lib/podcastData";
import { IMAGES } from "@/lib/images";
import { updateMetaTags, generatePodcastEpisodeSchema, generateBreadcrumbSchema, formatDateISO, formatDurationISO, cleanupSchemas } from "@/lib/seo";

export default function PodcastEpisode() {
  const params = useParams<{ slug: string }>();
  const episode = podcastEpisodes.find((e) => e.slug === params.slug);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl text-navy mb-4">Episode Not Found</h1>
          <Link href="/podcast">
            <Button className="bg-gold hover:bg-gold-dark text-navy">Back to Podcast</Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherEpisodes = podcastEpisodes.filter((e) => e.slug !== episode.slug);

  // SEO: Update meta tags and schema when episode loads
  useEffect(() => {
    if (!episode) return;

    const url = `https://qvaholdings.com/podcast/${episode.slug}`;

    // Update meta tags
    updateMetaTags({
      title: `${episode.title} | The Credit Partnership Playbook Podcast`,
      description: episode.description,
      canonical: url,
      ogImage: episode.coverImage,
      ogType: "music.song",
      keywords: [
        "credit partnership podcast",
        "DSCR financing",
        "real estate podcast",
        "credit score strategies",
        episode.category.toLowerCase(),
      ],
      author: "QVA Holdings",
      publishedTime: formatDateISO(episode.date),
    });

    // Generate PodcastEpisode schema
    generatePodcastEpisodeSchema({
      title: episode.title,
      description: episode.description,
      datePublished: formatDateISO(episode.date),
      duration: formatDurationISO(episode.duration),
      audioUrl: episode.audioUrl,
      image: episode.coverImage,
      episodeNumber: episode.episodeNumber,
      url,
    });

    // Generate breadcrumb schema
    generateBreadcrumbSchema([
      { name: "Home", url: "https://qvaholdings.com" },
      { name: "Podcast", url: "https://qvaholdings.com/podcast" },
      { name: episode.title, url },
    ]);

    // Cleanup on unmount
    return () => {
      cleanupSchemas(["podcast-episode-schema", "breadcrumb-schema"]);
    };
  }, [episode]);

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

      {/* ─── EPISODE HERO ─── */}
      <section className="pt-20 bg-navy">
        <div className="container py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/podcast" className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm mb-8">
              <ArrowLeft size={16} /> Back to Podcast
            </Link>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                  <img src={episode.coverImage} alt={episode.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/50 transition-all flex items-center justify-center">
                    <button
                      onClick={togglePlayPause}
                      className="w-28 h-28 rounded-full bg-gold hover:bg-gold-dark transition-all transform hover:scale-110 flex items-center justify-center shadow-2xl"
                    >
                      {isPlaying ? (
                        <Pause size={56} className="text-navy fill-navy" />
                      ) : (
                        <Play size={56} className="text-navy fill-navy ml-1" />
                      )}
                    </button>
                  </div>
                </div>
                <audio 
                  ref={audioRef} 
                  src={episode.audioUrl} 
                  onEnded={() => setIsPlaying(false)}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />
              </div>

              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                    Episode {episode.episodeNumber}
                  </span>
                  <span className="bg-white/10 text-white/60 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                    {episode.category}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl text-white leading-tight mb-4">
                  {episode.title}
                </h1>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  {episode.subtitle}
                </p>
                <div className="flex items-center gap-6 text-white/40 text-sm mb-6">
                  <span className="flex items-center gap-2"><Clock size={16} /> {episode.duration}</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> {episode.date}</span>
                </div>

                {/* Audio Player Controls */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-gold/30">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={togglePlayPause}
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gold hover:bg-gold-dark transition-all flex items-center justify-center"
                    >
                      {isPlaying ? (
                        <Pause size={24} className="text-navy fill-navy" />
                      ) : (
                        <Play size={24} className="text-navy fill-navy ml-0.5" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="text-white/60 text-xs font-medium mb-2">Now Playing</div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={duration ? (currentTime / duration) * 100 : 0}
                        onChange={handleSeek}
                        className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-gold"
                      />
                      <div className="flex justify-between text-white/40 text-xs mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── EPISODE CONTENT ─── */}
      <div className="py-12 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Episode description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl text-navy mb-4 font-serif">About This Episode</h2>
                <p className="text-foreground/80 text-[17px] leading-relaxed">
                  {episode.description}
                </p>
              </motion.div>

              {/* Timestamps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl text-navy mb-6 font-serif flex items-center gap-3">
                  <ListMusic size={24} className="text-gold" /> Episode Timestamps
                </h2>
                <div className="bg-cream-50 rounded-xl border border-border overflow-hidden">
                  {episode.timestamps.map((ts, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 px-6 py-4 ${
                        i !== episode.timestamps.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-gold font-mono text-sm font-semibold min-w-[50px]">
                        {ts.time}
                      </span>
                      <span className="text-foreground/80 text-sm">
                        {ts.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Transcript */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl text-navy mb-6 font-serif">Full Transcript</h2>
                <div className="space-y-1">
                  {episode.transcript.map((block, i) => {
                    if (block.startsWith("## ")) {
                      return (
                        <h3 key={i} className="text-xl lg:text-2xl text-navy mt-10 mb-4 font-serif">
                          {block.replace("## ", "")}
                        </h3>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className="text-foreground/80 leading-relaxed mb-5 text-[17px]"
                        dangerouslySetInnerHTML={{
                          __html: block
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-navy font-semibold">$1</strong>')
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>

              {/* ─── IN-EPISODE CTA ─── */}
              <div className="mt-16 bg-navy rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl text-white mb-4 font-serif">
                  {episode.cta.headline}
                </h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  {episode.cta.text}
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
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                {/* Apply CTA Card */}
                <div className="bg-navy rounded-xl p-6 mb-8">
                  <h3 className="text-white font-serif text-lg mb-3">Earn $15K–$100K</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">
                    Your 740+ credit score could earn you a lump-sum payout. No cash investment required.
                  </p>
                  <Link href="/#apply">
                    <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold w-full">
                      Check Eligibility
                    </Button>
                  </Link>
                </div>

                {/* Other Episodes */}
                <div>
                  <h3 className="text-navy font-serif text-lg mb-4">More Episodes</h3>
                  <div className="space-y-4">
                    {otherEpisodes.map((ep) => (
                      <Link key={ep.slug} href={`/podcast/${ep.slug}`}>
                        <div className="group bg-white rounded-lg border border-border p-4 hover:shadow-md transition-all cursor-pointer mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-gold/10 text-gold-dark px-2 py-0.5 rounded text-xs font-semibold">
                              EP {ep.episodeNumber}
                            </span>
                            <span className="text-muted-foreground text-xs">{ep.duration}</span>
                          </div>
                          <h4 className="text-sm text-navy group-hover:text-gold-dark transition-colors font-medium leading-snug">
                            {ep.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
