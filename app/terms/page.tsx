import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
        Terms of <span className="text-ag-yellow">Service</span>
      </h1>
      <div className="mt-10 space-y-8 text-ag-muted">
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            About this site
          </h2>
          <p className="mt-3">
            agency.veank.com is operated by Veank Agency, a performance
            marketing agency and part of Veank. By using this site you agree to
            these terms.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            Enquiries are not engagements
          </h2>
          <p className="mt-3">
            Submitting the contact form does not create a client relationship.
            We review every submission and take on a limited number of clients.
            Client engagements are governed by a separate written agreement.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            No guarantees
          </h2>
          <p className="mt-3">
            Advertising results depend on factors outside any agency&rsquo;s
            control — market conditions, budgets, product, and competition.
            Nothing on this site is a guarantee of specific results.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            Content
          </h2>
          <p className="mt-3">
            All content on this site belongs to Veank Agency and may not be
            reproduced without permission. Client work is described with client
            consent; specific performance data is shared only where approved.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            Changes
          </h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the
            site after changes constitutes acceptance.
          </p>
        </section>
        <p className="text-sm">Last updated: June 2026.</p>
      </div>
    </div>
  );
}
