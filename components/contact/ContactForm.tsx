"use client";

import { useState } from "react";
import { FormField, inputClass, budgets, platforms, goals } from "./fields";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(e.currentTarget);
    const payload = {
      business_name: data.get("business_name"),
      name: data.get("name"),
      email: data.get("email"),
      website: data.get("website") || null,
      monthly_budget: data.get("monthly_budget"),
      current_platform: data.getAll("current_platform"),
      primary_goal: data.get("primary_goal"),
      message: data.get("message") || null,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSubmitting(false);
    if (res.ok) setDone(true);
    else setError("Something went wrong. Please try again or email us directly.");
  }

  if (done) {
    return (
      <div
        className="border-2 border-ag-yellow bg-ag-surface p-10 text-center"
        style={{ boxShadow: "4px 4px 0 #eab308" }}
      >
        <p className="font-syne text-2xl font-bold text-ag-yellow">
          Request received.
        </p>
        <p className="mt-4 text-ag-muted">
          We review every submission and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField label="Business name" name="business_name" required />
      <FormField label="Your name" name="name" required />
      <FormField label="Email" name="email" type="email" required />
      <FormField
        label="Website (optional — helps us review before responding)"
        name="website"
        type="url"
        placeholder="https://"
      />
      <div>
        <label htmlFor="monthly_budget" className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
          Monthly ad budget *
        </label>
        <select id="monthly_budget" name="monthly_budget" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a range</option>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <fieldset>
        <legend className="mb-2 text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
          Current platform
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {platforms.map((p) => (
            <label key={p} className="flex items-center gap-3">
              <input type="checkbox" name="current_platform" value={p} className="h-4 w-4 accent-[#eab308]" />
              {p}
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="primary_goal" className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
          Primary goal *
        </label>
        <select id="primary_goal" name="primary_goal" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a goal</option>
          {goals.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-ag-muted">
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Anything else we should know about your business or current situation."
          className={inputClass}
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-ag-yellow px-6 py-4 text-[0.9375rem] font-semibold uppercase tracking-wide text-ag-black transition-all hover:bg-ag-yellow-hover disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send Your Request"}
      </button>
    </form>
  );
}
