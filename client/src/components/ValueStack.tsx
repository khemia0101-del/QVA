/**
 * QVA Holdings — Value Stack Component
 * Implements Alex Hormozi's value stacking framework
 * Shows total value vs. investment to maximize perceived value
 */

import { Shield, FileCheck, Users, TrendingUp, Phone, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ValueStack() {
  const valueItems = [
    {
      icon: TrendingUp,
      title: "$15,000–$100,000 Payout",
      description: "Average partner earns $50K per deal",
      value: "$50,000",
    },
    {
      icon: Shield,
      title: "Non-Recourse Protection",
      description: "Your personal assets are never at risk",
      value: "$10,000+",
    },
    {
      icon: FileCheck,
      title: "Legal Document Review",
      description: "Independent attorney reviews all paperwork",
      value: "$2,500",
    },
    {
      icon: Users,
      title: "Dedicated Partnership Manager",
      description: "Personal support throughout the process",
      value: "$5,000",
    },
    {
      icon: Award,
      title: "Credit Monitoring & Support",
      description: "We track your credit health during partnership",
      value: "$500/yr",
    },
    {
      icon: Phone,
      title: "Priority Access to Future Deals",
      description: "First look at new partnership opportunities",
      value: "Exclusive",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              The Complete Package
            </span>
            <h2 className="text-3xl lg:text-5xl text-navy mb-6 font-serif">
              What You Get as a QVA Credit Partner
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most people never realize their credit score could unlock this much value. 
              Here's everything included when you become a credit partner.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Value Items */}
          <div className="space-y-4 mb-8">
            {valueItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-navy font-serif text-xl">{item.title}</h3>
                      <span className="text-gold-dark font-semibold text-lg whitespace-nowrap">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Value Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl p-8 lg:p-10 text-center shadow-2xl border border-gold/20"
          >
            <div className="mb-6">
              <div className="text-white/60 text-sm tracking-widest uppercase mb-2">Total Value</div>
              <div className="text-5xl lg:text-6xl text-gold font-serif mb-2">$68,000+</div>
              <div className="text-white/40 text-sm">in services, protection, and earning potential</div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-6" />

            <div className="mb-6">
              <div className="text-white/60 text-sm tracking-widest uppercase mb-2">Your Investment</div>
              <div className="text-5xl lg:text-6xl text-white font-serif">$0</div>
              <div className="text-white/40 text-sm">Zero cash. Zero risk to personal assets.</div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-6 py-3">
              <Shield className="text-gold" size={18} />
              <span className="text-gold font-semibold text-sm tracking-wide">
                100% Non-Recourse Protected
              </span>
            </div>
          </motion.div>

          {/* Social Proof Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              🔒 <strong>127 people</strong> applied this month · ⭐ <strong>4.9/5</strong> average partner rating
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
