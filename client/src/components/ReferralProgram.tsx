/**
 * QVA Holdings — Referral Program Component
 * Incentivizes partners and network to refer qualified credit partners
 * $5,000 flat fee per successful referral
 */

import { Users, DollarSign, CheckCircle2, ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ReferralProgram() {
  const benefits = [
    {
      icon: DollarSign,
      title: "$5,000 Per Referral",
      description: "Flat fee paid to you when your referral completes a partnership",
    },
    {
      icon: Handshake,
      title: "Negotiate Your Own Terms",
      description: "You're free to negotiate any additional fee directly with the credit partner",
    },
    {
      icon: CheckCircle2,
      title: "No Limit on Referrals",
      description: "Refer as many qualified partners as you want — earn $5K each time",
    },
    {
      icon: Users,
      title: "Simple Qualification",
      description: "Your referral just needs a 740+ credit score and to meet our basic criteria",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Know Someone with Great Credit?",
      description: "Anyone with a 740+ credit score who's not using it to earn income",
    },
    {
      step: "2",
      title: "Share the Opportunity",
      description: "Send them to qvaholdings.com or have them mention your name when applying",
    },
    {
      step: "3",
      title: "They Complete Partnership",
      description: "Once they close on a credit partnership deal with QVA Holdings",
    },
    {
      step: "4",
      title: "You Get Paid $5,000",
      description: "We send you $5,000 within 7 days of their partnership closing",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy via-navy-dark to-navy">
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
            Referral Program
          </span>
          <h2 className="text-3xl lg:text-5xl text-white mb-6 font-serif">
            Earn $5,000 for Every Credit Partner You Refer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6" />
          <p className="text-white/70 text-lg leading-relaxed">
            Know someone with excellent credit? Introduce them to QVA Holdings and earn a flat $5,000 
            referral fee when they complete a partnership. Plus, you can negotiate any additional fee 
            directly with them.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                  <benefit.icon className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-serif text-xl mb-2">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-2xl lg:text-3xl text-white text-center font-serif mb-10">
            How the Referral Program Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gold/40" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-gold to-gold-dark rounded-2xl p-8 lg:p-10 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl lg:text-3xl text-navy font-serif mb-4">
            Ready to Start Earning Referral Fees?
          </h3>
          <p className="text-navy/80 text-lg mb-6 leading-relaxed">
            Contact us to get your unique referral link and start earning $5,000 per qualified partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = "mailto:referrals@qvaholdings.com"}
              className="bg-navy hover:bg-navy-dark text-white font-semibold px-8 h-12"
            >
              Get Your Referral Link
            </Button>
            <Button
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 h-12"
            >
              Or Apply as a Partner
            </Button>
          </div>
          <p className="text-navy/60 text-sm mt-6">
            💰 Average referrer earns $15K–$25K per year · 🎯 No limit on referrals
          </p>
        </motion.div>
      </div>
    </section>
  );
}
