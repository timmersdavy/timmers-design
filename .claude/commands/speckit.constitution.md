---
description: Leg de project-grondwet vast (codekwaliteit, teststandaarden, stijlregels).
---

De gebruiker wil de project-constitution vastleggen of bijwerken. Dit is stap 1
van de Spec-Driven Development workflow (constitution → specify → plan → tasks
→ implement).

Gebruikersinput (kan leeg zijn): `$ARGUMENTS`

## Wat te doen

1. Lees `.specify/memory/constitution.md`. Dit is een template met placeholders
   tussen `[BRACKETS]`.
2. Als de gebruiker input gaf in `$ARGUMENTS`, gebruik die als basis voor de
   principes. Anders: stel gerichte vragen (of leid principes af uit de
   bestaande codebase — kijk naar `index.html`, `css/styles.css`, `js/main.js`,
   `README.md` — voor stijl, kleuren, structuur) om tot 3-5 concrete,
   niet-onderhandelbare principes te komen die passen bij dit project: een
   statische, framework-loze Nederlandstalige bedrijfswebsite (Timmers Design,
   webdesign bureau in België).
3. Vul `.specify/memory/constitution.md` volledig in:
   - Vervang ALLE `[PLACEHOLDER]` tokens door concrete tekst.
   - Elk principe: een korte naam + een harde regel + de motivatie erachter.
   - Vul secties "Stijl & Codekwaliteit", "Teststandaarden", "Workflow" in met
     regels die specifiek zijn voor dit project (geen generieke bla-bla).
   - Zet de datum van vandaag in "Laatst bijgewerkt" en "Aangemaakt"/"Laatst
     gewijzigd", en verhoog de versie (begin bij 1.0.0 als dit de eerste keer is).
4. Toon de gebruiker een korte samenvatting van de vastgelegde principes.
5. Vraag NIET om bevestiging voor het schrijven van het bestand — schrijf het
   direct, dit is een lokaal, reversibel bestand.

Doe dit NIET: geen nieuwe secties/structuur verzinnen buiten het template, geen
technische architectuurkeuzes hier vastleggen (dat is voor `/speckit.plan`).
