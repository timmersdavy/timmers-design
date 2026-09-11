# Surface brief: demos/tandarts-helder/index.html

Scope: één-pagina demo-website voor een fictieve tandartspraktijk in Ham (Limburg). Mode: Persuade.
Publiek: (1) de tandarts-prospect die TimmersDesign overweegt, (2) diens patiënt op smartphone.
Job: prospect denkt "dit kan de mijne zijn"; patiënt vindt wat/waar/wanneer/bellen in seconden.
Actie: afspraak aanvragen via formulier of bellen.
Bewijs: geen echte praktijk. Alle namen, adres, uren en tarieven zijn synthetisch en zo gelabeld in de README. Geen testimonials, geen reviews (niet verzinnen).
Constraints: DESIGN.md (Apple-geïnspireerd, wit, CSS-art only, statisch, Formspree, één Google Font, reduced-motion). Demo-register: hero-type 2 (split met CSS-art object), navigatie = zwevende pill onderaan, volgorde Hero · Praktisch · Behandelingen · Eerste afspraak · Team · FAQ · Contact. Reviews en Tarieven weggelaten.

## Direction contract

THESIS: De praktijk toont haar vak letterlijk: een interactief gebit (odontogram, FDI-nummering) is de hero, geen glimlach-stockfoto en geen "Welkom bij"-banner met drie icoonkaarten.
OWN-WORLD: Wit canvas, één diep teal (#0E7C7B) als enige kleur, mintwit tint (#E8F3F1) voor rustvlakken, ink #1d1d1f. Display in Bricolage Grotesque, body in de systeem-sans. Hairlines van 1px op 8 % zwart, radius 14px op kaartachtige vlakken, 980px op knoppen. Tanden zijn afgeronde witte vormen met een subtiele binnenrand; de actieve tand kleurt teal.
STORY: Bezoeker ziet meteen een gebit en begrijpt: dit is een tandarts die je serieus neemt. Tikken op een tand toont wat er voor die tand gebeurt. Daaronder staat direct het praktische (uren, adres, rolstoeltoegankelijk). Dan behandelingen als specificatie-lijst, dan hoe de eerste afspraak verloopt, dan wie je ziet, dan het formulier.
FIRST VIEWPORT: Desktop: links kolom met wordmark, kop van twee regels (56px), één zin uitleg, primaire knop "Afspraak maken" en telefoonlink. Rechts de dubbele tandboog (boven 16, onder 16) met in het midden een label dat de behandeling van de aangeraakte tand toont. Mobiel: kop, knop, dan de boog op volle breedte met label eronder. Zwevende pill-navigatie onderaan met vier items, "Afspraak" gevuld.
FORM: Hero-type 2 uit DESIGN.md (split met CSS-art object), positie 1 in de eigen lijst; seed key: geen (launcher niet beschikbaar in deze sessie, handmatig gekozen).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Signature interaction: hover/focus/tap op een tand → centrumlabel wisselt met korte cross-fade; bij laden verschijnen de tanden gestaffeld (één keer, 700 ms totaal).
Onbeslist: echte praktijknaam, uren, foto's (placeholders gelabeld).
