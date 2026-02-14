/**
 * QVA Holdings — FAQ Component
 * Objection handling using Pace Morby's transparency approach
 * Addresses common concerns before they become barriers
 */

import { useState } from "react";
import { ChevronDown, Shield, AlertCircle, FileCheck, TrendingUp, Users, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
  category: "safety" | "process" | "financial" | "legal";
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is this safe? What if the property fails?",
      answer: "This is the #1 question we get, and it's the right one to ask. Every partnership is structured as a **non-recourse loan**. This means if the property underperforms or the loan defaults, the lender can only take the property itself — NOT your personal assets, bank accounts, or other property. You're legally protected. Additionally, we only partner on properties that are already cash-flowing and have been vetted by our underwriting team. We also pay for an independent attorney to review all documents before you sign.",
      icon: Shield,
      category: "safety",
    },
    {
      question: "Will this hurt my credit score?",
      answer: "Actually, the opposite is often true. When you co-sign on a DSCR loan, it appears on your credit report as a mortgage. If the payments are made on time (which we guarantee in writing), it can actually **improve** your credit mix and payment history. We handle all payments directly, and we provide you with monthly statements. Many of our partners have seen their credit scores increase during the partnership. We also offer complimentary credit monitoring throughout the partnership term.",
      icon: TrendingUp,
      category: "financial",
    },
    {
      question: "How is this different from co-signing for a friend?",
      answer: "Great question — this is **nothing** like co-signing for a friend's car or apartment. Here's why: (1) **Non-recourse protection** — your personal assets are never at risk. (2) **You get paid upfront** — $15K–$100K at closing, not a promise of future payments. (3) **Professional structure** — formal legal agreements, LLC protection, and attorney review. (4) **Real assets** — backed by income-producing real estate, not someone's promise to pay. (5) **We make the payments** — you never have to worry about missed payments affecting your credit.",
      icon: Users,
      category: "process",
    },
    {
      question: "What's the catch? Why do you need my credit?",
      answer: "No catch — just economics. DSCR loans (Debt Service Coverage Ratio loans) are qualified based on the property's income, not personal income. However, the **interest rate** is still influenced by the credit score on the application. A 740+ credit score can reduce the interest rate by 0.5%–1.5%. On a $500K loan, that's $50K–$150K in savings over the loan term. We share those savings with you as an upfront lump sum. It's a win-win: we get better loan terms, you get paid for your credit value.",
      icon: DollarSign,
      category: "financial",
    },
    {
      question: "How long does the process take?",
      answer: "From application to payout, the typical timeline is **30–60 days**. Here's the breakdown: (1) Initial consultation and credit verification: 1–3 days. (2) Property selection and loan pre-approval: 1–2 weeks. (3) Legal document preparation and attorney review: 1 week. (4) Loan closing and payout: 2–3 weeks. We keep you informed at every step, and you'll have a dedicated partnership manager to answer questions throughout the process.",
      icon: FileCheck,
      category: "process",
    },
    {
      question: "What are the legal protections?",
      answer: "Every partnership includes multiple layers of legal protection: (1) **Non-recourse loan structure** — your liability is limited to the property itself. (2) **LLC separation** — the loan is held in a separate LLC, not your personal name. (3) **Independent legal review** — we pay for your attorney to review all documents. (4) **Formal partnership agreement** — clearly defines payout, responsibilities, and exit terms. (5) **Title insurance** — protects against title defects. (6) **Property insurance** — comprehensive coverage on all assets. We've worked with real estate attorneys to structure these partnerships to maximize your protection.",
      icon: Shield,
      category: "legal",
    },
    {
      question: "Can I do multiple partnerships?",
      answer: "Absolutely! Many of our most successful partners have completed 2–5 partnerships. Each partnership is independent, and as long as you maintain your credit score and the previous partnerships are performing well, you can participate in additional deals. Some partners earn $35K+ per year through multiple partnerships. We give priority access to repeat partners for new opportunities.",
      icon: TrendingUp,
      category: "financial",
    },
    {
      question: "What if I need to exit the partnership early?",
      answer: "While partnerships are typically structured for the loan term (usually 5–10 years), we understand life circumstances change. Exit options include: (1) **Refinance** — we can refinance the property and remove you from the loan (most common). (2) **Replacement partner** — we can bring in a new credit partner to replace you. (3) **Property sale** — if the property is sold, the loan is paid off and you're released. Exit terms are clearly defined in the partnership agreement, and we work with you to find the best solution if your situation changes.",
      icon: AlertCircle,
      category: "legal",
    },
  ];

  const categories = [
    { id: "safety", label: "Safety & Risk", icon: Shield },
    { id: "financial", label: "Financial", icon: DollarSign },
    { id: "process", label: "Process", icon: FileCheck },
    { id: "legal", label: "Legal", icon: AlertCircle },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
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
            Common Questions
          </span>
          <h2 className="text-3xl lg:text-5xl text-navy mb-6 font-serif">
            Everything You Need to Know
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe in complete transparency. Here are the questions we get asked most often, 
            answered honestly and in detail.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-border shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start gap-4 p-6 text-left hover:bg-cream/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <faq.icon className="text-gold" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-navy font-serif text-lg lg:text-xl mb-1 pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`text-gold shrink-0 mt-1 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <p className="text-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/#apply"
            className="inline-flex items-center gap-2 text-gold-dark font-semibold hover:text-gold transition-colors"
          >
            Schedule a Free Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
