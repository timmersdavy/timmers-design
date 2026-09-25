---
description: Beschrijf wat je wilt bouwen (requirements, user stories) — nog geen tech-details.
---

Stap 2 van de Spec-Driven Development workflow. De gebruiker beschrijft een
nieuwe feature/wijziging voor de site. Jouw taak: een heldere spec schrijven,
géén technische implementatie bedenken.

Feature-beschrijving van de gebruiker: `$ARGUMENTS`

## Wat te doen

1. Als `$ARGUMENTS` leeg is, vraag de gebruiker eerst kort wat ze willen
   bouwen voor je verdergaat.
2. Voer uit: `.specify/scripts/bash/create-new-feature.sh --json "$ARGUMENTS"`
   Dit maakt een branch `NNN-slug` en `specs/NNN-slug/spec.md` (uit het
   template) aan, en geeft `BRANCH_NAME`, `SPEC_FILE` en `FEATURE_DIR` terug
   als JSON.
3. Open het gegenereerde `SPEC_FILE` en vul het volledig in op basis van de
   feature-beschrijving:
   - **Doel**: één heldere alinea.
   - **User Stories**: concrete stories vanuit het perspectief van de
     websitebezoeker of Davy zelf (beheerder).
   - **Requirements**: genummerde, testbare eisen (REQ-001, REQ-002, ...).
     Beschrijf WAT er moet gebeuren, niet HOE (geen HTML-tags, geen
     bestandsnamen, geen CSS-classes hier).
   - **Out of Scope**: wat bewust niet wordt meegenomen.
   - **Succescriteria**: meetbaar, vanuit gebruikersperspectief.
   - **Open Vragen**: markeer echte onduidelijkheden als
     `[NEEDS CLARIFICATION: vraag]` — verzin geen aannames voor dingen die
     de gebruiker expliciet zou moeten beslissen (bv. prijzen, teksten,
     wettelijke claims).
4. Toon een korte samenvatting van de spec en het pad naar het bestand. Meld
   op welke branch je nu werkt.
5. Ga NIET verder naar planning of implementatie in deze stap.
