import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import { BUDGETS, GOALS, PLATFORMS } from "@/lib/constants";
import { checkRateLimit } from "@/lib/rate-limit";
import type { AgencyLeadInsert } from "@/types";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validate(body: Record<string, unknown>): string | null {
  if (!isNonEmptyString(body.business_name)) return "Business name is required";
  if (!isNonEmptyString(body.name)) return "Name is required";
  if (!isNonEmptyString(body.email) || !/^\S+@\S+\.\S+$/.test(body.email))
    return "A valid email is required";
  if (!isNonEmptyString(body.monthly_budget) || !(BUDGETS as readonly string[]).includes(body.monthly_budget))
    return "Monthly budget is required";
  if (!isNonEmptyString(body.primary_goal) || !(GOALS as readonly string[]).includes(body.primary_goal))
    return "Primary goal is required";
  if (
    body.current_platform != null &&
    (!Array.isArray(body.current_platform) ||
      !body.current_platform.every((p) => typeof p === "string" && (PLATFORMS as readonly string[]).includes(p)))
  )
    return "Invalid platform selection";
  return null;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  const { allowed, retryAfterSec } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(retryAfterSec) } },
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const error = validate(body);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const lead: AgencyLeadInsert = {
    business_name: (body.business_name as string).trim(),
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    website: isNonEmptyString(body.website) ? body.website.trim() : null,
    monthly_budget: body.monthly_budget as string,
    current_platform: Array.isArray(body.current_platform)
      ? (body.current_platform as string[])
      : null,
    primary_goal: body.primary_goal as string,
    message: isNonEmptyString(body.message) ? body.message.trim() : null,
    ip_address: ip === "unknown" ? null : ip,
  };

  try {
    const supabase = createServiceClient();
    const { error: dbError } = await supabase
      .from("agency_leads")
      .insert(lead);
    if (dbError) {
      console.error("Lead insert failed:", dbError.message);
      return NextResponse.json(
        { error: "Failed to save your request" },
        { status: 500 },
      );
    }
  } catch (e) {
    console.error("Contact route error:", e);
    return NextResponse.json(
      { error: "Service unavailable" },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
