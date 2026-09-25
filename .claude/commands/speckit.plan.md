---
description: Maak een technisch implementatieplan (tech stack, architectuur) op basis van de spec.
---

Stap 3 van de Spec-Driven Development workflow. Nu wordt de spec vertaald naar
een technisch plan — nog geen taken, nog geen code.

Extra context/richting van de gebruiker (optioneel): `$ARGUMENTS`

## Wat te doen

1. Voer uit: `.specify/scripts/bash/setup-plan.sh --json`
   Dit geeft `FEATURE_DIR`, `SPEC_FILE`, `PLAN_FILE` en `CONSTITUTION_FILE`
   terug. Faalt dit script (geen spec gevonden), zeg dat de gebruiker eerst
   `/speckit.specify` moet draaien.
2. Lees `SPEC_FILE` en `CONSTITUTION_FILE`.
3. Vul `PLAN_FILE` in:
   - **Constitution Check**: toets de aanpak expliciet tegen elk principe in
     de constitution. Noem afwijkingen expliciet, motiveer waarom (of pas de
     aanpak aan zodat er geen afwijking is).
   - **Tech Stack & Aanpak**: welke concrete bestanden worden aangeraakt
     (bv. `index.html`, `css/styles.css`, `js/main.js`), welke nieuwe
     bestanden nodig zijn, welke externe diensten (bv. Formspree) een rol
     spelen. Blijf binnen de bestaande stack (vanilla HTML/CSS/JS) tenzij de
     constitution of gebruiker expliciet iets anders toelaat.
   - **Architectuur/Structuur**: hoe past dit in de bestaande site-structuur
     (multi-page, gedeelde CSS/JS).
   - **Stappen op hoog niveau**: 3-7 stappen, geen losse micro-taken (dat is
     voor `/speckit.tasks`).
   - **Risico's & Aandachtspunten**: toegankelijkheid, performance, SEO,
     mobiel-gedrag, i18n (NL-talig).
   - **Test-/Verificatieplan**: hoe wordt dit concreet gecontroleerd.
4. Als er `[NEEDS CLARIFICATION]` items in de spec overbleven die de
   technische aanpak echt blokkeren, benoem ze expliciet bovenaan het plan
   in plaats van te gokken.
5. Toon een korte samenvatting en het pad naar `PLAN_FILE`.
