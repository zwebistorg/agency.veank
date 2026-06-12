"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  body: string;
  icon: LucideIcon;
  href: string;
};

export default function ServiceCard({
  title,
  body,
  icon: Icon,
  href,
}: ServiceCardProps) {
  return (
    <motion.div
      className="flex flex-col gap-4 border-2 border-ag-white bg-ag-surface p-8"
      style={{ boxShadow: "4px 4px 0 #eab308" }}
      whileHover={{
        y: -2,
        x: -2,
        boxShadow: "6px 6px 0 #eab308",
        borderColor: "#eab308",
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <Icon className="h-8 w-8 text-ag-yellow" strokeWidth={2} aria-hidden />
      <h3 className="font-syne text-xl font-semibold text-ag-yellow">
        {title}
      </h3>
      <p className="text-ag-muted">{body}</p>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ag-yellow hover:text-ag-yellow-hover"
      >
        Learn more <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </motion.div>
  );
}
