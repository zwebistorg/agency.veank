"use client";

import { useEffect, useState } from "react";

type SidebarItem = { id: string; name: string };

export default function ServicesSidebar({ items }: { items: SidebarItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Services navigation"
      className="sticky top-24 hidden self-start lg:block"
    >
      <ul className="space-y-3 border-l-2 border-ag-border pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`font-syne text-sm font-semibold uppercase tracking-wide transition-colors ${
                active === item.id
                  ? "text-ag-yellow"
                  : "text-ag-muted hover:text-ag-white"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
