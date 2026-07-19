# Praktijk aanvraagsysteem — Fase 1

Aanvraag- en opvolgsysteem voor een tandarts-/kinepraktijk.

## Wat zit erin (fase 1)

- `/aanvraag` — publiek contactformulier (naam, telefoon, e-mail, dienst, bericht)
- `/dashboard` — beveiligd overzicht van aanvragen met status (nieuw / ingepland / afgehandeld)
- `/login` — eenvoudige login met 1 gedeeld wachtwoord voor de praktijk

## Stack

- Next.js (App Router) + TypeScript
- Prisma + PostgreSQL
- Tailwind CSS

## Lokaal draaien

1. Zorg voor een PostgreSQL-database en zet de connectiestring in `.env` (zie `.env.example`).
2. `npm install`
3. `npx prisma migrate dev`
4. `npm run dev`
5. Formulier: http://localhost:3000/aanvraag — Dashboard: http://localhost:3000/dashboard

## Environment variabelen

| Variabele | Uitleg |
|---|---|
| `DATABASE_URL` | PostgreSQL-connectiestring |
| `DASHBOARD_PASSWORD` | Wachtwoord om in te loggen op het dashboard |
| `SESSION_SECRET` | Willekeurige lange string om login-sessies te ondertekenen |
