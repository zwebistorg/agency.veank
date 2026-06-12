const steps = [
  {
    number: "01",
    title: "Audit",
    body: "We review your current ad account, website, and competitors. No charge. No commitment. We tell you exactly what is broken.",
  },
  {
    number: "02",
    title: "Strategy",
    body: "We build a campaign strategy with budget recommendations, target audiences, and expected outcomes. You approve before we spend a single dollar.",
  },
  {
    number: "03",
    title: "Launch",
    body: "Campaigns go live. You get access to a live dashboard showing spend, results, and ROAS in real time.",
  },
  {
    number: "04",
    title: "Optimise",
    body: "Weekly optimisation. Monthly reporting. We kill what does not work and scale what does.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-ag-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
          How We{" "}
          <span className="underline decoration-ag-yellow decoration-4 underline-offset-8">
            Work
          </span>
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative pt-8">
              <span
                className="absolute left-0 top-0 font-syne text-7xl font-extrabold text-ag-yellow opacity-20"
                aria-hidden
              >
                {step.number}
              </span>
              <h3 className="relative font-syne text-xl font-semibold text-ag-yellow">
                {step.title}
              </h3>
              <p className="relative mt-3 text-ag-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
