# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Statische HTML/CSS met minimale vanilla JS. Geen framework, geen build-stap. Gehost op GitHub Pages. Contactformulieren via Formspree.

## Users

Lokale KMO's en vrije beroepen in Limburg (België): tandartsen, kinesitherapeuten, aannemers, zelfstandigen. Weinig tot geen technische kennis. Ze beoordelen een website op gevoel: vertrouwen, professionaliteit, uitstraling.

Secundaire gebruiker: de eindklant van die ondernemer (patiënt, opdrachtgever), vaak op smartphone, die snel wil weten wat, waar, wanneer en hoe contact opnemen.

## Product Purpose

TimmersDesign is een webdesign-studio. De sector-demo's zijn kant-en-klare, professionele voorbeeldwebsites per beroepsgroep. Een prospect ziet in één oogopslag een site die "de zijne" kan zijn. Succes = de prospect neemt contact op en wordt betalende klant.

## Positioning

Een studio uit de eigen regio die een afgewerkte, sectorspecifieke site toont vóór er betaald wordt, in plaats van een generieke portfolio of template. Elke demo is structureel uniek gebouwd, geen thema-variant.

## Operating Context

- Demo's worden getoond in een verkoopgesprek (schermdeling, tablet, telefoon) en gedeeld via link.
- Prospects vergelijken met wat ze kennen: sites van collega's in de regio, templates van Wix/Jimdo.
- Aanbod: Starter €1.100, Groei €1.900, Op Maat op aanvraag. Meerwerk €55/u. BTW-vrijstelling art. 56bis (0 %, verplicht vermeld).
- Eigenaar Davy Timmers werkt face-free; de studio-identiteit steunt op werk, niet op een persoon.

## Capabilities and Constraints

- Geen stockfoto's. Enkel CSS-art, SVG, gradients, typografie. Klantfoto's worden later door de klant geleverd; markeer placeholders duidelijk.
- Elke nieuwe demo moet structureel anders zijn dan de vorige: andere layout, sectievolgorde, hero-type en navigatiepatroon. Zie het demo-register in DESIGN.md.
- Eén CSS-bestand per demo, max. één Google Font-familie, geen externe libraries.
- Relatieve paden (GitHub Pages), `lang="nl-BE"`.
- Contactformulier: Formspree POST, velden naam/e-mail/telefoon/bericht, honeypot, `_subject`.
- Copy in het Nederlands (Vlaams register), "je"-vorm tenzij de sector "u" vraagt.
- Undecided: welke sector de eerste demo krijgt; of demo's een gedeeld basisstylesheet delen of volledig los staan.

## Brand Commitments

- Studio-site (timmersdesign.be) heeft een eigen identiteit: ligne claire, blauw #2B3CC1, oranje #E8922A, paper #F6F3EC, Inter. Demo's nemen die identiteit niet over; ze dragen de identiteit van de fictieve klant.
- Voor demo's is de stijlrichting bindend: premium, strak, Apple-geïnspireerd, veel witruimte, subtiele animaties.
- Kennisbank in `brein/` (bedrijf, aanbod, klanten, stem) is de bron voor feiten en toon.

## Evidence on Hand

- Bestaande studio-site: `index.html`, `services.html`, `portfolio.html`, `faq.html`, `contact.html`, `css/styles.css`.
- Kennisbank: `brein/*.md`.
- Nog geen demo's gebouwd. Geen echte testimonials of klantcases voor demo-sectoren: niet verzinnen, gebruik duidelijk gemarkeerde voorbeeldtekst.

## Product Principles

1. Vertrouwen vóór verrassing: de prospect moet zich herkennen, niet overrompeld worden.
2. Mobiel is de eerste viewport.
3. Elke demo is een eigen wereld, geen recolor.
4. Contact opnemen is op elk scherm binnen één tik bereikbaar.
5. Wat we niet hebben, verzinnen we niet.

## Accessibility & Inclusion

WCAG 2.1 AA als ondergrens: contrast, zichtbare focus, semantische structuur, `prefers-reduced-motion`. Praktijksites vermelden fysieke toegankelijkheid (rolstoel, parking, lift) als vast onderdeel van het blok "Praktisch".
