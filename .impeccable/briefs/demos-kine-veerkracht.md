# Surface brief: demos/kine-veerkracht/index.html

Scope: één-pagina demo voor een fictieve kinesitherapiepraktijk in Tessenderlo-Ham. Mode: Persuade.
Publiek: (1) kinesitherapeut-prospect die TimmersDesign overweegt, (2) diens patiënt.
Job: prospect denkt "dit toont mijn vak juist"; patiënt begrijpt het traject en vindt praktische info snel.
Actie: afspraak aanvragen via formulier of bellen.
Bewijs: fictieve praktijk, namen en gegevens gelabeld als voorbeeld. Geen reviews/testimonials (niet verzinnen), geen concrete tarief-bedragen (RIZIV-regelgeving, niet verzinnen).
Constraints: DESIGN.md (Apple-geïnspireerd, CSS-art only, statisch, Formspree, één Google Font, reduced-motion). Demo-register: moet structureel verschillen van tandarts-helder.

## Direction contract

THESIS: Kinesitherapie is een traject, geen los consult — de hero toont dat traject letterlijk als een tijdlijn die meebeweegt met de scroll, in plaats van een statisch beeldobject zoals bij de tandarts-demo.
OWN-WORLD: Warm neutraal canvas (zand/mos), één salie-groen (#5B7A63) als sectorkleur, terracotta-accent (#C97C5D) spaarzaam voor CTA-nadruk. Figtree als display- en bodyfont (rond, warm, geen herhaling van Bricolage Grotesque). Radius 16px, geen scherpe hoeken, lijnen die "bewegen" (gebogen paden i.p.v. rechte hairlines).
STORY: Bezoeker scrollt door de hero en ziet het traject (intake → behandeling → herstel) zich opbouwen. Daarna specialisaties, team, praktische info, tarieven/terugbetaling, FAQ, contact.
FIRST VIEWPORT: Klassieke sticky topbar met blur (geen zwevende pill — dat is het handelsmerk van de tandarts-demo). Hero: korte kop + ondertitel, daaronder een horizontale tijdlijn (desktop) / verticale tijdlijn (mobiel) met 3 fases; een voortgangslijn tekent zich terwijl je scrollt (stroke-dashoffset), gestuurd door IntersectionObserver, één keer per fase.
FORM: Hero-type 7 (verticale tijdlijn als hero) uit DESIGN.md, positie in de eigen lijst: eerste keuze na uitsluiting van hero-type 2 (al gebruikt); seed key: geen (launcher niet beschikbaar in deze sessie, handmatig gekozen). Navigatie: klassieke top-bar met blur. Volgorde: Hero(tijdlijn) · Specialisaties · Team · Praktisch · Tarieven & terugbetaling · FAQ · Contact — geen apart "Eerste afspraak"-blok (zit al in de hero-tijdlijn), geen Reviews (niet verzinnen).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

Signature interaction: scroll-gestuurde tijdlijn in de hero — elke fase krijgt kleur en de verbindingslijn vult zich, één keer, niet herhaald bij terugscrollen.
Onbeslist: echte praktijknaam/adres (fictief, gelabeld); foto's (placeholders gelabeld).
