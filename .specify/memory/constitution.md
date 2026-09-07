# Timmers Design — Project Constitution

**Status**: Template — vul in via `/speckit.constitution`
**Laatst bijgewerkt**: [DATE]

<!--
Dit document is de "grondwet" van het project: niet-onderhandelbare principes
waaraan elk plan (/speckit.plan) en elke implementatie (/speckit.implement)
getoetst wordt. Houd het kort en concreet — geen vage intenties.
-->

## Kernprincipes

### I. [PRINCIPE NAAM, bv. "Geen frameworks"]
[Concrete regel + korte motivatie. Bv: De site blijft vanilla HTML/CSS/JS
— geen build-stap, geen frontend framework, zodat hosting simpel en snel blijft.]

### II. [PRINCIPE NAAM, bv. "Toegankelijkheid eerst"]
[Regel + motivatie]

### III. [PRINCIPE NAAM, bv. "Mobile-first & performance"]
[Regel + motivatie]

## Stijl & Codekwaliteit
- [Bv: semantische HTML5, BEM-achtige class-namen, geen inline styles]
- [Bv: consistente branding — kleuren #2B3CC1 / #E8922A, font Inter]

## Teststandaarden
- [Bv: elke feature wordt handmatig getest in Chrome + mobiel viewport vóór afronding]
- [Bv: geen broken links, formulieren getest end-to-end]

## Workflow
- Specs leven in `specs/NNN-feature-naam/` (spec.md, plan.md, tasks.md)
- Geen implementatie zonder goedgekeurde spec + plan voor niet-triviale features

## Governance
Deze constitution overstijgt losse voorkeuren. Wijzigingen gebeuren bewust via
`/speckit.constitution`, met een reden, niet stilzwijgend tijdens implementatie.

**Versie**: 0.1.0 | **Aangemaakt**: [DATE] | **Laatst gewijzigd**: [DATE]
