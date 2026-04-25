# Design Brief — Medcom AS

## Customer Voice
Medcom AS er et webbyrå som primært selger nettsider til bedrifter. De ønsker å posisjonere seg sterkere på nettside-utvikling og introdusere en ny tjeneste: AIO (AI-optimalisert SEO). Kunden ønsker en mer profesjonell, attraktiv stil rettet mot bedriftsmarkedet.

Egne ord fra kunden:
- "vi fokuserer mest på nettsider, og vil selge dette"
- "implementere en ny tjeneste som er seo, altså aio"
- "dette vil vi skal komme frem at dette er en ny tjeneste vi tilbyr"
- "vi ønsker å beholde informasjon som står på nettsiden"
- "mer profesjonell stil som virker mer attraktivt for bedrifter"
- "vinkle nettsiden til mer av utvikling av nettsider"

## Industry
Norsk webbyrå / digital markedsføring. Mål: leads fra bedrifter.

## Target Audience
Norske bedrifter som trenger profesjonelle nettsider og/eller digital markedsføring.

## Palette Decision
**editorial-mono** variant — mørk blå/svart bakgrunn mot lys, neon-aksent.
- bg: `#0D0F1A` (veldig mørk marinblå — tech-presisjon)
- ink: `#F0F2FF` (kjølig hvit)
- brand: `#1A1D2E` 
- accent: `#E8FF47` (neon sitrongul — visuell kontrast, tech-agentur)
- muted: `#6B7280`

Begrunnelse: Mørkt bakgrunnstema signaliserer digital ekspertise og premium. Neon-gul aksent skiller seg kraftig fra norske konkurrenter som bruker blå på hvit.

## Font Pairing
**Bricolage Grotesque** (display) + **Inter Tight** (sans body)
- Bricolage Grotesque: variabel-vekt grotesque, teknisk men karakterfull
- Inter Tight: kompakt og lesbar for brødtekst

## Section Composition (NOT the default 4-card grid sequence)
1. `nav` — sticky, glassmorphism på scroll
2. `hero-typography-only` — stort typografi-hero, ingen stock photo
3. `services-grid-no-icons` — 4 tjenester med tall 01–04, ingen ikoner
4. `weird-thing: aio-reveal` — AIO-tjeneste med interaktiv "before/after" SEO-animasjon
5. `process-numbered-steps` — 01/02/03 prosess: Analyse → Design → Lansering
6. `stats-inline` — 3 statistikker i rad
7. `contact-split-form` — mørk bg, info venstre, kontaktskjema høyre
8. `footer-wordmark`

## Weird Thing Decision
**Interaktiv AIO-demo** (custom) — plassert etter tjeneste-seksjonen.
En side-ved-side sammenligning som animerer live: venstre viser "nettstedet ditt uten AIO" (grå, lav rangeringer), høyre viser "med AIO" (lysende akkorder, rangeringer klatrer). Brukeren kan klikke/hovere for å bytte mellom visningene. Framer-motion drivs typografi-reveal og number-count animasjon.

Begrunnelse: AIO er en ny, ukjent tjeneste for mange norske bedrifter. En visuell demo bygger umiddelbar troverdighet og nysgjerrighet – ingen konkurrent gjør dette.

## 3 Things We'll Do Better Than Competitors
1. **Typografi-hero** i stedet for stock-foto av diverse team — signaliserer design-kompetanse
2. **AIO-demo-seksjonen** — konkretiserer en abstrakt tjeneste på en måte ingen norske webbyrå-sider gjør
3. **Tjenester med numbered grid, no icons** — signaliserer bevisst design-valg vs. default icon-rader

## Copy Rules Applied
- Ingen "skreddersyd", "profesjonell partner", "verdensledende"
- Bruk konkrete ord: "nettsider som rangerer", "synlighet i Google"
- Aktiv stemme: "Vi bygger", "Du får", "Vi optimaliserer"
