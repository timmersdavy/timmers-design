# Demo: Brasserie Santa Lucia — vervanging voor de Odoo-website

Gebouwd als alternatief voor de huidige site op `timmersdesign1.odoo.com`, die nog grotendeels
uit Odoo-templatetekst bestaat (zie `klanten/santa-lucia-odoo-todo.md` voor de volledige lijst
met bevindingen). Doel: aan Marina tonen als tweede optie naast "Odoo-site opkuisen".

**Alles tussen `[haakjes]` is placeholder** en moet ingevuld worden met de echte gegevens van
Santa Lucia: adres, telefoonnummer, openingsuren, volledige menukaart, foto's en het verhaal
van de zaak. De banner bovenaan de pagina maakt dat ook voor Marina meteen duidelijk — die
banner moet eruit zodra de site live gaat.

Wél al correct/bruikbaar:
- Naam: Brasserie Santa Lucia
- E-mail: `info@brasseriesantalucia.be` (te bevestigen)
- Enkele prijzen uit de oorspronkelijke Odoo-site, omgezet naar correcte euro's (aperitief,
  cappuccino, huiswijn)

Bewust weggelaten in plaats van verzonnen:
- Reviews (geen nepreviews zoals "Jane DOE")
- Foto's (CSS-vlakken met "Foto volgt", geen stockfoto's — zie DESIGN.md, harde constraint 1)
- Team/over ons in detail (enkel een invulvak voor het echte verhaal)

## Structuur

- Hero-type: editorial — eyebrow, grote serifkop (Fraunces), praktische info (adres/uren/
  toegankelijkheid) meteen daaronder.
- Navigatie: geen topbar. Single-scroll met een sticky reserveer-knop onderaan, die verdwijnt
  zodra het contactformulier in beeld komt.
- Sectievolgorde: Hero · Menukaart · Sfeer · Praktisch · FAQ · Contact/Reservatie.
- Kleuren: terracotta `#9A3324` / `#6F2116`, goud-accent `#C9982E`, crème-canvas `#F6EAD6`.
- Typografie: Fraunces (koppen), Inter (lopende tekst).

## Voor het live gaat

1. Alle `[placeholders]` vervangen met echte gegevens.
2. `tel:+32000000000`-links overal vervangen door het echte nummer.
3. `YOUR_FORM_ID` in `index.html` vervangen door een echt Formspree-formulier.
4. De `.proefbanner` bovenaan verwijderen.
5. Foto's toevoegen (vervang de `.vlak`-elementen in de sfeer-sectie).
6. Testen op 390 px, 820 px en 1440 px.

## Vergelijking met de Odoo-site

Zie `klanten/santa-lucia-odoo-todo.md` voor de volledige bevindingenlijst van de huidige
Odoo-site. Deze demo lost automatisch op: geen fake telefoonnummer/e-mail, geen dollar-tekens,
geen nepreviews, geen lege privacypagina (nog toe te voegen als aparte pagina indien deze route
gekozen wordt), en een navigatie/menu die wél klopt.
