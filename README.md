# Blue Vinta Services – Landing Page

Landing page dla Blue Vinta Services (spedycja międzynarodowa i odprawy celne).

Stack:
- Next.js
- TypeScript
- Tailwind CSS
- Vercel

## Development

- Dev uses Webpack (`npm run dev`) to avoid Turbopack hydration mismatch warnings.

## Leads

- Set `MAKE_WEBHOOK_URL` in Vercel environment variables (and locally in `.env`) to point to the Make.com webhook.
- Current Make scenario: Webhook → Google Sheets → Email to `lead@bluevinta.com`.
