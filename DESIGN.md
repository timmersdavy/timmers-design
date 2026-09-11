# DESIGN.md — TimmersDesign demo-sites

Visueel systeem voor de sector-demo's. Productwaarheid staat in PRODUCT.md (Impeccable init).
Lees dit vóór je een nieuwe demo bouwt of een bestaande opwaardeert.

## Product

TimmersDesign is een webdesign-studio voor lokale ondernemers en vrije beroepen in Limburg:
tandartsen, kinesitherapeuten, aannemers, zelfstandigen. Pakketten: Starter (€1.100), Groei (€1.900), Op Maat.

De demo's zijn kant-en-klare sectorwebsites die een prospect direct kan "zien als de zijne".
Elke demo heeft één job: de prospect overtuigen dat dit professioneel, betrouwbaar en klaar is.
Conversie = contactopname via het formulier.

## Doelgroep

- Lokale KMO's en vrije beroepen, 30-60 jaar, weinig tot geen technische kennis.
- Beoordelen op gevoel: vertrouwen, professionaliteit, uitstraling. Niet op features.
- Bezoeken vaak op de smartphone. Mobiel is de eerste viewport, niet de tweede.
- Hun eigen klanten (patiënten, opdrachtgevers) moeten in 5 seconden vinden: wat, waar, wanneer, bellen.

## Toon en stijl

Premium, strak, Apple-geïnspireerd. Clean, veel witruimte, subtiele animaties.

- Rust boven drukte. Eén boodschap per scherm.
- Typografie draagt de persoonlijkheid, niet decoratie.
- Kleur is functioneel: één sectorkleur, één accent, verder neutraal.
- Beweging is een vervolg, geen show: fade/translate bij scroll, hover-states, één orkestreerd moment in de hero.
- Copy in het Nederlands (Vlaams register), kort, concreet, in de "je"-vorm tenzij de sector "u" vraagt (notaris, advocaat).

## Harde constraints

1. **Geen stockfoto's.** Enkel CSS-art, SVG, gradients, geometrie, typografie. Placeholders voor klantfoto's zijn toegestaan als duidelijk gemarkeerde vlakken.
2. **Elke nieuwe demo is structureel anders dan de vorige.** Andere layout, andere sectievolgorde, ander hero-type, ander navigatiepatroon. Niet enkel andere kleuren en tekst. Zie het demo-register hieronder.
3. **Statisch.** HTML + CSS, minimale vanilla JS. Geen frameworks, geen build-stap.
4. **GitHub Pages-compatibel.** Relatieve paden, geen server-side logica.
5. **Formspree** voor elk contactformulier (`action="https://formspree.io/f/FORM_ID"`, method POST).
6. **Toegankelijk.** Semantische HTML, contrast AA, focus-states zichtbaar, `prefers-reduced-motion` gerespecteerd.
7. **Snel.** Eén CSS-bestand per demo, systeemfonts of max. één Google Font-familie, geen externe libs.

## Visueel systeem (basis voor elke demo)

### Kleur
Per demo: één sectorkleur + één accent + neutralen. Definieer als CSS custom properties.

```css
:root {
  --sector: #...;          /* dominante sectorkleur, max. 10 % van het scherm */
  --accent: #...;          /* CTA's en highlights */
  --ink: #1d1d1f;          /* tekst */
  --ink-2: #6e6e73;        /* secundaire tekst */
  --paper: #ffffff;        /* basis */
  --paper-2: #f5f5f7;      /* afwisselende sectie */
  --line: rgba(0,0,0,.08);
}
```

Richtlijnen per sector (uitgangspunt, geen wet):
- Tandarts / medisch: koel, licht, veel wit. Sectorkleur in blauw/groen/teal.
- Kinesitherapie / wellness: warm neutraal, zachte aarde- of salietinten.
- Aannemer / bouw: donker canvas toegestaan, staal-, zand- of oranje-accent.
- Notaris / advocaat / boekhouder: diep donkerblauw of antraciet, één warm accent.

### Typografie
- Display: één karaktervolle familie, per demo anders (bv. Inter Tight, Manrope, Fraunces, DM Serif, Instrument Sans). Gewicht 500-600, letter-spacing -0.02em bij 40 px+.
- Body: systeemstack of dezelfde familie in 400. 17-18 px, line-height 1.5.
- Schaal: 13 / 15 / 17 / 21 / 28 / 40 / 56 / 80 px. Niet meer dan 5 stappen per pagina.

### Spacing en vorm
- Basis 8 px. Secties 96-160 px verticaal op desktop, 64-96 px mobiel.
- Contentbreedte max. 1120 px; tekstkolommen max. 640 px.
- Radius: 12 px (kaarten), 980 px (pills/knoppen). Geen 4 px of 6 px.
- Schaduw alleen op zwevende elementen: `0 8px 30px rgba(0,0,0,.08)`.

### Beweging
- Duur 300-600 ms, easing `cubic-bezier(.2,.7,.2,1)`.
- Scroll-reveal met IntersectionObserver, één keer, `translateY(16px) → 0` + opacity.
- Hero mag één ambient CSS-animatie hebben (gradient-drift, lijn-tekening, tellers). Nooit meer dan één.
- Alles uit onder `@media (prefers-reduced-motion: reduce)`.

## Demo-register (structurele variatie)

Voeg elke nieuwe demo hier toe **vóór** je begint te bouwen. Kies een combinatie die nog niet gebruikt is.
Twee demo's mogen niet dezelfde hero-type + navigatie + sectievolgorde delen.

| Demo | Sector | Hero-type | Navigatie | Sectievolgorde | Signature-element |
|------|--------|-----------|-----------|----------------|-------------------|
| `demos/tandarts-helder` | Tandarts | 2 · split, CSS-art object (interactief gebit, FDI) | Zwevende pill onderaan | Hero · Praktisch · Behandelingen · Eerste afspraak · Team · FAQ · Contact (geen Reviews, geen Tarieven) | Odontogram: hover/tik op een tand toont de behandeling. Teal #0E7C7B, Bricolage Grotesque |
| `demos/kine-veerkracht` | Kinesitherapeut | 7 · verticale/horizontale tijdlijn als hero (traject intake → behandeling → herstel, scroll-gestuurd) | Klassieke sticky topbar met blur | Hero(tijdlijn) · Specialisaties · Team · Praktisch · Tarieven & terugbetaling · FAQ · Contact (geen apart stappen-blok, geen Reviews) | Gebogen SVG-lijn die zich tekent bij scroll; fases lichten op. Salie #5B7A63, terracotta #C97C5D, zand-canvas, Figtree |

### Keuzemenu hero-types
1. Full-bleed typografisch statement, één regel, geen visual.
2. Split: tekst links, CSS-art object rechts (tand, wervelkolom, gevel, balans).
3. Gecentreerde kaart die uit het canvas "zweeft" met achtergrondgradient.
4. Editorial: klein eyebrow, grote serif-kop, meteen daaronder openingsuren/adres als eerste blok.
5. Sticky scroll-hero die tijdens het scrollen inzoomt of van kleur wisselt.
6. Bento-grid boven de vouw: 4-6 tegels met diensten, uren, adres, reviews, CTA.
7. Vertical timeline hero: "zo verloopt je eerste afspraak" als scroll-sequentie.

### Keuzemenu navigatie
- Klassieke top-bar met blur (Apple-stijl).
- Zwevende pill onderaan het scherm (mobile-first).
- Zij-index links (desktop) die op mobiel een bottom-sheet wordt.
- Geen nav: single-scroll met sticky CTA-balk.

### Keuzemenu sectievolgorde (bouwstenen)
Hero · Diensten · Team/Over · Praktisch (uren, adres, parking, toegankelijkheid) · Reviews · Proces/Eerste afspraak · Tarieven · FAQ · Contact.
Wissel de volgorde en laat er minstens twee weg. Praktisch mag boven Diensten staan (medisch), Tarieven mag ontbreken (advocaat), Proces mag de hero zijn (aannemer).

## Stack en conventies

- Map per demo: `demos/<sector>-<naam>/` met `index.html`, `style.css`, eventueel `main.js`.
- Eén `<style>`-bestand, custom properties bovenaan, secties gescheiden met commentaar-headers.
- `<html lang="nl-BE">`, meta viewport, title + description, OG-tags, favicon als inline SVG data-URI.
- Contactformulier: naam, e-mail, telefoon, bericht, honeypot-veld, `_subject` hidden field.
- Test op 390 px (iPhone), 820 px (iPad) en 1440 px vóór commit.

## Wat de studio-site zelf doet (niet kopiëren naar demo's)

De hoofdsite `timmersdesign.be` (`index.html`, `css/styles.css`) gebruikt een eigen identiteit:
ligne claire-stijl, blauw `#2B3CC1`, oranje `#E8922A`, paper `#F6F3EC`, Inter.
Demo's volgen die stijl niet. Ze zijn de identiteit van de fictieve klant, niet van TimmersDesign.
