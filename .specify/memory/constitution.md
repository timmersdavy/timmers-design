# Timmers Design — Project Constitution

**Status**: Actief
**Laatst bijgewerkt**: 2026-09-09

<!--
Dit document is de "grondwet" van het project: niet-onderhandelbare principes
waaraan elk plan (/speckit.plan) en elke implementatie (/speckit.implement)
getoetst wordt. Houd het kort en concreet — geen vage intenties.
-->

## Kernprincipes

### I. Geen frameworks, geen build-stap
De site blijft vanilla HTML5, CSS3 en JavaScript — geen React/Vue/Tailwind-build,
geen bundler, geen npm-afhankelijkheden om te deployen. Elke pagina moet
rechtstreeks als statisch bestand werkbaar zijn (GitHub Pages/eender welke
statische host). Dit houdt hosting, onderhoud en overdraagbaarheid simpel voor
een eenmanszaak.

### II. Nederlandstalig en toegankelijk voor een Belgisch publiek
Alle zichtbare tekst, foutmeldingen en formulierlabels zijn in het Nederlands
(`lang="nl"`). Content is geschreven voor Belgische kmo's als doelgroep — geen
Engelse marketing-jargon zonder vertaling. Formulieren werken met duidelijke,
Nederlandstalige validatieboodschappen (zoals nu al in `js/main.js`).

### III. Consistente branding
Kleuren en typografie liggen vast als CSS custom properties in `:root`
(`--primary-blue: #2B3CC1`, `--accent-orange: #E8922A`, font Inter voor body-
tekst). Nieuwe pagina's/secties hergebruiken deze variabelen in plaats van
nieuwe kleuren of fonts te introduceren, tenzij de gebruiker expliciet om een
merkwijziging vraagt.

### IV. Mobile-first & performance
Elke pagina moet volledig bruikbaar zijn op een smartphone-viewport
(hamburgermenu, geen horizontale scroll, leesbare fontgroottes). Geen zware
externe scripts/libraries zonder duidelijke functionele noodzaak — de site
blijft snel laden op een gemiddelde mobiele verbinding.

### V. Toegankelijkheid is geen extra
Semantische HTML (juiste heading-hiërarchie, `<nav>`, `<header>`, `<form>`
labels), voldoende kleurcontrast, `alt`-teksten op afbeeldingen, en respect
voor `prefers-reduced-motion` (zoals al toegepast in de vertrekbord-animatie
op de portfolio-pagina). Animaties zijn altijd optioneel/afspeelbaar, nooit
functioneel noodzakelijk.

## Stijl & Codekwaliteit
- Semantische HTML5; geen `<div>`-soep waar een semantisch element bestaat.
- CSS via custom properties in `:root` (kleuren, spacing, font-sizes, shadows)
  — geen hardgecodeerde hexwaarden verspreid over losse regels.
- Geen inline `style=""` attributen; styling gebeurt in `css/styles.css`.
- JavaScript blijft vanilla (geen jQuery/frameworks), event listeners via
  `DOMContentLoaded`, defensief coderen tegen ontbrekende DOM-elementen
  (`?.`, null-checks) zoals nu al de praktijk is in `js/main.js`.
- Elke nieuwe pagina volgt dezelfde `<head>`-structuur (meta description,
  Open Graph tags, canonical link) als de bestaande pagina's voor consistente
  SEO.

## Teststandaarden
- Elke feature wordt vóór afronding handmatig getest in een desktop- en een
  mobiele viewport (Chrome devtools volstaat).
- Alle interne links en formulieren (incl. Formspree-integratie) worden
  end-to-end getest: verzenden, succes- en foutmelding zichtbaar maken.
- Nieuwe content wordt gecheckt op correct Nederlands en consistente toon met
  bestaande pagina's.
- Animaties worden getest met "reduce motion" ingeschakeld om te bevestigen
  dat de fallback werkt.

## Workflow
- Specs leven in `specs/NNN-feature-naam/` (spec.md, plan.md, tasks.md).
- Geen implementatie zonder goedgekeurde spec + plan voor niet-triviale
  features; kleine copy-aanpassingen of bugfixes mogen de volledige workflow
  overslaan.

## Governance
Deze constitution overstijgt losse voorkeuren. Wijzigingen gebeuren bewust via
`/speckit.constitution`, met een reden, niet stilzwijgend tijdens implementatie.

**Versie**: 1.0.0 | **Aangemaakt**: 2026-09-09 | **Laatst gewijzigd**: 2026-09-09
