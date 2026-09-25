---
description: Bouw de daadwerkelijke code op basis van tasks.md.
---

Stap 5, de laatste stap van de Spec-Driven Development workflow: de taken uit
`tasks.md` daadwerkelijk uitvoeren.

Extra instructies van de gebruiker (optioneel, bv. "alleen T001-T003"): `$ARGUMENTS`

## Wat te doen

1. Voer uit: `.specify/scripts/bash/check-prerequisites.sh --json --require-tasks`
   Faalt dit, zeg welke voorgaande stap (`/speckit.specify`, `/speckit.plan`
   of `/speckit.tasks`) eerst nodig is.
2. Lees `SPEC_FILE`, `PLAN_FILE` en `TASKS_FILE`.
3. Loop door de openstaande taken (`- [ ]`) in `tasks.md`, in volgorde
   (respecteer `[P]`-taken als onderling onafhankelijk, maar voer ze niet
   door elkaar uit als dat de leesbaarheid van je acties schaadt):
   - Implementeer de taak precies zoals beschreven, in de genoemde
     bestanden. Houd je aan de conventies in `.specify/memory/constitution.md`
     (stijl, kleuren `#2B3CC1`/`#E8922A`, font Inter, geen frameworks tenzij
     anders afgesproken).
   - Vink de taak af in `tasks.md` (`- [x]`) zodra ze klaar is.
   - Bij verificatietaken (browsertest e.d.): voer uit wat mogelijk is
     (bv. HTML/CSS lint-achtige controle, linkcheck); als een echte
     browsertest niet mogelijk is in deze omgeving, zeg dat expliciet in
     plaats van te doen alsof het getest is.
4. Als een taak fundamenteel conflicteert met de spec of constitution, stop
   en leg dit voor aan de gebruiker in plaats van zelf een aanname te maken.
5. Geef aan het einde een korte samenvatting: welke taken zijn afgerond,
   welke bestanden zijn gewijzigd, en wat (indien iets) nog open staat.
6. Commit/push gebeurt volgens de reguliere git-instructies van deze sessie
   — niet automatisch zonder dat expliciet gevraagd is, tenzij de sessie-
   instructies dat al voorschrijven.
