import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-syne text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
        Privacy <span className="text-ag-yellow">Policy</span>
      </h1>
      <div className="mt-10 space-y-8 text-ag-muted">
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            What we collect
          </h2>
          <p className="mt-3">
            When you submit our contact form we collect your business name,
            your name, email address, website, budget range, current
            advertising platforms, primary goal, and any message you include.
            We also record the IP address of the submission to prevent abuse.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            How we use it
          </h2>
          <p className="mt-3">
            We use this information for one purpose: to review your enquiry and
            respond to you. We do not sell your data. We do not add you to
            mailing lists. We do not share it with third parties except the
            infrastructure providers that host this site and store form
            submissions.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            How long we keep it
          </h2>
          <p className="mt-3">
            Enquiries are retained while relevant to an active or potential
            client relationship. You can request deletion of your data at any
            time by contacting us.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            Cookies and analytics
          </h2>
          <p className="mt-3">
            This site does not use advertising cookies. Any analytics used are
            for understanding aggregate site performance only.
          </p>
        </section>
        <section>
          <h2 className="font-syne text-lg font-semibold text-ag-white">
            Contact
          </h2>
          <p className="mt-3">
            Questions about this policy: use the contact form on this site.
            Veank Agency is part of Veank.
          </p>
        </section>
        <p className="text-sm">Last updated: June 2026.</p>
      </div>
    </div>
  );
}
