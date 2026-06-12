"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const metrics = [
  { number: "13", label: "Jeddah districts covered" },
  { number: "24hr", label: "Average response time" },
  { number: "1", label: "Active market: Saudi Arabia" },
  { number: "2", label: "Languages: Arabic and English" },
];

export default function MetricCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % metrics.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  const metric = metrics[index];

  return (
    <div
      className="flex min-h-56 w-full max-w-md flex-col items-start justify-center border-2 border-ag-white bg-ag-surface p-10"
      style={{ boxShadow: "4px 4px 0 #eab308" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <p className="font-mono text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none text-ag-yellow">
            {metric.number}
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
            {metric.label}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
