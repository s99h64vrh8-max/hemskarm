# Jarvis hemskärm 4.0 – planeringstavla för kylskåpet (och mobilen)

En enda fil (`index.html`) för en gammal iPad Air 2 (iOS 15, Safari 15). Ingen byggprocess,
inga externa bibliotek. Byggd för liggande läge (1024×768), fungerar stående (768×1024)
och har en egen mobillayout (t.ex. 390×844). Allt är på svenska och ändras direkt på skärmen.

## Nytt i 4.0

- **Räkningar på riktigt** (Hemmet → Räkningar) – gul status ett valfritt antal dagar innan förfallodagen (1, 3, 5 eller 7) och röd när den är försenad. Summa per månad: kvar att betala och betalt, med stapel. **Markera betald** frågar efter datum (och belopp, om det blev ett annat). Återkommande räkningar lägger upp nästa period av sig själva, och engångsräkningar finns också. Tryck igen för att ångra. Försenade och snart förfallna räkningar syns på startskärmen (Dagens Jarvis) och som märke på fliken.
- **Budget i stora drag** (Hemmet → Budget) – mat, räkningar, nöje och övrigt med staplar för använt mot budget, kvar per dag för maten och rött när det går över. Snabb utgift i vyn eller via plusknappen ("ICA 456"), där kategorin gissas. Betalda räkningar räknas in automatiskt. Bläddra mellan månader.
- **Föreslå veckan** (Mat → Veckomeny) – fyller tomma dagar eller planerar om resten av veckan ur receptbanken. Inga upprepningar, inget ni åt nyss, snabbare rätter på vardagar, och det som snart går ut i kylen läggs först (dagen märks "använder …"). Ett tryck lägger ingredienserna i inköpslistan, utom det som redan finns i kylen.
- **Inköpslistan redo för synk** – varje vara har stabilt id, vem som lade till den, när den skapades, ändrades och bockades av. Borttagna varor sparas som gravstenar i 60 dagar. Välj vem som lägger till med avatarerna. Antal kvar per avdelning.
- **Ny flik Vardag** med sex delar:
  - **Sopor & bil** – avfallskalender per kärl (restavfall, matavfall, plast, papper, glas, trädgårdsavfall, grovsopor …), med vem som ställer ut, valfria månader (t.ex. trädgårdsavfall april–november) och kommande datum. Bilen: besiktning, service och däckbyte (påminnelse om vinterdäck i oktober–november och sommardäck i mars–april, enligt svenska regler). Visas i Idag och Dagens Jarvis när det är aktuellt.
  - **Nedräkning** – egna nedräkningar (semester, bröllop …), julafton, nästa högtid och födelsedagar. Varje person kan nu ha en födelsedag (Inställningar → Hushållet). Den närmaste visas på startskärmen, och födelsedagar syns i familjetavlan.
  - **Medicin & växter** – mediciner och vitaminer med tider per person. Varje dos bockas av, och missade doser syns i Dagens Jarvis. Växter med vattningsintervall och knappen "Vattnat".
  - **Var är…?** – var reservnyckeln, passen och julpyntet ligger, med sök. Snabbtillägg: "Passen: dokumentpärmen".
  - **Packlista** – listor från mallar (helg, semester, skidresa, flyg, barnen) att bocka av och börja om.
  - **Gäst-wifi** – QR-kod (egen kodare, ingen extern tjänst) som gästerna skannar med kameran, plus ett stort läge för gäster.
- **Familjetavlan i telefonen** – en rad per dag i stället för ett brett rutnät. Ingen sidledsscroll.
- Startskärmen har ett nytt kort för nedräkningen.

Data från 3.0 (format 4) flyttas över automatiskt till format 5 första gången 4.0 öppnas. Inget försvinner, och den gamla datan sparas orörd som reserv (`hemskarm_v3_reserv_f4`). Gamla "betald"-bockar räknas som betalda.

## Nytt i 3.0

- **Dagens Jarvis** – morgonkort som samlar dagen: kalender, räkningar, mat som går ut, paket, underhåll, röda dagar och en torr kommentar. På kvällen byter det till *Kvällens Jarvis*.
- **Snabbtillägg (+)** – en knapp för allt: inköp, att göra, lapp, kylen, händelse, paket, Till Jarvis och recept.
- **Svensk kalender** – röda dagar, aftnar, flaggdagar (inkl. valdag), klämdagar, sommar-/vintertid, mors/fars dag, kanelbullens dag m.m. Räknas ut för alla år. Namnsdag (Svenska Akademiens almanacka).
- **Hemmet** – räkningar (betald-bock, kvar att betala denna månad), prenumerationer (kr/mån och kr/år, "se över"-markering), underhåll (brandvarnare, filter, däckbyte … med förlopp) och paket (på väg → att hämta → hämtat, med uthämtningskod).
- **Receptbank** – favoriter, senast lagad, "Till menyn" och "Spara i receptbanken" från veckomenyn.
- **Vad ska vi äta?** – Jarvis föreslår en middag, helst med det som snart går ut i kylen och inget ni åt nyss. Välj dag och lägg ingredienserna i inköpslistan.
- **Kylen** – bäst före-datum i ordning, Uppätet/Slängt och en liten månadsstatistik.
- **Familjetavlan** – veckan som rutnät: middag, varje person, båda och hämtning.
- **Sysslor med poäng och sviter** – 1–3 poäng per syssla, veckans ställning och "veckor i rad allt klart".
- **Lappar med avsändare och tid**, plus **Till Jarvis** – meddelanden sparas lokalt och märks "väntar på synk" (riktig synk kommer senare).
- **Kvällsläge och Godnatt-vy** – efter kl. 20 (ändras i Inställningar): i morgon (väder, händelser, sopor att ställa ut, middag), kvällsrutin att bocka av, det som ligger kvar, och "Släck skärmen".
- **Mobillayout och "Den här enheten"** – flikrad längst ner, Mer-meny och plusknapp. Varje enhet kan veta vem som använder den (hälsar med namn och sätter avsändare). Sparas bara på enheten.
- Mjuka animationer som följer inställningen *Rörelse* och systemets "minska rörelse".
- **Fler personer i hushållet** – Inställningar → *Hushållet*: lägg till, byt namn, ändra färg/emoji, flytta upp/ner och ta bort. Varje person kan vara vuxen, barn eller husdjur/annan. Alla färger är ljusa pastellfärger med mörk text, så de klarar kontrastregeln i alla teman.
  - Alla val av "vem" (uppgifter, händelser, inköp, lappar, paket, kylen, Till Jarvis, viktiga datum, *Den här enheten*) visar alla personer. Med exakt två heter det gemensamma valet **Båda**, med fler **Alla**.
  - Sysslor kan växla mellan valfria personer (t.ex. bara barnen). En ny person kommer automatiskt med i sysslor som redan växlar mellan alla. Poäng och svit räknas per person. Husdjur får inga poäng.
  - Familjetavlan får en rad per person plus Alla. Födelsedagar kan kopplas till en person och syns då på deras rad.
  - Tar man bort någon frågar Jarvis vem som ska ta över deras saker (Alla eller en annan person). Inget raderas. Den sista personen kan inte tas bort.
  - Befintlig data flyttas över automatiskt: gamla "me/partner" blir de två första personerna med samma id, så inget i listorna behöver skrivas om och sysslornas växling blir som förut.

Allt från v2 finns kvar (Idag, Vecka, veckomeny → inköp, inköpslista per avdelning, sysslor med rotation,
hämtning, timers med larm, väder, 12 teman, skärmsläckare, nattdämpning, säkerhetskopia).
Data från v2 (och v1) flyttas över automatiskt första gången 3.0 öppnas. v2-datan lämnas orörd som reserv.
Några tydligt märkta exempel (en elräkning, en streamingtjänst, en brandvarnare) läggs in – ta bort dem med
Inställningar → *Ta bort exempel*.

## Vyer

| Vy | Innehåll |
|---|---|
| **Hem** | Klocka, datum, vecka, röda dagar/namnsdag, hälsning. Väder. Nästa händelse. Ikväll äter vi (tärning = förslag). Idag, Dagens Jarvis, Inköp. |
| **Idag** | Att göra, schema, hämtning, veckans sysslor, lappar. Knapp till Godnatt-läget på kvällen. |
| **Vecka** | Kalender (med röda dagar och namnsdagar) eller Familjetavla. Kommande: viktiga datum och helgdagar. |
| **Mat** | Veckomeny, Receptbank och Kylen. |
| **Inköp** | Per avdelning, favoriter, flera varor med komma. |
| **Sysslor** | Poängställning, svit, sysslor per person och hämtning. |
| **Hemmet** | Räkningar & prenumerationer, Budget, Underhåll & paket. |
| **Vardag** | Sopor & bil, Nedräkning, Medicin & växter, Var är…?, Packlista, Gäst-wifi. |
| **Lappar** | Stora lappar och Till Jarvis. |
| **Timer** | Flera timers med namn, larm i helskärm. |
| **Inställningar** | Den här enheten, hushållet (personer), utseende, kalender, skärm & ljud, väder, säkerhetskopia. |

Kontrast: ljus text på mörka och halvmörka ytor, mörk text bara på ljusa/gula ytor.
Alla 12 teman och alla vyer (liggande, stående och mobil) kontrolleras automatiskt:
brödtext minst 7:1, stor text minst 4,5:1, och ingen mörk text på mörk bakgrund.

## Teman (byts automatiskt efter datum)

| Tema | När |
|---|---|
| Nyår (fyrverkerier) | 27 dec – 2 jan |
| Jul & advent (ljusslinga, snö) | första advent – 26 dec |
| Vinter (snö) | 3 jan – 15 mars |
| Alla hjärtans dag | 10–14 feb |
| Påsk | palmsöndagen – annandag påsk (räknas ut) |
| Valborg (brasglöd) | 27 apr – 1 maj |
| Midsommar (blommor, vimplar) | veckan före midsommarafton – midsommarsöndag (räknas ut) |
| Sommar (solnedgång) | 1 juli – 15 aug |
| Höst (löv) | 1 sep – 30 nov |
| Halloween | 25 okt – 1 nov |
| Standard (petrol) | resten av året |

**Semesterläge** (hav, vimplar) går före allt annat. Det slås på i Inställningar.
Rörelsen i bakgrunden kan stängas av om plattan känns seg.

## 1. Få upp sidan på iPaden

Sidan måste hämtas från en webbadress en gång.

**A. Från datorn hemma (enklast att testa)**
1. Kopiera mappen `hemskarm` till datorn.
2. Kör `python3 -m http.server 8017` i mappen.
3. Öppna `http://DATORNS-IP:8017/` i Safari på iPaden.

Nackdel: laddar plattan om sidan medan datorn är avstängd kommer den inte upp.

**B. Gratis webbhotell med https (rekommenderas)**, t.ex. GitHub Pages eller Netlify.
Då aktiveras offline-cachen (`sw.js`) och sidan startar även utan internet.
Listorna ligger aldrig på servern, bara på plattan.

## 2. Lägg till på hemskärmen

Safari → dela-knappen → **Lägg till på hemskärmen**. Starta alltid via ikonen "Jarvis"
(helskärm). **Viktigt:** appen på hemskärmen och Safari-fliken sparar data var för sig.
Lägg till på hemskärmen först och fyll sedan i.

## 3. Låt skärmen vara på

Safari kan inte hålla skärmen vaken på egen hand:
- **Inställningar → Skärm och ljusstyrka → Automatisk låsning → Aldrig**, och ha laddaren i.
- Valfritt: **Hjälpmedel → Guidad åtkomst** (starta med tre tryck på hemknappen) så
  att ingen råkar stänga appen.
- Hemskärmen dämpar sig själv kl. 23–06 (kan stängas av).

## 4. Väder

Välj ort i Inställningar → Väder → sök → tryck på rätt träff. Data kommer från
Open-Meteo (gratis, ingen nyckel) och uppdateras var 30:e minut. Senaste prognosen
sparas. Utan nät visas den med märkningen *offline · klockslag*.

## 5. Timerljud

iPad tillåter ljud först när någon har rört skärmen. Rör skärmen en gång efter start,
eller tryck **Testa ljud** i Inställningar. Ljudet följer plattans volym och tystlägesknapp.
Den blinkande helskärmen visas alltid, även utan ljud.

## 6. Säkerhetskopia

Allt sparas bara på iPaden. Inställningar → **Exportera fil**. Om nedladdning inte
fungerar i helskärmsläge: **Visa som text** → kopiera → klistra in i Anteckningar.
Återställ med **Importera fil** eller **Importera text**.
Data från v2/v1 flyttas över automatiskt första gången 3.0 öppnas. Inställningen *Den här enheten* följer inte med i säkerhetskopian (den gäller bara enheten).

## 7. Dagligt meddelande från Jarvis (förberett)

Sidan letar varje timme efter `dagens.json` bredvid `index.html`. Se `dagens.exempel.json`.
`meddelande` visas under hälsningen, `handelser` läggs in i kalendern och `inkop`
i inköpslistan. Om Jarvis får skriva filen varje morgon där sidan ligger (t.ex. ett
GitHub Pages-förråd), dyker dagens rad upp av sig själv.

## 8. Begränsningar

- Data finns bara på varje enhet. Ingen synk mellan iPad och telefoner än – "Till Jarvis" och avsändare är förberedda för synken.
- Raderar man webbplatsdata, eller tar bort ikonen, försvinner listorna. Ha en säkerhetskopia.
- Timers fortsätter räkna även om sidan laddas om, men iPaden kan inte pipa när skärmen är låst.
- Sysslornas rotation växlar varje vecka. Poängen räknar vem som bockade av, men på en delad skärm är det den som är vald i *Den här enheten* (eller sysslans person).
- Namnsdagarna följer almanackan som den ser ut 2026 (de sex nya namnen från 2027 är inte med). Skollov är inte med – de skiljer sig mellan kommuner.
- Räkningar, prenumerationer och budget är bara påminnelser och egna anteckningar. Inget kopplas till banken.
- Budgeten är i stora drag: en utgift hör till den månad den skrivs in (räkningar till den månad de betalas).
- QR-koden för wifi klarar ungefär 210 tecken (namn + lösenord). Det räcker för vanliga nät.
- Medicinlistan är en avbockningslista, inte en medicinsk tjänst. Den kan inte larma när skärmen är låst.
- Däckpåminnelsen följer de svenska reglerna i stort (vinterdäck 1 dec–31 mars vid vinterväglag, dubbdäck till 15 april). Den vet inte vilket väglag det är där ni bor.
- Inköpslistan är förberedd för synk (id, tidsstämplar, gravstenar), men synken själv (t.ex. Supabase) är inte byggd än.
- Receptförslaget matchar ingredienser på ordstam (t.ex. "laxfilé" ↔ "lax"). Det kan missa ibland.
- Kategorigissningen är en ordlista. Okända varor hamnar i Övrigt och kan flyttas för hand.

## Filer

| Fil | Vad |
|---|---|
| `index.html` | Hela appen (4.0). |
| `v3-index.html`, `v2-index.html`, `v1-index.html` | Tidigare versioner, som reserv. |
| `manifest.webmanifest`, `icon-*.png` | Namn och ikon på hemskärmen. |
| `sw.js` | Offline-cache (bara via https). |
| `dagens.exempel.json` | Format för dagligt meddelande. |
| `src/` | Källdelar som `index.html` sätts ihop av (`cat src/* > index.html`). Behövs inte på plattan. |
| `test/` | Testsidor och skript (funktionstest, kontrastgranskning, skärmdumpar). Behövs inte på plattan. |
| `screens/` | Skärmdumpar (`v4-*.png` för 4.0, `v3-*.png` för 3.0). |
| `demo/` | Demovideo för 4.0 (`hemskarm-v4-demo.mp4` med kontaktark), för 3.0 (`hemskarm-v3-demo.mp4`), tilläggsklipp om fler personer (`hemskarm-v3-personer.mp4`) och kontaktark. |
| `src-v3/`, `test-v3/`, `src-v2/`, `test-v2/` | Källor och tester för tidigare versioner, som reserv. |

## Testläge (på en dator, inte på plattan)

`index.html?datum=2026-12-10&tid=08:00` låtsas att det är ett annat datum. Andra parametrar:
`?tema=midsommar`, `?vy=inkop`, `?saver=1`, `?wx=fixture` (låtsasväder utan nät), `?enhet=telefon`, `?jag=me`,
`?sub=recept` (Mat), `?vy=hemmet&sub=budget`, `?vy=vardag&sub=wifi` och `?vmode=tavla` (Vecka). `test/seed.html?…&fyra=1` ger ett påhittat hushåll med fyra personer.

Tester: starta `python3 -m http.server 8017` i mappen och kör `node test/run-test.js 1024 768`
(även `768 1024` och `390 844`), `node test/audit.js landscape|portrait|phone` (med `FYRA=1` för fyra personer) och `node test/shots.js`.
Ett låtsat datum kan räknas som en ny dag och rensa avbockade uppgifter, så använd det inte på riktig data.
