export interface ServiceDetail {
  id: string;
  name: string;
  description: string[];
  includes: string[];
  whoFor: string;
}

export const services: ServiceDetail[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    description: [
      "We manage Google Ads. We make them profitable. Search, Shopping, Display and Performance Max — built around what your customers actually type when they need what you sell.",
      "Most accounts we audit are burning budget on broad keywords, untracked conversions, and Search Partners traffic nobody checked. We fix the foundations first: conversion tracking that measures calls and sales, not clicks. Then we structure campaigns around intent — the searches that turn into revenue.",
      "You approve the strategy and budget before anything spends. After launch, we optimise weekly and report monthly. We cut spend that wastes money and scale what works.",
    ],
    includes: [
      "Keyword research",
      "Campaign setup",
      "Bid management",
      "Ad copy",
      "A/B testing",
      "Monthly reporting",
      "Conversion tracking",
    ],
    whoFor:
      "Service businesses, ecommerce, and local businesses with customers already searching for what they sell — especially owners who tried running ads themselves and got nowhere.",
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    description: [
      "Facebook and Instagram campaigns for lead generation and ecommerce. Full funnel — from people who have never heard of you to people one click from buying.",
      "Meta works differently from Search. Nobody is looking for you, so the creative and the audience do the work. We research who buys from you, build the audiences, brief the creative, and set up retargeting so the people who almost converted come back.",
      "Lookalike audiences built from your real customers. Retargeting that follows the funnel, not the user around the internet for six months. Reporting that shows cost per lead and cost per sale — not reach.",
    ],
    includes: [
      "Audience research",
      "Creative brief",
      "Campaign setup",
      "Retargeting",
      "Lookalike audiences",
      "Reporting",
    ],
    whoFor:
      "Ecommerce brands and lead-driven businesses that need volume — and have an offer worth putting in front of cold audiences.",
  },
  {
    id: "tiktok-ads",
    name: "TikTok Ads",
    description: [
      "Short-form video ad campaigns for brands targeting younger audiences. TikTok rewards ads that do not look like ads — so creative strategy is included, not optional.",
      "We select the ad formats that fit your offer, define the targeting, and brief the creative direction. Polished corporate video performs worse here than something shot on a phone with a real hook in the first second. We plan for that.",
      "Reporting covers what matters: cost per result and which creative is carrying the campaign, so the next round of videos is built on evidence.",
    ],
    includes: [
      "Creative strategy",
      "Ad format selection",
      "Audience targeting",
      "Reporting",
    ],
    whoFor:
      "Brands whose customers are under 35 and whose product can be shown, demonstrated, or told as a story in under thirty seconds.",
  },
  {
    id: "seo",
    name: "SEO",
    description: [
      "Technical SEO, content strategy, and link building. Rankings that compound over time — the channel that keeps paying after the work is done.",
      "We start with a technical audit: crawlability, speed, structure, the unglamorous problems that cap your rankings no matter how much content you publish. Then a keyword strategy built on what your buyers search, not vanity head terms.",
      "Content gets planned against that strategy. On-page optimisation, backlink outreach, and a monthly ranking report so you can see the compounding happen. SEO is slow. We say that upfront. It is also the cheapest traffic you will ever own.",
    ],
    includes: [
      "Technical audit",
      "Keyword strategy",
      "Content plan",
      "On-page optimisation",
      "Backlink outreach",
      "Monthly ranking report",
    ],
    whoFor:
      "Businesses with a horizon longer than one quarter, who want traffic they own instead of traffic they rent.",
  },
  {
    id: "social-media",
    name: "Social Media",
    description: [
      "Content calendars, posting, community management and reporting across Instagram, Facebook, TikTok, and LinkedIn. The consistent presence that makes your paid campaigns convert better.",
      "We build a monthly content calendar, write the copy, brief the design, schedule everything, and answer the comments and messages your customers leave. Same process every time. It works because we do not reinvent it.",
      "Monthly analytics show follower growth, engagement, and what content earned attention — so the calendar gets sharper every month.",
    ],
    includes: [
      "Content calendar",
      "Copywriting",
      "Design briefs",
      "Scheduling",
      "Community management",
      "Monthly analytics",
    ],
    whoFor:
      "Businesses running paid campaigns whose social profiles are the first thing a prospect checks — and currently the weakest link.",
  },
];
