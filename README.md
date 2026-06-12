# Veank Agency — agency.veank.com

Performance marketing agency site. Google Ads, Meta Ads, TikTok Ads, SEO and
social media management. Part of Veank — separate from Zwebist.

Design direction: **Tactile Brutalism** — yellow (#EAB308) on near-black,
Syne / DM Sans / DM Mono, thick borders, hard offset shadows, no gradients.

## Stack

- Next.js 16 (App Router) + TypeScript strict
- Tailwind CSS v4 (tokens in `app/globals.css`)
- Framer Motion, lucide-react
- Supabase (leads table only — schema in `supabase/schema.sql`)
- pnpm

## Development

```bash
pnpm install
cp .env.example .env.local   # fill in Supabase keys
pnpm dev
```

The contact form posts to `/api/contact`, which inserts into the
`agency_leads` table using the service-role key. Run
`supabase/schema.sql` in the Supabase SQL editor before testing the form.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key for lead inserts |

## Deploy

Vercel, domain `agency.veank.com`. `pnpm build` must pass with zero errors.
