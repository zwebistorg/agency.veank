const stats = [
  { number: "13", label: "Jeddah districts targeted in our first campaign" },
  { number: "2", label: "Languages — Arabic-primary keywords plus English" },
  { number: "1", label: "Active market. Saudi Arabia. Expanding." },
];

export default function ResultsSection() {
  return (
    <section className="bg-ag-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
          Why It{" "}
          <span className="underline decoration-ag-yellow decoration-4 underline-offset-8">
            Works
          </span>
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none text-ag-yellow">
                  {stat.number}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-6 text-lg lg:col-span-2">
            <p>
              We are not a full-service agency for everyone. We take on clients
              where we can genuinely move the needle — businesses with a real
              product, a real budget, and patience for results that compound.
            </p>
            <p className="text-ag-muted">
              Currently active in Saudi Arabia. Expanding to UAE and Pakistan.
              If you are in one of these markets and want to stop burning money
              on ads that do not work — talk to us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
