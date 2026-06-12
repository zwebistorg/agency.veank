"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-ag-elevated border-b border-ag-border" : "bg-ag-black"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-syne text-xl font-bold">
          <span className="text-ag-yellow">Veank</span>{" "}
          <span className="text-ag-white">Agency</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-syne text-sm font-semibold uppercase tracking-wide text-ag-white hover:text-ag-yellow ${
                pathname === link.href
                  ? "underline decoration-ag-yellow decoration-2 underline-offset-8"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ag-yellow px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-ag-black transition-all hover:shadow-hard-white"
          >
            Get a Free Audit
          </Link>
        </div>

        <button
          className="text-ag-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col justify-between bg-ag-black px-6 py-10 md:hidden">
          <div className="flex flex-col gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-syne text-3xl font-bold uppercase text-ag-white hover:text-ag-yellow"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="bg-ag-yellow px-6 py-4 text-center font-semibold uppercase tracking-wide text-ag-black"
            onClick={() => setOpen(false)}
          >
            Get a Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}
