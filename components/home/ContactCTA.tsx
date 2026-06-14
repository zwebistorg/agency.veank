import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="bg-ag-surface py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
          Ready to stop wasting{" "}
          <span className="text-ag-yellow">ad spend?</span>
        </h2>
        <p className="mt-6 text-lg text-ag-muted">
          We audit your current setup for free. No pitch. No commitment. Just
          an honest look at what is working and what is not.
        </p>
        <div className="mt-10">
          <Button href="/contact" className="w-full">
            Get a Free Audit
          </Button>
        </div>
        <p className="mt-6 text-sm text-ag-muted">
          We respond within 24 hours. We take on a limited number of clients.
        </p>
      </div>
    </section>
  );
}
