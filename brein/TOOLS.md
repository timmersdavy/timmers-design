# Tools — Timmers Design

## Boekhouding & CRM
- Dexxter (€217,80/jaar) — facturatie, Peppol actief
- Odoo CRM — 743 leads, gratis "One App Free" plan (overstap naar Standard wordt overwogen)
- Mission app (mission.timmersdesign.be) — lead/klant/offerte CRUD, Supabase + Vercel

## Automatisering (n8n, account timmersdavy.app.n8n.cloud — gedeeld met DaDenk)
- Supabase leads → n8n → WhatsApp (permanent System User token via Meta)
- E-mailverrijkingsworkflow via Serper
- WhatsApp lead-kwalificatiebot: WhatsApp Trigger → Claude API → Odoo CRM (Sender Phone Number ID: 1256339457561179)
- Site Uptime Monitor: elke 30 min, 14 sites, WhatsApp-alerts
- Offerte-automatisering: Gmail Trigger → Claude API → Gmail draft

## Marketing
- Google Ads (€5/dag)
- AdWhispr — gekoppeld aan Meta Ads account voor concurrentie-onderzoek + campagnes
- Trustlocal-profiel (70% compleet)
- klant.review — gepland na VVGT-project

## Site & hosting
- Live productiesite: timmersdesign.be via GitHub Pages repo timmersdavy.github.io
- Demo/portfolio repo timmers-design op Vercel — apart, geen productie
- Financiën: Belfius Business Pack
