import type { Metadata } from "next";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import ServicesSidebar from "@/components/services/ServicesSidebar";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services — Google Ads, Meta, SEO & Social",
};

export default function ServicesPage() {
  const sidebarItems = services.map(({ id, name }) => ({ id, name }));

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase tracking-[-0.02em]">
        What We <span className="text-ag-yellow">Do</span>
      </h1>
      <div className="mt-16 grid gap-16 lg:grid-cols-[200px_1fr]">
        <ServicesSidebar items={sidebarItems} />
        <div className="space-y-24">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase text-ag-yellow">
                {service.name}
              </h2>
              <div className="mt-6 max-w-3xl space-y-4 text-lg">
                {service.description.map((para, i) => (
                  <p key={i} className={i > 0 ? "text-ag-muted" : ""}>
                    {para}
                  </p>
                ))}
              </div>
              <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
                What is included
              </h3>
              <ul className="mt-4 grid max-w-2xl gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-ag-yellow" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
                Who it is for
              </h3>
              <p className="mt-3 max-w-3xl text-ag-muted">{service.whoFor}</p>
              <div className="mt-8">
                <Button href="/contact">Start a Campaign</Button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
