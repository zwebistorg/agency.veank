import Button from "@/components/ui/Button";

export default function CurrentWork() {
  return (
    <section className="bg-ag-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
          Current{" "}
          <span className="underline decoration-ag-yellow decoration-4 underline-offset-8">
            Work
          </span>
        </h2>
        <div
          className="mt-12 border-2 border-ag-white bg-ag-black p-8 lg:p-12"
          style={{ boxShadow: "4px 4px 0 #eab308" }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
            Google Ads — Saudi Arabia
          </p>
          <h3 className="mt-3 font-syne text-2xl font-bold text-ag-yellow lg:text-3xl">
            Air Conditioner Workshop — Jeddah
          </h3>
          <p className="mt-4 max-w-3xl">
            Google Ads management. Search campaigns targeting 13 Jeddah
            districts. Arabic and English keywords. Call conversion tracking
            from day one.
          </p>
          <p className="mt-3 max-w-3xl text-ag-muted">
            Campaign live — results available on request.
          </p>
          <div className="mt-8">
            <Button href="/contact">Become Our Next Client</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
