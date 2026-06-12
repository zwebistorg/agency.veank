import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import MetricCard from "@/components/ui/MetricCard";

export default function HeroSection() {
  return (
    <section className="bg-ag-black">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="font-syne text-[clamp(3.5rem,8vw,7rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]">
            We run ads
            <br />
            that make
            <br />
            <span className="text-ag-yellow">Money.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ag-muted">
            Google Ads. Meta Ads. SEO. Social. For businesses that want revenue
            — not vanity metrics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Start a Campaign</Button>
            <Button href="/work" variant="secondary">
              See Our Work
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <MetricCard />
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <ArrowDown className="h-6 w-6 animate-bounce text-ag-yellow" aria-hidden />
      </div>
    </section>
  );
}
