---
description: Splits het plan op in concrete, uitvoerbare taken.
---

Stap 4 van de Spec-Driven Development workflow. Het plan wordt vertaald naar
een geordende, afvinkbare takenlijst.

## Wat te doen

1. Voer uit: `.specify/scripts/bash/check-prerequisites.sh --json`
   Faalt dit (geen spec.md of plan.md), zeg welke stap eerst nodig is
   (`/speckit.specify` en/of `/speckit.plan`).
2. Lees `SPEC_FILE` en `PLAN_FILE` uit de output.
3. Schrijf `tasks.md` in dezelfde feature-map, gebaseerd op
   `.specify/templates/tasks-template.md`:
   - Elke taak is klein, concreet en zelfstandig verifieerbaar.
   - Verwijs naar exacte bestandspaden (bv. "voeg `<section>` toe aan
     `index.html` na de hero-sectie").
   - Groepeer logisch: Setup, Implementatie, Styling/UI, Gedrag/JS,
     Verificatie — laat lege categorieën weg.
   - Nummer taken doorlopend (T001, T002, ...) in de volgorde waarin ze
     uitgevoerd moeten worden; markeer taken die onafhankelijk van elkaar
     zijn met `[P]` achteraan.
   - Laatste taken zijn altijd verificatie: browsertest (desktop + mobiel),
     toegankelijkheidscheck, controle tegen de succescriteria in `spec.md`.
4. Toon de gebruiker de takenlijst kort samengevat en het pad naar
   `tasks.md`.
5. Implementeer nog NIETS in deze stap — alleen plannen.
