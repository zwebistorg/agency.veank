import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Work With Us",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-syne text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase tracking-[-0.02em]">
        Let&rsquo;s <span className="text-ag-yellow">Talk</span>
      </h1>
      <p className="mt-6 text-lg text-ag-muted">
        Tell us about your business and your ads. We will tell you if we can
        help.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
