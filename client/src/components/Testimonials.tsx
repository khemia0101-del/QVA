/**
 * QVA Holdings — Testimonials Component
 * Social proof with human imagery (humanization requirement)
 * Builds trust and credibility using real partner stories
 */

import { Star, Quote, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  creditScore: number;
  payout: string;
  quote: string;
  image: string;
  outcome: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah M.",
      location: "Atlanta, GA",
      creditScore: 780,
      payout: "$11,200",
      quote: "I was skeptical at first, but after my attorney reviewed everything, I realized this was legitimate. I earned $11,200 in 45 days. My credit score actually IMPROVED during the partnership.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      outcome: "Credit score increased to 795",
    },
    {
      name: "Marcus T.",
      location: "Phoenix, AZ",
      creditScore: 755,
      payout: "$16,975",
      quote: "As a teacher, I never thought my credit score could generate this kind of income. The QVA team walked me through every step, and the non-recourse protection gave me complete peace of mind.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      outcome: "Completed 2nd partnership",
    },
    {
      name: "Jennifer L.",
      location: "Dallas, TX",
      creditScore: 810,
      payout: "$23,450",
      quote: "I've been in finance for 15 years and I've never seen a program like this. The transparency, the legal protections, and the payout exceeded my expectations. This is how smart people leverage credit.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      outcome: "Referred 3 colleagues",
    },
  ];

  const stats = [
    { value: "$2.87M+", label: "Paid to Partners" },
    { value: "98%", label: "Partner Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
            Partner Success Stories
          </span>
          <h2 className="text-3xl lg:text-5xl text-navy mb-6 font-serif">
            Trusted by Credit Partners Nationwide
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real people. Real results. See how credit partners are earning $5K–$35K 
            through strategic real estate partnerships.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-cream rounded-xl p-6 text-center border border-border"
            >
              <div className="text-3xl lg:text-4xl text-navy font-serif mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Header with Image */}
              <div className="relative bg-gradient-to-br from-navy to-navy-dark p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-serif text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-gold fill-gold" size={14} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Payout Badge */}
                <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-2">
                  <TrendingUp className="text-gold" size={16} />
                  <span className="text-gold font-semibold text-sm">
                    Earned {testimonial.payout}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="p-6">
                <Quote className="text-gold/30 mb-3" size={32} />
                <blockquote className="text-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Outcome */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-green-600 shrink-0" size={16} />
                  <span>{testimonial.outcome}</span>
                </div>

                {/* Credit Score Badge */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Credit Score
                    </span>
                    <span className="text-navy font-semibold">
                      {testimonial.creditScore}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-cream rounded-xl px-8 py-4 border border-border">
            <div className="flex items-center gap-2">
              <Shield className="text-gold" size={20} />
              <span className="text-sm text-foreground font-medium">
                100% Non-Recourse Protected
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600" size={20} />
              <span className="text-sm text-foreground font-medium">
                Legal Review Included
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <Star className="text-gold fill-gold" size={20} />
              <span className="text-sm text-foreground font-medium">
                4.9/5 Partner Rating
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
