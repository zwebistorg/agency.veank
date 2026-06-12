"use client";

import { Target, Megaphone, Play, TrendingUp, Share2 } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Google Ads",
    body: "Search, Shopping, Display and Performance Max campaigns. We manage keyword research, bid strategy, ad copy, and monthly reporting.",
    icon: Target,
    href: "/services#google-ads",
  },
  {
    title: "Meta Ads",
    body: "Facebook and Instagram campaigns for lead generation and ecommerce. Full funnel from awareness to conversion.",
    icon: Megaphone,
    href: "/services#meta-ads",
  },
  {
    title: "TikTok Ads",
    body: "Short-form video ad campaigns for brands targeting younger audiences. Creative strategy included.",
    icon: Play,
    href: "/services#tiktok-ads",
  },
  {
    title: "SEO",
    body: "Technical SEO, content strategy, and link building. Rankings that compound over time.",
    icon: TrendingUp,
    href: "/services#seo",
  },
  {
    title: "Social Media",
    body: "Content calendars, posting, community management and reporting across Instagram, Facebook, TikTok, and LinkedIn.",
    icon: Share2,
    href: "/services#social-media",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-ag-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
          What We <span className="underline decoration-ag-yellow decoration-4 underline-offset-8">Do</span>
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
