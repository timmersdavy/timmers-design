# Santa Lucia — Odoo-site to-do

Site: https://timmersdesign1.odoo.com
Gecontroleerd: 25 september 2026 (publieke pagina's: start, /contactus, /privacy)
Deadline: vóór het einde van Marina's Odoo-proefperiode (begin oktober)

Werkwijze: log in → ga naar de site → klik rechtsboven op **Bewerken**. Klik op tekst om die aan te passen, klik op een blok om de opties rechts te zien. Vergeet niet op **Opslaan** te klikken.

---

## Bevindingen (volledige lijst)

### 🔴 Placeholder- of fout-inhoud

1. Telefoonnummer bovenaan: `+1 555-555-5556`, een Amerikaans nepnummer.
2. Telefoon in de footer: staat `+32 3 555 55 56`, maar de link belt nog `tel:+1 555-555-5556`.
3. E-mail in de footer: staat `info@brasseriesantalucia.be`, maar de link gaat naar `info@yourcompany.example.com`.
4. Reviews: "Jane DOE – CEO van MijnBedrijf" en "John DOE – CCO van MijnBedrijf" zijn demo-reviews.
5. Derde review: "Iris De Smet – Zaakvoerder van Santa Lucia". Een review van de eigen zaakvoerder is niet geloofwaardig.
6. Valuta door elkaar: Cappuccino `$4.20`, thee `$3.50` / `$3.00`, huiswijn `$5.50`. De rest staat in €.
7. Omschrijvingen kloppen niet: "Jasmijn groene thee" wordt omschreven als *witte wijn*, en "Huiswijn" als *kamillethee*.
8. Wijnsectie: titel is "Ontdek onze wijnen", maar er staan geen wijnen onder.
9. Contactpagina, route: routebeschrijvingen naar *San Francisco* (BART, US-101, Executive Park Blvd).
10. Contactpagina, kaart: "Er moet een adres worden opgegeven om een kaart weer te geven". Geen adres ingevuld.
11. Contactpagina, tekst: "Meer dan 50.000 bedrijven maken gebruik van onze diensten" is demotekst.
12. FAQ op de contactpagina: generieke Odoo-tekst ("24/7 live chat", "partners", enzovoort), past niet bij een brasserie.
13. Privacybeleid: de pagina is **leeg**, alleen de titel staat er. GDPR-probleem.
14. Copyright: "Copyright (C) TimmersDesign" in plaats van Santa Lucia.
15. Logo: TimmersDesign-logo in plaats van dat van Santa Lucia.

### 🟠 Navigatie en structuur

16. Hoofdmenu: alleen "Startpagina". Menukaart, Over ons en Reserveren ontbreken.
17. Footerlinks zonder pagina: "Over ons", "Menukaart", "Diensten" en "Contact & info" zijn geen links.
18. "Diensten" past niet bij een restaurant.
19. Social icons onder "Volg ons" linken nergens naartoe; de kop "Volg ons" staat twee keer.
20. "Aanmelden" in de header: bezoekers hebben geen login nodig, moet weg.
21. Reserveren: "Reserveer een tafel" gaat naar een algemeen contactformulier, geen echte reservatiemodule.
22. Contactformulier: velden "Bedrijf" en "Onderwerp" zijn overbodig voor een reservatie.

### 🟡 Nog te checken of ontbrekende info

23. Stockfoto's: alle beelden komen uit de Odoo-bibliotheek, geen eigen foto's.
24. Openingsuren staan nergens.
25. Adres staat nergens, ook niet voor Google Maps.
26. Menukaart: maar 3 gerechten plus 3 thee/wijn als voorbeeld, echte kaart ontbreekt.
27. Toegankelijkheid: niets over rolstoeltoegankelijkheid of parking.
28. Footer-branding: "Aangeboden door Odoo – Maak een gratis website" staat er nog.
29. Domein: draait nog op `timmersdesign1.odoo.com`, geen eigen domein.
30. Kop "Een culinaire reis vol smaak en charme" is generieke tekst.

Niet gecontroleerd: meta-title en -description, alt-teksten, favicon, cookiebanner, mobiele weergave en laadsnelheid (technische scan liep vast op timeout). Kassa en facturatie zitten in de backend, niet gecontroleerd zonder login.

---

## Stap 0 — Eerst opvragen bij Marina

Zonder deze info kun je de site niet afwerken:

- [ ] Juist telefoonnummer
- [ ] Juist e-mailadres
- [ ] Volledig adres (voor de kaart en routebeschrijving)
- [ ] Openingsuren
- [ ] Volledige menukaart met prijzen (gerechten, dranken, wijnen)
- [ ] Logo van Santa Lucia (liefst png met transparante achtergrond)
- [ ] Eigen foto's: zaak, terras, gerechten (minstens 6–8)
- [ ] Links naar Facebook / Instagram
- [ ] 2–3 echte reviews (bv. van Google) + toestemming om ze te gebruiken
- [ ] Rolstoeltoegankelijk? Parking in de buurt?
- [ ] Hoe wil ze reservaties ontvangen: telefoon, mail of een formulier?

---

## Stap 1 — Contactgegevens (hoogste prioriteit)

- [ ] **Header**: klik op `+1 555-555-5556` → vervang de tekst. Klik daarna op het link-icoon en zet de link op `tel:+32...` (het echte nummer).
- [ ] **Footer**: telefoon → tekst én link aanpassen (nu staat er `+32 3 555 55 56` maar de link belt naar `+1 555-555-5556`).
- [ ] **Footer**: e-mail → de link gaat nu naar `info@yourcompany.example.com`. Zet de link op `mailto:` + het echte adres.
- [ ] **Instellingen → Bedrijven**: vul ook daar naam, adres, telefoon en e-mail van Santa Lucia in (Odoo gebruikt die op sommige plaatsen automatisch).
- [ ] **Test**: klik op je gsm op het nummer en het mailadres en kijk of het juiste nummer/adres opent.

## Stap 2 — Branding

- [ ] **Logo**: klik op het TimmersDesign-logo in de header → vervang door het logo van Santa Lucia.
- [ ] **Footer**: `Copyright (C) TimmersDesign` → `© 2026 Brasserie Santa Lucia`.
- [ ] **Websitenaam**: Website → Configuratie → Instellingen → zet de websitenaam op "Brasserie Santa Lucia" (dat is ook de titel in het browsertabblad).
- [ ] **Favicon**: zelfde instellingenpagina → upload het logo als favicon.

## Stap 3 — Startpagina: demo-inhoud weg

- [ ] **Prijzen**: overal € gebruiken. Nu staan er nog `$4.20`, `$3.50`, `$3.00`, `$5.50`.
- [ ] **Omschrijvingen**: "Jasmijn groene thee" wordt omschreven als witte wijn, "Huiswijn" als kamillethee → herschrijven.
- [ ] **Menublok**: vervang de voorbeeldgerechten door de echte kaart (of een selectie + knop "Bekijk de volledige kaart").
- [ ] **"Ontdek onze wijnen"**: echte wijnen toevoegen of de titel veranderen in bv. "Ontdek onze kaart".
- [ ] **Reviews**: "Jane DOE", "John DOE" en "Iris De Smet – Zaakvoerder van Santa Lucia" verwijderen → vervangen door echte reviews, of het blok helemaal weghalen.
- [ ] **Foto's**: alle stockfoto's vervangen door eigen foto's (klik op een foto → **Vervangen**). Vul bij elke foto een korte omschrijving in (alt-tekst).
- [ ] **Titel**: "Een culinaire reis vol smaak en charme" → iets persoonlijkers, bv. met de naam en de gemeente.
- [ ] **Openingsuren + adres** toevoegen (bv. een blok onderaan de startpagina).

## Stap 4 — Contactpagina (/contactus)

- [ ] **Routebeschrijving**: de tekst over San Francisco (BART, US-101, Bay Trail) weg → vervangen door echte route + parking + toegankelijkheid.
- [ ] **Kaart**: klik op het kaartblok → vul het echte adres in.
- [ ] **"Meer dan 50.000 bedrijven…"** → verwijderen of vervangen door bv. "Reserveer je tafel" + openingsuren.
- [ ] **FAQ "Hulp nodig?"**: alle generieke vragen weg → vervangen door echte vragen (reserveren, groepen, allergieën, terras, parking, rolstoel) of het blok verwijderen.
- [ ] **Formulier**: velden "Bedrijf" en "Onderwerp" weg. Velden toevoegen voor datum, uur en aantal personen.
- [ ] **Formulier testen**: stuur een testbericht en kijk of het in de juiste mailbox binnenkomt.

## Stap 5 — Menu en navigatie

- [ ] **Hoofdmenu** (Website → Site → Menu's bewerken): Startpagina · Menukaart · Over ons · Reserveren/Contact.
- [ ] **Pagina's aanmaken** voor Menukaart en Over ons (Website → + Nieuw → Pagina).
- [ ] **Footer "Menu & info"**: "Over ons", "Menukaart", "Diensten" en "Contact & info" zijn geen links → linken naar de juiste pagina's. "Diensten" weghalen (past niet bij een restaurant).
- [ ] **"Volg ons"** staat twee keer → één keer houden, de social-icoontjes linken naar de echte Facebook/Instagram.
- [ ] **"Aanmelden"** in de header weg: klik op de header → zet de optie voor de aanmeldknop uit.
- [ ] **Zoekbalk** ("Laden... 0 resultaten") weg als die niet nodig is.

## Stap 6 — Privacy (wettelijk verplicht)

- [ ] **/privacy** is leeg. Vul een privacyverklaring in: wie verwerkt de gegevens (Santa Lucia + adres + ondernemingsnummer), welke gegevens (naam, e-mail, telefoon via het formulier), waarvoor (reservaties beantwoorden), hoe lang, en de rechten van de bezoeker (inzage, verwijdering).
- [ ] Check of er cookies of analytics gebruikt worden → zo ja: cookiebanner aanzetten (Website → Configuratie → Instellingen → Cookiebanner).

## Stap 7 — Afwerking

- [ ] **Google-weergave**: per pagina → Site → Optimaliseer SEO → titel + omschrijving invullen (bv. "Brasserie Santa Lucia – [gemeente] | Lunch & diner").
- [ ] **Mobiel**: bekijk elke pagina via het gsm-icoontje in de editor én op je eigen gsm.
- [ ] **Domein**: nu `timmersdesign1.odoo.com`. Een eigen domein (bv. brasseriesantalucia.be) koppelen → check of dat in Marina's abonnement zit.
- [ ] **"Aangeboden door Odoo"** in de footer → kan meestal alleen weg met een betaald abonnement; bespreken met Marina.
- [ ] **Eindcontrole**: alle links aanklikken, geen enkele "DOE", "$", "example.com", "555" of "San Francisco" meer op de site (Ctrl+F op elke pagina).

---

## Niet gecontroleerd (geen toegang)

- Backend: Kassa- en Facturatie-modules, gebruikers, instellingen
- Meta-tags, alt-teksten en laadsnelheid (de technische scan liep vast)
