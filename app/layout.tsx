import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.veank.com"),
  title: {
    default:
      "Veank Agency — Performance Marketing. Google Ads, SEO & Paid Social.",
    template: "%s | Veank Agency",
  },
  description:
    "Veank Agency runs Google Ads, Meta Ads, TikTok Ads, SEO and social media for businesses globally. Free audit. Results-first approach.",
  alternates: { canonical: "./" },
  openGraph: {
    siteName: "Veank Agency",
    type: "website",
    url: "https://agency.veank.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veank Agency",
  url: "https://agency.veank.com",
  parentOrganization: {
    "@type": "Organization",
    name: "Veank",
    url: "https://veank.com",
  },
  serviceType: [
    "Google Ads",
    "Meta Ads",
    "TikTok Ads",
    "SEO",
    "Social Media Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ag-black text-ag-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
