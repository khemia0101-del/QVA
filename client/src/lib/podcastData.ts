/*
 * QVA Holdings — Podcast Content Data
 * Lead-generation focused podcast episodes about credit partnerships and DSCR
 * Target audience: People looking to leverage their credit score for income
 */

export interface PodcastEpisode {
  slug: string;
  episodeNumber: number;
  title: string;
  subtitle: string;
  metaDescription: string;
  duration: string;
  date: string;
  category: string;
  coverImage: string;
  audioUrl: string;
  description: string;
  timestamps: { time: string; label: string }[];
  transcript: string[];
  cta: {
    headline: string;
    text: string;
  };
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: "what-is-a-credit-partnership-and-how-to-earn-10k-25k",
    episodeNumber: 1,
    title: "What Is a Credit Partnership? How Your Score Can Earn You $15K–$100K",
    subtitle: "We break down the credit partnership model in plain English — how it works, who qualifies, and why your 740+ score is worth real money.",
    metaDescription: "Episode 1: Learn what a real estate credit partnership is and how people with 740+ credit scores are earning $15K–$100K lump-sum payouts.",
    duration: "3 min",
    date: "February 12, 2026",
    category: "Getting Started",
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/iCmNIavftYjEGpSB.wav",
    description: `In this premiere episode, we break down the credit partnership model in plain English. Learn the five-step process, see a real deal example, and understand why your 740+ credit score could earn you $15,000 to $100,000 at closing.`,
    timestamps: [
      { time: "0:00", label: "What is a credit partnership?" },
      { time: "0:45", label: "The five-step process" },
      { time: "1:30", label: "Real deal example" },
      { time: "2:00", label: "Non-recourse protection" },
      { time: "2:30", label: "Qualifications and next steps" },
    ],
    transcript: [
      `Welcome to The Credit Partnership Playbook by QVA Holdings. I'm your host, and today we're going to talk about something that most people have never heard of — but that could put $15,000 to $100,000 in your pocket if you have a credit score of 740 or higher.`,

      `It's called a credit partnership, and it's one of the most overlooked ways to generate income in 2026. So let's break it down.`,

      `## What Exactly Is a Credit Partnership?`,

      `Here's the simplest way I can explain it. A real estate company — like QVA Holdings — owns properties that generate rental income. When they want to refinance those properties to get better loan terms, the interest rate they get depends heavily on the credit score attached to the loan.`,

      `A higher credit score means a lower interest rate. A lower interest rate means the company saves thousands — sometimes tens of thousands — of dollars. And they're willing to share those savings with you.`,

      `So a credit partnership is basically this: you lend your credit score to help a real estate company get a better deal, and they pay you a lump sum for that help. You don't invest any money. You don't manage any property. You just bring your credit to the table.`,

      `## How Does the Process Actually Work?`,

      `Let me walk you through the five steps. Step one: QVA Holdings already owns the property. It's an income-producing asset — could be a single-family rental, a multi-family building, or a commercial property. The property is already generating cash flow.`,

      `Step two: They initiate a refinance using something called a DSCR loan. We'll do a whole episode on DSCR loans, but the key thing to know is that these loans are qualified based on the property's income, not your personal income. Your W-2, your tax returns — none of that matters.`,

      `Step three: Your credit score is added to the loan application. This is where the magic happens. Your 740, 760, 780 — whatever your score is — it unlocks a significantly better interest rate.`,

      `Step four: That better interest rate generates real, measurable savings on the loan. We're talking thousands of dollars.`,

      `Step five: At closing, you receive your payout. It's a lump sum — typically $15,000 to $100,000, sometimes more depending on the deal size. It's guaranteed in writing before you ever commit.`,

      `## Let Me Give You a Real Example`,

      `Let's say QVA Holdings is refinancing a property worth $500,000. Without a strong credit partner, they might get a DSCR loan at 8.25% interest. But with a credit partner who has a 760 score, that rate drops to 7.0%.`,

      `That 1.25% difference saves roughly $6,250 per year on the loan. Over 30 years, that's nearly $190,000 in total savings. The company shares a portion of those savings with you upfront — in this case, let's say $18,000 at closing.`,

      `You didn't invest a dollar. You didn't manage a property. Your credit score created $18,000 in value, and you got paid for it.`,

      `## But What About the Risk?`,

      `This is the question everyone asks, and it's the right question. Here's the answer: the loans used in credit partnerships are non-recourse. That means if something goes wrong with the property, the lender can only take back the property. They cannot touch your personal assets — your home, your car, your savings, your retirement. It's legally prohibited.`,

      `On top of that, every property is held in a separate LLC, which creates an additional legal firewall. And everything is documented in a formal legal agreement before you commit.`,

      `## Who Qualifies?`,

      `You need a credit score of 740 or higher. You need a clean credit history — no recent bankruptcies, foreclosures, or collections. You need to be a U.S. resident. And you need to be willing to co-sign on a non-recourse DSCR loan.`,

      `If that sounds like you, then your credit score could be earning you money right now. Head to qvaholdings.com to apply — it takes about 2 minutes, and our team will reach out within 24 hours.`,
    ],
    cta: {
      headline: "Ready to Put Your Credit to Work?",
      text: "If you have a 740+ credit score, you could earn $15K–$100K through a credit partnership. Apply at qvaholdings.com — it takes 2 minutes.",
    },
  },
  {
    slug: "dscr-loans-explained-simply",
    episodeNumber: 2,
    title: "DSCR Loans Explained: Why They're Different from Every Loan You've Ever Had",
    subtitle: "Traditional loans look at your paycheck. DSCR loans look at the property's income. Here's why that difference could put money in your pocket.",
    metaDescription: "Episode 2: DSCR loans explained in simple terms. Learn how Debt Service Coverage Ratio loans work and why they create the credit partnership opportunity.",
    duration: "3 min",
    date: "February 10, 2026",
    category: "DSCR Education",
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/hDYipYPDUzAFPAfC.wav",
    description: `Learn what DSCR loans are and how they differ from traditional mortgages. Discover why your credit score is the key to unlocking better financing rates and why real estate companies seek credit partners.`,
    timestamps: [
      { time: "0:00", label: "What is DSCR?" },
      { time: "0:30", label: "DSCR vs. traditional mortgages" },
      { time: "1:15", label: "How credit score impacts rates" },
      { time: "1:50", label: "Non-recourse protection" },
      { time: "2:20", label: "Why this matters for you" },
    ],
    transcript: [
      `Welcome back to The Credit Partnership Playbook. Today we're explaining DSCR loans — the financing tool that makes credit partnerships possible.`,

      `DSCR stands for Debt Service Coverage Ratio.`,

      `DSCR stands for Debt Service Coverage Ratio. I know that sounds complicated, but it's actually a very simple concept. It's just a number that tells the lender: "Can this property's rental income cover the mortgage payment?"`,

      `Here's the math. Take the property's monthly rental income and divide it by the monthly mortgage payment. If the answer is 1.0 or higher, the property can cover its own costs. If it's 1.25, the property earns 25% more than the mortgage costs. That's a healthy ratio.`,

      `For example: a property rents for $5,000 a month. The mortgage payment would be $4,000 a month. $5,000 divided by $4,000 equals 1.25. That's a DSCR of 1.25 — and most lenders will approve that.`,

      `## How Is This Different from a Traditional Mortgage?`,

      `When you go to a bank for a regular mortgage, they want to see your W-2s, your tax returns, your pay stubs, your bank statements. They're asking one question: "Can this person afford the monthly payment based on their salary?"`,

      `A DSCR lender asks a completely different question: "Can this property afford its own payment based on its rental income?" They don't care about your W-2. They don't care about your tax returns. They don't even care if you have a job. All they care about is whether the property's income covers the debt.`,

      `This is a game-changer for real estate investors, because it means they can finance properties based on the property's performance — not their personal financial situation.`,

      `## So Where Does Your Credit Score Come In?`,

      `Here's the key insight that makes credit partnerships work. DSCR lenders don't verify your income — but they absolutely look at your credit score. And your credit score has a massive impact on the interest rate they offer.`,

      `Think of it this way: the DSCR ratio tells the lender whether the property qualifies. But the credit score tells the lender how much risk they're taking on. A higher credit score means lower perceived risk, which means a lower interest rate.`,

      `The difference can be dramatic. A 680 credit score might get an 8.5% rate. A 740 might get 7.5%. A 780 might get 7.0%. On a $500,000 loan, the difference between 8.5% and 7.0% is over $5,000 per year in savings.`,

      `That's why real estate companies like QVA Holdings seek out credit partners. Your excellent credit score is the key that unlocks dramatically better financing terms.`,

      `## The Non-Recourse Factor`,

      `Here's what makes DSCR loans particularly attractive for credit partners: most DSCR loans are non-recourse. This means that if the property defaults, the lender can only seize the property. They cannot pursue your personal assets.`,

      `Compare that to a traditional mortgage, where the lender can come after your personal assets if there's a deficiency. With a non-recourse DSCR loan, your personal financial life is completely firewalled from the deal.`,

      `## Why This Creates an Opportunity for You`,

      `Let me connect the dots. QVA Holdings owns income-producing properties. They refinance using DSCR loans. Your 740+ credit score dramatically improves the interest rate. The savings are real and substantial. They share those savings with you as a $15K–$100K payout. And the non-recourse structure means your personal assets are protected.`,

      `It's a straightforward value exchange: your credit score creates value, and you get paid for that value. No cash investment. No property management. No repayment.`,

      `If you have a 740+ credit score and you want to learn more, head to qvaholdings.com. Apply in 2 minutes and our team will walk you through exactly how much your credit score could earn.`,
    ],
    cta: {
      headline: "Your Credit Score Sets the Rate — And Your Payout",
      text: "The higher your credit score, the better the loan terms, and the bigger your payout. Apply at qvaholdings.com to find out what your score is worth.",
    },
  },
  {
    slug: "5-ways-to-leverage-your-credit-score-in-2026",
    episodeNumber: 3,
    title: "5 Ways to Leverage Your Credit Score in 2026 (Most People Only Know 2)",
    subtitle: "Your credit score can do more than get you a mortgage. Here are five strategies — including one that could pay you $100K.",
    metaDescription: "Episode 3: Discover 5 ways to leverage your credit score for income in 2026, including real estate credit partnerships that pay $15K–$100K.",
    duration: "3 min",
    date: "February 7, 2026",
    category: "Credit Strategy",
    coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031027310/gxTWdreGJuzqzwvD.wav",
    description: `Discover five ways to leverage your credit score for income. Compare credit card rewards, balance transfers, authorized user strategies, business credit, and real estate credit partnerships. Learn why credit partnerships offer the highest payout potential.`,
    timestamps: [
      { time: "0:00", label: "Five strategies to leverage your credit" },
      { time: "0:30", label: "Credit card rewards" },
      { time: "0:50", label: "Balance transfer arbitrage" },
      { time: "1:10", label: "Authorized user income" },
      { time: "1:30", label: "Business credit leveraging" },
      { time: "1:50", label: "Real estate credit partnerships" },
      { time: "2:15", label: "Comparing payouts and next steps" },
    ],
    transcript: [
      `Welcome to episode 3 of The Credit Partnership Playbook. Your credit score is an asset, not just a number. There are multiple ways to make it generate income.`,

      `Most people think of their credit score in one dimension: it determines whether they can borrow money and at what rate. But in 2026, there are actually multiple ways to make your credit score work for you — some of which can generate serious income.`,

      `Today I'm going to walk you through five strategies. Most people only know about the first two. But strategy number five is the one that could put $15,000 to $100,000 in your pocket.`,

      `## Strategy 1: Credit Card Rewards Optimization`,

      `This is the one everyone knows. Use credit cards strategically to earn cash back, points, or miles. If you have excellent credit, you qualify for the best rewards cards — sometimes offering 2-5% cash back on specific categories.`,

      `The upside: it's easy and passive. The downside: even with aggressive optimization, most people earn $1,000 to $3,000 per year in rewards. It's nice, but it's not life-changing money.`,

      `## Strategy 2: Balance Transfer Arbitrage`,

      `This is a more advanced strategy. You take advantage of 0% APR balance transfer offers to move money around and earn interest on it in a high-yield savings account before paying it back.`,

      `With excellent credit, you can access 0% APR offers for 15-21 months. If you transfer $20,000 and park it in a 5% savings account, you'd earn about $1,500 in interest before paying it back.`,

      `The upside: it's relatively low risk. The downside: it requires discipline, the amounts are modest, and one missed payment can blow up the whole strategy.`,

      `## Strategy 3: Authorized User Income`,

      `Here's one that fewer people know about. Companies will pay you to add someone as an authorized user on your credit card. The idea is that your excellent credit history "rubs off" on the other person's credit report.`,

      `The upside: it's passive. The downside: payouts are typically $50 to $200 per tradeline, and there are legitimate concerns about the ethics and long-term viability of this approach.`,

      `## Strategy 4: Business Credit Leveraging`,

      `If you have excellent personal credit, you can use it as a foundation to build business credit. This opens up access to business lines of credit, business credit cards, and SBA loans.`,

      `The upside: it can unlock significant capital for business ventures. The downside: you need an actual business, and you're taking on debt that you're responsible for repaying.`,

      `## Strategy 5: Real Estate Credit Partnerships`,

      `And now we get to the strategy that I believe offers the best risk-reward ratio of all five. A real estate credit partnership pays you $15,000 to $100,000 — as a lump sum, at closing — for partnering your credit score with a real estate company's property refinance.`,

      `You don't invest any money. You don't take on personal debt. The loans are non-recourse, meaning your personal assets are protected. And the payout is guaranteed in writing before you commit.`,

      `Compare that to the other four strategies. Credit card rewards might earn you $2,000 a year. Balance transfer arbitrage might earn you $1,500. Authorized user income might earn you a few hundred dollars. Business credit requires you to actually run a business.`,

      `A single credit partnership can pay you $15,000 to $100,000 in one transaction. And you can participate in multiple partnerships over time.`,

      `## The Bottom Line`,

      `Your credit score is one of the most valuable financial assets you own. Most people only use it to borrow money. But in 2026, there are multiple ways to make it generate income. And of all the strategies available, real estate credit partnerships offer the highest payout potential with the strongest legal protections.`,

      `If you have a 740+ credit score and you want to explore this opportunity, visit qvaholdings.com. Apply in 2 minutes, and our team will show you exactly what your credit score could earn.`,
    ],
    cta: {
      headline: "Your Credit Score Could Be Your Highest-Earning Asset",
      text: "Stop leaving money on the table. A single credit partnership with QVA Holdings could pay you $15K–$100K. Apply now at qvaholdings.com.",
    },
  },
];

export const podcastCategories = [
  "All",
  "Getting Started",
  "DSCR Education",
  "Credit Strategy",
];
