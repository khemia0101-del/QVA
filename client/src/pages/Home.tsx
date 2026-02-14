/*
 * QVA Holdings — Real Estate Credit Partnership Landing Page
 * Design: "Institutional Trust" — Corporate Finance Aesthetic
 * Colors: Deep Navy (#1a2744) + Warm Gold (#c9a84c) + Cream backgrounds
 * Typography: DM Serif Display (headlines) + DM Sans (body)
 * Layout: Full-width hero → asymmetric alternating sections → editorial flow
 */

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  Building2,
  DollarSign,
  FileCheck,
  Users,
  ChevronRight,
  Play,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";

// CDN URLs for property images
const IMAGES = {
  commercial: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/zHWYndfpYaGZIlnh.jpeg",
  estate: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/MWGbLgbafGGOiUGf.jpeg",
  suburban: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/MHOXjyAOahNvADdz.jpeg",
  oceanDeck: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/uZFAJQlmGNeUZPLq.jpeg",
  oceanInterior: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/KSrbMJykhDieyPtR.jpeg",
  deckProperty: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/GQKFoSFocaxrolyl.png",
  heroBg: "https://private-us-east-1.manuscdn.com/sessionFile/5Ukj9gScCxCXkafH3qnvhg/sandbox/nSDk7ELgRWe4F06lydSWiG-img-1_1771074756000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVVrajlnU2NDeENYa2FmSDNxbnZoZy9zYW5kYm94L25TRGs3RUxnUldlNEYwNmx5ZFNXaUctaW1nLTFfMTc3MTA3NDc1NjAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ePlApo2LuZt0ZyBuxa8mhS0M3lq-0f0MA3wYDRyDfKPqboFIGVlq1TyOdd5hiUn7u3nFUqD5ljvyyBLd3rLU64--yaZq-k9XJE1PxyhEgF4SNuBYXSuTCe8gVeOP7SCPQaMLJcHCl4QyjrBHjewuby4~vB~-YGKh98wU0vVwJg6hCem7ZXz8y~T-rx5DqgfkKGxXxHvCOY5VsELjZiMnMVTBFrAmqCGmOiC8wm0g3UuTxH64gjDQZnDzoO3PPaPcjpBRgBLIKbpK1t6lEhwDP1RoIziiMpTcmnixIdpu7VICcxSIVhs~1nuG~~vJMV0wT2LotMpN62QD1uk4TnWYOQ__",
  ctaBg: "https://private-us-east-1.manuscdn.com/sessionFile/5Ukj9gScCxCXkafH3qnvhg/sandbox/nSDk7ELgRWe4F06lydSWiG-img-4_1771074747000_na1fn_Y3RhLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVVrajlnU2NDeENYa2FmSDNxbnZoZy9zYW5kYm94L25TRGs3RUxnUldlNEYwNmx5ZFNXaUctaW1nLTRfMTc3MTA3NDc0NzAwMF9uYTFmbl9ZM1JoTFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NczQFadePfHQIWrDNKJEGbi7LvYfnu5-k1A1v2hRzemgRjFCNGyLuxecrSnkkmVrmBUhQxH39whk51UCuIdwe-UgoD2a3wFNzzxfF4JeU66VQ5Sm0WgOK90ruMWKhP7K84L3ISOizYZVb2DdKQUqH2-e3pX5ifGcWacpejo7cQaGXVHGbB2OMWUdS2jwXMvIr60vobZ4~WRE4P9DxEq9C8REakg~dalCcFr~h0FM1udJkLwXf19bUx~Whu3afce2CXp4BCax3kbsWeD2voYM27eelM6PGHfQ~212vWcTU02Dgy58qj4ptMvqttGn5N0~QOAKdrxZWqE01vw25hYdJQ__",
  shieldIcon: "https://private-us-east-1.manuscdn.com/sessionFile/5Ukj9gScCxCXkafH3qnvhg/sandbox/nSDk7ELgRWe4F06lydSWiG_1771074759694_na1fn_c2hpZWxkLWljb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNVVrajlnU2NDeENYa2FmSDNxbnZoZy9zYW5kYm94L25TRGs3RUxnUldlNEYwNmx5ZFNXaUdfMTc3MTA3NDc1OTY5NF9uYTFmbl9jMmhwWld4a0xXbGpiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=C-p6PNxMOgEKoa1Ips1MWovY-qTBvmhVVqo5-ks52qPLEVZJtiOduKpbpd8YV7Izd557GG66dNBkFg0QChq9epx8kJeIWOBwG2QBYml2aGPsx~mYZZ7elCWdVRogCTdP0ljS2cdgocdusm2u-GB9KcilAEh943dJAU5IHU720Ct40ZK-lmFYML6sWDoM5FF-j14N1F8nGK6pmLoF9zoiIOV2mgh1oqMo2qIBJzLzmYQAPBPyaIgj9KW9Zt16HtTopux8be~JEe1svYegH7WU0PXnzn5zY-yqDI8DYWbTk1p4PW7i7A1HA4pfMLtZaMQQ4ZnQS0oJ9nV-67sO0GFwRA__",
};

// Animated section wrapper
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Counter animation for stats
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-serif tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    creditScore: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── NAVIGATION ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <img src={IMAGES.shieldIcon} alt="QVA Holdings" className="w-9 h-9 lg:w-11 lg:h-11" />
            <div>
              <span className="text-white font-serif text-lg lg:text-xl tracking-wide">QVA Holdings</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "How It Works", id: "how-it-works" },
              { label: "Portfolio", id: "portfolio" },
              { label: "Protection", id: "protection" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
            <Link href="/blog" className="text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase">Blog</Link>
            <Link href="/podcast" className="text-white/70 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase">Podcast</Link>
            <Button
              onClick={() => scrollToSection("apply")}
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-6 tracking-wide"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-navy border-t border-white/10"
          >
            <div className="container py-4 flex flex-col gap-3">
              {[
                { label: "How It Works", id: "how-it-works" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Protection", id: "protection" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/70 hover:text-gold transition-colors text-left py-2 text-sm font-medium tracking-wide uppercase"
                >
                  {item.label}
                </button>
              ))}
              <Link href="/blog" className="text-white/70 hover:text-gold transition-colors text-left py-2 text-sm font-medium tracking-wide uppercase block">Blog</Link>
              <Link href="/podcast" className="text-white/70 hover:text-gold transition-colors text-left py-2 text-sm font-medium tracking-wide uppercase block">Podcast</Link>
              <Button
                onClick={() => scrollToSection("apply")}
                className="bg-gold hover:bg-gold-dark text-navy font-semibold mt-2"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        </div>

        <div className="relative container py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-sm font-medium tracking-wide">Now Accepting Credit Partners</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6"
            >
              Turn Your Credit Score Into{" "}
              <span className="gold-gradient-text">$15K–$100K</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              Partner your excellent credit with our real estate portfolio. Earn a lump-sum payout with non-recourse protection — no cash investment, no repayment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection("apply")}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-lg px-8 py-6 tracking-wide"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection("video")}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6"
              >
                <Play className="mr-2" size={20} /> Watch Explainer
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="relative -mt-16 z-10">
        <div className="container">
          <div className="bg-white rounded-xl shadow-2xl shadow-navy/10 border border-border p-8 lg:p-10">
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {[
                { value: 100, prefix: "$", suffix: "K+", label: "Maximum Payout" },
                { value: 740, prefix: "", suffix: "+", label: "Minimum Credit Score" },
                { value: 100, prefix: "", suffix: "%", label: "Non-Recourse Protection" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl lg:text-4xl text-navy font-serif mb-2">
                    <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-24 lg:py-32">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">The Process</span>
              <h2 className="text-3xl lg:text-5xl text-navy mb-6">How the Partnership Works</h2>
              <div className="gold-rule w-24 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                A transparent, five-step process designed to protect your interests while maximizing your payout.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {[
              {
                step: 1,
                icon: Building2,
                title: "We Own the Asset",
                desc: "Our LLC holds income-producing real estate properties — the foundation of every partnership.",
              },
              {
                step: 2,
                icon: FileCheck,
                title: "We Refinance (DSCR)",
                desc: "We initiate a DSCR loan qualified by the property's cash flow, not your personal income.",
              },
              {
                step: 3,
                icon: Users,
                title: "You Co-Sign",
                desc: "Your excellent credit helps secure better loan terms. The loan is held in a separate LLC.",
              },
              {
                step: 4,
                icon: Shield,
                title: "Better Terms = Savings",
                desc: "Your credit score unlocks lower interest rates, generating significant savings on the loan.",
              },
              {
                step: 5,
                icon: DollarSign,
                title: "We Share Savings",
                desc: "You receive $15K–$100K as a lump-sum payout at closing. Guaranteed in writing.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative group">
                  {/* Connector line */}
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-gold/40 to-gold/10 z-0" />
                  )}

                  <div className="relative bg-white border border-border rounded-xl p-6 lg:p-5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-serif text-lg shrink-0">
                        {item.step}
                      </div>
                      <item.icon className="text-gold" size={22} />
                    </div>
                    <h3 className="text-navy text-lg font-serif mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO SECTION ─── */}
      <section id="portfolio" className="py-24 lg:py-32 bg-navy">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Our Assets</span>
              <h2 className="text-3xl lg:text-5xl text-white mb-6">Real Properties. Real Value.</h2>
              <div className="gold-rule w-24 mx-auto mb-6" />
              <p className="text-white/60 text-lg leading-relaxed">
                Every partnership is backed by tangible, income-producing real estate. These are actual properties in our portfolio.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: IMAGES.oceanDeck, label: "Luxury Coastal Property", type: "Oceanfront" },
              { src: IMAGES.estate, label: "Executive Estate", type: "Residential" },
              { src: IMAGES.commercial, label: "Multi-Unit Commercial", type: "Commercial" },
              { src: IMAGES.oceanInterior, label: "Oceanview Residence", type: "Oceanfront" },
              { src: IMAGES.suburban, label: "Suburban Investment Home", type: "Residential" },
              { src: IMAGES.deckProperty, label: "Income Property", type: "Residential" },
            ].map((property, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img
                    src={property.src}
                    alt={property.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-gold text-xs font-medium tracking-widest uppercase">{property.type}</span>
                    <h3 className="text-white font-serif text-lg mt-1">{property.label}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROTECTION SECTION ─── */}
      <section id="protection" className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Your Protection</span>
                <h2 className="text-3xl lg:text-5xl text-navy mb-6">Multiple Layers of Security</h2>
                <div className="gold-rule w-24 mb-8" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  Our partnership is engineered with multiple layers of protection. We use Non-Recourse DSCR loans held within a separate LLC, meaning your home, car, and savings are legally firewalled from the deal.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Non-Recourse Protection",
                      desc: "The lender can only seize the property in a default — never your personal assets.",
                    },
                    {
                      title: "Separate LLC Structure",
                      desc: "The loan and property are held in a corporate entity, creating a legal firewall.",
                    },
                    {
                      title: "DSCR Loan Qualification",
                      desc: "The loan qualifies on the property's cash flow, not your personal income.",
                    },
                    {
                      title: "Formal Legal Agreement",
                      desc: "Your payout is guaranteed in writing and delivered at closing.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-gold shrink-0 mt-1" size={22} />
                      <div>
                        <h4 className="text-navy font-semibold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/10 rounded-2xl -rotate-2" />
                <img
                  src={IMAGES.oceanDeck}
                  alt="Protected luxury asset"
                  className="relative rounded-xl shadow-2xl shadow-navy/20 w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-border">
                  <div className="flex items-center gap-3">
                    <img src={IMAGES.shieldIcon} alt="" className="w-12 h-12" />
                    <div>
                      <div className="text-navy font-serif text-lg">100%</div>
                      <div className="text-muted-foreground text-xs font-medium tracking-wide uppercase">Asset Protected</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── VIDEO SECTION ─── */}
      <section id="video" className="py-24 lg:py-32 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Learn More</span>
              <h2 className="text-3xl lg:text-5xl text-navy mb-6">Watch the Full Explainer</h2>
              <div className="gold-rule w-24 mx-auto mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get a detailed walkthrough of the partnership process, protections, and how your payout is calculated.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-navy/20 aspect-video bg-navy">
                {showVideo ? (
                  <iframe
                    src="https://www.youtube.com/embed/Ph4yth-AjzM?autoplay=1"
                    title="QVA Holdings Explainer Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="w-full h-full relative group"
                  >
                    <img
                      src={IMAGES.heroBg}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors group-hover:scale-110 duration-300">
                        <Play className="text-navy ml-1" size={32} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-left">
                      <div className="text-white font-serif text-xl">The $100K Credit Unlock</div>
                      <div className="text-white/60 text-sm">Turn Your Score into Cash — 6 min</div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── QUALIFICATIONS ─── */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <img src={IMAGES.estate} alt="Property" className="rounded-xl shadow-lg w-full aspect-square object-cover" />
                <img src={IMAGES.commercial} alt="Property" className="rounded-xl shadow-lg w-full aspect-square object-cover mt-8" />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Requirements</span>
                <h2 className="text-3xl lg:text-5xl text-navy mb-6">Do You Qualify?</h2>
                <div className="gold-rule w-24 mb-8" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  We're looking for credit partners who meet the following criteria. If you qualify, you could earn a significant payout with minimal effort.
                </p>

                <div className="space-y-5">
                  {[
                    "Credit score of 740 or higher",
                    "Clean credit history with no recent derogatory marks",
                    "Willingness to co-sign on a DSCR loan (non-recourse)",
                    "U.S. resident with valid identification",
                    "No upfront cash investment required",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                        <ChevronRight className="text-gold" size={14} />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => scrollToSection("apply")}
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-semibold mt-10 px-8"
                >
                  Check Your Eligibility <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ─── */}
      <section
        id="apply"
        className="py-24 lg:py-32 relative"
      >
        <div className="absolute inset-0">
          <img src={IMAGES.ctaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>

        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Get Started</span>
                <h2 className="text-3xl lg:text-5xl text-white mb-6">Apply for the Credit Partnership</h2>
                <div className="gold-rule w-24 mb-8" />
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Submit your information below and our team will reach out within 24 hours to discuss the partnership opportunity and answer any questions.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: DollarSign, text: "Earn $15,000–$100,000 lump sum" },
                    { icon: Shield, text: "Non-recourse protection on all deals" },
                    { icon: FileCheck, text: "Formal legal agreement provided" },
                    { icon: Building2, text: "Backed by real, income-producing assets" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                        <item.icon className="text-gold" size={20} />
                      </div>
                      <span className="text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-navy text-2xl font-serif mb-3">Application Received</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for your interest. Our team will review your information and contact you within 24 hours to discuss the partnership opportunity.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="text-center mb-6">
                      <h3 className="text-navy text-2xl font-serif mb-2">Start Your Application</h3>
                      <p className="text-muted-foreground text-sm">Fill out the form below to get started</p>
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-navy font-medium mb-1.5 block">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-border focus:border-gold focus:ring-gold/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-navy font-medium mb-1.5 block">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-border focus:border-gold focus:ring-gold/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-navy font-medium mb-1.5 block">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-border focus:border-gold focus:ring-gold/20"
                      />
                    </div>

                    <div>
                      <Label htmlFor="credit" className="text-navy font-medium mb-1.5 block">Estimated Credit Score</Label>
                      <Input
                        id="credit"
                        type="text"
                        required
                        placeholder="e.g. 760"
                        value={formData.creditScore}
                        onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
                        className="h-12 border-border focus:border-gold focus:ring-gold/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold h-12 text-base tracking-wide"
                    >
                      Submit Application <ArrowRight className="ml-2" size={18} />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      By submitting, you agree to be contacted about the credit partnership program. Your information is kept confidential.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">Common Questions</span>
              <h2 className="text-3xl lg:text-5xl text-navy mb-6">Frequently Asked Questions</h2>
              <div className="gold-rule w-24 mx-auto" />
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is this a loan I have to repay?",
                a: "No. The payout you receive is a profit share from the savings generated by your credit partnership. It is not a loan and does not require repayment.",
              },
              {
                q: "What happens if the property defaults?",
                a: "All our loans include non-recourse protection. This means the lender can only seize the property itself — they are legally prohibited from pursuing your personal assets, including your home, car, or savings.",
              },
              {
                q: "Will this appear on my credit report?",
                a: "The loan is held within a separate LLC or Trust entity. This corporate structure means the loan does not appear as a direct personal liability on your credit report.",
              },
              {
                q: "How much can I earn?",
                a: "Payouts range from $15,000 to $100,000+ depending on the property value, loan terms, and the savings your credit score helps generate. Your exact payout is guaranteed in writing before you commit.",
              },
              {
                q: "What credit score do I need?",
                a: "We require a minimum credit score of 740. Higher scores typically unlock better loan terms and larger payouts.",
              },
              {
                q: "When do I get paid?",
                a: "Your payout is delivered as a lump sum at the closing of the real estate deal. The timeline is typically 30–60 days from partnership agreement.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="group bg-white rounded-xl border border-border overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-navy font-semibold pr-4">{item.q}</span>
                    <ChevronRight className="text-gold shrink-0 transition-transform duration-200 group-open:rotate-90" size={20} />
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-navy py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={IMAGES.shieldIcon} alt="QVA Holdings" className="w-10 h-10" />
                <span className="text-white font-serif text-xl">QVA Holdings</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Real estate credit partnerships backed by tangible assets and protected by non-recourse legal structures. Visit us at qvaholdings.com
              </p>
            </div>

            <div>
              <h4 className="text-gold font-medium text-sm tracking-widest uppercase mb-4">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { label: "How It Works", id: "how-it-works" },
                  { label: "Our Portfolio", id: "portfolio" },
                  { label: "Protection", id: "protection" },
                  { label: "Apply Now", id: "apply" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                ))}
                <Link href="/blog" className="block text-white/50 hover:text-gold transition-colors text-sm">Blog</Link>
                <Link href="/podcast" className="block text-white/50 hover:text-gold transition-colors text-sm">Podcast</Link>
              </div>
            </div>

            <div>
              <h4 className="text-gold font-medium text-sm tracking-widest uppercase mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:info@qvaholdings.com" className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm">
                  <Mail size={16} /> info@qvaholdings.com
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Ph4yth-AjzM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
                >
                  <Play size={16} /> Watch Our Explainer Video
                </a>
              </div>
            </div>
          </div>

          <div className="gold-rule mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} QVA Holdings. All rights reserved.
            </p>
            <p className="text-white/30 text-xs text-center md:text-right max-w-lg">
              This is not financial advice. All partnerships are subject to due diligence and formal legal agreements. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
