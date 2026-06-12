import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import MetricCard from "@/components/ui/MetricCard";

export default function HeroSection() {
  return (
    <section className="bg-ag-black">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <h1 className="font-syne text-[clamp(2rem,8vw,2.75rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] sm:text-[clamp(2.75rem,8vw,4.5rem)] lg:text-[clamp(3rem,6.5vw,5.75rem)]">
          <span className="block whitespace-nowrap">We run ads</span>
          <span className="block whitespace-nowrap">that make</span>
          <span className="block whitespace-nowrap text-ag-yellow">
            Money.
          </span>
        </h1>
        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-xl text-lg text-ag-muted">
              Google Ads. Meta Ads. SEO. Social. For businesses that want
              revenue — not vanity metrics.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Start a Campaign</Button>
              <Button href="/work" variant="secondary">
                See Our Work
              </Button>
            </div>
          </div>
          <MetricCard />
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <ArrowDown
          className="h-6 w-6 animate-bounce text-ag-yellow"
          aria-hidden
        />
      </div>
    </section>
  );
}
