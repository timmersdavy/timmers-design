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

## Menukaart via Google Sheets (mini-CMS, optie 3)

De menukaart wordt automatisch opgehaald uit een Google Sheet, zodat Marina zelf gerechten en
prijzen kan aanpassen zonder de code aan te raken. Zie `klanten/santa-lucia-odoo-todo.md` voor de
volledige CMS-vergelijking.

- Sheet: [Santa Lucia - Menukaart](https://docs.google.com/spreadsheets/d/1Mi-yDOgj87VijS2NBZgSMqzhhzT-j9Xs1pTizm9Av1Q/edit)
- Kolommen: `Categorie`, `Naam`, `Beschrijving` (optioneel), `Prijs` (bv. `12.50`), `Tonen` (`ja`/`nee`
  — zet op `nee` om een gerecht tijdelijk van de kaart te halen zonder de rij te verwijderen).
- De site haalt de sheet op via de gviz/CSV-export (`menu-sheet.js`), geen API-key nodig.
- **Belangrijke, nog te nemen stap:** de sheet moet gedeeld staan op "Iedereen met de link kan
  bekijken" (Delen → Algemene toegang → Lezer), anders kan de site de kaart niet ophalen. Marina
  krijgt daarnaast best **Bewerker**-toegang op haar eigen e-mailadres, zodat ze de kaart kan
  aanpassen zonder het hele Google-account te delen.
- Lukt het ophalen niet (geen internet, sheet nog niet gedeeld, sheet leeg), dan blijft
  automatisch de statische voorbeeldkaart in `index.html` staan als fallback — bezoekers zien dus
  nooit een lege pagina. Bij het testen verschijnt in dat geval een korte statusregel boven de
  kaart, en een `console.warn` in de browserconsole.
- Prijzen in de sheet mogen met punt of komma (`12.50` of `12,50`), de site toont ze altijd als
  `€ 12,50`.

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
