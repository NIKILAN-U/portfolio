# Nikilan U — Portfolio

Next.js 15 / React 19 / TypeScript / Tailwind portfolio.

## Run locally

```bash
npm install
npm run dev
```

Build for production: `npm run build && npm run start`.

## Before deploying, finish these three things

1. **Resume PDF** — export `resume.tex` (in the parent folder) to PDF via Overleaf, save it as
   `public/resume.pdf`. Until it exists, the Resume section shows a placeholder and the
   Download/View buttons 404.
2. **Contact form email delivery** — the form posts to `/api/contact`. Without an API key it
   falls back to opening the visitor's email client via `mailto:`, which works with zero config.
   To send mail directly instead, sign up for [Resend](https://resend.com) (or swap in any
   provider), then set `RESEND_API_KEY` in a `.env.local` file and in your Vercel project's
   environment variables.
3. **Professional photo** — the hero currently shows a monogram ("NU") in a glass panel instead
   of a photo, since none was provided. Swap the `<span>{profile.initials}</span>` block in
   `src/components/sections/Hero.tsx` for a real `next/image` once you have a headshot.

## Notes on what's real vs. placeholder

- All project, experience, skills, research, and achievement content comes from your resume —
  nothing there is fabricated.
- The GitHub section calls the public GitHub REST API client-side (no token), so it's rate
  limited to 60 requests/hour per visitor IP — fine for a portfolio, but consider proxying
  through a server route with a token if traffic grows. The contribution calendar image is
  served by the public `ghchart.rshah.org` service.
- Client project cards (Rent Around, Medical Tourism Platform) intentionally have no GitHub/demo
  links — that code is confidential under NDA. Featured personal projects link to your GitHub
  profile rather than fabricated repo URLs, since exact repo slugs weren't provided.
- The Google Map embed needs no API key (uses the public `/maps?output=embed` iframe format).

## Deploying to Vercel

```bash
npx vercel
```

Add `RESEND_API_KEY` as an environment variable in the Vercel dashboard if you've set up email
delivery. No other secrets are required.
