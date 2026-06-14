import { notFound } from "next/navigation";
import { createServiceClient } from "@/lib/supabase/server";
import type { AgencyLead } from "@/types";

export const dynamic = "force-dynamic";

const STATUS_COLORS: Record<AgencyLead["status"], string> = {
  new: "text-ag-yellow",
  reviewing: "text-blue-400",
  accepted: "text-green-400",
  declined: "text-red-400",
  converted: "text-emerald-400",
};

type SearchParams = Promise<{ secret?: string }>;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { secret } = await searchParams;
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret || secret !== adminSecret) {
    notFound();
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("agency_leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);
  const leads = (data ?? []) as AgencyLead[];

  if (error) {
    return (
      <div className="p-12 font-mono text-red-400">
        Database error: {error.message}
      </div>
    );
  }

  const counts = leads.reduce(
    (acc, l) => {
      acc[l.status] = (acc[l.status] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h1 className="font-syne text-3xl font-bold uppercase">
        Leads <span className="text-ag-yellow">Admin</span>
      </h1>

      {/* Summary counts */}
      <div className="mt-8 flex flex-wrap gap-6">
        {Object.entries(counts).map(([status, count]) => (
          <div
            key={status}
            className="border-2 border-ag-border bg-ag-surface px-6 py-4"
            style={{ boxShadow: "4px 4px 0 #eab308" }}
          >
            <p className={`font-mono text-3xl font-bold ${STATUS_COLORS[status as AgencyLead["status"]] ?? "text-ag-white"}`}>
              {count}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-ag-muted">
              {status}
            </p>
          </div>
        ))}
      </div>

      {/* Leads table */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-ag-yellow text-left">
              {["Date", "Business", "Name", "Email", "Budget", "Goal", "Status", "Platforms"].map(
                (h) => (
                  <th
                    key={h}
                    className="pb-3 pr-6 text-xs font-semibold uppercase tracking-widest text-ag-muted"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-ag-border hover:bg-ag-surface"
              >
                <td className="py-4 pr-6 font-mono text-xs text-ag-muted whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                </td>
                <td className="py-4 pr-6 font-semibold">{lead.business_name}</td>
                <td className="py-4 pr-6">{lead.name}</td>
                <td className="py-4 pr-6 text-ag-muted">{lead.email}</td>
                <td className="py-4 pr-6 text-ag-muted whitespace-nowrap">{lead.monthly_budget}</td>
                <td className="py-4 pr-6 text-ag-muted">{lead.primary_goal}</td>
                <td className={`py-4 pr-6 font-semibold uppercase text-xs tracking-wide ${STATUS_COLORS[lead.status]}`}>
                  {lead.status}
                </td>
                <td className="py-4 text-ag-muted text-xs">
                  {lead.current_platform?.join(", ") ?? "—"}
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={8} className="py-12 text-center text-ag-muted">
                  No leads yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {lead_messages(leads)}
    </div>
  );
}

function lead_messages(leads: AgencyLead[]) {
  const withMessage = leads.filter((l) => l.message);
  if (withMessage.length === 0) return null;
  return (
    <div className="mt-16">
      <h2 className="font-syne text-xl font-bold uppercase">
        Messages <span className="text-ag-yellow">({withMessage.length})</span>
      </h2>
      <div className="mt-6 space-y-4">
        {withMessage.map((lead) => (
          <div
            key={lead.id}
            className="border-2 border-ag-border bg-ag-surface p-6"
          >
            <p className="font-semibold text-ag-yellow">{lead.business_name}</p>
            <p className="mt-1 text-xs text-ag-muted">{lead.email}</p>
            <p className="mt-3 text-ag-white">{lead.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
