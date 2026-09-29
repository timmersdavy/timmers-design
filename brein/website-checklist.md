# Website-checklist — Timmers Design

Elke klantensite of demo voldoet aan deze punten vóór hij verstuurd of live gezet wordt.
Bron: audit Santa Lucia (25/09/2026). Combineer met DESIGN.md (structuur/stijl van demo's).

## 1. Echte gegevens, geen sjabloon
- [ ] Telefoon en e-mail juist. Test `tel:`- en `mailto:`-links op gsm (tekst én link moeten kloppen).
- [ ] Geen gefingeerde gegevens die echt lijken. Onbekend = zichtbaar gemarkeerd (`[invullen]`) of weggelaten.
- [ ] Geen demo-reviews. Geen review van de zaakvoerder zelf. Alleen echte reviews mét toestemming.
- [ ] Nergens sjabloontekst ("Jane DOE", "50.000 bedrijven", "24/7 live chat", "example.com", "555", "San Francisco").
- [ ] Munt overal €, prijzen consequent geschreven.
- [ ] Omschrijvingen kloppen bij het item (geen thee met wijnbeschrijving).

## 2. Branding
- [ ] Eigen logo of wordmark van de klant, geen Timmers Design-logo.
- [ ] Footer: © {jaar} {klantnaam}. Kleine "Website door Timmers Design" mag.
- [ ] Sitenaam en `<title>` = klantnaam + plaats. Favicon aanwezig.
- [ ] Eigen foto's, geen stockfoto's. Elke foto heeft alt-tekst. Foto volgt = duidelijke placeholder.

## 3. Structuur en navigatie
- [ ] Menu bevat minstens: diensten/menukaart, praktisch (uren, adres), contact/afspraak.
- [ ] Geen dode links (footer, social-iconen). Geen "Aanmelden" of loginknop.
- [ ] Sociale iconen linken naar echte pagina's, en "Volg ons" staat maar één keer.
- [ ] Geen sectie die niet bij de sector past ("Diensten" bij een restaurant).
- [ ] Afspraak of reservatie: formulier met enkel nodige velden (naam, contact, datum/uur/personen of bericht). Geen "Bedrijf"/"Onderwerp" bij consumenten.

## 4. Praktische info
- [ ] Openingsuren, adres en kaartlink (Google Maps).
- [ ] Toegankelijkheid vermeld: rolstoel, gelijkvloers, parking, openbaar vervoer.
- [ ] Bij gezondheidszorg: tarieven of terugbetaling correct of bewust weggelaten.

## 5. Wettelijk
- [ ] Privacyverklaring ingevuld (verantwoordelijke + adres + ondernemingsnr., welke gegevens, doel, bewaartermijn, rechten).
- [ ] Cookiebanner enkel als er cookies of analytics zijn. Geen tracking zonder toestemming.
- [ ] Bedrijfsgegevens (naam, adres, ondernemingsnummer, e-mail) vermeld voor de zaak.

## 6. Techniek en afwerking
- [ ] `lang="nl-BE"`, meta viewport, title + description, OG-tags.
- [ ] Getest op 390 px, 820 px en 1440 px. Geen horizontale scroll.
- [ ] Contrast AA, focus-states zichtbaar, `prefers-reduced-motion` gerespecteerd.
- [ ] Formulier getest: bericht komt aan in de juiste mailbox (Formspree-ID ingevuld).
- [ ] SEO: unieke title en description per pagina.
- [ ] Eigen domein gekoppeld, of bewust nog niet (dan vermelden).

## 7. Eindcontrole (zoeken)
Zoek in alle bestanden op: `DOE`, `$`, `example.com`, `555`, `YOUR_`, `Lorem`, `San Francisco`, `TODO`.
Alleen bewust gemarkeerde `[invullen]`-placeholders mogen blijven staan, en die staan in de README van de demo.

## Werkwijze per nieuwe klant
1. Stap 0: vraag eerst op: telefoon, e-mail, adres, uren, dienstenlijst/menu + prijzen, logo, 6–8 foto's, social-links, 2–3 echte reviews (met toestemming), toegankelijkheid, hoe ze afspraken willen ontvangen.
2. Registreer de demo in het demo-register (DESIGN.md) vóór je bouwt.
3. Bouw, loop deze checklist af, test op gsm.
4. Pas daarna offerte sturen (DigiSigner) en Formspree-ID invullen.
