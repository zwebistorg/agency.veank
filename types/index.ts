export type LeadStatus =
  | "new"
  | "reviewing"
  | "accepted"
  | "declined"
  | "converted";

export interface AgencyLead {
  id: string;
  business_name: string;
  name: string;
  email: string;
  website: string | null;
  monthly_budget: string;
  current_platform: string[] | null;
  primary_goal: string;
  message: string | null;
  status: LeadStatus;
  ip_address: string | null;
  created_at: string;
}

export type AgencyLeadInsert = Omit<
  AgencyLead,
  "id" | "status" | "created_at"
>;
