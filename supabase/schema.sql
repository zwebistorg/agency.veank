-- Veank Agency — leads table. Run in the Supabase SQL editor.

create table if not exists public.agency_leads (
  id               uuid primary key default gen_random_uuid(),
  business_name    text not null,
  name             text not null,
  email            text not null,
  website          text,
  monthly_budget   text not null,
  current_platform text[],
  primary_goal     text not null,
  message          text,
  status           text not null default 'new'
    check (status in ('new','reviewing','accepted','declined','converted')),
  ip_address       text,
  created_at       timestamptz not null default now()
);

alter table public.agency_leads enable row level security;

create policy "leads_public_insert"
  on public.agency_leads for insert
  with check (true);

create policy "leads_service_select"
  on public.agency_leads for select
  using (auth.role() = 'service_role');

create index agency_leads_status_idx on public.agency_leads (status);
create index agency_leads_created_idx on public.agency_leads (created_at desc);
