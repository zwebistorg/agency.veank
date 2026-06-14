import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Work — Campaign Results",
};

const sections = [
  {
    heading: "The Challenge",
    body: "ACWJ needed leads from Jeddah residents searching for AC services. Previous ads were untargeted and burning budget on irrelevant clicks.",
  },
  {
    heading: "What We Did",
    body: "Built a Search campaign targeting 13 Jeddah districts with Arabic-primary keywords. Set up call conversion tracking. Eliminated Search Partners traffic after identifying quality issues.",
  },
  {
    heading: "The Results",
    body: "Campaign live — results available on request.",
  },
  {
    heading: "What Is Next",
    body: "Expanding keyword coverage across more service types and scaling budget on the districts that convert. Same discipline: kill what does not work, scale what does.",
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase tracking-[-0.02em]">
        Our <span className="text-ag-yellow">Work</span>
      </h1>
      <p className="mt-6 text-lg text-ag-muted">
        One active client. Real results. No padding.
      </p>
      <article
        className="mt-16 border-2 border-ag-white bg-ag-surface p-8 lg:p-12"
        style={{ boxShadow: "4px 4px 0 #eab308" }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
          Google Ads — Saudi Arabia
        </p>
        <h2 className="mt-3 font-syne text-2xl font-bold text-ag-yellow lg:text-3xl">
          Air Conditioner Workshop — Jeddah
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-syne text-lg font-semibold text-ag-yellow">
                {section.heading}
              </h3>
              <p className="mt-3 text-ag-muted">{section.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact">Work With Us</Button>
        </div>
      </article>
    </div>
  );
}
