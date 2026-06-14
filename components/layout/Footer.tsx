import Link from "next/link";

const serviceLinks = [
  { href: "/services#google-ads", label: "Google Ads" },
  { href: "/services#meta-ads", label: "Meta Ads" },
  { href: "/services#tiktok-ads", label: "TikTok Ads" },
  { href: "/services#seo", label: "SEO" },
  { href: "/services#social-media", label: "Social Media" },
];

const companyLinks = [
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="bg-ag-black">
      <div className="h-[3px] w-full bg-ag-yellow" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-syne text-xl font-bold">
            <span className="text-ag-yellow">Veank</span> Agency
          </p>
          <p className="mt-3 text-ag-muted">We run ads that make money.</p>
          <a
            href="https://veank.com"
            className="mt-3 inline-block text-sm text-ag-muted underline underline-offset-4 hover:text-ag-yellow"
          >
            A Veank venture — veank.com
          </a>
        </div>
        <nav aria-label="Services">
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ag-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
            Company
          </p>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ag-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="pb-8 text-center text-sm text-ag-muted">
        © 2026 Veank Agency. Part of Veank.
      </p>
    </footer>
  );
}
